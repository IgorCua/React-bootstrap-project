import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function Contact() {
    return (
        <section id="contact" className="block contact-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Contact us</h2>
                    <p className="subtitle">get connected with us</p>
                </div>
                <Form className="contact-form">
                    <Row>
                        <Col sm={4}>
                            <Form.Control
                                type="text"
                                placeholder="Enter your full name"
                                required
                            />
                        </Col>
                        <Col sm={4}>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </Col>
                        <Col sm={4}>
                            <Form.Control
                                type="tel"
                                placeholder="Enter your phone number"
                                required
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <Form.Control
                                as="textarea"
                                placeholder="Leave your comment here"
                                required
                            />
                        </Col>
                    </Row>
                    <div className="">
                        <Button type="submit">Submit</Button>
                    </div>
                </Form>
            </Container>
            <div className="google-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190255.43573730247!2d-87.89677241525763!3d41.83387098183924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1729103184694!5m2!1sen!2sus"
                    title="map"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <Container fluid>
                <div className="contact-info">
                    <ul>
                        <li>
                            <i class='fas fa-envelope'></i>
                            <p>hello@world.com</p>
                        </li>
                        <li>
                            <i class='fas fa-phone'></i>
                            <p>(000)000-0000</p>
                        </li>
                        <li>
                            <i class='fas fa-map-marker-alt'></i>
                            <p>Chicago, IL</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    );
}
