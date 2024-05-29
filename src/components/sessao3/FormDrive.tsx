

    import React from 'react';
    import './FormDrive.tsx'; 
   
    const FormDrive: React.FC = () => {
      return (
        <div className="background">
            <div><h3>Form</h3>
                <div><h1>Forms</h1>
                    <div className="container">
                      <div className="form-container">
                        <form>
                          <div className="form-group">
                            <label htmlFor="location">Fist Name</label>
                            <input
                              type="text"
                              id="location"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="destination">Last Name</label>
                            <input
                              type="text"
                              id="destination"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="destination">Email Address</label>
                            <input
                              type="text"
                              id="destination"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="destination">Coutry</label>
                            <input
                              type="text"
                              id="destination"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="destination">City</label>
                            <input
                              type="text"
                              id="destination"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="destination">Referral Code</label>
                            <input
                              type="text"
                              id="destination"
                            />
                          </div>
                          <button type="submit">SUBMIT</button>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      );
    };
    
    export default FormDrive;


