import { ProfileContext } from "./ProfileContext";
import Profile from "./Profile";
import ProfileAddres from "./ProfileAddres";
import { useState } from "react";
import ProfileForm from "./ProfileForm";

export default function ProfileApp(){
    const [name, setName] = useState("Mikha")
    return(
        <>
        <ProfileContext.Provider value={name}>
            <h1>Profile App</h1>
            <ProfileForm name = {name} setName={setName}/>
            <Profile/>
            <ProfileAddres/>
        </ProfileContext.Provider>
        </>
    )
}