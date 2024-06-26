// IIFE
(() => {

	//Choose an array method to implement for each of the incomplete functions.
	//FOR/WHILE LOOPS OF ANY KIND ARE FORBIDDEN! You must use the available array functions to accomplish your goal.

	//Remember, you can chain together array function calls to attain your goals.
	// Ex: array.filter().map()

	//Get data for the TV Show "Friends"
	fetch('http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast')
    .then((response) => response.json())
    .then((json) => {

        //DO NOT MODIFY THE CODE IN HERE...check the console for your functions' output

        //1 - Create a function called getGuntherCount() which returns the total number of episodes 
        // where the character Gunther is mentioned in the episode summary.
        function getGuntherCount(json) {
            return json._embedded.episodes.filter(episode => episode.summary && episode.summary.includes('Gunther')).length;
        }
        console.log('--------------------------------');
        console.log(`Gunther Count: ${getGuntherCount(json)}`);

        //2 - Create a function called getTotalRuntimeMinutes() that totals all runtime minutes for all episodes
        function getTotalRuntimeMinutes(json) {
            return json._embedded.episodes.reduce((acc, episode) => acc + episode.runtime, 0);
        }
        
        console.log('--------------------------------');
        console.log(`Total Runtime Minutes: ${getTotalRuntimeMinutes(json)}`);

        //3 - Create a function called getDateRangeEpisodeCount() that returns the number of episodes that aired in the year 2000
        function getTotalEpisodesInYear(json, year) {
            return json._embedded.episodes.filter(episode => new Date(episode.airdate).getFullYear() == year).length;
        }
        console.log('--------------------------------');
        console.log(`Total episodes airing in year 2000: ${getTotalEpisodesInYear(json, "2000")}`);

        //4 - Create a function called getFemaleCastMembers() that returns an array of the names of the female cast members.
        function getFemaleCastMembers(json) {
            return json._embedded.cast.filter(member => member.person.gender === 'Female').map(member => member.person.name);
        }
        console.log('--------------------------------');
        console.log(`Female Cast Members:`);
        console.log(getFemaleCastMembers(json));

        //5 - Create a function called getEpisodeTitles() which returns a list of episode
        //    where the argument string is found in the episode summary.
        function getEpisodeTitles(json, searchString) {
            return json._embedded.episodes.filter(episode => episode.summary && episode.summary.includes(searchString)).map(episode => episode.name);
        }
        console.log('--------------------------------');
        console.log(`Episodes that mention Ursula:`);
        console.log(getEpisodeTitles(json, 'Ursula'));

        //6 - Create a function called getCastMembersOver55() which returns a list of cast members
        //    who are currently older than 55 years of age.
        function getCastMembersOver55(json) {
            const currentYear = new Date().getFullYear();
            return json._embedded.cast.filter(member => (currentYear - new Date(member.person.birthday).getFullYear()) > 55).map(member => member.person.name);
        }
        console.log('--------------------------------');
        console.log(`Cast Members over 55:`);
        console.log(getCastMembersOver55(json));

        //7 - Create a function called getTotalRuntimeMinutesExcludingSeasonSix that gets the total 
        //    runtime minutes for all episodes excluding episodes in season 6
        function getTotalRuntimeMinutesExcludingSeasonSix(json) {
            return json._embedded.episodes.filter(episode => episode.season !== 6).reduce((acc, episode) => acc + episode.runtime, 0);
        }
        console.log('--------------------------------');
        console.log(`Total runtime in minutes excluding Season 6: ${getTotalRuntimeMinutesExcludingSeasonSix(json)}`);
    
        //8 - Create a function called getFirstFourSeasons that gets the episodes for the first four seasons 
        //    but only return an array of JSON objects containing the season number and episode name
        function getFirstFourSeasons(json) {
            return json._embedded.episodes.filter(episode => episode.season <= 4).map(episode => ({ season: episode.season, name: episode.name }));
        }
        console.log('--------------------------------');
        console.log(`Episode JSON for first four seasons:`)
        console.log(getFirstFourSeasons(json));

        //9 - Create a function called getEpisodeTallyBySeason that returns an object containing the season name and the total episodes as key:value pairs for each season
        function getEpisodeTallyBySeason(json) {
            return json._embedded.episodes.reduce((acc, episode) => {
                acc[episode.season] = (acc[episode.season] || 0) + 1;
                return acc;
            }, {});
        }
        console.log('--------------------------------');
        console.log(`Tally of episodes by season:`);
        console.log(getEpisodeTallyBySeason(json));

        //10 - Create a funtion called capitalizeTheFriends that transforms the episode JSON data by capitalizing the words Joey, Chandler, Monica, Rachel, Phoebe, and Ross in both 
        //the name and summary of the episodes.
        function capitalizeTheFriends(json) {
            const names = ["Joey", "Chandler", "Monica", "Rachel", "Phoebe", "Ross"];// array 'names' that functions will look for occurences of in the objects
            return json._embedded.episodes.map(episode => {
                
                const newName = names.reduce((acc, name) => {//go through array & apples following function to result
                    const regex = new RegExp(name, 'gi'); //'gi' = global and case-insensitive
                    return acc.replace(regex, name.toUpperCase());// replaces occurences of names with the capitalized versions & store sin new array
                }, episode.name);
        
                const newSummary = names.reduce((acc, name) => {//same idea as above but apples to summary array
                    const regex = new RegExp(name, 'gi');
                    return acc.replace(regex, name.toUpperCase());
                }, episode.summary);
        
                
                return {
                    ...episode,//makes new object trhat copies all contents from current "episode" object
                    name: newName,//replace name property with newname
                    summary: newSummary//replace newName property blabla
                };
            });
        }
        console.log('--------------------------------');
        console.log('Capitalized Friends');
        console.log(capitalizeTheFriends(json));

    })

	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA

	// Define the required ten functions below this line...

})();

