import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-white text-gray-900 py-16 md:py-30 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          Let’s Get Moving: Your Fitness Journey Starts Here.
        </h2>
        <p className="text-gray-600 mb-12">
          Have questions or need guidance? Our trainers are here to support you
          every step of the way. Reach out and start transforming your body
          today!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Map */}
        <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.150776692255!2d85.3557467!3d27.743495100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b0072509099%3A0x6220b60720213d86!2sPlanet%20Fitness%20Kapan!5e0!3m2!1sen!2snp!4v1756135494670!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Kathmandu Map"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          {/* Send a Mail */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Mail /> Send a Mail
            </h3>
            <p className="text-gray-600 text-sm mb-1">
              Send your mail for general enquiries.
            </p>
            <a
              href="mailto:alishshakya44@gmail.com"
              className="text-yellow-600 hover:underline"
            >
              planetfitness@gmail.com
            </a>
          </div>

          {/* Make a Call */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Phone /> Make a Call
            </h3>
            <p className="text-gray-600 text-sm mb-1">
              Make a call for general enquiries.
            </p>
            <a
              href="tel:+9779761814913"
              className="text-yellow-600 hover:underline"
            >
              +977 9761814913
            </a>
          </div>

          {/* Address */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <MapPin /> Address
            </h3>
            <p className="text-gray-600 text-sm">
              Visit Us: Our gym is located at: <br />
              Kapan, Kathmandu, Nepal
            </p>
          </div>

          {/* Social Media */}
          <div className="bg-yellow-50 p-6 rounded-xl shadow hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-semibold mb-2">Social Media:</h3>
            <p className="text-gray-600 text-sm mb-3">
              Connect with Us on Social Media:
            </p>
            <div className="flex space-x-4 text-gray-700">
              <a href="#" className="hover:text-blue-500">
                <Facebook />
              </a>
              <a href="#" className="hover:text-sky-400">
                <Twitter />
              </a>
              <a href="#" className="hover:text-pink-500">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
