import { useState } from 'react'
import { studioInfo } from '../siteInfo.js'
import '../styles/Contact.css'

// The form starts empty. We use this again after the form is sent.
const emptyForm = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  message: '',
}

function Contact() {
  // formData holds what the visitor has typed so far
  const [formData, setFormData] = useState(emptyForm)

  function handleChange(event) {
    // event.target.name is the field, like "email". event.target.value is what was typed.
    const fieldName = event.target.name
    const fieldValue = event.target.value
    setFormData({ ...formData, [fieldName]: fieldValue })
  }

  function handleSubmit(event) {
    // Stop the browser from reloading the page
    event.preventDefault()

    // There is no backend yet, so this opens the visitor's email app with the
    // enquiry already written out. Nothing is stored on the website.
    // LATER: replace this with a call to your Spring Boot REST API.
    const subject = 'Enquiry from website: ' + formData.eventType
    const body =
      'Name: ' + formData.name + '\n' +
      'Phone: ' + formData.phone + '\n' +
      'Email: ' + formData.email + '\n' +
      'Event type: ' + formData.eventType + '\n' +
      'Event date: ' + formData.eventDate + '\n\n' +
      formData.message

    const mailLink =
      'mailto:' + studioInfo.email +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body)

    window.location.href = mailLink
  }

  return (
    <>
      {/* Reserve-your-date call to action */}
      <section className="cta-band">
        <p className="eyebrow eyebrow-light">Reserve Your Date</p>
        <h2>Your special moment is waiting to be captured.</h2>
        <p className="cta-text">
          Planning a wedding, engagement, birthday, ceremony, or celebration? Let’s create photographs
          you will love for years to come.
        </p>
        <a className="button button-gold" href="#contact">Start Your Enquiry</a>
      </section>

      <section className="section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">Contact</p>
          <h2>Let’s Create Something Beautiful Together</h2>
          <p className="body-text">Have an upcoming event? We’d love to hear about it.</p>
        </div>

        <div className="contact-links">
          <a className="contact-card" href={studioInfo.phoneLink}>
            <span className="contact-label">Call Us</span>
            <span className="contact-value">{studioInfo.phoneDisplay}</span>
          </a>
          <a className="contact-card" href={studioInfo.whatsappLink} target="_blank" rel="noreferrer">
            <span className="contact-label">WhatsApp</span>
            <span className="contact-value">Chat with us</span>
          </a>
          <a className="contact-card" href={'mailto:' + studioInfo.email}>
            <span className="contact-label">Email</span>
            <span className="contact-value">{studioInfo.email}</span>
          </a>
          <div className="contact-card">
            <span className="contact-label">Studio</span>
            <span className="contact-value">{studioInfo.address}</span>
          </div>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Full name *</label>
            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone number *</label>
            <input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email address *</label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="eventType">Event type *</label>
            <select id="eventType" name="eventType" required value={formData.eventType} onChange={handleChange}>
              <option value="" disabled>Select an event</option>
              <option value="Wedding">Wedding</option>
              <option value="Pre-wedding">Pre-wedding</option>
              <option value="Post-wedding">Post-wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Puberty ceremony">Puberty ceremony</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="eventDate">Event date</label>
            <input id="eventDate" name="eventDate" type="date" value={formData.eventDate} onChange={handleChange} />
          </div>

          <div className="form-field">
            <label htmlFor="message">Tell us about your event</label>
            <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} />
          </div>

          <button className="submit-button" type="submit">Send Enquiry</button>
          <p className="small-text form-note">
            This opens your email app with your enquiry filled in. It is not sent from this website yet.
          </p>
        </form>
      </section>
    </>
  )
}

export default Contact
