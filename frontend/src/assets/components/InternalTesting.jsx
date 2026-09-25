import React, { useEffect, useMemo, useState } from "react";
import { FaArrowRight, FaGoogle } from "react-icons/fa";
import becomeTesterGuideImage from "../images/eternal-agni-become-tester-guide.png";
import confirmJoinGroupGuideImage from "../images/eternal-agni-confirm-join-group-guide.png";
import groupGuideImage from "../images/eternal-agni-join-group-guide.png";
import testerConfirmationGuideImage from "../images/eternal-agni-tester-confirmation-guide.png";

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
      stepsTitle: "Follow these 3 steps",
      stepOneTitle: "Sign in",
      stepOneCopy: "Use the Google account you use for Google Play.",
      stepTwoTitle: "Join the group",
      stepTwoCopy: "Tap Join group. You must join before continuing.",
      stepTwoGuide: "Tap Become a tester",
      confirmGroup: "Tap Join group to confirm",
      stepThreeTitle: "Become a tester",
      stepThreeCopy: "Open the Play link and tap Become a tester.",
      stepThreeGuide: "Look for the tester confirmation",
      stepFourTitle: "Install the app",
      stepFourCopy: "When you see You are a tester, install Eternal Agni.",
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
      stepsTitle: "इन 3 चरणों का पालन करें",
      stepOneTitle: "साइन इन करें",
      stepOneCopy: "Google Play वाला Google खाता इस्तेमाल करें।",
      stepTwoTitle: "समूह से जुड़ें",
      stepTwoCopy: "Join group पर टैप करें। आगे बढ़ने के लिए जुड़ना आवश्यक है।",
      stepTwoGuide: "Become a tester पर टैप करें",
      confirmGroup: "पुष्टि करने के लिए Join group पर टैप करें",
      stepThreeTitle: "टेस्टर बनें",
      stepThreeCopy: "Play लिंक खोलें और Become a tester पर टैप करें।",
      stepThreeGuide: "टेस्टर की पुष्टि देखें",
      stepFourTitle: "ऐप इंस्टॉल करें",
      stepFourCopy: "You are a tester दिखने पर Eternal Agni इंस्टॉल करें।",
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
      stepsTitle: "या 3 पायऱ्या पूर्ण करा",
      stepOneTitle: "साइन इन करा",
      stepOneCopy: "Google Play वर वापरत असलेले Google खाते वापरा.",
      stepTwoTitle: "गटात सामील व्हा",
      stepTwoCopy: "Join group वर टॅप करा. पुढे जाण्यासाठी सामील होणे आवश्यक आहे.",
      stepTwoGuide: "Become a tester वर टॅप करा",
      confirmGroup: "पुष्टी करण्यासाठी Join group वर टॅप करा",
      stepThreeTitle: "टेस्टर बना",
      stepThreeCopy: "Play लिंक उघडा आणि Become a tester वर टॅप करा.",
      stepThreeGuide: "टेस्टरची पुष्टी पाहा",
      stepFourTitle: "अॅप इंस्टॉल करा",
      stepFourCopy: "You are a tester दिसल्यावर Eternal Agni इंस्टॉल करा.",
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

        <section className="testing-panel testing-flow" aria-labelledby="next-steps-title">
          <h2 className="testing-panel-title" id="next-steps-title">{copy.stepsTitle}</h2>

          <div className="testing-flow-step">
            <div className="testing-step-heading">
              <span className="testing-step-number">1</span>
              <div>
                <h3 className="testing-step-title">{copy.stepTwoTitle}</h3>
                <p className="testing-step-copy">{copy.stepTwoCopy}</p>
              </div>
            </div>
            <a className="testing-action" {...linkProps(config.groupUrl)}>
              <FaGoogle aria-hidden="true" />
              {copy.joinGroup}
              <FaArrowRight aria-hidden="true" />
            </a>
            <div className="testing-guide-stack">
              <figure className="testing-guide-figure">
                <img
                  className="testing-guide-image"
                  src={groupGuideImage}
                  alt="Google Groups page with an arrow pointing to the Join group button"
                />
              </figure>
              <figure className="testing-guide-figure">
                <img
                  className="testing-guide-image"
                  src={confirmJoinGroupGuideImage}
                  alt="Google Groups join confirmation page with the Join group button"
                />
                <figcaption>{copy.confirmGroup}</figcaption>
              </figure>
            </div>
          </div>

          <div className="testing-flow-step">
            <div className="testing-step-heading">
              <span className="testing-step-number">2</span>
              <div>
                <h3 className="testing-step-title">{copy.stepThreeTitle}</h3>
                <p className="testing-step-copy">{copy.stepThreeCopy}</p>
              </div>
            </div>
            <a className="testing-action secondary" {...linkProps(config.playUrl)}>
              <FaArrowRight aria-hidden="true" />
              {copy.playLink}
            </a>
            <figure className="testing-guide-figure">
              <img
                className="testing-guide-image"
                src={becomeTesterGuideImage}
                alt="Google Play testing invitation with an arrow pointing to Become a tester"
              />
              <figcaption>{copy.stepTwoGuide}</figcaption>
            </figure>
          </div>

          <div className="testing-flow-step">
            <div className="testing-step-heading">
              <span className="testing-step-number">3</span>
              <div>
                <h3 className="testing-step-title">{copy.stepFourTitle}</h3>
                <p className="testing-step-copy">{copy.stepFourCopy}</p>
              </div>
            </div>
            <figure className="testing-guide-figure">
              <img
                className="testing-guide-image"
                src={testerConfirmationGuideImage}
                alt="Google Play testing page with an arrow pointing to the You are a tester confirmation"
              />
              <figcaption>{copy.stepThreeGuide}</figcaption>
            </figure>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InternalTesting;
