function CarDetailAll(props) {
  return (
    <div className={`flex items-center gap-2 ${props.className}`}>
      {props.children}
      <dt className="sr-only">{props.label}</dt>
      <dd>{props.value}</dd>
    </div>
  );
}

export default CarDetailAll;
