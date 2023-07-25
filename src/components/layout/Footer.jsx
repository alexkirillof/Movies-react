import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="page-footer grey darken-3">
          <div className="footer-copyright">
            <div className="container">
              © {new Date().getFullYear()} Copyright Text
              <a className="grey-text text-lighten-4 right" href="#!">
                Repo
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
