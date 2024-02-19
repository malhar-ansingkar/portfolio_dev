import axios from "axios";
import React, { useEffect, useState } from "react";
import "./card.css";

const Card = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setData(response.data.results[0]);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (error) return <h3> something went wrong</h3>;
  if (isLoading) return <h3> LOADING...</h3>;

  return (
    <div className="card-container">
      <div className="left">
        <img
          src={data?.picture.large}
          alt={`photo of ${data?.name.first} ${data?.name.last}`}
        />
      </div>
      <div className="right">
        <h5>
          Name: {data?.name.first} {data?.name.last}
        </h5>
        <h5>Gender: {data?.gender}</h5>
        <h5>Contact Number: {data?.phone}</h5>
      </div>
    </div>
  );
};

export default Card;
