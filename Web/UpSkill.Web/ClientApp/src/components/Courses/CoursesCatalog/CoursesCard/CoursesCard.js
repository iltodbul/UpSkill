import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

import './CoursesCard.css';

function CoursesCard(props) {
  const { id,courseName, coachName, imageName, isDetailsOpen, getDetails } = props;

  const [Image, setImage] = useState();

  function loadImage(imgName) {
    import(`../../../../assets/img/courses/${imageName}`).then((img) =>
      setImage(img.default)
    );
  }

  useEffect(() => {
    loadImage(imageName);
  }, []);

  return (
    <div className="cardContainer">
      <div className="background" onClick = {() => {
        isDetailsOpen(true);
        getDetails({id, courseName, coachName});
      }}>
        <img src={Image} alt="courses" />
      </div>
      <div className="cardText">
        <span id="course">{courseName}</span> <span id="name">{coachName}</span>
      </div>
      <div></div>
      <Button className="cardColors">Enroll</Button>
    </div>
  );
}

export default CoursesCard;
