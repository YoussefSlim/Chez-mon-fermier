import React from 'react';
import Footer from '../Footer';
import './style.scss';

const ContactUs = () => {
  return (
    <div className="container my-5">
      <section className="text-center dark-grey-text mb-5">
        <div className="card">
          <div className="card-body rounded-top border-top p-5">
            <h3 className="font-weight-bold my-4">Contactez nous</h3>
            <p className="font-weight-light mx-auto mb-4 pb-2">
              Lorem ipsum dolor, sit amet consectetur
            </p>

            <form className="mb-4 mx-md-5" action="">
              <div className="row">
                <div className="col-md-6 mb-4">
                  <input type="text" id="name" className="form-control" placeholder="Name" />
                </div>
                <div className="col-md-6 mb-4">
                  <input type="email" id="email" className="form-control" placeholder="Email" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mb-4">
                  <input type="text" id="subject" className="form-control" placeholder="Subject" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control rounded"
                      id="message"
                      rows="3"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-info btn-md">
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactUs;
