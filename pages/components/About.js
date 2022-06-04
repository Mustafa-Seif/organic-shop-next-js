import React from 'react'
import about from '../../public/assets/images/hero.png'

const About = () => {
    return (
        <section className='about' >
            <div> <img alt='about' src={about.src} /></div>
            <div className='about-text'>
                <h2>We Are The Best Real State Company</h2>
                <p>lorem loking for a property,lorem loking.lorem loking for a property,
                lorem loking.lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.
                lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.
                lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.
                lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.
                lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.lorem loking for a property,lorem loking.
                </p>
                <button>View More Details</button>
            </div>

        </section>
    )
}

export default About