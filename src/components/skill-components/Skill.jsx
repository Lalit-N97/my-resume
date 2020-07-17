import React, { Component } from "react";
import "./Skill.css";
class Skill extends Component {
  static defaultProps = {
    skills: {
      html: "https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png",
      css:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      js:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png",
      nodeJs:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/skill_page/content/logo_file/logo/195787/nodejs-9dd6bd2acfede5e49a12355a956fe3a2.png",
      mongoDB:
        "https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png",
      reactJs: "https://hackernoon.com/drafts/otda32fo.png",
      expressJs: "https://expressjs.com/images/express-facebook-share.png",
      heroku: "https://cdn.iconscout.com/icon/free/png-256/heroku-1-282458.png",
      mySql:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTi2me8t_FPxVZFYpvcMan7TQZkC52PU3kuUw&usqp=CAU",
    },
  };

  render() {
    const skills = Object.entries(this.props.skills).map((skill) => {
      const [skillName, skillSrc] = skill;
      const logoStyles = {
        maxWidth: "100%",
        maxHeight: "100%",
        display: "flex",
      };
      return (
        <div className="main-img">
          <img style={logoStyles} src={skillSrc} alt={skillName} />
        </div>
      );
    });
    return <div className="main">{skills}</div>;
  }
}

export default Skill;
