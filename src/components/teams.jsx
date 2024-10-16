import { Container, Row, Col, Image } from "react-bootstrap";

const teamsData = [
    {
        id: 1,
        image: require("../assets/images/team1.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Gabriel Hart",
        designation: "CEO",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 2,
        image: require("../assets/images/team2.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "David Antony",
        designation: "Manager",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 3,
        image: require("../assets/images/team3.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Nicholas Perry",
        designation: "UX Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 4,
        image: require("../assets/images/team4.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Sarah Wills",
        designation: "Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 5,
        image: require("../assets/images/team5.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Sophia Pitt",
        designation: "Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 6,
        image: require("../assets/images/team6.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Taylor Lopez",
        designation: "Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 7,
        image: require("../assets/images/team7.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "Ryan Giggs",
        designation: "Content Writer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
    {
        id: 8,
        image: require("../assets/images/team8.jpg"),
        fbLink: "https://www.facebook.com",
        twitterLink: "https://www.twitter.com",
        linkedinLink: "https://www.linkedin.com",
        name: "David Smith",
        designation: "SEO Expert",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.",
    },
];

export default function Teams() {
    return (
        <section id="teams" className="block teams-block">
            <Container fluid>
                <div className="title-holder">
                    <h2>Our teams</h2>
                    <p className="subtitle">some of our experts</p>
                </div>
                <Row>
                    {teamsData.map((team) => {
                        return (
                            <Col sm={3} key={team.id}>
                                <div className="image">
                                    <Image src={team.image} alt='Image'/>
                                    <div className="overlay">
                                        <div className="socials">
                                            <ul>
                                                <li>
                                                    <a href={team.fbLink}>
                                                        <i class='fab fa-facebook-f'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={team.twitterLink}>
                                                        <i class='fab fa-twitter'></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={team.linkedinLink}>
                                                        <i class='fab fa-linkedin-in'></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                    <h3>{team.name}</h3>
                                    <span className="designation">
                                        {team.designation}
                                    </span>
                                    <p>{team.description}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
}
