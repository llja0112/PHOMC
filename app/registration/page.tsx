import RegistrationFeeDetails from "@/components/registrationFeeDetails";

export default function Page () {
  return (
    <>
      <div className="container">
        <h3 className="text-center my-3">Registration Fee</h3>
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <RegistrationFeeDetails />
          </div>
        </div>
        <hr />
        <h3 className="text-center my-3">Billing Registration Fee to Organisation</h3>
        <div className="row mb-5">
          <div className="col-md-8 offset-md-2">
            <p>
              For individual/group registration that require billing to the organisation, please download and submit the completed form to <strong className="text-primary">phom2024@ams.edu.sg</strong>. 
            </p>
            <p className="text-center">
              <a className="btn btn-lg btn-primary" href="https://custom.cvent.com/FF5457269D734386A53152813B075285/files/408263b0ba8f46d0be99c59f245239b1.xlsx">
                Download Registration Form
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  ); 
}
