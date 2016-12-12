var gulp = require('gulp');

gulp.task('thirdparty', function () {
    gulp.src('./node_modules/core-js/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/core-js'));
    gulp.src('./node_modules/@angular/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/@angular'));
    gulp.src('./node_modules/zone.js/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/zone.js'));
    gulp.src('./node_modules/systemjs/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/systemjs'));
    gulp.src('./node_modules/reflect-metadata/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/reflect-metadata'));
    gulp.src('./node_modules/rxjs/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/rxjs'));

    gulp.src('./node_modules/ng2-dragula/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/ng2-dragula'));

    gulp.src('./node_modules/dragula/**/*.js')
        .pipe(gulp.dest('./wwwroot/node_modules/dragula'));

    

});

gulp.task('copy', function () {
    gulp.src('./app/**/*.js')
        .pipe(gulp.dest('./wwwroot/app'));

    gulp.src('./app/**/*.html')        
        .pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.*', ['copy']);
});

gulp.task('default', ['thirdparty', 'copy', 'watch']);