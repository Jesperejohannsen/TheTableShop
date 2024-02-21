import "./ContactPage.css";
import TTSLogo from "../../assets/logo.png";

let OpeningHours = [
  "Mandag: 10:00 - 18:00",
  "Tirsdag: 10:00 - 18:00",
  "Onsdag: 10:00 - 18:00",
  "Torsdag: 10:00 - 18:00",
  "Fredag: 10:00 - 16:00",
  "Lørdag: 10:00 - 12:00",
  "Søndag: 10:00 - 12:00",
];

let SocialMediaLinks = [
  "Facebook: [Link]",
  "Instagram: [Link]",
  "Twitter: [Link]",
  "LinkedIn: [Link]",
];

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
          <strong>Follow Us:</strong> {SocialMediaLinks.map((link) => <p>{link}</p>)}
        </p>
      </div>
      <div className="address">
        <p>
          <strong>Adresse:</strong> [Address]
        </p>
      </div>
      <div>
        <p>
          <strong>Åbningstider:</strong> {OpeningHours.map((day) => <p>{day}</p>)}
        </p>
      </div>
      <div>
        <p>
          <strong>Find os her:</strong> [Google Maps Link]
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
