import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Tabs() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [title, setTitle] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await axios.get("http://localhost:8000/tabs");
        setData(data?.data);
        setLoading(false);
      } catch (error) {
        if (error) {
          setIsError(true);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [loading]);

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      const data = await axios.delete("http://localhost:8000/tabs/" + id);
      const newData = data?.data.filter((item) => item.id !== id);
      setLoading(false);
      setData(newData);
    } catch (error) {
      setLoading(false);
    }
  };

  const addNewTab = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:8000/tabs", {
        title: "New Tab",
      });
      setLoading(false);
    } catch (error) {}
  };

  const hanldeChange = async (e, id) => {
    setTitle(e.target.value);
    const title = e.target.value;
    await axios.patch("http://localhost:8000/tabs/" + id, { title });
  };

  if (isError) {
    return <h3>There was a error fetching data</h3>;
  }

  //   if (loading) {
  //     return <h3>Loading.............</h3>;
  //   }
  return (
    <div
      style={{
        display: "flex",
        margin: "200px auto",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        // flexDirection:data?
      }}
    >
      {data?.map((data, idx) => (
        <div key={idx} style={{ background: "green", display: "flex" }}>
          <input
            type="text"
            value={title}
            onChange={(e) => hanldeChange(e, data?.id)}
            placeholder={data?.title}
          />
          <h4
            onClick={() => handleDelete(data.id)}
            style={{ cursor: "pointer" }}
          >
            x
          </h4>
        </div>
      ))}

      <div
        style={{
          background: "blue",
          padding: "10px",
          borderRadius: "80%",
          cursor: "pointer",
        }}
        onClick={addNewTab}
      >
        +
      </div>
    </div>
  );
}
