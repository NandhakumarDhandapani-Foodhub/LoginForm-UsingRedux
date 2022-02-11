import React from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../SliceComp/userSlice";

const FirstPage = () => {
    const user = useSelector(selectUser);


    return (
        <div className="first">
            <h1>Welcome Screen !!: </h1> <h2> {user.name}</h2>
            <h1>Your Email Id is : </h1>  <h2>{user.email}</h2>
            <h1>Your PASSWORD is : </h1>  <h2>{user.password}</h2>
        </div>
    );
};

export default FirstPage;




