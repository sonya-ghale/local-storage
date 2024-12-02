export default function Subject({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="subject">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
