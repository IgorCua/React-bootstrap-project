import { useState } from "react";
import { Container, Row, Col, Image, Pagination } from "react-bootstrap";

const worksData = [
    {
        id: 1,
        link: "https://www.google.com",
        image: require("../assets/images/img1.jpg"),
        title: "Lonely Path",
        subtitle: "Web Design",
    },
    {
        id: 2,
        link: "https://www.google.com",
        image: require("../assets/images/img2.jpg"),
        title: "Photographer Girl",
        subtitle: "Branding",
    },
    {
        id: 3,
        link: "https://www.google.com",
        image: require("../assets/images/img3.jpg"),
        title: "The Difference",
        subtitle: "Web Design",
    },
    {
        id: 4,
        link: "https://www.google.com",
        image: require("../assets/images/img4.jpg"),
        title: "Nature Patterns",
        subtitle: "Branding",
    },
    {
        id: 5,
        link: "https://www.google.com",
        image: require("../assets/images/img5.jpg"),
        title: "The Difference",
        subtitle: "Photography",
    },
    {
        id: 6,
        link: "https://www.google.com",
        image: require("../assets/images/img6.jpg"),
        title: "Winter Sonata",
        subtitle: "Web Design",
    },
    {
        id: 7,
        link: "https://www.google.com",
        image: require("../assets/images/img7.jpg"),
        title: "Lonely Path",
        subtitle: "Branding",
    },
    {
        id: 8,
        link: "https://www.google.com",
        image: require("../assets/images/img8.jpg"),
        title: "Appreciation",
        subtitle: "Photography",
    },
    {
        id: 9,
        link: "https://www.google.com",
        image: require("../assets/images/img9.jpg"),
        title: "Happy Days",
        subtitle: "Web Design",
    },
];

export default function Works() {
    const [page, setPage] = useState(1);

    const itemsPerPage = 3;
    let items = [];

    for (let number = 1; number <= Math.ceil(worksData.length / itemsPerPage); number++) {
        items.push(
            <Pagination.Item key={number} active={number === page}>
                {number}
            </Pagination.Item>
        );
    }

    const handlePagination = (event) => {
        if(event.target.firstChild.data){
            setPage(+event.target.firstChild.data);
        }
    }

    return (
        <section id="works" className="block works-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our works</h2>
                    <p className="subtitle">our awesome works</p>
                </div>
                <Row className="portfoliolist">
                    {worksData.map((work, i) => {
                        const startIndex = (page - 1) * itemsPerPage;
                        const endIndex = startIndex + itemsPerPage - 1;

                        if(i >= startIndex && i <= endIndex) {
                            return (
                                <Col sm={4} key={work.id}>
                                    <div className="portfolio-wrapper">
                                        <a href={work.link}>
                                            <Image src={work.image} fluid/>
                                            <div className="label text-center">
                                                <h3>{work.title}</h3>
                                                <p>{work.subtitle}</p>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            );
                        }
                        
                    })}
                </Row>
                <Pagination onClick={handlePagination}>{items}</Pagination>
            </Container>
        </section>
    );
}
