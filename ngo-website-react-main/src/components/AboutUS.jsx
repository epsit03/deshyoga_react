import React from "react";
import "./About.css";
import CardGrid from "./CardGrid";

// Code to make three stacked containers over each other

const AboutUS = () => {
  return (
    <div className="cntn">
      <div className="container-ab">
        <div className="aboutDeshyoga">
          <h1>About Deshyoga</h1>
          <div className="aboutText">
          {/* <p>About Deshyoga</p> */}
            <p>अस्तेय प्रतिष्ठायाम सर्वरत्न उपस्थानम</p>
            <p>
              With its establishment in the year 2019, Deshyoga Charitable Trust started its journey as a non-profit registered organization to promote Yoga in a scientific manner among the masses. Yoga scriptures are studied in Desha Yoga, the sutras and methods described in the scriptures are practiced. The results obtained from ancient knowledge and methods are compared with the scientific knowledge of modern life before being taken to the masses. In this way, being completely satisfied, it is presented for the purpose of physical, mental and spiritual benefit of the general public.
            </p>
            <p>
              From its unassuming origins, the organization blossomed into formal existence on 31/07/2019. Today, it thrives with over 150 dedicated volunteers and a colossal community of 10 Lakh past and present participants spanning India, USA, Canada, Australia, Dubai, and beyond.
            </p>
          </div>
        </div>
      </div>
      <div className="container-ab">
        <div className="aboutDeshyoga">
        <h1>About Founder</h1>
          <div className="aboutText">
            <p>About Founder</p>
            <p> 
Subhash Deshyogi is a Group ‘A’ officer working as Director in the Department of Telecommunications, Ministry of Communications, Government of India. He was born on 10.10.1981 in Karchhana village, Allahabad (now Prayagraj) district in the state of Uttar Pradesh. From his parents Mrs. Vijayalakshmi and late Mr. Basant Lal, he inherited the qualities of piety, hard work and peace-loving. From childhood, the boy Subhash had a keen interest in physics and had a habit of contemplating the profound questions of existence.</p>
          
<p>
As you grew older, your curiosity also increased along with it. In the year 2012, he got a God given opportunity to read and understand Vivekananda literature, as a result his interest shifted from physics to yoga and he saw closely the co-relation between the basic principles of life and physics. He began researching the sacred texts of various religions and literature on spirituality. In 2016, he took a sabbatical for a year to join the postgraduate diploma course at Ramakrishna Mission Vivekananda University, Belur, Howrah, West Bengal and to pursue his curiosity.</p>
</div>
        </div>
      </div>
      <div className="container-ab">
        <div className="aboutDeshyoga">
        <h1>Our Centres</h1>
          <div className="aboutText">
            {/* <p>Our Centres</p>
            <p>
              With its establishment in the year 2019, Deshyoga Charitable Trust started its journey as a non-profit registered organization to promote Yoga in a scientific manner among the masses. Yoga scriptures are studied in Desha Yoga, the sutras and methods described in the scriptures are practiced. The results obtained from ancient knowledge and methods are compared with the scientific knowledge of modern life before being taken to the masses. In this way, being completely satisfied, it is presented for the purpose of physical, mental and spiritual benefit of the general public.
            </p>
            <p>
              From its unassuming origins, the organization blossomed into formal existence on 31/07/2019. Today, it thrives with over 150 dedicated volunteers and a colossal community of 10 Lakh past and present participants spanning India, USA, Canada, Australia, Dubai, and beyond.
            </p> */}
            <CardGrid />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUS;
