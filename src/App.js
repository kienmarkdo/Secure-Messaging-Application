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
          margin: "10vh 15vw",
          width: "70vw",
          background: "#138585",
          borderColor: "#138585",
        }}
      >
        <Row gutter={16}>
          <Col span={10}>
            <Card
              title="Your Chat Sessions"
              style={{ height: "30vh" }}
              bordered={false}
            >
              asdasdads
            </Card>
            <Col span={24} style={{ height: "2vh" }}></Col>
            <Card
              title="Guest Chat Sessions"
              style={{ height: "30vh" }}
              bordered={false}
            >
              asd
            </Card>
          </Col>
          <Col span={14}>
            <Card
              title="Insert dynamic chat title here?"
              style={{ height: "62vh" }}
              bordered={false}
            >
              Card content
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
