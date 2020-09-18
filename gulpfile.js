const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const cssnano = require ('cssnano');
const cssvariables = require("postcss-css-variables");
const gulp = require ('gulp');

gulp.task( 'css', ()=>{
    const plugin = [
        autoprefixer({browsers: ['safari 7']}),
        cssvariables()        
    ];
    return gulp.src('./build/static/css/*.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'))
})

gulp.task('default', gulp.series( 'css',( done )=>{
    done();
}))
