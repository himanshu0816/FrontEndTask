import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import Editmodals from './Modals/Editmodals'
const Dashboard = () => {
    const [data,setData]=useState([])
    const [modalShow, setModalShow] = useState(false);
    // const 
    useEffect(()=>{
        const fetchedData=async()=>{
            try{
                const response=await fetch('http://localhost:4000/api/v1/get_all_contacts')
            const ans=await response.json()
            setData(ans.data)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchedData()
    },[data])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Contact _id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>status</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>{
                    data.map((i:any)=>{
                        return(
                            <tr>
                        <td>{i.id}</td>
                        <td>{i.Name}</td>
                        <td>{i.Email}</td>
                        <td>{i.phone}</td>
                        <td>{i.address}</td>
                        <td>{i.status}</td>
                        <td><button onClick={() => setModalShow(true)}
                        >edit</button> 
                        <Editmodals show={modalShow}
                        onHide={() => setModalShow(false)}
                        />
                        
                        <button>Delete</button></td>
                    </tr>
                        )
                    })
                    }
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Dashboard