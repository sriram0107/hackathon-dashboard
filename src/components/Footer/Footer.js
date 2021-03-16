import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./Footer.css";

// icon styles
const styles = {
  fontSize: "35px",
  margin: "30px",
  cursor: "pointer",
};

const Footer = () => {
  return (
    <div className="footer">
      <InstagramIcon style={styles} />
      <FacebookIcon style={styles} />
      <EmailIcon style={styles} />
      <WhatsAppIcon style={styles} />
    </div>
  );
};

export default Footer;
