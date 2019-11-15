fetch(requestURL)
  .then(response => {
    response.json()
         .then(
      response => {
        const towns = response.towns;

        towns.forEach(
            (town) => {
                if (town.name.toLowerCase() === 'fish haven'){
                    //fish haven
                    document.querySelector('#fishHavenYearFounded')
                    .textContent = town.yearFounded;
                }
                
                else if (town.name.toLowerCase() === 'preston'){
                    //preston
                    document.querySelector('#prestonYearFounded')
                    .textContent = town.yearFounded;
                }
                else if (town.name.toLowerCase() === 'soda springs'){
                    //soda springs
                    document.querySelector('#sodaSpringsYearFounded')
                    .textContent = town.yearFounded;
                }
        
            }

        );

     }
  )
  });