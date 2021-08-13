import { useEffect } from "react";

export const GetMovieList = (year)  => {
    useEffect(()=>{
        fetch('https://jsonmock.hackerrank.com/api/movies?Year=2015')
        .then( response => response.json()).then(data=>
            {console.log(data);
                data.data.map( data => console.log(data.Title))
            })
        
    })
    return undefined;
  };