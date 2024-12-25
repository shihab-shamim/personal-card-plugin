	import { createRoot } from 'react-dom/client';
	import './style.scss';
	import Style from './Components/Common/Style';
	// import BlockName from './Components/Frontend/BlockName';
	// import { RichText } from "@wordpress/block-editor";


	document.addEventListener('DOMContentLoaded', () => {
		const blockNameEls = document.querySelectorAll('.wp-block-b-blocks-test-purpose');
		blockNameEls.forEach(blockNameEl => {
			const attributes = JSON.parse(blockNameEl.dataset.attributes);
			const {
				purposeType,
				name,
				passsionate,
				company,
				about,
				social,
				target,
				Profile, } = attributes;

			createRoot(blockNameEl).render(<>
				<Style attributes={attributes} id={blockNameEl.id} />
				<div className="profile-card">
						<div className="profile-header">
							<img className="profile-photo" src={Profile} alt="Profile Photo" />
						</div>
						<div className="profile-info">
							
							{/* <h3 dangerouslySetInnerHTML={{__html}}
							value={name}/> */}
							<h3 dangerouslySetInnerHTML={{__html:name }}  className="rich-text-placeholder name"/>
							
							
				
							
							<p dangerouslySetInnerHTML={{__html:passsionate }}  className="rich-text-placeholder name"/>


							
							<p dangerouslySetInnerHTML={{__html:company }}  className="rich-text-placeholder name"/>

				
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
							
							<p dangerouslySetInnerHTML={{__html:about }}  className="rich-text-placeholder name"/>

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
				
				
			</>);

			blockNameEl?.removeAttribute('data-attributes');
		});
	});