import {useEffect, useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UsersList(){
    const url = 'https://randomuser.me/api/?results=5'
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data.results))
        .catch(e => console.log(e))
    }, [])

    return(
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
        
    )
}

export default UsersList;