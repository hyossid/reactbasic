import React from 'react';
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./movie"
import "./app.css"
class App extends React.Component{


  state={
    isLoading : true,
    movies:[]
  };
 
 getMovies =async ()=>{
  const {
    data:{
      data:{movies}
    }
  } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
// async 하고 await 해야될놈한테 await 붙여줌.
  this.setState({movies:movies, isLoading: false}) //이름같아서 그냥movies만해도됨
};
  componentDidMount(){
    this.getMovies();
    //axios get is not fast enough
 //tell js that this function might take a bit time

  }
  render(){
    const {isLoading, movies} =this.state;
  return <section className="container">
  {isLoading?(
    <div className="loader">
    <span className="loader__text">"Loading"</span>
    </div>
  ):(
    <div className="movies">
   { movies.map(movie=>(
    
    <Movie 
    key={movie.id}
    id={movie.id}
     year={movie.year}
      title={movie.title}
       summary={movie.summary}
        poster={movie.medium_cover_image}
        generes={movie.genres}
        />
   ))}
    </div>
  )}    
  </section>  
}
}

export default App;
