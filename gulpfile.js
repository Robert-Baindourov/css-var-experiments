const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const cssnano = require ('cssnano');
const gulp = require ('gulp');

gulp.task( 'css', ()=>{
    const plugin = [
        autoprefixer({browsers: ['safari 7']}),        
    ];
    return gulp.src('./build/static/css/*.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'))
})

gulp.task( 'serve', gulp.series( 'css', ()=>{
    gulp.watch("./build/static/css/*.css")
}))

gulp.task('default', gulp.series( 'css',( done )=>{
    done();
}))
