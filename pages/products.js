import Head from 'next/head';
import settings from '../settings';

const Products = () => {
  const adjustPropensity = (e) => {
    var callFlowsContext = {
      "channel": "WEB",   // update before using. e.g. “WEB”
      "language": "EN",   // update before using. e.g. “en”
      "currencyCode": "EUR",  // update before using. e.g. “EUR”
      "pointOfSale": window._boxever_settings.pointOfSale, // or value from your data layer
      "browserId": Boxever.getID(),
      "clientKey": Boxever.client_key,
      "friendlyId": "catia_experience",
      "params": {
        "customPropensity": e.target.dataset.id
      }
    };

    Boxever.callFlows(callFlowsContext, (response) => {
      console.log(response);
    });
  };

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
    var date = new Date;
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
          "orderedAt": date.toISOString(),
          "currency": "EUR",
          "quantity": 1,
          "price": 2.00,
          "productId": "BAR_1",
          "referenceId": "BAR_1"
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
      "product": [
        {
          "item_id": "BAR_1"
        }
      ]
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
      </Head>
      <div>
        <h1>Products</h1>
        <button onClick={forceClose}>Force close</button>
        <button onClick={adjustPropensity} data-id="0">AdjustPropensity: 0</button>
        <button onClick={adjustPropensity} data-id="0.5">AdjustPropensity: 0.5</button>
        <button onClick={adjustPropensity} data-id="1">AdjustPropensity: 1</button>
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