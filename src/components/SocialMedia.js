import React from 'react';
import { Container } from 'react-bootstrap';

function SocialMedia() {
  const socials = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/azievhanif",
      icon: "https://skillicons.dev/icons?i=linkedin&theme=dark",
    },
    {
      platform: "GitHub",
      url: "https://github.com/azievhanif",
      icon: "https://skillicons.dev/icons?i=github&theme=dark",
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/azievhanif",
      icon: "https://skillicons.dev/icons?i=instagram&theme=dark",
    },
    {
      platform: "Gmail",
      url: "mailto:azievh@gmail.com",
      icon: "https://skillicons.dev/icons?i=gmail&theme=dark",
    }
  ];

  return (
    <section className="experience-section" id="social">
      <Container className="text-center">
        <h2 className="section-title mb-4">
          Connect <span className="text-warning">With Me</span>
        </h2>
        <p className="text-secondary mb-4">
          Feel free to reach out and connect with me on social media.
        </p>

        <div className="d-flex justify-content-center gap-4">
          {socials.map((social, index) => (
            <a 
              key={index}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <div className="social-icon-wrapper">
                <img 
                  src={social.icon} 
                  alt={social.platform}
                  className="social-icon"
                  title={social.platform}
                />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SocialMedia;