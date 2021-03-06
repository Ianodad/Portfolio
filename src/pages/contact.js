import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import './css/contact.css';

import Headline from "../components/headline"


const Contact = () => (
	<Layout>
		<SEO title="Contact" />
		<div className="container-fluid blog">
			<div className="contact-body" >
			<div className="contact-form d-flex row align-items-center mx-auto">
				<div className="form-header col-md-12 mb-2 pb-2">
					<h3 className="">
                      <Headline
                        id="contactme"
                        name={"contactme"}
                        headln={"Contact"}
                        data={"T"}
                    />
					</h3>
                    </div>
					<div>
				</div>
				<div className="form-section row col-md-12" style={{width:'250px'}}>
					<form
						className="w-70"
						name="contact"
						method="post"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
					>
						<div className="row d-flex">
							<div className="col-md-6 form-group field a-field a-field_a2 page__field">
								<input
									type="text"
									name="name"
									className="form-control field__input a-field__input"
									placeholder="Name"
								/>
								<span class="a-field__label-wrap">
									<span class="a-field__label">First name</span>
								</span>
							</div>
							<div className="col-md-6 form-group field a-field a-field_a2 page__field">
								<input
									type="mail"
									name="mail"
									className="form-control field__input a-field__input"
									placeholder="Email"
								/>
								<span class="a-field__label-wrap">
									<span class="a-field__label">Email</span>
								</span>
							</div>
						</div>
						<div className="row">
							<div className="col form-group field a-field a-field_a2 page__field">
								<input
									type="text"
									name="subject"
									className="form-control field__input a-field__input"
									placeholder="Subject"
								/>
								<span class="a-field__label-wrap">
									<span class="a-field__label">Subject</span>
								</span>
							</div>
							<div className="col form-group field a-field a-field_a2 page__field">
								<textarea
									type="text"
									name="message"
									className="form-control field__input a-field__input text"
									placeholder="Message"
									rows="5"
									style={{ height: '5em' }}
								/>
								<span class="a-field__label-wrap">
									<span class="a-field__label">Message</span>
								</span>
							</div>
						</div>
						<button type="submit" className="btn btn-info">
							Submit
						</button>
					</form>
				</div>
				<div className="form-footer col-md-12" />
			</div>
		</div>
		</div>
	</Layout>
);

export default Contact;
