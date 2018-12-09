const keys = Array.from(document.querySelectorAll(".key"));

//a foreach loop to add the event listener to every .key element and remove trans if its in motion.
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound); // this is for the keydown event



function removeTransition(e) {

    if (e.propertyName !== "transform")
        return;

    e.target.classList.remove("playing");
}


function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio)
        return; //stop the function from running all together

    key.classList.add("playing"); //Same as jquery in key.addClass('playing');
    //Similar methods   .remove()  .toggle()    

    // rewind to the start
    audio.currentTime = 0;

    audio.play();
}