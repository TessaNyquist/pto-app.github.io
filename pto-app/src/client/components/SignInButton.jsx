import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
//import DropdownButton from "react-bootstrap/DropdownButton";
//import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/esm/Button";

/**
 * Renders a drop down button with child buttons for logging in with a popup or redirect
 * Note the [useMsal] package 
 */

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
     if (loginType === "redirect") {
      instance.loginRedirect(loginRequest).catch((e) => {
        console.log(e);
      });
    }
  };
  return (
    <Button       
    variant="secondary"
    className="ml-auto"
    drop="start"
    title="Sign In"
    onClick={() => handleLogin("redirect")}> Sign In </Button>
  );
};

/**
 *     <DropdownButton
      variant="secondary"
      className="ml-auto"
      drop="start"
      title="Sign In"
    >
      <Dropdown.Item as="button" onClick={() => handleLogin("popup")}>
        Sign in using Popup
      </Dropdown.Item>
      <Dropdown.Item as="button" onClick={() => handleLogin("redirect")}>
        Sign in using Redirect
      </Dropdown.Item>
    </DropdownButton>
 */