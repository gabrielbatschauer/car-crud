function CamposAdd({ type, label, value, onChange, children, ...rest }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="font-medium">{label}</label>}

      {type === "select" ? (
        <select
          className="border border-black-300 rounded-md p-2 text-gray-600"
          value={value}
          onChange={onChange}
          {...rest}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          className="border border-black-300 rounded-md p-2 text-gray-600"
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}
    </div>
  );
}

export default CamposAdd;
