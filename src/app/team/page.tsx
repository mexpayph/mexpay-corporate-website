export default function TeamPage() {
  return (
    <main>
      <section className="Subpage_Hero">
        <div className="container text-center" data-aos="zoom-in-up">
          <h2>Our Team</h2>
          <p>Meet the passionate people behind MEXPay.</p>
        </div>
      </section>

      <section className="Team_Members">
        <div className="container">
          <div className="Team_Grid">
            <div className="Team_Member" data-aos="fade-up">
              <img src="/assets/images/team1.jpg" alt="John Doe" />
              <h4>John Doe</h4>
              <p>CEO</p>
            </div>
            <div className="Team_Member" data-aos="fade-up" data-aos-delay="100">
              <img src="/assets/images/team2.jpg" alt="Jane Smith" />
              <h4>Jane Smith</h4>
              <p>CTO</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
