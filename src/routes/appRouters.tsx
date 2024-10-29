import React, { FC } from "react";
import { Routes,Route,Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Characters from "../pages/features/characters";
import Login from "../pages/auth/login";
import SpaceShips from "../pages/features/spaceShips";
import Planets from "../pages/features/planets";
import FeaturePage from "../pages/features/featurePage";

const AppRouters:FC = ()=>{
    const auth = useSelector((state:RootState)=> state.slice.auth);
    console.log(auth);
    return(
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={auth ? <Navigate to="/characters" /> : <Login />} />

            <Route path="/characters" element={auth ? <Characters /> : <Navigate to="/login" />} />
            <Route path="/planets" element={auth ? <Planets /> : <Navigate to="/login" />} />
            <Route path="/space-ships" element={auth ? <SpaceShips /> : <Navigate to="/login" />} />
            <Route path="/characters/:id" element={auth ? <FeaturePage></FeaturePage> : <Navigate to="/login" />} />
            <Route path="/planets/:id" element={auth ? <FeaturePage></FeaturePage> : <Navigate to="/login" />} />
            <Route path="/space-ships/:id" element={auth ? <FeaturePage></FeaturePage> : <Navigate to="/login" />} />
        </Routes>
    )
}

export default AppRouters;