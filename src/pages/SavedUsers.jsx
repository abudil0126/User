import "./SavedUsers.css";
import { useSelector } from "react-redux"
import SaveUser from "../redux/features/SaveUser";

const SavedUsers = () => {

    const data = useSelector(state => state.saveUser.saved)
    console.log(data)
    return (
        <div className="container">
        <div className="users_wp">
        {
            data.map(user =>
                <div className='user' key={user.id}>
                    <img width={100} height={100} src={user.avatar} alt="" />
                    <h2>{user.first_name}</h2>
                    <h3>{user.last_name}</h3>
                    <p style={{color: "darkblue"}}>{user.email}</p>
                    <button onClick={() => dispatch(SaveUser(user))}>Save User</button>
                    </div>
                )
        }
    </div>
    </div>
    )
}

export default SavedUsers