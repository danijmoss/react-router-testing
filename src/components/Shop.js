import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Shop = () => {
  // Run Fetch Photos to get the API call
  useEffect(() => {
    fetchPhotos();
  }, []);

  // State holding the Photo Details
  const [images, setImages] = useState([]);

  // API call for the Photos
  const fetchPhotos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/photos");
    const photos = await data.json();

    // Setting images to the photos you're getting back
    setImages(photos);
  };

  // Below use images and not photos because images is used in useState

  return (
    <div>
      <h1>Shop</h1>
      {images.map((image) => (
        <h1 key={image.id}>
          <Link to={`/shop/${image.id}`}>{image.title}</Link>
        </h1>
      ))}
    </div>
  );
};

export default Shop;
