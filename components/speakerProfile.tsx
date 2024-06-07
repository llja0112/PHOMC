import Image from 'next/image';

export default async function SpeakerProfile ({
  index,
  speakerName,
  speakerTitle,
  speakerBio,
  presentationTitle,
  presentationSynopsis
}) {
  const imageSrc = await import('@/public/speakers/' + index + ".jpg");

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <div>
              <Image 
                src={imageSrc}
                alt={speakerName + " Image"}
                height={120}
                className='rounded-2 me-4 my-2'
              />
            </div>
            <div className='col-md-10 flex-grow-1'>
              <h1>{speakerName}</h1>
              <p style={{whiteSpace: "pre-line"}} className="lead text-muted">
                {speakerTitle}
              </p>
            </div>
          </div>
          <p style={{whiteSpace: "pre-line"}}>{speakerBio}</p>
          <small className="text-muted">PHOM 2024 Talk details</small>
          <h3 className="text-primary">{presentationTitle}</h3>
          <p style={{whiteSpace: "pre-line"}}>{presentationSynopsis}</p>
        </div>
      </div>
    </>
  )  
}
