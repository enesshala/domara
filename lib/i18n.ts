"use client";

export type Locale = "en" | "sq" | "de";

export const defaultLocale: Locale = "en";

export type Dictionary = Record<string, string>;

const en: Dictionary = {
  nav_home: "Home",
  nav_about: "About Us",
  nav_contact: "Contact",
  nav_products: "Products",
  hero_alt: "Luxury Interior",
  logo_alt: "DOMARA",
  content_title: "Trusted by Domara Home",
  content_copy:
    "With deep dedication and craftsmanship, we proudly completed this 200 m² home, delivering both full furnishing and bespoke interior design.",
  content_image_alt: "Modern Architecture",
  designers_line1: "OUR DESIGNS ARE THE",
  designers_line2: "DIFFERENCE",
  category_kitchen: "KITCHEN",
  category_living_room: "LIVING ROOM",
  category_rooms: "ROOMS",
  category_bathroom: "BATHROOM",
  category_dining: "DINING",
  final_alt1: "Interior Design 1",
  final_alt2: "Interior Design 2",
  final_alt3: "Design Materials",
  final_alt4: "Design Plans",
  // About page - hero
  about_hero_alt: "Luxury Kitchen",
  // About page - ProjectsPreview
  about_prev_heading1: "Our",
  about_prev_heading2: "Projects",
  about_prev_card1_title: "Dining Room",
  about_prev_img1_alt: "Kitchen",
  about_prev_img2_alt: "Living Room",
  about_project_prefix: "Project",
  // About page - Statistics
  stats_projects: "Projects",
  stats_clients: "Clients",
  stats_satisfaction: "Satisfaction",
  stats_sqft: "Square Feet",
  // About page - ProjectsDetailed
  about_det_heading1: "Our",
  about_det_heading2: "Projects",
  about_det_p1_title: "Modern Minimalist Living Room",
  about_det_p1_desc:
    "A modern living room with clean lines, warm lighting, and a neutral palette—natural textures balancing comfort and elegance.",
  about_det_p2_title: "Serene Modern Bedroom",
  about_det_p2_desc:
    "A calming retreat with soft tones, natural light, and minimalist design, balancing comfort and sophistication.",
  about_det_p3_title: "Contemporary Wine Kitchen",
  about_det_p3_desc:
    "Sleek cabinetry, marble finishes, and integrated wine displays—combining functionality with modern luxury.",
  link_view_more: "View More",
  // Contact page
  contact_headline: "Let's work together",
  contact_sub: "Tell us about your project and we'll reach out shortly.",
  label_first_name: "First name",
  label_last_name: "Last name",
  label_email: "Email",
  label_company: "Company",
  label_phone: "Phone",
  optional: "Optional",
  help_question: "How can we help you?",
  max_chars: "Max 500 characters",
  label_message: "Message",
  send_message: "Send message",
  contact_image_alt: "Modern office workspace",
  locations_sub:
    "Visit our showrooms and find the perfect furniture for your space!",
  locations_title: "Explore Our Locations",
  location_primary: "Babush - Magjistralja Ferizaj Prishtinë",
  // Products - category nav
  prod_cat_kitchen: "KITCHEN",
  prod_cat_rooms: "ROOMS",
  prod_cat_bathroom: "BATHROOM CABINET",
  prod_cat_dining: "DINING TABLE",
  // AboutDeco per category
  about_kitchen_hero: "KITCHEN",
  about_kitchen_sub: "About Kitchen",
  about_kitchen_body:
    "Meticulous cabinetry, resilient stone, and integrated lighting shape a kitchen that works as beautifully as it looks. We balance workflow, storage, and tactile materials to craft the quieter luxury your daily rituals deserve.",
  about_bathroom_hero: "BATHROOM CABINET",
  about_bathroom_sub: "About Bathroom Cabinet",
  about_bathroom_body:
    "Calm, spa‑like utility. From moisture‑proof finishes to soft‑close joinery, our bathroom systems turn compact spaces into serene sanctuaries—elegant, durable, and effortless to maintain.",
  about_rooms_hero: "ROOMS",
  about_rooms_sub: "About Rooms",
  about_rooms_body:
    "Layered comfort with a disciplined palette. We compose wardrobes, shelving, and media walls that conceal the clutter and frame what matters—inviting rooms that feel resolved from any angle.",
  about_dining_hero: "DINING TABLE",
  about_dining_sub: "About Dining Table",
  about_dining_body:
    "Conversation‑first proportions and enduring materials. Our dining pieces pair hand‑finished surfaces with robust bases for a table that anchors gatherings—from everyday meals to late‑night celebrations.",
  loading: "Loading...",
  footer_pages: "Pages",
  footer_categories: "Categories",
  footer_company: "Company",
  footer_home: "Home",
  footer_products: "Products",
  footer_contact: "Contact",
  footer_kitchen: "Kitchen",
  footer_rooms: "Rooms",
  footer_bath: "Bathroom Cabinet",
  footer_dining: "Dining Table",
  footer_about: "About Us",
  footer_careers: "Careers",
  footer_location: "Location",
  footer_privacy: "Privacy Policy",
  footer_terms: "Terms of Service",
};

