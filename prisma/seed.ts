import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Create categories
  const techCompanies = await prisma.category.create({
    data: {
      slug: "tech-companies",
      name: "Tech Companies",
    },
  });

  const startups = await prisma.category.create({
    data: {
      slug: "startups",
      name: "Startups",
    },
  });

  const products = await prisma.category.create({
    data: {
      slug: "products",
      name: "Products",
    },
  });

  const platforms = await prisma.category.create({
    data: {
      slug: "platforms",
      name: "Platforms",
    },
  });

  // Create posts
  await prisma.post.create({
    data: {
      slug: "the-rise-and-fall-of-nokia",
      title: "The Rise and Fall of Nokia: From Paper Mill to Mobile Giant",
      excerpt:
        "How Nokia transformed from a Finnish paper company to dominating the mobile phone industry, only to miss the smartphone revolution.",
      content: `# The Rise and Fall of Nokia

Nokia's story is one of the most dramatic corporate transformations and subsequent declines in business history. From its humble beginnings as a paper mill in 1865 to becoming the world's largest mobile phone manufacturer, Nokia's journey offers valuable lessons about innovation, adaptation, and the dangers of complacency.

## The Early Years (1865-1960s)

Founded by Fredrik Idestam in Tampere, Finland, Nokia began as a single paper mill on the banks of the Tammerkoski rapids. The company's name comes from the Nokianvirta river where the original mill was located.

## Diversification Era (1960s-1980s)

Nokia's transformation began in the 1960s under the leadership of Björn Westerlund. The company diversified into:
- Rubber products (boots, tires)
- Cables and electronics
- Consumer electronics

## The Mobile Revolution (1990s-2000s)

The 1990s marked Nokia's golden age. Under CEO Jorma Ollila, Nokia:
- Focused entirely on telecommunications
- Launched the iconic Nokia 1011 (first GSM phone)
- Dominated the global mobile market with 40% market share
- Became synonymous with mobile phones

## The Smartphone Misstep (2007-2014)

Nokia's decline began with the iPhone launch in 2007. Key mistakes included:
- Underestimating touchscreen technology
- Sticking with Symbian OS too long
- Failed partnership with Microsoft (Windows Phone)
- Inability to create a compelling app ecosystem

## Lessons Learned

Nokia's story teaches us:
1. **Innovation never stops** - Past success doesn't guarantee future relevance
2. **Ecosystem matters** - Hardware alone isn't enough in the digital age
3. **Adaptability is crucial** - Companies must evolve with changing markets
4. **Leadership vision** - Strategic decisions at the top cascade throughout the organization

Today, Nokia continues as a network infrastructure company, having sold its mobile division to Microsoft in 2014.`,
      imageUrl: "/images/nokia-headquarters.jpg",
      categoryId: techCompanies.id,
      interactiveData: {
        type: "timeline",
        events: [
          {
            year: 1865,
            title: "Founded as paper mills",
            description:
              "Fredrik Idestam establishes Nokia as a paper mill in Finland",
          },
          {
            year: 1967,
            title: "Electronics division",
            description: "Nokia enters electronics market",
          },
          {
            year: 1987,
            title: "First mobile phone",
            description: "Nokia launches Mobira Cityman",
          },
          {
            year: 1998,
            title: "Market leader",
            description: "Becomes world's largest mobile phone manufacturer",
          },
          {
            year: 2007,
            title: "iPhone launches",
            description: "Apple disrupts the mobile industry",
          },
          {
            year: 2014,
            title: "Microsoft acquisition",
            description: "Nokia sells mobile division to Microsoft",
          },
        ],
      },
    },
  });

  await prisma.post.create({
    data: {
      slug: "blockbuster-streaming-wars-netflix",
      title:
        "Blockbuster vs Netflix: The Streaming Wars That Changed Entertainment",
      excerpt:
        "The epic battle between traditional video rental and streaming that reshaped how we consume entertainment forever.",
      content: `# Blockbuster vs Netflix: The Streaming Wars That Changed Entertainment

The story of Blockbuster and Netflix represents one of the most dramatic examples of digital disruption in modern business history. It's a tale of two companies that took radically different approaches to the same market, with consequences that reshaped the entire entertainment industry.

## Blockbuster: The Video Rental Giant

At its peak in 2004, Blockbuster was a $6 billion company with over 9,000 stores worldwide. The company had built its empire on a simple premise: people wanted to rent movies, and they were willing to drive to a store to get them.

### The Blockbuster Model
- Physical stores in prime locations
- Large inventory of VHS and DVD titles
- Late fees as a significant revenue source
- Personal interaction with staff for recommendations

## Netflix: The Disruptor

Founded in 1997 by Reed Hastings and Marc Randolph, Netflix started with a revolutionary idea: mail-order DVD rentals with no late fees. But this was just the beginning of their transformation of the entertainment industry.

### The Netflix Evolution
1. **DVD-by-Mail (1997-2007)**: Subscription model with no late fees
2. **Streaming Launch (2007)**: Instant access to content online
3. **Original Content (2013)**: House of Cards marked the beginning of Netflix as a content creator
4. **Global Expansion (2016)**: Available in 190+ countries

## The Missed Opportunity

In 2000, Netflix offered to sell their company to Blockbuster for $50 million. Blockbuster's leadership, confident in their physical retail model, declined the offer. This decision would later be considered one of the biggest business mistakes in history.

## Key Factors in Netflix's Victory

### Technology Adoption
Netflix embraced emerging technologies:
- Internet streaming capabilities
- Data analytics for personalized recommendations
- Cloud infrastructure for global scaling

### Business Model Innovation
- Subscription-based pricing
- Elimination of late fees
- Unlimited access model
- Investment in original content

### Customer Experience Focus
- Convenience of home delivery and streaming
- Personalized recommendations
- Binge-watching culture creation
- Multi-device accessibility

## Blockbuster's Decline

Several factors contributed to Blockbuster's downfall:
- **Resistance to change**: Slow adoption of new technologies
- **Revenue dependence**: Heavy reliance on late fees
- **Debt burden**: Leveraged buyout in 2007 limited flexibility
- **Leadership changes**: Frequent CEO changes disrupted strategy

## The Aftermath

- **Blockbuster**: Filed for bankruptcy in 2010, closed most stores by 2014
- **Netflix**: Grew to 230+ million subscribers globally, valued at over $100 billion

## Lessons for Modern Businesses

1. **Embrace disruption**: Don't dismiss new technologies or business models
2. **Customer-centric innovation**: Focus on improving customer experience
3. **Adaptability**: Be willing to cannibalize your own business model
4. **Data-driven decisions**: Use analytics to understand customer behavior
5. **Long-term vision**: Invest in future capabilities, not just current profits

The Blockbuster vs Netflix saga continues to serve as a cautionary tale for established companies and an inspiration for disruptors across all industries.`,
      imageUrl: "/images/blockbuster-netflix.jpg",
      categoryId: techCompanies.id,
      interactiveData: {
        type: "comparison",
        title: "Blockbuster vs Netflix Timeline",
        data: [
          {
            year: 1997,
            blockbuster: "9,000 stores worldwide",
            netflix: "Founded, DVD-by-mail service",
          },
          {
            year: 2000,
            blockbuster: "Declined to buy Netflix for $50M",
            netflix: "Offered to sell to Blockbuster",
          },
          {
            year: 2007,
            blockbuster: "Launched Blockbuster Online",
            netflix: "Introduced streaming service",
          },
          {
            year: 2010,
            blockbuster: "Filed for bankruptcy",
            netflix: "Expanded internationally",
          },
          {
            year: 2013,
            blockbuster: "Closed remaining stores",
            netflix: "Launched original content",
          },
        ],
      },
    },
  });

  await prisma.post.create({
    data: {
      slug: "theranos-elizabeth-holmes-fraud",
      title:
        "Theranos: The $9 Billion Blood Testing Fraud That Fooled Silicon Valley",
      excerpt:
        "How Elizabeth Holmes built a healthcare empire on lies, deceiving investors, patients, and employees with fake blood testing technology.",
      content: `# Theranos: The $9 Billion Blood Testing Fraud That Fooled Silicon Valley

The Theranos scandal represents one of the most shocking cases of corporate fraud in Silicon Valley history. Elizabeth Holmes, once hailed as the youngest female billionaire, built a $9 billion company on a foundation of lies, putting patients' lives at risk and defrauding investors of hundreds of millions of dollars.

## The Promise That Never Was

Founded in 2003, Theranos claimed to have revolutionized blood testing with technology that could run hundreds of tests from a single drop of blood. This promise attracted massive investment and media attention, positioning Holmes as the next Steve Jobs of healthcare.

### The Claimed Innovation
- **Edison machines**: Proprietary devices for micro-sample testing
- **Comprehensive panels**: 200+ tests from one drop of blood
- **Faster results**: Same-day testing vs. traditional lab wait times
- **Lower costs**: Fraction of traditional lab testing prices

## The Reality Behind the Curtain

Investigations revealed that Theranos' technology never worked as advertised:
- Most tests were run on traditional machines from other companies
- Blood samples were diluted to dangerous levels
- Results were often inaccurate, potentially endangering patients
- The company used elaborate deception to hide the truth from investors and regulators

## Key Players in the Deception

### Elizabeth Holmes
- **Background**: Stanford dropout, founded Theranos at age 19
- **Public persona**: Cultivated Steve Jobs-like image with black turtlenecks
- **Deception tactics**: Used fake deep voice, exaggerated credentials
- **Outcome**: Convicted of fraud, sentenced to 11+ years in prison

### Ramesh "Sunny" Balwani
- **Role**: President and COO, Holmes' romantic partner
- **Responsibilities**: Day-to-day operations, lab management
- **Management style**: Intimidating, secretive, hostile to dissent
- **Outcome**: Convicted of fraud, sentenced to 13 years in prison

## The Whistleblowers

Several brave employees risked their careers to expose the truth:
- **Tyler Schultz**: Grandson of board member George Schultz
- **Erika Cheung**: Lab associate who witnessed testing irregularities
- **Ian Gibbons**: Chief scientist who died by suicide amid the pressure

## Warning Signs Ignored

Multiple red flags should have alerted investors and partners:
- **Extreme secrecy**: Unusual even for Silicon Valley standards
- **Lack of peer review**: No published scientific papers
- **High employee turnover**: Especially in scientific roles
- **Legal intimidation**: Aggressive use of NDAs and lawsuits
- **Board composition**: Lacked medical or scientific expertise

## The Unraveling

The fraud began to collapse in 2015:
- **Wall Street Journal investigation**: John Carreyrou's exposé
- **Regulatory scrutiny**: FDA and CMS investigations
- **Partner withdrawals**: Walgreens ended partnership
- **Investor lawsuits**: Massive legal challenges
- **Criminal charges**: Federal fraud indictments

## Impact on Stakeholders

### Patients
- Received inaccurate test results
- Made medical decisions based on false information
- Some experienced delayed or incorrect treatments

### Investors
- Lost over $900 million in total investments
- Included prominent families, pension funds, and individuals
- Many never recovered their investments

### Employees
- Careers damaged by association
- Psychological trauma from toxic work environment
- Some faced legal threats for speaking out

## Lessons Learned

### For Investors
1. **Due diligence**: Verify claims with independent experts
2. **Red flag awareness**: Be wary of excessive secrecy
3. **Board composition**: Ensure relevant expertise
4. **Regulatory compliance**: Understand industry requirements

### For Regulators
1. **Faster response**: Act quickly on credible complaints
2. **Industry expertise**: Develop specialized knowledge
3. **Whistleblower protection**: Strengthen protections for reporters
4. **Cross-agency coordination**: Improve information sharing

### For the Public
1. **Healthy skepticism**: Question extraordinary claims
2. **Media literacy**: Understand the difference between hype and reality
3. **Scientific method**: Value peer review and reproducible results
4. **Patient advocacy**: Demand transparency in healthcare

## The Broader Impact

The Theranos scandal had far-reaching consequences:
- **Investor caution**: More scrutiny of healthcare startups
- **Regulatory changes**: Stricter oversight of lab testing
- **Cultural shift**: Reduced tolerance for "fake it till you make it" mentality
- **Legal precedent**: Stronger enforcement of fraud laws in Silicon Valley

The Theranos story serves as a powerful reminder that innovation without integrity is not just worthless—it's dangerous. In healthcare, where lives are at stake, the consequences of deception can be fatal.`,
      imageUrl: "/images/theranos-building.jpg",
      categoryId: startups.id,
      interactiveData: {
        type: "autopsy",
        causeOfDeath: "Systematic fraud and deception",
        symptoms: [
          "Fake technology claims",
          "Inaccurate test results",
          "Investor deception",
          "Regulatory violations",
        ],
        lessonsLearned: [
          "Verify extraordinary claims",
          "Demand transparency",
          "Protect whistleblowers",
          "Prioritize patient safety",
        ],
        timeline: [
          {
            date: "2003",
            event: "Theranos founded",
          },
          {
            date: "2013",
            event: "Peak valuation $9B",
          },
          {
            date: "2015",
            event: "WSJ exposé published",
          },
          {
            date: "2018",
            event: "Criminal charges filed",
          },
          {
            date: "2022",
            event: "Holmes convicted",
          },
        ],
      },
    },
  });

  console.log("Seeding finished.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
