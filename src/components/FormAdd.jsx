function FormAdd(props) {
  return (
    <form onSubmit={props.onSubmit} className="p-4 space-y-4">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {props.children}
      </div>
    </form>
  );
}

export default FormAdd;
