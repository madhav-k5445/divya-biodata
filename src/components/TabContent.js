import React from "react";
import ImageGallery from "./ImageGallery";

const TabContent = ({ activeTab, goToHome, openTheaterMode }) => {
  const tabHeadings = {
    personal: "వ్యక్తిగత వివరాలు",
    family: "కుటుంబ వివరాలు",
    contact: "సంప్రదింపు",
    images: "చిత్రాలు",
  };

  const content = {
    personal: (
      <div>
        <p>
          <strong>పూర్తి పేరు:</strong> కాండ్రేగుల దివ్య తేజస్వి
        </p>
        <p>
          <strong>విద్యాభ్యాసం:</strong> ఎమ్‌బి‌ఎ
        </p>
        <p>
          <strong>వృత్తి:</strong> ఫైనాన్షియల్ అనలిస్టు
        </p>
        <p>
          <strong>పనిచేసే స్థలం:</strong> స్టేట్ స్ట్రీట్, చెన్నై
        </p>
        <p>
          <strong>కులం:</strong> శెట్టిబలిజ
        </p>
        <p>
          <strong>జనన తేది:</strong> 07/09/1998
        </p>
        <p>
          <strong>నక్షత్రం:</strong> ఉత్తరాభాద్ర
        </p>
        <p>
          <strong>పాదం:</strong> 1
        </p>
        <p>
          <strong>రాశి:</strong> మీన
        </p>
        <p>
          <strong>ఎత్తు:</strong> 5’ 4”
        </p>
        <p>
          <strong>రంగు:</strong> చామనచాయ
        </p>
      </div>
    ),
    family: (
      <div>
        <p>
          <strong>తండ్రి పేరు:</strong> రాము 
        </p>
        <p>
          <strong>వృత్తి:</strong> వ్యాపారం
        </p>
        <p>
          <strong>తల్లి పేరు:</strong> భవానీ లావణ్య
        </p>
        <p>
          <strong>వృత్తి:</strong> గృహిణి
        </p>
        <p>
          <strong>తాతయ్య:</strong> (లేట్) మాధవరావు 
        </p>
        <p>
          <strong>నాన్నమ్మ:</strong> (లేట్) అలివేలమ్మ
        </p> 
        <p>
          <strong>తమ్ముడు:</strong> దుర్గా మాధవ రావు
        </p>        
      </div>
    ),
    contact: (
      <div>
         <p>
          <strong>స్వస్థలం:</strong> రాజోలు
        </p>   
        <p>
          <strong>జిల్లా:</strong> అంబేద్కర్ కొనసీమ
        </p>   
        <p>
          <strong>ప్రస్తుతం నివాసం:</strong> రాజోలు
        </p>   
        <p>
          <strong>తండ్రి నంబర్:</strong>{" "}
          <a href="tel:8008809999" style={{ color: "#00ffcc", textDecoration: "underline" }}>
            8008809999
          </a>
        </p>
      </div>
    ),
    images: <ImageGallery openTheaterMode={openTheaterMode} />,
  };

  return (
    <div className="content-section">
      {/* Styled Heading */}
      <h1 style={{fontWeight: "bold" // Makes the text strong
  }}>{tabHeadings[activeTab]}</h1>
      {content[activeTab]}
      <button className="btn" onClick={goToHome}>
        వెనుకకు
      </button>
    </div>
  );
};

export default TabContent;
