const but1 = document.querySelector('.but1');
const but2 = document.querySelector('.but2');
const but3 = document.querySelector('.but3');
const but4 = document.querySelector('.but4');
const but5 = document.querySelector('.but5');
const but6 = document.querySelector('.but6');
const but7 = document.querySelector('.but7');
const but8 = document.querySelector('.but8');
const but9 = document.querySelector('.but9');
var flag = 0;
let restartA = document.querySelector('.restartA')
let putSymb = function (element) {
	restartA.innerHTML = 'restart'
	if (element.innerText)
		return;

	if (!flag) {
		element.innerText = 'X';
		flag = 1;
	} else {
		element.innerText = '0';
		flag = 0;
	}

	let ss = window.getComputedStyle(element);
				element.style.top = parseInt(ss.getPropertyValue('top')) - 32 + 'px';
				if (but5.innerText == but7.innerText && but5.innerText == but4.innerText && but5.innerText != '') {
								but5.style.backgroundColor = 'red'
								but4.style.backgroundColor = 'red'
								but7.style.backgroundColor = 'red'
				}//

				if (but2.innerText == but8.innerText && but2.innerText == but3.innerText && but2.innerText != '') {
								but2.style.backgroundColor = 'red'
								but3.style.backgroundColor = 'red'
								but8.style.backgroundColor = 'red'
				}//

				if (but1.innerText == but6.innerText && but1.innerText == but9.innerText && but1.innerText != '') {
								but1.style.backgroundColor = 'red'
								but6.style.backgroundColor = 'red'
								but9.style.backgroundColor = 'red'
				}//

				if (but5.innerText == but1.innerText && but5.innerText == but2.innerText && but5.innerText != '')  {
								but1.style.backgroundColor = 'red'
								but5.style.backgroundColor = 'red'
								but2.style.backgroundColor = 'red'
				}//

				if (but3.innerText == but6.innerText && but3.innerText == but7.innerText && but3.innerText != '') {
								but3.style.backgroundColor = 'red'
								but6.style.backgroundColor = 'red'
								but7.style.backgroundColor = 'red'
				}//

				if (but4.innerText == but8.innerText && but4.innerText == but9.innerText && but4.innerText != '') {
								but4.style.backgroundColor = 'red'
								but8.style.backgroundColor = 'red'
								but9.style.backgroundColor = 'red'
				}//

				if (but5.innerText == but3.innerText && but5.innerText == but9.innerText && but5.innerText != '') {
								but5.style.backgroundColor = 'red'
								but3.style.backgroundColor = 'red'
								but9.style.backgroundColor = 'red'
				}//

				if (but4.innerText == but1.innerText && but4.innerText == but3.innerText && but4.innerText != '') {
								but4.style.backgroundColor = 'red'
								but1.style.backgroundColor = 'red'
								but3.style.backgroundColor = 'red'
				}
}











