var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    gulp.src('stylesheets/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('stylesheets/css/'))
        .pipe(browserSync.stream());
});

gulp.task('icons', function() {
    gulp.src('node_modules/@fortawesome/fontawesome-free-webfonts/scss/**.*')
        .pipe(gulp.dest('stylesheets/sass/fontawesome/scss'));

    gulp.src('node_modules/@fortawesome/fontawesome-free-webfonts/webfonts/**.*')
        .pipe(gulp.dest('fonts/fontawesome/webfonts'));
});


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("stylesheets/sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

//Watch task
gulp.task('default', ['serve']);
