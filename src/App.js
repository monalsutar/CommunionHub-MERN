import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ExploreEvents from "./comps/ExploreEvents";
import Header from "./comps/header";
import About from "./comps/about";
import Footer from "./comps/footer";
import Body from "./comps/body";
import Events from "./comps/event-section";
import Login from "./comps/login";
import Signup from "./comps/signup";
import AddEvent from "./comps/AddEvent";
// import 'leaflet/dist/leaflet.css';


import ForgotPassword from "./comps/ForgotPassword";
import VerifyOTP from "./comps/VerifyOTP";
import ResetPassword from "./comps/ResetPassword";


const isLoggedIn = () => {
  return !!localStorage.getItem("username"); // or use your token/key
};

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Body />
            <About />
            <Events />
            <Footer />
          </>
        } />
        <Route path="/explore" element={
          <>
            <Header />
            <ExploreEvents />
            <Footer />
          </>
        } />
        <Route path="/home" element={
          <>
            <Header />
            <Body />
            <About />
            <Events />
            <Footer />
          </>
        } />

        <Route path="/body" element={
          <>
            <Header />
            <Body />
            <About />
            <Events />
            <Footer />
          </>
        } />


        <Route path="/events" element={
          <>
            <Header />
            <ExploreEvents />
            <Footer />
          </>
        } />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />


        <Route path="/add-event" element={
          isLoggedIn() ? (
            <>
              <Header />
              <AddEvent />
              <Footer />
            </>
          ) : (
            <>
              <Header />
              <AddEvent />
              <Footer />
            </>  // redirecting to login if not logged in
          )
        } />


        {/* // In your <Routes> or <Switch> */}
        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>


    </Router>
  );
}

export default App;
