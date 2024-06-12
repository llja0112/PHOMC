'use client'
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import DayOne from './dayOne';
import DayTwo from './dayTwo';

export default function Page () {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h3 className="text-center mt-3">Conference Programme</h3>
          <p className="text-center text-muted">Programme is subject to further change</p>
          <Tab.Container defaultActiveKey="first">
            <div className="my-3">
              <Nav variant="pills" className='justify-content-center'>
                <Nav.Item>
                  <Nav.Link eventKey="first">Day 1 - 23rd September</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Day 2 - 24th September</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Tab.Content>
              <Tab.Pane eventKey="first">
                <DayOne />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <DayTwo />
              </Tab.Pane>
            </Tab.Content>          
          </Tab.Container>
        </div>
      </div>
    </div>
    </>
  ); 
}
