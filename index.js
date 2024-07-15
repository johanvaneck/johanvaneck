function buildSkills() {
  const skills = [
    {
      title: "AWS",
      paragraphs: ["The previous product I worked on was hosted on AWS EC2."],
    },
    {
      title: "Azure",
      paragraphs: [
        "The current product I am working on utilizes Microsoft Azure for cloud infrastructure.",
      ],
    },
    {
      id: "dotnet",
      title: "C# (.NET)",
      paragraphs: [
        "I am currently working on a product using C# and .NET Core.",
        "This product is a web app used in the 3D modeling space.",
        "Some of my latest work includes an integration testing suite for this product.",
      ],
    },
    {
      title: "CSS",
      paragraphs: [
        "CSS is a must for any web development work.",
        "I have used CSS in many projects, including this website.",
        "I prefer to use TailwindCSS, but have no problem doing some vanilla CSS.",
      ],
    },
    {
      title: "Capacitor",
      paragraphs: [
        "Capacitor is a platform that allows you to build cross-platform apps using web technologies.",
        "I was part of a two-man team that built a mobile app using Capacitor using SvelteKit.",
      ],
    },
    {
      title: "Docker",
      paragraphs: [
        "I completed a Docker course in 2023.",
        "Shortly thereafter I set up a Docker system for a new web app our company was building.",
        "I also use Docker in my projects, which I usually deploy to Fly.io.",
      ],
    },
    {
      title: "Git",
      paragraphs: [
        "I use git daily for work and personal projects.",
      ],
    },
    {
      title: "Gradle",
      paragraphs: [
        "We used Gradle as the build for the previous product I worked on.",
        "This was a monolithic web app with the backend written in Kotlin.",
      ],
    },
    {
      title: "HTML",
      paragraphs: [
        "HTML is a must for any web development work.",
        "I have used HTML in many projects, including this website.",
        "Usually, I use HTML in the form of JSX (Used by React, etc).",
      ],
    },
    {
      title: "IndelliJ IDEA",
      paragraphs: [
        "I have been using IntelliJ IDEA as my IDE for Java and Kotlin.",
      ],
    },
    {
      title: "Ionic",
      paragraphs: [
        "I have used Ionic both in my projects and in a professional capacity.",
        "For my professional work, I have used Ionic with SvelteKit to build a mobile app for an existing web app.",
        "In my projects, I have used Ionic with VueJS to build a mobile app for video-sharing between clients and service providers.",
      ],
    },
    {
      title: "Java",
      paragraphs: [
        "Java has a soft spot in my heart, as it is the programming language I was learning when I decided to become a Software Engineer.",
        "I learnt Java and Object Oriented Programming at University.",
        "My first year of work was spent working on a Kotlin web app, which is similar to Java, and also runs on the JVM (Java Virtual Machine).",
      ],
    },
    {
      title: "JavaScript",
      paragraphs: [
        "JavaScript is a must for any web development work.",
        "I generally prefer to use TypeScript, but have no problem doing some vanilla JavaScript.",
        "This web page uses vanilla JavaScript.",
      ],
    },
    {
      title: "Jenkins",
      paragraphs: [
        "We used Jenkins as the CI/CD for API of the previous product I worked on.",
      ],
    },
    {
      title: "Kotlin",
      paragraphs: [
        "I spent the greater part of my professional career working on a web app with a Kotlin backend.",
        "One of my greatest implementations using Kotlin was a tool to generate TypeScript types from Kotlin data classes." +
          " " +
          "This tool was used to generate TypeScript types for the front end of the web app." +
          " " +
          "We used this tool to ensure that the frontend and backend were always in sync." +
          " " +
          "This saved us a lot of time and boilerplate code.",
        "I was also tasked with a big refactoring effort to improve our repository layer with better design patterns and software practices." +
          " " +
          "This involved a PR of about 30k lines of code changed.",
        "But, my most significant solo contribution was implementing an importing system from a competitor's product." +
          " " +
          "The product was using very old software and various inconsistent data formats." +
          " " +
          "I had to write a system that could import data from this product, and convert it to our data format." +
          " " +
          "This involved a lot of text parsing and data manipulation." +
          " " +
          "I used a lot of advanced Regex, and even wrote a custom parser for a custom data format.",
      ],
    },
    {
      title: "Linux",
      paragraphs: [
        "I love Linux." +
          " " +
          "If I didn't have a Macbook for work, I would be using some version of Linux without a doubt.",
        "This also implies that I am very comfortable with the command line." +
          " " +
          "I have been trying to learn as much as possible about the terminal, and have learned a lot of useful tricks." +
          " " +
          "This allows me to be very productive when working on the terminal and automating tedious tasks." +
          " " +
          "This also means that I can work on a Linux server without any issues.",
        "I would classify this as one of my most useful skills.",
      ],
    },
    {
      title: "Lit Web Components",
      paragraphs: [
        "I am currently working on a product using Lit Web Components.",
        "The main shell of the app is in React, but we are using Lit Web Components for the parts of the app that are more performance sensitive.",
        "Lit is a very interesting framework, and I am enjoying using it so far.",
      ],
    },
    {
      title: "Machine Learning",
      paragraphs: [
        "In 2022, I completed a Data Science and Machine Learning course on Udemy.",
        "I learned various basic ML techniques including Regression, Clustering, and basic Neural Networks.",
        "The course was taught in Python, and I used the following libraries: Numpy, Pandas, Scikit-Learn, Matplotlib, Seaborn, Plotly, etc.",
      ],
    },
    {
      title: "NodeJS",
      paragraphs: [
        "I have used NodeJS in a few personal projects",
        "It is a very basic skill in my opinion, and I am comfortable using it.",
      ],
    },
    {
      title: "Nx",
      paragraphs: [
        "Our team has been using Nx as a mono-repo tool for a new set of apps that are currently in development.",
        "Nx is a very powerful tool, and I am enjoying using it so far.",
      ],
    },
    {
      title: "MongoDB",
      paragraphs: [
        "I have come across MongoDB in some courses I've done, but I have not used it much.",
        "However, from what I have seen, it looks pretty straightforward.",
      ],
    },
    {
      title: "Playwright",
      paragraphs: [
        "On a past product I worked on, we used Playwright to write integration tests.",
        "I also used playwright while doing an internship at a company during my studies.",
      ],
    },
    {
      title: "PostgreSQL",
      paragraphs: [
        "Ol' reliable Postgres. I have used Postgres in almost all projects at work, and I am very comfortable with it.",
        "It is still one of the best choices for a relational database, which is most databases anyway, in my opinion.",
      ],
    },
    {
      title: "Python",
      paragraphs: [
        "Python is one of my favorite languages for scripting purposes.",
        "At work, I have used Python for various small scripts, including a script to parse complicated text files.",
        "I was a teaching assistant for a Python course at University.",
        "I also completed a Data Science and Machine Learning course on Udemy, which was taught in Python.",
        "I used Pyhton for implementing a web scraper for my final year thesis at University.",
        "I have also used Python for implementing a trading bot for cryptocurrencies.",
        "Python is a very powerful language, and I am comfortable using it any time.",
      ],
    },
    {
      title: "React",
      paragraphs: [
        "I am currently working on a product using React for our frontend shell.",
        "I have also used React in a few personal projects.",
        "I am very comfortable using it.",
      ],
    },
    {
      title: "Redis",
      paragraphs: [
        "The product I'm currently working on uses Redis for caching and distributing work across multiple instances of the app.",
        "Multiple users can connect to the app, and receive live updates across all connected users.",
      ],
    },
    {
      title: "Regex",
      paragraphs: [
        "I took the time to properly learn regex, and I am very comfortable using it.",
        "It is a very useful skill to have, and I use it often.",
        "One very practical example is for find and replace in my IDE, and also in Vim.",
      ],
    },
    {
      title: "Rider",
      paragraphs: ["I have been using JetBrains Rider as my IDE for C#."],
    },
    {
      title: "Redux",
      paragraphs: ["We are using Redux in the current app I am working on."],
    },
    {
      title: "RTK Query",
      paragraphs: [
        "We are using RTK Query in the current app I am working on.",
      ],
    },
    {
      title: "Rust",
      paragraphs: [
        "I have been learning Rust in my spare time, and I am enjoying it so far.",
        "I read the Rust book, and have been doing some small projects with it.",
        "At work, I have been investigating using Rust with WebAssembly for a current product." +
          " " +
          "The product is in the 3D modeling space, and we are looking at using Rust for some performance-sensitive parts of the app.",
      ],
    },
    {
      title: "SolidJS",
      paragraphs: [
        "I used SolidJS extensively in the previous project I was part of." +
          " " +
          "We were tasked with rewriting the frontend of the product, and we decided to use SolidJS.",
        "The front was written in AngularDart, which became deprecated.",
        "We used SolidJS in combination with Tanstack Query, which I was responsible for setting up.",
        "It was a very successful effort.",
      ],
    },
    {
      title: "Supabase",
      paragraphs: [
        "I have been using Supabase for most of my projects.",
        "It is a very interesting product, and I am enjoying using it so far.",
        "I enjoy the fact that it is open source and uses Postgres.",
      ],
    },
    {
      title: "Svlete & SvelteKit",
      paragraphs: [
        "We used SvelteKit with Ionic and Capacitor for a mobile app at work.",
      ],
    },
    {
      title: "TailwindCSS",
      paragraphs: [
        "Tailwind is such a basic skill, but makes life so much easier.",
        "I use Tailwind in all projects I work on, at work, and personally.",
      ],
    },
    {
      title: "Tanstack Query",
      paragraphs: [
        "We used Tanstack Query in the previous project I was part of.",
        "I was responsible for setting it up, and it was a very successful effort in the end.",
      ],
    },
    {
      title: "TypeScript",
      paragraphs: [
        "TypeScipt is possibly my strongest skill at the moment.",
        "I have recently been using TypeScript in all frontend projects I am working on, at work, and personally.",
        "I have used this in combination with React, Vue, Svelte, Solid, and Lit Web Components in various projects.",
        "I have also used TypeScript in the context of NodeJS on smaller scales.",
      ],
    },
    {
      title: "Unit testing",
      paragraphs: [
        "Unit testing is part of my daily work.",
        "I have written unit tests in Kotlin (JUnit), C# (XUnit), and TypeScript (Vitest).",
      ],
    },
    {
      title: "Vim",
      paragraphs: [
        "I use Vim 😉, and I love it.",
        "It is a meta-skill that boosts my productivity, and just makes text editing more fun.",
        "This is also very useful in command line environments, such as working in shell sessions on a server and wanting to quickly edit a config file.",
      ],
    },
    {
      title: "Vite",
      paragraphs: [
        "I use Vite for frontend tooling in all projects I work on, at work and for personal projects.",
      ],
    },
    {
      title: "VueJS",
      paragraphs: [
        "I used VueJS in a large personal project for video sharing between a client and service provider.",
        "I combined this with Ionic and Capacitor for a mobile app, and also used Tanstack Query as a query caching system.",
      ],
    },
    {
      title: "Web scraping",
      paragraphs: [
        "I developed a web scraper for my final year thesis at University.",
        "This was written in Python, and I used the BeautifulSoup library.",
      ],
    },
    {
      title: "iOS Development",
      paragraphs: [
        "I was responsible for deploying the iOS part of our multi-platform mobile app in the previous project I worked on.",
      ],
    },
  ].sort((a, b) => a.title.localeCompare(b.title));

  const skillsGrid = document.querySelector("#skills-grid");
  const main = document.querySelector("main");

  skills.forEach((skill) => {
    // Add elements to grid
    const a1 = document.createElement("a");
    const toId = skill.id ?? skill.title.toLowerCase().replace(/\W/g, "");
    a1.href = `#${toId}`;
    a1.innerText = skill.title;

    const firstParagraph = skill.paragraphs?.[0];
    if (firstParagraph) {
      a1.title = firstParagraph;
    }
    skillsGrid.appendChild(a1);

    // Add elements to own sections
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    h2.innerText = skill.title;

    const a2 = document.createElement("a");
    a2.id = toId;
    a2.appendChild(h2);

    section.appendChild(a2);

    skill.paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.innerText = paragraph;
      section.appendChild(p);
    });

    const aJet = document.createElement("a");
    aJet.href = "#skills";
    aJet.title = "Back to skills";
    aJet.innerHTML = `<i class="fa-solid fa-jet-fighter-up"></i>`;
    aJet.style.margin = "1rem";
    aJet.classList.add("bounce");

    section.appendChild(aJet);
    main.appendChild(section);
  });
}

