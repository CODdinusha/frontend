import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-img-list">
        <img src={product.image} alt={product.name} />
        <img src={product.image} alt={product.name} />
        
      </div>
      <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt={product.name} />
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="dull star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">${product.new_price}</div>
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          
        </div>
        <div className="productdisplay-right-description">
        This men's long sleeve shirt features a retro striped design, exuding a classic yet casual vibe. It is collarless, often referred to as a grandad style, which adds a unique and laid-back touch to the look. Perfect for both casual outings and more dressed-up occasions, this shirt is a versatile addition to any wardrobe.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>

             </div>
          </div>
          <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
          <p className='productdisplay-right-category'><span>Category :</span>Women , T-Shirt, Crop Top</p>
          <p className='productdisplay-right-category'><span>Tags :</span>Modern , Latest</p>
    </div>
    </div>
  );
}

export default ProductDisplay;
