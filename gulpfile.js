/// <binding />
"use strict";

require = require || function (gulpHelp) { throw new Error("Not implemented"); };

var gulp = require('gulp-help')(require('gulp'));
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task("tasks-local", ["webpack-local"]);
gulp.task("tasks-prod", ["webpack-prod"]);

gulp.task('webpack-local', function (callback) {
    var config = require('./webpack.config');
    webpack(config, function (err, stats) {
        if (err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString(config.stats));
        gutil.log(gutil.colors.green("[webpack-local]: ==> DONE"));
        callback();
    });
});

gulp.task('webpack-prod', function (callback) {  
    var config = require('./webpack.production.config');
    webpack(config, function (err, stats) {
        if (err) {
            gutil.log(gutil.colors.red(err));
            process.exit.bind(process, 1);
        }
        gutil.log("[webpack]", stats.toString(config.stats));
        gutil.log(gutil.colors.green("[webpack-prod]: ==> DONE"));
        callback();
    });
});
