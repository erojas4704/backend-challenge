import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function LinkCard({ text, endpoint, image }) {
    return (
        <Card className="m-3 p-0 border-0" style={{ width: '12rem' }}>
            <Link to={endpoint} style={{ textDecoration: 'none' }}>
                <Card.Img variant="top" className="bg-dark" src={ image || "/placeholder.png"} />
                <Card.Title>
                    {text}
                </Card.Title>
            </Link>
        </Card>
    )
}