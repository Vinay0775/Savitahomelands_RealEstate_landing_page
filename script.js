const year = new Date().getFullYear();
const yearEl = document.getElementById("currentYear");
if (yearEl) {
    yearEl.textContent = year;
}

const translations = { hi: {}, en: {} };

translations.hi.meta = {
    title: "Savita Homelands Jaipur | जयपुर में JDA & RERA Approved प्लॉट्स",
    description: "Savita Homelands Jaipur के साथ जयपुर में 100% सुरक्षित JDA Approved और RERA Registered residential plots खरीदें। फ्री साइट विजिट बुक करें या WhatsApp पर बात करें।",
    ogTitle: "Savita Homelands Jaipur | सुरक्षित JDA & RERA Approved प्लॉट्स",
    ogDescription: "कच्ची कॉलोनियों से बचें। जयपुर में कानूनी, सुरक्षित और पारदर्शी plotted investment options देखें।"
};
translations.hi.floatingWhatsAppLabel = "व्हाट्सऐप";
translations.hi.floatingWhatsAppAria = "WhatsApp पर चैट करें";
translations.hi.topStripText = "JDA Approved | RERA Registered | जयपुर में प्रीमियम रेजिडेंशियल प्लॉट गाइडेंस";
translations.hi.topCallText = "अभी कॉल करें: 8619384178";
translations.hi.brandTagline = "सुरक्षित प्लॉट निवेश";
translations.hi.nav = ["परिचय", "जोखिम", "अप्रूव्ड प्लॉट्स", "गैलरी", "संपर्क"];
translations.hi.headerBookButton = "फ्री साइट विजिट बुक करें";
translations.hi.hero = {
    eyebrow: "जयपुर में सुरक्षित और कानूनी प्लॉट निवेश",
    title: "जयपुर में 100% सुरक्षित JDA & RERA Approved प्लॉट्स खरीदें",
    lead: "कच्ची कॉलोनियों से बचें और सुरक्षित निवेश करें।",
    primaryButton: "फ्री साइट विजिट बुक करें",
    secondaryButton: "WhatsApp पर बात करें (8619384178)",
    trust: [
        {
            title: "100% Legal & Safe",
            text: "हर डील में कानूनी स्पष्टता, दस्तावेज़ और पारदर्शिता पर फोकस।"
        },
        {
            title: "निवेश और परिवार दोनों के लिए",
            text: "रहने, बनाने और future growth के हिसाब से बेहतर विकल्प।"
        }
    ],
    panelEyebrow: "विनोद विश्वकर्मा द्वारा स्थापित",
    panelText: "सविता होमलैंड्स जयपुर, विनोद विश्वकर्मा द्वारा स्थापित एक भरोसेमंद रियल एस्टेट ब्रांड है। हम आपको केवल JDA Approved और RERA Registered प्रॉपर्टी ही उपलब्ध कराते हैं।",
    stats: [
        {
            title: "पारदर्शी डील्स",
            text: "Approvals, paperwork और pricing हर buyer को साफ तरीके से समझाई जाती है।"
        },
        {
            title: "लोकल भरोसा",
            text: "जयपुर buyers की ज़रूरत और locations को समझकर guidance दी जाती है।"
        },
        {
            title: "प्रीमियम सपोर्ट",
            text: "Inquiry से site visit तक तेज़ और professional support."
        }
    ],
    callButton: "अभी कॉल करें",
    exploreButton: "Approved प्लॉट्स देखें"
};
translations.hi.signals = [
    {
        label: "सुरक्षित निवेश",
        title: "JDA और RERA backed plots के साथ ज्यादा confidence."
    },
    {
        label: "भरोसा",
        title: "पारदर्शी process और customer-first guidance."
    },
    {
        label: "फास्ट सपोर्ट",
        title: "Call, WhatsApp या form से तुरंत inquiry करें."
    }
];
translations.hi.guideLead = {
    eyebrow: "फ्री PDF गाइड",
    title: "जयपुर में सुरक्षित निवेश की अल्टीमेट JDA चेकलिस्ट",
    description: "नाम और WhatsApp नंबर भरें और Savita Homelands की यह free PDF guide तुरंत download करें। इसमें वे 7 सवाल हैं जो हर serious buyer को plot final करने से पहले जरूर पूछने चाहिए।",
    previewLabel: "PDF के अंदर",
    previewTitle: "7 safety checks जो हर Jaipur plot buyer को verify करने चाहिए",
    items: [
        "क्या प्रोजेक्ट 100% JDA Approved है?",
        "क्या ज़मीन का 90A हो चुका है?",
        "क्या प्रोजेक्ट RERA में registered है?",
        "क्या सरकारी बैंकों से loan मिल रहा है?",
        "साइट development ground पर कितना हुआ है?",
        "क्या title clear है और registry बिना रुकावट होगी?",
        "लोकेशन future growth के लिए कितनी मजबूत है?"
    ],
    promise: "यह guide buyers को risky deal, अधूरे कागज़ और गलत फैसले से बचाने के लिए बनाई गई है।",
    formBadge: "Free Download",
    formTitle: "Download Free PDF Guide",
    formDescription: "अपना नाम और WhatsApp नंबर भरें। PDF submit करते ही डाउनलोड हो जाएगी और आपकी inquiry हमारे पास lead के रूप में आ जाएगी।",
    labels: ["नाम", "WhatsApp नंबर"],
    placeholders: ["अपना नाम लिखें", "अपना WhatsApp नंबर लिखें"],
    submit: "PDF डाउनलोड करें",
    buttonLoading: "PDF तैयार हो रही है...",
    note: "हम आपकी जानकारी केवल guide share करने और safe plot options बताने के लिए उपयोग करेंगे।",
    submitting: "आपकी जानकारी भेजी जा रही है...",
    success: "धन्यवाद! आपकी PDF डाउनलोड हो रही है। अगर download शुरू न हो तो नीचे दिए गए link पर क्लिक करें।",
    error: "Guide भेजने में दिक्कत आई। कृपया फिर कोशिश करें।",
    manualLink: "अगर PDF अपने आप डाउनलोड न हो, तो यहां क्लिक करें",
    subject: "Savita Homelands Jaipur PDF guide lead",
    fileName: "savita-homelands-jda-checklist-guide.pdf"
};
translations.hi.about = {
    eyebrow: "हमारे बारे में",
    title: "Savita Homelands Jaipur के बारे में",
    paragraphs: [
        "सविता होमलैंड्स जयपुर, विनोद विश्वकर्मा द्वारा स्थापित एक भरोसेमंद रियल एस्टेट ब्रांड है। हम आपको केवल JDA Approved और RERA Registered प्रॉपर्टी ही उपलब्ध कराते हैं।",
        "हमारा फोकस साफ है: पारदर्शी जानकारी, सुरक्षित निवेश, और buyer-first guidance ताकि आप बिना confusion के सही निर्णय ले सकें।"
    ],
    cards: [
        {
            title: "भरोसेमंद अनुभव",
            text: "सुरक्षित documentation, practical location value और साफ buying process पर फोकस।"
        },
        {
            title: "पूरी पारदर्शिता",
            text: "Approvals, pricing और site visit details बिना hidden surprises के समझाए जाते हैं।"
        },
        {
            title: "ग्राहक-प्रथम दृष्टिकोण",
            text: "जयपुर buyers को shortlist, visit और final decision में आसान guidance मिलती है।"
        }
    ]
};
translations.hi.risk = {
    eyebrow: "समस्या को समझें",
    title: "कच्ची कॉलोनियों में प्लॉट खरीदना खतरनाक हो सकता है",
    description: "कम कीमत आकर्षक लग सकती है, लेकिन गलत paperwork और legal risk आगे चलकर बड़ा नुकसान बन सकते हैं।",
    cards: [
        {
            title: "कोई कानूनी सुरक्षा नहीं",
            text: "Ownership और future clarity दोनों पर सवाल खड़े हो सकते हैं।"
        },
        {
            title: "रजिस्ट्रेशन में दिक्कत",
            text: "Documentation weak होने पर process लंबा और uncertain हो सकता है।"
        },
        {
            title: "भविष्य में नुकसान",
            text: "Fraud risk, resale issues और investment loss की संभावना बढ़ जाती है।"
        }
    ],
    banner: "गलत paperwork की वजह से अपनी मेहनत की कमाई को जोखिम में न डालें।",
    button: "WhatsApp पर पूछें"
};
translations.hi.solution = {
    comparisonEyebrow: "Safe vs Risky Investment",
    comparisonTitle: "Approved plots क्यों ज़्यादा सुरक्षित विकल्प माने जाते हैं",
    comparisonHeaders: ["कच्ची या risky society", "JDA & RERA Approved plot"],
    comparisonRows: [
        "कानूनी clarity कम",
        "बेहतर legal security",
        "रजिस्ट्रेशन में uncertainty",
        "दस्तावेज़ी प्रक्रिया ज़्यादा साफ",
        "Future value पर doubt",
        "Growth potential ज़्यादा मजबूत",
        "Resale मुश्किल हो सकती है",
        "Resale value समझाना आसान"
    ],
    eyebrow: "क्यों चुनें JDA & RERA Approved प्लॉट्स?",
    title: "सुरक्षित, कानूनी और growth-oriented plot buying",
    cards: [
        {
            title: "JDA Approved",
            text: "सरकारी approval के साथ ज्यादा भरोसा और बेहतर clarity।"
        },
        {
            title: "RERA Registered",
            text: "Project credibility और documentation में मजबूत transparency।"
        },
        {
            title: "100% Legal & Safe",
            text: "Illegal societies के मुकाबले कम risk और ज्यादा confidence।"
        },
        {
            title: "High Growth Potential",
            text: "Future appreciation और resale value के लिए बेहतर position।"
        }
    ],
    button: "बेस्ट प्लॉट डील्स पाएं"
};
translations.hi.showcase = {
    eyebrow: "प्रॉपर्टी शोकेस",
    title: "हम आपको जयपुर के बेहतरीन लोकेशन्स पर प्लॉट्स उपलब्ध कराते हैं",
    description: "Layouts, site visuals और location context buyers को पहले ही trust और clarity देते हैं।",
    cards: [
        {
            label: "Approved Layout",
            title: "प्लॉट लेआउट की स्पष्ट जानकारी",
            text: "Buyer को development की planning साफ तरीके से समझ आती है।"
        },
        {
            label: "Site Image",
            title: "On-site ground reality",
            text: "साइट विजिट से पहले visual reassurance और trust build होता है।"
        },
        {
            label: "Investment View",
            title: "Shortlist करने में आसानी",
            text: "Budget और purpose के हिसाब से buyer जल्दी compare कर पाता है।"
        },
        {
            label: "Location Advantage",
            title: "लोकेशन और access visibility",
            text: "Growth areas और connectivity का practical overview मिलता है।"
        }
    ]
};
translations.hi.video = {
    eyebrow: "वीडियो सेक्शन",
    title: "साइट विजिट वीडियो देखकर पहले ही project की feel समझें",
    description: "Video content buyer का trust जल्दी build करता है. Ground reality, road access और project environment visuals की वजह से inquiry quality भी बेहतर होती है.",
    points: [
        {
            title: "Actual site walkthrough",
            text: "Buyer को real on-ground स्थिति समझने में आसानी मिलती है।"
        },
        {
            title: "Trust-building visual proof",
            text: "Words के बजाय visuals project credibility को जल्दी मजबूत करते हैं।"
        }
    ],
    button: "वीडियो WhatsApp पर मंगवाएं",
    badge: "Featured Site Video",
    frameTitle: "Site visit walkthrough",
    clips: [
        {
            label: "Site Clip",
            title: "Ground update aur site view",
            text: "Visit se pehle buyer ko project ki visual feel aur environment samajhne me madad milti hai."
        },
        {
            label: "Project Clip",
            title: "Plotted site ka ek aur angle",
            text: "Road access, aas-paas ka area aur development confidence compare karna aur aasaan hota hai."
        },
        {
            label: "Visit Highlight",
            title: "Trust build karne ke liye short video proof",
            text: "Mobile users ke liye fast impression aur WhatsApp inquiry ko aur strong banata hai."
        }
    ]
};
translations.hi.gallery = {
    eyebrow: "वीडियो और इमेज गैलरी",
    title: "हमारी साइट विजिट और प्रोजेक्ट्स की झलक देखें",
    description: "Videos और visuals buyer को site feel, trust और intent build करने में मदद करते हैं।",
    cards: [
        {
            label: "Site Visit Video",
            title: "वास्तविक साइट walkthrough",
            text: "Buyer को project की ground feel पहले ही मिल जाती है।"
        },
        {
            label: "Project Visual",
            title: "Development progress highlight",
            text: "Premium presentation के साथ भरोसा मजबूत होता है।"
        },
        {
            label: "Ground Photo",
            title: "Visit-worthy shortlist image",
            text: "Safe plots और risky options के बीच फर्क समझाना आसान होता है।"
        },
        {
            label: "Location View",
            title: "Jaipur corridor context",
            text: "Location logic और future potential को visually connect किया जाता है।"
        }
    ],
    prev: "पिछला मीडिया स्लाइड",
    next: "अगला मीडिया स्लाइड",
    dots: "स्लाइड"
};
translations.hi.trust = {
    eyebrow: "भरोसा और प्रूफ",
    title: "पारदर्शी और भरोसेमंद डील्स",
    description: "Strong trust signals buyers को जल्दी action लेने के लिए प्रेरित करते हैं।",
    proofCards: [
        {
            title: "पारदर्शी और भरोसेमंद डील्स",
            text: "हर बातचीत clarity पर आधारित होती है, pressure पर नहीं।"
        },
        {
            title: "लोकल buyers का trust",
            text: "जयपुर-focused guidance buying journey को ज्यादा confident बनाती है।"
        },
        {
            title: "तेज़ response support",
            text: "Call, WhatsApp और site visit coordination जल्दी शुरू हो जाती है।"
        }
    ],
    testimonials: [
        {
            label: "Buyer style feedback",
            text: "\"Approvals और paperwork को इतनी साफ भाषा में समझाया गया कि family decision लेना आसान हो गया।\"",
            author: "Family buyer, Jaipur"
        },
        {
            label: "Buyer style feedback",
            text: "\"Site visuals और transparent approach की वजह से shortlist करना और भी आसान हो गया।\"",
            author: "Investment-focused buyer"
        }
    ]
};
translations.hi.lead = {
    eyebrow: "लीड फॉर्म",
    title: "अपनी जानकारी भरें और बेस्ट डील पाएं",
    description: "अपना budget share करें और Savita Homelands Jaipur से approval-backed plots की सही जानकारी पाएं।",
    highlights: [
        {
            title: "फ्री साइट विजिट",
            text: "Shortlist discuss करें और आपके requirement के हिसाब से site visit plan करें।"
        },
        {
            title: "WhatsApp support",
            text: "Fast details, pricing guidance और next steps तुरंत पाएं।"
        }
    ],
    whatsappButton: "अभी WhatsApp करें - 8619384178",
    labels: ["नाम", "मोबाइल नंबर", "बजट (वैकल्पिक)"],
    placeholders: [
        "अपना नाम लिखें",
        "अपना मोबाइल नंबर लिखें",
        "उदाहरण: 15 लाख से 25 लाख"
    ],
    submit: "जानकारी भेजें",
    note: "आपकी जानकारी केवल plot options, site visits और guidance के लिए उपयोग की जाएगी।",
    subject: "Savita Homelands Jaipur lead enquiry"
};
translations.hi.location = {
    eyebrow: "लोकेशन एडवांटेज",
    title: "जयपुर plotted investment के लिए एक मजबूत market बना हुआ है",
    description: "Buyers आमतौर पर उन locations को prefer करते हैं जहाँ roads, growth zones, commercial movement और future-ready connectivity बेहतर हो।",
    points: [
        {
            title: "बेहतर connectivity",
            text: "Ring Road, Ajmer Road और Tonk Road जैसे routes के पास access decision को मजबूत बनाता है।"
        },
        {
            title: "Growth areas और SEZ influence",
            text: "Industrial और commercial movement के पास plots investors के लिए relevant बने रहते हैं।"
        },
        {
            title: "Future-focused demand",
            text: "Expanding residential catchments future value और resale positioning को support करते हैं।"
        }
    ],
    mapLabel: "Jaipur, Rajasthan",
    mapTitle: "मुख्य corridors के आसपास location context देखें",
    mapFrameTitle: "जयपुर राजस्थान का मानचित्र"
};
translations.hi.finalCta = {
    eyebrow: "अंतिम कॉल टू एक्शन",
    title: "कच्ची कॉलोनियों में पैसा जोखिम में न डालें",
    description: "आज ही सही निर्णय लें और JDA Approved व RERA Registered plots के साथ सुरक्षित रास्ता चुनें।",
    callButton: "अभी कॉल करें",
    whatsappButton: "WhatsApp करें"
};
translations.hi.footer = {
    description: "Savita Homelands Jaipur जयपुर, राजस्थान में safe और approval-backed residential plots पर focused guidance देता है।",
    headings: ["Savita Homelands Jaipur", "संपर्क", "क्विक लिंक्स"],
    call: "कॉल करें: 8619384178",
    whatsapp: "WhatsApp: 8619384178",
    quickLinks: ["Approved प्लॉट्स", "गैलरी", "फ्री PDF गाइड"],
    rights: "Savita Homelands Jaipur. सर्वाधिकार सुरक्षित।"
};
translations.hi.whatsapp = {
    floating: "नमस्ते, मुझे जयपुर में JDA और RERA Approved plots की जानकारी चाहिए।",
    hero: "नमस्ते, मैं फ्री साइट विजिट बुक करना चाहता/चाहती हूँ।",
    risk: "नमस्ते, मुझे safe और risky investment का फर्क समझना है।",
    lead: "नमस्ते, मेरे बजट के हिसाब से best plot deals भेजिए।",
    video: "नमस्ते, कृपया साइट विजिट वीडियो WhatsApp पर भेजिए।",
    final: "नमस्ते, मुझे safe approved plot options भेजिए।",
    footer: "नमस्ते, मुझे Savita Homelands Jaipur के plots की जानकारी चाहिए।"
};

