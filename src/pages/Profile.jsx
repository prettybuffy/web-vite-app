export default function Profile() {
  return (
    <section className="p-4">
      <div className="flex-shrink-0 flex flex-col">
        <img 
          src="/img/zainab.png"
          alt="Zainab Iftikhar"
          className="w-48 h-48 object-cover rounded-full shadow-md"
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