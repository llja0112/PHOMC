"use client"

import Image from 'next/image';
import PaperDeadline from '@/components/paperDeadline';
import RegistrationFeeDetails from '@/components/registrationFeeDetails';
import mainPic from '@/public/main.jpg';
import mainMobilePic from '@/public/main_mobile.jpg';
import organisersPic from '@/public/organisers.jpg';
import '@/styles/home.css';
import {FaHandshake, FaRocket, FaHouseMedical} from 'react-icons/fa6';
import Link from 'next/link';

export default function () {

  return (
    <>
      <div id="banner">
        <Image className="d-none d-md-block"
        src={mainPic} 
        alt="Main picture" 
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        />
        <Image className="d-md-none"
        src={mainMobilePic}  
        alt="Main picture" 
        sizes="100vw"
        style={{
          width: '100%',
          height: 'auto',
        }}
        />
      </div>
      <div id="content" className="pt-3">
        <div className="container">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="card-body">
                <h5 className="card-title text-center fs-1">
                  18th Singapore Public Health & Occupational Medicine Conference <br /> (PHOMC 2024)
                </h5>
                <p className="card-text text-center text-muted lead">23rd - 24th September 2024</p>
                <p className="card-text">
                  PHOMC 2024 is scheduled to take place at the prestigious <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/travel/venue">Academia</Link>, within the Singapore General Hospital Campus. This year, under the inspiring theme <strong className="text-danger">"Frontiers in Health"</strong>, the conference is organized by the College of Public Health and Occupational Physicians of the Academy of Medicine, Singapore. As an annual gathering, the conference prides itself on assembling a diverse and distinguished panel of public health professionals, practitioners, students, academics, researchers, policy-makers, and stakeholders from across the globe. This multidisciplinary event serves as a vital platform for exchanging cutting-edge insights, fostering intellectual dialogue, and exploring the latest innovations in the field of public health and occupational medicine.
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <FaHouseMedical className="fs-1 text-primary mb-3"/>
                  <h4>Crucial Health Issues</h4>
                  <p>
                    PHOMC 2024 promises an enriching agenda, delving into crucial issues within population health, re-emerging infectious diseases, challenges of an ageing population, health of vulnerable groups, workplace safety and health, and aviation medicine. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <FaRocket className="fs-1 text-primary mb-3"/>
                  <h4>Innovation</h4>
                  <p>
                    With a spotlight on innovations in health, the conference aims to showcase groundbreaking advancements and technological breakthroughs that are setting new paradigms in healthcare delivery and disease prevention. 
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body text-center">
                  <FaHandshake className="fs-1 text-primary mb-3"/>
                  <h4>Collaboration</h4>
                  <p>
                    Finally, the conference will highlight significant opportunities for collaboration within the healthcare ecosystem, emphasising the importance of unified efforts in tackling current and future public health challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h1 className="fs-1 text-center">Abstract Submission Deadlines</h1>
          </div>

          <div className="mb-5">
            <PaperDeadline />
          </div>

          <div className="mb-5">
            <h1 className="fs-1 text-center mb-3">Conference Registration Fees</h1>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <RegistrationFeeDetails />
              </div>
            </div>
          </div>

          <div className="mb-5 text-center">
            <Image className="rounded img-fluid" src={organisersPic} alt={"Organisers' details image"}/>
          </div>
        </div>
      </div>
    </>
  );
}
