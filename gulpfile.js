var gulp = require('gulp'),
wiredep = require('wiredep').stream,
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-minify-css'),
clean = require('gulp-clean');


//build
gulp.task('build', ['clean'], function () {
	return gulp.src('app/*.html')
	.pipe(useref())
	.pipe(gulpif('*.js', uglify()))
	.pipe(gulpif('*.css', minifyCss()))
	.pipe(gulp.dest('dist'));
});

gulp.task('clean', function () {
	return gulp.src('dist', {read: false})
	.pipe(clean());
});

//bower
gulp.task('plug', function () {
	gulp.src('app/index.html')
	.pipe(wiredep({
		directory : "bower_components"
	}))
	.pipe(gulp.dest('./app'));
});

gulp.task('watch', function(){
	gulp.watch('bower.json', ['bower'])
});