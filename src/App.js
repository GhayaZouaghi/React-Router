import { useState } from "react";
import { Switch, Route } from "react-router";

import "./App.css";

import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Entete from "./components/Entete";
import SearchBox from "./components/searchBox";
import RaterSearch from "./components/RaterSearch";
import MovieCard from "./components/MovieCard";
import Movie from "./components/Movie";
const films = [
  {
    id: 1,
    title: "The Guilty",
    description:
      "A troubled police detective assigned to 911 operator duty scrambles to save a distressed caller during a harrowing day of revelations — and reckonings.",
    poster:
      "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS2YKxQaAy9yDiHVlapRFhVbRY-K3cvKLoMFROPhntlV4nK825U7POhQpau_U6rzszUjFjGGs2OYv4hBb_tus75BBsQcBKxaC5dSAhfvVg8hBoN6YEI8-FEWxvs2.jpg?r=403",
    Rating: "2",
  },
  {
    id: 2,
    title: "Spider-Man: Homecoming",
    description:
      "Peter Parker returns to routine life as a high schooler until the Vulture's arrival gives him the chance to prove himself as a web-slinging superhero.",
    poster:
      "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRkoafH0jI9O_cEKqV-8YxKXqiaiahpufwxJrZFtW1QFmTRFq1DfO2v3uprZaiCzH-zJUli23mI9glQMGTSTQwsvafs.jpg?r=98a",
    Rating: "4",
  },
  {
    id: 3,
    title: "The Croods",
    description:
      "When an earthquake obliterates their cave, an unworldly prehistoric family is forced to journey through unfamiliar terrain in search of a new home.",
    poster:
      "https://occ-0-55-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT43sENdMq4OCMEnnzTdUQIs1WwpuJrv0_h8iCnnkavcVckIbJhoOXsdo6CDFDnLYbM1OD7SLRZuarU5y5crK8k0mvs.jpg?r=409",
    Rating: "3",
  },
  {
    id: 4,
    title: "John Q",
    description:
      "A blue collar worker's insurance won't cover his son's heart transplant, so he holds a hospital ER hostage until doctors agree to perform the surgery.",
    poster:
      "https://occ-0-55-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTM5mY9-c11SUbWGNxPTD32kSil6eETxrmo22XWpVKKWRwnkMWkpJmtKYTlZ3uh79WUypcuIRK7wBv5URP3EpUczx0Ep.jpg?r=022",
    Rating: "2",
  },
  {
    id: 5,
    title: "Catch Me if you can",
    description:
      "An FBI agent makes it his mission to put cunning con man Frank Abagnale Jr. behind bars. But Frank not only eludes capture, he revels in the pursuit.",
    poster:
      "https://occ-0-55-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe1xq50JC_AJbrvYrHq00ZXaDm3CQvx4nDGUlAy5BpUYo54Ym-JKN80y8pj8dD0a9-0_jzJliRaEaXyILTaazLnj9vo.jpg?r=985",
    Rating: "4",
  },
  {
    id: 6,
    title: "Red Notice",
    description:
      "         In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief.",
    poster:
      "https://occ-0-4609-778.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX0PtSPw59nh_ScwhDYvqvx5jvaFOqQnBJrttZyGo1Cg6SXcsu1fLgPRTZ6LysCXGN2SE0rlowH4NBMWNE5OPmb9DMEiau5BFXsQjfAw39CYVjbGwkKq5k8ZGqyH.jpg?r=a7a",
    Rating: "2",
  },
];
function App() {
  const [movies, setMovies] = useState(films);
  const [searchValue, setSearchValue] = useState("");
  const [star, setStar] = useState(1);

  return (
    <div className="App">
      <Entete />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <div className="search">
                <SearchBox
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
                <RaterSearch star={star} setStar={setStar} />
              </div>
              <MovieList
                movies={movies}
                searchValue={searchValue}
                star={star}
              />

              <AddMovie movies={movies} setMovies={setMovies} />
            </div>
          )}
        />

        <Route path="/Movie/:id" component={Movie} />
      </Switch>
    </div>
  );
}

export default App;
