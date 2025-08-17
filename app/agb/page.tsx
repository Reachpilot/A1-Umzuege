export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | A1 Umzüge GmbH',
  description: 'Allgemeine Geschäftsbedingungen der A1 Umzüge GmbH',
};

export default function AGB() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen der A1 Umzüge GmbH (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") geschlossen werden, soweit nichts anderes vereinbart wurde.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 2 Vertragsschluss</h2>
            <p>Der Vertrag kommt durch schriftliche Auftragsbestätigung des Auftragnehmers oder durch Ausführung des Auftrags zustande. Mündliche Nebenabreden bedürfen zu ihrer Wirksamkeit der schriftlichen Bestätigung des Auftragnehmers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 3 Leistungsumfang</h2>
            <p>Der Leistungsumfang ergibt sich aus der schriftlichen Vereinbarung, dem schriftlichen Kostenvoranschlag und diesen AGB. Änderungen oder Ergänzungen des Leistungsumfangs bedürfen der Schriftform.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 4 Preise und Zahlungsbedingungen</h2>
            <p>4.1 Die Preise verstehen sich zuzüglich der jeweils gültigen gesetzlichen Mehrwertsteuer.</p>
            <p>4.2 Bei Umzügen erfolgt die Berechnung nach Aufwand (Stunden- oder Tagessatz) zuzüglich eventueller Nebenkosten (z.B. Maut, Parkgebühren).</p>
            <p>4.3 Die Zahlung des Rechnungsbetrages ist innerhalb von 14 Tagen nach Rechnungseingang ohne Abzüge fällig.</p>
            <p>4.4 Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten über dem jeweiligen Basiszinssatz zu berechnen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 5 Termine und Verschiebungen</h2>
            <p>5.1 Vereinbarte Termine sind unverbindliche Wunschtermine, sofern sie nicht ausdrücklich als Festtermine schriftlich bestätigt wurden.</p>
            <p>5.2 Der Auftraggeber ist verpflichtet, den Zugang zur Wohnung bzw. zum Grundstück zum vereinbarten Zeitpunkt zu gewährleisten.</p>
            <p>5.3 Bei Verhinderung oder Verspätung des Auftraggebers können Wartezeiten in Rechnung gestellt werden.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 6 Haftung</h2>
            <p>6.1 Der Auftragnehmer haftet für Schäden, die auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen.</p>
            <p>6.2 Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit es sich nicht um die Verletzung einer vertragswesentlichen Pflicht handelt.</p>
            <p>6.3 Die Haftung für leichte Fahrlässigkeit ist auf den vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 7 Stornierung</h2>
            <p>7.1 Der Auftraggeber kann den Vertrag bis zu 14 Tage vor dem vereinbarten Termin kostenfrei stornieren.</p>
            <p>7.2 Bei einer Stornierung innerhalb von 14 bis 7 Tagen vor dem Termin werden 25% des vereinbarten Preises fällig.</p>
            <p>7.3 Bei einer Stornierung innerhalb von 7 bis 3 Tagen vor dem Termin werden 50% des vereinbarten Preises fällig.</p>
            <p>7.4 Bei einer Stornierung innerhalb von 3 Tagen vor dem Termin oder bei Nichtantritt werden 80% des vereinbarten Preises fällig.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 8 Eigentumsvorbehalt</h2>
            <p>Bis zur vollständigen Bezahlung aller Forderungen aus der Geschäftsbeziehung verbleiben die gelieferten Waren im Eigentum des Auftragnehmers.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 9 Datenschutz</h2>
            <p>Der Auftragnehmer verpflichtet sich, die Bestimmungen des Datenschutzrechts einzuhalten. Näheres entnehmen Sie bitte unserer Datenschutzerklärung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">§ 10 Schlussbestimmungen</h2>
            <p>10.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
            <p>10.2 Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird die Wirksamkeit der übrigen Bestimmungen hierdurch nicht berührt.</p>
            <p>10.3 Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz des Auftragnehmers.</p>
          </section>

          <section className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Stand: Juli 2025</p>
          </section>
        </div>
      </div>
    </div>
  );
}
