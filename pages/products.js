import Head from 'next/head';
import settings from '../settings';

const Products = () => {
  const forceClose = () => {
    // IDENTITY EVENT
    _boxeverq.push(function () {
      var event = {
        "browser_id": Boxever.getID(),
        "channel": "WEB",
        "type": "FORCE_CLOSE",
        "page": "Home",
        "pos": settings.POS
      }

      Boxever.eventCreate(event, (data) => {
        console.log(`Event ${event.type} pushed: ${data.status}`);
      }, 'json');
    });
  };

  const addToCart = () => {
    // IDENTITY EVENT
    _boxeverq.push(function () {
      var event = {
        "browser_id": Boxever.getID(),
        "channel": "WEB",
        "type": "ADD",
        "language": "EN",
        "currency": "EUR",
        "page": "Home",
        "pos": settings.POS,
        "product": {
          "type": "BAR",
          "item_id": "BAR_1",
          "name": "Chocolate Peanut Bar",
          "currency": "EUR",
          "price": 2
        }
      };

      Boxever.eventCreate(event, (data) => {
        console.log(`Event ${event.type} pushed: ${data.status}`);
      }, 'json');
    });
  };

  const confirmOrder = () => {
    var event = {
      "channel": "WEB",
      "type": "CONFIRM",
      "language": "EN",
      "currency": "EUR",
      "page": "Home",
      "pos": settings.POS,
      "browser_id": Boxever.getID(),
      "product": {
        "type": "BAR",
        "item_id": "BAR_1",
        "name": "Chocolate Peanut Bar",
        "currency": "EUR",
        "price": 2
      }
    };

    Boxever.eventCreate(event, (data) => {
      console.log(`Event ${event.type} pushed: ${data.status}`);
    }, 'json');
  };

  const checkoutOrder = () => {
    var event = {
      "channel": "WEB",
      "type": "CHECKOUT",
      "language": "EN",
      "currency": "EUR",
      "page": "Home",
      "pos": settings.POS,
      "browser_id": Boxever.getID(),
      "reference_id": "ABC123",
      "status": "PURCHASED"
    };

    Boxever.eventCreate(event, (data) => {
      console.log(`Event ${event.type} pushed: ${data.status}`);
    }, 'json');
  };

  return (
    <>
      <Head>
        <title>Healthy Living Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Products</h1>
        <button onClick={forceClose}>Force close</button>
        <ul>
          <li className='component'>
            <div className='wrapper'>
              <h2>Chocolate Peanut Bar</h2>
              <button onClick={addToCart}>Add to cart</button>
              <button onClick={confirmOrder}>Confirm Order</button>
              <button onClick={checkoutOrder}>Checkout</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
};

export default Products;