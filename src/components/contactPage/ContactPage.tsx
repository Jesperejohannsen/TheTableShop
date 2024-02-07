import "./ContactPage.css";
import TTSLogo from "../../assets/logo.png";

const ContactPage = () => {
  return (
    <div className="contactCard">
      <div className="logoPlaceholder">
        <img
          src={TTSLogo}
          alt="Business Logo"
          className="businessLogo"
        />
      </div>
      <h1 className="businessName">Kontakt os her</h1>
      <div className="contactInfo">
        <p>
          <strong>Telefon nr:</strong> (+45) 12345678
        </p>
      </div>
        <div className="contactInfo">
            <p>
            <strong>Email:</strong> Jesper@test.com
            </p> 
        </div>
      <div className="socialMedia">
        <p>
          <strong>Follow Us:</strong> [Social Media Links]
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
