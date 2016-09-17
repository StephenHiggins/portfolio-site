function main() {

window.setInterval(quoteMachine, 5000  ); //thirty seconds

	function quoteMachine() {
		let quoteArr = $('.quoted')
		// random number generator picks the array element 
		function getRnd(max) {
			min = 0
			
	    	return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		let qL = quoteArr.length -1
		$('#quote-container>p').replaceWith(quoteArr[getRnd(qL)])

		// colour picker
		let colours = ['#FF4848', '#FF68DD', '#800080', '#872187', '#9A03FE', '#3923D6', '#23819C', '#2966B', '#75ECFD', '#4A9586']
		let cL = colours.length -1
		$('#quote-container').parent().css('background-color', colours[getRnd(cL)])
		$('#quote-container>p').css('color', 'white')



						
	}

}

$(document).ready(main)