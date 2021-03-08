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
  const twitterArrays = [article?.summary];
  return (
    <div className="d-flex flex-column align-items-center">
      <span style={shareTextStyle}>Paylaş</span>
      <Row>
        <Col xs={4} className="d-flex d-lg-none">
          <WhatsappShareButton
            title={article?.title}
            url={`https://blog.yagizdokumaci.com/` + window.location.pathname}
          >
            <WhatsappIcon size={30} borderRadius={50} />
          </WhatsappShareButton>
        </Col>
        <Col xs={4} lg={6}>
          <TwitterShareButton
            title={article?.title}
            via="Yagizdoo"
            hashtags={twitterArrays}
            url={`https://blog.yagizdokumaci.com` + window.location.pathname}
          >
            <TwitterIcon size={30} borderRadius={50} />
          </TwitterShareButton>
        </Col>
        <Col xs={4} lg={6}>
          <FacebookShareButton
            quote={article?.title}
            hashtag={article.summary}
            url={`https://blog.yagizdokumaci.com/` + window.location.pathname}
          >
            <FacebookIcon size={30} borderRadius={50} />
          </FacebookShareButton>
        </Col>
      </Row>
    </div>
  );
};

export default index;
