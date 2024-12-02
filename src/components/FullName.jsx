export default function FullName({ value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        name="fullName"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
