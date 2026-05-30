import { ServiceItem, ClinicHours, ClinicContact, ClinicMetadata, Testimonial } from "./types";

export const CLINIC_META: ClinicMetadata = {
  practiceName: "Mediplex Family Dentistry",
  dentistName: "Dr. Naeem Baig",
  dentistTitle: "BDS, Dental Implantologist (35+ Years Experience)",
  experienceYears: 35,
  locationState: "DHA Lahore (Phase 1, Near Ghazi Road)"
};

export const CLINIC_CONTACT: ClinicContact = {
  phone: "03193753797",
  phoneDisplay: "0319-3753797",
  whatsapp: "923193753797", // international format for Link
  whatsappDisplay: "+92 319 3753797",
  email: "naeembaig2000@gmail.com",
  address: "Mediplex Family Dentistry, 75 Block K Commercial, near Ghazi Road, Phase 1 DHA Lahore, Pakistan",
  addressShort: "75 Block K Commercial, Near Ghazi Road, Phase 1 DHA Lahore",
  mapsUrl: "https://maps.app.goo.gl/jUEvRnc3GA1caHyN9"
};

export const CLINIC_HOURS: ClinicHours = {
  days: "Monday to Saturday",
  time: "4:30 PM to 8:15 PM"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "orthodontics",
    title: "Orthodontics (Braces & Aligners)",
    shortDesc: "Straighten your teeth, align your bite, and achieve a beautiful, confident smile for all age groups.",
    fullDesc: "Orthodontic treatment goes far beyond aesthetics. We align crowded, crooked, or spaced teeth and correct bite functional issues (such as overbites or underbites) for children, teens, and adults. Using state-of-the-art clear aligners as well as standard aesthetic metal or ceramic braces, we design a customized path to your perfect smile.",
    benefits: [
      "Customized 3D treatment planning for predictable results.",
      "Options for high-aesthetic sapphire ceramic braces or invisible aligners.",
      "Improves oral hygiene capacity, biting efficiency, and jaw alignment.",
      "Gentle, progressive adjustments suitable for children, teens, and seniors."
    ],
    duration: "12-24 Months (Adjustments every 4-6 weeks)"
  },
  {
    id: "dental-implants",
    title: "Dental Implants (Strategic Restoration)",
    shortDesc: "The gold standard for replacing missing teeth, spearheaded by Dr. Naeem Baig's special interest in Implantology.",
    fullDesc: "Spearheaded by Dr. Naeem Baig, who holds over 3.5 decades of clinical focus with a dedicated special interest in Dental Implantology. Dental implants replace missing teeth from root to crown. By placing a bio-compatible titanium post surgically into the jawbone, we create an ultra-stable foundation for a custom-crafted ceramic crown that looks, feels, and functions exactly like your natural tooth.",
    benefits: [
      "Restores 100% chewing force and natural facial aesthetics.",
      "Prevents bone loss and shifting of adjacent teeth.",
      "Dr. Naeem Baig's 35+ years of specialized surgical expertise ensures unmatched precision.",
      "High-grade biocompatible titanium implants with lifetime durability potential."
    ],
    duration: "2-4 Months (Surgical placement + healing phase)"
  },
  {
    id: "root-canal",
    title: "Root Canal Therapy (Endodontics)",
    shortDesc: "Save your natural tooth from extraction with our highly gentle, virtually pain-free infection removal.",
    fullDesc: "Avoid extractions and protect your natural teeth. Our modern Root Canal Therapy removes infected or inflamed pulp from inside your tooth root, sterilizes and seals the microscopic canal, and secures it with a high-strength restoration. Thanks to advanced local anesthetics and contemporary techniques, the procedure is as comfortable and routine as receiving a basic filling.",
    benefits: [
      "Instant relief from severe toothaches and structural sensitivity.",
      "Preserves the natural tooth root, maintaining natural bite alignment.",
      "Prevents the spread of painful bacterial infections to neighboring teeth.",
      "High-grade sealing materials prevent reinfection."
    ],
    duration: "1-2 Sessions (45-60 minutes each)"
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening (Cosmetic Bleaching)",
    shortDesc: "Brighten your smile up to 8 shades lighter in less than an hour with our safe, medical-grade cosmetic whitening.",
    fullDesc: "Over time, beverages like coffee and tea, specific foods, and natural aging can stain outer enamel. Our professional teeth whitening system uses premium, enameled-safe hydrogen peroxide gels activated by specialized light waves to break down deep-set stains. It is safe, long-lasting, and achieves immediate, uniform brightness under physician supervision.",
    benefits: [
      "Up to 8 shades of whitening in a single 45-minute appointment.",
      "Supervised clinical application minimizes tooth and gum sensitivity.",
      "Custom take-home touch-up kits available for prolonged results.",
      "Removes modern stains from coffee, tea, smoking, and natural aging."
    ],
    duration: "45-60 Minutes"
  },
  {
    id: "light-cure-filling",
    title: "Light Cure Fillings (Composite Restorations)",
    shortDesc: "Durable, tooth-colored dental restorations that blend seamlessly with your natural enamel.",
    fullDesc: "Say goodbye to dark, unsightly metallic fillings. We use premium light-cured composite resin material that is precisely color-matched to your natural tooth. Applied in layers, shaped, and then set instantly using a specialized curing light, these resin restorations bond directly to your remaining tooth structure, restoring full durability and completely natural aesthetics.",
    benefits: [
      "100% mercury-free, safe, and biocompatible material.",
      "Invisible aesthetic finish — color-matched directly to your native shade.",
      "Bonds chemically to the tooth, strengthening its overall integrity.",
      "Requires minimal drilling, preserving more of your natural enamel."
    ],
    duration: "20-30 Minutes per tooth"
  },
  {
    id: "surgical-extraction",
    title: "Surgical Extractions & Impacted Wisdom Teeth",
    shortDesc: "Gentle and pain-free removal of impacted or deeply damaged teeth to protect your overall jaw structure.",
    fullDesc: "When a wisdom tooth is impacted (stuck beneath the gum line or growing sideways), it can cause severe pain, dental infections, and damage to adjacent teeth. Dr. Naeem Baig's extensive surgical experience makes surgical extractions highly safe, comfortable, and efficient. We utilize modern surgical techniques to extract wisdom and damaged teeth with minimal discomfort.",
    benefits: [
      "Relieves persistent pressure, chronic inflammation, and jaw stiffness.",
      "Prevents alignment crowding by stopping wisdom teeth from pushing neighboring teeth.",
      "Surgical expertise of Dr. Naeem Baig guarantees high procedural safety.",
      "Detailed post-operative care schedule to promote rapid, pain-free healing."
    ],
    duration: "30-50 Minutes"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Over 3.5 Decades of Trust",
    desc: "Dr. Naeem Baig has been practicing dentistry for over 35 years. This level of extensive clinical experience means your oral health is handled with unmatched diagnostic precision and care."
  },
  {
    title: "Special Interest in Implantology",
    desc: "Implant dentistry demands highly specialized surgical skills. Dr. Baig's long-standing focus on advanced implant procedures offers patients premium aesthetic and functional outcomes."
  },
  {
    title: "DHA Lahore Premier Location",
    desc: "Conveniently located at 75k Phase 1, near Ghazi Road, DHA Lahore. Our clinic is highly accessible, featuring stress-free parking and comfortable family-friendly waiting spaces."
  },
  {
    title: "The Safe Family-First Philosophy",
    desc: "We practice gentle dentistry designed for all ages—from child-friendly dental cleanings to custom restorative procedures for senior citizens. Everyone is treated with compassionate care."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Ahmad Raza",
    role: "DHA Lahore Resident",
    text: "Dr. Naeem Baig is a true professional. I was extremely nervous about getting a surgical wisdom tooth extraction, but his 35 years of experience was evident in how calmly and painlessly he completed the procedure. Highly recommended!",
    rating: 5
  },
  {
    id: "t2",
    name: "Sobia Munir",
    role: "Mother of Two",
    text: "Finding a gentle dentist for kids in Lahore is tough. Dr. Naeem is incredibly warm and made my children feel entirely safe during their light-cure fillings. The clinic near Ghazi Road is very easy to access.",
    rating: 5
  },
  {
    id: "t3",
    name: "Kamran Malik",
    role: "Implant Patient",
    text: "I got two dental implants done by Dr. Naeem. His expertise in implantology is unmatched. From explanation to surgery and placement, everything went perfectly. Booking with them via WhatsApp is super fast!",
    rating: 5
  }
];

