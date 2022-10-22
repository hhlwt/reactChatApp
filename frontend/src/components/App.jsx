import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import Notfoundpage from "./pages/Notfoundpage.jsx";
import { Layout } from "./Layout.jsx";
import Login from "./pages/Authorization.jsx";
import RequireAuth from '../hoc/RequireAuth.jsx'
import AuthProvider from "../hoc/AuthProvider.jsx";
import { Button, Navbar, Nav } from 'react-bootstrap';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          } />
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}