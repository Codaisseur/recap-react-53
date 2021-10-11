import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import { useState } from "react";

const NavBar = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginLeft: 60,
        marginRight: 60,
      }}
    >
      <Link to='/'>Home</Link>
      {!props.userName ? (
        <Link to='/login'>Login</Link>
      ) : (
        <>
          <h3>Hello {props.userName}!</h3>
          <button onClick={() => props.logout()}>logout</button>
        </>
      )}
    </div>
  );
};

function App() {
  const initialProfile = {
    name: null,
    token: null,
    email: null,
  };
  const [profile, setProfile] = useState(initialProfile);

  console.log("do i have a profile in app.js??", profile);

  return (
    <div className='App'>
      <NavBar
        userName={profile.name}
        setProfile={setProfile}
        logout={() => setProfile(initialProfile)}
      />
      <Switch>
        <Route
          path='/login'
          render={() => <LoginPage setProfile={setProfile} />}
        />
        <Route path='/' render={() => <Homepage token={profile.token} />} />
      </Switch>
    </div>
  );
}

export default App;
