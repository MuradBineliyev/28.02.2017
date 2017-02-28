function chess(){
	document.write('<div class="wrapper">')
	var white='<div class="white"></div>';
	var black='<div class="black"></div>';
	var color=[white, black];
	for(i=0;i<8;i++){
		document.write('<div class="row">');
		for (j=0; j<8; j++) {
			c=(i+j)%2;
			document.write(color[c]);
		}
		document.write('</div>');
	}
	document.write('</div>');
	
}

chess();
