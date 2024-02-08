import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false); // Added state for scroll tracking
  const [activeLink, setActiveLink] = useState("home"); // Added state for active link
  const [user] = useAuthState(auth); // Added state for user
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    
  };
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  };
  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/" className="logoo">
          <h2 style={{ fontSize: "50px", color: "green" }}>నిसाRGA</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#booking"
              className={
                activeLink === "booking" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("booking")}
            >
              Book A Pickup
            </Nav.Link>
            <Nav.Link
              href="#aboutus"
              className={
                activeLink === "aboutus" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutus")}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              href="#activities"
              className={
                activeLink === "activities"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("activities")}
            >
              Activities
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            {!user ? (
              <button className="vvd" onClick={signInWithGoogle}>
                <span>Login</span>
              </button>
            ) : (
              <>
                <img
                  src={user?.photoURL || ""}
                  style={{
                    borderRadius: "50%",
                    border: "1px solid black",
                    width: "35px",
                    height: "35px",
                  }}
                />
                <button className="vvd" onClick={signUserOut}>
                  <span>Logout</span>
                </button>
              </>
            )}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
