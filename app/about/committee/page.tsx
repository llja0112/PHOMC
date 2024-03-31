import Image from 'next/image';
import ChairmanPic from '@/public/committee/LimJohnWah.jpg';
import ViceChairmanPic from '@/public/committee/JakeGoh.jpg';
import TreasurerPic from '@/public/committee/ElliotEu.jpg';
import JoshuaWongPic from '@/public/committee/JoshuaWong.png';
import AdelinaYoungPic from '@/public/committee/AdelinaYoung.jpg';
import LawsonPic from '@/public/committee/Lawson.jpg';
import AnthonyPic from '@/public/committee/Anthony.jpg';

export default function Page (){
  return(
    <>
      <div className="container mb-5">
        <div className="row">
          <div className ="col-md-8 offset-md-2 text-center">
            <h3>Organising Committee</h3>
            <h4>Chairman</h4>
            <Image src={ChairmanPic} alt="Dr Lim John Wah" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
            <p>Dr Lim John Wah</p>

            <h4>Vice Chair</h4>
            <Image src={ViceChairmanPic} alt="Dr Jake Goh" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
            <p>Dr Jake Goh</p>

            <h4>Treasurer</h4>
            <Image src={TreasurerPic} alt="Dr Elliot Eu" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
            <p>Dr Elliot Eu</p>

            <h4>Members</h4>
            <div className="row">
              <div className="col">
                <Image src={AdelinaYoungPic} alt="Dr Adelina Young" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Adelina Young
                </p>
              </div>
              <div className="col">
                <Image src={JoshuaWongPic} alt="Dr Joshua Wong" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Joshua Wong
                </p>
              </div>
              <div className="col">
                <Image src={LawsonPic} alt="Dr Lawson" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Lim Ther
                </p>
              </div>
              <div className="col">
                <Image src={AnthonyPic} alt="Dr Anthony Li" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Anthony Li
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
