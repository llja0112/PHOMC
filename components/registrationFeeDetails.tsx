export default function RegistrationFeeDetails() {
  return (
    <>
      <table className="table table-striped-columns table-hover table-responsive mb-3">
        <thead>
          <tr>
            <th scope="col">Ticket Type</th>
            <th scope="col">Early Bird Rate<br /><small className="text-muted">(Ends 14th August 2024)</small></th>
            <th scope="col">Regular Rate<br /><small className="text-muted">(Starts 15th August 2024)</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Standard</th>
            <td className="text-center">$750</td>
            <td className="text-center">$880</td>
          </tr>
          <tr>
            <th scope="row">Fellow, Academy of Medicine, Singapore (FAMS)</th>
            <td className="text-center">$600</td>
            <td className="text-center">$720</td>
          </tr>
          <tr>
            <th scope="row">Student / Resident*</th>
            <td className="text-center">$380</td>
            <td className="text-center">$440</td>
          </tr>
          <tr>
            <th scope="row">Ordinary Member, Academy of Medicine, Singapore</th>
            <td className="text-center">$280</td>
            <td className="text-center">$310</td>
          </tr>
          <tr>
            <th scope="row">Day rate</th>
            <td colSpan={2} className="text-center">$500</td>
          </tr>
        </tbody>
      </table>
      <p className="text-danger">
        The prices indicated above do not include the prevailing 9% Goods & Services Tax (GST).
      </p>
      <p className="text-muted mb-5">
        *A certification letter from the residency program or school is needed to qualify for these categories. Please upload the document while registering or email it to <strong className="text-primary">phom2024@ams.edu.sg</strong> within 2 weeks from registration. If we do not receive the required documentary evidence, the organiser reserves the right to cancel the registration.
      </p>
      <p className="text-center">
        <a className="btn btn-lg btn-primary" 
        href="https://web.cvent.com/event/712cfd3d-f3a8-4c6e-82d3-50e958c5a72b/regProcessStep1"
        target="_blank">
          Register Now
        </a>
        <br />
        <em className="text-danger">Register by 14th August 2024 2359hrs to enjoy early bird rates.</em>
      </p>
    </>
  );
}