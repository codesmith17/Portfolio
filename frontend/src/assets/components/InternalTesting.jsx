import React, { useEffect, useMemo, useState } from "react";
import { FaArrowRight, FaGoogle } from "react-icons/fa";

const InternalTesting = () => {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("eternal-agni-language");
    return ["en", "hi", "mr"].includes(savedLanguage) ? savedLanguage : "en";
  });

  const config = useMemo(() => ({
    groupUrl: "https://groups.google.com/g/eternal-agni-beta-testers",
    playUrl: "https://play.google.com/apps/testing/com.eternalagni.app",
  }), []);

  useEffect(() => {
    const titles = {
      en: "Eternal Agni | Internal Testing",
      hi: "Eternal Agni | आंतरिक परीक्षण",
      mr: "Eternal Agni | अंतर्गत चाचणी",
    };
    document.title = titles[language];
    localStorage.setItem("eternal-agni-language", language);
  }, [language]);

  const copy = {
    en: {
      brandLabel: "Agnihotra timing notifications",
      eyebrow: "Eternal Agni app testing",
      heading: "Stay on time for Agnihotra.",
      lede: "Eternal Agni sends notifications for your Agnihotra timings. Join the beta group first, then opt in to the app through Google Play.",
      accountTitle: "Step 1: Join the Google Group",
      accountCopy: "This step is required. Sign in with the same Google account you use on the Play Store and join the Eternal Agni Beta Testers group. The Play testing link will not work for you until you join the group.",
      joinGroup: "Join the group first",
      stepsTitle: "Complete testing access",
      stepOneTitle: "Join the group first (required)",
      stepOneCopy: "Use your Play Store Google account and join the Eternal Agni Beta Testers group.",
      stepTwoTitle: "Opt in through Google Play",
      stepTwoCopy: "After joining the group, open the testing page and accept the invitation.",
      playLink: "Step 2: Open Play testing",
    },
    hi: {
      brandLabel: "अग्निहोत्र समय सूचनाएँ",
      eyebrow: "Eternal Agni ऐप परीक्षण",
      heading: "अग्निहोत्र का समय न चूकें।",
      lede: "Eternal Agni आपके अग्निहोत्र के समय की सूचनाएँ भेजता है। पहले बीटा समूह से जुड़ें, फिर Google Play पर ऐप में शामिल हों।",
      accountTitle: "चरण 1: Google समूह से जुड़ें",
      accountCopy: "यह चरण आवश्यक है। Google Play पर इस्तेमाल किए जाने वाले उसी Google खाते से Eternal Agni Beta Testers समूह से जुड़ें। समूह से जुड़ने तक Play परीक्षण लिंक आपके लिए काम नहीं करेगा।",
      joinGroup: "पहले समूह से जुड़ें",
      stepsTitle: "परीक्षण की पहुँच पूरी करें",
      stepOneTitle: "पहले समूह से जुड़ें (आवश्यक)",
      stepOneCopy: "अपने Play Store वाले Google खाते से Eternal Agni Beta Testers समूह से जुड़ें।",
      stepTwoTitle: "Google Play पर शामिल हों",
      stepTwoCopy: "समूह से जुड़ने के बाद परीक्षण पृष्ठ खोलें और निमंत्रण स्वीकार करें।",
      playLink: "चरण 2: Play परीक्षण खोलें",
    },
    mr: {
      brandLabel: "अग्निहोत्र वेळेच्या सूचना",
      eyebrow: "Eternal Agni अॅप चाचणी",
      heading: "अग्निहोत्राची वेळ चुकवू नका.",
      lede: "Eternal Agni तुमच्या अग्निहोत्राच्या वेळेबद्दल सूचना पाठवते. आधी बीटा गटात सामील व्हा, त्यानंतर Google Play वर अॅपमध्ये सहभागी व्हा.",
      accountTitle: "पायरी 1: Google गटात सामील व्हा",
      accountCopy: "ही पायरी आवश्यक आहे. Google Play वर वापरत असलेल्या त्याच Google खात्याने Eternal Agni Beta Testers गटात सामील व्हा. गटात सामील होईपर्यंत Play चाचणी लिंक तुमच्यासाठी काम करणार नाही.",
      joinGroup: "आधी गटात सामील व्हा",
      stepsTitle: "चाचणीची प्रवेश प्रक्रिया पूर्ण करा",
      stepOneTitle: "आधी गटात सामील व्हा (आवश्यक)",
      stepOneCopy: "तुमच्या Play Store वरील Google खात्याने Eternal Agni Beta Testers गटात सामील व्हा.",
      stepTwoTitle: "Google Play वर सहभागी व्हा",
      stepTwoCopy: "गटात सामील झाल्यानंतर चाचणी पृष्ठ उघडा आणि आमंत्रण स्वीकारा.",
      playLink: "पायरी 2: Play चाचणी उघडा",
    },
  }[language];

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
  };

  const linkProps = (url) => (url
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : { href: "#", "aria-disabled": "true", onClick: (event) => event.preventDefault() });

  return (
    <main className="testing-page">
      <div className="testing-shell">
        <header className="testing-header">
          <div>
            <p className="testing-brand-name">Eternal Agni</p>
            <p className="testing-brand-label">{copy.brandLabel}</p>
          </div>
          <div className="testing-language-switch" aria-label="Choose language">
            {[['en', 'English'], ['hi', 'हिन्दी'], ['mr', 'मराठी']].map(([value, label]) => (
              <button
                className={language === value ? "active" : ""}
                key={value}
                type="button"
                onClick={() => changeLanguage(value)}
                aria-pressed={language === value}
              >
                {label}
              </button>
            ))}
          </div>
        </header>

        <p className="testing-eyebrow">{copy.eyebrow}</p>
        <h1 className="testing-heading">{copy.heading}</h1>
        <p className="testing-lede">{copy.lede}</p>

        <div className="testing-grid">
          <section className="testing-panel" aria-labelledby="request-access-title">
            <h2 className="testing-panel-title" id="request-access-title">{copy.accountTitle}</h2>
            <p className="testing-panel-copy">{copy.accountCopy}</p>
            <a className="testing-action" {...linkProps(config.groupUrl)}>
              <FaGoogle aria-hidden="true" />
              {copy.joinGroup}
              <FaArrowRight aria-hidden="true" />
            </a>
          </section>

          <section className="testing-panel" aria-labelledby="next-steps-title">
            <h2 className="testing-panel-title" id="next-steps-title">{copy.stepsTitle}</h2>
            <div className="testing-steps">
              <div className="testing-step">
                <span className="testing-step-number">1</span>
                <div>
                  <h3 className="testing-step-title">{copy.stepOneTitle}</h3>
                  <p className="testing-step-copy">{copy.stepOneCopy}</p>
                </div>
              </div>
              <div className="testing-step">
                <span className="testing-step-number">2</span>
                <div>
                  <h3 className="testing-step-title">{copy.stepTwoTitle}</h3>
                  <p className="testing-step-copy">{copy.stepTwoCopy}</p>
                </div>
              </div>
            </div>

            <div className="testing-actions">
              <a className="testing-action secondary" {...linkProps(config.playUrl)}>
                <FaArrowRight aria-hidden="true" />
                {copy.playLink}
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default InternalTesting;
