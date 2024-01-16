import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box color">Reviews(122)</div>
      </div>
      <div className="description-description">
        <p> The e-commerce app revolutionizes retail, providing users with a seamless, 
            on-the-go shopping experience. Through intuitive interfaces, customers effortlessly
             browse a diverse range of products, make secure transactions, and track orders with 
             ease. Personalized recommendations and efficient search functionalities enhance the user
              journey, while integrated payment gateways ensure hassle-free transactions. Push notifications 
              keep users informed about exclusive deals and order updates. The app's responsive design
               accommodates various devices, creating a convenient and accessible platform for both buyers
                and sellers. With robust security measures and streamlined features, this e-commerce app represents
                 a modern and efficient solution for online retail, catering to the evolving needs of digital consumers.</p>
        <p>
E-commerce: Online buying and selling, simplifying transactions, global reach, and convenience for businesses and consumers.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
