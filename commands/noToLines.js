
// Add no. in all the lines of file
function addNoAll(content){                      
    let contentArr = content.split("\r\n");
    for(let i=0; i<contentArr.length; i++){
   
       contentArr[i]= (i+1)+ " "+contentArr[i];
    }
    return contentArr.join('\r\n');
}


module.exports = {
    all : addNoAll,
}