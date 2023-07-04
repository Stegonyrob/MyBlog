import React, { useState, useEffect } from "react";
import axios from "axios";

const ImageComponent = ({ id }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/posts/image/${id}`,
          {
            content,
          }
        );

        const imageUrl = URL.createObjectURL(response.data);

        setImageSrc(imageUrl);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [id]);

  if (!imageSrc) {
    return null;
  }

  return <img src={imageSrc} alt="Post Image" />;
};

export default ImageComponent;
