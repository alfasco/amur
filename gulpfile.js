'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const sysBuilder = require('systemjs-builder');
let tscConfig = require('./tsconfig.json');

const del = require('del');
const isDev = process.env.NODE_ENV != 'production'

const path = {
    tsScripts: 'dev/scripts/**/*.ts',
    css: 'dev/css/**/*.css',
    fonts: 'dev/css/fonts/**/*',
    jsScripts: [
        'dev/scripts/js/jquery.min.js',
        'dev/scripts/js/jquery.migrate.js',
        'dev/scripts/js/jquery.bxslider.min.js',
        'dev/scripts/js/jquery.magnific-popup.min.js',
        'dev/scripts/js/bootstrap.min.js',
        'dev/scripts/js/jquery.ticker.js',
        'dev/scripts/js/jquery.imagesloaded.min.js',
        'dev/scripts/js/jquery.isotope.min.js',
        'dev/scripts/js/owl.carousel.min.js',
        'dev/scripts/js/retina-1.1.0.min.js'
    ]
}

gulp.task('del', function() {
    del('public/css');
    return del('public/scripts');
})

// TypeScript compile
gulp.task('compile', function() {
    return gulp
        .src(path.tsScripts)
        .pipe($.typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('public/scripts'));
});
//Config
gulp.task('systemjs.config', function() {
    return gulp
        .src('dev/scripts/systemjs.config.js')
        .pipe(gulp.dest('public'));
});
//CopyNodeModules
gulp.task('node_modules', function() {
    return gulp
        .src([
            'node_modules/@angular/**/*',
            'node_modules/rxjs/**/*',
            'node_modules/core-js/**/*',
            'node_modules/zone.js/**/*',
            'node_modules/reflect-metadata/**/*',
            'node_modules/systemjs/**/*'
        ], {
            base: "."
        }).pipe(gulp.dest('public'));
});

// Generate systemjs-based builds
gulp.task('bundle:js', function() {
    var builder = new sysBuilder('public', 'public/systemjs.config.js');
    return builder.buildStatic('app', 'public/scripts/app.min.js')
        .then(function() {
            return del(['public/scripts/**/*', 'public/node_modules', '!public/scripts/app.min.js']);
        })
        .catch(function(err) {
            console.error('>>> [systemjs-builder] Bundling failed'.bold.green, err);
        });
});

// Minify JS bundle
gulp.task('lib:js', function() {
    return gulp
        .src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/underscore/underscore.js',
            'public/scripts/app.min.js'
        ])
        .pipe($.concat('app.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest('public/scripts'));
});
//angular2
gulp.task('angular2', gulp.series('compile', 'systemjs.config', 'node_modules', 'bundle:js', 'lib:js'));

//JS subscrip
gulp.task('js:scripts', function() {
    return gulp
        .src(path.jsScripts)
        .pipe($.concat('scripts.js'))
        .pipe($.uglify())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/scripts'));
});
//CSS
gulp.task('css', function() {
    return gulp.src(
            [
                path.css
            ]
        )
        .pipe($.cssmin())
        .pipe(gulp.dest('public/css'));
});
//Fonts
gulp.task('fonts', function() {
    return gulp.src(
            [
                path.fonts
            ]
        )
        .pipe(gulp.dest('public/css/fonts'));
});

gulp.task('watch', function() {
    gulp.watch(path.tsScripts, gulp.series('angular2', 'js:scripts'));
    gulp.watch(path.fonts, gulp.series('fonts'));
    gulp.watch(path.css, gulp.series('css'));
    gulp.watch(path.jsScripts, gulp.series('js:scripts'));
})

gulp.task('default', gulp.series('del', 'angular2', 'js:scripts', 'css', 'fonts', 'watch'));
gulp.task('build', gulp.series('del', 'angular2', 'js:scripts', 'css', 'fonts'));

gulp.task("installTypings", function() {
    return gulp.src("./typings.json")
        .pipe($.typings()); //will install all typingsfiles in pipeline.
});
