'use strict';

const product = {
  "id": "76w0hz7015kkr9kjkav",
  "images": [
    "https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg",
    "https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg"
  ],
  "title": "Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black",
  "rating": 2.89,
  "price": 15999,
  "category": "laptops",
  "brand": "acer"
}

class Card extends React.Component {
  render() {
    return (
      <div className="product">
        <div className="product__image-wrapper">
          <img
            src={this.props.images}
            alt="card"
            className="product__image"
          />
        </div>
        <div className="product__content">
          <div className="product__block-rating-and-price">
            <div className="product__rating">
              <div className="product__rating-count">{this.props.rating}</div>
              <i className="icon-star"></i>
            </div>
            <div className="product__price">{this.props.price}</div>
          </div>
          <div className="product__about">{this.props.title}</div>
          <div className="product__category">{this.props.category}</div>
        </div>
        <button className="product__button" data-element="cardBtn">ADD TO CART</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Card
    images={product.images[0]}
    title={product.title}
    rating={product.rating}
    price={product.price}
    category={product.category}
  />,
  document.getElementById('root'));
