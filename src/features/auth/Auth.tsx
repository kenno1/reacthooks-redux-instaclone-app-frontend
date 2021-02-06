import React from "react";
import { AppDispatch } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Auth.module.css";
import Modal from "react-modal";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextField, Button, CircularProgress } from "@material-ui/core";

import {
    selectIsLoadingAuth,
    selectOpenSignIn,
    selectOpenSignUp,
    setOpenSignIn,
    resetOpenSignIn,
    setOpenSignUp,
    resetOpenSignUp,
    fetchCredStart,
    fetchCredEnd,
    fetchAsyncLogin,
    fetchAsyncRegister,
    fetchAsyncGetMyProf,
    fetchAsyncGetProfs,
    fetchAsyncCreateProf,
  } from "./authSlice";

  const customStyles = {
    overlay: {
      backgroundColor: "#777777",
    },
    content: {
      top: "55%",
      left: "50%",
  
      width: 280,
      height: 350,
      padding: "50px",
  
      transform: "translate(-50%, -50%)",
    },
  };
  
  const Auth: React.FC = () => {
    return (
        <div>
            
        </div>
    )
}

export default Auth
