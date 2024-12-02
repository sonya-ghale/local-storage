export default function Message({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
