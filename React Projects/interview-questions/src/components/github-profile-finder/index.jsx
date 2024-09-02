import { useEffect, useState } from "react";
import User from "./card";
import './style.css';

export default function GithubProfileFinder(){

    const [userName, setUserName] = useState("NourAlHek12");
    const[userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData(){
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${userName}`);

        const data = await res.json();
        if(data){
            setUserData(data);
            setLoading(false);
            setUserName('');
        }

        console.log(data);
    }
    function handleSumbit(){
        fetchGithubUserData()
    }

    useEffect(() =>{
        fetchGithubUserData()
    },[]);

    if(loading){
        return <div>Loading data! Please wait</div>
    }

    return (<div className="github-profile-container">
        <div className="input-wrapper">
            <input 
            name="search-by-username"
            type="text"
            placeholder="Search Github Username..."
            value={userName}
            onChange={(event) => setUserName(event.target.value)}/>
            <button onClick={handleSumbit}>Search</button>
        </div>
        {
            userData !== null ? <User user={userData}/> : null
        }
    </div>);
}