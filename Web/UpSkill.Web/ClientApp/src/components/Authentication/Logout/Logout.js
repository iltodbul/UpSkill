import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import notificationContext from "../../../Context/NotificationContext";

import { logout } from "../../../actions/auth";  

const Logout = (props) => {
  const { isLoggedIn } = useSelector(state => state.auth);
  let [notification, setNotification] = useContext(notificationContext);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!isLoggedIn){
        props.history.push("/Login");        
    }

    dispatch(logout())
        .then(() => { 
          props.history.push("/");
          localStorage.removeItem("user");                
          setNotification({type:'LOGOUT', payload: `Goodbye !`});
        })
        .catch(() => {
          props.history.push("/Login");
        });
  }, []);
   
  return (
    <div></div>
  );
}

export default Logout;