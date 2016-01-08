var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var concat = require('gulp-concat');

gulp.task('styles',function(cb){

    return gulpSequence(['styles:lib', 'styles:app'], cb);

});

gulp.task('styles:lib', function(){

   return gulp.src('bower_components/bootstrap/dist/**/*')
        .pipe(gulp.dest(global.config.dest + '/lib/styles/bootstrap'));
});

gulp.task('styles:app', function(){
    return gulp.src(global.config.src + '/styles/**/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest(global.config.dest));
})