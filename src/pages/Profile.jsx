export default function Profile() {
  return (
    <section className="p-4">
      <div className="flex-shrink-0">
        <img 
          src="/src/img/zainab.png"
          alt="Zainab Iftikhar"
          className="w-64 h-64 object-cover shadow-md"
        />
      <div className="mt-4 justify-center text-center">
        <h2 className="text-xl font-semibold">Zainab Iftikhar</h2>
        <p>PhD Student</p>
        <p>Brown University</p>
        <p>zainab_iftikhar@brown.edu</p>
        <div className="mt-2 flex justify-center space-x-4"></div>
          <a 
            href="https://scholar.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-highlight hover:underline"
          >
            Google Scholar
          </a>
        </div>
      </div>
    </section>
  );
}