
let x = 0
let y = 0
let t = 0
let h = false
function endless() {
				t = 1
}
function classic() {
				t = 0
}

let butx = document.querySelectorAll('.butx').forEach(function (butt) {
				butt.addEventListener('click', function (e) {
								e.preventDefault()

								if (t == 0) {
												if (window.getComputedStyle(butt).backgroundColor == 'rgb(255, 0, 0)') {
																x = x + 1
																let points = document.querySelector('.points').innerText = x + '/10'
																setTimeout(green, 10)
																setTimeout(offGreen, 50)
																function green() {
																				butt.style.backgroundColor = 'rgb(0, 254, 0, .1)'
																}
																function offGreen() {
																				butt.style.background = 'rgba(0, 0, 0, .2)'
																}
												}
								} else if(t == 1) {
												if (window.getComputedStyle(butt).backgroundColor == 'rgb(255, 0, 0)') {
																x = x + 1
																let points = document.querySelector('.points').innerText = x
																h = true
																setTimeout(green, 10)
																setTimeout(offGreen, 50)
																function green() {
																				butt.style.backgroundColor = 'rgb(0, 254, 0, .1)'
																}
																function offGreen() {
																				butt.style.background = 'rgba(0, 0, 0, .2)'
																}
												}
								}

				})
})
// document.querySelector('.but1').addEventListener('click', function(){ console.log()})
let but1 = document.querySelector('.but1')
let but2 = document.querySelector('.but2')
let but3 = document.querySelector('.but3')
let but4 = document.querySelector('.but4')
let but5 = document.querySelector('.but5')
let but6 = document.querySelector('.but6')
let but7 = document.querySelector('.but7')
let but8 = document.querySelector('.but8')
let but9 = document.querySelector('.but9')
let random = Math.floor(Math.random() * (8 - 0 + 1)) + 0
let mas = [but1,but2,but3,but4,but5,but6,but7,but8,but9]
let ranbut = mas[random]

function color () {
				ranbut.style.backgroundColor = 'red'
}

function color11 () {
				ranbut.style.background = 'rgba(0, 0, 0, .2)'
				if (t == 1) {
								if (h == false) {
												alert('you lose')
												x = 0
								} else {
												hgh()
								}
				}
}
let level = 1000
let level1 = 1500
let flag = 0
function easy() {
				level = 1000
				level1 = 1500
				flag = 1
				flag2 = 0
				if (flag == 1) {
								setInterval(cikl, level1)
				}
}

function normal() {
				level = 800
				level1 = 1300
				flag = 1
				flag2 = 0
				if (flag == 1) {
								setInterval(cikl, level1)
				}
}

function hard() {
				level = 600
				level1 = 1100
				flag = 1
				flag2 = 0
				if (flag == 1) {
								setInterval(cikl, level1)
				}
}
function ultraHard() {
				level = 500
				level1 = 1000
				flag = 1
				flag2 = 0
				if (flag == 1) {
								setInterval(cikl, level1)
				}
}
function cikl() {
				setTimeout(color, 100)
				setTimeout(color11, level)
				random = Math.floor(Math.random() * (8 - 0 + 1)) + 0
				ranbut = mas[random]
				y = y + 1
				if (t == 0) {
								if (y == 11 && x == 10) {
												alert('you win')
								} else if (y == 11) {
												alert('you lose')
								}
				}
}

function hgh() {
				h = false
}