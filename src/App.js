import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMovie from "./components/NavbarMovie";
 import MovieList from "./components/MovieList";
 import { Data } from "./Data";
 import "./Css/MovieList.css";
 import "./Css/AddMovie.css";
import "./Css/MovieList.css";
import AddMovie from "./components/AddMovie";



const App = () => {

  const [datamovie, setDatamovie] = useState(Data)

  const AddMovieFunc  = (newfilm)=> {
    return setDatamovie([...datamovie,newfilm])
  }

  const [searchTitleFilm, setSearchTitleFilm] = useState("")
 
  return (
    <>
      <NavbarMovie setSearchTitleFilm={setSearchTitleFilm}/>
      <AddMovie AddMovieFunc={AddMovieFunc} />
   
      <MovieList searchTitleFilm={searchTitleFilm} Data={datamovie}/>
    
      

        
    </>
  )
};

export default App;
