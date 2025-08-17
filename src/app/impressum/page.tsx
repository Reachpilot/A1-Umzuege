export const metadata = {
  title: 'Impressum | A1 Umzüge GmbH',
  description: 'Rechtliche Informationen und Kontaktdaten der A1 Umzüge GmbH',
};

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p>A1 Umzüge GmbH</p>
              <p>Bahnhofstraße 3b</p>
              <p>31303 Burgdorf</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p>Telefon: <a href="tel:+4951368017632" className="text-primary hover:underline">05136 / 801 76 32</a></p>
              <p>E-Mail: <a href="mailto:kontakt@a1umzuege.de" className="text-primary hover:underline">kontakt@a1umzuege.de</a></p>
              <p>Web: <a href="https://www.a1umzuege.de" className="text-primary hover:underline">www.a1umzuege.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Registereintrag</h2>
            <div className="space-y-2">
              <p>Handelsregister: Amtsgericht Hildesheim</p>
              <p>Registernummer: HRB 207 677</p>
              <p>Umsatzsteuer-Identifikationsnummer: DE345845519</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Vertretungsberechtigte Personen</h2>
            <p>Demhat Deniz (Geschäftsführer)</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Zuständige Kammer</h2>
            <p>IHK Hannover</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Demhat Deniz</p>
            <p>A1 Umzüge GmbH</p>
            <p>Bahnhofstraße 3b</p>
            <p>31303 Burgdorf</p>
          </section>

          <section className="pt-4 border-t border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftungsausschluss</h2>
            <div className="space-y-4">
              <p>
                <strong>Haftung für Inhalte:</strong> Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
              <p>
                <strong>Haftung für Links:</strong> Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
