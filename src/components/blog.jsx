import { Container, Row, Col, Card } from "react-bootstrap";

const blogData = [
    {
        id: 1,
        image: require("../assets/images/blog1.jpg"),
        time: "15 Nov 2016",
        title: "Coffee Lovers",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
        link: "https://www.google.com",
    },
    {
        id: 2,
        image: require("../assets/images/blog2.jpg"),
        time: "10 Nov 2016",
        title: "Tips for UI Design",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
        link: "https://www.facebook.com",
    },
    {
        id: 3,
        image: require("../assets/images/blog3.jpg"),
        time: "07 Nov 2016",
        title: "Beautiful Day",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
        link: "https://www.twitter.com",
    },
];

export default function Blog() {
    return (
        <section id="blog" className="block blog-block">
            <Container fluid>
                <div className="title-holder">
                    <h3>Latest from blog</h3>
                    <p className="subtitle">get our latest news from blog</p>
                </div>
                <Row>
                    {blogData.map((data) => {
                        return (
                            <Col sm={4} key={data.id}>
                                <div className="holder">
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={data.image}
                                        />
                                        <Card.Body>
                                            <time>{data.time}</time>
                                            <Card.Title>{data.title}</Card.Title>
                                            <Card.Text>
                                                {data.description}
                                            </Card.Text>
                                            <a
                                                href={data.link}
                                                className="btn btn-primary"
                                            >
                                                Read more
                                                <i class="fas fa-chevron-right" />
                                            </a>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}
