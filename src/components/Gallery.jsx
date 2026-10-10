import { useState } from 'react'
import '../styles/Gallery.css'

// The filter buttons. "id" must match the "category" of the photos below.
const categories = [
  { id: 'all', label: 'All' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'engagements', label: 'Engagements' },
  { id: 'puberty', label: 'Puberty Ceremonies' },
  { id: 'birthdays', label: 'Birthdays' },
]

// Each item is one photo. To add a photo, copy one line, change the file name and category.
const galleryPhotos = [
  { category: 'weddings', src: '/images/marriage/m-3.jpeg', alt: 'Couple in wedding attire with garlands' },
  { category: 'weddings', src: '/images/marriage/m-4.jpeg', alt: 'Bride and groom during a wedding ceremony' },
  { category: 'weddings', src: '/images/marriage/m-5.jpeg', alt: 'Hands during a wedding ritual' },
  { category: 'weddings', src: '/images/wedding/w-1.jpeg', alt: 'Bride and groom in traditional red and cream attire' },
  { category: 'weddings', src: '/images/wedding/w-2.jpeg', alt: 'Couple in traditional wedding outfits outdoors' },
  { category: 'weddings', src: '/images/wedding/w-3.jpeg', alt: 'Couple embracing at dusk' },
  { category: 'weddings', src: '/images/wedding/w-4.jpeg', alt: 'Couple with flower garlands' },
  { category: 'weddings', src: '/images/wedding/w-5.jpeg', alt: 'Bride in gold jewellery and traditional dress' },
  { category: 'weddings', src: '/images/wedding/w-6.jpeg', alt: 'Couple in a formal portrait' },
  { category: 'weddings', src: '/images/wedding/w-7.jpeg', alt: 'Couple during a wedding ritual' },
  { category: 'engagements', src: '/images/engagement/eng-1.jpeg', alt: 'Engaged couple in traditional outfits' },
  { category: 'engagements', src: '/images/engagement/eng-2.jpeg', alt: 'Couple with hands and rings' },
  { category: 'engagements', src: '/images/engagement/eng-3.jpeg', alt: 'Couple walking in a green garden' },
  { category: 'engagements', src: '/images/engagement/eng-4.jpeg', alt: 'Couple sharing a moment outdoors' },
  { category: 'puberty', src: '/images/puberty/pub-1.jpeg', alt: 'Girl in a traditional silk saree' },
  { category: 'puberty', src: '/images/puberty/pub-2.jpeg', alt: 'Girl adorned with traditional jewellery' },
  { category: 'puberty', src: '/images/puberty/pub-3.jpeg', alt: 'Girl in a saree surrounded by flowers' },
  { category: 'puberty', src: '/images/puberty/pub-4.jpeg', alt: 'Girl in a purple traditional dress outdoors' },
  { category: 'puberty', src: '/images/puberty/pub-5.jpeg', alt: 'Girl with traditional mehndi on her hands' },
  { category: 'birthdays', src: '/images/birthday/bir-1.jpeg', alt: 'Family celebrating a child’s birthday' },
  { category: 'birthdays', src: '/images/birthday/bir-2.jpeg', alt: 'Child enjoying a birthday cake' },
]

function Gallery() {
  // The category the visitor clicked. "all" shows every photo.
  const [activeCategory, setActiveCategory] = useState('all')

  // Build a new list with only the photos that match the active category
  const visiblePhotos =
    activeCategory === 'all'
      ? galleryPhotos
      : galleryPhotos.filter((photo) => photo.category === activeCategory)

  return (
    <section className="section section-light" id="gallery">
      <div className="section-heading">
        <p className="eyebrow">Gallery</p>
        <h2>Stories We’ve Captured</h2>
        <p className="body-text">
          A collection of beautiful moments, genuine emotions, and unforgettable celebrations.
        </p>
      </div>

      <div className="filter-bar" role="group" aria-label="Filter photos by category">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={activeCategory === category.id ? 'filter-button active' : 'filter-button'}
            aria-pressed={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* CSS columns keep every photo at its own shape, so nothing is stretched or cropped */}
      <div className="gallery-grid">
        {visiblePhotos.map((photo) => (
          <figure className="gallery-item" key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Gallery
