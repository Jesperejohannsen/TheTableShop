import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactCard">
      <h1 className="businessName">The Table Shop</h1>
      <div className="contactInfo">
        <p>
          <strong>Address:</strong> 123 Business St, City
        </p>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Follow Us:</strong> [Social Media Links]
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
