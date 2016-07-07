var gulp = require('gulp')
var Gulp = require('pyramid-gulp')
var Path = require('path')

new Gulp(gulp, {
  src: Path.join(__dirname, 'src'),
  dest: Path.join(__dirname, 'build')
})
