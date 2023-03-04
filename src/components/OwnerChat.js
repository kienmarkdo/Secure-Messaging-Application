import React, { useEffect, useState } from "react";
import { Avatar, Divider, List, Skeleton, Button } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

export default function OwnerChat() {
  const [btnLoading, setBtnLoading] = useState(false);

  const enterLoading = () => {
    setBtnLoading(true);

    setTimeout(() => setBtnLoading(false), 2000);
  };

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      "https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo"
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <>
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
            header={
              <div style={{ backgroundColor: "white" }}>
                <strong>Your Chat Session</strong>
              </div>
            }
            dataSource={data}
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  //   title={<a href="https://ant.design">{item.name.last}</a>}
                  description={item.email}
                />
                <Button
                  //   key={item.email}
                  shape="round"
                  loading={btnLoading}
                  danger="true"
                  onClick={enterLoading}
                  //   style={{ height: "100%", fontSize: "30px" }}
                >
                  Delete
                </Button>
                <div style={{ width: "5px" }}></div>
                <Button
                  //   key={item.email}
                  shape="round"
                  loading={btnLoading}
                  type="primary"
                  onClick={enterLoading}
                  //   style={{ height: "100%", fontSize: "30px" }}
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
        loading={btnLoading}
        type="primary"
        onClick={enterLoading}
        block="true"
        style={{ marginTop: "20px", background: "#4BB543", border: "none" }}
      >
        Create New Chat Session
      </Button>
    </>
  );
}
