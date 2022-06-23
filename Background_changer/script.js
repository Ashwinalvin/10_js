const col= ['black','green','yellow','purple'];
var count =0;
const tochange = document.getElementById('btn');
function disp(){
    document.body.style.backgroundColor = col[count];
    count = count+1
    if (count==col.length)
    {
        count = 0
    }
}
tochange.addEventListener('click',disp);


