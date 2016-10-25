/*
 * Copyright (c) Yury Galustov <ygalustov@gmail.com All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

// Sass configuration
var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var spawn = require('child_process').spawn;

gulp.task("sass", function () {
    gulp.src("./scss/*.scss")
        .pipe(sass())
        .on("error", function () {
            // If you want details of the error in the console
            console.log(error.toString());

            this.emit('end');
        })
        .pipe(cleanCSS({ compatibility: 'ie8', debug: true }, function (details) {
            console.log(details.name + " (before/after): " + details.stats.originalSize + "/" + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest("./css"));
});

gulp.task('start-dev', function () {
    var ls = spawn('cmd', ["/c", "npm start"], { stdio: 'inherit' });

    ls.on('close', function (code) {
        console.log('child process exited with code ' + code);
    });

    gulp.watch("./scss/*.scss", ["sass"]);
});