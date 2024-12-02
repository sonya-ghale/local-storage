export default function TextArea({ values, onChange }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        id="fullName"
        name="fullName"
        placeholder="Enter your full name"
        value={values.fullName}
        onChange={onChange}
        required
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={onChange}
        required
      />
      <input
        type="text"
        id="subject"
        name="subject"
        placeholder="Enter the subject"
        value={values.subject}
        onChange={onChange}
        required
      />
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        value={values.message}
        onChange={onChange}
        style={{ marginBottom: "15%" }}
        required
      />
    </div>
  );
}
