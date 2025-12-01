"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import AboutPhoneTimeline from "@/components/sections/about/AboutPhoneTimeline";
import FeatureCardEight from "@/components/sections/feature/FeatureCardEight";
import TestimonialCardThree from "@/components/sections/testimonial/TestimonialCardThree";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FooterBaseReveal from "@/components/sections/footer/FooterBaseReveal";
import { Coffee, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="small"
      sizing="small"
      background="dotGrid"
      cardStyle="solid-bordered"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" },
          ]}
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586023578-kujlm7ca.jpg"
          logoAlt="Coffee Shop Logo"
          brandName="BrewHaven"
          button={{
            text: "Order Now",
            href: "https://example.com/order",
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Welcome to BrewHaven"
          description="Experience artisan coffee crafted with passion. From fresh morning brews to smooth afternoon espresso shots."
          tag="Premium Coffee Shop"
          tagIcon={Coffee}
          buttons={[
            { text: "Visit Us", href: "contact" },
            { text: "See Menu", href: "menu" },
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586024764-soc5mlgo.jpg"
          imageAlt="Fresh coffee brewing"
        />
      </div>

      <div id="about" data-section="about">
        <AboutPhoneTimeline
          title="Our Story"
          description="Since 2015, BrewHaven has been serving our community with meticulously sourced, single-origin beans and exceptional customer service."
          tag="About Us"
          tagIcon={Heart}
          phoneOne={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586025969-qhz413z1.jpg",
            imageAlt: "Coffee shop interior",
          }}
          phoneTwo={{
            imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586027146-rcgt5ye2.jpg",
            imageAlt: "Specialty coffee drink",
          }}
          buttons={[
            { text: "Learn More", href: "https://example.com/about" },
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <FeatureCardEight
          title="Our Menu"
          description="Discover our carefully selected coffee selections and specialties"
          tag="Featured Items"
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Classic Espresso",
              description: "Bold and rich, our signature double shot espresso",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586027146-rcgt5ye2.jpg",
              imageAlt: "Espresso",
            },
            {
              id: 2,
              title: "Smooth Cold Brew",
              description: "Refreshing cold brew perfect for summer mornings",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586028289-qjjh3d5z.jpg",
              imageAlt: "Cold brew",
            },
            {
              id: 3,
              title: "Specialty Lattes",
              description: "Seasonal and house-made specialty coffee drinks",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586029611-pmaqi8dr.png",
              imageAlt: "Specialty latte",
            },
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="What Our Customers Say"
          description="Real feedback from coffee lovers in our community"
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah",
              handle: "@sarahloves_coffee",
              testimonial: "The best coffee in town! Every visit feels like coming home. The baristas really care about getting it right.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586030797-f21d6s7y.jpg",
              imageAlt: "Sarah",
            },
            {
              id: "2",
              name: "Marcus",
              handle: "@marcus_espresso",
              testimonial: "BrewHaven has changed my morning routine. Their attention to detail with each cup is incredible.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586032087-k56ha382.jpg",
              imageAlt: "Marcus",
            },
            {
              id: "3",
              name: "Elena",
              handle: "@elena_writes",
              testimonial: "The perfect spot to work or meet friends. Great vibes, excellent coffee, and lovely atmosphere.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586033226-k4g5txfl.jpg",
              imageAlt: "Elena",
            },
            {
              id: "4",
              name: "James",
              handle: "@coffee_connoisseur",
              testimonial: "Single-origin beans sourced ethically - this is what specialty coffee should be. Highly recommend!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586034349-blvhomfy.jpg",
              imageAlt: "James",
            },
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Newsletter"
          title="Stay Updated"
          description="Subscribe to get our latest seasonal brews, special offers, and coffee tips delivered to your inbox."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586035554-npb1zt59.jpg"
          imageAlt="Coffee shop counter"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1764586023578-kujlm7ca.jpg"
          logoWidth={40}
          logoHeight={40}
          copyrightText="© 2025 BrewHaven Coffee. All rights reserved."
          columns={[
            {
              title: "Location",
              items: [
                { label: "123 Main Street", href: "" },
                { label: "Open 7am - 7pm Daily", href: "" },
                { label: "(555) 123-4567", href: "" },
              ],
            },
            {
              title: "Menu",
              items: [
                { label: "Coffee", href: "menu" },
                { label: "Pastries", href: "menu" },
                { label: "Merchandise", href: "" },
              ],
            },
            {
              title: "Connect",
              items: [
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "Contact Us", href: "contact" },
              ],
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}