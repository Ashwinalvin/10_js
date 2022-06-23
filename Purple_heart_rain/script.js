function createheart(){
    const heart = document.createElement('div');
    //we have created a div named heart
    heart.innerText = '❤️';
    //we have written contents inside div
    heart.classList.add('heart');
    // this above line is like <div class='heart'>❤️</div>

    document.body.appendChild(heart);



}

setInterval(createheart,300);
setTimeout(
    ()=>{
        heart.remove()
    },5000
)
//this above function will remove heart div from file after 5 seconds