const sq: Dictionary = {
  nav_home: "Kreu",
  nav_about: "Rreth Nesh",
  nav_contact: "Kontakt",
  nav_products: "Produkte",
  hero_alt: "Interier Luksoz",
  logo_alt: "DOMARA",
  content_title: "E besuar nga Domara Home",
  content_copy:
    "Me përkushtim dhe mjeshtëri, përfunduam me krenari këtë shtëpi 200 m², duke ofruar mobilim të plotë dhe dizajn të brendshëm të personalizuar.",
  content_image_alt: "Arkitekturë Moderne",
  designers_line1: "DIZAJNET TONA JANË",
  designers_line2: "NDRYSHIMI",
  category_kitchen: "KUZHINA",
  category_living_room: "SALLONI",
  category_rooms: "DHOMAT",
  category_bathroom: "BANJO",
  category_dining: "TRYEZA E NGRËNIES",
  final_alt1: "Dizajn i Brendshëm 1",
  final_alt2: "Dizajn i Brendshëm 2",
  final_alt3: "Materiale Dizajni",
  final_alt4: "Planet e Dizajnit",
  // About page - hero
  about_hero_alt: "Kuzhinë luksoze",
  // About page - ProjectsPreview
  about_prev_heading1: "Projektet",
  about_prev_heading2: "Tona",
  about_prev_card1_title: "Salloni i ngrënies",
  about_prev_img1_alt: "Kuzhina",
  about_prev_img2_alt: "Salloni",
  about_project_prefix: "Projekti",
  // About page - Statistics
  stats_projects: "Projekte",
  stats_clients: "Klientë",
  stats_satisfaction: "Kënaqësi",
  stats_sqft: "Metra katrorë",
  // About page - ProjectsDetailed
  about_det_heading1: "Projektet",
  about_det_heading2: "Tona",
  about_det_p1_title: "Sallon modern minimalist",
  about_det_p1_desc:
    "Sallon modern me linja të pastra, dritë të ngrohtë dhe paletë neutrale—tekstura natyrale për ekuilibër komoditeti dhe elegance.",
  about_det_p2_title: "Dhomë gjumi e qetë moderne",
  about_det_p2_desc:
    "Një strehë e qetë me tonalitete të buta, dritë natyrale dhe dizajn minimalist, në balancë mes rehatisë dhe rafinimit.",
  about_det_p3_title: "Kuzhinë bashkëkohore me verë",
  about_det_p3_desc:
    "Kabinete elegante, përfundime mermeri dhe ekspozime vere të integruara—funksionalitet i kombinuar me luks modern.",
  link_view_more: "Shiko më shumë",
  // Contact page
  contact_headline: "Le të punojmë së bashku",
  contact_sub:
    "Na tregoni për projektin tuaj dhe ne do t'ju kontaktojmë shpejt.",
  label_first_name: "Emri",
  label_last_name: "Mbiemri",
  label_email: "Email",
  label_company: "Kompania",
  label_phone: "Telefoni",
  optional: "Opsionale",
  help_question: "Si mund t'ju ndihmojmë?",
  max_chars: "Maksimumi 500 karaktere",
  label_message: "Mesazhi",
  send_message: "Dërgo mesazhin",
  contact_image_alt: "Hapësirë pune moderne",
  locations_sub:
    "Vizitoni showroom-et tona dhe gjeni mobiljet e përsosura për hapësirën tuaj!",
  locations_title: "Eksploroni Lokacionet Tona",
  location_primary: "Babush - Magjistralja Ferizaj Prishtinë",
  // Products - category nav
  prod_cat_kitchen: "KUZHINA",
  prod_cat_rooms: "DHOMAT",
  prod_cat_bathroom: "KABINETI I BANJËS",
  prod_cat_dining: "TRYEZA E NGRËNIES",
  // AboutDeco per category
  about_kitchen_hero: "KUZHINA",
  about_kitchen_sub: "Rreth Kuzhinës",
  about_kitchen_body:
    "Kabinete të përpikta, gur i qëndrueshëm dhe ndriçim i integruar për një kuzhinë që duket dhe funksionon përsosmërisht—me rrjedhë pune dhe ruajtje të balancuar.",
  about_bathroom_hero: "KABINETI I BANJËS",
  about_bathroom_sub: "Rreth Kabinetit të Banjës",
  about_bathroom_body:
    "Qetësi si në spa. Përfundime rezistente ndaj lagështisë dhe mekanizma të butë—praktike, elegante dhe të lehta për mirëmbajtje.",
  about_rooms_hero: "DHOMAT",
  about_rooms_sub: "Rreth Dhoma",
  about_rooms_body:
    "Komoditet i shtresuar me një paletë të disiplinuar. Gardëroba, rafte dhe mure media që fshehin rrëmujën dhe kornizojnë thelbësoren.",
  about_dining_hero: "TRYEZA E NGRËNIES",
  about_dining_sub: "Rreth Tryezës",
  about_dining_body:
    "Proporcionet ftojnë bisedën, materialet zgjasin. Një pikë qendrore për çdo tubim—nga përditshmëria te festat.",
  loading: "Duke u ngarkuar...",
  footer_pages: "Faqet",
  footer_categories: "Kategoritë",
  footer_company: "Kompania",
  footer_home: "Kreu",
  footer_products: "Produkte",
  footer_contact: "Kontakt",
  footer_kitchen: "Kuzhina",
  footer_rooms: "Dhoma",
  footer_bath: "Banjë",
  footer_dining: "Tavolina e ngrënies",
  footer_about: "Rreth Nesh",
  footer_careers: "Karriera",
  footer_location: "Lokacioni",
  footer_privacy: "Politika e privatësisë",
  footer_terms: "Kushtet e shërbimit",
};

