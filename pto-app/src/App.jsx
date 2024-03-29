import React, { useState } from 'react';

import { PageLayout } from './client/components/PageLayout';
import { loginRequest } from './authConfig';
import { callMsGraph } from './graph';
import { ProfileData } from './client/components/ProfileData';

import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';

import './App.css';

import Button from 'react-bootstrap/Button';
//import Login from './Login.js';

import { EmployeeData } from './client/components/EmployeeData';


//import Login from './Login.js';
/**
* Renders information about the signed-in user or a button to retrieve data about the user
*/
const RequestEmployeeContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestEmployeeData() {
      // Silently acquires an access token which is then attached to a request for MS Graph data
      instance
          .acquireTokenSilent({
              ...loginRequest,
              account: accounts[0],
          })
          .then((response) => {
              callMsGraph(response.accessToken).then((response) => setGraphData(response));
          });
  }

  return (
      <>
          <h5 className="card-title">Welcome {accounts[0].name}</h5>
          <br/>
          {graphData ? (
              <EmployeeData graphData={graphData} />
          ) : (
              <Button variant="secondary" onClick={RequestEmployeeData}>
                  Request Employee Information
              </Button>
          )}
      </>
  );
};
/**
* Renders information about the signed-in user or a button to retrieve data about the user
*/
const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
      // Silently acquires an access token which is then attached to a request for MS Graph data
      instance
          .acquireTokenSilent({
              ...loginRequest,
              account: accounts[0],
          })
          .then((response) => {
              callMsGraph(response.accessToken).then((response) => setGraphData(response));
          });
  }

  return (
      <>
          <h5 className="card-title">Welcome {accounts[0].name}</h5>
          <br/>
          {graphData ? (
              <ProfileData graphData={graphData} />
          ) : (
              <Button variant="secondary" onClick={RequestProfileData}>
                  Request Profile Information
              </Button>
          )}
      </>
  );
};

/**
* If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
*/
const MainContent = () => {
  return (
      <div className="MainContent">
          <AuthenticatedTemplate>
              <ProfileContent />
              <RequestEmployeeContent />
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
              <h5 className="UnauthTemplate"> Please sign-in to see your profile information.</h5>
          </UnauthenticatedTemplate>
      </div>
  );
};

export default function App() {
  return (
      <PageLayout>
          <center>
              <MainContent />
          </center>
      </PageLayout>
  );
}
/**function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='CompanyName'>Alan Lescht and Associates</h1>
        <h2 className='App-title'>PTO Request</h2>
        <Login classname='Login'></Login>
  
      </header>
    </div>
  );
}

export default App;
*/
