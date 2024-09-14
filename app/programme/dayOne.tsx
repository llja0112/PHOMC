"use client"

import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

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
                A/Prof Gan Wee Hoe <br />
                <em>
                  President <br />
                  College of Public Health and Occupational Medicine
                </em>
              </p>
              <p>
                <b>Welcome Remarks</b> <br /> 
                Dr Wong Chiang Yin <br />
                <em>
                  Master <br />
                  Academy of Medicine, Singapore
                </em>
              </p>
              <p>
                <b>Opening Address by Guest of Honour</b><br />
                Ms Lai Wei Lin <br /> 
                <em>
                  Permanent Secretary (Policy and Development)<br />
                  Ministry of Health
                </em>
              </p>
              <p>
                <b>Lifetime Achievement Awards</b>
              </p>
            </td>
          </tr>
          <tr className="table-primary">
            <th scope="row">09:15am</th>
            <td colSpan={3}>
              <p>
                <b>Keynote 1</b> <br />
                <b>Session Chair:</b> Dr Lim Huai Yang
              </p>
              <p>
                <b>Extending the Frontiers in Health through Evidence-based Contextualisation: Contributions from the Social and Behavioural Sciences</b><br />
                Prof David Chan <br/>
                <em>
                  Lee Kong Chian Professor of Psychology and Director of Behavioural Sciences Initiative <br />
                  Singapore Management University
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/13">More details</Link>
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
                <b>Plenary 1: Frontiers in Primary Care</b><br />
                <b>Session Chair:</b> Dr M Premikha
              </p>
              <p>
                <b>The Future of Primary Care in Population Health (& Vice-Versa): Insights from a Personal Journey</b><br />
                Prof Gerald Koh Choon Huat <br />
                <em>
                  Head and Clinical Director (Future Primary Care) <br />
                  MOH Office of Healthcare Transformation
                </em><br />
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/9">More details</Link>
              </p>
              <p>
                <b>Overview of PHC Global Report - 'Implementing the Primary Health Care Approach: a Primer'</b><br />
                Dr Faraz Khalid<br />
                <em>
                  Research & Innovation Officer, Special Program for Primary Healthcare<br />
                  World Health Organization Headquarter
                </em>
              </p>
              <p>
                <b>Hospital Care Beyond Hospital Walls</b><br />
                Dr Stephanie Ko <br />
                <em>
                  Consultant, Advanced Internal Medicine <br />
                  National University Hospital
                </em><br />
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/6">More details</Link>
              </p>
              <p>
                <b>Panel Discussion</b><br />
                <b>Moderator:</b> Dr M Premikha
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">12:30am</th>
            <td colSpan={3}>
              <p>
                <b>Lunch Symposium by Pfizer</b><br />
                <b>The Future of Respiratory Disease Prevention in Healthier Ageing: Insights and Innovations</b>
              </p>
              <p>
                Prof John Arputhan Abisheganaden<br />
                <em>
                  Director and Senior Consultant<br />
                  Health Services & Outcomes Research<br />
                  National Healthcare Group, Singapore
                </em>
              </p>
              <p>
                Dr Tham Tat Yean <br />
                <em>
                  CEO & Family Physician<br />
                  Frontier Healthcare Group
                </em>
              </p>
              <p>
                Prof Tikki Elka Pangestu<br />
                <em>
                  Visiting Professor<br />
                  Yong Loo Lin School of Medicine<br />
                  National University of Singapore
                </em>
              </p>
            </td>
          </tr>
          <tr className="table-primary">
            <th scope="row">01:15pm</th>
            <td colSpan={3}>
              <p>
                <b className="text-muted">
                  Andre Wansaicheong Lectureship
                </b><br />
                <b>Keynote 2</b><br />
                <b>Session Chair:</b> Dr Lim Huai Yang
              </p>
              <p>
                <b>Safeguarding High Risk, Underserved, and Vulnerable Populations: A Public Health Imperative and Strategic Pillar for Economic Development</b><br />
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
                <b>Plenary 2: Longevity Medicine – Pushing the Boundaries for Healthy Aging</b><br />
                <b>Session Chair:</b> Dr Lim Dwee Wee
              </p>
              <p>
                <b>Diet and Healthy Longevity – Examining the Fine Print in the Evidence</b><br />
                Prof Koh Woon Puay <br />
                <em>
                  Professor, Healthy Longevity Translational Research Programme<br />
                  Yong Loo Lin School of Medicine, National University of Singapore 
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/3">More details</Link>
              </p>
              <p>
                <b>Midlife Obesity and Mobility Dysfunction in Late Life</b> <br />
                Dr Rajkumar S/O Dorajoo <br />
                <em>
                  Senior Research Scientist, Laboratory of Metabolic Disease & Ageing Genomics<br />
                  Genome Institute of Singapore, Agency for Science, Technology and Research (A*STAR)
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/12">More details</Link>
              </p>

              <p>
                <b>Closing the Gap between Healthspan and Lifespan: Healthy Longevity Medicine</b><br/>
                Prof Andrea Maier <br />
                <em>
                  Oon Chiew Seng Professor in Medicine, National University of Singapore <br />
                  Co-Founder, NUS Academy for Healthy Longevity, National University of Singapore
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/14">More details</Link>
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
                <b>Plenary 3: Age is Just a Number - Building Frailty Resilient Communities</b><br />
                <b>Session Chair:</b> Dr Lim Dwee Wee
              </p>
              <p>
                <b>Moving from Frailty-readiness to Frailty-resilience: Can We Get There?</b><br /> 
                A/Prof Lim Wee Shiong<br />
                <em>
                  Senior Consultant, Department of Geriatric Medicine and Director, Institute of Geriatrics and Active Aging<br />
                  Tan Tock Seng Hospital 
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/15">More details</Link>
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
                      <b>Session Chair:</b> Dr Tyson Chan
                    </p>
                    
                    <p>
                      <b>Digital Innovation in Population Health</b><br />
                      Adj A/Prof Eugene Shum<br />
                      <em>
                        Director, Community Partnership<br />
                        SingHealth Office of Regional Health< br />
                        Singhealth
                      </em>
                    </p>

                    <p>
                      <b>CHAMP - Automated Chronic Disease Management at Scale</b><br />
                      Dr Wayne Han Lee<br />
                      <em>
                        Associate Consultant, Family Physician<br />
                        Queenstown Polyclinic, National University Polyclinics<br />
                        Assistant Group Chief Technology Officer, Academic Informatics Office<br />
                        National University Health System<br />
                      </em>
                    </p>

                    <p>
                      <b>Inclusive Service Delivery</b><br />
                      Mr Eyung Lim<br />
                      <em>
                        Director, Digital Government Platform<br />
                        Government Technology Agency
                      </em>
                    </p>

                    <p>
                      <b>Mind The Gap - Bridging the Digital Divide in Healthcare</b><br />
                      Adj Asst Prof Ng Yih Yng <br />
                      <em>
                        Director, Digital and Smart Health Office<br /> 
                        Centre for Healthcare Innovation<br/>
                        National Healthcare Group
                      </em>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 2:</strong> Updates in Aviation Medicine & Psychology
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Session Chair:</b> Dr Benjamin Seah
                    </p>
                    <p>
                      <b>Coronary Artery Disease in Aviators – New Concepts and Insights</b><br />
                      Dr Koh Choong Hou <br />
                      <em>
                        Senior Consultant Cardiologist, Nobel Heart Centre<br />
                        Mount Elizabeth Novena Hospital 
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/2">More details</Link>
                    </p>

                    <p>
                      <b>Drivers of Safety Behaviours in Organisations and the Measurement of Organisational Drift</b><br />
                      Ms Cheng Chin Yi<br />
                      <em>
                        Aviation & Organisational Psychologist and Partner<br />
                        Cydel Pte Ltd
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/7">More details</Link>
                    </p>

                    <p>
                      <b>Space Medicine: A Hitch-hikers Guide to the Galaxy</b><br />
                      Cl. Asst. Prof Jimmy Chan Yu Lee<br />
                      <em>
                        Clinical Director and Senior Consultant, Emergency Department <br />
                        Ng Teng Fong General Hospital
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/8">More details</Link>
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
                      <b>Session Chair:</b> Dr Sylvia Teo
                    </p>
                    <p>
                      <b>Migrant Health in Singapore: Infectious and Non-Infectious Challenges Pre- and Post- COVID</b> <br />
                      Adj Asst Prof Shawn Vasoo<br /> 
                      <em>
                        Clinical Director<br />
                        National Centre for Infectious Diseases                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/4">More details</Link>
                    </p>

                    <p>
                      <b>Caring for Migrant Workers- “Joining Hands, Building Bonds"</b><br />
                      Dr Halina Talib<br />
                      <em>
                        Deputy Director (Medical Policy), Assurance, Care & Engagement (ACE) Group<br />
                        Ministry of Manpower
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/0">More details</Link>
                    </p>                                                                                                     

                    <p>
                      <b>Providing Holistic Primary Care through Singapore's First Medical Centre for Migrant Workers -- St Andrew's Migrant Worker Medical Centre</b><br />
                      Dr Loh Yik Hin<br />
                      <em>
                        Chief Executive Officer<br /> 
                        St. Andrew's Community Hospital 
                      </em>
                    </p>
                    <p>
                      <b>Bridging Gaps: Mental Health Care for Migrant Workers Facing Work-Related Injuries</b><br/>
                      Ms Durga Devi Arivan<br/>
                      <em>
                        Manager, Psychotherapy and Counselling<br/>
                        HealthServe
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
