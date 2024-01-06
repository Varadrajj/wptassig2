let movie = { Movie : "XYZ" ,
                
              Director : "ABC",
              Cast : { hero :"pqr",
                       heroine : "qwe",
                       Villian : "x",
              },
              Comedians : ["u","z","l"],
              Dateofrelease : "22/01/2001",
              budget : 132456,
              x : "A+",
              y :{
                    Movie : "a+"
              }
}

console.log(movie.Cast.hero);
console.log(movie.Cast.heroine);
console.log(movie.Cast.Villian);
console.log(movie.Movie);
console.log(movie.Director);
console.log(movie.Comedians);
console.log(movie.Dateofrelease);
console.log(movie.budget);
if(movie.y.Movie!="a+"){
    console.log("movie for kids")
}
else{
    console.log("not for kids")
}

