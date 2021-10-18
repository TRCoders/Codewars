// Disemvowel Trolls

function disemvowel(str) {
    let text = str.replace(/[aeiouAEIOU]/g, '')
    return text;
  }