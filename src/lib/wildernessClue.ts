function extractWords(text:string) {
    // Regular expression to match word characters only
    let regex = /\b[a-z]+\b/gi;
  
    // Find matches in each line and map to an array
    let words = text.match(regex);
  
    return words;
  }
  