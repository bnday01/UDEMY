const colorConverter = (code) => {

  //Differentiate between rgb and Hex
  const rgb = new RegExp(/^rgb\(\s*(\d+),\s*(\d+),\s*(\d+)\)/,"i");
  const hex = new RegExp(/#(\w{2})(\w{2})(\w{2})/,"i");
  let match;
  if (code.match(rgb)){
    match = code.match(rgb);
  }
  else if (code.match(hex)){
    match = code.match(hex);
  }
  else {
    return console.log("No HEX/RGB Color Detected.");
  }

  //Extract color from input
  const extract = (color) => ({
    c1:match[1],
    c2:match[2],
    c3:match[3]
  });

  //Evaluate for Hex
  if (code.match(hex)){
    //Convert hex to rgb
    const hexToRgb = (chars) => {
      return parseInt("0x" + chars);
    }
   //reformat color information
    const result = `rgb( ${hexToRgb(extract(code).c1)}, ${hexToRgb(extract(code).c2)}, ${hexToRgb(extract(code).c3)})`;

    return console.log(result);
  }
  //Evaluate for RGB
  else {
    const rgbToHex = (num) => {
     
     //Define character set for conversion to hex
     const chars = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
     
     //Initialize container array
     const newSet = [];
      
     //Compare all hex values to match rgb num
     chars.map(a => {
        return chars.map(b =>{ 
            if (parseInt("0x" + a+b) == num){
              return newSet.push(a+b);
            }
          });
      });
      return newSet[0];
    }
    //Reformat color information
    return console.log(`#${rgbToHex(extract(code).c1)}${rgbToHex(extract(code).c2)}${rgbToHex(extract(code).c3)}`);

  }
	
}

colorConverter("rgb( 4, 255, 0)");
