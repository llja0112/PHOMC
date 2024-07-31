import Image from 'next/image';
import Pfizer from '@/public/Pfizer.png';

export default function Page () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h1>Our sponsors</h1>
            <Image src={Pfizer} className="img-fluid rounded my-3" alt="Pfizer Logo" />
            <p className="lead">
              About Pfizer: Breakthroughs That Change Patients’ Lives
            </p>
            <p>
              At Pfizer, we apply science and our global resources to bring therapies to people that extend and significantly improve their lives. We strive to set the standard for quality, safety and value in the discovery, development, and manufacture of health care products, including innovative medicines and vaccines. Every day, Pfizer colleagues work across developed and emerging markets to advance wellness, prevention, treatments, and cures that challenge the most feared diseases of our time. Consistent with our responsibility as one of the world's premier innovative biopharmaceutical companies, we collaborate with health care providers, governments, and local communities to support and expand access to reliable, affordable health care around the world. For 175 years, we have worked to make a difference for all who rely on us.
            </p>
          </div>
        </div>
      </div>
    </>
  ); 
}
