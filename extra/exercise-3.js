const movies = [
  { name: "Your Name", durationInMinutes: 130 },
  { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
  { name: "Origen", durationInMinutes: 165 },
  { name: "El señor de los anillos", durationInMinutes: 967 },
  { name: "Solo en casa", durationInMinutes: 214 },
  { name: "El jardin de las palabras", durationInMinutes: 40 },
];
for (let i = 0; i < movies.length; i++) {
    const time = movies[i];
    if(time.durationInMinutes < 100){
        let smallMovies=[i]
        console.log("pelicuala corta " , time.name)
    }else if(time.durationInMinutes >=100  && time.durationInMinutes < 200){
        let mediumMovie= [i]
        console.log("pelicual media " ,time.name)

    }else{
        console.log("pelicula larga ",time.name )
    }

    
}