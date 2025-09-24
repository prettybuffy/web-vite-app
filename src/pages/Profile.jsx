export default function Profile() {
  return (
    <section className="p-4">
      <div className="flex-shrink-0 flex flex-col">
        <img 
          src="/src/img/zainab.png"
          alt="Zainab Iftikhar"
          className="w-64 h-64 object-cover shadow-md"
        />
      <div className="mt-4">
        <h2 className="font-semibold">Contact</h2>
        <p className="">Zainab Iftikhar, PhD Student</p>
        <p className="">Email: zainab_iftikhar@brown.edu</p>
      </div>
      </div>
    </section>
  );
}