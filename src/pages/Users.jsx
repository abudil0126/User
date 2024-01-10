import "./Users.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { saveUser } from "../redux/features/SaveUser";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const  fetchData = async () => {
        try{
            const response = await axios("https://reqres.in/api/users")
            setData(response.data.data)
        }catch(error){
            console.log(error);
        }
        finally{        
            setLoading(false)
        }
        }
        fetchData()
    }, [])

  return (
    <div className="container">
        <Link to="saved"><div className="saved"><button className="btn">Saved Users</button></div></Link>
        <div className="users_wp">
        {loading ? <h1>Loading...</h1> :
            data.map(user =>
                <div className='user' key={user.id}>
                    <img width={100} height={100} src={user.avatar} alt="" />
                    <h2>{user.first_name}</h2>
                    <h3>{user.last_name}</h3>
                    <p style={{color: "darkblue"}}>{user.email}</p>
                    <button onClick={() => dispatch(saveUser(user))}>Save User</button>
                    </div>
                )
        }
    </div>
    </div>
  )
}

export default Users