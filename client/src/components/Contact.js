import React from "react";

const Contact = () => {
  return (
    <div className="bg-light p-3">
      <div className="container">
        <div className="row bg-light mt-4 text-center justify-content-center">
          <div className="col-md-3 col-sm-12 m-3 border p-3">
            <label htmlFor="contact" className="fw-bolder text-primary">
              Phone
            </label>
            <div>+91 9021929562</div>
          </div>
          <div className="col-md-3 col-sm-12 m-3 border p-3">
            <label htmlFor="contact" className="fw-bolder text-primary">
              Email
            </label>
            <div>Girishvishnuc98@gmail.com</div>
          </div>
          <div className="col-md-3 col-sm-12 m-3 border p-3">
            <label htmlFor="contact" className="fw-bolder text-primary">
              Address
            </label>
            <div>At post Nachankhede</div>
          </div>
        </div>
        <div className="row mt-3 shadow-lg bg-white">
          <form>
            <div className="col-12 p-4">
              <h5 className="fw-bolder border-bottom p-3">Get in Touch</h5>
              <div className="col border border-secondery p-3">
                <div className="row">
                  <div className="col-md-4 col-sm-12 mb-3">
                    <input
                      placeholder="Name"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 col-sm-12 mb-3">
                    <input
                      placeholder="Phone"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 col-sm-12 mb-3">
                    <input
                      placeholder="Email"
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-12 col-sm-12 mb-3">
                    <div className="m-auto col-8 m-4">
                      <textarea
                        placeholder="Message"
                        type="textarea"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 col-sm-12 mb-3 text-center">
                    <button className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
