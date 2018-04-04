let lightButton = document.getElementById('light-button');
lightButton.addEventListener('click',function(){
    window.plugins.flashlight.toggle(buttonText);
});

function buttonText () {
    lightOn = window.plugins.flashlight.isSwitchedOn();

    if (lightOn == true){
        lightButton.innerText = 'Turn Off';
    }
    else{
        lightButton.innerText = 'Turn On';
    }
}