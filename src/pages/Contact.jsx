import { Form } from "react-router-dom";

export const contactData = async ({request}) => {
    try {
        const response = await request.formData();
        console.log(response);
        const data = Object.fromEntries(response);
        console.log(data);
        return null;
    } catch (error) {
        console.log(error);
        
    }
}

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <Form method="post" action="/contact" className="contact-form">
        <div className="input-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message here..."
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </Form>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@example.com</p>
      </div>
    </div>
  );
};
