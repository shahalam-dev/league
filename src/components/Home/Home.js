import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Home.css";

const Home = () => {
  const [league, setLeague] = useState([]);

  useEffect(() => {
    const url =
      "https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.countrys));
  }, []);
  return (
    <div className="container">
      <div className="cards">
        {league.map((league, index) => (
          <Card key={league.idLeague} index={index} leagueInfo={league}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
