import React from 'react'
import img1 from '../../public/assets/images/p1.png'
import img2 from '../../public/assets/images/p2.png'
import img3 from '../../public/assets/images/p3.png'

const properties = () => {
    return (
        <div className='product'>
            <div>
                <h2>Properties</h2>
                <p>looking for a property,propertyloking for propertyloking for a property ?</p>
            </div>
            <div className='cards-house'>
                <div className='card-house'>
                    <img src={img1.src} alt='img' />
                    <p>Cairo</p>
                    <button>Veiw</button>
                </div>
                <div className='card-house'>
                    <img src={img1.src} alt='img' />
                    <p>Alexandrai</p>
                    <button>Veiw</button>
                </div>
                <div className='card-house'>
                    <img src={img1.src} alt='img' />
                    <p>Port Said</p>
                    <button>Veiw</button>
                </div>
            </div>
        </div>
    )
}

export default properties