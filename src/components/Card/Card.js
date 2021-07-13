import React from "react";
import { Link } from "react-router-dom";
import logos from "../../LeagueLogos";
import "./Card.css";

const Card = ({ leagueInfo, index }) => {
  const { idLeague, strLeague } = leagueInfo;

  return (
    <div className="card">
      <img src={logos[index]} alt={strLeague} />
      <h3>{strLeague}</h3>
      <button>
        <Link to={"/league/" + idLeague}>
          Explore <i class="fas fa-arrow-right"></i>
        </Link>
      </button>
    </div>
  );
};

export default Card;
