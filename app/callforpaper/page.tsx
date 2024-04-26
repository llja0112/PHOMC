"use client"
import PaperDeadline from "@/components/paperDeadline";
import ScrollSpy from "react-ui-scrollspy";

export default function Page () {
  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-md-3">
            <div className="list-group sticky-top">
              <a href="#ImportantDates" className="list-group-item list-group-item-action" data-to-scrollspy-id="ImportantDates">Important Dates</a>
              <a href="#AbstractTopics" className="list-group-item list-group-item-action" data-to-scrollspy-id="AbstractTopics">Abstract Topics</a>
              <a href="#Guidelines" className="list-group-item list-group-item-action" data-to-scrollspy-id="Guidelines">Guidelines and Instructions</a>
              <a href="#Reminders" className="list-group-item list-group-item-action" data-to-scrollspy-id="Reminders">Important Reminders</a>
            </div>
          </div>
          <div className="col-md-9">
            <ScrollSpy activeClass="active">
              <div id="ImportantDates" className="mb-5">
                <h3 className="text-center my-3">Important Dates</h3>
                <PaperDeadline />
              </div>
              <div id="AbstractTopics" className="mb-5">
                <h3 className="text-center my-3">Abstract Topics</h3>
                <p>
                  The 18th Singapore Public Health & Occupational Medicine Conference invites the submission of abstracts for oral and poster presentations on the following topics:
                </p>
                <ol>
                  <li>Primary and Community Care</li>
                  <li>Social and Behavioural Determinants of Health</li>
                  <li>Longevity and Healthy Aging</li>
                  <li>Population Health</li>
                  <li>Infectious Diseases and Outbreak Response</li>
                  <li>Occupational Health/ Aviation Medicine/ Workplace Health Promotion</li>
                  <li>Aviation Medicine</li>
                  <li>Health Services Research/ Programme Evaluation/Policy Evaluation</li>
                  <li>Epidemiology of Diseases (NCDs/IDs/Mental Health)</li>
                  <li>Health Inequality/ Universal Healthcare</li>
                  <li>Maternal-Foetal and Child Health</li>
                  <li>Innovations in Health Technology (e.g. Telemedicine/ Digital Health /mRNA etc.)</li>
                </ol>
              </div>
              <div id="Guidelines" className="mb-5">
                <h3 className="text-center my-3">Guidelines and Instructions</h3>
                <ol>
                  <li>
                    All abstracts must be submitted using the ABSTRACT SUBMISSION FORM below and email to phom2024@ams.edu.sg not later than the 30 June 2024. Only abstracts submitted via the email will be accepted.
                  </li>
                  <li>
                    Abstracts and presentations must be written in English.
                  </li>
                  <li>
                    The abstract text is limited to 300 words. The abstract title, the author(s) or names of institutions are not included in the count of 250 words.
                  </li>
                  <li>
                    References are optional. An abbreviated form is acceptable. e.g. Name et al. Journal 2009;63:93-101.
                  </li>
                  <li>
                    Please do not include tables, graphs and images in the abstract.
                  </li>
                  <li>
                    Abstracts may be revised or resubmitted before the deadline of 1 August 2024.
                  </li>
                  <li>
                    The conference secretariat will send an acknowledgement email to the Author’s email address. If you do not receive the acknowledgement of receipt, kindly inform the secretariat immediately.
                  </li>
                </ol>
                <p className="text-center">
                  <a className="btn btn-lg btn-primary" href="https://custom.cvent.com/FF5457269D734386A53152813B075285/files/96285d1d6944480892b8267f7734ed63.docx">
                    Download Abstract Submission Form
                  </a>
                </p>
              </div>
              <div id="Reminders" className="mb-5">
                <h3 className="text-center my-3">Important Reminders</h3>
                <ol>
                  <li>
                    Presenting author will be responsible to submit the abstract.
                  </li>
                  <li>
                    Each presenting author can submit up to three abstracts.
                  </li>
                  <li>
                    All presenting authors must be paid registrants of the 18th PHOM by 14 August 2024. After this date, presenting authors who have not paid their registration fees will be excluded from the program.
                  </li>
                  <li>
                    The abstracts of authors will be scheduled and included in the Final Program. Full paper of the presentation can be submitted to the Annals after the event for the Editor’s review and approval.
                  </li>
                  <li>
                    The Organising/Scientific Committee will review the abstracts. Following this, notification of acceptance will be sent to the presenter.
                  </li>
                  <li>
                    Submission of abstracts constitutes the authors’ consent to have their accepted abstracts to be presented during the Conference.
                  </li>
                  <li>
                    Please contact the organising secretariat at phom2024@ams.edu.sg should you have any enquiries.
                  </li>
                </ol>
              </div>
            </ScrollSpy>
          </div>
        </div>
      </div>
    </>
  ); 
}
