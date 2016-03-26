var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');
var bytediff = require('gulp-bytediff');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var bower = require('gulp-bower');
var ngHtml2Js = require('gulp-ng-html2js');
var minifyHtml = require('gulp-minify-html');



var pkg = {
    paths: {
        js: [
            './src/main/resources/static/newscache/newscache.js',
            //Config modules
            './src/main/resources/static/newscache/config/constants.config.js',
            //service module
            './src/main/resources/static/newscache/service/service.config.js',
            './src/main/resources/static/newscache/service/navbar.service.js',
            './src/main/resources/static/newscache/service/interest.service.js',
            './src/main/resources/static/newscache/service/storyModal.service.js',
            //controller module
            './src/main/resources/static/newscache/controller/controller.config.js',
            './src/main/resources/static/newscache/controller/navbar.controller.js',
            './src/main/resources/static/newscache/controller/interest.controller.js',
            './src/main/resources/static/newscache/controller/storyModal.controller.js',
            //route module
            './src/main/resources/static/newscache/route/route.config.js',
            './src/main/resources/static/newscache/route/interest.routes.js',
            //directive module
            './src/main/resources/static/newscache/directive/directive.config.js',
            './src/main/resources/static/newscache/directive/navbar.directive.js',
            './src/main/resources/static/newscache/directive/back_img.directive.js'
        ],
        html: [
            './src/main/resources/static/newscache/template/denied.html',
            './src/main/resources/static/newscache/template/error.html',
            './src/main/resources/static/newscache/template/login.html',
            './src/main/resources/static/newscache/template/navbar.html',
            './src/main/resources/static/newscache/template/interest.html',
            './src/main/resources/static/newscache/template/storyModal.html'
        ]
    }
};
// Runs bower install
gulp.task('bower', bowerTask);
//To get rid of unneeded bower packages
gulp.task('bower_prune', bowerPruneTask);
//Checks for code quality
gulp.task('lint', lintTask);
//Minifies the javascript
gulp.task('compress', ['lint', 'compress_html'], compressTask);
//Minifies the javascript, but doesn't return.  Dont' use.
gulp.task('compress_dev', ['lint', 'compress_html'], compressDevTask);
gulp.task('compress_html', compressHtmlTask);
//Minifies the javascript and continues watching for changes
gulp.task('watch', watchTask);

function bowerTask() {
    return bower();
}

function bowerPruneTask() {
    return bower({cmd: 'prune'});
}

function lintTask() {
    return gulp.src(pkg.paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
}

function compressTask() {
    runCompress(false);
}

function compressDevTask() {
    runCompress(true);
}

function watchTask() {
    gulp.watch([pkg.paths.js, pkg.paths.html], ['compress_dev']);
}

function compressHtmlTask() {
    gulp.src(pkg.paths.html)
        .pipe(minifyHtml({
            conditionals: true,
            spare: true
        }))
        .pipe(ngHtml2Js({
            moduleName: 'newscache.templates',
            rename: function(templateUrl, templateFile) {
                return 'newscache/template/' + templateUrl;
            }
        }))
        .pipe(concat('partials.min.js'))
        .pipe(bytediff.start())
        .pipe(uglify())
        .pipe(bytediff.stop())
        .pipe(gulp.dest('./src/main/resources/static'));
}

function runCompress(start) {
    var source = pkg.paths.js;

    return gulp.src(source, {base: './src/main/resources/static'})
        .pipe(sourcemaps.init())
        .pipe(concat('all.min.js', {newLine: ';'}))
        .pipe(ngAnnotate({
            add: true
        }).on('error', ngAnnotateError))
        .pipe(bytediff.start())
        .pipe(uglify({mangle: true}).on('error', uglifyError))
        .pipe(bytediff.stop())
        .pipe(sourcemaps.write('./',
            {
                includeContent: false
            }
        ))
        .pipe(gulp.dest('./src/main/resources/static'));

    function uglifyError(e) {
        gutil.log(e);
    }

    function ngAnnotateError(e) {
        gutil.log(e);
    }
}