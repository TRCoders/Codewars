// Remove consecutive duplicate words

const removeConsecutiveDuplicates = s => { 
    let words = s.split(' ')
    
    for(let i = 0; i< words.length; i++){
        if(words[i] === words[i + 1]){
           words.splice(i, 1);
           i--;
        }
    }

    return words.join(' ')

}
