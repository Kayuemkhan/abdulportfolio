import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email && !contact.phone && !contact.linkedin && !contact.github && !contact.location) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      
      {contact.email && (
        <a href={`mailto:${contact.email}`} className='contact__item'>
          <span type='button' className='btn btn--outline'>Email me</span>
        </a>
      )}
      
      {contact.phone && (
        <p className='contact__item'>
          📞 <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
      )}
      
      {contact.linkedin && (
        <p className='contact__item'>
          🔗 <a href={contact.linkedin} target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </p>
      )}
      
      {contact.github && (
        <p className='contact__item'>
          💻 <a href={contact.github} target='_blank' rel='noopener noreferrer'>GitHub</a>
        </p>
      )}
      
      {contact.location && (
        <p className='contact__item'>📍 {contact.location}</p>
      )}
    </section>
  )
}

export default Contact