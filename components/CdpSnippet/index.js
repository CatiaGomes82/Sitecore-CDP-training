import { useEffect, useState } from "react";
import settings from "../../settings";

const CdpSnippet = () => {
  const [isLoaded, setIsLoaded] = useState(0);

  useEffect(() => {
    // SETTINGS 
    window._boxeverq = window._boxeverq || [];
    window._boxever_settings = {
      client_key: 'psfu6uh05hsr9c34rptlr06dn864cqrx', // Replace with your client key
      target: 'https://api.boxever.com/v1.2', // Replace with your API target endpoint specific to your data center region
      cookie_domain: '.netlify.app', // Replace with the top level cookie domain of the website that is being integrated e.g ".example.com" and not "www.example.com"
      javascriptLibraryVersion: "1.4.8",
      pointOfSale: settings.POS,
      web_flow_target: "https://d35vb5cccm4xzp.cloudfront.net" 
    };

    // APPEND SCRIPT
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://d1mj578wat5n4o.cloudfront.net/boxever-1.4.8.min.js';
    s.addEventListener('load', () => {
      setIsLoaded(true);
    })
    document.body.appendChild(s);
  })

  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    // VIEW EVENT
    _boxeverq.push(function () {
      var event = {
        "browser_id": Boxever.getID(),
        "channel": "WEB",
        "type": "VIEW",
        "language": "EN",
        "currency": "EUR",
        "page": "Home",
        "pos": settings.POS
      };

      Boxever.eventCreate(event, (data) => {
        console.log(`Event ${event.type} pushed: ${data.status}`);
      }, 'json');
    });

  }, [isLoaded])

  return null;
}

export default CdpSnippet;