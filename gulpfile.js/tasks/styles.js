var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');

gulp.task('styles',function(cb){

    return gulpSequence('styles:lib', cb);

});

gulp.task('styles:lib', function(){

   return gulp.src('bower_components/bootstrap/dist/**/*')
        .pipe(gulp.dest(global.config.dest + '/lib/styles/bootstrap'));
})