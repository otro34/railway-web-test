import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table'

import CoursesApi from '../../api/courses'
import { useEffect,useState } from 'react'

const Home = () => {

    const [ coursesData, setCoursesData] = useState([])

    useEffect(() => {
        handleOnLoad()
    },[])

    const handleOnLoad = async () => {
        const result = await CoursesApi.findAll();
        setCoursesData(result.data)
        console.log(result);
    } 

    const professorTableRows = coursesData.map(item => {
        const {id, name, level, professor } = item
        return (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{level}</td>
            <td>{professor.name} {professor.lastName}</td>
          </tr>  
        )
    })

return (
    <>
    <Container>
        <Row>
            <h2>Courses</h2>
        </Row>
        <Row>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>LEVEL</th>
                <th>PROFESOR</th>
                </tr>
            </thead>
            <tbody>
                {professorTableRows}
            </tbody>
        </Table>
        </Row>
    </Container>
</>
)
}

export default Home;