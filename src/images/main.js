const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Caminhos simplificados
const paths = {
  sass: 'src/scss/style.scss',
  js: 'src/js/main.js',
  images: 'src/images/**/*',
  distCss: 'dist/css',
  distJs: 'dist/js',
  distImages: 'dist/images'
};

// Compilar SASS
function compileSass() {
  return gulp.src(paths.sass)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.distCss));
}

// Minificar JS
function compressJs() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.distJs));
}

// Otimizar imagens
function compressImages() {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.distImages));
}

// Tarefa padrão
exports.default = gulp.series(compileSass, compressJs, compressImages);
