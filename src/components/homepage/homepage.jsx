import React from "react";

// This is the landing page for the ecommerce site. There should be a image for bazaar
function Homepage() {
  return (
    <body className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main className="px-3">
          <h1>Welcome to the Bazaar.</h1>
          <p className="lead">Bringing the bizarre out to the Bazaar</p>
          <p className="lead">
            <a
              href="/home"
              style={{ color: "black" }}
              className="btn btn-lg btn-secondary fw-bold border-white bg-white"
            >
              Checkout the Market
            </a>
          </p>
        </main>

        <footer className="mt-auto text-white-50">
          <p>Designed by Asif Kamal</p>
        </footer>
      </div>
    </body>
  );
}

export default Homepage;
