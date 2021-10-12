import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "What IF? Tony Stark is killed in every universe",
        "1 hour ago"
      )}
      {newsArticle(
        "The latest Microsoft Teams update is like something straight out of Black Mirror",
        "37 minutes ago"
      )}
      {newsArticle(
        "How to master the most important skill you need as a freelancer",
        " 10 mins ago"
      )}
      {newsArticle(
        "Boruto: 10 Things Naruto Has To Do After Becoming Hokage",
        " 3 hrs ago"
      )}
    </div>
  );
}

export default Widgets;
