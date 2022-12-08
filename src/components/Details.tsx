import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArticalDetails } from "../types";
import Article from "./Article";

const Details = () => {
  const [article, setArticle] = useState<ArticalDetails[]>([]);
  const params = useParams();

  const fetchArticle = async () => {
    try {
      let response = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
      );
      if (response.ok) {
        let data = await response.json();
        setArticle(data);
      } else {
        console.log("Couldn't fetch article data");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchArticle();
    }
  }, [params.id]);

  return (
    <>
      <h1>hello</h1>
      {console.log(article)}
    </>
  );
};

export default Details;
