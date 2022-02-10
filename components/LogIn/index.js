import { useEffect } from "react";
import settings from "../../settings";

const LogIn = () => {
  const handleSubmit = (e) => {
    var email = e.target.email.value;
    e.preventDefault();

    // IDENTITY EVENT
    _boxeverq.push(function () {
      var event = {
        "browser_id": Boxever.getID(),
        "channel": "WEB",
        "type": "IDENTITY",
        "language": "EN",
        "currency": "EUR",
        "page": "Home",
        "pos": settings.POS,
        "email": email
      };

      Boxever.eventCreate(event, (data) => {
        console.log(`Event ${event.type} pushed: ${data.status}`);
      }, 'json');
    });
  }

  return (
    <div className="component login">
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LogIn;