import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy - ${site.name}`,
  description: `How ${site.name} collects, uses, and protects your personal information.`,
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated={site.legalLastUpdated}>
      <section>
        <p>
          {site.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          operates {site.domain}. This policy explains what information we
          collect, why we collect it, and what we do with it. By using our
          website or services, you agree to the practices described here.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>We collect information in the following ways:</p>
        <ul>
          <li>
            <strong>Information you give us.</strong> When you email us, apply
            for a role, or otherwise get in touch, we receive your name, email
            address, and anything else you choose to send — including a CV or
            cover letter.
          </li>
          <li>
            <strong>Information collected automatically.</strong> Our hosting
            provider records standard technical data such as IP address, browser
            type, pages visited, and timestamps, for security and to understand
            how the site is used.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to your enquiries and provide the services you request</li>
          <li>Evaluate job applications and communicate with candidates</li>
          <li>Operate, maintain, and improve our website and services</li>
          <li>Detect and prevent fraud, abuse, and security incidents</li>
          <li>Meet our legal and regulatory obligations</li>
        </ul>
        <p>
          We do not sell your personal information, and we do not use it for
          advertising.
        </p>
      </section>

      <section>
        <h2>Sharing and Disclosure</h2>
        <p>
          We share personal information only with service providers who help us
          run our business — such as hosting and email providers — and only to
          the extent they need it to perform that work. We may also disclose
          information where required by law or to protect our legal rights.
        </p>
      </section>

      <section>
        <h2>Data Retention</h2>
        <p>
          We keep personal information only as long as needed for the purpose it
          was collected, or as required by law. Job application materials are
          retained for a reasonable period to consider you for current and future
          openings, unless you ask us to delete them sooner.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect
          personal information against loss, misuse, and unauthorised access. No
          method of transmission or storage is completely secure, so we cannot
          guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>
          Subject to applicable law, you may request access to the personal
          information we hold about you, ask us to correct or delete it, or
          object to certain processing. To make a request, email us at the
          address below. We may need to verify your identity before acting.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Our website uses only cookies that are strictly necessary for it to
          function. We do not use advertising or third-party tracking cookies.
        </p>
      </section>

      <section>
        <h2>Children&apos;s Privacy</h2>
        <p>
          Our website and services are not directed to children under 16, and we
          do not knowingly collect personal information from them.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. When we do, we will revise
          the &quot;last updated&quot; date at the top of this page. Please review
          it periodically.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have questions about this policy or how we handle your
          information, contact us at{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>, or
          write to us at {site.address.line1}, {site.address.line3}.
        </p>
      </section>
    </LegalPage>
  );
}
