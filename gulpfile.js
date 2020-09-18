const postcss = require ('gulp-postcss');
const autoprefixer = require ('autoprefixer');
const gulp = require ('gulp');

gulp.task( 'css', ()=>{
    const plugin = [
        autoprefixer({browsers: ['safari 7']}),
        cssnano()
    ];
    return gulp.src('./build/css/*.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'))
})

gulp.task( 'serve', gulp.series( 'css', ()=>{
    gulp.watch("./build/css/*.css")
}))

gulp.task('default', gulp.series( 'serve',( done )=>{
    done();
}))
