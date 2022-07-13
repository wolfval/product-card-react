const products = {
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
  };

const rootElement = document.getElementById('root');

class Card extends React.Component {
  constructor () {
    super();
  }

  render() {
    return (
      <div className="product">
          <div className="product__image-wrapper">
              <img src="https://content2.rozetka.com.ua/goods/images/big_tile/163399632.jpg" alt="card" className="product__image"></img>
          </div>
          <div className="product__content">
            <div className="product__block-rating-and-price">
              <div className="product__rating">
                <div className="product__rating-count">2.89</div>
                <i className="icon-star"></i>
              </div>
              <div className="product__price">15999</div>
            </div>
            <div className="product__about">Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black</div>
            <div className="product__category">laptops</div>
          </div>
          <button className="product__button" data-element="cardBtn">ADD TO CART</button>
        </div>
    );
  }
}

ReactDOM.render(<Card product />, rootElement);
