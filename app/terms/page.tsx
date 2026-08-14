import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Terms of Service - ${site.name}`,
  description: `The terms and conditions governing use of the ${site.name} website and services.`,
};

export default function Terms() {
  return (
    <LegalPage title="Terms of Service" lastUpdated={site.legalLastUpdated}>
      <section>
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of{" "}
          {site.domain} and any services provided by {site.name} (&quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;). By accessing or using our website,
          you agree to these Terms. If you do not agree, please do not use the
          site.
        </p>
      </section>

      <section>
        <h2>Use of the Website</h2>
        <p>
          You may use our website for lawful purposes only. You agree not to:
        </p>
        <ul>
          <li>Use the site in any way that breaches applicable law or regulation</li>
          <li>
            Attempt to gain unauthorised access to the site, its servers, or any
            connected system
          </li>
          <li>
            Interfere with or disrupt the site&apos;s operation, security, or
            availability
          </li>
          <li>
            Use automated means to scrape or harvest content without our written
            permission
          </li>
        </ul>
      </section>

      <section>
        <h2>Services</h2>
        <p>
          This website describes our software development, marketing, and selling
          services in general terms. It is not an offer or a binding commitment.
          Any engagement is governed by a separate written agreement between you
          and {site.name}, which sets out scope, fees, timelines, and
          deliverables. Where such an agreement conflicts with these Terms, that
          agreement prevails.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and the{" "}
          {site.name} name — is owned by us or our licensors and is protected by
          intellectual property law. You may view and print pages for your own
          reference, but you may not reproduce, distribute, or create derivative
          works from our content without our prior written consent.
        </p>
      </section>

      <section>
        <h2>Submissions</h2>
        <p>
          If you send us enquiries, feedback, or job application materials, you
          confirm that you have the right to share them and that they are
          accurate. Please do not send us confidential information you do not
          want us to receive. We handle personal information as described in our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>Third-Party Links</h2>
        <p>
          Our site may link to third-party websites. We do not control them and
          are not responsible for their content, practices, or availability.
          Links are provided for convenience and do not imply endorsement.
        </p>
      </section>

      <section>
        <h2>Disclaimer</h2>
        <p>
          The website and its content are provided &quot;as is&quot; and &quot;as
          available&quot;, without warranties of any kind, whether express or
          implied, to the fullest extent permitted by law. We do not warrant that
          the site will be uninterrupted, error-free, or free of harmful
          components, or that the information on it is complete or current.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {site.name} will not be liable
          for any indirect, incidental, special, or consequential losses, or for
          any loss of profits, revenue, data, or business, arising out of or in
          connection with your use of this website. Nothing in these Terms
          excludes liability that cannot lawfully be excluded.
        </p>
      </section>

      <section>
        <h2>Indemnity</h2>
        <p>
          You agree to indemnify us against any claims, losses, and reasonable
          costs arising from your breach of these Terms or your misuse of the
          website.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>
          We may revise these Terms at any time. The revised version takes effect
          when posted on this page, and the &quot;last updated&quot; date will
          change accordingly. Continuing to use the site means you accept the
          updated Terms.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of {site.governingLaw}, and the
          courts of {site.jurisdiction} have exclusive jurisdiction over any
          dispute arising from them.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a> or
          raised by phone/WhatsApp at{" "}
          <a href={`tel:${site.phone.tel}`}>{site.phone.display}</a>.
        </p>
      </section>
    </LegalPage>
  );
}
