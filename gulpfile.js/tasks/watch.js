var gulp = require('gulp');

gulp.task('watch', ['build'], function(){
   gulp.watch(global.config.src + '/**/*',['build']);
});
