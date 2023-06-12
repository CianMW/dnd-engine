function extractSentences(
    text: string
  ): { min: number; max: number; description: string }[] {
    let sentences: { min: number; max: number; description: string }[] = [];
    let currentMin = 0;
    let currentDescription = "";
    let nextNumberIndex = 0;
    let textToSearch = text;
  
    while (nextNumberIndex >= 0) {
      nextNumberIndex = textToSearch.search(/[0-9]/);
  
      if (nextNumberIndex >= 0) {
        let nextNumberStr = "";
        let i = nextNumberIndex;
  
        while (!isNaN(parseInt(textToSearch.charAt(i)))) {
          nextNumberStr += textToSearch.charAt(i);
          i++;
        }
  
        let nextNumber = parseInt(nextNumberStr);
  
        if (currentMin === 0) {
          currentMin = nextNumber;
          currentDescription += textToSearch.slice(0, nextNumberIndex);
        } else if (nextNumber === currentMin + 1) {
          sentences.push({
            min: currentMin,
            max: currentMin,
            description: currentDescription.trim(),
          });
          currentMin = nextNumber;
          currentDescription = textToSearch.slice(
            nextNumberIndex + nextNumberStr.length
          );
        } else {
          currentDescription += textToSearch.slice(
            0,
            nextNumberIndex + nextNumberStr.length
          );
        }
  
        textToSearch = textToSearch.slice(nextNumberIndex + nextNumberStr.length);
      }
    }
  
    if (currentDescription.trim()) {
      sentences.push({
        min: currentMin,
        max: currentMin,
        description: currentDescription.trim(),
      });
    }
  
    return sentences;
  }
  //extracts strings from a string with a range of numbers e.g. 1-2 A man jumps out and screams
  function extractRangeSentences(
    text: string
  ): { min: number; max: number; description: string }[] {
    let sentences: { min: number; max: number; description: string }[] = [];
    let currentMin = 0;
    let currentMax = 0;
    let currentDescription = "";
    let nextNumberIndex = 0;
    let textToSearch = text;
  
    while (nextNumberIndex >= 0) {
      nextNumberIndex = textToSearch.search(/[0-9]/);
  
      if (nextNumberIndex >= 0) {
        let nextNumberStr = "";
        let i = nextNumberIndex;
  
        while (
          !isNaN(parseInt(textToSearch.charAt(i))) ||
          textToSearch.charAt(i) === "-"
        ) {
          nextNumberStr += textToSearch.charAt(i);
          i++;
        }
  
        let nextNumberParts = nextNumberStr
          .split("-")
          .map((str) => parseInt(str));
        let nextMin = nextNumberParts[0];
        let nextMax = nextNumberParts.length > 1 ? nextNumberParts[1] : nextMin;
  
        if (currentMin === 0) {
          currentMin = nextMin;
          currentMax = nextMax;
          currentDescription += textToSearch.slice(0, nextNumberIndex);
        } else if (nextMin === currentMax + 1) {
          sentences.push({
            min: currentMin,
            max: currentMax,
            description: currentDescription.trim(),
          });
          currentMin = nextMin;
          currentMax = nextMax;
          currentDescription = textToSearch.slice(
            nextNumberIndex + nextNumberStr.length
          );
        } else {
          currentDescription += textToSearch.slice(
            0,
            nextNumberIndex + nextNumberStr.length
          );
        }
  
        textToSearch = textToSearch.slice(nextNumberIndex + nextNumberStr.length);
      }
    }
  
    if (currentDescription.trim()) {
      sentences.push({
        min: currentMin,
        max: currentMax,
        description: currentDescription.trim(),
      });
    }
  
    return sentences;
  }
  