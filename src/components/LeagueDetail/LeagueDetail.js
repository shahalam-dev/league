import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Facebook from "../../assets/Facebook.png";
import Flag from "../../assets/flag (1) 1.png";
import Football from "../../assets/football (1) 1.png";
import Found from "../../assets/found 1.png";
import Sex from "../../assets/male-gender-sign 1.png";
import Twitter from "../../assets/Twitter.png";
import Youtube from "../../assets/YouTube.png";
import "./LeagueDetail.css";

const LeagueDetail = ({ match }) => {
  const { id } = useParams();
  const [league, setLeague] = useState({});
  const { strLeague, intFormedYear, strCountry, strSport, strGender } = league;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setLeague(data.leagues[0]));
  }, [id]);

  let leagueGender = null;
  if (strGender === "Male") {
    leagueGender =
      "https://i2-prod.birminghammail.co.uk/incoming/article14496028.ece/ALTERNATES/s615/5LZ-HOET.jpg";
  } else if (strGender === "Female") {
    leagueGender =
      "https://www.prodirectacademy.com/media/1449/homepage-main-banner-1920x760-wwc-replica.jpg";
  } else {
    leagueGender =
      "https://news.psu.edu/sites/default/files/styles/threshold-992/public/Athletics%20News%20Story%20Banner.jpg";
  }

  return (
    <>
      <div className="banner"></div>
      <div className="container">
        <div className="meta-box">
          <div className="meta-info">
            <h2>{strLeague}</h2>
            <div className="row">
              <img src={Found} alt="" />
              <h4>Founded : {intFormedYear}</h4>
            </div>
            <div className="row">
              <img src={Flag} alt="" />
              <h4>Country : {strCountry}</h4>
            </div>
            <div className="row">
              <img src={Football} alt="" />
              <h4>Sports Type : {strSport}</h4>
            </div>
            <div className="row">
              <img src={Sex} alt="" />
              <h4>Gender : {strGender}</h4>
            </div>
          </div>
          <div className="image-area">
            <img src={leagueGender} alt="" />
          </div>
        </div>
        <div className="description">
          <h2>All about {strLeague}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatem necessitatibus minus molestiae rem! Magnam assumenda
            minus ducimus exercitationem error harum alias quaerat voluptate
            voluptatem reprehenderit corrupti, officia, corporis nemo nisi nobis
            veritatis neque maxime placeat quibusdam praesentium iusto quidem!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            maiores quibusdam laudantium exercitationem laborum voluptate
            corrupti aliquid consectetur molestiae? Aut dolorum ab
            exercitationem non quaerat praesentium expedita dolor asperiores
            soluta suscipit voluptatum necessitatibus nisi hic, amet facilis
            fugiat aspernatur enim deleniti illum porro. Odio culpa voluptate
            ab, distinctio reiciendis unde incidunt atque cum expedita corrupti
            reprehenderit recusandae quasi, eaque officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            voluptatem necessitatibus minus molestiae rem! Magnam assumenda
            minus ducimus exercitationem error harum alias quaerat voluptate
            voluptatem reprehenderit corrupti, officia, corporis nemo nisi nobis
            veritatis neque maxime placeat quibusdam praesentium iusto quidem!
          </p>
        </div>

        <div className="social-link">
          <a href="https://twitter.com/">
            <img src={Twitter} alt="" />
          </a>

          <a href="https://www.facebook.com/">
            <img src={Facebook} alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src={Youtube} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default LeagueDetail;
