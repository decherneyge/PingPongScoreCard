// Include gulp
var gulp = require('gulp');

var gulpSequence = require('gulp-sequence');


gulp.task('build',function(cb){
    return gulpSequence('clean','scripts','styles', 'html' ,cb);
});