translations.en.meta = {
    title: "Savita Homelands Jaipur | JDA & RERA Approved Plots in Jaipur",
    description: "Buy 100% safe JDA Approved and RERA Registered residential plots in Jaipur with Savita Homelands Jaipur. Book a free site visit or chat on WhatsApp today.",
    ogTitle: "Savita Homelands Jaipur | Safe JDA & RERA Approved Plots",
    ogDescription: "Avoid risky illegal societies. Explore legal, transparent, and safer plotted investment options in Jaipur."
};
translations.en.floatingWhatsAppLabel = "WhatsApp";
translations.en.floatingWhatsAppAria = "Chat on WhatsApp";
translations.en.topStripText = "JDA Approved | RERA Registered | Premium Residential Plot Guidance in Jaipur";
translations.en.topCallText = "Call Now: 8619384178";
translations.en.brandTagline = "Safe Plot Investments";
translations.en.nav = ["About", "Risk", "Approved Plots", "Gallery", "Contact"];
translations.en.headerBookButton = "Book Free Site Visit";
translations.en.hero = {
    eyebrow: "Safe and legal plotted investment in Jaipur",
    title: "Buy 100% Safe JDA & RERA Approved Plots in Jaipur",
    lead: "Avoid risky illegal societies and invest securely.",
    primaryButton: "Book Free Site Visit",
    secondaryButton: "WhatsApp Now (8619384178)",
    trust: [
        {
            title: "100% Legal & Safe",
            text: "Every deal is built around clear paperwork, approvals, and transparency."
        },
        {
            title: "For families and investors",
            text: "Better options for living, building, and long-term growth."
        }
    ],
    panelEyebrow: "Founded by Vinod Vishwakarma",
    panelText: "Savita Homelands Jaipur, founded by Vinod Vishwakarma, is a trusted real estate brand. We provide only JDA Approved and RERA Registered properties.",
    stats: [
        {
            title: "Transparent deals",
            text: "Approvals, paperwork, and pricing are explained clearly to every buyer."
        },
        {
            title: "Local trust",
            text: "Guidance is tailored to Jaipur buyers, budgets, and locations."
        },
        {
            title: "Premium support",
            text: "Fast and professional help from inquiry to site visit."
        }
    ],
    callButton: "Call Now",
    exploreButton: "View Approved Plots"
};
translations.en.signals = [
    {
        label: "Safe Investment",
        title: "More confidence with JDA and RERA backed plots."
    },
    {
        label: "Trust First",
        title: "Transparent process and customer-first guidance."
    },
    {
        label: "Fast Support",
        title: "Call, WhatsApp, or submit the form in minutes."
    }
];
translations.en.guideLead = {
    eyebrow: "Free PDF Guide",
    title: "The Ultimate JDA Checklist for Safe Property Investment in Jaipur",
    description: "Enter your name and WhatsApp number to instantly download Savita Homelands' free PDF guide. It includes the 7 questions every serious buyer should ask before finalizing a plot.",
    previewLabel: "Inside the PDF",
    previewTitle: "7 safety checks every Jaipur plot buyer should verify",
    items: [
        "Is the project 100% JDA approved?",
        "Has the land conversion under 90A been completed?",
        "Is the project registered with RERA?",
        "Is loan support available from nationalized banks?",
        "How much on-site development is actually complete?",
        "Is the title clear and can the registry happen without issues?",
        "How strong is the location for future growth?"
    ],
    promise: "This guide is designed to help buyers avoid risky deals, weak paperwork, and costly mistakes.",
    formBadge: "Free Download",
    formTitle: "Download Free PDF Guide",
    formDescription: "Enter your name and WhatsApp number. The PDF will start downloading right after you submit the form.",
    labels: ["Name", "WhatsApp Number"],
    placeholders: ["Enter your name", "Enter your WhatsApp number"],
    submit: "Download PDF Guide",
    buttonLoading: "Preparing your PDF...",
    note: "We use your details only to share the guide and help with safe plot options.",
    submitting: "Submitting your details...",
    success: "Thank you. Your PDF is downloading now. If it does not start, use the download link below.",
    error: "There was a problem sending the guide request. Please try again.",
    manualLink: "Click here if the PDF does not download automatically",
    subject: "Savita Homelands Jaipur PDF guide lead",
    fileName: "savita-homelands-jda-checklist-guide.pdf"
};
translations.en.about = {
    eyebrow: "About",
    title: "About Savita Homelands Jaipur",
    paragraphs: [
        "Savita Homelands Jaipur, founded by Vinod Vishwakarma, is a trusted real estate brand. We provide only JDA Approved and RERA Registered properties.",
        "Our focus is simple: transparent information, safe investment, and buyer-first guidance so you can make the right decision without confusion."
    ],
    cards: [
        {
            title: "Trusted experience",
            text: "Focused on safe documentation, practical location value, and a cleaner buying process."
        },
        {
            title: "Full transparency",
            text: "Approvals, pricing, and site visit details are explained without hidden surprises."
        },
        {
            title: "Customer-first support",
            text: "Jaipur buyers get simple help with shortlisting, visits, and final decisions."
        }
    ]
};
translations.en.risk = {
    eyebrow: "Problem Awareness",
    title: "Why buying plots in illegal societies can be risky",
    description: "Low prices may look attractive, but weak paperwork and legal risk can lead to serious future losses.",
    cards: [
        {
            title: "No legal security",
            text: "Ownership clarity and future confidence can both become uncertain."
        },
        {
            title: "Registration issues",
            text: "Weak documentation can make the process slower and more uncertain."
        },
        {
            title: "Future loss risk",
            text: "Fraud risk, resale issues, and investment loss become more likely."
        }
    ],
    banner: "Do not put your hard-earned money at risk because of weak paperwork.",
    button: "Ask on WhatsApp"
};
translations.en.solution = {
    comparisonEyebrow: "Safe vs Risky Investment",
    comparisonTitle: "Why approved plots are considered a safer choice",
    comparisonHeaders: ["Illegal or risky society", "JDA & RERA approved plot"],
    comparisonRows: [
        "Lower legal clarity",
        "Better legal security",
        "Registration uncertainty",
        "Cleaner documentation process",
        "Doubt around future value",
        "Stronger growth potential",
        "Resale may be difficult",
        "Resale value is easier to position"
    ],
    eyebrow: "Why Choose JDA & RERA Approved Plots?",
    title: "Safe, legal, and growth-oriented plot buying",
    cards: [
        {
            title: "JDA Approved",
            text: "Government approval creates stronger trust and clarity."
        },
        {
            title: "RERA Registered",
            text: "Better transparency in project credibility and documentation."
        },
        {
            title: "100% Legal & Safe",
            text: "Lower risk compared to illegal societies and unclear layouts."
        },
        {
            title: "High Growth Potential",
            text: "Better positioned for future appreciation and resale value."
        }
    ],
    button: "Get Best Plot Deals"
};
translations.en.showcase = {
    eyebrow: "Property Showcase",
    title: "We offer plots at the best locations in Jaipur",
    description: "Layouts, site visuals, and location context help buyers build trust before the first call.",
    cards: [
        {
            label: "Approved Layout",
            title: "Clear plot planning view",
            text: "Buyers quickly understand how the plotted development is organized."
        },
        {
            label: "Site Image",
            title: "On-site ground reality",
            text: "Visual reassurance before planning a Jaipur site visit."
        },
        {
            label: "Investment View",
            title: "Easy to shortlist",
            text: "Helps buyers compare options based on budget and purpose."
        },
        {
            label: "Location Advantage",
            title: "Location and access visibility",
            text: "A practical overview of growth areas and connectivity."
        }
    ]
};
translations.en.video = {
    eyebrow: "Video Section",
    title: "Understand the project feel early with a dedicated site visit video",
    description: "Video content builds trust faster. Ground reality, road access, and project environment visuals also improve inquiry quality.",
    points: [
        {
            title: "Actual site walkthrough",
            text: "Buyers understand the real on-ground condition much more clearly."
        },
        {
            title: "Trust-building visual proof",
            text: "Visuals strengthen project credibility faster than plain text."
        }
    ],
    button: "Get Video on WhatsApp",
    badge: "Featured Site Video",
    frameTitle: "Site visit walkthrough",
    clips: [
        {
            label: "Site Clip",
            title: "Ground update and site view",
            text: "Helps buyers understand the visual feel and environment before they book a visit."
        },
        {
            label: "Project Clip",
            title: "Another angle of the plotted site",
            text: "Makes it easier to compare road access, surroundings, and development confidence."
        },
        {
            label: "Visit Highlight",
            title: "Short visual proof for trust building",
            text: "Creates a stronger first impression on mobile and improves WhatsApp inquiry intent."
        }
    ]
};
translations.en.gallery = {
    eyebrow: "Video & Image Gallery",
    title: "Explore our site visits and project visuals",
    description: "Videos and visuals help buyers understand the site feel, build trust, and move faster.",
    cards: [
        {
            label: "Site Visit Video",
            title: "Real site walkthrough",
            text: "Buyers experience the project before reaching the location."
        },
        {
            label: "Project Visual",
            title: "Development progress highlight",
            text: "Premium presentation helps trust build faster."
        },
        {
            label: "Ground Photo",
            title: "Visit-worthy shortlist image",
            text: "Makes it easier to explain the difference between safe and risky options."
        },
        {
            label: "Location View",
            title: "Jaipur corridor context",
            text: "Connects the project story with location logic and future potential."
        }
    ],
    prev: "Previous media slide",
    next: "Next media slide",
    dots: "Slide"
};
translations.en.trust = {
    eyebrow: "Trust & Proof",
    title: "Transparent and trusted deals",
    description: "Strong trust signals help serious buyers take action faster.",
    proofCards: [
        {
            title: "Transparent and trusted deals",
            text: "Every conversation is built on clarity, not pressure."
        },
        {
            title: "Trusted by local buyers",
            text: "Jaipur-focused guidance makes the buying journey more confident."
        },
        {
            title: "Fast response support",
            text: "Calls, WhatsApp, and site visit coordination start quickly."
        }
    ],
    testimonials: [
        {
            label: "Buyer style feedback",
            text: "\"The approvals and paperwork were explained so clearly that our family could decide without stress.\"",
            author: "Family buyer, Jaipur"
        },
        {
            label: "Buyer style feedback",
            text: "\"The transparent approach and site visuals made shortlisting much easier for us.\"",
            author: "Investment-focused buyer"
        }
    ]
};
translations.en.lead = {
    eyebrow: "Lead Form",
    title: "Fill your details and get the best deals",
    description: "Share your budget and get the right approval-backed plot options from Savita Homelands Jaipur.",
    highlights: [
        {
            title: "Free site visit",
            text: "Discuss the shortlist and plan a visit based on your requirement."
        },
        {
            title: "WhatsApp support",
            text: "Get fast details, pricing guidance, and the next steps instantly."
        }
    ],
    whatsappButton: "Chat Now on WhatsApp - 8619384178",
    labels: ["Name", "Phone Number", "Budget (optional)"],
    placeholders: [
        "Enter your name",
        "Enter your phone number",
        "For example: 15 lakh to 25 lakh"
    ],
    submit: "Submit",
    note: "We use your details only to help with plot options, site visits, and purchase guidance.",
    subject: "Savita Homelands Jaipur lead enquiry"
};
translations.en.location = {
    eyebrow: "Location Advantage",
    title: "Jaipur remains attractive for plotted investment",
    description: "Buyers generally prefer locations with better roads, growth zones, commercial movement, and future-ready connectivity.",
    points: [
        {
            title: "Better connectivity",
            text: "Access to Ring Road, Ajmer Road, and Tonk Road strengthens everyday convenience."
        },
        {
            title: "Growth areas and SEZ influence",
            text: "Plots near industrial and commercial movement remain relevant for investors."
        },
        {
            title: "Future-focused demand",
            text: "Expanding residential catchments support future value and resale positioning."
        }
    ],
    mapLabel: "Jaipur, Rajasthan",
    mapTitle: "Explore location context around key corridors",
    mapFrameTitle: "Map of Jaipur Rajasthan"
};
translations.en.finalCta = {
    eyebrow: "Final Call To Action",
    title: "Do not risk your money in illegal societies",
    description: "Make the right decision today and choose a safer path with JDA Approved and RERA Registered plots.",
    callButton: "Call Now",
    whatsappButton: "WhatsApp Now"
};
translations.en.footer = {
    description: "Savita Homelands Jaipur offers guidance focused on safe and approval-backed residential plots in Jaipur, Rajasthan.",
    headings: ["Savita Homelands Jaipur", "Contact", "Quick Links"],
    call: "Call: 8619384178",
    whatsapp: "WhatsApp: 8619384178",
    quickLinks: ["Approved Plots", "Gallery", "Free PDF Guide"],
    rights: "Savita Homelands Jaipur. All rights reserved."
};
translations.en.whatsapp = {
    floating: "Hello, I want details about JDA and RERA approved plots in Jaipur.",
    hero: "Hello, I want to book a free site visit.",
    risk: "Hello, I want to understand the difference between safe and risky plot investment.",
    lead: "Hello, please share the best plot deals for my budget.",
    video: "Hello, please share the site visit video on WhatsApp.",
    final: "Hello, please share safe approved plot options.",
    footer: "Hello, I want details about Savita Homelands Jaipur plots."
};

