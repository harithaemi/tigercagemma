import React from 'react';
import callred from '../assets/callred.png';
import clock from '../assets/clock.png';
import locationred from '../assets/locationred.png';
import insta from '../assets/instagrey.svg';
import youtube from '../assets/ytgrey.svg';
import whatsapp from '../assets/whatsappgrey.svg';
import mail from '../assets/mailgrey.svg';
import call from '../assets/callgrey.svg';


const Contact = () => {
  return (
    <div className="bg-black p-6 flex flex-col items-center justify-start w-full">
      <h1 className="text-[#ff0000] text-3xl m-4 font-bold p-2">CONTACT US</h1>

      {/* Location Section */}
      <div className="flex flex-col items-center p-4 mt-4 w-full">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Kokkala,+Veliyannur,+Thrissur,+Kerala+680021"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-3/4 mx-auto"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d125530.21815593942!2d76.1273432029402!3d10.514893068145488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba7ee390c1a9671%3A0xe42d1a67e7ea3d85!2sKokkala%2C%20Veliyannur%2C%20Thrissur%2C%20Kerala%20680021!3m2!1d10.5149037!2d76.20974509999999!5e0!3m2!1sen!2sin!4v1760522867839!5m2!1sen!2sin"
            className="w-full h-[400px] rounded-xl shadow-lg"
            style={{ border: 0, pointerEvents: 'none' }}
            loading="lazy"
            title="Google Maps"
          />
        </a>

        <div className="flex flex-col items-center mt-4">
          <img
            src={locationred}
            alt="location"
            className="w-8 h-8 m-2 object-contain"
          />
          <p className="text-white text-center">
            Kokkala, Veliyannur, Thrissur, Kerala 680021
          </p>
        </div>
      </div>

      {/* Contact Numbers */}
      <div className="flex flex-col items-center p-4 mt-2">
        <img
          src={callred}
          alt="call"
          className="w-7 h-7 m-2 object-contain"
        />
        <p className="text-white text-center">
          +91 9947743378 , +91 8593004445 , +91 7012693251
        </p>
      </div>

      {/* Timing Section */}
      <div className="flex flex-col items-center m-4">
        <img
          src={clock}
          alt="timing"
          className="w-8 h-8 m-2 object-contain"
        />
        <p className="text-white text-center">Monday - Saturday</p>
        <p className="text-white text-center">Morning - 5:30 am to 9:30 am</p>
        <p className="text-white text-center">Evening - 4:30 pm to 9:30 pm</p>
      </div>
      <hr className="border-t-2 border-white w-3/4 my-6 opacity-70" />
      <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
        <a href="mailto:tigercagemma@gmail.com" target="_blank" rel="noreferrer">
          <img src={mail} alt="mail" className="w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
        </a>
        <a href="tel:+919947743378">
          <img src={call} alt="call" className="w-7 h-7 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
        </a>
        <a href="https://wa.me/919947743378" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp" className="w-7 h-7sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
        </a>
        <a href="https://www.instagram.com/tigercagemma?igsh=MThkdDRnd2RvemJrNw==" target="_blank" rel="noreferrer">
          <img src={insta} alt="instagram" className="w-7 h-7 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
        </a>
        <a href="https://youtube.com/@tigercagemma?si=9hzKaV4amQ6svQdK" target="_blank" rel="noreferrer">
          <img src={youtube} alt="youtube" className="w-7 h-7 sm:w-10 sm:h-10 hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default Contact;

