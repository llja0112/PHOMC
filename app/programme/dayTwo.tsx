"use client"

import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';

export default function DayTwo () {
  return (
    <>
      <table className="table table-hover table-border mb-5 table-sm">
        <thead>
          <tr className="table-dark">
            <th scope="col">Time</th>
            <th scope="col" colSpan={3}>Programme Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-success">
            <th scope="row">08:30am</th>
            <td colSpan={3}>Registration</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">09:00am</th>
            <td colSpan={3}>
              <p>
                <b>Keynote 3: Global Occupational Health: Challenges and Opportunities of AI, Automation and Robotics</b><br/>
                Prof Kenji Saito<br/>
                <em>
                  Immediate Past President<br/>
                  American College of Occupational and Environmental Medicine 
                </em><br/>
                <Link className="btn btn-primary btn-sm mt-2" href="/speakers/11">More details</Link>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">09:30am</th>
            <td colSpan={3}>Morning Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-warning">
            <th scope="row">10:00am</th>
            <td colSpan={3}><b>Parallel Tracks</b> <small className="text-muted">Click/Tap on tracks for details</small></td>
          </tr>
          <tr className="table-warning">
            <th scope="row"></th>
            <td colSpan={3}>
              <Accordion className="my-2">
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 4:</strong> Game Changing Technology in Health
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Session Chairs:</b> Dr Benjamin Seah and Dr Lim Gim Hui
                    </p>
                    <p>
                      <b>Technology & Health: A 21st Century Gordian Knot</b> <br/>
                      Prof Benjamin Seet<br/>
                      <em>
                        Group Chairman Medical Board (Research)<br/>
                        National Healthcare Group
                      </em><br/>
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/10">More details</Link>
                    </p>
                    <p>
                      <b>Digital Local Connect and Living Asset Map Using Geospatial Technology</b> <br/>
                      A/Prof Gan Wee Hoe<br/>
                      <em>
                        Chief Executive Officer, SingHealth Community Hospitals<br/>
                        Singapore Health Services
                      </em>
                    </p>
                    <p>
                      <b>Transforming Healthcare Delivery Through Robotics & Automation</b><br/>
                      Adj Asst Prof Selina Seah <br/>
                      <em>
                        Assistant Chief Executive Officer (Transformation), Changi General Hospital <br/>
                        Development Lead, Eastern General Hospital Campus<br/>
                        Director, Centre for Healthcare Assistive & Robotics Technology (CHART) 
                      </em><br />
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/5">More details</Link>
                    </p>

                    <p>
                      <b>Reimagining a Democratised Healthcare Sector</b><br/>
                      Mr Yeo Yong Kiat<br/>
                      <em>
                        Deputy Director, Policy, Strategy & Design<br/>
                        GovTech
                      </em><br />
                      <Link className="btn btn-primary btn-sm mt-2" href="/speakers/1">More details</Link>

                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 5:</strong> Frontiers in Occupational Health
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>
                      <b>Session Chairs:</b> Dr Sylvia Teo and Dr Lim Dwee Wee
                    </p>
                    <p>
                      <b>Heat Resilience - Bridging Research and Policy</b><br/>
                      Dr Sharifah Badriyah Alhadad<br/>
                      <em>
                        Research Fellow, Heat Resilience & Performance Centre, Yong Loo Lin School of Medicine<br/>
                        National University of Singapore  
                      </em>
                    </p>

                    <p>
                      <b>Tackling Shift Work Disorder in a 24-hour Economy</b><br/>
                      Dr Lim Chau Sian<br/>
                      <em>
                        Senior Consultant<br/>
                        Department of Psychological Medicine <br/>
                        Department of Sleep Medicine, Surgery and Science<br/>
                        Changi General Hospital
                      </em> 
                    </p>                    

                    <p>
                      <b>Different Paradigm in Managing Health of Shift Workers</b><br/>
                      Dr Robin Low<br/>
                      <em>
                        Senior Consultant, Changi Aviation Medicine Centre<br />
                        Changi General Hospital
                      </em>
                    </p>

                    <p>
                      <b>Frontiers in Workplace Health Outreach</b><br/>
                      Mr Loh Chin Hui<br/>
                      <em>
                        Director, Workplace Health and Outreach Division<br/>
                        Health Promotion Board
                      </em>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <div>
                      <strong className="text-primary">Track 6:</strong> Free Paper
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>To be announced closer to date</strong>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </td>
          </tr>
          <tr>
            <th scope="row">11:45am</th>
            <td colSpan={3}>
              <p>
                <b>
                  Lunch Symposium by Sanofi - Public Immunisation Programme, the Real World Evidence (RWE) Case Study of RSV
                </b>
              </p>
              <p>
                Dr Chan Si Min<br/>
                <em>
                  Infectious Diseases Senior Consultant, Department of Paediatrics<br/>
                  National University Hospital
                </em>
              </p>
              <p>
                Prof Yung Chee Fu<br/>
                <em>
                  Infectious Diseases Senior Consultant, Department of Paediatrics<br/>
                  KK Hospital
                </em>
              </p>

              <p>
                Dr Liew Woei Kang<br/>
                <em>
                  Paediatrician<br/>
                  Mount Elizabeth Hospital
                </em>
              </p>
            </td>
          </tr>
          
          <tr className="table-primary">
            <th scope="row">12:30pm</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 4: Frontiers in Infectious Disease Prevention and Pandemic Response</b>
              </p>
              <p>
                <b>Session Chair:</b> Dr Lim Huai Yang
              </p>
              <p>
                <b>The Communicable Diseases Agency - Integration for Effective and Coordinated Management of Communicable Diseases</b><br/> 
                Prof Vernon Lee<br/>
                <em>
                  Executive Director<br/>
                  Interim Communicable Diseases Agency<br/>
                  Ministry of Health, Singapore
                </em>
              </p>
              <p>
                <b>Regional Health Security from an Academic Lens</b><br/>
                Prof Hsu Li Yang<br/>
                <em>
                  Director, Asia Centre for Health Security <br/>
                  Vice Dean of Global Health, Saw Swee Hock School of Public Health<br/>
                  National University of Singapore
                </em>
              </p>
              <p>
                <b>Data Management and Analytics for Successful Pandemic Response</b><br/>
                Dr Calvin Chiew<br/>
                <em>
                  Consultant, Analytics, Disease & Behaviour Modelling Co-operative <br />
                  Programme for Research in Epidemic Preparedness & Response (PREPARE) <br />
                  National Centre for Infectious Diseases, Singapore
                </em>
              </p>
              <p>
                <b>Frontiers in Vaccine Technology and Novel Vaccines</b><br/>
                Dr Nicolas Van de Velde<br/>
                <em>
                  Executive Director of Infectious Disease/COVID Health Economics and Outcomes Research<br/>
                  Moderna
                </em>
              </p>
              <p>
                <b>Preparing Singapore for Deliberate Biothreats</b><br/>
                A/Prof Lim Poh Lian<br/>
                <em>
                  Director, High Level Isolation Unit<br/>
                  National Centre for Infectious Diseases<br/>
                  Lead, Biorisk management, Asia Center for Health Security<br/>
                  Saw Swee Hock School of Public Health, National University of Singapore
                </em>
              </p>
              <p>
                <b>Panel Discussion</b><br />
                <b>Moderator:</b> Dr Wycliffe Wei
              </p>
            </td>
          </tr>
          
          <tr>
            <th scope="row">02:30pm</th>
            <td colSpan={3}>Afternoon Teabreak & Viewing of Posters</td>
          </tr>
          <tr className="table-primary">
            <th scope="row">03:00pm</th>
            <td colSpan={3}>
              <p>
                <b>Plenary 5: Frontiers in Healthcare Policy Innovation</b>
              </p>
              <p>
                <b>Session Chair:</b> Dr Lim Huai Yang
              </p>
              <p>
                <b>Transforming Singapore’s Health Regulatory Ecosystem - Regulating the Future of Health</b><br/>
                Adj A/Prof Raymond Chua<br/>
                <em>
                  Deputy Director-General Health (Health Regulation Group)<br/>
                  Ministry of Health, Singapore
                </em>
              </p>
              <p>
                <b>Homecare in Japan: Lessons for an Aging Asia</b><br/>
                Dr Haruki Matsumoto<br/>
                <em>
                  Director, Healthcare Safety and Inspection Office, Health Policy Bureau<br/>
                  Ministry of Health, Labour and Welfare<br />
                  Government of Japan
                </em>
              </p>

              <p>
                <b>People Respond to Incentives. The Rest is Commentary</b><br/>
                A/Prof Jeremy Lim<br/>
                <em>
                  Public Health Specialist
                </em>
              </p>

              <p>
                <b>Health Policy Making in the Real World</b><br/>
                Prof Lee Chien Earn<br/>
                <em>
                  Deputy Group CEO (Regional Health System), SingHealth<br/>
                  Chairman, Eastern General and Community Hospitals Planning Committee
                </em>
              </p>

              <p>
                <b>Panel Discussion</b><br/>
                <b>Moderator:</b> A/Prof Matthias Toh
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">04:45pm</th>
            <td colSpan={3}>Awards Presentation</td>
          </tr>
          <tr>
            <th scope="row">05:00pm</th>
            <td colSpan={3}>Closing Ceremony</td>
          </tr>
          <tr className="table-success">
            <th scope="row">05:15pm</th>
            <td colSpan={3}>End of 18th PHOM</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