const metaDescriptionEl = document.querySelector('meta[name="description"]');
const ogTitleEl = document.querySelector('meta[property="og:title"]');
const ogDescriptionEl = document.querySelector('meta[property="og:description"]');
const toggleButton = document.getElementById("languageToggle");
const leadForm = document.getElementById("leadCaptureForm");
const leadSubjectInput = leadForm ? leadForm.querySelector('input[name="_subject"]') : null;
const leadFormNote = document.getElementById("formNote");
const leadSubmitButton = document.getElementById("leadSubmitButton");
const guideForm = document.getElementById("guideDownloadForm");
const guideSubjectInput = guideForm ? guideForm.querySelector('input[name="_subject"]') : null;
const guideFormNote = document.getElementById("guideFormNote");
const guideSubmitButton = document.getElementById("guideSubmitButton");
const guideManualDownload = document.getElementById("guideManualDownload");
const guideDownloadUrl = "downloads/savita-homelands-jda-checklist-guide.pdf";

const setText = (node, value) => {
    if (node && typeof value === "string") {
        node.textContent = value;
    }
};

const setHrefMessage = (id, message) => {
    const node = document.getElementById(id);
    if (node) {
        node.href = "https://wa.me/918619384178?text=" + encodeURIComponent(message);
    }
};

