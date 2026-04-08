import { useEffect } from 'react';

import ShaderBackground from '@/components/ui/shader-background';

function App() {
  useEffect(() => {
    const aTags = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const targetId = a.getAttribute('href');
      if (targetId) {
        const t = document.querySelector(targetId);
        if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    aTags.forEach(a => a.addEventListener('click', handleSmoothScroll));

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const handleScroll = () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        (a as HTMLElement).style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
      });
    };
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      aTags.forEach(a => a.removeEventListener('click', handleSmoothScroll));
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>


<ShaderBackground />

{/* Navigation */}
<nav>
  <div className="nav-inner">
    <a href="#home" className="logo">VW</a>
    <ul className="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>

{/* Hero */}
<section id="home" className="hero">
  <div className="hero-inner">
    <div className="hero-text">
      <div className="hero-badge">Available for opportunities</div>
      <h1>Vibhanshu<br />Waghmare</h1>
      <h2>AI Engineer & Data Scientist</h2>
      <p>Specializing in Generative AI, LLMs, Machine Learnign, Deep Learning, Multi-Agent Systems & Computer Vision. Research-driven engineer with hands-on experience at ISRO NRSC, ICMR, and ARIES.</p>
      <div className="hero-btns">
        <a href="#contact" className="btn btn-primary"><i className="fas fa-paper-plane"></i> Get In Touch</a>
        <a href="Vibhanshu_Waghmare_Resume.pdf" download className="btn btn-outline"><i className="fas fa-download"></i> Resume</a>
      </div>
      <div className="hero-stats">
        <div className="stat"><h3>3+</h3><p>Internships</p></div>
        <div className="stat"><h3>10+</h3><p>Projects</p></div>
        <div className="stat"><h3>1</h3><p>Research Paper</p></div>
        <div className="stat"><h3>1st</h3><p>Hackathon</p></div>
      </div>
    </div>
    <div className="hero-image">
      <div className="profile-wrap">
        <img src="Profile_pic.png" alt="Vibhanshu Waghmare" className="profile-pic" />
      </div>
    </div>
  </div>
</section>

{/* About */}
<section id="about">
  <div className="section-wrap">
    <p className="section-label">Who I Am</p>
    <h2 className="section-title">About Me</h2>
    <p className="section-sub">A quick look at my background and what drives me.</p>
    <div className="about-grid reveal">
      <div className="about-text">
        <p>I'm an AI Engineer passionate about building intelligent systems that solve real-world problems. With expertise in Generative AI, LLMs, and Computer Vision, I've contributed to cutting-edge projects at prestigious institutions like ISRO NRSC and Aryabhatta Research Institute of Observational Sciences (ARIES).</p>
        <p>My journey in AI has been driven by curiosity and a desire to push the boundaries of what's possible. From developing autonomous rovers to fine-tuning large language models, I thrive on challenges that require innovative thinking and technical excellence.</p>
        <p>I hold a B.E. in Artificial Intelligence & Data Science with a CGPA of 8.61, and currently work as a Project Research Scientist at the Indian Council of Medical Research (ICMR).</p>
      </div>
      <div className="about-cards">
        <div className="about-card"><h3>3+</h3><p>Internships</p></div>
        <div className="about-card"><h3>10+</h3><p>Projects</p></div>
        <div className="about-card"><h3>8.61</h3><p>CGPA</p></div>
        <div className="about-card"><h3>1st</h3><p>Hackathon Winner</p></div>
      </div>
    </div>
  </div>
</section>

{/* Skills */}
<section id="skills" className="skills-bg">
  <div className="section-wrap">
    <p className="section-label">What I Know</p>
    <h2 className="section-title">Technical Skills</h2>
    <p className="section-sub">Technologies and tools I work with regularly.</p>
    <div className="skills-grid">
      <div className="skill-card reveal">
        <div className="skill-card-header">
          <div className="skill-icon"><i className="fas fa-code"></i></div>
          <h3>Programming</h3>
        </div>
        <div className="tags">
          <span className="tag">Python</span><span className="tag">SQL</span><span className="tag">LangGraph</span><span className="tag">LangChain</span><span className="tag">CrewAI</span>
        </div>
      </div>
      <div className="skill-card reveal">
        <div className="skill-card-header">
          <div className="skill-icon"><i className="fas fa-brain"></i></div>
          <h3>Machine Learning</h3>
        </div>
        <div className="tags">
          <span className="tag">TensorFlow</span><span className="tag">PyTorch</span><span className="tag">Keras</span><span className="tag">scikit-learn</span><span className="tag">YOLO</span><span className="tag">NLP</span>
        </div>
      </div>
      <div className="skill-card reveal">
        <div className="skill-card-header">
          <div className="skill-icon"><i className="fas fa-robot"></i></div>
          <h3>AI & LLMs</h3>
        </div>
        <div className="tags">
          <span className="tag">GPT Models</span><span className="tag">Hugging Face</span><span className="tag">LLM Fine-tuning</span><span className="tag">Multi-Agent</span><span className="tag">FastAPI</span>
        </div>
      </div>
      <div className="skill-card reveal">
        <div className="skill-card-header">
          <div className="skill-icon"><i className="fas fa-chart-line"></i></div>
          <h3>Data Science</h3>
        </div>
        <div className="tags">
          <span className="tag">Pandas</span><span className="tag">NumPy</span><span className="tag">Matplotlib</span><span className="tag">Tableau</span><span className="tag">Power BI</span>
        </div>
      </div>
      <div className="skill-card reveal">
        <div className="skill-card-header">
          <div className="skill-icon"><i className="fas fa-microchip"></i></div>
          <h3>Robotics & IoT</h3>
        </div>
        <div className="tags">
          <span className="tag">ROS</span><span className="tag">LiDAR</span><span className="tag">Edge Computing</span><span className="tag">Computer Vision</span><span className="tag">OpenCV</span>
        </div>
      </div>
      <div className="skill-card reveal">
        <div className="skill-card-header">
          <div className="skill-icon"><i className="fas fa-cloud"></i></div>
          <h3>Cloud & Tools</h3>
        </div>
        <div className="tags">
          <span className="tag">AWS</span><span className="tag">Linux</span><span className="tag">Git</span><span className="tag">Jupyter</span><span className="tag">n8n</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Experience */}
