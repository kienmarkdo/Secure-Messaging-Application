import React, { useEffect, useState } from "react";
import { Avatar, Divider, List, Skeleton, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { db } from "../FirebaseConnect";
import { ref, push, set, onValue, child } from "firebase/database";
import { Alert, message } from "antd";
import { v4 as uuidv4 } from "uuid";

// Placeholder
function encrypt(sessionId, encryptionKey) {
  return sessionId + encryptionKey;
}

function decrypt(key) {
  return key;
}

function OwnerChat({ handleSessionId }) {
  const [btnLoading, setBtnLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [chatroomIds, setChatroomIds] = useState([]);

  const dbRef = ref(db, "/sessions");

  const handleNewChatRoom = () => {
    setBtnLoading(true);
    // call session id function
    const sessionId = uuidv4();
    // ping for encryption key
    const encryptionKey = "ETIANMSURWDKGO";

    const encryptedSessionId = encrypt(sessionId, encryptionKey);

    set(ref(db, "sessions/" + encryptedSessionId), {
      encryptedMessages: [""],
    }).catch(alert);

    setChatroomIds([...chatroomIds, encryptedSessionId]);
    console.log("chatroomIds3: ", chatroomIds);

    setTimeout(() => setBtnLoading(false), 2000);
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {};

  onValue(
    dbRef,
    (childSnapshot) => {
      const childKey = childSnapshot.key;
      console.log("childKey: ", childKey);
      const childData = childSnapshot.val();
      console.log("childData: ", childData);
      const temp = data;
      //   if (loading) {
      //     return;
      //   }
      setLoading(true);

      console.log("object keys bullshit");

      Object.keys(childData).forEach(function (key) {
        console.log("chatroomIds: ", chatroomIds);
        console.log("key: ", key);
        let g = chatroomIds;
        if (g.includes(key)) {
          console.log("entering....");
          const decrypt_key = decrypt(key);
          const messages = [];

          childData[key]["encryptedMessages"].map((value) => {
            console.log("message: ", value);
            let a = decrypt(value);
            messages.push(a);
          });

          let b = {};
          b["session"] = decrypt_key;
          b["messages"] = messages;

          console.log("adding b: ", b);
          if (!temp.includes(b)) {
            temp.push(b);
          }
        }
      });

      setLoading(true);
      setData(temp);
    },
    {
      onlyOnce: true,
    }
  );

  useEffect(() => {
    // loadMoreData();
    console.log("data: ", data);
  }, [data]);

  const setShit = (key) => {
    console.log("shit key; ", key);
    handleSessionId(key);
  };

  return (
    <>
      {
        //owner chat header
        <div style={{ backgroundColor: "white", textAlign: "center" }}>
          <strong>Your Chat Session</strong>
        </div>
      }

      <div
        id="scrollableDiv"
        style={{
          height: "25vh",
          overflow: "auto",
          padding: "0 16px",
          border: "1px solid rgba(140, 140, 140, 0.35)",
          background: "white",
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          scrollableTarget="scrollableDiv"
        >
          <List
            /*header={
              <div style={{ backgroundColor: "white" }}>
                <strong>Your Chat Session</strong>
              </div>
            }*/
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item key={index}>
                <List.Item.Meta description={item["session"]} />
                <Button
                  shape="round"
                  loading={btnLoading}
                  danger="true"
                  onClick={handleNewChatRoom}
                >
                  Delete
                </Button>
                <div style={{ width: "5px" }}></div>
                <Button
                  shape="round"
                  loading={btnLoading}
                  type="primary"
                  onClick={() => setShit(item["session"])}
                >
                  Open
                </Button>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      <Button
        shape="round"
        // loading={btnLoading}
        type="primary"
        onClick={handleNewChatRoom}
        block="true"
        style={{ marginTop: "20px", background: "#4BB543", border: "none" }}
      >
        Create New Chat Session
      </Button>
    </>
  );
}

export default OwnerChat;
