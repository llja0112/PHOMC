"use client"
import PaperDeadline from "@/components/paperDeadline";

export default function Page () {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <div className="mb-5">
              <h3 className="text-center my-3">Important Dates</h3>
              <PaperDeadline />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-8 offset-md-2">
              <h3 className="text-center my-3">Call for papers</h3>
              <p className="lead">
                The 18th PHOM Call for Paper has <strong className='text-danger'>CLOSED</strong>.
              </p>
              <p>
                Authors who have submitted your papers will be notified of your acceptance status by <strong className="text-primary">31 August 2024</strong>.
              </p>
              <p>
                Presenting Authors whose papers are accepted must be paid registrants of the 18th PHOM by <strong className="text-primary">7 September 2024</strong>. After this date, presenting authors who have not paid their registration fees will be excluded from the program.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ); 
}
