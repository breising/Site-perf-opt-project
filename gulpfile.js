var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('default', function() {
    // place code for your default task here
});



// Define base folders
var src = 'src/';
var dest = 'dist/';
// Include plugins
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');
var htmlmin = require('gulp-htmlmin');
var imageResize = require('gulp-image-resize');
var image = require('gulp-image');

/*
gulp.task('image', function() {
    gulp.src('src/images/')
        .pipe(image())
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('image2', function() {
    gulp.src('src/views/images/')
        .pipe(image())
        .pipe(gulp.dest('dist/views/images/'));
});
*/
gulp.task('imagesize1', function() {
    gulp.src('src/images/**/*')
        .pipe(imageResize({
            width: 300,
            crop: false,
            upscale: false
        }))
        .pipe(gulp.dest('dist/images/'));
});


gulp.task('imagesize2', function() {
    gulp.src('src/views/images/**/*')
        .pipe(imageResize({
            width: 300,
            crop: false,
            upscale: false
        }))
        .pipe(gulp.dest('dist/views/images/'));
});
// Concatenate & Minify JS
gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('js2', function() {
    gulp.src('src/views/js/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('dist/views/js/'));
});

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css/'));
});

gulp.task('css2', function() {
    return gulp.src('src/views/css/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/views/css/'));
});

gulp.task('html2', function() {
    return gulp.src('src/views/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist/views/'));
});

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist/'));
});

gulp.task('images', function() {
    return gulp.src('dist/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            //use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/images/temp/'));
});

gulp.task('images2', function() {
    return gulp.src('dist/views/images/**/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{
                removeViewBox: false
            }],
            //use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/views/images/temp/'));
});

// Watch for changes in files
//.task('watch', function() {
// Watch .js files
//gulp.watch(src + 'js/*.js', ['js']);
// Watch .scss files
//gulp.watch(src + 'css/*.css', ['css']);
// Watch image files
//gulp.watch(src + 'images/**/*', ['images']);
//  gulp.watch(src + '*.html', ['html']);
//});
// Default Task
gulp.task('default', ['images', 'images2', 'imagesize1', 'imagesize2', 'js', 'js2', 'css', 'css2', 'html', 'html2']);