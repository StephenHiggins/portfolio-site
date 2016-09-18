function main() {

quoteMachine()
window.setInterval(quoteMachine, 30000  ); //thirty seconds

	function quoteMachine() {
		let quoteArr = $('.quoted')
		// random number generator picks the array element 
		function getRnd(max) {
			min = 0
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}

		let qL = quoteArr.length -1
		let qtIndex = getRnd(qL)
		let lastQuote
		if (qtIndex === lastQuote) {
			qtIndex = getRnd(qL)
		} 
		$('#quote-container>p').replaceWith(quoteArr[qtIndex])
		lastQuote = qtIndex
		// colour picker
		let colours = ['#FF4848', '#FF68DD', '#800080', '#872187', '#9A03FE', '#3923D6', '#23819C', '#2966B', '#75ECFD', '#4A9586']
		let cL = colours.length -1
		let colIndex = getRnd(cL)
		let lastCol
		if (colIndex === lastCol) {
			colIndex = getRnd(cL)
		}
		$('#quote-container').parent().css('background-color', colours[colIndex])
		$('#quote-container>p').css('color', 'white')
		lastCol = colIndex
	}
}

$(document).ready(main)




//.css('background-color', colours[getRnd(cL)])
