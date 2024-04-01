const text = "thisismylonmgstringthatiwanttoreduceintopieces";


    const chunkText = (text, sizeOfChunk) =>{
    const textArr = text.split("");
    console.log(textArr);

    const reducer = (acc,letter,i) => {
        if (i % sizeOfChunk === 0 ){
            acc.push(letter);
        }
        else{
           // console.log(acc);
            acc[acc.length -1] = acc[acc.length-1] + letter;
        }
        return acc;
    }

    return textArr.reduce(reducer, []);
}

console.log(chunkText(text, 4));