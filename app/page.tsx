"use client"

import Image from 'next/image';
import { Chrono } from 'react-chrono';
import mainPic from '@/public/main.jpg';
import academiaPic from '@/public/academia.jpg';
import '@/styles/home.css';

export default function () {
  const items = [{
    title: "1st April 2024",
    cardTitle: "Call for papers",
  }, {
    title: "30th June 2024",
    cardTitle: "Deadline for paper submission",
  }, {
    title: "31st July 2024",
    cardTitle: "Notification of paper acceptance",
  }, {
    title: "14th August 2024",
    cardTitle: "Deadline for registration & payment",
  }];

  return (
    <>
      <div id="banner">
        <Image 
        src={mainPic} 
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
              <div className="col-md-4">
                <Image src={academiaPic} className="img-fluid rounded-start" alt="Academia picture" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center fs-1">
                    18th Singapore Public Health & Occupational Medicine Conference <br /> (PHOMC 2024)
                  </h5>
                  <p className="card-text text-center text-muted lead">23rd - 24th September 2024</p>
                  <p className="card-text">
                    PHOMC 2024 is scheduled to take place at the prestigious Academia, within the Singapore General Hospital Campus.
                  </p>
                  <p className="card-text">
                    This year, under the inspiring theme <strong className="text-danger">"Frontiers in Health"</strong>, the conference is organized by the College of Public Health and Occupational Physicians of the Academy of Medicine, Singapore. As an annual gathering, the conference prides itself on assembling a diverse and distinguished panel of public health professionals, practitioners, students, academics, researchers, policy-makers, and stakeholders from across the globe. This multidisciplinary event serves as a vital platform for exchanging cutting-edge insights, fostering intellectual dialogue, and exploring the latest innovations in the field of public health and occupational medicine.
                  </p>
                  <p className="card-text">
                    The 2024 edition of the conference promises an enriching agenda, delving into crucial issues within population health, re-emerging infectious diseases, challenges of an ageing population, health of vulnerable groups, workplace safety and health, and aviation medicine. With a spotlight on innovations in health, the conference aims to showcase groundbreaking advancements and technological breakthroughs that are setting new paradigms in healthcare delivery and disease prevention. Furthermore, it will highlight significant opportunities for collaboration within the healthcare ecosystem, emphasising the importance of unified efforts in tackling current and future public health challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <h1 className="fs-1 text-center">Abstract submission deadlines</h1>
          </div>

          <div className="mb-3">
            <Chrono mode="VERTICAL_ALTERNATING" cardHeight={110} disableToolbar={true}>
              {items.map((item, index) => (
                <div className="text-center" key={index}>
                  <h1 className="fs-4">{item.title}</h1>
                  <p className="lead text-muted">{item.cardTitle}</p>
                </div>
              ))}
            </Chrono>
          </div>

          <div className="mb-3">
            <h1 className="fs-1 text-center">Abstract submission deadlines</h1>
          </div>
        </div>
      </div>
    </>
  );
}
