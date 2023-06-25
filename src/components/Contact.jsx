import '../App.css'

function Contact() {

  return (
    <>
      <div className='contact-1'>
        <h2>Contact Us</h2>

            <h3>Address:</h3>
            <p>
                123 Main Street<br />
                City, State<br />
                Country<br />
                ZIP Code
            </p>

            <h3>Phone:</h3>
            <p>+1-555-123-4567</p>

            <h3>Email:</h3>
            <p className="contact-link"><a href="mailto:info@example.com">info@example.com</a></p>
      </div>
      <div className='contact-2'>
            <h3>Office Hours:</h3>
            <p>Monday to Friday: 9:00 AM - 5:00 PM (local time)</p>

            <h3>Social Media:</h3>
            <ul className="contact-link">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>

      </div>
    </>
  )
}

export default Contact;