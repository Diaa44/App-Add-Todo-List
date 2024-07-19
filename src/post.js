import React, { useState, useEffect } from "react";
import "./App.css";

export default function Post({ postId }) {
  const [postData, setPostData] = useState();

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );

      const data = await response.json();
      setPostData(data);
    };
    loadData();
  }, [postId]);

  return (
    <div>
      <h2>
        {postData?.id} - {postData?.body}
      </h2>
    </div>
  );
}