function replaceYear() {
  const yearTags = document.querySelectorAll(".replace-year");
  yearTags.forEach((tag) => {
    tag.innerText = new Date().getFullYear();
  });
}

function buildContact() {
  const span = document.createElement("span");
  span.style.display = "flex";
  span.style.justifyContent = "center";
  span.style.gap = "1rem";

  const aGitHub = document.createElement("a");
  aGitHub.href = "https://github.com/johanvaneck";
  aGitHub.innerHTML = `<i class="fa-brands fa-github"></i>`;
  span.appendChild(aGitHub);

  const aLinkedIn = document.createElement("a");
  aLinkedIn.href = "https://www.linkedin.com/in/johan-van-eck-67909a1b5";
  aLinkedIn.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
  span.appendChild(aLinkedIn);

  const aMail = document.createElement("a");
  aMail.href = "mailto:jve.software@gmail.com";
  aMail.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
  span.appendChild(aMail);

  document.querySelectorAll(".contact-info").forEach((tag) => {
    tag.appendChild(span.cloneNode(true));
  });
}

function fetchAbout() {
  const about = document.querySelector(".about");
  fetch("./README.md")
    .then((response) => response.text())
    .then((text) => {
      about.innerHTML = text;
    });
}

replaceYear();
buildSkills();
buildContact();
fetchAbout();
