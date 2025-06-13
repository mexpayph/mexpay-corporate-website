export default function ContactPage() {
  return (
    <main>
      <section className="Subpage_Hero">
        <div className="container text-center" data-aos="zoom-in-up">
          <h2>Contact Us</h2>
          <p>We’re here to help and answer any questions you might have.</p>
        </div>
      </section>

      <section className="Contact_Form">
        <div className="container">
          <form>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" className="Primary_BTN">Send Message</button>
          </form>
        </div>
      </section>
    </main>
  );
}
