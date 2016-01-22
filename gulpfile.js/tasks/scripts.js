var gulp = require('gulp');
var gulpSequence = require('gulp-sequence');
var  concat = require('gulp-concat');

gulp.task('scripts',function(cb){

return gulpSequence('scripts:lib', 'scripts:app', cb);

});

gulp.task('scripts:lib', function(){
    var files = [
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/jquery/dist/jquery.min.js'
    ];

   return gulp.src(files)
        .pipe(gulp.dest(global.config.dest + '/lib/js'));
});

gulp.task('scripts:app', function(){

    var files = [
        global.config.src + '/index.js',
        global.config.src + '/app/filters/**/*.js',
        global.config.src + '/app/services/**/*.js',
        global.config.src + '/app/directives/**/*.js',
        global.config.src + '/app/controllers/**/*.js'

    ];

    return gulp.src(files)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(global.config.dest));

})