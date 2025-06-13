export default function PricingPage() {
  return (
    <main>
      <section className="Subpage_Hero">
        <div className="container text-center" data-aos="zoom-in-up">
          <h2>Pricing</h2>
          <p>Simple and transparent pricing for all users.</p>
        </div>
      </section>

      <section className="Pricing_Table">
        <div className="container">
          <div className="Pricing_Card" data-aos="fade-up">
            <h3>Free</h3>
            <p>$0/month</p>
            <ul>
              <li>Basic Wallet Features</li>
              <li>Bill Payments</li>
            </ul>
          </div>
          <div className="Pricing_Card" data-aos="fade-up" data-aos-delay="100">
            <h3>Pro</h3>
            <p>$9.99/month</p>
            <ul>
              <li>All Free Features</li>
              <li>Priority Support</li>
              <li>Unlimited Transfers</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