const setDualContent = (nodes, items) => {
    nodes.forEach((node, index) => {
        const item = items[index];
        if (!node || !item) return;
        setText(node.querySelector("strong"), item.title);
        setText(node.querySelector("span"), item.text);
    });
};

const setCardContent = (nodes, items, selectors) => {
    nodes.forEach((node, index) => {
        const item = items[index];
        if (!node || !item) return;
        if (selectors.label) setText(node.querySelector(selectors.label), item.label);
        if (selectors.title) setText(node.querySelector(selectors.title), item.title);
        if (selectors.text) setText(node.querySelector(selectors.text), item.text);
        if (selectors.author) setText(node.querySelector(selectors.author), item.author);
    });
};

const setStatusNoteState = (node, message, state = "default") => {
    if (!node) return;
    node.classList.remove("is-submitting", "is-success", "is-error");
    setText(node, message);
    if (state !== "default") {
        node.classList.add("is-" + state);
    }
};

const triggerFileDownload = (url, fileName) => {
    const link = document.createElement("a");
    link.href = url;
    if (fileName) {
        link.download = fileName;
    }
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
};

const buildLeadWhatsAppMessage = (lang, lead) => {
    const budgetValue = lead.budget && lead.budget.trim()
        ? lead.budget.trim()
        : (lang === "hi" ? "शेयर नहीं किया" : "Not shared");

    if (lang === "hi") {
        return [
            "नमस्ते, नई lead details:",
            "नाम: " + lead.name,
            "मोबाइल नंबर: " + lead.phone,
            "बजट: " + budgetValue
        ].join("\n");
    }

    return [
        "Hello, new lead details:",
        "Name: " + lead.name,
        "Phone Number: " + lead.phone,
        "Budget: " + budgetValue
    ].join("\n");
};

