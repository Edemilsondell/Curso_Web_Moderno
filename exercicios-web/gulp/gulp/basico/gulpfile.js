const gulp = require('gulp')

gulp.task('default', () => {
    gulp.start('Copiar', 'fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => {
    gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('fim1!!!')
})

gulp.task('fim2', () => {
    console.log('fim2!!!')
})

