var gulp = require('gulp');

var metadata_component_styles = "node_modules/iiif-metadata-component/dist//iiif-metadata-component.css";
var base_component = "node_modules/base-component/dist/base-component.bundle.js";
var manifold = "node_modules/manifold/dist/manifold.bundle.js";
var oldmanifold = "node_modules/oldmanifold/dist/manifold.bundle.js";
var iiif_metadata_component = "node_modules/iiif-metadata-component/dist/iiif-metadata-component.js";
var jquery_plugins = "node_modules/jquery-plugins/dist/jquery-plugins.js";
var utils = "node_modules/utils/dist/utils.js";
var sanitize = "lib/sanitize.js";
var oldmanifold = "lib/manifold.bundle.1.1.0.js";

gulp.task('movePackagesToJs', function(){
    return gulp
    .src([base_component, manifold, iiif_metadata_component, jquery_plugins, utils, oldmanifold])
    .pipe(gulp.dest('js/'));
});
gulp.task('moveStyles', function(){
    return gulp
    .src([metadata_component_styles])
    .pipe(gulp.dest('styles/'));
});

gulp.task('default',['movePackagesToJs', 'moveStyles'], function(){
});