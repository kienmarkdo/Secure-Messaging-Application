import "./App.css";
import { Button, Input } from "antd";
import { useState } from "react";

function App() {
  const [loadingStatus, setLoadingStatus] = useState(false);

  const enterLoading = () => {
    setLoadingStatus(true);

    setTimeout(() => setLoadingStatus(false), 2000);
  };

  return (
    <div>
      <div className="generate-chat-container">
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
      </div>
    </div>
  );
}

export default App;
