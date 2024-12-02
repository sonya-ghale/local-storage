export default function Email({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="email">Email Address</label>
      <input
        type="email"
        id="email"
        name="email"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
