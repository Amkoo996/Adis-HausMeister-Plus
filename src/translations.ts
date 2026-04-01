export type Language = 'de' | 'bs' | 'en';

export const translations = {
  de: {
    nav: { services: "Leistungen", gallery: "Galerie", contact: "Kontakt", quote: "Angebot anfordern", faq: "FAQ", reviews: "Bewertungen" },
    hero: { title1: "Ihr Partner für", title2: "Renovierung & Pflege", subtitle: "Von Innenausbau bis zur Außenpflege. Wir machen Ihr Zuhause wieder schön – schnell, zuverlässig und professionell.", cta1: "Kostenloses Angebot", cta2: "Unsere Arbeit ansehen" },
    services: { title: "Unsere Leistungen", subtitle: "Wir bieten ein umfassendes Spektrum an handwerklichen Dienstleistungen für Ihr Haus und Ihren Garten.",
      s1: { title: "Innenausbau & Renovierung", desc: "Komplette Neugestaltung Ihrer Räume", items: ["Maler- und Tapezierarbeiten", "Fliesenlegen", "Elektroinstallationen", "Trockenbau"] },
      s2: { title: "Außenbereich", desc: "Pflege und Instandhaltung rund ums Haus", items: ["Fassadenrenovierung", "Dachreinigung", "Terrassenbau", "Pflasterarbeiten"] },
      s3: { title: "Reinigung & Pflege", desc: "Für ein sauberes und gepflegtes Zuhause", items: ["Heckenschnitt & Gartenpflege", "Tiefenreinigung", "Entrümpelung", "Winterdienst"] }
    },
    gallery: { title: "Vorher & Nachher", subtitle: "Überzeugen Sie sich selbst von unserer Arbeit. Ziehen Sie den Slider, um den Unterschied zu sehen.", more: "Weitere Impressionen", customTitle: "Eigene Bilder vergleichen", customDesc: "Laden Sie ein Vorher- und ein Nachher-Bild hoch, um den Slider selbst zu testen.", uploadBefore: "Vorher-Bild hochladen", uploadAfter: "Nachher-Bild hochladen" },
    testimonials: { 
      title: "Kundenbewertungen", 
      subtitle: "Das sagen unsere zufriedenen Kunden über unsere Arbeit.",
      reviewsList: [
        { name: "Markus Weber", rating: 5, comment: "Sehr professionell und schnell. Die Renovierung unseres Wohnzimmers war ein voller Erfolg!" },
        { name: "Jelena Kovačević", rating: 5, comment: "Odlična usluga! Sve je završeno u dogovorenom roku i jako uredno." },
        { name: "Thomas Müller", rating: 4, comment: "Gute Arbeit bei der Dachreinigung. Kann ich weiterempfehlen." },
        { name: "Emir Hadžić", rating: 5, comment: "Majstori su prva klasa. Prezadovoljan sam popločavanjem terase." }
      ]
    },
    faq: { title: "Häufig gestellte Fragen",
      q1: "Kommen Sie für einen kostenlosen Kostenvoranschlag?", a1: "Ja, Anfahrt und Kostenvoranschlag sind im Umkreis von 80 km völlig kostenlos.",
      q2: "Welche Materialien verwenden Sie?", a2: "Wir verwenden ausschließlich hochwertige Materialien von geprüften Herstellern.",
      q3: "Bieten Sie einen Notdienst an?", a3: "Ja, für Notfälle (Rohrbruch, Stromausfall) sind wir 24/7 erreichbar."
    },
    contact: { title: "Kontaktieren Sie uns", subtitle: "Haben Sie ein Projekt im Kopf? Senden Sie uns eine Nachricht mit einem Foto des Problems, und wir melden uns schnellstmöglich mit einem Angebot.",
      phone: "Telefon / WhatsApp", email: "E-Mail", area: "Einsatzgebiet", areaDesc: "Köln und Umgebung (bis 80km)",
      formTitle: "Projektanfrage", formDesc: "Beschreiben Sie Ihr Anliegen und laden Sie Fotos hoch.",
      fname: "Vorname", lname: "Nachname", tel: "Telefonnummer", desc: "Beschreibung", file: "Fotos hochladen", submit: "Anfrage senden", success: "Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.",
      workingHours: "Öffnungszeiten", hours1: "Mo - Fr: 08:00 - 18:00", hours2: "Samstag: 09:00 - 14:00", emergency: "Notdienst: 24/7"
    },
    footer: { desc: "Ihr zuverlässiger Partner für alle handwerklichen Arbeiten rund um Haus und Garten.", links: "Schnelllinks", legal: "Rechtliches", imprint: "Impressum", privacy: "Datenschutz", terms: "AGB", rights: "Alle Rechte vorbehalten." },
    legal: {
      imprint: { title: "Impressum", content: "Adis HausMeister Plus\nMusterstraße 123\n50667 Köln\nDeutschland\n\nVertreten durch:\nAdis Pupalovic\n\nKontakt:\nTelefon: +49 152 06323951\nE-Mail: pupalovic1@gmail.com\n\nUmsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:\nDE 123456789\n\nVerantwortlich für den Inhalt nach § 55 Abs. 2 RStV:\nAdis Pupalovic" },
      privacy: { title: "Datenschutzerklärung", content: "Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.\n\nDie Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis." },
      terms: { title: "Allgemeine Geschäftsbedingungen", content: "1. Geltungsbereich\nDiese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die zwischen Adis HausMeister Plus und dem Kunden geschlossen werden.\n\n2. Leistungen\nWir erbringen handwerkliche Dienstleistungen gemäß der individuellen Vereinbarung mit dem Kunden.\n\n3. Preise und Zahlungsbedingungen\nAlle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug fällig." }
    }
  },
  bs: {
    nav: { services: "Usluge", gallery: "Galerija", contact: "Kontakt", quote: "Zatraži ponudu", faq: "ČPP", reviews: "Recenzije" },
    hero: { title1: "Vaš partner za", title2: "Renoviranje i Održavanje", subtitle: "Od unutrašnjih radova do vanjskog održavanja. Činimo vaš dom ponovo lijepim – brzo, pouzdano i profesionalno.", cta1: "Besplatna ponuda", cta2: "Pogledajte naše radove" },
    services: { title: "Naše usluge", subtitle: "Nudimo sveobuhvatan spektar zanatskih usluga za vašu kuću i vrt.",
      s1: { title: "Unutrašnji radovi i renoviranje", desc: "Kompletan redizajn vaših prostorija", items: ["Molerski i tapetarski radovi", "Postavljanje pločica", "Elektroinstalacije", "Suha gradnja"] },
      s2: { title: "Vanjski prostor", desc: "Njega i održavanje oko kuće", items: ["Renoviranje fasada", "Čišćenje krova", "Izgradnja terasa", "Popločavanje"] },
      s3: { title: "Čišćenje i njega", desc: "Za čist i njegovan dom", items: ["Šišanje živice i održavanje vrta", "Dubinsko čišćenje", "Raščišćavanje", "Zimska služba"] }
    },
    gallery: { title: "Prije i Poslije", subtitle: "Uvjerite se sami u naš rad. Povucite klizač da vidite razliku.", more: "Ostale impresije", customTitle: "Uporedite vlastite slike", customDesc: "Učitajte sliku 'Prije' i 'Poslije' da sami testirate klizač.", uploadBefore: "Učitaj sliku Prije", uploadAfter: "Učitaj sliku Poslije" },
    testimonials: { 
      title: "Šta kažu naši klijenti", 
      subtitle: "Pročitajte iskustva naših zadovoljnih korisnika.",
      reviewsList: [
        { name: "Markus Weber", rating: 5, comment: "Veoma profesionalno i brzo. Renoviranje našeg dnevnog boravka je bio pun pogodak!" },
        { name: "Jelena Kovačević", rating: 5, comment: "Odlična usluga! Sve je završeno u dogovorenom roku i jako uredno." },
        { name: "Thomas Müller", rating: 4, comment: "Dobar posao oko čišćenja krova. Mogu ih toplo preporučiti." },
        { name: "Emir Hadžić", rating: 5, comment: "Majstori su prva klasa. Prezadovoljan sam popločavanjem terase." }
      ]
    },
    faq: { title: "Često postavljana pitanja",
      q1: "Da li dolazite na besplatnu procjenu?", a1: "Da, dolazak i procjena radova su potpuno besplatni u krugu od 80km.",
      q2: "Koje materijale koristite?", a2: "Koristimo isključivo visokokvalitetne materijale provjerenih proizvođača.",
      q3: "Da li nudite hitne intervencije?", a3: "Da, za hitne slučajeve (pucanje cijevi, problemi sa strujom) dostupni smo 24/7."
    },
    contact: { title: "Kontaktirajte nas", subtitle: "Imate projekat na umu? Pošaljite nam poruku sa fotografijom problema, a mi ćemo se javiti u najkraćem roku sa ponudom.",
      phone: "Telefon / WhatsApp", email: "E-mail", area: "Područje rada", areaDesc: "Köln i okolina (do 80km)",
      formTitle: "Upit za projekat", formDesc: "Opišite vaš zahtjev i pošaljite fotografije.",
      fname: "Ime", lname: "Prezime", tel: "Broj telefona", desc: "Opis", file: "Dodaj fotografije", submit: "Pošalji upit", success: "Hvala! Vaš upit je uspješno poslan.",
      workingHours: "Radno vrijeme", hours1: "Pon - Pet: 08:00 - 18:00", hours2: "Subota: 09:00 - 14:00", emergency: "Hitne intervencije: 24/7"
    },
    footer: { desc: "Vaš pouzdan partner za sve zanatske radove oko kuće i vrta.", links: "Brzi linkovi", legal: "Pravne informacije", imprint: "Impresum", privacy: "Politika privatnosti", terms: "Uslovi korištenja", rights: "Sva prava zadržana." },
    legal: {
      imprint: { title: "Impresum", content: "Adis HausMeister Plus\nMusterstraße 123\n50667 Köln\nNjemačka\n\nZastupa:\nAdis Pupalovic\n\nKontakt:\nTelefon: +49 152 06323951\nE-mail: pupalovic1@gmail.com\n\nPorezni identifikacijski broj:\nDE 123456789" },
      privacy: { title: "Politika privatnosti", content: "Vaša privatnost nam je izuzetno važna. Vaše lične podatke tretiramo povjerljivo i u skladu sa zakonskim propisima o zaštiti podataka.\n\nKorištenje naše web stranice je obično moguće bez davanja ličnih podataka. Ukoliko se na našim stranicama prikupljaju lični podaci (npr. ime, adresa ili e-mail), to se uvijek radi na dobrovoljnoj bazi." },
      terms: { title: "Uslovi korištenja", content: "1. Opseg primjene\nOvi opšti uslovi poslovanja odnose se na sve ugovore zaključene između Adis HausMeister Plus i klijenta.\n\n2. Usluge\nPružamo zanatske usluge prema individualnom dogovoru sa klijentom.\n\n3. Cijene i uslovi plaćanja\nSve cijene uključuju zakonski PDV. Računi dospijevaju na naplatu u roku od 14 dana od izdavanja." }
    }
  },
  en: {
    nav: { services: "Services", gallery: "Gallery", contact: "Contact", quote: "Request Quote", faq: "FAQ", reviews: "Reviews" },
    hero: { title1: "Your partner for", title2: "Renovation & Maintenance", subtitle: "From interior finishing to exterior maintenance. We make your home beautiful again – fast, reliable, and professional.", cta1: "Free Quote", cta2: "View Our Work" },
    services: { title: "Our Services", subtitle: "We offer a comprehensive range of craftsmanship services for your home and garden.",
      s1: { title: "Interior & Renovation", desc: "Complete redesign of your rooms", items: ["Painting and wallpapering", "Tiling", "Electrical installations", "Drywall"] },
      s2: { title: "Exterior", desc: "Care and maintenance around the house", items: ["Facade renovation", "Roof cleaning", "Terrace construction", "Paving"] },
      s3: { title: "Cleaning & Care", desc: "For a clean and well-kept home", items: ["Hedge trimming & garden care", "Deep cleaning", "Clearing out", "Winter service"] }
    },
    gallery: { title: "Before & After", subtitle: "See our work for yourself. Drag the slider to see the difference.", more: "More Impressions", customTitle: "Compare your own images", customDesc: "Upload a Before and After image to test the slider yourself.", uploadBefore: "Upload Before Image", uploadAfter: "Upload After Image" },
    testimonials: { 
      title: "Client Reviews", 
      subtitle: "See what our satisfied customers have to say about our work.",
      reviewsList: [
        { name: "Markus Weber", rating: 5, comment: "Very professional and fast. The renovation of our living room was a complete success!" },
        { name: "Jelena Kovačević", rating: 5, comment: "Excellent service! Everything was finished on time and very neatly." },
        { name: "Thomas Müller", rating: 4, comment: "Good job on the roof cleaning. I can highly recommend them." },
        { name: "Emir Hadžić", rating: 5, comment: "First-class craftsmen. I am extremely satisfied with the terrace paving." }
      ]
    },
    faq: { title: "Frequently Asked Questions",
      q1: "Do you provide free estimates?", a1: "Yes, travel and estimates are completely free within an 80km radius.",
      q2: "What materials do you use?", a2: "We only use high-quality materials from trusted manufacturers.",
      q3: "Do you offer emergency services?", a3: "Yes, we are available 24/7 for emergencies (pipe bursts, electrical issues)."
    },
    contact: { title: "Contact Us", subtitle: "Have a project in mind? Send us a message with a photo of the problem, and we will get back to you as soon as possible with a quote.",
      phone: "Phone / WhatsApp", email: "Email", area: "Service Area", areaDesc: "Cologne and surroundings (up to 80km)",
      formTitle: "Project Inquiry", formDesc: "Describe your request and upload photos.",
      fname: "First Name", lname: "Last Name", tel: "Phone Number", desc: "Description", file: "Upload Photos", submit: "Send Inquiry", success: "Thank you! Your inquiry has been sent successfully.",
      workingHours: "Working Hours", hours1: "Mon - Fri: 08:00 - 18:00", hours2: "Saturday: 09:00 - 14:00", emergency: "Emergency Service: 24/7"
    },
    footer: { desc: "Your reliable partner for all craftsmanship work around the house and garden.", links: "Quick Links", legal: "Legal", imprint: "Imprint", privacy: "Privacy Policy", terms: "Terms & Conditions", rights: "All rights reserved." },
    legal: {
      imprint: { title: "Imprint", content: "Adis HausMeister Plus\nMusterstraße 123\n50667 Cologne\nGermany\n\nRepresented by:\nAdis Pupalovic\n\nContact:\nPhone: +49 152 06323951\nEmail: pupalovic1@gmail.com\n\nVAT ID:\nDE 123456789" },
      privacy: { title: "Privacy Policy", content: "Your privacy is important to us. We treat your personal data confidentially and in accordance with statutory data protection regulations.\n\nThe use of our website is generally possible without providing personal data. Insofar as personal data (e.g., name, address, or email addresses) is collected on our pages, this is always done on a voluntary basis." },
      terms: { title: "Terms & Conditions", content: "1. Scope\nThese General Terms and Conditions apply to all contracts concluded between Adis HausMeister Plus and the client.\n\n2. Services\nWe provide craftsmanship services according to the individual agreement with the client.\n\n3. Prices and Payment Terms\nAll prices include statutory VAT. Invoices are due for payment within 14 days of the invoice date without deduction." }
    }
  }
};
