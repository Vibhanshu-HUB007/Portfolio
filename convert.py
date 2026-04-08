import re

with open('/home/vibhanshu92/Downloads/index.html', 'r') as f:
    html = f.read()

# Extract styles
style_match = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
if style_match:
    styles = style_match.group(1)
    with open('/home/vibhanshu92/portfolio/src/index.css', 'w') as f:
        f.write("/* Custom Styles */\n")
        f.write("@tailwind base;\n@tailwind components;\n@tailwind utilities;\n")
        f.write(styles)

# Extract body elements (excluding <script> and <div class="grid-bg">)
# But wait, grid-bg is needed!
body_match = re.search(r'<body>(.*?)<script>', html, re.DOTALL)
if body_match:
    body = body_match.group(1)
    
    # Simple React conversion
    body = body.replace('class=', 'className=')
    body = body.replace('for=', 'htmlFor=')
    body = body.replace('aria-hidden="true"', 'aria-hidden="true"') # stays same
    body = re.sub(r'<!--(.*?)-->', r'{/*\1*/}', body) # comments
    
    # Fix self-closing images
    body = re.sub(r'<img(.*?)(?<!/)>', r'<img\1 />', body)
    body = re.sub(r'<br>', r'<br />', body)

    app_tsx = f"""import {{ useEffect }} from 'react';

function App() {{
  useEffect(() => {{
    const aTags = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e: Event) => {{
      e.preventDefault();
      const a = e.currentTarget as HTMLAnchorElement;
      const targetId = a.getAttribute('href');
      if (targetId) {{
        const t = document.querySelector(targetId);
        if (t) t.scrollIntoView({{ behavior: 'smooth', block: 'start' }});
      }}
    }};
    aTags.forEach(a => a.addEventListener('click', handleSmoothScroll));

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const handleScroll = () => {{
      let current = '';
      sections.forEach(s => {{
        if (window.scrollY >= (s as HTMLElement).offsetTop - 100) current = s.id;
      }});
      navLinks.forEach(a => {{
        (a as HTMLElement).style.color = a.getAttribute('href') === `#${{current}}` ? 'var(--accent)' : '';
      }});
    }};
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(entries => {{
      entries.forEach(e => {{ if (e.isIntersecting) e.target.classList.add('visible'); }});
    }}, {{ threshold: 0.1, rootMargin: '0px 0px -60px 0px' }});

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {{
      aTags.forEach(a => a.removeEventListener('click', handleSmoothScroll));
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    }};
  }}, []);

  return (
    <>
{body}
    </>
  );
}}

export default App;
"""
    with open('/home/vibhanshu92/portfolio/src/App.tsx', 'w') as f:
        f.write(app_tsx)
        
