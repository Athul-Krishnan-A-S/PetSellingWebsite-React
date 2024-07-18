import './PuppyCards.css'
import puppy1 from '../../assets/puppies/puppy1.png'
import puppy2 from '../../assets/puppies/puppy2.png'
import puppy3 from '../../assets/puppies/puppy3.png'
import puppy4 from '../../assets/puppies/puppy4.png'
import puppy5 from '../../assets/puppies/puppy5.png'
import puppy6 from '../../assets/puppies/puppy6.png'
import puppy7 from '../../assets/puppies/puppy7.png'
import puppy8 from '../../assets/puppies/puppy8.png'


function PuppyCards() {
    const puppyDetails = [
        {
            img: puppy1,
            code: 'MO231',
            name: 'Pomeranian White',
            Gene: 'Male',
            Age: '02 months',
            price: '6,900,000 INR'
        },
        {
            img: puppy2,
            code: 'MO502',
            name: 'Poodle Tiny Yellow',
            Gene: 'Female',
            Age: '02 months',
            price: '3,900,000 INR'
        },
        {
            img: puppy3,
            code: 'MO102',
            name: 'Poodle Tiny Sepia',
            Gene: 'Male',
            Age: '02 months',
            price: '4,000,000 INR'
        },
        {
            img: puppy4,
            code: 'MO512',
            name: 'Alaskan Malamute Grey',
            Gene: 'Male',
            Age: '02 months',
            price: '8,900,000 INR'
        },
        {
            img: puppy5,
            code: 'MO231',
            name: 'Pembroke Corgi Cream',
            Gene: 'Male',
            Age: '03 months',
            price: '7,900,000 INR'
        },
        {
            img: puppy6,
            code: 'MO502',
            name: 'Pembroke Corgi Tricolor',
            Gene: 'Female',
            Age: '02 months',
            price: '9,000,000 INR'
        },
        {
            img: puppy7,
            code: 'MO102',
            name: 'Pomeranian Grey',
            Gene: 'Female',
            Age: '02 months',
            price: '6,500,000 INR'
        },
        {
            img: puppy8,
            code: 'MO102',
            name: 'Poodle Tiny Dairy Cow',
            Gene: 'MAle',
            Age: '03 months',
            price: '5,000,000 INR'
        }
    ];

    return (
        <div className="puppy-cards-container">
            {puppyDetails.map((element, index) => (
                <div key={index} className='puppy-card'>
                    <div className='puppy-card-image-container'>
                        <img src={element.img} alt='puppy' className='puppy-card-img' />
                    </div>
                    <div className='puppy-card-contents-container'>
                        <p>{element.code} - {element.name}</p>
                        <p><span>Gene: {element.Gene}</span> Age: {element.Age}</p>
                        <p>{element.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default PuppyCards;