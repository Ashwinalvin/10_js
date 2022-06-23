const text ='My viewers on Twitch are the best!!';
let index=0;
function WriteText(){
    document.body.innerHTML=text.slice(0,index);
    index++;
    if (index>text.length -1)
    {
        index=0;
    }
}
setInterval(WriteText,100);