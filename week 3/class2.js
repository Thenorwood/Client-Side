(()=>{
    fetch('https://openlibrary.org/search/authors.json?q=austen')
    .then(response => response.json())
    .then(data=>{
        console.log(data);
        const topWorks = data.docs.map((obj)=>{
            return obj.top_work;
        })
        console.log(topWorks);

        const austensOnAusten = data.docs.filter((obj)=>{
            return obj.top_work.includes("Jane")
        })
        .map((obj) => {
            return obj.name;
        });
        console.log(austensOnAusten);

        //longest life

        const longestrlife = simple.map((austen)=> {
            return
        })
    });
    const longestlife2 = simple.sort((a,b) =>{
        return(a.death_date -a.birth_date)-(b.death_date)
    })
})();