<section id="experience">
  <div className="section-wrap">
    <p className="section-label">Where I've Worked</p>
    <h2 className="section-title">Experience</h2>
    <p className="section-sub">My professional journey so far.</p>
    <div className="timeline">
      <div className="timeline-item reveal">
        <div className="exp-card">
          <div className="exp-header">
            <h3>Project Research Scientist</h3>
            <span className="exp-date">2025 – Present</span>
          </div>
          <p className="exp-company">Indian Council of Medical Research (ICMR)</p>
          <p>Working on AI-driven medical research projects, applying machine learning and data science techniques to healthcare challenges.</p>
        </div>
      </div>
      <div className="timeline-item reveal">
        <div className="exp-card">
          <div className="exp-header">
            <h3>AI & Data Science Intern</h3>
            <span className="exp-date">Jul 2024 – Dec 2024</span>
          </div>
          <p className="exp-company">ISRO National Remote Sensing Centre</p>
          <p>Developed AIoT autonomous rover for space and agriculture applications. Implemented LiDAR mapping and navigation using ROS. Designed AI models for image processing and autonomous decision-making.</p>
        </div>
      </div>
      <div className="timeline-item reveal">
        <div className="exp-card">
          <div className="exp-header">
            <h3>Data Science Intern</h3>
            <span className="exp-date">Jan 2024 – Mar 2024</span>
          </div>
          <p className="exp-company">Brainovision Solutions Pvt. Ltd</p>
          <p>Built ML models for customer segmentation using K-Means clustering. Deployed Linear Regression and Random Forest models. Created interactive dashboards for data insights.</p>
        </div>
      </div>
      <div className="timeline-item reveal">
        <div className="exp-card">
          <div className="exp-header">
            <h3>Research Fellowship Intern</h3>
            <span className="exp-date">May 2023 – Aug 2023</span>
          </div>
          <p className="exp-company">Aryabhatta Research Institute of Observational Sciences (ARIES)</p>
          <p>Designed structure for daytime operation of ARIES Micro Pulse LiDAR. Developed real-time data acquisition and visualization algorithms. Integrated cloud-based LiDAR data processing pipelines.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Projects */}
