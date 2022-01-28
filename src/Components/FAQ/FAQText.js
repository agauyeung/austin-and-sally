import Link from "next/link";

const faqs = [
  {
    question: "Do you have a preference regarding gifts?",
    answer: (
      <>
        Yes! Please kindly click the gift button at the upper right corner of
        this page or{" "}
        <Link href="/gifting">
          <a>click here</a>
        </Link>
        .
      </>
    )
  },
  {
    question:
      "What health and safety measures will you be taking during the event?",
    answer:
      "Subject to change depending on county regulations, but we require that guests show proof of vaccination against COVID-19 or bring a negative COVID test result from a test taken 72 hours or less before our wedding."
  },
  {
    question: "What time should I arrive to the ceremony?",
    answer:
      "Try to arrive at least 15 minutes prior to the ceremony, which will be at 4:00pm."
  },
  {
    question:
      "Will the ceremony, cocktail hour, and reception take place indoors or outdoors?",
    answer:
      "The ceremony will take place outdoors while cocktail hour and dinner will be indoors."
  },
  {
    question: "What will the weather be like?",
    answer: "It is likely it will be quite hot since the venue is in San Ramon."
  },
  {
    question: "What will your wedding-day timeline look like?",
    answer:
      "The ceremony will run roughly from 4:00 to 4:30pm at the Garden Terrace. Cocktail hour will be from 4:30 to 5:30 indoors at the Clubhouse. Dinner will begin around 6:00 and doors close at 10:00pm."
  },
  {
    question: "Is there parking available at the wedding venue?",
    answer: "There is a parking lot at the entrance of the venue."
  },
  {
    question: "Will there be an open bar?",
    answer: (
      <>
        Yes!
        <br />
        <br />
        The following are subject to change:
        <br />
        Wine, Beer, and Champagne
        <br />
        Draft Beer; House Chardonnay, Cabernet and Pinot Grigio Wines
        <br />
        House Champagne and Apple Cider
        <br />
        Assortment of Soft Drinks
        <br />
        Choice of No Host Mixed Drinks
      </>
    )
  },
  {
    question: "What's your wedding hashtag?",
    answer: "#austinsally2022"
  },
  {
    question:
      "What's the best way to contact you if I have additional questions?",
    answer: (
      <>
        Please send over an email by clicking the mail button at the upper right
        corner of this page or by directly emailing{" "}
        <a href="mailto:austin.and.sally.2021@gmail.com">
          austin.and.sally.2021@gmail.com
        </a>
      </>
    )
  }
];

export default faqs;