const applyLanguage = (lang) => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.body.classList.toggle("lang-hi", lang === "hi");
    document.title = t.meta.title;
    if (metaDescriptionEl) metaDescriptionEl.content = t.meta.description;
    if (ogTitleEl) ogTitleEl.content = t.meta.ogTitle;
    if (ogDescriptionEl) ogDescriptionEl.content = t.meta.ogDescription;

    setText(document.getElementById("floatingWhatsAppLabel"), t.floatingWhatsAppLabel);
    document.getElementById("floatingWhatsApp").setAttribute("aria-label", t.floatingWhatsAppAria);
    setText(document.querySelector(".top-strip__inner p"), t.topStripText);
    setText(document.getElementById("topCallLink"), t.topCallText);
    setText(document.getElementById("brandTagline"), t.brandTagline);
    document.querySelectorAll(".site-nav a").forEach((link, index) => setText(link, t.nav[index]));
    setText(document.getElementById("headerBookButton"), t.headerBookButton);

    setText(document.querySelector(".hero__content .eyebrow"), t.hero.eyebrow);
    setText(document.querySelector(".hero__content h1"), t.hero.title);
    setText(document.querySelector(".hero__lead"), t.hero.lead);
    setText(document.getElementById("heroPrimaryButton"), t.hero.primaryButton);
    setText(document.getElementById("heroWhatsAppButton"), t.hero.secondaryButton);
    setDualContent(document.querySelectorAll(".hero__trust-card"), t.hero.trust);
    setText(document.querySelector(".hero__panel-head .eyebrow"), t.hero.panelEyebrow);
    setText(document.querySelector(".hero__panel-head p"), t.hero.panelText);
    setCardContent(document.querySelectorAll(".hero__stats article"), t.hero.stats, { title: "strong", text: "span" });
    setText(document.getElementById("panelCallButton"), t.hero.callButton);
    setText(document.getElementById("panelExploreButton"), t.hero.exploreButton);

    setCardContent(document.querySelectorAll(".signal-chip"), t.signals, { label: ".signal-chip__label", title: "strong" });

    setText(document.querySelector(".guide-download .section-copy .eyebrow"), t.guideLead.eyebrow);
    setText(document.querySelector(".guide-download .section-copy h2"), t.guideLead.title);
    setText(document.querySelector(".guide-download .section-copy > p"), t.guideLead.description);
    setText(document.getElementById("guidePreviewLabel"), t.guideLead.previewLabel);
    setText(document.getElementById("guidePreviewTitle"), t.guideLead.previewTitle);
    document.querySelectorAll(".guide-list li").forEach((item, index) => setText(item, t.guideLead.items[index]));
    setText(document.getElementById("guidePromiseText"), t.guideLead.promise);
    setText(document.getElementById("guideFormBadge"), t.guideLead.formBadge);
    setText(document.getElementById("guideFormTitle"), t.guideLead.formTitle);
    setText(document.getElementById("guideFormDescription"), t.guideLead.formDescription);
    if (guideForm) {
        guideForm.querySelectorAll(".form-group label").forEach((label, index) => setText(label, t.guideLead.labels[index]));
    }
    [document.getElementById("guide-name"), document.getElementById("guide-whatsapp")].forEach((input, index) => {
        if (input) input.placeholder = t.guideLead.placeholders[index];
    });
    if (guideSubjectInput) guideSubjectInput.value = t.guideLead.subject;
    setText(guideSubmitButton, t.guideLead.submit);
    setStatusNoteState(guideFormNote, t.guideLead.note);
    if (guideManualDownload) {
        setText(guideManualDownload, t.guideLead.manualLink);
        guideManualDownload.setAttribute("download", t.guideLead.fileName);
    }

    setText(document.querySelector("#about .section-copy .eyebrow"), t.about.eyebrow);
    setText(document.querySelector("#about .section-copy h2"), t.about.title);
    document.querySelectorAll("#about .section-copy p").forEach((paragraph, index) => setText(paragraph, t.about.paragraphs[index]));
    setCardContent(document.querySelectorAll("#about .feature-card"), t.about.cards, { title: "h3", text: "p" });

    setText(document.querySelector("#why-risky .section-heading .eyebrow"), t.risk.eyebrow);
    setText(document.querySelector("#why-risky .section-heading h2"), t.risk.title);
    setText(document.querySelector("#why-risky .section-heading p"), t.risk.description);
    setCardContent(document.querySelectorAll("#why-risky .risk-card"), t.risk.cards, { title: "h3", text: "p" });
    setText(document.querySelector(".warning-banner strong"), t.risk.banner);
    setText(document.getElementById("riskWhatsAppButton"), t.risk.button);

    setText(document.querySelector(".comparison-card__head .eyebrow"), t.solution.comparisonEyebrow);
    setText(document.querySelector(".comparison-card__head h3"), t.solution.comparisonTitle);
    document.querySelectorAll(".comparison-table__header").forEach((item, index) => setText(item, t.solution.comparisonHeaders[index]));
    document.querySelectorAll(".comparison-table__row").forEach((item, index) => setText(item, t.solution.comparisonRows[index]));
    setText(document.querySelector(".solution .section-copy .eyebrow"), t.solution.eyebrow);
    setText(document.querySelector(".solution .section-copy h2"), t.solution.title);
    setCardContent(document.querySelectorAll(".benefit-item"), t.solution.cards, { title: "h3", text: "p" });
    setText(document.getElementById("solutionPrimaryButton"), t.solution.button);

    setText(document.querySelector(".showcase .section-heading .eyebrow"), t.showcase.eyebrow);
    setText(document.querySelector(".showcase .section-heading h2"), t.showcase.title);
    setText(document.querySelector(".showcase .section-heading p"), t.showcase.description);
    setCardContent(document.querySelectorAll(".showcase-card"), t.showcase.cards, { label: ".pill", title: "h3", text: "p" });

    setText(document.querySelector(".video-section .section-copy .eyebrow"), t.video.eyebrow);
    setText(document.querySelector(".video-section .section-copy h2"), t.video.title);
    setText(document.querySelector(".video-section .section-copy > p"), t.video.description);
    setCardContent(document.querySelectorAll(".video-point"), t.video.points, { title: "strong", text: "p" });
    setText(document.getElementById("videoWhatsAppButton"), t.video.button);
    setText(document.querySelector(".video-frame__header .pill"), t.video.badge);
    setText(document.querySelector(".video-frame__header h3"), t.video.frameTitle);
    setCardContent(document.querySelectorAll(".video-clip-card"), t.video.clips, { label: ".pill", title: "h4", text: "p" });

    setText(document.querySelector("#gallery .section-heading .eyebrow"), t.gallery.eyebrow);
    setText(document.querySelector("#gallery .section-heading h2"), t.gallery.title);
    setText(document.querySelector("#gallery .section-heading p"), t.gallery.description);
    setCardContent(document.querySelectorAll(".media-card"), t.gallery.cards, { label: ".pill", title: "h3", text: "p" });
    document.querySelectorAll(".carousel-button").forEach((button, index) => {
        button.setAttribute("aria-label", index === 0 ? t.gallery.prev : t.gallery.next);
    });
    document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
        dot.setAttribute("aria-label", t.gallery.dots + " " + (index + 1));
    });

    setText(document.querySelector(".trust .section-heading .eyebrow"), t.trust.eyebrow);
    setText(document.querySelector(".trust .section-heading h2"), t.trust.title);
    setText(document.querySelector(".trust .section-heading p"), t.trust.description);
    setCardContent(document.querySelectorAll(".proof-card"), t.trust.proofCards, { title: ".proof-card__tag", text: "p" });
    setCardContent(document.querySelectorAll(".testimonial-card"), t.trust.testimonials, { label: "small", text: "p", author: "strong" });

    setText(document.querySelector(".lead-section .section-copy .eyebrow"), t.lead.eyebrow);
    setText(document.querySelector(".lead-section .section-copy h2"), t.lead.title);
    setText(document.querySelector(".lead-section .section-copy > p"), t.lead.description);
    setCardContent(document.querySelectorAll(".contact-highlights article"), t.lead.highlights, { title: "strong", text: "p" });
    setText(document.getElementById("leadWhatsAppButton"), t.lead.whatsappButton);
    if (leadForm) {
        leadForm.querySelectorAll(".form-group label").forEach((label, index) => setText(label, t.lead.labels[index]));
    }
    [document.getElementById("name"), document.getElementById("phone"), document.getElementById("budget")].forEach((input, index) => {
        if (input) input.placeholder = t.lead.placeholders[index];
    });
    if (leadSubjectInput) leadSubjectInput.value = t.lead.subject;
    setText(document.getElementById("leadSubmitButton"), t.lead.submit);
    setStatusNoteState(leadFormNote, t.lead.note);

    setText(document.querySelector(".location .section-copy .eyebrow"), t.location.eyebrow);
    setText(document.querySelector(".location .section-copy h2"), t.location.title);
    setText(document.querySelector(".location .section-copy > p"), t.location.description);
    setCardContent(document.querySelectorAll(".location-point"), t.location.points, { title: "h3", text: "p" });
    setText(document.querySelector(".map-card__caption .pill"), t.location.mapLabel);
    setText(document.querySelector(".map-card__caption h3"), t.location.mapTitle);
    document.getElementById("locationMap").setAttribute("title", t.location.mapFrameTitle);

    setText(document.querySelector(".final-cta__card .eyebrow"), t.finalCta.eyebrow);
    setText(document.querySelector(".final-cta__card h2"), t.finalCta.title);
    setText(document.querySelector(".final-cta__card p"), t.finalCta.description);
    setText(document.getElementById("finalCallButton"), t.finalCta.callButton);
    setText(document.getElementById("finalWhatsAppButton"), t.finalCta.whatsappButton);

    document.querySelectorAll(".footer-grid > div > strong").forEach((heading, index) => setText(heading, t.footer.headings[index]));
    setText(document.querySelector(".footer-grid > div:first-child p"), t.footer.description);
    setText(document.getElementById("footerCallLink"), t.footer.call);
    setText(document.getElementById("footerWhatsAppLink"), t.footer.whatsapp);
    document.querySelectorAll(".footer-grid > div:last-child a").forEach((link, index) => setText(link, t.footer.quickLinks[index]));
    setText(document.getElementById("footerRightsText"), t.footer.rights);

    setHrefMessage("floatingWhatsApp", t.whatsapp.floating);
    setHrefMessage("heroWhatsAppButton", t.whatsapp.hero);
    setHrefMessage("riskWhatsAppButton", t.whatsapp.risk);
    setHrefMessage("leadWhatsAppButton", t.whatsapp.lead);
    setHrefMessage("videoWhatsAppButton", t.whatsapp.video);
    setHrefMessage("finalWhatsAppButton", t.whatsapp.final);
    setHrefMessage("footerWhatsAppLink", t.whatsapp.footer);

    if (toggleButton) {
        toggleButton.setAttribute("aria-label", lang === "hi" ? "Switch to English" : "हिंदी में बदलें");
        toggleButton.querySelectorAll(".lang-toggle__option").forEach((option) => {
            option.classList.toggle("is-active", option.dataset.lang === lang);
        });
    }
};