<section id="projects" className="projects-bg">
  <div className="section-wrap">
    <p className="section-label">What I've Built</p>
    <h2 className="section-title">Featured Projects</h2>
    <p className="section-sub">A selection of work I'm proud of.</p>
    <div className="projects-grid">
      <div className="project-card reveal">
        <div className="project-top">
          <div className="project-icon"><i className="fas fa-network-wired"></i></div>
          <div className="project-links">
            <a href="https://github.com/Vibhanshu-HUB007/LangGraph-Customer-Support-Agent" target="_blank" className="project-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <h3>LangGraph Customer Support Agent</h3>
        <p>11-stage workflow with MCP server integration, multiple execution modes, and comprehensive state management for complete customer support automation.</p>
        <div className="tags">
          <span className="tag">Python</span><span className="tag">LangGraph</span><span className="tag">AI Agents</span>
        </div>
      </div>
      <div className="project-card reveal">
        <div className="project-top">
          <div className="project-icon"><i className="fas fa-eye"></i></div>
          <div className="project-links">
            <a href="https://github.com/Vibhanshu-HUB007/Image-Classification_1-and-LLM-Tuning_2" target="_blank" className="project-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <h3>Image Classification & LLM Tuning</h3>
        <p>End-to-end model pipeline with YOLOv8, EfficientNet, and fine-tuned LLaMA 3.2 for structured entity extraction with &lt;20ms inference speed.</p>
        <div className="tags">
          <span className="tag">PyTorch</span><span className="tag">YOLOv8</span><span className="tag">LLaMA</span>
        </div>
      </div>
      <div className="project-card reveal">
        <div className="project-top">
          <div className="project-icon"><i className="fas fa-chart-bar"></i></div>
          <div className="project-links">
            <a href="https://github.com/Vibhanshu-HUB007/CrowdWisdomTrading-AI-Agent" target="_blank" className="project-link" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <h3>CrowdWisdom Trading AI Agent</h3>
        <p>Autonomous CrewAI-based backend to discover and filter financial creators on X (Twitter) based on credibility rules for market sentiment analysis.</p>
        <div className="tags">
          <span className="tag">CrewAI</span><span className="tag">Python</span><span className="tag">Financial AI</span>
        </div>
      </div>
      <div className="project-card reveal">
        <div className="project-top">
          <div className="project-icon"><i className="fas fa-satellite"></i></div>
          <div className="project-links">
            <a href="https://jisem-journal.com/index.php/journal/article/view/9904" target="_blank" className="project-link" aria-label="Research Paper"><i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
        <h3>AI Autonomous Rover</h3>
        <p>Published research on AI-powered autonomous rover for space exploration and agricultural applications with LiDAR mapping and ROS navigation.</p>
        <div className="tags">
          <span className="tag">ROS</span><span className="tag">LiDAR</span><span className="tag">Computer Vision</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact */}
<section id="contact">
  <div className="section-wrap">
    <p className="section-label">Say Hello</p>
    <h2 className="section-title">Get In Touch</h2>
    <div className="contact-box reveal">
      <p>I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect, my inbox is always open.</p>
      <a href="mailto:vibhanshuw789@gmail.com" className="contact-email">
        <i className="fas fa-envelope"></i> vibhanshuw789@gmail.com
      </a>
      <div className="socials">
        <a href="https://github.com/Vibhanshu-HUB007" target="_blank" className="social-btn" aria-label="GitHub"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/vibhanshu-waghmare/" target="_blank" className="social-btn" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        <a href="mailto:vibhanshuw789@gmail.com" className="social-btn" aria-label="Email"><i className="fas fa-envelope"></i></a>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer>
  <p>Designed & Built by <span>Vibhanshu Waghmare</span> &nbsp;·&nbsp; 2025</p>
</footer>


    </>
  );
}

export default App;
