import Image from 'next/image';
import Pfizer from '@/public/Pfizer.png';
import Sanofi from '@/public/Sanofi.png';
import Moderna from '@/public/Moderna.jpg';

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
          <hr />
          <div className="col-md-8 offset-md-2">
            <Image src={Moderna} className="img-fluid rounded my-3" alt="Moderna Logo" />
            <p className="lead">
              About Moderna
            </p>
            <p>
              Moderna’s mission is to deliver the greatest possible impact to people through mRNA medicines. As a pioneer leading advancements in mRNA technology, Moderna has developed medicines at unprecedented speed and efficiency, including one of the earliest and most effective COVID-19 vaccines. Moderna's mRNA platform has enabled the development of therapeutics and vaccines for infectious diseases, immuno-oncology, rare diseases and autoimmune diseases.
            </p>
          </div>
          <hr />
          <div className="col-md-8 offset-md-2">
            <Image src={Sanofi} className="img-fluid rounded my-3" alt="Sanofi Logo" />
            <p className="lead">
              About Sanofi
            </p>
            <p>
              We are an innovative global healthcare company, driven by one purpose: we chase the miracles of science to improve people’s lives. Our team, across some 100 countries, is dedicated to transforming the practice of medicine by working to turn the impossible into the possible. We provide potentially life-changing treatment options and life-saving vaccine protection to millions of people globally, while putting sustainability and social responsibility at the center of our ambitions. For more information, visit www.sanofi.com. 
            </p>
          </div>
        </div>
      </div>
    </>
  ); 
}
