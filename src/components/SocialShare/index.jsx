import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterIcon,
  FacebookIcon,
} from "react-share";

import { Row, Col } from "react-bootstrap";

const shareTextStyle = {
  fontWeight: 500,
  fontSize: 16,
  color: "#191A1E",
  marginBottom: "15px",
};

const index = ({ article }) => {
  const hashTag = [(article?.category?.name).toLowerCase()];
  return (
    <div className="d-flex flex-column align-items-center">
      <span style={shareTextStyle}>Paylaş</span>
      <Row>
        <Col xs={4} className="d-flex d-lg-none">
          <WhatsappShareButton
            title={article?.title}
            url={window.location.href}
          >
            <WhatsappIcon size={30} borderRadius={10} />
          </WhatsappShareButton>
        </Col>
        <Col xs={4} lg={6}>
          <TwitterShareButton
            title={article?.title}
            via="Yagizdoo"
            hashtags={hashTag}
            url={window.location.href}
          >
            <TwitterIcon size={30} borderRadius={10} />
          </TwitterShareButton>
        </Col>
        <Col xs={4} lg={6}>
          <FacebookShareButton
            quote={article?.title}
            hashtag={hashTag}
            url={window.location.href}
          >
            <FacebookIcon size={30} borderRadius={10} />
          </FacebookShareButton>
        </Col>
      </Row>
    </div>
  );
};

export default index;
