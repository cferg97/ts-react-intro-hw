import { useEffect } from "react";
import {useParams} from "react-router-dom"
import { useState } from "react";
import { Articles } from "../types";

const Details  = () => {
    const params = useParams()
    const [articles, setArticles] = useState<Articles[]>([]);



    const fetchArticle = async () => {
        try {
          let response = await fetch(
            "https://api.spaceflightnewsapi.net/v3/articles/" + params.id
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

      useEffect(() => {
        fetchArticle()
      }, [])
    
    return ( 
        <div>
            <h1>{articles.title}</h1>
        </div>
     );
}
 
export default Details;
 