const de: Dictionary = {
  nav_home: "Startseite",
  nav_about: "Über uns",
  nav_contact: "Kontakt",
  nav_products: "Produkte",
  hero_alt: "Luxuriöses Interieur",
  logo_alt: "DOMARA",
  content_title: "Vertraut von Domara Home",
  content_copy:
    "Mit großem Engagement und Handwerk haben wir dieses 200 m² große Zuhause voll möbliert und individuell gestaltet.",
  content_image_alt: "Moderne Architektur",
  designers_line1: "UNSERE DESIGNS SIND",
  designers_line2: "DER UNTERSCHIED",
  category_kitchen: "KÜCHE",
  category_living_room: "WOHNZIMMER",
  category_rooms: "ZIMMER",
  category_bathroom: "BADEZIMMER",
  category_dining: "ESSTISCH",
  final_alt1: "Interior Design 1",
  final_alt2: "Interior Design 2",
  final_alt3: "Designmaterialien",
  final_alt4: "Designpläne",
  // About page - hero
  about_hero_alt: "Luxuriöse Küche",
  // About page - ProjectsPreview
  about_prev_heading1: "Unsere",
  about_prev_heading2: "Projekte",
  about_prev_card1_title: "Esszimmer",
  about_prev_img1_alt: "Küche",
  about_prev_img2_alt: "Wohnzimmer",
  about_project_prefix: "Projekt",
  // About page - Statistics
  stats_projects: "Projekte",
  stats_clients: "Kunden",
  stats_satisfaction: "Zufriedenheit",
  stats_sqft: "Quadratmeter",
  // About page - ProjectsDetailed
  about_det_heading1: "Unsere",
  about_det_heading2: "Projekte",
  about_det_p1_title: "Modernes minimalistisches Wohnzimmer",
  about_det_p1_desc:
    "Ein modernes Wohnzimmer mit klaren Linien, warmem Licht und neutraler Palette—natürliche Texturen vereinen Komfort und Eleganz.",
  about_det_p2_title: "Ruhiges modernes Schlafzimmer",
  about_det_p2_desc:
    "Ein beruhigender Rückzugsort mit sanften Tönen, Tageslicht und minimalistischem Design—komfortabel und anspruchsvoll.",
  about_det_p3_title: "Zeitgenössische Weinküche",
  about_det_p3_desc:
    "Elegante Schränke, Marmoroberflächen und integrierte Weinpräsentation—Funktion trifft modernen Luxus.",
  link_view_more: "Mehr erfahren",
  // Contact page
  contact_headline: "Lassen Sie uns zusammenarbeiten",
  contact_sub: "Erzählen Sie uns von Ihrem Projekt – wir melden uns in Kürze.",
  label_first_name: "Vorname",
  label_last_name: "Nachname",
  label_email: "E‑Mail",
  label_company: "Firma",
  label_phone: "Telefon",
  optional: "Optional",
  help_question: "Wie können wir helfen?",
  max_chars: "Maximal 500 Zeichen",
  label_message: "Nachricht",
  send_message: "Nachricht senden",
  contact_image_alt: "Modernes Büroarbeitsumfeld",
  locations_sub:
    "Besuchen Sie unsere Showrooms und finden Sie die passenden Möbel!",
  locations_title: "Standorte entdecken",
  location_primary: "Babush - Magjistralja Ferizaj Prishtinë",
  // Products - category nav
  prod_cat_kitchen: "KÜCHE",
  prod_cat_rooms: "ZIMMER",
  prod_cat_bathroom: "BADEZIMMERSCHRANK",
  prod_cat_dining: "ESSTISCH",
  // AboutDeco per category
  about_kitchen_hero: "KÜCHE",
  about_kitchen_sub: "Über die Küche",
  about_kitchen_body:
    "Präzise Schreinerarbeit, widerstandsfähiger Stein und integriertes Licht formen eine Küche, die so gut funktioniert wie sie aussieht.",
  about_bathroom_hero: "BADEZIMMERSCHRANK",
  about_bathroom_sub: "Über Badmöbel",
  about_bathroom_body:
    "Ruhige, spa‑ähnliche Funktion. Feuchtigkeitsresistente Oberflächen und Soft‑Close—elegant, langlebig, pflegeleicht.",
  about_rooms_hero: "ZIMMER",
  about_rooms_sub: "Über Zimmer",
  about_rooms_body:
    "Geschichteter Komfort mit disziplinierter Palette. Wir komponieren Stauraum und Medienwände, die Ordnung schaffen und Akzente setzen.",
  about_dining_hero: "ESSTISCH",
  about_dining_sub: "Über den Esstisch",
  about_dining_body:
    "Gesprächsfreundliche Proportionen und dauerhafte Materialien—ein Mittelpunkt für gemeinsame Abende und Feste.",
  loading: "Wird geladen...",
  footer_pages: "Seiten",
  footer_categories: "Kategorien",
  footer_company: "Unternehmen",
  footer_home: "Startseite",
  footer_products: "Produkte",
  footer_contact: "Kontakt",
  footer_kitchen: "Küche",
  footer_rooms: "Zimmer",
  footer_bath: "Badezimmerschrank",
  footer_dining: "Esstisch",
  footer_about: "Über uns",
  footer_careers: "Karriere",
  footer_location: "Standort",
  footer_privacy: "Datenschutzerklärung",
  footer_terms: "Nutzungsbedingungen",
};

export const dictionaries: Record<Locale, Dictionary> = { en, sq, de };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
