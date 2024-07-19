import { useEffect, useState } from "react";

export default function Photos({ albumId }) {
  const [album, setAlbumsData] = useState();

  useEffect(() => {
    const loadPhotos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${albumId}`
      );

      const photo = await response.json();
      setAlbumsData(photo);
    };
    loadPhotos();
  }, [albumId]);

  return (
    <div>
      <h2>
        {" "}
        {album?.id}
        {" - "}
        {album?.title}
      </h2>
    </div>
  );
}
