import {useEffect, useState} from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function UsersList(){
    const url = 'https://randomuser.me/api/?results=12';
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(e => console.log(e));
    }, []);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', marginTop: '80px' }}>
            {users.map(user =>
                <Card key={user.login.uuid} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={user.picture.large} />
                    <Card.Body>
                        <Card.Title>{user.name.first} {user.name.last}</Card.Title>
                        <Button variant="primary" onClick={() => handleShowModal(user)}>More info</Button>
                    </Card.Body>
                </Card>
            )}
            <Modal show={showModal} onHide={handleCloseModal}>
                {selectedUser && (
                    <>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedUser.name.first} {selectedUser.name.last}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Country: {selectedUser.location.country}</p>
                            <p>State: {selectedUser.location.state}</p>
                            <p>City: {selectedUser.location.city}</p>
                            <p>Gender: {selectedUser.gender}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={handleCloseModal}>Close</Button>
                        </Modal.Footer>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default UsersList;