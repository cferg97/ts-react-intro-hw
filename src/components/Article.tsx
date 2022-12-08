import { Col, Card } from "react-bootstrap";
import { Articles } from "../types";
import { parseISO, format } from "date-fns";
import { Link } from "react-router-dom";
import { parse } from "path";
import Accordion from 'react-bootstrap/Accordion'

interface ArticleProps {
  article: Articles;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <Col md={6} lg={4} sm={10} className="mb-4">
      <Card  className="custom-card">
        <Card.Img className="card-img" variant="top" src={article.imageUrl} />
        <Card.Body className="text-center">
          <Link to={'/details/' + article.id}><Card.Title>{article.title}</Card.Title></Link>
          <Card.Subtitle className="text-muted">{article.newsSite}</Card.Subtitle>
          <hr />
          <Card.Text>
            {article.summary}<br />
            Click <a href={article.url}>here</a> for article.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          Published: {format(parseISO(article.publishedAt), "eee do MMM, yyyy")}{" "}
          at {format(parseISO(article.publishedAt), "KK:mm")}
          <hr />
          <span className="text-muted">
            Updated: {format(parseISO(article.updatedAt), "eee do MMM, yyyy")}{" "}
            at {format(parseISO(article.updatedAt), "KK:mm")}
          </span>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Article;
