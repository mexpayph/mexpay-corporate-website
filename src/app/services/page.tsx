export default function ServicesPage() {
  return (
    <main>
      <section className="Subpage_Hero">
        <div className="container text-center" data-aos="zoom-in-up">
          <h2>Our Services</h2>
          <p>Explore what MEXPay can do for you.</p>
        </div>
      </section>

      <section className="Service_List">
        <div className="container">
          <ul>
            <li data-aos="fade-up">📱 Digital Wallet</li>
            <li data-aos="fade-up" data-aos-delay="100">💸 Instant Transfers</li>
            <li data-aos="fade-up" data-aos-delay="200">🧾 Bill Payments</li>
            <li data-aos="fade-up" data-aos-delay="300">🔒 Secure Transactions</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
