import "./App.css";
import { Typography, Button, Input, Card, Row, Col } from "antd";
import { useState } from "react";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(false);

  const enterLoading = () => {
    setLoadingStatus(true);

    setTimeout(() => setLoadingStatus(false), 2000);
  };

  return (
    <div>
      {/* <div className="main-container"></div> */}
      <Card
        title="Secure Messaging Application"
        style={{
          margin: "15vh 15vw",
          width: "70vw",
          background: "#138585",
          borderColor: "#138585",
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Your Chat Sessions" bordered={false}>
              asdasdads
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Guest Chat Sessions" bordered={false}>
              Card content
            </Card>
          </Col>
          <Col span={24} style={{ height: "40px" }}></Col>
          <Col span={24}>
            <Card
              title="Insert dynamic chat title here?"
              style={{ height: "40vh" }}
              bordered={false}
            >
              display chat here
            </Card>
          </Col>
        </Row>
      </Card>
      {/* <div className="generate-chat-container">
        <div></div>
        <Button
          shape="round"
          loading={loadingStatus}
          type="primary"
          onClick={enterLoading}
          style={{ height: "100%", fontSize: "30px" }}
        >
          Generate New Chat!
        </Button>
      </div> */}
    </div>
  );
}

export default App;
