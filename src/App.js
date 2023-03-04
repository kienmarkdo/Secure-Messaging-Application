import "./App.css";
import { Card, Row, Col } from "antd";
import { useState } from "react";
import OwnerChat from "./components/OwnerChat";
import GuestChat from "./components/GuestChat";

function App() {
  return (
    <div>
      {/* <div className="main-container"></div> */}
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
            <OwnerChat />
            <Col span={24} style={{ height: "2vh" }}></Col>
            <GuestChat />
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
    </div>
  );
}

export default App;
