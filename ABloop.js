(function ABloop(){
    if(!Spicetify.Player || !Spicetify.Platform){
        setTimeout(ABloop,300);
        return;
    }



    let pointA = null
    let pointB = null
    let isLooping = false
    let checkInterval = null

    function setPointA() {
    pointA = Spicetify.Player.getProgress(); //now we can set a new value to it
    console.log(pointA);
    }

    function setPointB() {
    pointB = Spicetify.Player.getProgress();

    if (pointA == null) {
        alert('set point A first');
        pointB = null;
        return;
    }
    if (pointB <= pointA) {
        alert('point B invalid')
        pointB = null;
        return;
    }

    console.log(pointB);
    startLooping();
    }


    function startLooping() {
    if (isLooping) return;

    isLooping = true;
    checkInterval = setInterval(() => {
        const currTime = Spicetify.Player.getProgress();
        if (currTime > pointB) {
            Spicetify.Player.seek(pointA);
        }
    }, 100)

    }

    function stopLooping() {
    if (checkInterval){
        clearInterval(checkInterval);
        checkInterval = null;
    }
    isLooping = false;
    pointA = null;
    pointB = null;
    console.log('looping stopped');
    }
    window.setPointA = setPointA;
    window.setPointB = setPointB;
    window.stopLooping = stopLooping;
    })();



// SPICETIFY TOOLS
// Spicetify.Player
// Spicetify.platform
// Spicetify.Player.getProgress -> gets playback position
// Spicetify.Player.seek(Time) -> jumps to a timestamp
// Spicetify.Player.addEventListener('songchange', callback) -> detects song change
