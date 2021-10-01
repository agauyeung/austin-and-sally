import React from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What time should I arrive to the ceremony?",
    answer:
      "While the official wedding ceremony start time will be listed on your invitations, your guests may want to know how early they can and should arrive. To answer this FAQ, talk to your venue about when the doors will open and guests will be allowed to enter the space. You can then recommend that guests arrive 15 minutes or so before the official ceremony start time so they can get settled before the proceedings.",
  },
  {
    question:
      "Will the ceremony, cocktail hour, and reception take place indoors or outdoors?",
    answer:
      "The ceremony will take place outdoors while cocktail hour and dinner will be indoors.",
  },
  {
    question: "What will the weather be like?",
    answer:
      "While you can't predict the exact forecast for your special day, you can give guests an idea of what the weather is typically like in your wedding location at that time of year. Again, this information will help your guests choose their attire.",
  },
  {
    question: "What will your wedding-day timeline look like?",
    answer:
      "When it comes to your wedding day, guests want to know what to expect. How long will the ceremony be? Will cocktail hour occur immediately following or will there be a break in between? If guests have to travel from the ceremony to the reception venue, how long will that take? When does the cocktail hour end and the reception begin? When will dinner be served? Providing guests with an estimated timeline (noting that it's subject to change) will help them feel more comfortable and able to plan ahead. Here's a template of what a wedding-day timeline should look like, though there's no need to get this detailed on your website—just focus on start and end times for the most important wedding events.  ",
  },
  {
    question:
      "How do I get to the wedding venue? Will transportation be provided?",
    answer:
      "Yes, providing a direction card with your invitations is a nice gesture, but in reality, your guests will most likely lose it. While most everyone has a GPS these days, it's a good idea to provide your guests with directions on your website in case they forget the address or have other issues on the day of. If you're providing a shuttle or other transportation to and from your venue(s), now's the time to share those details, including timing and pickup and drop-off locations.",
  },
  {
    question: "Is there parking available at the wedding venue?",
    answer:
      "For guests who will be driving themselves, parking information is key. Does your venue have its own lot/garage, will there be valet, or are guests expected to find their own parking? If the latter, provided a list of suggested parking lots and/or garages is helpful.",
  },
  {
    question:
      "What type of food and drink will be served during the cocktail hour and reception?",
    answer: "-",
  },
  {
    question:
      "I have dietary restrictions/allergies. What's the best way to let you know?",
    answer:
      "Guests who are gluten-free or have other dietary restrictions and/or allergies may be worried that they won't be able to eat anything at your reception. Your best bet is to include a space on your RSVP card for guests to write any dietary restrictions so you can address them with your caterer. Or, you can include information on your FAQ page about how to reach out to you directly with any concerns.",
  },
  {
    question: "Will there be an open bar?",
    answer: "Read: Your guests want to know if they'll need to bring cash.",
  },
  {
    question:
      "Can I take pictures during the ceremony to post on social media?",
    answer:
      "Definitely an important question, particularly if you're opting for an unplugged wedding. Let your guests know of your preference related to photo-taking and social media usage during your wedding. If you're going the unplugged route, be sure to include signage and a note in your ceremony program reminding guests to put their phones away on your big day.",
  },
  {
    question: "What's the best way to RSVP?",
    answer:
      "Let guests know if they'll be RSVPing via snail mail or if there's online RSVP option as well.",
  },
  {
    question: "When is the RSVP deadline?",
    answer:
      "Shout this one from the rooftops! The last thing you want it to have to track down guests who haven't RSVP'd by the deadline.",
  },
  {
    question: "Do you have a wedding registry?",
    answer:
      "While you should have a separate registry section on your wedding website, you can also include the info (retailers and links to your registry) here as well.",
  },
  {
    question: "Can I bring my gift to the wedding?",
    answer: "-",
  },
  {
    question: "What's your wedding hashtag?",
    answer:
      "If you've selected a wedding hashtag, don't be shy about sharing it! And remember to find opportunities to display your hashtag on your wedding day, too.",
  },
  {
    question: "When will the reception end? Will there be an after-party?",
    answer:
      "While some of your guests may want to party all night, others (particularly older guests and those with young children), will need to know when the event will be over. And if you're hosting an after-party, you can share the information here, too.",
  },
  {
    question:
      "What health and safety measures will you be taking during the event?",
    answer:
      "For those hosting a wedding during the COVID pandemic, providing health and safety information is crucial. In fact, you may want to include a separate wedding website FAQ section or send out an email devoted solely to COVID-related procedures. Whether you're asking your guests to be vaccinated and/or tested before your event, sharing mask and social distancing information, or any other rules you and your vendors are enforcing, it's best to let your guests know in advance so they'll know what to expect. ",
  },
  {
    question:
      "How will you communicate any updated information and/or changes before the wedding?",
    answer:
      "If there's a chance that your wedding will be postponed or otherwise altered, it's best to let your guests know how they'll receive that information (email, text, etc.).",
  },
  {
    question:
      "What's the best way to contact you if I have additional questions?",
    answer:
      "We like the idea of creating a separate email account strictly for wedding-related messages and questions. But you can also include your personal email address or mobile number here—just be prepared to receive some texts as you approach your big day (even though you've likely answered most of your guests' questions here!).",
  },
];

export default function FAQ() {
  const renderQA = (faqs) => {
    return faqs.map(({ question, answer }) => {
      return (
        <>
          <h3>{question}</h3>
          <br />
          <p className={styles.answer}>{answer}</p>
        </>
      );
    });
  };

  return (
    <>
      <h2>Frequently Asked Questions</h2>
      <p>{renderQA(faqs)}</p>
    </>
  );
}
