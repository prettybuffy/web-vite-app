export default function Profile() {
  return (
    <section>
      <div className="flex-shrink-0 flex flex-col">
        <img 
          src="/img/zainab.jpg"
          alt="Zainab Iftikhar"
          className="w-72 py-1 object-cover mx-autoshadow-md"
        />
      <div className="mt-2">
        <h2 className="font-semibold">Contact</h2>
        <p className="">Zainab Iftikhar, PhD Student</p>
        <p className="">Email: zainab_iftikhar@brown.edu</p>
      </div>
      </div>
    </section>
  );
}