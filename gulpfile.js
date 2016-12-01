'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const sysBuilder = require('systemjs-builder');
let tscConfig = require('./tsconfig.json');

const del = require('del');
const isDev = process.env.NODE_ENV != 'production'

const path = {
	tsScripts: 'dev/scripts/**/*.ts',
	css: 'public/css/**/*.css',
	jsScripts: [
		'dev/scripts/js/styles.js',
		'dev/scripts/js/jquery.min.js',
		'dev/scripts/js/jquery.migrate.js',
		'dev/scripts/js/jquery.bxslider.min.js',
		'dev/scripts/js/jquery.magnific-popup.min.js',
		'dev/scripts/js/bootstrap.min.js',
		'dev/scripts/js/jquery.ticker.js',
		'dev/scripts/js/jquery.imagesloaded.min.js',
		'dev/scripts/js/jquery.isotope.min.js',
		'dev/scripts/js/owl.carousel.min.js',
		'dev/scripts/js/retina-1.1.0.min.js',
		'dev/scripts/js/instagram.js',
		'dev/scripts/js/my.scripts.js'
	]
}

gulp.task('del', function() {
	return del('public/scripts');
})

// TypeScript compile
gulp.task('compile', function() {
	return gulp
		.src(path.tsScripts)
		.pipe($.typescript(tscConfig.compilerOptions))
		.pipe(gulp.dest('public/scripts'));
});

/*=============================================>>>>>
= Копируем библиотеки Angular2 =
===============================================>>>>>*/
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
gulp.task('lib:dev:js', function() {
	return gulp
		.src([
			'node_modules/core-js/client/shim.min.js',
			'node_modules/zone.js/dist/zone.js',
			'node_modules/reflect-metadata/Reflect.js',
			'node_modules/systemjs/dist/system.src.js',
			'node_modules/underscore/underscore.js',
			'dev/scripts/systemjs.config.js'
		])
		.pipe($.concat('app.min.js'))
		.pipe(gulp.dest('public/scripts'));
});

//HTML index
gulp.task('index:prod', function() {
	return gulp
		.src('dev/templates/prod.html')
		.pipe($.rename('index.html'))
		.pipe(gulp.dest('public/templates'))
});
gulp.task('index:dev', function() {
	return gulp
		.src('dev/templates/dev.html')
		.pipe($.rename('index.html'))
		.pipe(gulp.dest('public/templates'))
});

//angular2
gulp.task('angular2:prod', gulp.series('compile', 'systemjs.config', 'node_modules', 'bundle:js', 'lib:js', 'index:prod'));
gulp.task('angular2:dev', gulp.series('compile', 'node_modules', 'lib:dev:js', 'index:dev'));
/*= End of Копируем библиотеки Angular2 =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Копируем остальные файлы =
===============================================>>>>>*/

/*----------- JS -----------*/
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
/*----------- CSS -----------*/
gulp.task('css', function() {
	return gulp.src(
			[
				path.css
			]
		)
		.pipe($.cssmin())
		.pipe(gulp.dest('public/css'));
});

/*= End of Копируем остальные файлы =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Отслеживание изменения файлов =
===============================================>>>>>*/

gulp.task('watch', function() {
	gulp.watch(path.tsScripts, gulp.series('compile'));
	gulp.watch(path.jsScripts, gulp.series('js:scripts'));
})

/*= End of Отслеживание изменения файлов =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= Основные команды для запуска =
===============================================>>>>>*/

gulp.task('default', gulp.series('del', 'angular2:dev', 'js:scripts', 'watch'));
gulp.task('build', gulp.series('del', 'angular2:prod', 'js:scripts'));

/*= End of Основные команды для запуска =*/
/*=============================================<<<<<*/

gulp.task("installTypings", function() {
	return gulp.src("./typings.json")
		.pipe($.typings()); //will install all typingsfiles in pipeline.
});
