export default function About() {
  return (
    <section>
      <div className="flex-1">
        <div className="mb-2">
          <p className="leading-relaxed mb-4">
            I'm a 5th Year Computer Science PhD Candidate at Brown University, advised by{' '}
            <a href="https://jeffhuang.com" className="text-emphasis hover:text-highlight">Jeff Huang </a> 
            in the {' '}
            <a href="https://jeffhuang.com/hci/" className="text-emphasis hover:text-highlight"> HCI Lab. </a> My research 
            focuses on {' '} <a href="/projects" className="text-emphasis hover:text-highlight">developing personalised systems</a>{' '} including AI agents,
            to support users' physical, cognitive, 
            and emotional well-being. By applying computational and visualisation 
            techniques to user's health and communication data, my work aims to a) help individuals understand their behaviors
            and how such behaviors impact their physical, social and mental health and b) how can we integrate AI into user's daily routines including workplace.
            I received the Paris Kanellakis Graduate Fellowship Award and was <a href="https://www.brown.edu/news/2025-05-14/iftikhar" className="text-emphasis hover:text-highlight">featured in Brown’s "Student Stories" </a>
            for my work on integrating AI into human-centered mental health counseling.
          </p>
          

          
          <p className="leading-relaxed">
            I received my undergraduate degree in Computer Science from National University of Computer & Emerging Sciences. 
            Before joining Brown, I was a Research Associate in HCI for Inclusion, Well-being & Learning Lab where I build and deployed
            assistive systems to support the marginalized population of Global South in  
            {' '}<a href="https://corona.assisted.pk/en" className="text-emphasis hover:text-highlight">healthcare</a>,
            {' '}<a href="https://autism.assisted.pk/en" className="text-emphasis hover:text-highlight">education</a> and
            {' '}<a href="https://humqadam.shirkatgah.org/" className="text-emphasis hover:text-highlight">legal aid</a> against
            gender-based violence.</p>
          <p className="leading-relaxed mt-2">
            <a  href="https://scholar.google.com/citations?user=x9GuCAQAAAAJ&hl=en" target="_blank" 
            rel="noopener noreferrer" 
            className="text-emphasis hover:text-highlight">[Google Scholar]</a>
          </p>
        </div>
      </div>
    </section>
  );
}