const getStoredLanguage = () => {
    try {
        return window.localStorage.getItem("savita-language");
    } catch (error) {
        return null;
    }
};

const setStoredLanguage = (value) => {
    try {
        window.localStorage.setItem("savita-language", value);
    } catch (error) {
        return;
    }
};

const savedLanguage = getStoredLanguage();
const initialLanguage = savedLanguage === "en" ? "en" : "hi";
applyLanguage(initialLanguage);

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        const nextLanguage = document.documentElement.lang === "hi" ? "en" : "hi";
        applyLanguage(nextLanguage);
        setStoredLanguage(nextLanguage);
    });
}

if (guideForm) {
    guideForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const lang = document.documentElement.lang === "en" ? "en" : "hi";
        const guideCopy = translations[lang].guideLead;
        const formData = new FormData(guideForm);

        if (guideSubmitButton) {
            guideSubmitButton.disabled = true;
            setText(guideSubmitButton, guideCopy.buttonLoading);
        }
        if (guideManualDownload) {
            guideManualDownload.hidden = true;
        }
        setStatusNoteState(guideFormNote, guideCopy.submitting, "submitting");

        try {
            const response = await fetch(guideForm.action, {
                method: guideForm.method || "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Guide form submission failed");
            }

            triggerFileDownload(guideDownloadUrl, guideCopy.fileName);
            guideForm.reset();

            if (guideManualDownload) {
                guideManualDownload.hidden = false;
            }
            setStatusNoteState(guideFormNote, guideCopy.success, "success");
        } catch (error) {
            setStatusNoteState(guideFormNote, guideCopy.error, "error");
        } finally {
            if (guideSubmitButton) {
                guideSubmitButton.disabled = false;
                setText(guideSubmitButton, guideCopy.submit);
            }
        }
    });
}

