import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa qui
            placeat sit possimus minus laborum cumque inventore odit alias.
            Architecto, sapiente quam porro earum veritatis minus tempora
            tenetur distinctio quas! Voluptatum consequatur quam temporibus
            mollitia doloribus vero laborum sint expedita nemo, rem
            exercitationem animi inventore cupiditate. Excepturi similique
            inventore commodi natus explicabo odit quasi beatae eaque! Officia
            labore illum inventore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
            ab laudantium, similique, molestiae ipsa molestias animi dolore
            voluptatem, maxime explicabo! Nostrum molestias, quibusdam libero
            quam nesciunt nemo nulla reprehenderit! Nobis neque nihil asperiores
            laudantium sunt accusantium hic rem culpa animi soluta sequi,
            beatae, blanditiis qui eos. Placeat culpa temporibus facilis
            architecto consequatur eum? Quos veniam aliquam error minima quae?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore iure
            animi nam eos quis officia eaque itaque tempora facere
            necessitatibus nemo repellendus, fugiat cum natus asperiores unde
            sunt provident earum.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            et est odit accusamus, omnis iure accusantium cumque.</p> 
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            et est odit accusamus, omnis iure accusantium cumque.</p> 
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            et est odit accusamus, omnis iure accusantium cumque.</p> 
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default About;
