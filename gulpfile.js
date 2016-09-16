'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
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
    del('public/node_modules');
    del('public/css');
    return del('public/scripts');
})

// TypeScript compile
gulp.task('compile', function() {
    return gulp
        .src(path.tsScripts)
        .pipe($.typescript(tscConfig.compilerOptions))
        .pipe($.jsmin())
        .pipe(gulp.dest('public/scripts'));
});
//CopyNodeModules
gulp.task('angular2', function() {
    return gulp
        .src('node_modules/@angular/**/*')
        .pipe(gulp.dest('public/node_modules/@angular'));
});
gulp.task('rxjs', function() {
    return gulp
        .src('node_modules/rxjs/**/*')
        .pipe(gulp.dest('public/node_modules/rxjs'));
});
gulp.task('core-js', function() {
    return gulp
        .src('node_modules/core-js/**/*')
        .pipe(gulp.dest('public/node_modules/core-js'));
});
gulp.task('zone.js', function() {
    return gulp
        .src('node_modules/zone.js/**/*')
        .pipe(gulp.dest('public/node_modules/zone.js'));
});
gulp.task('reflect-metadata', function() {
    return gulp
        .src('node_modules/reflect-metadata/**/*')
        .pipe(gulp.dest('public/node_modules/reflect-metadata'));
});
gulp.task('systemjs', function() {
    return gulp
        .src('node_modules/systemjs/**/*')
        .pipe(gulp.dest('public/node_modules/systemjs'));
});
gulp.task('systemjs.config', function() {
    return gulp
        .src('dev/scripts/systemjs.config.js')
        .pipe(gulp.dest('public'));
});
gulp.task('node_modules', gulp.series('angular2', 'rxjs', 'core-js', 'zone.js', 'reflect-metadata', 'systemjs', 'systemjs.config'));


//JS subscrip
gulp.task('js:scripts', function() {
    return gulp
        .src(path.jsScripts)
        .pipe($.concat('scripts.js'))
        // .pipe($.jsmin())
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
    gulp.watch(path.tsScripts, gulp.series('compile'));
    gulp.watch(path.fonts, gulp.series('fonts'));
    gulp.watch(path.css, gulp.series('css'));
    gulp.watch(path.jsScripts, gulp.series('js:scripts'));
})

gulp.task('default', gulp.series('del', 'compile', 'node_modules', 'js:scripts', 'css', 'fonts', 'watch'));
gulp.task('build', gulp.series('del', 'compile', 'node_modules', 'js:scripts', 'css', 'fonts'));

gulp.task("installTypings", function() {
    return gulp.src("./typings.json")
        .pipe($.typings()); //will install all typingsfiles in pipeline.
});
