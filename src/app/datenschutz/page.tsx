import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | A1 Umzüge GmbH',
  description: 'Informationen zum Datenschutz gemäß DSGVO und BDSG',
};

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Verantwortlicher Anbieter gemäß DSGVO</h2>
            <div className="space-y-2">
              <p>A1 Umzüge GmbH<br />
              Bahnhofstraße 3b<br />
              31303 Burgdorf<br />
              Deutschland</p>
              <p>Telefon: <a href="tel:+4951368017632" className="text-primary hover:underline">05136 / 801 76 32</a><br />
              E-Mail: <a href="mailto:info@a1umzuege.de" className="text-primary hover:underline">info@a1umzuege.de</a><br />
              Website: <a href="https://www.a1umzuege.de" className="text-primary hover:underline">www.a1umzuege.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Allgemeine Hinweise</h2>
            <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Personenbezogene Daten werden von uns vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften verarbeitet – insbesondere gemäß:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>EU-Datenschutzgrundverordnung (DSGVO)</li>
              <li>Bundesdatenschutzgesetz (BDSG)</li>
              <li>Telemediengesetz (TMG)</li>
            </ul>
            <p className="mt-2">Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Zugriffsdaten (Server-Logfiles)</h2>
            <p>Beim Besuch unserer Website speichert unser Hostinganbieter automatisch sogenannte Server-Logfiles. Erfasst werden:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>IP-Adresse (gekürzt)</li>
              <li>Datum & Uhrzeit des Zugriffs</li>
              <li>Browsertyp und -version</li>
              <li>Betriebssystem</li>
              <li>Referrer-URL</li>
              <li>Besuchte Unterseiten</li>
            </ul>
            <p className="mt-2">Diese Daten dienen ausschließlich der technischen Sicherheit, Serverüberwachung und Optimierung des Webangebots. Eine personenbezogene Auswertung findet nicht statt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Kontaktaufnahme (Formular, E-Mail, Telefon, WhatsApp)</h2>
            <p>Wenn Sie uns über das Kontaktformular, per E-Mail, Telefon oder WhatsApp kontaktieren, speichern wir die von Ihnen übermittelten Daten:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Telefonnummer</li>
              <li>Umzugsdaten (Start-/Zieladresse, Umzugsdatum etc.)</li>
              <li>Nachricht/Inhalt Ihrer Anfrage</li>
            </ul>
            <p className="mt-2">Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen).</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. WhatsApp Business</h2>
            <p>Wir bieten die Kontaktaufnahme über WhatsApp an (Business Account). Wenn Sie uns über WhatsApp kontaktieren, gelten zusätzlich die Datenschutzbestimmungen von WhatsApp Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland.</p>
            <p className="mt-2">WhatsApp erhält personenbezogene Daten (z. B. Telefonnummer, Nachricht), ggf. werden Daten auf Servern außerhalb der EU verarbeitet.</p>
            <p className="mt-2">Unsere WhatsApp-Nummer: <a href="https://wa.me/4951368017632" className="text-primary hover:underline">05136 / 801 76 32</a></p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Nutzung)</p>
            <p className="mt-2">Mehr Infos: <a href="https://www.whatsapp.com/legal/privacy-policy-eea" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp Datenschutzerklärung</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Instagram Plugin</h2>
            <p>Unsere Website enthält Verlinkungen oder Plugins von Instagram (Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2, Irland).</p>
            <p className="mt-2">Wenn Sie eine Seite mit Instagram-Plugin aufrufen, kann eine Verbindung zu den Instagram-Servern hergestellt werden. Dabei kann Instagram nachvollziehen, dass Sie unsere Website besucht haben, auch wenn Sie selbst keinen Instagram-Account besitzen.</p>
            <p className="mt-2">Mehr zur Datenverarbeitung durch Instagram: <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Instagram Datenschutzrichtlinie</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Angebotsformular</h2>
            <p>Bei Nutzung des Formulars zur Angebotsanfrage verarbeiten wir folgende Daten:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail</li>
              <li>Telefonnummer (optional)</li>
              <li>Start- und Zieladresse</li>
              <li>Umzugsdatum</li>
              <li>Gewünschte Zusatzleistungen</li>
              <li>Freitextnachricht</li>
              <li>ggf. Etage, Aufzug, Sondergut</li>
            </ul>
            <p className="mt-2">Alle Daten werden verschlüsselt übermittelt und nicht an Dritte weitergegeben.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Verwendung von Google Maps</h2>
            <p>Wir binden Google Maps zur Standortanzeige ein.</p>
            <p>Anbieter: Google Ireland Ltd., Gordon House, Barrow Street, Dublin 4, Irland.</p>
            <p className="mt-2">Dabei können Daten wie Ihre IP-Adresse und Standortdaten an Google übermittelt werden.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
            <p className="mt-2">Google Datenschutzerklärung: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/privacy</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies</h2>
            <p>Unsere Website verwendet ausschließlich technisch notwendige Cookies, etwa zur Formularverarbeitung oder Sitzungserkennung. Wir setzen kein Tracking, keine Werbung, keine Analyse-Tools ein.</p>
            <p className="mt-2">Sie können Cookies im Browser jederzeit deaktivieren.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Empfänger oder Weitergabe von Daten</h2>
            <p>Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nicht, außer:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>mit Ihrer ausdrücklichen Einwilligung</li>
              <li>zur Vertragserfüllung (z. B. Speditionspartner bei Auslandstransport)</li>
              <li>aufgrund gesetzlicher Verpflichtungen (z. B. Finanzamt)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Speicherdauer</h2>
            <p>Ihre personenbezogenen Daten werden nur so lange gespeichert, wie sie zur Erfüllung der jeweiligen Zwecke erforderlich sind – danach werden sie gelöscht, es sei denn, gesetzliche Aufbewahrungsfristen (z. B. nach HGB/Abgabenordnung) erfordern eine längere Speicherung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Ihre Rechte laut DSGVO</h2>
            <p>Sie haben das Recht auf:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Auskunft über Ihre Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p className="mt-2">Wenden Sie sich hierzu bitte an: <a href="mailto:info@a1umzuege.de" className="text-primary hover:underline">info@a1umzuege.de</a></p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen geltendes Recht verstößt, haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren:</p>
            <p className="mt-2">
              Die Landesbeauftragte für den Datenschutz Niedersachsen<br />
              Prinzenstraße 5, 30159 Hannover<br />
              E-Mail: <a href="mailto:poststelle@lfd.niedersachsen.de" className="text-primary hover:underline">poststelle@lfd.niedersachsen.de</a><br />
              Website: <a href="https://lfd.niedersachsen.de" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://lfd.niedersachsen.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Datensicherheit</h2>
            <p>Unsere Website ist SSL-verschlüsselt (https).</p>
            <p>Alle Daten werden auf sicheren Servern innerhalb der EU gespeichert.</p>
            <p className="mt-2">Wir setzen geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten gegen Verlust, Zugriff oder Manipulation zu schützen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Änderungen dieser Datenschutzerklärung</h2>
            <p>Wir behalten uns vor, diese Erklärung an gesetzliche oder technische Änderungen anzupassen.</p>
            <p className="mt-2">Bitte prüfen Sie diese Seite regelmäßig.</p>
            <p className="mt-4 text-sm text-gray-500">Stand: Juli 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