// Copywriting and CRO insights for the developer and copywriter.
// These are visible in the "Developer & Copywriter Toolkit" sidebar of the applet.
export const WRITTEN_COPY_DOCS = [
  {
    section: "Brand Identity & Positioning",
    rationale: "Establishes immediate high trust and authority. Uses 'Mediplex Family Dentistry' to immediately signal a comprehensive family-centered practice, while anchoring Dr. Naeem Baig's 35+ years experience as the primary trust catalyst.",
    headings: [
      { level: "Primary Name", text: "Mediplex Family Dentistry" },
      { level: "Positioning Tagline", text: "Elite Family Care Backed by 35+ Years of Clinical Expertise" }
    ],
    textBlocks: [
      { label: "Brand Hook", content: "Generational trust meets modern cosmetic and restorative dental science in the heart of DHA Lahore." }
    ]
  },
  {
    section: "Homepage Copy (Hero & Trust Anchor)",
    rationale: "Frictionless conversions depend on local relevance and visible expertise within the first 3 seconds. The H1 explicitly targets 'DHA Lahore' to capture geo-specific search intent and localized trust, while Dr. Naeem Baig's expertise is framed around '35 Years' to establish instant clinical superiority.",
    headings: [
      { level: "H1 Headline", text: "Restore Your Confident Smile at Lahore's Trusted Family Dental Clinic" },
      { level: "H2 Subheadline", text: "Experience stress-free, pain-free dental care with Dr. Naeem Baig (35+ Years Experience) at Mediplex Family Dentistry — located in DHA Lahore Phase 1." }
    ],
    textBlocks: [
      { label: "CTA Primary Button Text", content: "Book Consultation via WhatsApp" },
      { label: "CTA Secondary Button Text", content: "View Special Treatments" },
      { label: "Hero Microcopy", content: "⚡ Easy booking: Connect directly with our clinical helpdesk over WhatsApp. No complex forms of waiting." }
    ]
  },
  {
    section: "Homepage Copy (Why Choose Us - CRO Focused)",
    rationale: "Patients seek safety and proven capabilities. We address common objections (fear of pain, accessibility, lack of experience) with four distinct benefits: 3.5 Decades of clinical history, Implantology authority, convenient DHA Lahore Phase 1 parking/access, and a Family-First clinical approach.",
    headings: [
      { level: "Section Title", text: "Why DHA Families Trust Mediplex Family Dentistry" },
      { level: "Section Subtitle", text: "Where decades of clinical expertise combine with gentle, compassionate care for children, adults, and seniors." }
    ],
    textBlocks: [
      { label: "Benefit 1 - Decades of Trust", content: "Over 35 Years of Hands-on Practice: Dr. Naeem Baig handles complex diagnostics and treatments with a seasoned precision that younger practices cannot match." },
      { label: "Benefit 2 - Specialized Implantology", content: "Implantology Focus: Dental implants require high-level surgical acumen. Dr. Baig's specialized focus guarantees beautifully aligned, permanent tooth replacements." },
      { label: "Benefit 3 - Accessible Location", content: "DHA Lahore Phase 1: Near Ghazi Road, our clean facility provides stress-free parking, relaxed waiting rooms, and modern sterilization protocols." },
      { label: "Benefit 4 - All-Ages Care", content: "Multigenerational Family Care: We design comfortable experiences for toddler dental checkups, orthodontic teens, cosmetic working adults, and restorative senior treatments." }
    ]
  },
  {
    section: "Services Page / Core Treatments Copy",
    rationale: "Each treatment is described using a 'Problem-Solution-Value' structure. We write detailed clinical yet consumer-friendly descriptions that emphasize preservation, stability, and aesthetics. This builds high perceived value and prompts patients to reach out on WhatsApp.",
    headings: [
      { level: "Services Header", text: "World-Class Dental Solutions for Every Generation" },
      { level: "Services Subheader", text: "From modern computer-guided implants to virtually pain-free root canals and aesthetic orthodontics." }
    ],
    textBlocks: [
      { label: "1. Orthodontics Copy", content: "Orthodontics: Straighten your teeth, align your bite, and achieve a beautiful, confident smile. We offer traditional brackets as well as modern clear aesthetic aligners for kids, adults, and seniors." },
      { label: "2. Dental Implants Copy (Special Interest)", content: "Dental Implants: The permanent gold standard to replace missing teeth, crafted from biocompatible titanium posts and custom porcelain crowns. Spearheaded by Dr. Naeem Baig's 35+ years of specialized surgical interest." },
      { label: "3. Root Canal Therapy Copy", content: "Root Canal Therapy: Stop pain and preserve your natural teeth. Our advanced root canal sterile treatments clean, seal, and protect infected roots comfortably." },
      { label: "4. Teeth Whitening Copy", content: "Teeth Whitening: Lift tea, coffee, and tobacco stains safely up to 8 shades in a single supervised 45-minute clinical appointment." },
      { label: "5. Light Cure Fillings Copy", content: "Light Cure Fillings: Mercury-free, tooth-colored composite restorations that bond instantly to enamel, ensuring completely invisible and durable results." },
      { label: "6. Surgical Extractions / Wisdom Teeth Copy", content: "Surgical Extractions: Quick, pain-free extraction of impacted wisdom teeth or non-savable structures under Dr. Baig's reassuring, expert surgical care." }
    ]
  },
  {
    section: "About Us / Meet Dr. Naeem Baig Copy",
    rationale: "The 'Doctor's Bio' is the second most visited page on medical websites. Patients buy into the practitioner first. By combining high academic authority with a warm family focus, we reduce dentist anxiety and make booking a logical, safe decision.",
    headings: [
      { level: "About Section Title", text: "Meet Dr. Naeem Baig" },
      { level: "About Section Subtitle", text: "35+ Years of Clinical Dedication and Compassionate Dental Practice" }
    ],
    textBlocks: [
      { label: "Doctor Biography Copy", content: "Dr. Naeem Baig has dedicated over 3.5 decades to delivering top-tier oral healthcare. With a profound interest and specialized training in advanced Dental Implantology and Surgical Dentistry, Dr. Baig combines a seasoned surgeon’s precision with a welcoming family practitioner’s warmth. He understands that a visit to the dentist can cause anxiety, which is why he has built Mediplex Family Dentistry around gentle therapy, detailed patient communication, and a focus on keeping your natural teeth beautiful and healthy. When you sit in his chair, you are backed by more than thirty-five years of diagnostic wisdom." }
    ]
  },
  {
    section: "Contact & Footer Information (Anti-Friction CRO)",
    rationale: "Ensure absolutely zero hurdles between the reader and the appointment booking. Provide concrete directions, standard hours of availability, multiple contact channels, and highlighted WhatsApp quick-commands.",
    headings: [
      { level: "Footer Call-to-Action", text: "Have a dental emergency or want to build a perfect smile?" },
      { level: "Footer Subtext", text: "Chat with us directly. Friendly booking help is just a click away." }
    ],
    textBlocks: [
      { label: "Physical Address", content: "Mediplex Family Dentistry, 75 Block K Commercial, near Ghazi Road, Phase 1 DHA Lahore, Pakistan" },
      { label: "Operating Hours", content: "Monday to Saturday: 4:30 PM to 8:15 PM" },
      { label: "WhatsApp Booking Hotline", content: "03193753797 (Click to Chat)" },
      { label: "Official Email Inquiry", content: "naeembaig2000@gmail.com" }
    ]
  }
];
