function CarDetailPage({ label, value }) {
  return (
    <section>
      <h2 className="text-gray-400 text-sm">{label}</h2>
      <p className="text-base font-medium">{value}</p>
    </section>
  );
}

export default CarDetailPage;
