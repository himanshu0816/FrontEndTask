import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import axios from 'axios';
function Modals(props: any) {
    const [error,setErrors]=useState(true)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")


    const Createcontact=async( )=>{
        try{
            const create_contact=await axios.post("http://localhost:4000/api/v1/create_contact",{
                Name:name,
                Email:email,
                phone:phone,
                address:address
            })
            setName("")
            setEmail("")
            setPhone("")
            setAddress("")
            setErrors(false)
            // props.onhide
        }
        catch(err){
            console.log(err)
            setErrors(true)
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create Contact
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Password" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone </Form.Label>
                        <Form.Control type="text" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}} value={phone}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Addess</Form.Label>
                        <Form.Control type="text" placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} value={address}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={Createcontact}>
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default Modals