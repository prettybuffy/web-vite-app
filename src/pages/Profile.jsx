export default function Profile() {
  return (
    <section>
      <div className="flex-shrink-0 flex flex-col">
        <img 
          src="/img/headshot.jpg"
          alt="Zainab Iftikhar"
          className="w-72 py-1 object-cover mx-autoshadow-md"
        />
      <div className="mt-2">
        <h2 className="font-semibold">Contact</h2>
        <p className="">Zainab Iftikhar, PhD Student</p>
        <p className="">Brown University</p>
        <p className="">Email: zainab_iftikhar@brown.edu</p>
      </div>
      <div className="mt-6">
        <h2 className="font-semibold">News</h2>
        <p className="">I'm leading a workshop on the use of AI and LLMs in social science research
        at the Association for Psychological Science APS on October 22 4:00 pm EDT.
        </p>
      </div>
      </div>
    </section>
  );
}