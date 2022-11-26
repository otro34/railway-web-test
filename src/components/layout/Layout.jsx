import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Layout = (props) => {

    return (<Container fluid className="w-80">
        <Row className="justify-content-md-center w-80">
            <Col >
                {props.main}
            </Col>
        </Row>
    </Container>)
}

export default Layout