import React from "react";
import { Row, Col } from "react-bootstrap";

const index = ({ article }) => {
  return (
    <div className="d-flex flex-column align-items-center">
      <Row>
        <Col>
          <a
            className="resp-sharing-button__link d-lg-none"
            href={`https://wa.me/?text=${article?.title}, ${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <div className="resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--small">
              <div
                aria-hidden="true"
                className="resp-sharing-button__icon resp-sharing-button__icon--solid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            className="resp-sharing-button__link d-lg-none"
            href={`https://telegram.me/share/url?text=${article?.title}&url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <div className="resp-sharing-button resp-sharing-button--telegram resp-sharing-button--small">
              <div
                aria-hidden="true"
                className="resp-sharing-button__icon resp-sharing-button__icon--solid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            className="resp-sharing-button__link"
            href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io"
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small">
              <div
                aria-hidden="true"
                className="resp-sharing-button__icon resp-sharing-button__icon--solid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M18.77 7.5H14.5V5.6c0-.9.6-1.1 1-1.1h3V.54L14.17.53C10.24.54 9.5 3.48 9.5 5.37V7.5h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            className="resp-sharing-button__link"
            href={`https://twitter.com/intent/tweet/?text=${article?.title}&url=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <div className="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--small">
              <div
                aria-hidden="true"
                className="resp-sharing-button__icon resp-sharing-button__icon--solid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M23.4 4.83c-.8.37-1.5.38-2.22.02.94-.56.98-.96 1.32-2.02-.88.52-1.85.9-2.9 1.1-.8-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.04.7.12 1.04-3.78-.2-7.12-2-9.37-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.73-.03-1.43-.23-2.05-.57v.06c0 2.2 1.57 4.03 3.65 4.44-.67.18-1.37.2-2.05.08.57 1.8 2.25 3.12 4.24 3.16-1.95 1.52-4.36 2.16-6.74 1.88 2 1.3 4.4 2.04 6.97 2.04 8.36 0 12.93-6.92 12.93-12.93l-.02-.6c.9-.63 1.96-1.22 2.57-2.14z" />
                </svg>
              </div>
            </div>
          </a>
          <a
            className="resp-sharing-button__link"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${article?.title}&summary=${article?.summary}&source=${window.location.href}`}
            target="_blank"
            rel="noreferrer"
            aria-label=""
          >
            <div className="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--small">
              <div
                aria-hidden="true"
                className="resp-sharing-button__icon resp-sharing-button__icon--solid"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                </svg>
              </div>
            </div>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default index;
