let masR = []
				for (let i = 0; i < 15; i++) {
								masR.push(Math.floor(Math.random() * (45 - 1 + 1)) + 1)
				}

				for (let i = 0; i < masR.length; i++) {
								for (let j = i + 1; j < masR.length; j++) {
												if (masR[i] == masR[j]) masR[j] = Math.floor(Math.random() * (45 - 1 + 1)) + 1;
								}
				}

				let masW = []
				for (let i = 0; i < 5; i++) {
								masW.push(Math.floor(Math.random() * (45 - 1 + 1)) + 1)
				}

				const int = function (nums1, nums2) {
								let result = []
								let map = nums1.reduce((acc, i) => {
												acc[i] = acc[i] ? acc[i] + 1 : 1
												return acc
								}, {})

								for (let i = 0; i < nums2.length; i++) {
												const current = nums2[i]
												let count = map[current]

												if (count && count > 0) {
																result.push(current)
																map[current] -= 1
												}
								}


								return result
				}
				let masRW = int(masR, masW)


				let td1 = document.querySelector('.td1').innerHTML = masR[0]
				let td2 = document.querySelector('.td2').innerHTML = masR[1]
				let td3 = document.querySelector('.td3').innerHTML = masR[2]
				let td4 = document.querySelector('.td4').innerHTML = masR[3]
				let td5 = document.querySelector('.td5').innerHTML = masR[4]
				let td6 = document.querySelector('.td6').innerHTML = masR[5]
				let td7 = document.querySelector('.td7').innerHTML = masR[6]
				let td8 = document.querySelector('.td8').innerHTML = masR[7]
				let td9 = document.querySelector('.td9').innerHTML = masR[8]
				let td10 = document.querySelector('.td10').innerHTML = masR[9]
				let td11 = document.querySelector('.td11').innerHTML = masR[10]
				let td12 = document.querySelector('.td12').innerHTML = masR[11]
				let td13 = document.querySelector('.td13').innerHTML = masR[12]
				let td14 = document.querySelector('.td14').innerHTML = masR[13]
				let td15 = document.querySelector('.td15').innerHTML = masR[14]
    let ib = 0
				let startBut = document.querySelector('.startBut')
    let restartA = document.querySelector('.restartA')
    let jackpot = document.querySelector('.jackpot')
				const start = function (element) {
        restartA.innerHTML = 'restart'
								let masD = 0
								if (masRW[0]) {
												masD = 1000
								} else {
												masD = 'ничего'
								}

								if (masRW[1]) {
												masD = 2000
								}

								if (masRW[2]) {
												masD = 3000
								}

								if (masRW[3]) {
												masD = 4000
								}
								if (masRW[4]) {
												masD = 10000
												jackpot.innerHTML = 'Jackpot!'
												jackpot.style.fontSize = '35px'
								}
								let cif
								if (masD == 'ничего') {
												cif = 'вы выиграли: ' + masD
								} else {
												cif = 'вы выиграли: ' + masD + '$'
								}

								if (ib == 0) {
												let ss = window.getComputedStyle(element);
												element.style.top = parseInt(ss.getPropertyValue('top')) - 80 + 'px';
												ib = ib + 1
								}

								document.querySelector('.gog').innerHTML = 'выигрышные числа: ' + masRW
								document.querySelector('.gag').innerHTML = cif
								document.querySelector('.gog').style.fontSize = '35px'
								document.querySelector('.gag').style.fontSize = '35px'
				}