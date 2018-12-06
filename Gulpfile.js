var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('stylesheets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('stylesheets/css/'))
        .pipe(browserSync.stream());
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("stylesheets/sass/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

//Watch task
gulp.task('default', ['serve']);
