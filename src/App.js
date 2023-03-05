import "./App.css";
import { Card, Row, Col } from "antd";
import { useState, useEffect } from "react";
import OwnerChat from "./components/OwnerChat";
import GuestChat from "./components/GuestChat";
import ChatColumn from "./components/ChatColumn";

function App() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    console.log("useffect: ", sessionId);
  }, [sessionId]);

  const updateSessionId = (key) => {
    console.log("keyL : ", key);
    setSessionId(key);
  };

  return (
    <div>
      {/* <div className="main-container"></div> */}
      {/* <button onClick={() => updateSessionId("hello")}>ur mum</button> */}
      <Card
        title={<h2 style={{ color: "white" }}>Secure Messaging Application</h2>}
        style={{
          margin: "8vh 15vw",
          width: "70vw",
          background: "#808080",
          borderColor: "",
        }}
      >
        <Row gutter={16}>
          <Col span={10}>
            <OwnerChat handleSessionId={updateSessionId} />
            <Col span={24} style={{ height: "2vh" }}></Col>
            <GuestChat />
          </Col>
          <Col span={14}>
            <ChatColumn
              sessionId={sessionId}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default App;
