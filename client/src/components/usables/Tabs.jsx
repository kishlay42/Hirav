import { useEffect, useRef, useState } from "react";
import Accordion from "./Accordion";
const tabsData = [
  {
    label: "About GCP",
    content: {
      data: [
        {
          title: "What is the Green Credit Programme (GCP)?",
          data: ` The Green Credit Programme (GCP) is a government initiative aimed at promoting environmental sustainability by encouraging investments in green projects. It offers incentives and benefits to individuals and businesses that invest in eco-friendly projects.`,
        },
        {
          title: " What types of projects are eligible under the GCP",
          data: `Eligible projects under the GCP typically include renewable energy, energy efficiency, sustainable agriculture, green transportation, waste management, and other environmentally beneficial initiatives.`,
        },
        {
          title: " How does the GCP benefit investors?",
          data: ` Investors in the GCP can benefit from various incentives such as tax breaks, grants, and subsidies provided by the government. Additionally, they contribute to a sustainable future by supporting projects that reduce environmental impact.`,
        },
      ],
    },
  },
  {
    label: "About Hirav",
    content: {
      data: [
        {
          title: "What is Hirav?",
          data: ` Hirav is an investment platform that offers curated investment plans in sustainable projects, aligning with the Green Credit Programme (GCP). Our platform helps investors select and manage their investments in eco-friendly initiatives.`,
        },
        {
          title: "How does Hirav work?",
          data: ` Hirav allows users to sign up, create a personalized profile, explore tailored investment plans, invest in chosen projects, and monitor their portfolio’s performance. Our platform leverages advanced AI tools to provide data-driven insights and maximize investment potential.`,
        },
      ],
    },
  },
  {
    label: "Investment Process",
    content: {
      data: [
        {
          title: " How do I get started with Hirav?",
          data: ` To get started, sign up on the Hirav platform and create a personalized profile. Once your profile is set up, you can explore available investment plans, select the ones that meet your needs, and follow the steps to invest.`,
        },
        {
          title: "  What types of investment plans does Hirav offer?",
          data: `Hirav offers a variety of investment plans focused on sustainable projects such as renewable energy, energy efficiency, sustainable agriculture, and more. Each plan is designed to align with both financial and environmental goals.`,
        },
        {
          title: " Are there any fees associated with using Hirav?",
          data: `  Yes, Hirav may charge fees for its services, including management fees, transaction fees, and performance-based fees. Detailed information about fees is provided during the investment selection process.`,
        },
      ],
    },
  },
  {
    label: "Profits and Returns",
    content: {
      data: [
        {
          title: "How can I profit from investing through Hirav?",
          data: `  You can profit by investing in sustainable projects that generate financial returns, such as interest on green bonds, dividends from eco-friendly companies, or revenue shares from renewable energy projects. Hirav provides insights and AI tools to help maximize your investment potential.`,
        },
        {
          title:
            "  How does Hirav ensure the sustainability and profitability of its investment plans?",
          data: ` Hirav conducts thorough due diligence and vetting processes to ensure the sustainability and profitability of each investment plan. We partner with experts in environmental sustainability and continuously monitor project performance and impact.`,
        },
      ],
    },
  },
  {
    label: "Monitoring and Support",
    content: {
      data: [
        {
          title: "Can I track the performance of my investments in real-time?",
          data: `  Yes, Hirav offers real-time tracking of your investment portfolio. You can monitor performance, receive progress reports, and make adjustments to your portfolio through our user-friendly interface.`,
        },
        {
          title: " What kind of support does Hirav offer to investors?",
          data: ` Hirav provides comprehensive support, including access to expert advice, detailed investment insights, regular updates on market trends, and customer support to assist with any questions or issues.`,
        },
      ],
    },
  },
  {
    label: "Environmental Impact",
    content: {
      data: [
        {
          title:
            "How does investing through Hirav contribute to environmental sustainability?",
          data: `  By investing through Hirav, you support projects that reduce carbon emissions, promote renewable energy, conserve natural resources, and adopt eco-friendly practices. Your investments help finance initiatives with a positive environmental impact.`,
        },
      ],
    },
  },
  {
    label: " Security and Risks",
    content: {
      data: [
        {
          title: "Is my investment with Hirav secure?",
          data: `  Hirav takes several measures to ensure the security of your investment, including rigorous project vetting, risk management strategies, and compliance with relevant financial regulations. However, like any investment, there are risks involved, and it’s important to review and understand these risks before investing. These FAQs provide a comprehensive overview of both the Green Credit Programme (GCP) and Hirav's investment platform, addressing common questions potential investors might have.`,
        },
      ],
    },
  },
];

export default function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex space-x-8 border-b  ">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className="pt-2 pb-3 text-xl pr-4 "
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4 px-14">
        {/* <p>{tabsData[activeTabIndex].content}</p> */}
        {tabsData[activeTabIndex].content.data.map((tab, idx) => {
          return <Accordion key={idx} title={tab.title} answer={tab.data} />;
        })}
      </div>
    </div>
  );
}
