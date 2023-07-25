import Movie from "./Movie";
export default function Movies({ movies = [] }) {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((item) => <Movie key={item.imdbID} {...item}></Movie>)
      ) : (
        <h4>Ничего не пришло</h4>
      )}
    </div>
  );
}
