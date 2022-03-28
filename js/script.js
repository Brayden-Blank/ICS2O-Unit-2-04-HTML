// Created by: Brayden Blank
// Created on: March 2022
// This file contains the JS functions for index.html

'use-strict'
/**
 * This function calculates area of a triangle.
 */
function calculate () {
  //input
  const base = parseInt(document.getElementById('base').value)
  const height = parseInt(document.getElementById('height').value)

  //process
  const area = (base * height) / 2

  //output
  document.getElementById('area').innerHTML = 'The area is: ' + area + ' cm²!'
}
