import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import { ref, push, set, onValue, child } from "firebase/database";
import { db } from "../FirebaseConnect";

const ChatColumn = ({ sessionId }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dbRef = ref(db, "/sessions" + sessionId);
  function decrypt(key) {
    return "urmum";
  }
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
        console.log("key: ", key);
        if (key === sessionId) {
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

  return (
    <Card
      title="Insert dynamic chat title here?"
      style={{ height: "62vh" }}
      bordered={false}
    >
      <div>hello sexy ladies</div>
    </Card>
  );
};

export default ChatColumn;
