import React, { useState, useEffect } from "react";
import "../App.css";

const ImageDetail = ({ match }) => {
  // Run Fetch Photos to get the API call
  useEffect(() => {
    fetchImage();
  }, []);

  // State holding the Photo Details
  const [image, setImage] = useState({});

  // API call for a single item
  const fetchImage = async () => {
    const fetchImage = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
    );
    const image = await fetchImage.json();
    setImage(image);
  };

  // Below use image and not photo because imagesis used in useState

  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.url} alt="test" />
    </div>
  );
};

export default ImageDetail;
