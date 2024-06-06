"use client"

import Accordion from 'react-bootstrap/Accordion';

export default function DayOne () {
  return (
    <>
      <table className="table table-hover table-border table-sm">
        <thead>
          <tr className="table-dark">
            <th scope="col">Time</th>
            <th scope="col" colSpan={3}>Programme Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">08:00am</th>
            <td colSpan={3}>Registration</td>
          </tr>
          <tr>
            <th scope="row">08:30am</th>
            <td colSpan={3}>
              <p>
                <b>Welcome Address</b><br />
                Prof Gan Wee Hoe <br />
                <em>
                  Council President <br />
                  College of Public Health and Occupational Medicine
                </em>
              </p>
              <p>
                <b>Welcome Remarks</b> <br /> 
                <em>
                  Master <br />
                  Academy of Medicine, Singapore
                </em>
              </p>
              <p>
                <b>Opening Address</b><br />
                Ms Lai Wai Lin <br /> 
                <em>
                  Permanent Secretary (Designate)<br />
                  Ministry of Health
                </em>
              </p>
            </td>
          </tr>
          <tr className="table-primary">
            <th scope="row">09:15am</th>
            <td colSpan={3}>
              <p>
                <b>Keynote 1: Extending the frontiers in health through evidence-based contextualisation: Contributions from the Social and Behavioural Sciences</b><br />
                Prof David Chan <br /> 
                <em>
                  Professor of Psychology and Director of Behavioural Sciences Initiative <br />
                  Singapore Management University
                </em>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">10:00am</th>
            <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-info">
            <th scope="row">10:30am</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 1: Frontiers in Primary Care</b>
              </p>
              <p>
                <b>Overview of PHC Global Report - 'Implementing the Primary Health Care Approach: a Primer'</b><br />
                Dr Faraz Khalid<br />
                <em>
                  Research and Innovation Officer, Primary Health Care and Health Systems Strengthening<br />
                  World Health Organization
                </em>
              </p>
              <p>
                <b>The Future of Primary Care in Population Health (& Vice-Versa): Insights from a Personal Journey</b><br />
                Prof (Dr) Gerald Koh Choon Huat <br />
                <em>
                  Head and Clinical Director (Future Primary Care) <br />
                  MOH Office of Healthcare Transformation
                </em>
              </p>
              <p>
                <b>Hospital Care Beyond Hospital Walls</b><br />
                Dr Stephanie Ko <br />
                <em>
                  Consultant, Advanced Internal Medicine <br />
                  National University Hospital
                </em>
              </p>
              <p>
                <b>Panel Discussion</b><br />
                <b>Moderator:</b> Dr M Premikha
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">12:30am</th>
            <td colSpan={3}>Lunch & Viewing of Posters</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">01:15pm</th>
            <td colSpan={3}>
              <p>
                <b>Keynote 2: Safeguarding High Risk, Underserved, and Vulnerable Populations: A Public Health Imperative and Strategic Pillar for Economic Development</b><br />
                Prof Michelle A. Williams <br /> 
                <em>
                  Joan and Julius Jacobson Professor of Epidemiology and Public Health <br />
                  T.H.Chan School of Public Health <br />
                  Harvard University
                </em>
              </p>
              <p>
                <b>Session Chairperson:</b> Dr Lim Huai Yang
              </p>
            </td>
          </tr>
          <tr className="table-info">
            <th scope="row">02:00pm</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 2: Longevity Medicine – Pushing the Boundaries for Healthy Aging</b>
              </p>
              <p>
                <b>Diet and Healthy Longevity – Examining the Fine Print in the Evidence</b><br />
                Prof Koh Woon Puay <br />
                <em>
                  Professor, Healthy Longevity Translational Research Programme<br />
                  Yong Loo Lin School of Medicine, National University of Singapore 
                </em>
              </p>
              <p>
                <b>Midlife Obesity and Mobility Dysfunction in Late Life</b> <br />
                Dr Rajkumar S/O Dorajoo <br />
                <em>
                  Senior Research Scientist, Laboratory of Metabolic Disease & Ageing Genomics<br />
                  Genome Institute of Singapore, Agency for Science, Technology and Research (A*STAR)
                </em>
              </p>

              <p>
                <b>Closing the Gap between Healthspan and Lifespan: Healthy Longevity Medicine</b><br/>
                Prof Andrea Maier <br />
                <em>
                  Oon Chiew Seng Professor in Medicine, National University of Singapore <br />
                  Co-Founder, NUS Academy for Healthy Longevity, National University of Singapore
                </em>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">03:00pm</th>
            <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-info">
            <th scope="row">03:15pm</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 3: Age is Just a Number - Building Frailty Resilient Communities</b>
              </p>
              <p>
                <b>Moving from Frailty-readiness to Frailty-resilience: Can We Get There?</b><br /> 
                Associate Prof Lim Wee Shiong<br />
                <em>
                  Senior Consultant, Department of Geriatric Medicine and Director, Institute of Geriatrics and Active Aging<br />
                  Tan Tock Seng Hospital 
                </em>
              </p>
              <p>
                <b>Age Well SG</b><br />
                Mr Lee Kwok Ming <br />
                <em>
                  Group Director (Ageing Planning Office) <br />
                  Ministry of Health
                </em>
              </p>
              <p>
                <b>Panel Discussion</b> <br />
                <b>Panelists:</b> Prof Michelle A. Williams, A/Prof Lim Wee Shiong and Mr Lee Kwok Ming <br />
                <b>Moderator:</b> Prof Koh Woon Puay
              </p>

            </td>
          </tr>
          <tr className="table-warning">
            <th scope="row">04:30pm</th>
            <td colSpan={3}><b>Parallel Tracks</b> <small className="text-muted">Click/Tap on tracks for details</small></td>
          </tr>
          <tr className="table-warning">
            <th scope="row"></th>
            <td colSpan={3}>
              <Accordion className="my-2">
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 1:</strong> Frontiers in Digital Health
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Industry Innovations in Digital Health</b><br />
                      Adj Asst Prof Ng Yih Yng <br />
                      <em>
                        Director, Digital and Smart Health Office, Centre for Healthcare Innovation<br/>
                        National Healthcare Group
                      </em>
                    </p>
                    <p>
                      <b>TBD</b><br />
                      Dr Wayne Han Lee<br />
                      <em>
                        Assistant Group Chief Technology Officer<br />
                        National University Health System
                      </em>
                    </p>

                    <p>
                      <b>Digital Innovation in Population Health</b><br />
                      A/Prof Eugene Shum<br />
                      <em>
                        Director, Community Partnership<br />
                        SingHealth Office of Regional Health
                      </em>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 2:</strong> Frontiers in Aviation Medicine
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Coronary Artery Disease in Aviators – New Concepts and Insights</b><br />
                      Clin Asst Prof Koh Choong Hou <br />
                      <em>
                        Senior Consultant Cardiologist, Nobel Heart Centre<br />
                        Mount Elizabeth Novena Hospital 
                      </em>
                    </p>

                    <p>
                      <b>Drivers of Safety Behaviours in Organisations and the Measurement of Organisational Drift</b><br />
                      Ms Cheng Chin Yi<br />
                      <em>
                        Aviation & Organisational Psychologist and Partner<br />
                        Cydel Pte Ltd<br /> 
                      </em>
                    </p>

                    <p>
                      <b>Space Medicine: A Hitch-hikers Guide to the Galaxy</b><br />
                      Cl. Asst. Prof Jimmy Chan Yu Lee<br />
                      <em>
                        Clinical Director and Senior Consultant, Emergency Department <br />
                        Ng Teng Fong General Hospital
                      </em>
                    </p>

                    <p>
                      <b>Exploring Electromyography as an Alternative to Measuring Foot Pedal Force Exertion in Routine Centrifuge Training</b><br />
                      Dr Woo Jia Hao, Alvin<br />
                      <em>
                        Associate Consultant, Aviation Medicine and Singapore Changi Aeromedical Centre <br/>
                        Changi General Hospital
                      </em>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 3:</strong> Advances in Healthcare for the Vulnerable
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                      <p>
                        <b>Migrant Health in Singapore: Infectious and Non-Infectious Challenges Pre- and Post- COVID</b> <br />
                        Adj Asst Prof Shawn Vasoo<br /> 
                        <em>
                          Clinical Director<br />
                          National Centre for Infectious Diseases                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                        </em>                                                                                                                                                                                                                                     
                      </p>

                      <p>
                        <b>Caring for Migrant Workers- “Joining Hands, Building Bonds"</b><br />                                                                                                                                                                                                                                                                                                                                                                                          Dr Halina Talib
                        Deputy Director (Medical Policy)<br />
                        <em>
                          Assurance, Care & Engagement (ACE) Group<br />
                          Ministry of Manpower
                        </em>
                      </p>                                                                                                     

                      <p>
                       <b>Providing Holistic Primary Care through Singapore's First Medical Centre for Migrant Workers -- St Andrew's Migrant Worker Medical Centre</b><br />
                        Dr Loh Yik Hin<br />
                        <em>
                          Chief Executive Officer<br /> 
                          St. Andrew's Community Hospital 
                        </em>
                      </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </td>
          </tr>
          <tr className="table-success">
            <th scope="row">06:15pm</th>
            <td colSpan={3}>End of Day 1</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
