 // Add no. in all the non empty  lines of file
 function addNo(content){                     
    let contentArr= content.split("\r\n");
    let count=1;
    let data = [] 
    for(let i=0; i<contentArr.length; i++){
       if(contentArr[i]!="" && contentArr[i] != null){
       contentArr[i] = count+ " "+contentArr[i] ;
       count++;
      }
    }

    console.log(contentArr);
    return contentArr.join('\r\n');
 }

 module.exports = {
     nonEmpty : addNo
 }