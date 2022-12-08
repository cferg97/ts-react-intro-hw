import { useEffect, useState } from "react";
import { Articles } from "../types";
import Article from "./Article";

const FetchArticles = () => {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    fetchArts();
  }, []);

  const fetchArts = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      if (response.ok) {
        let data = await response.json();
        setArticles(data);
      } else {
        console.log("Couldn't fetch article data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {articles.map((art) => (
        <Article article={art} key={art.id} />
      ))}
    </>
  );
};

export default FetchArticles;
