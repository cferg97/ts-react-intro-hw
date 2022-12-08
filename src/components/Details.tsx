import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { ArticalDetails } from "../types";
import { Container, Row, Col, Card } from "react-bootstrap";


const Details = () => {
  const [article, setArticle] = useState<ArticalDetails>();
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
    fetchArticle();
  }, []);

  return (
        <Row className="justify-content-center">
            <Col md={6} className="mt-4">
                <Card className="text-center">
                    <Card.Title>{article?.title}</Card.Title>
                </Card>
            </Col>
        </Row>
    
  );
};

export default Details;
