import "./App.css";
import { Button, Input, Card } from "antd";
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
      {/* <Card title="Card Title">
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Content
        </Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
        <Card.Grid style={gridStyle}>Content</Card.Grid>
      </Card> */}
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
