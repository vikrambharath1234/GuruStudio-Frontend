import '../styles/Services.css'

// Edit this list to change the services.
// Each item becomes one card. "image" is the photo shown on that card.
const services = [
  {
    title: 'Wedding Photography',
    text: 'Your wedding day, from the rituals and ceremonies to the quiet moments in between.',
    image: '/images/wedding/w-1.jpeg',
  },
  {
    title: 'Pre-Wedding Shoots',
    text: 'Relaxed portrait sessions before the wedding, planned around the couple.',
    image: '/images/engagement/eng-3.jpeg',
  },
  {
    title: 'Post-Wedding Shoots',
    text: 'Relaxed portrait sessions after the wedding celebrations are over.',
    image: '/images/wedding/w-3.jpeg',
  },
  {
    title: 'Birthday Celebrations',
    text: 'Birthday celebrations, from the cake cutting to the candid laughter with family.',
    image: '/images/birthday/bir-1.jpeg',
  },
  {
    title: 'Puberty Ceremony',
    text: 'Puberty ceremonies, documented with respect for family traditions.',
    image: '/images/puberty/pub-3.jpeg',
  },
  {
    title: 'Engagement Photography',
    text: 'The ring exchange and the families coming together to celebrate.',
    image: '/images/engagement/eng-2.jpeg',
  },
  {
    title: 'Special Events',
    text: 'Anniversaries, housewarming ceremonies, and family gatherings.',
    image: '/images/marriage/m-5.jpeg',
  },
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-heading">
        <p className="eyebrow">Our Services</p>
        <h2>Photography for Every Occasion</h2>
        <p className="body-text">
          Whatever the occasion, we are here to turn your special moments into lasting memories.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-image-box">
              <img src={service.image} alt={service.title} loading="lazy" />
            </div>
            <div className="service-body">
              <h3>{service.title}</h3>
              <p className="small-text">{service.text}</p>
              <a className="text-link" href="#contact">Enquire Now →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
