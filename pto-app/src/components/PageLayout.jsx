/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react";
//import Navbar from "react-bootstrap/Navbar";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import "./PageLayout.css";
/**
 * Renders the navbar component with a sign in or sign out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
    <div className="PayLayout">
        <div className="App-header">
          <h1 className="companyname"> Alan Lescht and Associates </h1>
          <h2 className='App-title'> PTO Request</h2>
          <div className="button"> {isAuthenticated ? <SignOutButton /> : <SignInButton />} </div>
      </div>
      <br />
      <br />
      <h5>
        <center>  </center>
      </h5>
      <br />
      <br />
      {props.children}
      </div>
    </>
  );
};