import {useEffect, useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function UsersList(){
    const url = 'https://randomuser.me/api/?results=5'
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data.results))
        .catch(e => console.log(e))
    }, [])

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '80px' }}>
           {
             users.map( user =>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.picture.large} />
                    <Card.Body>
                        <Card.Title>
                        {
                            user.name.first + " " + user.name.last    
                        }
                        </Card.Title>
                        <Button variant="primary" onClick={handleShow}>Mas info</Button>
                    </Card.Body>
                </Card>
             )     
           }
           <div>
                {
                    users.map( user =>
                        <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{user.name.first} {user.name.last}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {user.country}
                            {user.state}
                            {user.city}
                            {user.gender}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                    )
                }
                
           </div>
        </div>        
    )
}

export default UsersList;