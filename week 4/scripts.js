(() => {
    const logheader = () => {
        const h1Tag = document.querySelector("#t3");
        console.log();
    }

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(json => {
        console.log(json);

        const names = json.map(user => user.name);

        //step 1 get tag whjere we want to add data
        //step 2: modify/add the info

        const divContainer = document.querySelector("#myContainer");

        //create our lists
        const listContainer = document.createElement("ul");
        console.log(listContainer);

        divContainer.append(listContainer);

        //add elements
        for(let name of names){

        //create element
        //add it to DOM
        const listItem = document.createElement("li");
        listContainer.append(listItem);
        listItem.innertext = name;

        
        }
    })
})();