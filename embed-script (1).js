/**
 * Savita Homelands chat widget.
 * Loads as a single embed script and works with or without a remote API.
 */
(function() {
    'use strict';

    if (window.SH_CHAT_WIDGET_READY) {
        return;
    }
    window.SH_CHAT_WIDGET_READY = true;

    var scriptEl = document.currentScript || (function() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
    })();

    function getConfigValue(name) {
        if (window[name]) {
            return String(window[name]);
        }
        if (scriptEl && scriptEl.getAttribute('data-' + name.toLowerCase().replace(/_/g, '-'))) {
            return String(scriptEl.getAttribute('data-' + name.toLowerCase().replace(/_/g, '-')));
        }
        return '';
    }

    function normalizeBaseUrl(value) {
        return String(value || '').replace(/\/+$/, '');
    }

    var rawApiUrl = getConfigValue('SH_CHAT_API_URL');
    var apiUrl = normalizeBaseUrl(rawApiUrl);
    var hasConfiguredApi = !!apiUrl && apiUrl !== 'https://YOUR-DEPLOYED-URL.vercel.app';
    var formEndpoint = getConfigValue('SH_CHAT_FORM_ENDPOINT') || 'https://formspree.io/f/xykbzggk';
    var brandName = getConfigValue('SH_CHAT_BRAND_NAME') || 'Savita Homelands Jaipur';
    var headerTitle = getConfigValue('SH_CHAT_HEADER_TITLE') || 'Savita Homelands-Jaipur';
    var logoUrl = getConfigValue('SH_CHAT_LOGO_URL') || 'images/SavitaHomelandslogo.jpg';
    var defaultLanguage = getConfigValue('SH_CHAT_DEFAULT_LANGUAGE') || 'hinglish';
    var phoneNumber = (getConfigValue('SH_CHAT_PHONE') || '8619384178').replace(/[^\d]/g, '');
    var phoneLink = '+91' + phoneNumber;
    var whatsappNumber = (getConfigValue('SH_CHAT_WHATSAPP') || ('91' + phoneNumber)).replace(/[^\d]/g, '');
    var openWhatsappOnLead = getConfigValue('SH_CHAT_OPEN_WHATSAPP_ON_LEAD') !== 'false';
    var callLabel = phoneNumber || '8619384178';
    var widgetId = 'sh-widget-root';

    if (document.getElementById(widgetId)) {
        return;
    }

    var languageUi = {
        hinglish: {
            badge: '3 language AI',
            welcomeTitle: 'Namaste, kaise help karun?',
            welcomeText: 'Aap Hindi, English, ya Hinglish me pooch sakte hain. Main approved plots, budget, loan, aur site visit me help karta hoon.',
            footerNote: 'Hindi, English aur Hinglish me instant support available.',
            toolbarNote: 'Hindi | English | Hinglish',
            inputPlaceholder: 'Apna sawal type karein...',
            teaser: 'Ask me',
            quick: {
                approved: 'JDA plots',
                ajmer: 'Ajmer Road',
                budget: '10-20 lakh',
                visit: 'Site visit',
                loan: 'Loan info',
                call: 'Call now'
            },
            welcomeMessage:
                'Namaste! ' + brandName + ' me aapka swagat hai.\n\n' +
                'Main approved plots, budget range, loan basics, documents, aur free site visit me help kar sakta hoon. Aap Hindi, English ya Hinglish me pooch sakte hain.',
            languageChanged: 'Perfect, ab main Hinglish me reply karunga.',
            leadPrompt: 'Buyer details mil gaye hain. Chahein to follow-up ke liye inhe save kar sakte hain.',
            saveLead: 'Save lead',
            leadReady: 'Lead ready',
            modalTitle: 'Buyer details save karein',
            modalText: 'Team follow-up, pricing details aur site visit support ke liye buyer se contact kar sakegi.',
            nameLabel: 'Name *',
            namePlaceholder: 'Buyer name',
            phoneLabel: 'Phone *',
            phonePlaceholder: 'Mobile number',
            emailLabel: 'Email',
            emailPlaceholder: 'Email address',
            budgetLabel: 'Budget',
            budgetPlaceholder: 'Example: 15-20 lakh',
            locationLabel: 'Preferred location',
            locationPlaceholder: 'Example: Ajmer Road',
            saveButton: 'Save lead',
            cancelButton: 'Cancel',
            validation: 'Name aur phone number required hain.',
            saveSuccess: 'Lead save ho gaya. Team aapse jaldi connect karegi.',
            saveError: 'Lead save nahi ho paya. Kripya dobara try karein ya direct call karein: ' + callLabel
        },
        hi: {
            badge: '3 भाषा AI',
            welcomeTitle: 'नमस्ते, मैं कैसे मदद करूँ?',
            welcomeText: 'आप हिंदी, English, या Hinglish में पूछ सकते हैं। मैं approved plots, बजट, loan, और site visit में मदद करता हूँ।',
            footerNote: 'हिंदी, English और Hinglish में तुरंत सहायता उपलब्ध है।',
            toolbarNote: 'हिंदी | English | Hinglish',
            inputPlaceholder: 'अपना सवाल लिखें...',
            teaser: 'Ask me',
            quick: {
                approved: 'JDA प्लॉट्स',
                ajmer: 'अजमेर रोड',
                budget: '10-20 लाख',
                visit: 'साइट विजिट',
                loan: 'लोन जानकारी',
                call: 'कॉल करें'
            },
            welcomeMessage:
                'नमस्ते! ' + brandName + ' में आपका स्वागत है।\n\n' +
                'मैं approved plots, बजट range, loan basics, documents, और free site visit में मदद कर सकता हूँ। आप हिंदी, English या Hinglish में पूछ सकते हैं।',
            languageChanged: 'ठीक है, अब मैं हिंदी में जवाब दूँगा।',
            leadPrompt: 'खरीदार की जानकारी मिल गई है। चाहें तो follow-up के लिए इसे सेव कर सकते हैं।',
            saveLead: 'लीड सेव करें',
            leadReady: 'लीड तैयार',
            modalTitle: 'खरीदार की जानकारी सेव करें',
            modalText: 'टीम follow-up, pricing details और site visit support के लिए खरीदार से संपर्क कर सकेगी।',
            nameLabel: 'नाम *',
            namePlaceholder: 'खरीदार का नाम',
            phoneLabel: 'फोन *',
            phonePlaceholder: 'मोबाइल नंबर',
            emailLabel: 'Email',
            emailPlaceholder: 'Email address',
            budgetLabel: 'बजट',
            budgetPlaceholder: 'उदाहरण: 15-20 लाख',
            locationLabel: 'पसंदीदा लोकेशन',
            locationPlaceholder: 'उदाहरण: अजमेर रोड',
            saveButton: 'लीड सेव करें',
            cancelButton: 'रद्द करें',
            validation: 'नाम और फोन नंबर जरूरी हैं।',
            saveSuccess: 'लीड सेव हो गई है। टीम आपसे जल्दी संपर्क करेगी।',
            saveError: 'लीड सेव नहीं हो पाई। कृपया फिर से कोशिश करें या सीधे कॉल करें: ' + callLabel
        },
        en: {
            badge: '3 language AI',
            welcomeTitle: 'Hi, how can I help?',
            welcomeText: 'You can ask in Hindi, English, or Hinglish. I can help with approved plots, budget planning, loan basics, and site visits.',
            footerNote: 'Instant support available in Hindi, English, and Hinglish.',
            toolbarNote: 'Hindi | English | Hinglish',
            inputPlaceholder: 'Type your question...',
            teaser: 'Ask me',
            quick: {
                approved: 'Approved plots',
                ajmer: 'Ajmer Road',
                budget: '10-20 lakh',
                visit: 'Site visit',
                loan: 'Loan info',
                call: 'Call now'
            },
            welcomeMessage:
                'Hi! Welcome to ' + brandName + '.\n\n' +
                'I can help with approved plots, budget range, loan basics, documents, and free site visits. You can ask in Hindi, English, or Hinglish.',
            languageChanged: 'Sure, I will reply in English now.',
            leadPrompt: 'I found buyer details in the chat. You can save them for follow-up.',
            saveLead: 'Save lead',
            leadReady: 'Lead ready',
            modalTitle: 'Save buyer details',
            modalText: 'The team can use these details for follow-up, pricing guidance, and site visit support.',
            nameLabel: 'Name *',
            namePlaceholder: 'Buyer name',
            phoneLabel: 'Phone *',
            phonePlaceholder: 'Mobile number',
            emailLabel: 'Email',
            emailPlaceholder: 'Email address',
            budgetLabel: 'Budget',
            budgetPlaceholder: 'Example: 15-20 lakh',
            locationLabel: 'Preferred location',
            locationPlaceholder: 'Example: Ajmer Road',
            saveButton: 'Save lead',
            cancelButton: 'Cancel',
            validation: 'Name and phone number are required.',
            saveSuccess: 'Lead saved successfully. Our team will contact you soon.',
            saveError: 'Lead could not be saved. Please try again or call directly: ' + callLabel
        }
    };

    var quickReplies = [
        {
            id: 'approved',
            messages: {
                hinglish: 'Mujhe JDA approved plots ke baare mein batao.',
                hi: 'मुझे JDA approved plots के बारे में बताइए।',
                en: 'Tell me about JDA approved plots.'
            }
        },
        {
            id: 'ajmer',
            messages: {
                hinglish: 'Ajmer Road side ke projects ki details share karo.',
                hi: 'अजमेर रोड side के projects की details बताइए।',
                en: 'Share project details for the Ajmer Road side.'
            }
        },
        {
            id: 'budget',
            messages: {
                hinglish: '10 se 20 lakh budget me options batao.',
                hi: '10 से 20 लाख बजट में options बताइए।',
                en: 'Show me options in a 10 to 20 lakh budget.'
            }
        },
        {
            id: 'visit',
            messages: {
                hinglish: 'Free site visit kaise book karun?',
                hi: 'Free site visit कैसे book करूँ?',
                en: 'How can I book a free site visit?'
            }
        },
        {
            id: 'loan',
            messages: {
                hinglish: 'Plot loan aur EMI ke basics batao.',
                hi: 'Plot loan और EMI के basics बताइए।',
                en: 'Explain plot loan and EMI basics.'
            }
        }
    ];

    var localizedReplies = {
        hinglish: {
            greeting: 'Namaste! Main yahan approved plots, site visit, budget aur paperwork basics me help karne ke liye hoon.\n\nAap location, budget ya project type bata dijiye.',
            legal: 'Safe plot evaluate karte waqt in cheezon par focus kariye:\n1. JDA approval\n2. RERA registration\n3. 90A / land conversion status\n4. Clear title papers aur registry support\n5. Bank loan eligibility\n\nAgar aap chahein to main documents checklist bhi share kar sakta hoon.',
            location: 'Jaipur me buyers aksar Ajmer Road, Ring Road, Tonk Road aur connected growth corridors ke options dekhte hain.\n\nAap preferred side bata dijiye, main us hisab se guidance dunga.',
            budget: 'Budget ke hisab se best option size, location aur payment plan par depend karta hai.\n\nAap apna approx budget aur preferred location bhejiye, phir shortlist banana easy ho jayega.',
            loan: 'Plot loan project-specific hota hai. Proper approvals, clear title papers aur bank acceptance hone par loan mil sakta hai.\n\nAap budget share karein, team bank option aur expected loan support samjha degi.',
            visit: 'Free site visit arrange ki ja sakti hai.\n\nAap apna naam aur phone share kar dijiye, ya seedha WhatsApp kar sakte hain: https://wa.me/' + whatsappNumber,
            contact: 'Aap seedha is number par baat kar sakte hain: ' + callLabel + '\nWhatsApp: https://wa.me/' + whatsappNumber,
            investment: 'Long-term value ke liye buyers usually legal clarity, growth corridor access, development progress aur resale potential dekhte hain.\n\nAgar aap end use ya investment goal batayenge to main better direction de sakta hoon.',
            generic: 'Main in topics me help kar sakta hoon:\n- JDA approved plots\n- Budget range guidance\n- Loan basics\n- Site visit booking\n- Documents checklist\n\nAap apna question thoda specific bhej dijiye.'
        },
        hi: {
            greeting: 'नमस्ते! मैं यहाँ approved plots, site visit, budget और paperwork basics में मदद करने के लिए हूँ।\n\nआप location, budget या project type बता दीजिए।',
            legal: 'Safe plot evaluate करते समय इन बातों पर ध्यान दीजिए:\n1. JDA approval\n2. RERA registration\n3. 90A / land conversion status\n4. Clear title papers और registry support\n5. Bank loan eligibility\n\nअगर चाहें तो मैं documents checklist भी share कर सकता हूँ।',
            location: 'जयपुर में buyers अक्सर Ajmer Road, Ring Road, Tonk Road और connected growth corridors के options देखते हैं।\n\nआप preferred side बता दीजिए, मैं उसी हिसाब से guidance दूँगा।',
            budget: 'Budget के हिसाब से best option size, location और payment plan पर depend करता है।\n\nआप अपना approx budget और preferred location भेज दीजिए, फिर shortlist बनाना आसान हो जाएगा।',
            loan: 'Plot loan project-specific होता है। Proper approvals, clear title papers और bank acceptance होने पर loan मिल सकता है।\n\nआप budget share करें, team bank option और expected loan support समझा देगी।',
            visit: 'Free site visit arrange की जा सकती है।\n\nआप अपना नाम और फोन share कर दीजिए, या सीधे WhatsApp कर सकते हैं: https://wa.me/' + whatsappNumber,
            contact: 'आप सीधे इस नंबर पर बात कर सकते हैं: ' + callLabel + '\nWhatsApp: https://wa.me/' + whatsappNumber,
            investment: 'Long-term value के लिए buyers आमतौर पर legal clarity, growth corridor access, development progress और resale potential देखते हैं।\n\nअगर आप end use या investment goal बताएँगे तो मैं बेहतर direction दे सकता हूँ।',
            generic: 'मैं इन topics में help कर सकता हूँ:\n- JDA approved plots\n- Budget range guidance\n- Loan basics\n- Site visit booking\n- Documents checklist\n\nआप अपना सवाल थोड़ा specific भेज दीजिए।'
        },
        en: {
            greeting: 'Hi! I am here to help with approved plots, site visits, budget planning, and paperwork basics.\n\nYou can share your location preference, budget, or project type.',
            legal: 'When evaluating a safe plot, please check these points:\n1. JDA approval\n2. RERA registration\n3. 90A / land conversion status\n4. Clear title papers and registry support\n5. Bank loan eligibility\n\nIf you want, I can also share a basic document checklist.',
            location: 'In Jaipur, buyers often explore options around Ajmer Road, Ring Road, Tonk Road, and connected growth corridors.\n\nShare your preferred side and I can guide you more precisely.',
            budget: 'The best option depends on your budget, plot size, location, and payment plan.\n\nShare your approximate budget and preferred area, and it becomes easier to build a shortlist.',
            loan: 'Plot loans are project-specific. If approvals, title papers, and bank acceptance are in place, loan support may be available.\n\nShare your budget and the team can explain expected bank and EMI support.',
            visit: 'A free site visit can be arranged.\n\nYou can share your name and phone number here, or message directly on WhatsApp: https://wa.me/' + whatsappNumber,
            contact: 'You can contact the team directly on: ' + callLabel + '\nWhatsApp: https://wa.me/' + whatsappNumber,
            investment: 'For long-term value, buyers usually compare legal clarity, access to growth corridors, development progress, and resale potential.\n\nIf you share whether this is for end use or investment, I can guide you better.',
            generic: 'I can help with these topics:\n- JDA approved plots\n- Budget range guidance\n- Loan basics\n- Site visit booking\n- Document checklist\n\nSend a slightly more specific question and I will guide you.'
        }
    };

    var activeLanguage = languageUi[defaultLanguage] ? defaultLanguage : 'hinglish';
    var languageLocked = false;
    var chatMessages = [];
    var isOpen = false;
    var hasWelcomed = false;
    var isTyping = false;
    var leadPromptKey = '';
    var floatingWhatsApp = document.getElementById('floatingWhatsApp') || document.querySelector('.floating-whatsapp');

    var styles = document.getElementById('sh-chat-widget-styles');
    if (!styles) {
        styles = document.createElement('style');
        styles.id = 'sh-chat-widget-styles';
        styles.textContent = [
            '.sh-chat-fab{position:fixed;right:max(18px,env(safe-area-inset-right));bottom:max(18px,calc(24px + var(--sh-chat-offset-bottom,0px)));width:64px;height:64px;border:0;border-radius:999px;background:linear-gradient(135deg,#6f1733,#4f1124);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 16px 38px rgba(79,17,36,.35);z-index:99998;transition:transform .2s ease,box-shadow .2s ease,bottom .2s ease}',
            '.sh-chat-fab:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 18px 42px rgba(79,17,36,.42)}',
            '.sh-chat-fab.is-open{background:linear-gradient(135deg,#7f1d1d,#b91c1c)}',
            '.sh-chat-fab svg{width:28px;height:28px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
            '.sh-chat-fab .sh-chat-icon-close{display:none}',
            '.sh-chat-fab.is-open .sh-chat-icon-chat{display:none}',
            '.sh-chat-fab.is-open .sh-chat-icon-close{display:block}',
            '.sh-chat-badge{position:absolute;top:-3px;right:-3px;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:#ef4444;color:#fff;font:700 12px/22px Arial,sans-serif;border:2px solid #fff;text-align:center}',
            '.sh-chat-badge.is-hidden{display:none}',
            '.sh-chat-window{position:fixed;right:max(12px,env(safe-area-inset-right));top:clamp(84px,10vh,116px);bottom:calc(98px + var(--sh-chat-offset-bottom,0px));width:min(390px,calc(100vw - 24px));background:#fff;border-radius:22px;box-shadow:0 24px 64px rgba(15,23,42,.2);overflow:hidden;display:flex;flex-direction:column;z-index:99997;opacity:0;pointer-events:none;transform:translateY(18px) scale(.96);transform-origin:bottom right;transition:opacity .24s ease,transform .24s ease,bottom .2s ease;font-family:Manrope,Segoe UI,Arial,sans-serif}',
            '.sh-chat-window.is-open{opacity:1;pointer-events:auto;transform:translateY(0) scale(1)}',
            '.sh-chat-header{position:relative;padding:16px 18px 18px;background:linear-gradient(180deg,#6b2943 0%,#5b1930 58%,#4f1124 100%);color:#fff;display:flex;align-items:center;gap:12px}',
            '.sh-chat-header::after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:rgba(255,255,255,.94)}',
            '.sh-chat-header-badge{width:42px;height:42px;border-radius:999px;padding:2px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;flex:0 0 auto;overflow:hidden;box-shadow:0 8px 20px rgba(0,0,0,.2)}',
            '.sh-chat-header-badge img{width:100%;height:100%;display:block;object-fit:cover;border-radius:999px}',
            '.sh-chat-header-copy{flex:1 1 auto;min-width:0}',
            '.sh-chat-header-copy h3{margin:0;font-size:15px;font-weight:800;line-height:1.2;white-space:normal;overflow:visible;text-overflow:unset}',
            '.sh-chat-header-copy p{display:none}',
            '.sh-chat-refresh{width:36px;height:36px;border:0;border-radius:999px;background:transparent;color:rgba(255,255,255,.78);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 auto;transition:background .2s ease,color .2s ease}',
            '.sh-chat-refresh:hover{background:rgba(255,255,255,.08);color:#fff}',
            '.sh-chat-refresh svg{width:21px;height:21px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
            '.sh-chat-messages{flex:1 1 auto;padding:16px;background:linear-gradient(180deg,#f0fdf4 0%,#ffffff 42%);overflow:auto}',
            '.sh-chat-welcome{padding:4px 0 12px;text-align:center}',
            '.sh-chat-welcome strong{display:block;font-size:15px;color:#0f172a;margin-bottom:6px}',
            '.sh-chat-welcome p{margin:0;font-size:13px;line-height:1.55;color:#64748b}',
            '.sh-chat-row{display:flex;margin-bottom:12px}',
            '.sh-chat-row.is-user{justify-content:flex-end}',
            '.sh-chat-bubble{max-width:84%;padding:11px 14px;border-radius:18px;font-size:14px;line-height:1.55;word-break:break-word;box-shadow:0 8px 20px rgba(15,23,42,.06)}',
            '.sh-chat-row.is-bot .sh-chat-bubble{background:#fff;color:#1f2937;border-top-left-radius:6px}',
            '.sh-chat-row.is-user .sh-chat-bubble{background:linear-gradient(135deg,#059669,#0d9488);color:#fff;border-top-right-radius:6px}',
            '.sh-chat-time{margin-top:5px;font-size:11px;opacity:.7}',
            '.sh-chat-typing{display:none;align-items:center;gap:8px;margin-bottom:12px}',
            '.sh-chat-typing.is-visible{display:flex}',
            '.sh-chat-typing-bubble{display:flex;gap:4px;padding:10px 12px;border-radius:16px;border-top-left-radius:6px;background:#fff;box-shadow:0 8px 20px rgba(15,23,42,.06)}',
            '.sh-chat-typing-bubble span{width:7px;height:7px;border-radius:999px;background:#059669;opacity:.45;animation:sh-chat-bounce 1.2s infinite ease-in-out}',
            '.sh-chat-typing-bubble span:nth-child(2){animation-delay:.12s}',
            '.sh-chat-typing-bubble span:nth-child(3){animation-delay:.24s}',
            '@keyframes sh-chat-bounce{0%,100%{transform:translateY(0);opacity:.45}50%{transform:translateY(-5px);opacity:1}}',
            '.sh-chat-quick{padding:10px 16px 4px;background:#f8fafc;border-top:1px solid #eef2f7;display:flex;flex-wrap:wrap;gap:8px}',
            '.sh-chat-quick button{border:1px solid #cceadb;background:#fff;color:#065f46;padding:7px 12px;border-radius:999px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit}',
            '.sh-chat-quick button:hover{background:#059669;color:#fff;border-color:#059669}',
            '.sh-chat-input-row{padding:12px 14px;background:#f8fafc;border-top:1px solid #eef2f7;display:flex;gap:10px;align-items:center}',
            '.sh-chat-input{flex:1 1 auto;border:1px solid #dbe5ee;border-radius:999px;padding:11px 15px;font-size:14px;font-family:inherit;outline:none}',
            '.sh-chat-input:focus{border-color:#059669;box-shadow:0 0 0 3px rgba(5,150,105,.12)}',
            '.sh-chat-send{width:42px;height:42px;border:0;border-radius:999px;background:linear-gradient(135deg,#059669,#0d9488);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0 0 auto}',
            '.sh-chat-send svg{width:19px;height:19px;stroke:currentColor;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
            '.sh-chat-send.is-disabled{opacity:.55;cursor:not-allowed}',
            '.sh-chat-note{padding:0 14px 12px;font-size:11px;color:#94a3b8;background:#f8fafc;text-align:center}',
            '.sh-chat-lead-cta{display:inline-flex;align-items:center;gap:8px;margin-top:8px;padding:9px 13px;border:0;border-radius:12px;background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;font:700 13px/1.2 Manrope,Segoe UI,Arial,sans-serif;cursor:pointer}',
            '.sh-chat-lead-cta.is-saved{background:linear-gradient(135deg,#10b981,#059669);cursor:default}',
            '.sh-chat-overlay{position:fixed;inset:0;background:rgba(15,23,42,.45);display:none;align-items:center;justify-content:center;z-index:99999;padding:16px}',
            '.sh-chat-overlay.is-open{display:flex}',
            '.sh-chat-modal{width:min(360px,100%);background:#fff;border-radius:22px;padding:22px;box-shadow:0 24px 64px rgba(15,23,42,.24)}',
            '.sh-chat-modal h4{margin:0 0 6px;font-size:18px;color:#0f172a}',
            '.sh-chat-modal p{margin:0 0 16px;font-size:13px;color:#64748b;line-height:1.55}',
            '.sh-chat-field{margin-bottom:12px}',
            '.sh-chat-field label{display:block;margin-bottom:6px;font-size:12px;font-weight:700;color:#334155}',
            '.sh-chat-field input{width:100%;padding:10px 12px;border:1px solid #dbe5ee;border-radius:12px;font-size:14px;font-family:inherit;outline:none}',
            '.sh-chat-field input:focus{border-color:#059669;box-shadow:0 0 0 3px rgba(5,150,105,.12)}',
            '.sh-chat-modal-actions{display:flex;gap:10px;margin-top:14px}',
            '.sh-chat-modal-actions button{flex:1 1 0;padding:11px 12px;border-radius:12px;border:0;font:700 14px/1.2 Manrope,Segoe UI,Arial,sans-serif;cursor:pointer}',
            '.sh-chat-save-btn{background:linear-gradient(135deg,#059669,#0d9488);color:#fff}',
            '.sh-chat-cancel-btn{background:#e2e8f0;color:#0f172a}',
            '.sh-chat-inline-error{margin:6px 0 0;font-size:12px;color:#dc2626}',
            '.sh-chat-links a{color:inherit;text-decoration:underline}',
            '@media (max-width: 640px){.sh-chat-window{left:12px;right:12px;top:max(10px,env(safe-area-inset-top));bottom:calc(78px + var(--sh-chat-offset-bottom,0px));width:auto;border-radius:24px;transform-origin:bottom center}.sh-chat-fab{right:max(14px,env(safe-area-inset-right));bottom:max(14px,calc(18px + var(--sh-chat-offset-bottom,0px)));width:54px;height:54px}.sh-chat-header{padding:14px 14px 16px}.sh-chat-header-badge{width:38px;height:38px}.sh-chat-header-copy h3{font-size:13px}}'
        ].join('');
        styles.textContent += [
            '.sh-chat-fab{width:clamp(54px,5vw,68px);height:clamp(54px,5vw,68px);background:radial-gradient(circle at 30% 28%,#8f3556 0%,#6f1733 38%,#4f1124 100%);border:1px solid rgba(255,255,255,.16);box-shadow:0 20px 44px rgba(79,17,36,.42),inset 0 2px 7px rgba(255,255,255,.22),inset 0 -10px 16px rgba(0,0,0,.24)}',
            '.sh-chat-fab::before{content:"";position:absolute;inset:-7px;border-radius:inherit;background:radial-gradient(circle,rgba(200,154,75,.38),rgba(200,154,75,0) 72%);filter:blur(2px);opacity:.95;z-index:-1;animation:sh-chat-glow 2.8s ease-in-out infinite}',
            '.sh-chat-fab::after{content:"";position:absolute;top:10px;left:12px;width:22px;height:14px;border-radius:999px;background:rgba(255,255,255,.22);filter:blur(1px)}',
            '.sh-chat-fab:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 26px 54px rgba(79,17,36,.5),inset 0 2px 7px rgba(255,255,255,.26),inset 0 -12px 18px rgba(0,0,0,.28)}',
            '.sh-chat-window{border-radius:28px;background:linear-gradient(180deg,rgba(255,255,255,.98),rgba(249,245,238,.96));box-shadow:0 36px 76px rgba(15,23,42,.22),0 8px 20px rgba(15,23,42,.12),inset 0 1px 0 rgba(255,255,255,.8);transform:translateY(18px) scale(.96) rotateX(4deg);backdrop-filter:blur(18px)}',
            '.sh-chat-window::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top left,rgba(200,154,75,.18),transparent 30%),radial-gradient(circle at bottom right,rgba(111,23,51,.1),transparent 32%);pointer-events:none}',
            '.sh-chat-window::after{content:"";position:absolute;left:20px;right:20px;top:94px;height:24px;background:rgba(79,17,36,.08);filter:blur(22px);pointer-events:none}',
            '.sh-chat-window.is-open{transform:translateY(0) scale(1) rotateX(0)}',
            '.sh-chat-header{overflow:hidden;box-shadow:inset 0 -1px 0 rgba(255,255,255,.08)}',
            '.sh-chat-header::before{content:"";position:absolute;left:-22px;top:-36px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.17),rgba(255,255,255,0) 70%)}',
            '.sh-chat-header-copy p{display:none}',
            '.sh-chat-header-copy h3{text-shadow:0 1px 2px rgba(0,0,0,.24)}',
            '.sh-chat-toolbar{position:relative;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;background:linear-gradient(180deg,rgba(255,255,255,.78),rgba(255,255,255,.54));border-bottom:1px solid rgba(148,163,184,.18);backdrop-filter:blur(12px);z-index:1}',
            '.sh-chat-toolbar-note{display:none}',
            '.sh-chat-lang-group{display:flex;gap:8px;flex-wrap:wrap}',
            '.sh-chat-lang-btn{position:relative;border:1px solid rgba(111,23,51,.14);background:linear-gradient(145deg,#ffffff,#f3e9de);color:#4f1124;padding:6px 10px;border-radius:999px;font-size:12px;font-weight:800;cursor:pointer;box-shadow:0 8px 18px rgba(15,23,42,.06),inset 0 1px 0 rgba(255,255,255,.86);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,color .18s ease}',
            '.sh-chat-lang-btn:hover{transform:translateY(-1px)}',
            '.sh-chat-lang-btn.is-active{border-color:rgba(200,154,75,.6);background:linear-gradient(145deg,#7f243f,#5a1730);color:#fff;box-shadow:0 14px 24px rgba(79,17,36,.26),inset 0 1px 0 rgba(255,255,255,.12)}',
            '.sh-chat-messages{background:linear-gradient(180deg,#f7fbf7 0%,#fff8f2 46%,#ffffff 100%)}',
            '.sh-chat-welcome{text-align:left;padding:2px 0 12px}',
            '.sh-chat-welcome-card{position:relative;padding:16px 16px 14px;border-radius:22px;background:linear-gradient(145deg,rgba(255,255,255,.96),rgba(248,241,233,.94));box-shadow:0 18px 34px rgba(15,23,42,.1),inset 0 1px 0 rgba(255,255,255,.92);border:1px solid rgba(255,255,255,.7);overflow:hidden}',
            '.sh-chat-welcome-card::before{content:"";position:absolute;right:-24px;top:-24px;width:120px;height:120px;border-radius:50%;background:radial-gradient(circle,rgba(200,154,75,.26),rgba(200,154,75,0) 70%)}',
            '.sh-chat-welcome-badge{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border-radius:999px;background:linear-gradient(135deg,#6f1733,#4f1124);color:#fff;font-size:11px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;box-shadow:0 12px 24px rgba(79,17,36,.22)}',
            '.sh-chat-welcome-badge::before{content:"";width:8px;height:8px;border-radius:999px;background:#f8d38d;box-shadow:0 0 0 6px rgba(248,211,141,.16)}',
            '.sh-chat-welcome-title{display:block;margin-top:14px;font-size:18px;font-weight:900;color:#1e293b;line-height:1.25}',
            '.sh-chat-welcome-text{margin-top:8px;font-size:13px;line-height:1.7;color:#5b6474}',
            '.sh-chat-welcome-features{display:flex;flex-wrap:wrap;gap:8px;margin-top:14px}',
            '.sh-chat-welcome-features span{padding:8px 10px;border-radius:14px;background:rgba(255,255,255,.82);border:1px solid rgba(148,163,184,.18);font-size:11px;font-weight:800;color:#6f1733;box-shadow:0 10px 18px rgba(15,23,42,.05)}',
            '.sh-chat-row{animation:sh-chat-rise .28s ease}',
            '.sh-chat-bubble{line-height:1.65;box-shadow:0 16px 28px rgba(15,23,42,.08),inset 0 1px 0 rgba(255,255,255,.75)}',
            '.sh-chat-row.is-bot .sh-chat-bubble{background:linear-gradient(145deg,#ffffff,#f5efe7)}',
            '.sh-chat-row.is-user .sh-chat-bubble{background:linear-gradient(145deg,#0f766e,#059669 55%,#10b981);box-shadow:0 18px 30px rgba(5,150,105,.22),inset 0 1px 0 rgba(255,255,255,.16)}',
            '.sh-chat-quick{padding:12px 16px 10px;background:linear-gradient(180deg,#fff9f4,#fffdfc);border-top:1px solid rgba(148,163,184,.14)}',
            '.sh-chat-quick button{border:1px solid rgba(111,23,51,.12);background:linear-gradient(145deg,#ffffff,#f6eee4);color:#5d1e36;padding:8px 12px;border-radius:16px;box-shadow:0 12px 18px rgba(15,23,42,.06),inset 0 1px 0 rgba(255,255,255,.92)}',
            '.sh-chat-quick button:hover{transform:translateY(-2px);background:linear-gradient(145deg,#7f243f,#5a1730);color:#fff;box-shadow:0 16px 24px rgba(79,17,36,.26)}',
            '.sh-chat-input-row{background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(251,247,242,.98));border-top:1px solid rgba(148,163,184,.14)}',
            '.sh-chat-input{border-radius:18px;background:linear-gradient(145deg,#ffffff,#f9f3eb);box-shadow:inset 0 1px 0 rgba(255,255,255,.84)}',
            '.sh-chat-input:focus{border-color:rgba(111,23,51,.38);box-shadow:0 0 0 3px rgba(111,23,51,.1),inset 0 1px 0 rgba(255,255,255,.9)}',
            '.sh-chat-send{width:46px;height:46px;border-radius:18px;background:linear-gradient(145deg,#7f243f,#5a1730);box-shadow:0 18px 28px rgba(79,17,36,.22),inset 0 1px 0 rgba(255,255,255,.16)}',
            '.sh-chat-note{padding:0 14px 14px;background:linear-gradient(180deg,rgba(255,255,255,.94),rgba(251,247,242,.98));color:#7c8595}',
            '.sh-chat-lead-cta{padding:10px 14px;border-radius:14px;background:linear-gradient(145deg,#d9a84e,#c38728);box-shadow:0 18px 26px rgba(201,135,40,.24),inset 0 1px 0 rgba(255,255,255,.16)}',
            '.sh-chat-lead-cta.is-saved{box-shadow:0 18px 26px rgba(5,150,105,.24),inset 0 1px 0 rgba(255,255,255,.16)}',
            '.sh-chat-teaser{position:fixed;right:22px;bottom:calc(106px + var(--sh-chat-offset-bottom,0px));max-width:240px;padding:12px 14px 12px 16px;border-radius:18px;border:1px solid rgba(255,255,255,.55);background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(248,241,233,.92));color:#4f1124;font-size:12px;font-weight:800;line-height:1.55;display:inline-flex;align-items:center;gap:8px;box-shadow:0 18px 40px rgba(15,23,42,.15),inset 0 1px 0 rgba(255,255,255,.8);backdrop-filter:blur(16px);z-index:99997;transform-origin:bottom right;transition:opacity .22s ease,transform .22s ease,bottom .22s ease}',
            '.sh-chat-teaser::before{content:"";width:9px;height:9px;border-radius:999px;flex:0 0 auto;background:linear-gradient(135deg,#f3c56f,#c38728);box-shadow:0 0 0 5px rgba(243,197,111,.16)}',
            '.sh-chat-teaser::after{content:"";position:absolute;right:22px;bottom:-7px;width:16px;height:16px;background:inherit;border-right:1px solid rgba(255,255,255,.55);border-bottom:1px solid rgba(255,255,255,.55);transform:rotate(45deg)}',
            '.sh-chat-teaser.is-hidden{opacity:0;pointer-events:none;transform:translateY(12px) scale(.94)}',
            '.sh-chat-modal{border-radius:26px;background:linear-gradient(145deg,rgba(255,255,255,.98),rgba(247,240,231,.96));box-shadow:0 34px 74px rgba(15,23,42,.24),inset 0 1px 0 rgba(255,255,255,.86);border:1px solid rgba(255,255,255,.7)}',
            '.sh-chat-save-btn{background:linear-gradient(145deg,#7f243f,#5a1730);box-shadow:0 18px 26px rgba(79,17,36,.22)}',
            '.sh-chat-cancel-btn{background:linear-gradient(145deg,#eef2f7,#dde6f0)}',
            '@keyframes sh-chat-glow{0%,100%{transform:scale(.96);opacity:.86}50%{transform:scale(1.08);opacity:1}}',
            '@keyframes sh-chat-rise{0%{opacity:0;transform:translateY(8px) scale(.98)}100%{opacity:1;transform:translateY(0) scale(1)}}',
            '@media (max-width:640px){.sh-chat-window{border-radius:24px}.sh-chat-fab{right:max(12px,env(safe-area-inset-right));bottom:max(12px,calc(16px + var(--sh-chat-offset-bottom,0px)));width:50px;height:50px;box-shadow:0 16px 34px rgba(79,17,36,.34),inset 0 2px 6px rgba(255,255,255,.18),inset 0 -10px 14px rgba(0,0,0,.22)}.sh-chat-fab svg{width:24px;height:24px}.sh-chat-badge{min-width:18px;height:18px;padding:0 5px;font-size:10px;line-height:18px;top:-2px;right:-2px}.sh-chat-teaser{left:auto;right:10px;max-width:none;padding:9px 12px;gap:7px;border-radius:999px;font-size:11px;line-height:1.1;bottom:calc(68px + var(--sh-chat-offset-bottom,0px));box-shadow:0 14px 28px rgba(15,23,42,.14),inset 0 1px 0 rgba(255,255,255,.82)}.sh-chat-teaser::before{width:8px;height:8px;box-shadow:0 0 0 4px rgba(243,197,111,.14)}.sh-chat-teaser::after{display:none}.sh-chat-toolbar{padding:10px 14px;align-items:flex-start;flex-direction:column}.sh-chat-window::after{display:none}}'
        ].join('');
        document.head.appendChild(styles);
    }

    var container = document.createElement('div');
    container.id = widgetId;
    container.innerHTML = [
        '<div class="sh-chat-teaser"></div>',
        '<button class="sh-chat-fab" type="button" aria-label="Open chat">',
        '  <svg class="sh-chat-icon-chat" viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4.5A8 8 0 1 1 21 12Z"></path></svg>',
        '  <svg class="sh-chat-icon-close" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
        '  <span class="sh-chat-badge">1</span>',
        '</button>',
        '<section class="sh-chat-window" aria-label="Savita Homelands chat widget">',
        '  <div class="sh-chat-header">',
        '    <div class="sh-chat-header-badge"><img src="' + logoUrl + '" alt="' + brandName + ' logo" /></div>',
        '    <div class="sh-chat-header-copy"><h3>' + headerTitle + '</h3></div>',
        '    <button class="sh-chat-refresh" type="button" aria-label="Restart chat"><svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><polyline points="21 3 21 9 15 9"></polyline></svg></button>',
        '  </div>',
        '  <div class="sh-chat-toolbar">',
        '    <div class="sh-chat-lang-group">',
        '      <button class="sh-chat-lang-btn" type="button" data-lang="hinglish">Hinglish</button>',
        '      <button class="sh-chat-lang-btn" type="button" data-lang="hi">हिंदी</button>',
        '      <button class="sh-chat-lang-btn" type="button" data-lang="en">English</button>',
        '    </div>',
        '    <span class="sh-chat-toolbar-note"></span>',
        '  </div>',
        '  <div class="sh-chat-messages">',
        '    <div class="sh-chat-welcome"><div class="sh-chat-welcome-card"><span class="sh-chat-welcome-badge"></span><strong class="sh-chat-welcome-title"></strong><p class="sh-chat-welcome-text"></p><div class="sh-chat-welcome-features"><span>JDA Approved</span><span>Budget Match</span><span>Loan Basics</span><span>Free Site Visit</span></div></div></div>',
        '    <div class="sh-chat-typing" aria-hidden="true"><div class="sh-chat-typing-bubble"><span></span><span></span><span></span></div></div>',
        '  </div>',
        '  <div class="sh-chat-quick">',
        quickReplies.map(function(reply) {
            return '<button type="button" class="sh-chat-quick-btn" data-quick-id="' + reply.id + '"></button>';
        }).join(''),
        '    <button type="button" class="sh-chat-call-btn" data-call-now="1"></button>',
        '  </div>',
        '  <div class="sh-chat-input-row">',
        '    <input class="sh-chat-input" type="text" autocomplete="off" />',
        '    <button class="sh-chat-send" type="button" aria-label="Send message"><svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></button>',
        '  </div>',
        '  <div class="sh-chat-note"></div>',
        '</section>',
        '<div class="sh-chat-overlay" aria-hidden="true">',
        '  <div class="sh-chat-modal" role="dialog" aria-modal="true" aria-label="Save lead">',
        '    <h4 class="sh-chat-modal-title"></h4>',
        '    <p class="sh-chat-modal-text"></p>',
        '    <div class="sh-chat-field"><label class="sh-chat-label-name" for="shLeadName"></label><input id="shLeadName" class="sh-chat-lead-name" type="text" /></div>',
        '    <div class="sh-chat-field"><label class="sh-chat-label-phone" for="shLeadPhone"></label><input id="shLeadPhone" class="sh-chat-lead-phone" type="tel" /></div>',
        '    <div class="sh-chat-field"><label class="sh-chat-label-email" for="shLeadEmail"></label><input id="shLeadEmail" class="sh-chat-lead-email" type="email" /></div>',
        '    <div class="sh-chat-field"><label class="sh-chat-label-budget" for="shLeadBudget"></label><input id="shLeadBudget" class="sh-chat-lead-budget" type="text" /></div>',
        '    <div class="sh-chat-field"><label class="sh-chat-label-location" for="shLeadLocation"></label><input id="shLeadLocation" class="sh-chat-lead-location" type="text" /></div>',
        '    <p class="sh-chat-inline-error" hidden></p>',
        '    <div class="sh-chat-modal-actions">',
        '      <button class="sh-chat-save-btn" type="button"></button>',
        '      <button class="sh-chat-cancel-btn" type="button"></button>',
        '    </div>',
        '  </div>',
        '</div>'
    ].join('');
    document.body.appendChild(container);

    var teaser = container.querySelector('.sh-chat-teaser');
    var fab = container.querySelector('.sh-chat-fab');
    var badge = container.querySelector('.sh-chat-badge');
    var chatWindow = container.querySelector('.sh-chat-window');
    var refreshBtn = container.querySelector('.sh-chat-refresh');
    var toolbarNote = container.querySelector('.sh-chat-toolbar-note');
    var languageButtons = container.querySelectorAll('.sh-chat-lang-btn');
    var messageArea = container.querySelector('.sh-chat-messages');
    var welcomeBadge = container.querySelector('.sh-chat-welcome-badge');
    var welcomeTitle = container.querySelector('.sh-chat-welcome-title');
    var welcomeText = container.querySelector('.sh-chat-welcome-text');
    var typingRow = container.querySelector('.sh-chat-typing');
    var input = container.querySelector('.sh-chat-input');
    var sendBtn = container.querySelector('.sh-chat-send');
    var footerNote = container.querySelector('.sh-chat-note');
    var quickReplyButtons = container.querySelectorAll('.sh-chat-quick-btn');
    var callNowBtn = container.querySelector('.sh-chat-call-btn');
    var overlay = container.querySelector('.sh-chat-overlay');
    var modalTitle = container.querySelector('.sh-chat-modal-title');
    var modalText = container.querySelector('.sh-chat-modal-text');
    var modalLabels = container.querySelectorAll('.sh-chat-field label');
    var leadNameInput = container.querySelector('.sh-chat-lead-name');
    var leadPhoneInput = container.querySelector('.sh-chat-lead-phone');
    var leadEmailInput = container.querySelector('.sh-chat-lead-email');
    var leadBudgetInput = container.querySelector('.sh-chat-lead-budget');
    var leadLocationInput = container.querySelector('.sh-chat-lead-location');
    var leadError = container.querySelector('.sh-chat-inline-error');
    var leadSaveBtn = container.querySelector('.sh-chat-save-btn');
    var leadCancelBtn = container.querySelector('.sh-chat-cancel-btn');

    function escapeHtml(value) {
        var div = document.createElement('div');
        div.textContent = value;
        return div.innerHTML;
    }

    function enhanceLinks(text) {
        return escapeHtml(text).replace(
            /(https?:\/\/[^\s<]+)/g,
            '<span class="sh-chat-links"><a href="$1" target="_blank" rel="noopener">$1</a></span>'
        );
    }

    function getTimeLabel() {
        var now = new Date();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var suffix = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        return hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + suffix;
    }

    function scrollToBottom() {
        setTimeout(function() {
            messageArea.scrollTop = messageArea.scrollHeight;
        }, 40);
    }

    function updateFloatingOffsets() {
        var offsetBottom = 0;

        if (floatingWhatsApp) {
            var rect = floatingWhatsApp.getBoundingClientRect();
            var isVisible = rect.width > 0 && rect.height > 0;
            var overlapsRightZone = rect.left > window.innerWidth * 0.55;

            if (isVisible && overlapsRightZone) {
                var viewportBottomGap = Math.max(window.innerHeight - rect.bottom, 0);
                offsetBottom = rect.height + viewportBottomGap + 14;
            }
        }

        container.style.setProperty('--sh-chat-offset-bottom', offsetBottom + 'px');
    }

    function appendIntoMessageArea(node) {
        if (typingRow && typingRow.parentNode === messageArea) {
            messageArea.insertBefore(node, typingRow);
        } else {
            messageArea.appendChild(node);
        }
    }

    function addMessage(role, text) {
        var row = document.createElement('div');
        row.className = 'sh-chat-row ' + (role === 'user' ? 'is-user' : 'is-bot');

        var bubble = document.createElement('div');
        bubble.className = 'sh-chat-bubble';
        bubble.innerHTML = enhanceLinks(text).replace(/\n/g, '<br>');

        var time = document.createElement('div');
        time.className = 'sh-chat-time';
        time.textContent = getTimeLabel();

        bubble.appendChild(time);
        row.appendChild(bubble);
        appendIntoMessageArea(row);
        scrollToBottom();
    }

    function addBotMessage(text) {
        chatMessages.push({ role: 'assistant', content: text });
        addMessage('assistant', text);
        maybeOfferLeadSave();
    }

    function setTyping(active) {
        isTyping = active;
        typingRow.classList.toggle('is-visible', active);
        sendBtn.classList.toggle('is-disabled', active);
        scrollToBottom();
    }

    function getUiCopy(language) {
        return languageUi[language] || languageUi.hinglish;
    }

    function updateLanguageUi() {
        var copy = getUiCopy(activeLanguage);

        teaser.textContent = copy.teaser;
        toolbarNote.textContent = copy.toolbarNote;
        welcomeBadge.textContent = copy.badge;
        welcomeTitle.textContent = copy.welcomeTitle;
        welcomeText.textContent = copy.welcomeText;
        input.placeholder = copy.inputPlaceholder;
        footerNote.textContent = copy.footerNote;
        modalTitle.textContent = copy.modalTitle;
        modalText.textContent = copy.modalText;
        modalLabels[0].textContent = copy.nameLabel;
        modalLabels[1].textContent = copy.phoneLabel;
        modalLabels[2].textContent = copy.emailLabel;
        modalLabels[3].textContent = copy.budgetLabel;
        modalLabels[4].textContent = copy.locationLabel;
        leadNameInput.placeholder = copy.namePlaceholder;
        leadPhoneInput.placeholder = copy.phonePlaceholder;
        leadEmailInput.placeholder = copy.emailPlaceholder;
        leadBudgetInput.placeholder = copy.budgetPlaceholder;
        leadLocationInput.placeholder = copy.locationPlaceholder;
        leadSaveBtn.textContent = copy.saveButton;
        leadCancelBtn.textContent = copy.cancelButton;

        for (var i = 0; i < languageButtons.length; i += 1) {
            var language = languageButtons[i].getAttribute('data-lang');
            languageButtons[i].classList.toggle('is-active', language === activeLanguage);
        }

        for (var j = 0; j < quickReplyButtons.length; j += 1) {
            var quickId = quickReplyButtons[j].getAttribute('data-quick-id');

            for (var k = 0; k < quickReplies.length; k += 1) {
                if (quickReplies[k].id === quickId) {
                    quickReplyButtons[j].textContent = copy.quick[quickId];
                    quickReplyButtons[j].setAttribute('data-message', quickReplies[k].messages[activeLanguage]);
                    break;
                }
            }
        }

        callNowBtn.textContent = copy.quick.call;
    }

    function setLanguage(language, options) {
        var changed = activeLanguage !== language;

        if (!languageUi[language]) {
            return;
        }

        if (changed) {
            activeLanguage = language;
            updateLanguageUi();
        }

        if (options && options.locked) {
            languageLocked = true;
        }

        if (changed && options && options.announce && hasWelcomed) {
            addBotMessage(getUiCopy(activeLanguage).languageChanged);
        }
    }

    function getWelcomeMessage(language) {
        return getUiCopy(language).welcomeMessage;
    }

    function openChat() {
        isOpen = true;
        fab.classList.add('is-open');
        chatWindow.classList.add('is-open');
        badge.classList.add('is-hidden');
        teaser.classList.add('is-hidden');
        input.focus();

        if (!hasWelcomed) {
            hasWelcomed = true;
            setTimeout(function() {
                addBotMessage(getWelcomeMessage(activeLanguage));
            }, 220);
        }
    }

    function closeChat() {
        isOpen = false;
        fab.classList.remove('is-open');
        chatWindow.classList.remove('is-open');
        teaser.classList.remove('is-hidden');
    }

    function toggleChat() {
        if (isOpen) {
            closeChat();
        } else {
            openChat();
        }
    }

    function resetConversation() {
        var oldRows = messageArea.querySelectorAll('.sh-chat-row');

        chatMessages = [];
        leadPromptKey = '';
        hasWelcomed = false;
        setTyping(false);

        for (var i = 0; i < oldRows.length; i += 1) {
            oldRows[i].remove();
        }

        if (isOpen) {
            input.focus();
            hasWelcomed = true;
            setTimeout(function() {
                addBotMessage(getWelcomeMessage(activeLanguage));
            }, 180);
        }
    }

    function normalizeText(text) {
        return String(text || '').toLowerCase();
    }

    function includesAny(text, keywords) {
        for (var i = 0; i < keywords.length; i += 1) {
            if (text.indexOf(keywords[i]) !== -1) {
                return true;
            }
        }
        return false;
    }

    function countKeywordMatches(text, keywords) {
        var matches = 0;

        for (var i = 0; i < keywords.length; i += 1) {
            if (text.indexOf(keywords[i]) !== -1) {
                matches += 1;
            }
        }

        return matches;
    }

    function detectLanguageFromText(text) {
        var rawText = String(text || '');
        var normalized = rawText.toLowerCase();
        var romanHindiMarkers = [
            'mujhe', 'chahiye', 'kaise', 'kya', 'hai', 'hain', 'batao', 'bataiye',
            'aap', 'mera', 'meri', 'apna', 'karna', 'karni', 'kitna', 'milta', 'chahte'
        ];
        var englishMarkers = [
            'hello', 'details', 'approved', 'budget', 'project', 'loan', 'visit',
            'price', 'tell', 'share', 'need', 'want', 'help', 'where', 'documents'
        ];

        if (/[\u0900-\u097F]/.test(rawText)) {
            return 'hi';
        }

        if (countKeywordMatches(normalized, romanHindiMarkers) >= 2) {
            return 'hinglish';
        }

        if (countKeywordMatches(normalized, englishMarkers) >= 2) {
            return 'en';
        }

        return activeLanguage;
    }

    function inferIntent(question) {
        var text = normalizeText(question);

        if (includesAny(text, ['hello', 'hi', 'hey', 'namaste', 'नमस्ते', 'हेलो'])) {
            return 'greeting';
        }

        if (includesAny(text, ['jda', 'rera', 'approved', 'legal', 'registry', 'paper', 'document', '90a', 'title', 'कानूनी', 'रजिस्ट्री', 'दस्तावेज'])) {
            return 'legal';
        }

        if (includesAny(text, ['ajmer', 'ring road', 'tonk', 'location', 'area', 'where', 'लोकेशन', 'अजमेर', 'कहाँ'])) {
            return 'location';
        }

        if (includesAny(text, ['budget', '10-20', '10 20', 'lakh', 'price', 'rate', 'cost', 'बजट', 'कीमत'])) {
            return 'budget';
        }

        if (includesAny(text, ['loan', 'bank', 'emi', 'finance', 'लोन', 'बैंक', 'ईएमआई'])) {
            return 'loan';
        }

        if (includesAny(text, ['visit', 'site visit', 'book', 'meeting', 'साइट विजिट', 'बुक'])) {
            return 'visit';
        }

        if (includesAny(text, ['call', 'phone', 'contact', 'whatsapp', 'number', 'फोन', 'संपर्क', 'व्हाट्सऐप', 'नंबर'])) {
            return 'contact';
        }

        if (includesAny(text, ['investment', 'return', 'future', 'growth', 'निवेश', 'रिटर्न', 'ग्रोथ'])) {
            return 'investment';
        }

        return '';
    }

    function getReplyForIntent(language, intent) {
        var catalog = localizedReplies[language] || localizedReplies.hinglish;
        return catalog[intent] || catalog.generic;
    }

    function buildLocalReply(question, language, allowGeneric) {
        var intent = inferIntent(question);

        if (!intent && !allowGeneric) {
            return '';
        }

        return getReplyForIntent(language, intent || 'generic');
    }

    function getLatestUserMessage() {
        for (var i = chatMessages.length - 1; i >= 0; i -= 1) {
            if (chatMessages[i].role === 'user') {
                return chatMessages[i].content;
            }
        }
        return '';
    }

    function getChatSummary() {
        return chatMessages.map(function(message) {
            return (message.role === 'user' ? 'User: ' : 'Assistant: ') + message.content;
        }).join('\n').slice(0, 800);
    }

    function detectContactInfo(text) {
        var inputText = String(text || '');
        var phoneMatch = inputText.match(/(?:\+91[-\s]?)?[6-9]\d{9}/);
        var emailMatch = inputText.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
        var nameMatch = inputText.match(/(?:my name is|i am|name[:\s]+|मेरा नाम|मैं हूँ|नाम[:\s]+)/i);
        var detectedName = '';

        if (nameMatch) {
            detectedName = inputText.slice(nameMatch.index + nameMatch[0].length).split(/[\n,.!?]/)[0].trim();
        }

        return {
            phone: phoneMatch ? phoneMatch[0].replace(/[^\d]/g, '') : '',
            email: emailMatch ? emailMatch[0] : '',
            name: detectedName
        };
    }

    function openLeadModal(seed) {
        var leadSeed = seed || detectContactInfo(getChatSummary());
        leadNameInput.value = leadSeed.name || leadNameInput.value || '';
        leadPhoneInput.value = leadSeed.phone || leadPhoneInput.value || '';
        leadEmailInput.value = leadSeed.email || leadEmailInput.value || '';
        leadError.hidden = true;
        leadError.textContent = '';
        overlay.classList.add('is-open');
    }

    function closeLeadModal() {
        overlay.classList.remove('is-open');
        leadError.hidden = true;
        leadError.textContent = '';
    }

    function maybeOfferLeadSave() {
        var copy = getUiCopy(activeLanguage);
        var contact = detectContactInfo(getChatSummary());
        var signature = [contact.name, contact.phone].join('|');

        if (!contact.name && !contact.phone) {
            return;
        }

        if (signature === leadPromptKey) {
            return;
        }
        leadPromptKey = signature;

        var row = document.createElement('div');
        row.className = 'sh-chat-row is-bot';

        var wrap = document.createElement('div');
        wrap.className = 'sh-chat-bubble';
        wrap.innerHTML = escapeHtml(copy.leadPrompt);

        var button = document.createElement('button');
        button.className = 'sh-chat-lead-cta';
        button.type = 'button';
        button.textContent = copy.saveLead;
        button.addEventListener('click', function() {
            openLeadModal(contact);
            button.classList.add('is-saved');
            button.textContent = copy.leadReady;
        });

        wrap.appendChild(button);
        row.appendChild(wrap);
        appendIntoMessageArea(row);
        scrollToBottom();
    }

    function sendToConfiguredApi(language) {
        return fetch(apiUrl + '/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                messages: chatMessages,
                language: language,
                preferredLanguage: language
            })
        }).then(function(response) {
            if (!response.ok) {
                throw new Error('Chat API request failed');
            }
            return response.json();
        }).then(function(data) {
            if (!data || !data.message) {
                throw new Error('Chat API response missing message');
            }
            return data.message;
        });
    }

    function getBotReply() {
        var question = getLatestUserMessage();
        var responseLanguage = languageLocked ? activeLanguage : detectLanguageFromText(question);
        var localSpecificReply = buildLocalReply(question, responseLanguage, false);

        if (!languageLocked && responseLanguage !== activeLanguage) {
            activeLanguage = responseLanguage;
            updateLanguageUi();
        }

        if (localSpecificReply) {
            return Promise.resolve(localSpecificReply);
        }

        if (!hasConfiguredApi) {
            return Promise.resolve(buildLocalReply(question, responseLanguage, true));
        }

        return sendToConfiguredApi(responseLanguage).catch(function() {
            return buildLocalReply(question, responseLanguage, true);
        });
    }

    function submitLeadViaApi(payload) {
        return fetch(apiUrl + '/api/leads', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).then(function(response) {
            if (!response.ok) {
                throw new Error('Lead API request failed');
            }
            return response.json().catch(function() {
                return {};
            });
        });
    }

    function submitLeadViaFormspree(payload) {
        var params = new URLSearchParams();
        params.append('name', payload.name);
        params.append('phone', payload.phone);
        params.append('email', payload.email || '');
        params.append('budget', payload.budget || '');
        params.append('preferred_location', payload.preferredLocation || '');
        params.append('message', payload.message || '');
        params.append('lead_type', 'AI Chat Widget');
        params.append('lead_source', 'Website Chatbot');
        params.append('_subject', brandName + ' chatbot lead');
        params.append('_captcha', 'false');

        return fetch(formEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params.toString()
        }).then(function(response) {
            if (!response.ok) {
                throw new Error('Lead form request failed');
            }
            return response.json().catch(function() {
                return {};
            });
        });
    }

    function buildLeadWhatsappText(payload) {
        var summary = String(payload.message || '').replace(/\s+/g, ' ').trim();
        var lines = [
            brandName + ' chatbot lead',
            'Name: ' + (payload.name || '-'),
            'Phone: ' + (payload.phone || '-')
        ];

        if (payload.email) {
            lines.push('Email: ' + payload.email);
        }
        if (payload.budget) {
            lines.push('Budget: ' + payload.budget);
        }
        if (payload.preferredLocation) {
            lines.push('Preferred location: ' + payload.preferredLocation);
        }
        if (payload.language) {
            lines.push('Language: ' + payload.language);
        }
        if (summary) {
            lines.push('Chat summary: ' + (summary.length > 320 ? summary.slice(0, 317) + '...' : summary));
        }

        return lines.join('\n');
    }

    function closeLeadWhatsappWindow(whatsappWindow) {
        try {
            if (whatsappWindow && !whatsappWindow.closed) {
                whatsappWindow.close();
            }
        } catch (error) {}
    }

    function openLeadWhatsapp(payload, whatsappWindow) {
        if (!whatsappNumber || !openWhatsappOnLead) {
            closeLeadWhatsappWindow(whatsappWindow);
            return;
        }

        var url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(buildLeadWhatsappText(payload));

        if (whatsappWindow && !whatsappWindow.closed) {
            whatsappWindow.location.href = url;
            return;
        }

        window.open(url, '_blank');
    }

    function saveLead() {
        var copy = getUiCopy(activeLanguage);
        var payload = {
            name: leadNameInput.value.trim(),
            phone: leadPhoneInput.value.trim(),
            email: leadEmailInput.value.trim(),
            budget: leadBudgetInput.value.trim(),
            preferredLocation: leadLocationInput.value.trim(),
            message: getChatSummary(),
            language: activeLanguage,
            source: 'AI Chat Widget'
        };

        if (!payload.name || !payload.phone) {
            leadError.hidden = false;
            leadError.textContent = copy.validation;
            return;
        }

        leadError.hidden = true;
        leadSaveBtn.disabled = true;
        leadSaveBtn.textContent = '...';

        var whatsappWindow = null;
        if (whatsappNumber && openWhatsappOnLead) {
            try {
                whatsappWindow = window.open('about:blank', '_blank');
            } catch (error) {
                whatsappWindow = null;
            }
        }

        var saveRequest = hasConfiguredApi
            ? submitLeadViaApi(payload).catch(function() { return submitLeadViaFormspree(payload); })
            : submitLeadViaFormspree(payload);

        saveRequest.then(function() {
            closeLeadModal();
            addBotMessage(copy.saveSuccess);
            leadSaveBtn.disabled = false;
            updateLanguageUi();
            leadNameInput.value = '';
            leadPhoneInput.value = '';
            leadEmailInput.value = '';
            leadBudgetInput.value = '';
            leadLocationInput.value = '';
            openLeadWhatsapp(payload, whatsappWindow);
        }).catch(function() {
            closeLeadWhatsappWindow(whatsappWindow);
            leadSaveBtn.disabled = false;
            updateLanguageUi();
            leadError.hidden = false;
            leadError.textContent = copy.saveError;
        });
    }

    function sendMessage(value) {
        if (!value || !String(value).trim() || isTyping) {
            return;
        }

        var message = String(value).trim();
        var detectedLanguage = detectLanguageFromText(message);

        if (!languageLocked && detectedLanguage !== activeLanguage) {
            activeLanguage = detectedLanguage;
            updateLanguageUi();
        }

        chatMessages.push({ role: 'user', content: message });
        addMessage('user', message);
        input.value = '';
        setTyping(true);

        setTimeout(function() {
            getBotReply().then(function(reply) {
                setTyping(false);
                addBotMessage(reply);
            }).catch(function() {
                setTyping(false);
                addBotMessage(getReplyForIntent(activeLanguage, 'contact'));
            });
        }, hasConfiguredApi ? 180 : 420);
    }

    updateLanguageUi();
    teaser.classList.remove('is-hidden');

    fab.addEventListener('click', toggleChat);
    refreshBtn.addEventListener('click', resetConversation);
    sendBtn.addEventListener('click', function() {
        sendMessage(input.value);
    });
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage(input.value);
        }
    });
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && isOpen) {
            closeChat();
        }
    });

    for (var i = 0; i < languageButtons.length; i += 1) {
        languageButtons[i].addEventListener('click', function() {
            setLanguage(this.getAttribute('data-lang'), {
                locked: true,
                announce: true
            });
        });
    }

    for (var j = 0; j < quickReplyButtons.length; j += 1) {
        quickReplyButtons[j].addEventListener('click', function() {
            sendMessage(this.getAttribute('data-message'));
        });
    }

    if (callNowBtn) {
        callNowBtn.addEventListener('click', function() {
            window.open('tel:' + phoneLink, '_self');
        });
    }

    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeLeadModal();
        }
    });
    leadCancelBtn.addEventListener('click', closeLeadModal);
    leadSaveBtn.addEventListener('click', saveLead);

    updateFloatingOffsets();
    window.addEventListener('resize', updateFloatingOffsets);
    window.addEventListener('load', updateFloatingOffsets);

    if (window.ResizeObserver && floatingWhatsApp) {
        new ResizeObserver(updateFloatingOffsets).observe(floatingWhatsApp);
    }
})();
