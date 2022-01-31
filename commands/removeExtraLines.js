// remove spaces
function removeExtraLine(content){
    let contentArr= content.split("\r\n");
    let data=[];
    for(let i=1; i<contentArr.length; i++){
        if(contentArr[i]=="" && (contentArr[i-1]==""  || contentArr[i-1]==null)){
           // console.log("*");
            contentArr[i]=null;
        }    
    }
    for(let i=0; i<contentArr.length; i++){
        if(contentArr[i]!=null){
            data.push(contentArr[i]);
        }
    }
  return data.join("\r\n");
 }

 module.exports = {
     removeAll : removeExtraLine
 }