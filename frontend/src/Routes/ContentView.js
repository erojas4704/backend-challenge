import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContentFromServer } from "../actions/api";
import { v4 as uuid } from "uuid";
import LinkCard from "../components/LinkCard";
import formatTitleURL from "../utils/formatTitleURL";
import { Navbar, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function ContentView({ filter, title }) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.content);

    useEffect(() => {
        dispatch(getContentFromServer());
    }, [dispatch]);

    return (
        <>
            <Navbar bg="dark" variant="dark" className="px-3 py-0">
                <Navbar.Brand className="nav-link">{title}</Navbar.Brand>
            </Navbar>
            <Container>
                <h1 className="my-3">{title}</h1>
                {data.loading && <p>Loading...</p>}
                {data.error && <p className="text-danger">{data.error.message}</p>}
                <Row>
                    {data[filter] &&
                        data[filter].map(content => (
                            <LinkCard key={uuid()} text={content.title} image={content.images["Poster Art"].url} endpoint={formatTitleURL(content.title)}>
                            </LinkCard>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
}