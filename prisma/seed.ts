import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

// Main async function to encapsulate all seeding logic
async function main() {
  console.log("Starting the seeding process...");

  // --- Step 1: Clean up existing data ---
  // Delete all Post and Category records for a clean start on every run.
  console.log("Deleting existing Post records...");
  await prisma.post.deleteMany({});
  console.log("Deleting existing Category records...");
  await prisma.category.deleteMany({});
  console.log("Successfully cleared existing data.");

  // --- Step 2: Create Categories ---
  // Create the core categories for the Churnalyzer platform based on your new structure.
  console.log("Creating categories...");
  const createdCategories = await prisma.category.createMany({
    data: [
      { slug: "tech-companies", name: "Tech Companies" },
      { slug: "startups", name: "Startups" },
      { slug: "products", name: "Products" },
      { slug: "platforms", name: "Platforms" },
    ],
  });
  console.log(`Successfully created ${createdCategories.count} categories.`);

  // Fetch the created categories to get their IDs for post relations
  const categories = await prisma.category.findMany();
  const categoryMap = categories.reduce((acc, category) => {
    acc[category.slug] = category.id;
    return acc;
  }, {} as Record<string, string>);

  // --- Step 3: Create Case Studies (Posts) ---
  console.log("Creating detailed case studies (Posts)...");

  await prisma.post.createMany({
    data: [
      // 1. Nokia
      {
        slug: "nokia-the-fall-of-a-mobile-giant",
        title: "Nokia: An Autopsy of a Market Leader That Lost Its Way",
        excerpt:
          "Once commanding over 50% of the mobile phone market, Nokia was an unstoppable force. How did it fail to see the iPhone and Android revolution coming? This deep-dive autopsy examines the fatal cost of technological arrogance and slow adaptation.",
        imageUrl:
          "https://images.unsplash.com/photo-1598331666194-27b3a41b5282?q=80&w=2070&auto=format&fit=crop",
        categoryId: categoryMap["tech-companies"],
        content: `
### Introduction: The Undisputed King of Mobile
In the late 1990s and early 2000s, the word "cell phone" was synonymous with one name: Nokia. This Finnish behemoth captured the hearts and hands of millions with its durable hardware, intuitive user interface, and legendary battery life. With iconic models like the 3310 achieving cultural icon status, Nokia wasn't just a market leader; it was the market. Their slogan, "Connecting People," was a reality they had built, one incredibly reliable device at a time. The brand represented quality, simplicity, and innovation in a way that no competitor could match.

### The Golden Age: A Nokia in Every Pocket
During its zenith, Nokia's dominance was absolute. The company's culture of innovation was backed by world-class hardware engineering that produced some of the most beloved gadgets in history. Their Symbian operating system, while complex under the hood, was highly capable for its era, supporting a burgeoning ecosystem of third-party applications. The company's financial success was staggering, with a market share that consistently hovered around 40-50% globally. Nokia was a well-oiled machine, churning out hit after hit, from the business-focused Communicator series to the fashion-forward 7280 "lipstick" phone. They seemed invincible, a titan of industry with no conceivable challenger on the horizon.

### The Cracks Appear: Arrogance and Complacency
Everything changed on January 9, 2007, when Steve Jobs unveiled the Apple iPhone. Initially, Nokia's executives were dismissive. They saw a fragile, expensive device with terrible battery life that lacked a physical keyboard. Their deep-rooted belief in their hardware superiority and their overconfidence in Symbian blinded them to the paradigm shift that was occurring. They failed to grasp that the battleground was moving from hardware to software and user experience. They viewed the iPhone as a niche product, not a torpedo aimed at the heart of their empire. Simultaneously, they underestimated Google's Android, viewing it as a fragmented, less-polished alternative to their tightly integrated system. This combination of arrogance and a failure to recognize the rising importance of a developer-centric software ecosystem created the perfect storm.

### The Downfall: Crushed by a Revolution
As consumers flocked to the intuitive, app-driven experiences of iOS and Android, Nokia's Symbian felt increasingly clunky and outdated. The company's internal bureaucracy and competing divisions stifled any chance of a swift, cohesive response. Their desperate pivot to Microsoft's Windows Phone in 2011 was a "burning platform" gamble that failed to pay off. The Windows Phone ecosystem never achieved critical mass with developers or consumers, leaving Nokia devices as beautiful, well-built shells with a ghost town of an app store. Market share plummeted at a catastrophic rate. The once-mighty giant, which had defined an entire industry, saw its mobile division sold for a fraction of its former worth to Microsoft in 2013—the very software-centric type of company it had once dismissed.

### Lessons Learned
1.  **Success Breeds Complacency:** Never let market leadership lull you into a false sense of security. The greatest threat is often the one you don't see coming.
2.  **The Ecosystem is the Product:** Nokia built superior phones, but Apple and Google built superior ecosystems. The war was won by the platform with the most engaged developers and the most compelling applications.
3.  **Don't Fight Internal Revolutions:** A corporate culture that resists radical change and protects legacy products is doomed to fail. Innovation requires a willingness to cannibalize your own success.
4.  **User Experience Trumps Technical Specs:** While Nokia focused on engineering prowess and feature lists, its competitors focused on creating a seamless and delightful user journey. The company that best understands the user, wins.
        `,
        interactiveData: {
          type: "timeline",
          title: "Nokia's Rise and Fall",
          events: [
            {
              date: "1998",
              description:
                "Nokia becomes the world's best-selling mobile phone brand.",
            },
            {
              date: "2000",
              description:
                "The iconic and indestructible Nokia 3310 is launched.",
            },
            {
              date: "2007",
              description:
                "Apple introduces the iPhone. Nokia executives dismiss the threat.",
            },
            {
              date: "2008",
              description: "Google launches the Android operating system.",
            },
            {
              date: "2011",
              description:
                "Nokia abandons Symbian and partners with Microsoft for Windows Phone.",
            },
            {
              date: "2013",
              description:
                "Nokia's mobile devices and services division is sold to Microsoft.",
            },
          ],
        },
      },
      // 2. Blockbuster
      {
        slug: "blockbuster-the-behemoth-that-died-of-late-fees",
        title: "Blockbuster: How Refusing to Change Led to an Epic Collapse",
        excerpt:
          "The undisputed king of home entertainment, Blockbuster was a weekend ritual for millions. So how did it pass on the opportunity to buy Netflix for a mere $50 million, only to file for bankruptcy? This case study is a masterclass in the dangers of business model inertia.",
        imageUrl:
          "https://images.unsplash.com/photo-1559193498-933171f787b2?q=80&w=1974&auto=format&fit=crop",
        categoryId: categoryMap["tech-companies"],
        content: `
### Introduction: The Friday Night Tradition
In the 1990s and early 2000s, the phrase "movie night" was inextricably linked with a trip to a local Blockbuster store. With its iconic blue and yellow torn-ticket logo, the company was more than a rental chain; it was a cultural institution. Walking through the aisles, browsing new releases, and picking out popcorn was a cherished ritual for families and friends worldwide. With over 9,000 stores at its peak, Blockbuster Video was the absolute, unchallenged ruler of the home entertainment industry, a multi-billion dollar empire built on the simple act of renting physical media.

### The Golden Age: The Reign of Physical Rentals
Blockbuster's business model was brilliantly simple and immensely profitable. They leveraged their massive scale to secure favorable deals with movie studios, stocked their stores with the latest hits, and rented them out for a few dollars. However, a significant—and controversial—portion of their revenue came from a source their customers despised: late fees. These penalties for not returning a movie on time were the financial backbone of the company, accounting for a huge chunk of its profits. The company's sheer physical presence in nearly every town and city made it seem like a permanent, unshakeable part of the landscape.

### The Cracks Appear: A Fateful Decision
The turning point came in 2000. A small, fledgling startup called Netflix, which at the time was a DVD-by-mail subscription service, was struggling. Its founder, Reed Hastings, approached Blockbuster with an offer: buy Netflix for $50 million and let them run Blockbuster's online operations. Blockbuster's CEO, John Antioco, reportedly laughed them out of the room. The executives saw Netflix as a tiny, niche player and failed to recognize the disruptive potential of its business model—one that crucially eliminated late fees. Blockbuster remained stubbornly attached to its brick-and-mortar stores and the lucrative revenue stream from late fees, completely misreading the digital revolution that was just beginning to brew. They saw the internet not as an opportunity, but as a minor threat that would never replace the physical experience.

### The Downfall: The Digital Tsunami
While Blockbuster doubled down on its physical stores, Netflix was busy making life more convenient for customers. The subscription model was a game-changer, and when they pivoted to streaming video, they redefined home entertainment forever. Suddenly, an entire library of movies was available on-demand, without leaving the house. Blockbuster's attempts to compete were too little, too late. Their own online service was clumsy and poorly integrated with their store operations. Customers, fed up with late fees and the inconvenience of driving to a store, abandoned them in droves. The company was bleeding money, and in 2010, burdened by nearly a billion dollars in debt, Blockbuster filed for bankruptcy. The once-mighty empire crumbled, and its thousands of stores vanished.

### Lessons Learned
1.  **Don't Fall in Love with Your Business Model:** Your most profitable revenue stream can also be your greatest vulnerability. Clinging to a model that creates customer friction (like late fees) is an open invitation for a competitor to disrupt you.
2.  **Never Underestimate the Underdog:** Disruptive innovation often comes from the fringes, from small, agile companies that are easy to dismiss. The idea that seems laughable today could be the one that puts you out of business tomorrow.
3.  **Convenience is King:** Customers will always gravitate towards the solution that is easier, faster, and more flexible. The friction of physical retail could not compete with the frictionless experience of digital streaming.
4.  **Adapt or Die:** This is the ultimate lesson from Blockbuster's demise. Markets, technology, and consumer behavior are in a constant state of flux. Refusing to adapt isn't a strategy; it's a death sentence.
        `,
        interactiveData: {
          type: "comparison",
          title: "Blockbuster vs. Netflix: The Fatal Differences",
          base: {
            name: "Blockbuster",
            points: [
              "Brick-and-Mortar Retail Network",
              "Revenue Driven by Late Fees",
              "Limited Inventory Per Store",
              "Requires Customer to Travel",
            ],
          },
          competitor: {
            name: "Netflix (Early Model)",
            points: [
              "Online Platform & Mail Delivery",
              "Subscription Model (No Late Fees)",
              "Vast Centralized Library",
              "Delivers Directly to the Customer",
            ],
          },
        },
      },
      // 3. Theranos
      {
        slug: "theranos-the-billion-dollar-lie-that-shook-silicon-valley",
        title:
          "Theranos: Deconstructing the Biggest Fraud in Silicon Valley History",
        excerpt:
          "Promising to revolutionize healthcare with just a single drop of blood, Theranos and its charismatic founder Elizabeth Holmes mesmerized the world. How did this $9 billion house of cards collapse? An autopsy of fake innovation and a toxic corporate culture.",
        imageUrl:
          "https://images.unsplash.com/photo-1578496458534-3c69d8a37edd?q=80&w=2070&auto=format&fit=crop",
        categoryId: categoryMap["startups"],
        content: `
### Introduction: The Promise of a Healthcare Revolution
Founded in 2003 by a 19-year-old Stanford dropout, Elizabeth Holmes, Theranos had a vision that was as bold as it was brilliant. The company promised to completely disrupt the diagnostics industry with a proprietary technology that could run hundreds of medical tests—from cholesterol checks to complex genetic analyses—on a single, tiny drop of blood pricked from a finger. This device, named the "Edison," would make blood testing cheap, accessible, and painless for everyone. The vision perfectly aligned with Silicon Valley's narrative of "changing the world," and it quickly made Theranos one of the most celebrated and valuable startups in the world.

### The Golden Age: The Cult of Holmes
With her signature black turtleneck, deep voice, and intense eye contact, Elizabeth Holmes was hailed as the "next Steve Jobs." She became a media darling, gracing the covers of Forbes and Fortune. She assembled a star-studded board of directors that included former secretaries of state like Henry Kissinger and George Shultz, lending an incredible air of legitimacy to her enterprise. Theranos raised over $700 million from savvy investors, reaching a staggering valuation of $9 billion. The company forged major partnerships with Walgreens and Safeway to deploy its "Wellness Centers" in stores across the nation. To the outside world, Theranos was on the cusp of launching a technology that would change medicine forever.

### The Cracks Appear: A Non-Existent Technology
Behind the curtain of secrecy and hype, however, there was a fatal flaw: the technology did not work. The Edison machine could only perform a small fraction of the promised tests, and the results it produced were wildly inaccurate. To cover this up, Theranos was secretly using commercially available, off-the-shelf lab equipment from traditional companies to run most of its tests, often diluting the tiny finger-prick samples in ways that further compromised their accuracy. The company culture was built on fear, paranoia, and extreme secrecy. Employees who dared to question the technology or raise ethical concerns were intimidated, fired, and threatened with lawsuits. The truth was being systematically suppressed by a leader who valued the vision far more than the reality.

### The Downfall: The Empire of Lies Collapses
The beginning of the end came in 2015, when investigative journalist John Carreyrou of The Wall Street Journal, tipped off by a courageous whistleblower, began publishing a series of explosive articles exposing the company's deception. Carreyrou's reporting revealed the technological failures, the doctored results, and the toxic internal culture. This opened the floodgates. Federal regulators, including the SEC and CMS, launched their own investigations. The partnerships with Walgreens and Safeway dissolved, investors filed lawsuits, and the company's valuation plummeted from $9 billion to effectively zero. In 2018, the SEC charged Holmes and her former partner, Ramesh "Sunny" Balwani, with "massive fraud." The company was dissolved, and Holmes was eventually convicted on multiple counts of defrauding investors and sentenced to over 11 years in federal prison.

### Lessons Learned
1.  **Vision Cannot Replace Reality:** A "fake it till you make it" ethos is incredibly dangerous, especially in a field like healthcare where lives are at stake. A grand vision is worthless without a functioning, validated product.
2.  **Ethics and Transparency are Non-Negotiable:** Trust is the bedrock of any successful company. A culture built on lies, intimidation, and secrecy is fundamentally unstable and will eventually implode.
3.  **Due Diligence is Crucial:** The story of Theranos is a monumental failure of due diligence. Investors, board members, and partners were so captivated by the charismatic founder and her story that they failed to ask the tough, technical questions.
4.  **Listen to Dissenting Voices:** Whistleblowers and internal critics are not enemies; they are often a company's last line of defense against disaster. A culture that silences dissent is a culture that invites catastrophe.
        `,
        interactiveData: {
          type: "autopsy",
          title: "Theranos Case Autopsy",
          caseSummary: {
            symptoms: [
              "Exaggerated and unproven technological claims.",
              "Extreme secrecy and a complete lack of transparency.",
              "A cult of personality around a charismatic leader.",
              "Systematic silencing of internal critics and experts.",
            ],
            causeOfDeath:
              "Massive, systemic fraud built on a non-functional product.",
            lessons: [
              "Success cannot be built on an ethical void.",
              "Independent, rigorous verification is essential for investors.",
              "A healthy corporate culture is a prerequisite for long-term success.",
            ],
          },
        },
      },
      // 4. Ford Edsel
      {
        slug: "ford-edsel-the-car-of-the-future-that-became-a-historic-flop",
        title: "Ford Edsel: How a $250 Million Bet Became a Byword for Failure",
        excerpt:
          'After a decade of market research and a massive $250 million investment, Ford was convinced it had created the "car of the future." Instead, the Edsel became one of the greatest product disasters in history. This is the story of how you can do all the research and still get it catastrophically wrong.',
        imageUrl:
          "https://images.unsplash.com/photo-1619402514659-d138bc86a7a5?q=80&w=1932&auto=format&fit=crop",
        categoryId: categoryMap["products"],
        content: `
### Introduction: The Car of Great Expectations
In the booming post-war economy of the 1950s, the American auto industry was at its peak. Ford Motor Company, eager to close the market-share gap with its rival General Motors, embarked on its most ambitious project ever: creating an entirely new car brand from scratch. Named "Edsel" after Henry Ford's son, this new division was Ford's answer to GM's multiple brands that targeted different income levels. The company poured a quarter of a billion dollars (the equivalent of over $2.5 billion today) into the project. They conducted what was, at the time, the most exhaustive market research in history to understand the American consumer's deepest desires. The Edsel wasn't just a new car; it was supposed to be the perfect car, scientifically engineered to succeed.

### The Golden Age: The Pre-Launch Hype Machine
Ford executed one of the most aggressive and secretive marketing campaigns in automotive history. The car's design was guarded like a state secret, building a massive wave of public anticipation. The launch day was dubbed "E-Day," and it was promoted with a level of fanfare usually reserved for a national holiday. Teaser ads hinted at a revolutionary vehicle that would redefine the American road. The market research had told Ford that consumers wanted bigger, more powerful, and more stylish cars with plenty of chrome and futuristic gadgets. The Edsel was designed to be the physical embodiment of that research—a rolling monument to consumer desire.

### The Cracks Appear: Wrong Car, Wrong Time, Wrong Look
When "E-Day" finally arrived on September 4, 1957, the public's reaction was a collective thud of disappointment. The most talked-about feature, the car's distinctive vertical front grille, was widely mocked and compared to everything from a toilet seat to an "Oldsmobile sucking a lemon." Beyond the polarizing aesthetics, the car was plagued with problems. It was priced awkwardly between Ford's cheaper models and its more luxurious Mercury line, confusing customers about where it fit in the market. It was a notorious gas-guzzler, and reports of poor build quality and mechanical issues were rampant. Worst of all, the timing was disastrous. Just as the Edsel launched, the US economy tipped into a recession. Consumer preferences were abruptly shifting away from flashy behemoths and towards smaller, more practical, and fuel-efficient cars. The Edsel was the right answer to a question nobody was asking anymore.

### The Downfall: A Dream Left in the Showroom
Sales were an unmitigated disaster. Ford had projected selling over 200,000 Edsels in the first year alone. Instead, they sold just over 63,000. The numbers were even worse in the following two years. The brand was bleeding money at an alarming rate. In November 1959, just over two years after its grand debut, Ford quietly pulled the plug. The total financial loss was estimated to be around $350 million (nearly $3.5 billion in today's money). The Edsel was officially dead, and its name was forever cemented in the business lexicon as a synonym for a marketing flop of epic proportions.

### Lessons Learned
1.  **Market Research is Not a Crystal Ball:** Data can tell you about the past, but it cannot perfectly predict the future, especially when it comes to something as fickle as consumer taste. How you interpret the data is just as important as the data itself.
2.  **Timing is Everything:** A brilliant product can fail spectacularly if launched into the teeth of a changing economic headwind or a shift in cultural trends. You must sell the car that people want today, not the one they wanted yesterday.
3.  **Don't Believe Your Own Hype:** Creating massive expectations can be a double-edged sword. If your product fails to deliver on its monumental promises, the public backlash will be equally monumental.
4.  **The Product is the Ultimate Marketing:** No amount of advertising or promotion can save a product that is poorly designed, overpriced, or fails to meet basic quality standards. The product itself must be the hero of the story.
        `,
        interactiveData: {
          type: "autopsy",
          title: "Ford Edsel Case Autopsy",
          caseSummary: {
            symptoms: [
              "Excessive marketing hype creating unrealistic expectations.",
              "A polarizing design that alienated consumers.",
              "Poor quality control and confusing price positioning.",
              "Complete disregard for changing economic conditions and market trends.",
            ],
            causeOfDeath:
              "The wrong product, at the wrong price, at the wrong time.",
            lessons: [
              "Never trust market research data blindly.",
              "The macro-economic environment is a critical factor in any product launch.",
              "Design and quality are more powerful than any advertising campaign.",
            ],
          },
        },
      },
      // 5. Vine
      {
        slug: "vine-the-6-second-pioneer-that-vanished-too-soon",
        title: "Vine: How the Pioneer of Short-Form Video Fumbled the Future",
        excerpt:
          "With its 6-second looping videos, Vine captivated a generation and forever changed internet culture. As the true predecessor to TikTok, how did this revolutionary platform die? This analysis explores one of the first and most painful lessons of the creator economy.",
        imageUrl:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
        categoryId: categoryMap["platforms"],
        content: `
### Introduction: The Six-Second Revolution
Launched by Twitter in early 2013, Vine was a masterclass in creative constraint. Its platform allowed users to create and share short, six-second videos that played on a continuous loop. This simple limitation sparked an explosion of creativity, giving rise to a new form of digital art and comedy. It became a cultural phenomenon almost overnight, creating its own language, its own celebrities, and its own unique rhythm. A new class of internet celebrity, the "Vine Star," was born, and these creators built massive followings by mastering the art of the six-second punchline, visual gag, or mesmerizing loop. For a time, Vine was the undisputed epicenter of youth culture on the internet.

### The Golden Age: The Heartbeat of Internet Culture
At its peak, Vine was the birthplace of countless memes, viral trends, and catchphrases that permeated mainstream culture. It was a launchpad for the careers of digital creators like Shawn Mendes, Logan Paul, and Lele Pons. Brands desperately wanted in, partnering with top Viners to tap into their massive, highly engaged audiences. The platform was a frantic, hilarious, and endlessly entertaining hub of raw creativity. Its influence was so profound that it fundamentally altered the way people thought about video content, proving that you didn't need long-form production to tell a compelling story or make someone laugh. It was the perfect medium for the shrinking attention spans of the mobile-first generation.

### The Cracks Appear: Neglecting the Creators
Vine's fatal mistake was its failure to build an infrastructure to support its most valuable asset: its creators. While YouTubers were building careers through the platform's Partner Program and sharing in ad revenue, Vine offered its stars no native way to monetize their content. The platform's biggest names had to rely on cumbersome, one-off brand deals that they sourced themselves. As their fame grew, they began to feel exploited. They were generating billions of views and immense cultural capital for Vine, but were seeing no financial return from the platform itself. Meanwhile, competitors were circling. Instagram, owned by the deep-pocketed Facebook, launched a 15-second video feature, and Snapchat introduced Stories, both chipping away at Vine's user base and offering new creative outlets. The top Vine stars, realizing their careers had no long-term future on the platform, began migrating to YouTube, Instagram, and Facebook, taking their millions of followers with them.

### The Downfall: The Lights Go Out
The creator exodus was the beginning of the end. With its top talent gone, the platform lost its cultural relevance and user engagement began to decline sharply. Its parent company, Twitter, was facing its own financial struggles and was unwilling to make the significant investments needed to build monetization tools and evolve the product to compete with its rivals. The platform was left to stagnate. In October 2016, to the dismay of its remaining community, Twitter announced it would be discontinuing the Vine mobile app. The six-second heartbeat of the internet fell silent, leaving behind a legacy that would pave the way for its spiritual successor, TikTok.

### Lessons Learned
1.  **Build and Nurture Your Creator Economy:** In a content-driven world, your creators are your most vital resource. You must provide them with the tools, support, and financial incentives to succeed, or they will leave you for a platform that does.
2.  **Never Stop Innovating:** Being first to market is an advantage, but it's not a permanent one. Your competitors will copy your best features and improve upon them. If you're not constantly evolving, you're becoming obsolete.
3.  **A Clear Monetization Strategy is Essential:** A great product and an engaged community are not enough. Without a sustainable business model that benefits both the platform and its key contributors, you are living on borrowed time.
4.  **Parent Company Support is a Double-Edged Sword:** Being acquired can provide resources, but if you are not a strategic priority for your parent company, you risk being starved of investment and ultimately abandoned when times get tough.
        `,
        interactiveData: {
          type: "timeline",
          title: "Vine's Short but Influential Life",
          events: [
            { date: "June 2012", description: "Vine is founded." },
            {
              date: "October 2012",
              description: "Acquired by Twitter before its public launch.",
            },
            {
              date: "January 2013",
              description:
                "Vine launches its iOS app and becomes an instant sensation.",
            },
            {
              date: "August 2014",
              description:
                "Instagram introduces its own 15-second video feature, starting the competition.",
            },
            {
              date: "2015-2016",
              description:
                "Top creators begin leaving the platform due to a lack of monetization tools.",
            },
            {
              date: "October 2016",
              description:
                "Twitter announces it is discontinuing the Vine mobile app.",
            },
          ],
        },
      },
    ],
  });

  console.log("All case studies have been successfully added to the database.");
}

// Execute the main function and handle potential errors,
// ensuring the database connection is closed safely.
main()
  .catch((e) => {
    console.error("An error occurred during the seeding process:", e);
    process.exit(1);
  })
  .finally(async () => {
    console.log("Seeding process completed. Disconnecting from the database.");
    await prisma.$disconnect();
  });
