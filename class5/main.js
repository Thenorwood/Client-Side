let talkToServer = () => {
    console.log("talk to server")
}

(() => {
    let progName = "Class2"
    console.log (`run program ${progName}`)
    talkToServer()
})();