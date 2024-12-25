import { RichText, useBlockProps } from "@wordpress/block-editor";

import Settings from "./Settings/Settings";
import Style from "../Common/Style";

const Edit = (props) => {
  const { attributes, setAttributes, clientId } = props;
  const {
    purposeType,
    name,
    passsionate,
    company,
    about,
    social,
    target,
    Profile,
  } = attributes;

  return (
    <>
      <Settings {...{ attributes, setAttributes }} />

      <div {...useBlockProps()}>
        <div className="profile-card">
          <div className="profile-header">
            <img className="profile-photo" src={Profile} alt="Profile Photo" />
          </div>
          <div className="profile-info">
            
            <RichText
              value={name}
              onChange={(name) => setAttributes({ name: name })}
            ></RichText>

            <RichText
              className="job-title"
              value={passsionate}
              onChange={(pass) => setAttributes({ passsionate: pass })}
            ></RichText>
            <RichText
              className="website"
              value={company}
              onChange={(com) => setAttributes({ company: com })}
            ></RichText>

            <div className="buttons">
              <a href="#" className="button-1 email">
                <img
                  className="gmail"
                  src="https://i.ibb.co/sJLSZzm/gmail.png"
                  alt="Gmail Icon"
                />{" "}
                Email
              </a>
              <a href="#" className="button-2 linked">
                <img
                  className="linkedin"
                  src="https://i.ibb.co.com/sRm0tpG/link.png"
                  alt="Gmail Icon"
                />{" "}
                Linkedin
              </a>
            </div>

            <div className="about">
              <h3 id="about-title">About</h3>
              <RichText
                value={about}
                id="about-des"
                onChange={(ab) => setAttributes({ about: ab })}
              ></RichText>
            </div>
            {social && (
              <div className="social-links">
                <a
                  href="https://www.facebook.com/Shihab.shamim.2024"
                  target={target ? "_blank" : "_self"}
                  rel={target ? "noopener noreferrer" : undefined}
                >
                  <img
                    src="https://i.ibb.co.com/X4ymh8H/FACEBOOK.png"
                    alt="FACEBOOK"
                  />
                </a>


                <img
                  src="https://i.ibb.co/7Q23vbf/linkedin.png"
                  alt="LINKEDIN"
                  onClick={() => { window.open( "https://www.linkedin.com/in/shihabshamim/", target ? "_blank" : "_self" );
                  }}
                  style={{ cursor: "pointer" }} 
                />

                <a
                  href="https://github.com/shihab-shamim"
                  target={target ? "_blank" : "_self"}
                  rel={target ? "noopener noreferrer" : undefined}
                >
                  <img
                    src="https://i.ibb.co.com/sVz3xWm/github.png"
                    alt="GitHub"
                  />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
