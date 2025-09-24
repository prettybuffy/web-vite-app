export default function Profile() {
  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img
                src="/src/img/zainab.png"
                alt="Zainab Iftikhar"
                className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight mb-2">About Me</h2>
              <p className="text-secondary leading-relaxed max-w-2xl">
                I'm a 5th Year Computer Science PhD Candidate at Brown University, advised by{' '}
                <a href="https://jeffhuang.com" className="text-accent font-medium hover:underline">Jeff Huang</a>
                in the{' '}
                <a href="https://jeffhuang.com/hci/" className="text-accent font-medium hover:underline">HCI Lab</a>. My research
                focuses on <span className="font-semibold text-accent">developing personalised systems</span>, including AI agents,
                to support users' physical, cognitive, and emotional well-being. By applying computational and visualisation
                techniques to user's health and communication data, my work aims to help individuals understand their behaviors
                and how such behaviors impact their physical, social and mental health.
                I received the Paris Kanellakis Graduate Fellowship Award and was <a href="https://www.brown.edu/news/2025-05-14/iftikhar" className="text-accent font-medium hover:underline">featured in Brown’s "Student Stories"</a>
                for my work on integrating AI into human-centered mental health counseling.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-neutral-light px-6 sm:px-8 py-4">
          <p className="text-secondary leading-relaxed text-sm">
            I received my undergraduate degree in Computer Science from National University of Computer & Emerging Sciences.
            Before joining Brown, I was a Research Associate in HCI for Inclusion, Well-being & Learning Lab where I build and deployed
            assistive systems to support the marginalized population of Global South in healthcare, education and legal aid against
            domestic violence.
          </p>
        </div>
      </div>
    </section>
  );
}