(function() {
        let myAPICall = () => {  //preferrred way to call functions. parameterews go in brackets
            console.log("getting data...");
            document.write("Data")
        }
        let count = 0;
        setInterval(() =>{
            count++;
            console.log ("new function" + count);
        }, 2000);
        

        console.log("welcome to the webpage");

    })();

    //we want api to keep running while IIFE runs. api take sa while, want page to run.
    //asynchronous programming
    //use setTimeout() method. asynchronous