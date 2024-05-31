import React, { useState } from 'react'
import Modals from './Modals/Modals';
import { Button } from 'react-bootstrap';
const Addcontacts = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>
            Add Contact
            </Button>

            <Modals
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default Addcontacts