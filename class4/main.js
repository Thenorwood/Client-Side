//api= application program interface

//1st wayt............................fix later
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML = this.responseText;
      }
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

  //2nd way: JQuery
  
   
  //3rd way: fetch api. use fetch api to get data is it the best
    fetch("Https://jsonplaceholder.typicode.com/posts")
    .then(function(result){
        return response.json();
    })
    .then(function(result){
        for(var post of result) {
            console.log(post.title);
        }
    })

    //or
    function method3() {
        fetchfetch("Https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((result) => {
            for(var post of result){
                console.log(post.title);
            }

        });
    }

    var method4 = async function() {
        var response = await fetch("Https://jsonplaceholder.typicode.com/posts")
        var json = await response.json;
        for(var post of result){
            console.log(post.title);
        }

    }

    method4();
  