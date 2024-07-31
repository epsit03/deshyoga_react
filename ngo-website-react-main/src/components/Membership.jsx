import React from 'react';
import { Link } from 'react-router-dom';
// import './home.css';
// import './style.css';
import './membership.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Membership = () => {
  return (
    <div>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join Our Membership!</title>
        <link rel="shortcut icon" href="images/logo.png" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fredoka+One&family=Kanit:wght@300&display=swap" />
      </head>
      <body>
        <h1>Unlock Exclusive Benefits - Join Now!</h1>
        <h2>Become a member and gain access to amazing features, discounts, and more!</h2>
        <div className="membership-options">
        <Link to="/contributionA" className="btn">Monthly Membership</Link>
          <Link to="/contributionB" className="btn">Yearly Membership (Save!)</Link>
          <Link to="/contributionC" className="btn">Lifetime Membership</Link>
        </div>
        
      </body>
    </div>
  );
}

export default Membership;
