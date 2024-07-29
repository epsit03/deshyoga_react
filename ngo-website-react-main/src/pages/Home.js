import React, { useEffect, useLayoutEffect, useState } from "react";
import DonationCard from "../components/DonationCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCard from "../components/FeaturedCard";
import Carousel from "./Carousel";

const Home = () => {
  

  React.useEffect(() => {
    window.scrollTo(0, 0);
    console.log("fdfddf");
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const [data, setdata] = useState([]);
  const [team, setteam] = useState([]);
  const [help, sethelp] = useState([]);
  const [reviews, setreviews] = useState([]);
  
  // useEffect(() => {
  //   const getCauses = async () => {
  //     const res = await axios.get("http://localhost:3001/causes");
  //     console.log(res.data);
  //     setdata(res.data);
  //   };
  //   const getMembers = async () => {
  //     const res = await axios.get("http://localhost:3001/team_members");
  //     console.log(res.data);
  //     setteam(res.data);
  //   };
  //   const getHelp = async () => {
  //     const res = await axios.get("http://localhost:3001/help");
  //     console.log(res.data);
  //     sethelp(res.data);
  //   };
  //   const getReviews = async () => {
  //     const res = await axios.get("http://localhost:3001/reviews/joined");
  //     console.log(res.data, "reviews");
  //     setreviews(res.data);
  //   };
  //   console.log(team);
  //   getCauses();
  //   getReviews();
  //   getMembers();
  //   getHelp();
  // }, []);
  

  const navigate = useNavigate();
  return (
    
    <div>
     
      <img src="..\assets\inaguralDeshyogaPic.png"  class="inaguralPic" loading ="lazy"/>
      <div class="bg">
    
        <div class="banner-text">
          
        <p class="banner-heading-1">
        <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=40&pause=1000&color=FFFFFF&width=800&height=100&lines=What+Do+We+Envision%3F;Our+Formidable+Mission;A+Step+Towards+Satvik+Lifestyle" alt="Typing SVG" /></a>
        </p>

          {/* <p class="banner-heading-2">@Deshyoga</p> */}
          <p class="banner-heading-3">
          We are a non-profit organisation established in 2019 with a mission to promote yoga in scientific manners. The essence of Deshyoga is to explore ancient yogic scriptures and practice their principles and techniques. We attempt to harmoniously blend ancient wisdom with modern scientific knowledge and to extend the benefits of Yoga for physical, mental, and spiritual well-being of all. We invite everyone to embrace our holistic approach of absolute happiness and empowering individuals with physical, mental, and spiritual growth. Join us on this transformative journey, where Yoga becomes a catalyst for positive change and a path towards profound well-being!
          </p>
          
          
        </div>
       
      </div>
      <section class="help-section">
        <p>
          SOCIAL <span style={{ color: "#E77B46" }}>SERVICES</span> WE <span style={{ color: "#E77B46" }}> OFFER!!</span>
        </p>
        <div class="parent-csscard">
        <div class="csscard">
  <img src="./caraousel/IMG_5142.JPG" alt="Avatar" />
  <div class="cntnr">
    {/* <h4><b>John Doe</b></h4> */}
  Free Health Checkups
  </div>
</div>
<div class="csscard">
  <img src="./caraousel/IMG_5833.JPG" alt="Avatar" />
  <div class="cntnr">
    {/* <h4><b>John Doe</b></h4> */}
  Environment
  </div>
</div>
<div class="csscard">
  <img src="./caraousel/image_626081596-1667195649.jpg" alt="Avatar" />
  <div class="cntnr">
    {/* <h4><b>John Doe</b></h4> */}
  Social Welfare
  </div>
</div>
<div class="csscard">
  <img src="./caraousel/a1.jpg" alt="Avatar" />
  <div class="cntnr">
    {/* <h4><b>John Doe</b></h4> */}
    Child Welfare
  </div>
</div>
<div class="csscard">
  <img src="./caraousel/IMG_5190.JPG" alt="Avatar" />
  <div class="cntnr">
    {/* <h4><b>John Doe</b></h4> */}
  Women Empowerment
  </div>
</div>
<div class="csscard">
  <img src="./assets/gap3.png" alt="Avatar" />
  <div class="cntnr">
    {/* <h4><b>John Doe</b></h4> */}
  Mental Health
  </div>
</div>
</div>

   </section>
      <section class="feature-section">
        <p>
          SATVIK <span style={{ color: "#E77B46" }}>LIFESTYLE</span>
        </p>

        <div class="wrapper">
  <div class="cols">
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front">
						<div class="inner">
							<p>Satvik Ahaar</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
						  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Satvik Sanskar</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front">
						<div class="inner">
							<p>Satvik Vichar</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Satvik Yoga</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Shatkarma</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Panchkarma</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Vivek Kriya</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="col" ontouchstart="this.classList.toggle('hover');">
				<div class="container">
					<div class="front" >
						<div class="inner">
							<p>Satvik Karma</p>
              {/* <span>Lorem ipsum</span> */}
						</div>
					</div>
					<div class="back">
						<div class="inner">
							<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
 </div>
 <div  class="sldshw--title">
 <h3><span>OUR </span><span style={{color: "#E77B46"}}>COURSES </span></h3></div>
 <section className="slick">
 <table>
      <tr>
        <td>
          <ul className="sldshw-left">
            <li>
              <h3>Sugar Bharat Chhodo</h3>
              <h4>Reverse diabetes naturally with Deshyoga's proven yogic approach . . .
              </h4>
            </li>
            <li>
              <h3>Motapa Bharat Chhodo</h3>
              <h4>Shed obesity, reclaim your health (or) Defeat weight gain, empower a healthier India . . .</h4>
            </li>
            <li>
              <h3>BP Bharat Chhodo</h3>
              <h4>Manage blood pressure naturally with Deshyoga, cuz' Yoga se Hoga . . . </h4>
            </li>
            <li>
              <h3>Arthritis Bharat Chhodo</h3>
              <h4>End arthritis in India with Deshyoga's proven program . . . </h4>
            </li>
            <li>
              <h3>Cold Yoga</h3>
              <h4>Warm your body, soothe your soul with Deshyoga's Cold Yoga for winter wellness. . . .</h4>
            </li>
            <li>
              <h3>Eye Yoga</h3>
              <h4>See the World Clearly with Natural Eye Care Techniques . . .</h4>
            </li>
          </ul>
        </td>
        <td>
          {/* Slideshow */}
<Carousel/>
        </td>
        <td>
          <ul className="sldshw-right">
            <li>
              <h3>Liver Yoga</h3>
              <h4>A practice to support your body's natural detoxification process . . . .</h4>
            </li>
            <li>
              <h3>Kidney Yoga</h3>
              <h4>Nourish your body and support vital health . . .</h4>
            </li>
            <li>
              <h3>Lung Yoga</h3>
              <h4>Breathe Deep, Live Strong . . .</h4>
            </li>
            <li>
              <h3>Skin Yoga</h3>
              <h4>Deshyoga unveils the secrets of radiant skin through the power of Yoga . . .</h4>
            </li>
            <li>
              <h3>Ear Yoga</h3>
              <h4>Promote balance and well-being through gentle ear exercises . . .</h4>
            </li>
            <li>
              <h3>Mouth Yoga</h3>
              <h4>Smile your way to a younger you with Deshyoga's Mouth Yoga! . . .</h4>
            </li>
          </ul>
        </td>
      </tr>
    </table>
    </section>



        <div class="featured-container">
          {data.map((cause) => {
            return (
              <FeaturedCard
                raised={cause.raised_money}
                goal={cause.goal}
                title={cause.title}
                img={cause.photourl}
              />
            );
          })}
        </div>
      </section>

      <Slider className="w-full flex overflow-hidden">
        {reviews.map((e) => {
          return (
            <section class="testimonials">
              <h1>WHAT TEAM SAYS</h1>

              <div class="dialog">
                <img src="assets/quotes.png" />
                <p style={{ marginBottom: "30px" }}>{e.review_text}</p>

                <div class="triangle"></div>
                <div className="w-full 0  flex iconT justify-center items-center p-6">
                  <img src={e.photoUrl} className="rounded-full" />
                </div>
                <div>
                  <span>
                    <span style={{ color: "#E77B46" }}>
                      {e.first_name} {e.last_name}
                    </span>{" "}
                    | {e.role}
                  </span>
                </div>
              </div>
            </section>
          );
        })}
        {/* <section class="testimonials">
          <h1>WHAT PEOPLE SAY</h1>

          <div class="dialog">
            <img src="assets/quotes.png" />
            <p style={{ marginBottom: "30px" }}>
              People say that life is a journey, and along the way, we encounter
              joys, sorrows, and countless moments that shape our stories. What
              we say and do, the connections we make, and the impact we leave on
              the world are all part of this beautiful narrative
            </p>

            <div class="triangle"></div>
            <span>
              <span style={{ color: "#E77B46" }}>JOHN DOE</span> | NGO
            </span>
          </div>

          <div class="test-photos">
            <img src="assets/test1.png" />
            <img src="assets/test2.png" />
            <img src="assets/test3.png" />
            <img src="assets/test4.png" class="display" />
            <img src="assets/test5.png" class="display" />
          </div>
        </section> */}
      </Slider>
      
    </div>
  );
};

export default Home;
