function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
    
    function fiveHeads() {
        return new Promise( (resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            if(attempts >= 100) {
              reject("too much");
            }
            attempts++;
            let result = tossCoin();
          if(result === "heads"){
            headsCount++;
          }else if (attempts === 0){
            headsCount = 0;
          }
        }
    resolve(`It took ${attempts} tries to flip five "heads"`)
    });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( "When does this run now?" );