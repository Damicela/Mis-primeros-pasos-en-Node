const myfn =  (p1, p2) => {
  
    return new Promise( (resolve, reject) => {
      let division = p1/p2;
      (p2 !== 0)?
        resolve (division)
        : reject ('error');
      
    }
      
    ) ;
   }
  
    myfn(2, 4)
    .then(div => {
      console.log(div)
    })
    
    .catch(err => console.log(err));
  
  
  