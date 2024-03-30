'use client'

import { Chrono } from './reactChronoClient';

export default function PaperDeadline(){
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
    <Chrono mode="VERTICAL_ALTERNATING" cardHeight={110} disableToolbar={true}>
      {items.map((item, index) => (
        <div className="text-center" key={index}>
          <h1 className="fs-4">{item.title}</h1>
          <p className="lead text-muted">{item.cardTitle}</p>
        </div>
      ))}
    </Chrono>
  );
}
