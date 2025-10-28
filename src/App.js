"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Header_1 = require("./components/Header");
var Hero_1 = require("./components/Hero");
var Benefits_1 = require("./components/Benefits");
var HowItWorks_1 = require("./components/HowItWorks");
var AboutTeam_1 = require("./components/AboutTeam");
var Pricing_1 = require("./components/Pricing");
var FAQ_1 = require("./components/FAQ");
var Testimonials_1 = require("./components/Testimonials");
var ContactCTA_1 = require("./components/ContactCTA");
var Footer_1 = require("./components/Footer");
var WhatsAppFloat_1 = require("./components/WhatsAppFloat");
require("./App.css");
function App() {
    return (<div className="App min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header_1.default />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero_1.default />
        <Benefits_1.default />
        <HowItWorks_1.default />
        <AboutTeam_1.default />
        <Pricing_1.default />
        <FAQ_1.default />
        <Testimonials_1.default />
        <ContactCTA_1.default />
      </main>
      <Footer_1.default />
      <WhatsAppFloat_1.default />
    </div>);
}
exports.default = App;
