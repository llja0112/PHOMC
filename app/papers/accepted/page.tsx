import abstractsJson from '@/public/abstract.json';

export default function Page () {
  const data = abstractsJson.data;

  return (
    <div className="container">
      <h3 className="text-center my-3">Accepted Papers</h3>
      {data.map((paper, index) => (
        <div key={index} className="card my-3">
          <div className="card-body">
            <span className="badge text-bg-primary">{paper['Result']}</span> <small className="badge text-bg-secondary">{paper['Poster Number']}</small>
            <h5 className="card-title mt-1">{paper['Presentation Title']}</h5>
            <p>
              {paper['Name']}, <em className="text-muted">{paper['Organisation']}</em>
            </p>
            <a href={paper['URL']} target="_blank" className="btn btn-outline-primary btn-sm">Read Abstract</a>
          </div>
        </div>
      ))}
    </div>
  )
}
