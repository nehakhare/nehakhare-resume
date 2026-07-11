export const metadata = {
  title: "Neha Khare — Software Engineer II",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main className="landing">
      <section className="hero">
        <img className="hero-avatar" src="/headshot.png" alt="Neha Khare" />
        <h1 className="hero-name">Neha Khare</h1>
        <p className="hero-role">Software Engineer II · Microsoft</p>
        <p className="hero-tagline">
          I build reliable, cloud-native services and data platforms at scale —
          working across distributed systems, big data, and customer-facing experiences.
        </p>

        <div className="hero-cta">
          <a className="btn" href="/resume">View résumé</a>
          <a className="btn secondary" href="/journal">Journal login</a>
        </div>

        <div className="hero-links">
          <a href="https://www.linkedin.com/in/neha-khare-726a7342/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <span className="dot">·</span>
          <a href="mailto:kharena@mail.uc.edu">Email</a>
        </div>
      </section>
    </main>
  );
}
