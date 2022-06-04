import React from 'react'
import img1 from '../../public/assets/images/s1.png'
import img2 from '../../public/assets/images/s2.png'
import img3 from '../../public/assets/images/s3.png'

const agents = () => {
  return (
    <section className='agent'>
        <div className='agent-text'>
            <h2>Agents</h2>
            <p> looking for a property,propertyloking for propertyloking for a property</p>
        </div>
        <div className='agent-cards'>
            <div className='card-2'>
                <img src={img1.src} alt='img'/>
                <p>Mohammed</p>
                <button>learn more</button>
            </div>
            <div className='card-2'>
                <img src={img2.src} alt='img'/>
                <p>Moustafa</p>
                <button>learn more</button>
            </div>
            <div className='card-2'>
                <img src={img3.src} alt='img'/>
                <p>Ahmed</p>
                <button>learn more</button>
            </div>
        </div>
    </section>
  )
}

export default agents