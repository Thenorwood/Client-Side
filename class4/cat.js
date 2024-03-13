fetch ("https://cataas.com/cat/gif")
.then(response => {
    return(response.body);
})
.then(data=> {
    document.write(data);
})