'use client'

import { Chrono } from './reactChronoClient';

export default function PaperDeadline(){
  const items = [{
    title: "1st April 2024",
    cardTitle: "Call for papers",
  }, {
    title: "31st July 2024",
    cardTitle: "Deadline for paper submission",
  }, {
    title: "30th August 2024",
    cardTitle: "Notification of paper acceptance",
  }, {
    title: "7th September 2024",
    cardTitle: "Deadline for registration & payment",
  }];

  return (
    <Chrono mode="VERTICAL_ALTERNATING" cardHeight={120} disableToolbar={true}>
      {items.map((item, index) => (
        <div className="text-center" key={index}>
          <h3 className="fs-5">{item.title}</h3>
          <p className="text-muted">{item.cardTitle}</p>
        </div>
      ))}
    </Chrono>
  );
}
