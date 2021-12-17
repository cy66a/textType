const text = [
	"Hello!\n",
	"Welcome to the marathon\n",
	"Join now\n",
	"See you!\n",
  ];
  
  function typeText () {
	let line = 0;
	let count = 0;
	let out = '';
	let htmlOut = document.querySelector('.out');
  
	function typeLine () {
	  // draw
	  let interval = setTimeout(function(){
		out += text[line][count];
		htmlOut.innerHTML = out; 
		count++;
		if (count>= text[line].length) {
		  count = 0;
		  line++;
		  if (line == text.length) {
			clearTimeout(interval);
			return true;
		  }
		}
		typeLine();
	  }, 100);
	}
  
	typeLine ();
  }
  
  typeText();