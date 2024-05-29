import {useEffect, useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalUser(){
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

  return (
    <>
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
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
        </Modal>
        )
      }
    </>
  );
}

export default ModalUser;