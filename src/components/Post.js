import React from 'react';
import { Link } from 'gatsby';
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from 'reactstrap';

const Post = ({ title, author, date, path, body }) => {
    return(
        <Card>
            <CardBody>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> by{' '}
                    <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={path} className="btn btn-outline-primary float-right" >Read more</Link>
            </CardBody>
        </Card>
    )
}

export default Post