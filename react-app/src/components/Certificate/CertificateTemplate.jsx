import React, { useState, useRef, useEffect } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import "./certificateStyle.css";
import { useSelector } from "react-redux";

const CertificateTemplate = () => {
  const certificateWrapper = useRef(null);
  const [name, setName] = useState("");
  const { projectDetails } = useSelector((state) => state.projectDetails);
  // const classifiedRiskCategory = useSelector(
  //   (state) => state.classified_risk_category
  // );
  const chat = useSelector((state) => state.chat);
  const [classifiedRiskCategory, setClassifiedRiskCategory] =
    useState("not defined");

  useEffect(() => {
    if (!chat) return;
    console.log(chat.classified_risk_category);
    setClassifiedRiskCategory(chat.classified_risk_category);
  }, [chat]);

  return (
    <div className="App">
      <div className="Meta">
        <div id="downloadWrapper" ref={certificateWrapper}>
          <div id="certificateWrapper">
            <p
              style={{
                position: "absolute",
                top: "590px", // Adjust the top value as needed
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Center horizontally
                maxWidth: "80%", // Set the maximum width as needed
                fontFamily: "fantasy",
                fontSize: "40px",
              }}
            >
              {projectDetails.name}
            </p>
            <p
              style={{
                position: "absolute",
                top: "720px", // Adjust the top value as needed
                left: "290px", // Adjust the right value as needed
                fontFamily: "monospace",
                fontSize: "30px",
                alignContent: "center",
              }}
            >
              for reflecting a steadfast dedication to responsible AI
              implementation.
            </p>
            <p
              style={{
                position: "absolute",
                top: "770px", // Adjust the top value as needed
                left: "290px", // Adjust the right value as needed
                fontFamily: "monospace",
                fontSize: "30px",
                alignContent: "center",
              }}
            >
              {" "}
              The project is categorized as {classifiedRiskCategory} & is
               
            </p>
            <p
              style={{
                position: "absolute",
                top: "820px", // Adjust the top value as needed
                left: "290px", // Adjust the right value as needed
                fontFamily: "monospace",
                fontSize: "30px",
                alignContent: "center",
              }}
            >
              {" "}
              compliant as per EU AI Act.
            </p>
            <img
              src="certificate.png"
              alt="Certificate"
              height={"100%"}
              width={"100%"}
            />
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            exportComponentAsPNG(certificateWrapper, {
              html2CanvasOptions: { backgroundColor: null },
            });
          }}
          style={{ alignContent: "center" }}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default CertificateTemplate;
