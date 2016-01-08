var gulp = require('gulp');


gulp.task('html', function(){

    return gulp.src(global.config.src + '/**/*.html')
        .pipe(gulp.dest(global.config.dest));
})