if (leadForm) {
    leadForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const lang = document.documentElement.lang === "en" ? "en" : "hi";
        const formData = new FormData(leadForm);
        const leadDetails = {
            name: String(formData.get("name") || "").trim(),
            phone: String(formData.get("phone") || "").trim(),
            budget: String(formData.get("budget") || "").trim()
        };

        const noteMessages = {
            submitting: lang === "hi" ? "जानकारी भेजी जा रही है..." : "Submitting your details...",
            success: lang === "hi"
                ? "Lead email पर भेज दी गई है. वही जानकारी अब WhatsApp में भी खुल रही है."
                : "The lead has been sent by email. The same details are now opening in WhatsApp.",
            error: lang === "hi"
                ? "Lead भेजने में दिक्कत आई. कृपया फिर कोशिश करें या सीधे WhatsApp करें."
                : "There was a problem sending the lead. Please try again or contact on WhatsApp directly.",
            button: lang === "hi" ? "भेजा जा रहा है..." : "Submitting..."
        };

        let whatsappWindow = null;
        try {
            whatsappWindow = window.open("", "_blank");
        } catch (error) {
            whatsappWindow = null;
        }

        if (leadSubmitButton) {
            leadSubmitButton.disabled = true;
            setText(leadSubmitButton, noteMessages.button);
        }
        setStatusNoteState(leadFormNote, noteMessages.submitting, "submitting");

        try {
            const response = await fetch(leadForm.action, {
                method: leadForm.method || "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Form submission failed");
            }

            const whatsappMessage = buildLeadWhatsAppMessage(lang, leadDetails);
            const whatsappUrl = "https://wa.me/918619384178?text=" + encodeURIComponent(whatsappMessage);

            if (whatsappWindow && !whatsappWindow.closed) {
                whatsappWindow.location.href = whatsappUrl;
            } else {
                window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            }

            leadForm.reset();
            setStatusNoteState(leadFormNote, noteMessages.success, "success");
        } catch (error) {
            if (whatsappWindow && !whatsappWindow.closed) {
                whatsappWindow.close();
            }
            setStatusNoteState(leadFormNote, noteMessages.error, "error");
        } finally {
            if (leadSubmitButton) {
                leadSubmitButton.disabled = false;
                setText(leadSubmitButton, translations[lang].lead.submit);
            }
        }
    });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}

