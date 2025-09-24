export default function Profile() {
  return (
    <section className="p-4 mb-4 bg-">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-shrink-0">
          <img 
            src="/src/img/zainab.png"
            alt="Zainab Iftikhar"
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="flex-1">
          <div className="mb-2">
            <p className="text-slate-700 leading-relaxed mb-4">
              I'm a 5th Year Computer Science PhD Candidate at Brown University, advised by{' '}
              <a href="https://jeffhuang.com" className="text-highlight">Jeff Huang </a> 
              in the {' '}
              <a href="https://jeffhuang.com/hci/" className="text-highlight"> HCI Lab. </a> My research 
              focuses on {' '} <span className="text-highlight">developing personalised systems</span>{' '} including AI agents,
              to support users' physical, cognitive, 
              and emotional well-being. By applying computational and visualisation 
              techniques to user's health and communication data, my work aims to help individuals understand their behaviors
              and how such behaviors impact their physical, social and mental health.
              I received the Paris Kanellakis Graduate Fellowship Award and was <a href="https://www.brown.edu/news/2025-05-14/iftikhar" className="text-highlight">featured in Brown’s "Student Stories" </a>
              for my work on integrating AI into human-centered mental health counseling.
            </p>
            
            <p className="text-slate-700 leading-relaxed">
              I received my undergraduate degree in Computer Science from National University of Computer & Emerging Sciences. 
              Before joining Brown, I was a Research Associate in HCI for Inclusion, Well-being & Learning Lab where I build and deployed
              assistive systems to support the marginalized population of Global South in healthcare, education and legal aid against
              domestic violence. {/*I have also interned at Google Research working 
              on large language models and multimodal AI systems.*/}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}