import { Container, Row, Col, ListGroup } from "react-bootstrap";

const pricingData = [
    {
        id: 1,
        plan: "Basic",
        price: "£49",
        features: [
            "Wireframing",
            "Visual Design",
            "5 pages",
            "Free Hosting",
            "Support & Assistance",
        ],
        link: "https://www.google.com",
    },
    {
        id: 2,
        plan: "Premium",
        price: "£149",
        features: [
            "Wireframing",
            "Visual Design",
            "15 pages",
            "Free Hosting",
            "Support & Assistance",
        ],
        link: "https://www.facebook.com",
    },
    {
        id: 3,
        plan: "Ultimate",
        price: "£349",
        features: [
            "Wireframing",
            "Visual Design",
            "Unlimited pages",
            "Free Hosting",
            "Support & Assistance",
        ],
        link: "https://www.twitter.com",
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="block pricing-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Pricing & plans</h2>
                    <p className="subtitle">sheck our pricing & plans</p>
                </div>
                <Row>
                    {pricingData.map((data) => {
                        return (
                            <Col sm={4} key={data.id}>
                                <div className="heading">
                                    <h3>{data.plan}</h3>
                                    <span className="price">{data.price}</span>
                                </div>
                                <div className="content">
                                    <ListGroup>
                                        {data.features.map((feature, i) => {
                                            return (
                                                <ListGroup.Item key={i}>
                                                    {feature}
                                                </ListGroup.Item>
                                            );
                                        })}
                                    </ListGroup>
                                </div>
                                <div className="btn-holder">
                                    <a href="#" className="btn btn-primary">
                                        Order now
                                    </a>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}
