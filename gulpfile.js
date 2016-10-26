var gulp = require('gulp'); //require gulp package
var sass = require('gulp-sass'); //preprocessing sass

// gulp.task('task name', function() {});


gulp.task('sass', function(){
	return gulp.src('MainChoiceRestaurantBuild/styles/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('MainChoiceRestaurantBuild/styles/css'))
});

gulp.task('watch', function(){
	gulp.watch('MainChoiceRestaurantBuild/styles/scss/*.scss', ['sass']);
});
