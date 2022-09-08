
var hour = new Date().getHours();

if(hour >=6 && hour <=12){
    alert('Good Morning...!')
    document.body.style.backgroundColor = 'white'
}

else if(hour >12 && hour<=18){
    alert('Good afternoon...!')
    document.body.style.backgroundColor = 'grey'
}

else if(hour >18 ||hour<6){
    alert('Good evening')
    document.body.style.backgroundColor = 'black'
}
