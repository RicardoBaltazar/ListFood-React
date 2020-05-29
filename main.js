
//button get started animation
document.querySelector('#btn').addEventListener('click', function(){
    document.querySelector('.body').classList.add('body2');
    setTimeout(function() {
        document.querySelector('.body').classList.remove('body2');
    }, 15000);
})


//menu link about animation
document.querySelector('#about').addEventListener('click', function(){
    document.getElementsByTagName('h2').classList.add('about2')
    setTimeout(function(){
        document.getElementsByTagName('h2').classList.remove('about2')
    },4000)
})