const updateCarouselDots = (track) => {
    const slides = Array.from(track.querySelectorAll(".media-card"));
    if (!slides.length) return;

    const centerPoint = track.scrollLeft + (track.clientWidth / 2);
    let activeIndex = 0;
    let smallestDistance = Number.POSITIVE_INFINITY;

    slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + (slide.clientWidth / 2);
        const distance = Math.abs(slideCenter - centerPoint);
        if (distance < smallestDistance) {
            smallestDistance = distance;
            activeIndex = index;
        }
    });

    document.querySelectorAll('.carousel-dot[data-target="' + track.id + '"]').forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
    });
};

document.querySelectorAll(".carousel-button").forEach((button) => {
    button.addEventListener("click", () => {
        const track = document.getElementById(button.dataset.target);
        if (!track) return;
        const scrollAmount = track.clientWidth * 0.88;
        const direction = button.dataset.direction === "next" ? 1 : -1;
        track.scrollBy({ left: scrollAmount * direction, behavior: "smooth" });
    });
});

document.querySelectorAll(".carousel-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
        const track = document.getElementById(dot.dataset.target);
        if (!track) return;
        const slides = track.querySelectorAll(".media-card");
        const targetSlide = slides[Number(dot.dataset.index)];
        if (targetSlide) {
            track.scrollTo({ left: targetSlide.offsetLeft, behavior: "smooth" });
        }
    });
});

document.querySelectorAll(".carousel-track").forEach((track) => {
    track.addEventListener("scroll", () => {
        window.clearTimeout(track.carouselTimer);
        track.carouselTimer = window.setTimeout(() => updateCarouselDots(track), 70);
    });
    updateCarouselDots(track);
});
