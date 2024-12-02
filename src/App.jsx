import { useEffect, useState } from "react";
import Title from "./components/Title";
import FullName from "./components/FullName";
import Email from "./components/Email";
import Subject from "./components/Subject";
import Message from "./components/Message";
import SubmitButton from "./components/SubmitButton";
import InputType from "./components/InputType";
import TextArea from "./components/TextArea";
import ClearButton from "./components/ClearButton";
import RemoveItemButton from "./components/RemoveItemButton";
export default function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  //Notification ko lagi
  const [notification, setNotification] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // the setItem helps to set the key and the value of the string
    const localset = JSON.stringify(formData);
    localStorage.setItem("Details:", localset);
    localStorage.setItem("Names:", localset);
    setNotification("Details has been stored successfully");
    console.log("Form Submitted:", formData);
  };

  useEffect(() => {
    const fetchName = localStorage.getItem("name");
    if (fetchName) {
      setFetchedName(fetchName);
      console.log("Fetched Name:", fetchName);
    }
  }, []);

  const handleClearStorage = () => {
    localStorage.clear();
    setNotification("Local storage has been cleared!");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  const handleRemoveItem = (key) => {
    localStorage.removeItem(key);
    setNotification(`"${key}" has been removed from local storage!`);
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Title />
          <FullName value={formData.fullName} onChange={handleInputChange} />
          <Email value={formData.email} onChange={handleInputChange} />
          <Subject value={formData.subject} onChange={handleInputChange} />
          <Message value={formData.message} onChange={handleInputChange} />
          <SubmitButton />
        </form>
        <ClearButton onClick={handleClearStorage} />
        <RemoveItemButton keyToRemove="Details:" onClick={handleRemoveItem} />
      </div>
      <div>{/* <p>Form Details{fetchName}</p> */}</div>

      {/* hoho */}
      <div
        className="form-container"
        style={{
          width: "100%",
          margin: "auto",
          marginTop: "10%",
          marginBottom: "30%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Title />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "1rem",
            }}
          >
            <InputType />
            <TextArea values={formData} onChange={handleInputChange} />
          </div>
          <SubmitButton />
        </form>
      </div>
      {notification && (
        <div
          style={{
            marginTop: "-5rem",
            marginBottom: "2rem",
            padding: "0.5rem",
            backgroundColor: "#dff0d8",
            color: "#3c763d",
            border: "1px solid #d6e9c6",
            borderRadius: "5px",
            textAlign: "center",
          }}
        >
          {notification}
        </div>
      )}
    </>
  );
}
