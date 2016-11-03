var gulp = require('gulp'); //require gulp package
var sass = require('gulp-sass'); //preprocessing sass
var browserSync = require('browser-sync').create();
var pug        = require('gulp-pug');

gulp.task('sass', function(){
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({ stream: true}))
});

gulp.task('pug', function(){
	return gulp.src('app/pug/**/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('app'))
		.pipe(browserSync.reload({ stream: true}))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
	gulp.watch('app/pug/**/*.pug', ['pug']);
})

gulp.task('browserSync', function(){
	browserSync.init({
		server: { baseDir: 'app'}
	})
})


// gulp.task('sass',['browserSync'], function(){
// 	return gulp.src('MainChoiceRestaurantBuild/styles/**/*.scss')
// 	.pipe(sass())
// 	.pipe(gulp.dest('MainChoiceRestaurantBuild/styles'))
// 	.pipe(browserSync.reload({
// 		stream: true
// 	}))
// });


// gulp.task('pug', function(){
//   /*
//   *first return some pug files
//   */ 
//   return gulp.src('MainChoiceRestaurantBuild/Partials/_pugFiles/*.pug')
    
//     // pipe or put them into pug itself to have them turn in html files
     
//     .pipe(pug())
//     /*
//     *and then use destination to put them in the file
//     */ 
//     .pipe(gulp.dest('templates'));
// }); 


// gulp.task('watch', ['browserSync', 'sass'], function(){
// 	gulp.watch('MainChoiceRestaurantBuild/styles/scss/*.scss', ['sass']);
// 	gulp.watch('MainChoiceRestaurantBuild/*.html', browserSync.reload);
// 	gulp.watch('MainChoiceRestaurantBuild/**/**/*.pug', ['pug']);
// 	//add images and js when needed
// })

// // gulp.task('task name', function() {});
// gulp.task('browserSync', function(){
// 	browserSync.init({
// 		server: { baseDir: ['MainChoiceRestaurant/templates','templates'] },
// 	})
// })



// //default task to just run using gulp to do all
gulp.task('default', ['browserSync', 'watch', 'pug', 'sass']);