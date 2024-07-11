import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail from "../../assets/mail.png";
import contact_no from "../../assets/phone.png";
import location from "../../assets/location.png";
import arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    console.log(formData)
    formData.append("access_key", "e1794948-a305-4aaf-8ee5-a5624d26d18c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data)

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h2>
          Send us a message <img src={msg_icon} />
        </h2>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>
        <ul>
          <li>
            <img src={mail} />
            Contact@GreatStack.dev
          </li>
          <li>
            <img src={contact_no} />
            +1 123-456-7890
          </li>
          <li>
            <img src={location} />
            77 Massachusetts Ave, Cambridge <br />
            MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
          />
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email id" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button className="btn dark-btn">
            Submit now <img src={arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
