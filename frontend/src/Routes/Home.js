import { Container, Row } from "react-bootstrap";
import LinkCard from "../components/LinkCard";

export default function Home() {
    return (
        <Container>
            <Row>
                <LinkCard endpoint="/series" text="Best Series" image="/placeholder.png" />
                <LinkCard endpoint="/movies" text="Popular Titles" image="/placeholder.png" />
            </Row>
        </Container>
    );
}