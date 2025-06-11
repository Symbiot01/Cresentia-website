import React, { useState } from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/logo_name.png';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => setModalContent(null);

  const openModal = (type) => {
    if (type === 'terms') {
      setModalContent(
        <>
          <h2>📝 Terms and Conditions</h2>
          <p><strong>Effective Date:</strong> June 12, 2025</p>
          <p>IMPORTANT: Please read these Terms and Conditions ("Terms," "Terms of Use") carefully before accessing or using the crescentia.digital website operated by Crescentia.</p>
          <p>By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must discontinue use immediately.</p>

          <h3>1. About Crescentia and the Website</h3>
          <p>Crescentia is a student startup, and crescentia.digital is in a pre-launch phase, offering information about our upcoming 3D design platform.</p>

          <h3>2. Intellectual Property Rights</h3>
          <p>All content on this website is protected by copyright and IP laws. You may not reuse or redistribute content without written consent.</p>

          <h3>3. User Conduct</h3>
          <p>Users must not violate any laws, impersonate others, send spam, or harm the site or its users.</p>

          <h3>4. Contact Form Use</h3>
          <p>You must provide accurate and lawful info via the contact form.</p>

          <h3>5. Disclaimer of Warranties</h3>
          <p>The Website is provided "AS IS" without warranties. Crescentia does not guarantee uninterrupted access or accuracy.</p>

          <h3>6. Limitation of Liability</h3>
          <p>Crescentia is not liable for indirect damages arising from your use of the Website.</p>

          <h3>7. Indemnification</h3>
          <p>You agree to indemnify Crescentia against claims from your use of the site or violation of these Terms.</p>

          <h3>8. Links to Other Sites</h3>
          <p>We are not responsible for third-party content linked from our Website.</p>

          <h3>9. Governing Law</h3>
          <p>These Terms are governed by Indian law. Disputes shall be resolved in Indian courts.</p>

          <h3>10. Termination</h3>
          <p>We may terminate access for any violation without notice.</p>

          <h3>11. Severability</h3>
          <p>If any term is invalid, remaining terms remain effective.</p>

          <h3>12. Changes</h3>
          <p>We may update Terms. Continued use means you accept those changes.</p>

          <h3>13. Contact Us</h3>
          <p>Email: info.crescentia.digital@gmail.com</p>
        </>
      );
    } else {
      setModalContent(
        <>
          <h2>🔒 Privacy Policy</h2>
          <p><strong>Effective Date:</strong> June 12, 2025</p>
          <p>This Privacy Policy describes how Crescentia collects, uses, and discloses your information when you visit crescentia.digital.</p>

          <h3>1. Information We Collect</h3>
          <p><strong>Voluntarily:</strong> Name, email, and message via the contact form.</p>
          <p><strong>Automatically:</strong> Non-personal data via Google Analytics.</p>

          <h3>2. How We Use It</h3>
          <p>To respond to inquiries and improve site experience.</p>

          <h3>3. Sharing</h3>
          <p>We don’t sell data. It may be shared with Google Analytics or legal authorities as required.</p>

          <h3>4. Retention</h3>
          <p>Contact form data is retained as needed. Analytics data follows Google’s retention policies.</p>

          <h3>5. Security</h3>
          <p>We use SSL and security practices but can't guarantee complete safety.</p>

          <h3>6. Your Rights</h3>
          <ul>
            <li>Access, correct, delete your data</li>
            <li>Object to or restrict data use</li>
          </ul>

          <h3>7. Cookies</h3>
          <p>We use essential and analytics cookies. You can control them via your browser.</p>

          <h3>8. Children's Privacy</h3>
          <p>We do not collect data from children under 13.</p>

          <h3>9. Changes</h3>
          <p>We may update this policy. Review periodically.</p>

          <h3>10. Contact</h3>
          <p>Email: info.crescentia.digital@gmail.com</p>
        </>
      );
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <img src={logo} alt="Crescentia Logo" className="footer-logo" />
            <p className="footer-email">
              Contact us:{' '}
              <a href="mailto:info.crescentia.digital@gmail.com">
                info.crescentia.digital@gmail.com
              </a>
            </p>
            <div className="footer-legal-buttons">
              <button onClick={() => openModal('terms')}>Terms of Use</button>
              <button onClick={() => openModal('privacy')}>Privacy Policy</button>
            </div>
          </div>

          <div className="footer-right">
            <a
              href="https://www.linkedin.com/company/crescentiadigital"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="footer-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/crescentia.digital/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-icon"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/Crescentia_org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="footer-icon"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>

      {modalContent && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-content">{modalContent}</div>
          </div>
        </div>
      )}
    </>
  );
}
