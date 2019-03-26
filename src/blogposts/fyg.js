const data = {
  title: "find your grail 👟",
  subtitle: "my first full-stack web application",
  date: "january 15, 2018",
  content: [
    {
      header: "first, some background...",
    },
    {
      body: "In the years leading up to university, I had always been interested in coding and design. Despite this, I never really found the commitment to sit down and dive deep into one specific language or tech stack <i>(I know what you're thinking, must've been <b>some</b> interest huh... But hear me out).</i>",
    },
    {
      body: "One day, after hearing about a huge sale at Udemy, I decided to commit once and for all, and picked up five courses, all focused on modern web and mobile development, with emphasis on React, Redux, and Node.",
    },
    {
      body: "After several weeks of working my way through explanations, examples, and revelations, I decided that I was ready to design my first real full-stack web app.",
    },
    {
      header: "the idea",
    },
    {
      body: "As high school rolled around, I started getting more and more interested in the world of fashion, and more specifically, the subculture known as <a href='http://reddit.com/r/streetwear' target='_blank'>streetwear.</a> Realizing that I finally had the core skills I needed to design an app that actually had users, I set out to make a website in which users could buy and sell their new or second-hand clothing.",
    },
    {
      body: "Of course, being as interested as I was in streetwear, I knew that there were already many sites in which people could buy and sell clothes, including, prominently, <a href='https://grailed.com' target='_blank'>Grailed.</a>",
    },
    {
      image: {
        src: "https://s3.amazonaws.com/foodiy-beta/grailed_homepage.png",
        subtitle: "the grailed homepage",
      },
    },
    {
      body: "Although Grailed boasts a huge community, and in turn, an enormous collection of clothing and shoes, their system is fairly complicated. It features a asking price/offer system, as well as integrated payment through credit cards and PayPal.",
    },
    {
      body: "Of course, there's nothing wrong with this, but I just wanted something that was both more <i>local and simple.</i>",
    },
    {
      header: "the landing page",
    },
    {
      body: "Although this project at it's heart was supposed to be a learning experience, I still wanted the app to be something that I would use.",
    },
    {
      body: "One aspect that I really wanted to emphasize was the idea of the ease with which someone could go from wanting an item of clothing, to contacting the seller and ultimately purchasing the item. Therefore, the landing page had to be both minimalist, and fit within the aesthetic of the streetwear scene.",
    },
    {
      image: {
        src: "https://s3.amazonaws.com/foodiy-beta/fyg_homepage.png",
        subtitle: "the landing page",
      },
    },
    {
      body: "In general, I feel that the use of the background image along with a starkly contrasting, transparent, wireframe style search box did enough both aesthetically, as well as functionally, drawing the users eyes onto the search bar.",
    },
    {
      header: "listings",
    },
    {
      body: "Here's an example screen for the listing upload form and a listing details screen:",
    },
    {
      image: {
        src: "https://s3.amazonaws.com/foodiy-beta/fyg_listing_mobile.png",
        subtitle: "a listing",
      },
    },
    {
      header: 'but what about the backend?',
    },
    {
      body: "I have to admit, before taking any courses on backend server technologies, my understanding of backend servers was limited to publically accessible APIs, and the rest was left to wild speculation, which often consisted of mental images of magical code sorcerors.",
    },
    {
      body: "After stumbling through the backend creation of this project, although I have learned a ton, including MongoDB/Mongoose queries, routes & middleware in Express, Google OAuth, and session management with cookies.",
    },
    {
      body: "Also... about deployment. I'm hesitant because, being my first full-stack app, I'm not sure if I would be ready to fix bugs and deal with user complaints while also trying to balance school work and sleep.",
    },
    {
      body: "On top of that, I also have some issues with the overall design...",
    },
    {
      header: "addendum: concerning design",
    },
    {
      body: "<b>Disclaimer:</b> Just because I'm including my thoughts on the design of this app in the addendum doesn't mean I think it's any less important. I just thought it'd fit better here.",
    },
    {
      body: "I want to first start off by saying that I'm quite satisfied with the design of the landing page. I feel that the aesthetic would appeal to the kinds of users that would use this app, and also feel that the contrasting search bar and buttons allow the user to easily understand the flow of the app.",
    },
    {
      body: "However, I feel that the biggest challenge I faced was trying to maintain unity throughout all the pages, while also ensuring that the app was easy to use. Initially, I tried to keep the background picture from the landing page as the background for <i>every</i> page, but in the end, the background was too distracting when a user was trying to focus on actual listings.",
    },
    {
      body: "I then decided to switch to a plain off-white background, and use box-shadows and some basic material design concepts to make my app look sleek and user-friendly. However, the result was a landing page that felt disconnected from the rest of the app.",
    },
    {
      body: "In the future, I really should decide on a colour scheme and a design philosophy in advance of creating anything, so that my app as a whole can feel both <i>cohesive</i> and <i>immersive.</i>",
    },
    {
      body: "Welp. That's about it.",
    },
  ],
}

export default data
