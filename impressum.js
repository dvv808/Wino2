(() => {
  const overlayMarkup = `
    <div class="impressum-overlay" id="impressum-overlay" aria-hidden="true">
      <div class="impressum-topbar">
        <h2>Impressum</h2>
        <button class="impressum-close" type="button" aria-label="Close Impressum">
          <img src="./assets/close_button.svg" alt="" aria-hidden="true" />
        </button>
      </div>
      <div class="impressum-content">
        <p><strong>Angaben gemäß § 5 ECG (E-Commerce-Gesetz)</strong></p>
        <p>Muster Software GmbH Beispielstraße 42 1010 Wien Österreich<br />Geschäftsführer: Max Mustermann, Anna Musterfrau<br />Kontakt: E-Mail: office@mustersoftware.at Telefon: +43 1 234 56 78 Fax: +43 1 234 56 79</p>
        <p>Firmenbuchnummer: FN 123456a Firmenbuchgericht: Handelsgericht Wien UID-Nummer: ATU12345678 GLN: 9110012345678</p>
        <p>Mitglied der Wirtschaftskammer Österreich Berufsgruppe: Unternehmensberatung und Informationstechnologie Berufsrecht: Gewerbeordnung (GewO): www.ris.bka.gv.at</p>
        <p><strong>Unternehmensgegenstand</strong><br />Die Muster Software GmbH entwickelt und betreibt cloudbasierte Softwarelösungen für kleine und mittlere Unternehmen im deutschsprachigen Raum. Unser Fokus liegt auf der Digitalisierung interner Geschäftsprozesse, insbesondere in den Bereichen Personalverwaltung, Dokumentenmanagement und Customer Relationship Management.</p>
        <p><strong>Haftungsausschluss</strong><br />Haftung für Inhalte Die Inhalte dieser Plattform wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.</p>
        <p><strong>Haftung für Links</strong><br />Unsere Plattform enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
        <p><strong>Urheberrecht</strong><br />Die durch die Seitenbetreiber erstellten Inhalte und Werke auf dieser Plattform unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
        <p><strong>Datenschutzerklärung</strong><br />Verantwortlicher im Sinne der DSGVO Muster Software GmbH Beispielstraße 42 1010 Wien datenschutz@mustersoftware.at<br />Datenschutzbeauftragter Dr. Elisabeth Huber datenschutz@mustersoftware.at +43 1 234 56 80<br />Erhebung und Verarbeitung personenbezogener Daten Wir erheben und verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzgesetze, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des österreichischen Datenschutzgesetzes (DSG). Personenbezogene Daten werden nur erhoben, soweit dies für die Bereitstellung unserer Dienstleistungen erforderlich ist oder Sie ausdrücklich in die Erhebung eingewilligt haben.</p>
      </div>
    </div>
  `;

  const ensureOverlay = () => {
    if (document.getElementById("impressum-overlay")) return;
    document.body.insertAdjacentHTML("beforeend", overlayMarkup);
  };

  const openOverlay = () => {
    const overlay = document.getElementById("impressum-overlay");
    if (!overlay) return;
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
  };

  const closeOverlay = () => {
    const overlay = document.getElementById("impressum-overlay");
    if (!overlay) return;
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
  };

  document.addEventListener("DOMContentLoaded", () => {
    ensureOverlay();

    document.querySelectorAll(".footer-link").forEach((trigger) => {
      trigger.addEventListener("click", (event) => {
        event.preventDefault();
        openOverlay();
      });
    });

    const overlay = document.getElementById("impressum-overlay");
    const closeButton = overlay?.querySelector(".impressum-close");

    closeButton?.addEventListener("click", closeOverlay);
    overlay?.addEventListener("click", (event) => {
      if (event.target === overlay) closeOverlay();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeOverlay();
    });
  });
})();
