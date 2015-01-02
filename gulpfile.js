var gulp = require('gulp');
var bower = require('gulp-bower');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
gulp.task('browserify', function() {
	return browserify('./src/index.js')
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('build/'));
});
gulp.task('copycode', function() {
	return gulp.src([
		'src/**/*',
		'!src/**/*.js'
	]).pipe(gulp.dest('build/'));
});
gulp.task('bower', function() {
	return bower()
		.pipe(gulp.dest('build/lib/'))
});
gulp.task('build',['browserify','bower', 'copycode']);
gulp.task('default',['build']);
