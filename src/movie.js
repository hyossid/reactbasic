import React from "react";
import PropTypes from "prop-types";
import "./movie.css"
//state가필요없는 component는 function으로

//Movie 의 imput props를 받아오려면 무조건 중괄호를 써야한다.
function Movie({id,year,title,summary,poster,genres}){
return <div className="movie">

    <img src={poster} alt={title} title={title} />
    <div className="move_data">
    <h3 className="movie__title">{title}</h3>
    <h5 className="movie__year">{year}</h5>
    <p className="movie__summary">{summary}</p>
    <ul className="movie__genres">{genres&&genres.map((genre,index)=><li key={index} className="genres__genre">{genre}</li>)}</ul>
    </div>
</div>;
}

Movie.propTypes={
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
    }

export default Movie;