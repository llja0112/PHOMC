import Image from "next/image";
import mapPic from "@/public/map.jpg"

export default function Page () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h3 className="my-3 text-center">Transportation to Conference Venue</h3>

            <p>
              Academia, Singhealth, is just a 10-minute walk from Outram Park MRT Station and a 15-minute bus ride from Downtown Singapore.
            </p>

            <h4 className="text-center">
              Travelling From Airport to Academia
            </h4>

            <p>
              Academia is 28km away from Changi International Airport. Commute is around 30 minutes via Expressway by taxi and 40 minutes by MRT.
            </p>

            <Image src={mapPic} className="img-fluid" alt="Map picture" />

            <p>
              The nearest MRT station to Academia, Singhealth, is Outram Park Station and the locations of nearby bus stops are listed as follows:
            </p>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Bus Stop</th>
                  <th scope="col">Bus Location</th>
                  <th scope="col">Route</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">A</th>
                  <td>Jln Bukit Merah<br/>(Opposite Block 149)</td>
                  <td><strong>SBS Transit:</strong> 147, 196, 197<br /><strong>SMRT:</strong> 167, 961</td>
                </tr>
                <tr>
                  <th scope="row">C</th>
                  <td>New Bridge Road<br/>(After Cantonment Complex)</td>
                  <td><strong>SBS Transit:</strong> 2, 12, 54, 121, 122, 143, 147, 174, 174e<br /><strong>SMRT:</strong> 190, 520, 961<br /><strong>Others:</strong> CT8, CT18</td>
                </tr>
                <tr>
                  <th scope="row">D</th>
                  <td>Before Outram Road</td>
                  <td><strong>SBS Transit:</strong> 124, 143, 147, 166, 197<br /><strong>SMRT:</strong> 61, 961</td>
                </tr>
                <tr>
                  <th scope="row">E</th>
                  <td>Along Outram Road<br/>(Opposite Outram Park MRT Station EW line)</td>
                  <td><strong>SBS Transit:</strong> 33, 63, 121<br /><strong>SMRT:</strong> 75, 851, 970</td>
                </tr>
              </tbody>
            </table>

            <h3>
              Getting Around Singapore
            </h3>

            <p>
              Singapore’s public transport system is fast and efficient and will whizz you to most places without fuss.
            </p>

            <h4>
              By Train
            </h4>

            <p>
              Singapore’s MRT (mass rapid transit) system is probably the fastest way to zip around the city. The extensive rail network means that most of Singapore’s key attractions are within walking distance from an MRT station.
            </p>

            <p>
            You can buy tickets for single trips, but if you intend to use the MRT and basic bus services frequently during your visit, you can buy a Singapore Tourist Pass, a special EZ-Link stored-value card which will allow you unlimited travel for one day (S$10), two days (S$16) or three days (S$20). The cards can be bought at the TransitLink Ticket Office at the following MRT stations― Ang Mo Kio, Bayfront, Bugis, Changi Airport, Chinatown, City Hall, Farrer Park, Harbourfront, Jurong East, Kranji, Lavender, Orchard, Raffles Place, Somerset, Tanjong Pagar and Woodlands. Singapore’s trains and stations are accessible to wheel chair users and the visually impaired, as well as families with strollers.

            </p>

            <h4>
              By Bus
            </h4>

            <p>
              Singapore’s bus system has an extensive network of routes covering most places in Singapore and is the most economical way to get around, as well as being one of the most scenic.
            </p>

            <p>
              You can pay your bus fare using an EZ-Link stored-value card or the Singapore Tourist Pass, which you tap on the card reader located next to the driver as you board. Do remember to tap your card again, on the reader located at the rear exit, when you alight. You can also pay in cash but you need to have exact change. Most buses in Singapore have air-conditioning – a welcome comfort in a tropical city.
            </p>


            <h4>
              By Taxi
            </h4>

            <p>
              Taxis are comfortable and especially handy if you want to go to places not accessible by the bus or MRT. Cabs here are metered, but there may be surcharges depending on when, where and which company’s taxi you board. To get a rough idea of the final fare, check with the driver on the surcharges and ask for a receipt at the end of the trip. You can hail a taxi by the roadside at most places, or by queuing for one at taxi stands found at most shopping malls, hotels and tourist attractions. If you wish to book a cab, you can call a common taxi booking number, 6-DIAL CAB (6342-5222), and your call will be routed to an available taxi company’s call centre.
            </p>
          </div>
        </div>
      </div>
    </>
  ); 
}
