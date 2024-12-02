export default function InputType() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label htmlFor="fullName" style={{ marginTop: "12%" }}>
        Full Name
      </label>
      <label htmlFor="email" style={{ marginTop: "12%" }}>
        Email
      </label>
      <label htmlFor="subject" style={{ marginTop: "12%" }}>
        Subject
      </label>
      <label htmlFor="message" style={{ marginTop: "15%" }}>
        Message
      </label>
    </div>
  );
}
