import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
const TwitterFeeds = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load Twitter script
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.onload = () => {setLoading(false); // Set loading to false once script is loaded
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load(); // Re-render Twitter widgets
      }
      
    };
    document.body.appendChild(script);
    // Cleanup function to remove the script
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
    {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner size="xl" />
        </div>
      ) : (
      <div className="p-2 gap-y-3 overflow-y-auto max-h-[125vh]">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            𝐓𝐡𝐞 𝐈𝐦𝐩𝐚𝐜𝐭 𝐨𝐟 𝐭𝐡𝐞 𝐍𝐚𝐭𝐢𝐨𝐧𝐚𝐥 𝐆𝐫𝐞𝐞𝐧 𝐂𝐫𝐞𝐝𝐢𝐭 𝐏𝐫𝐨𝐠𝐫𝐚𝐦 𝐨𝐧 𝐭𝐡𝐞 𝐖𝐚𝐭𝐞𝐫 𝐒𝐞𝐜𝐭𝐨𝐫
            <br />
            <br />
            Read More:{" "}
            <a href="https://t.co/4EuTQYHgiH">https://t.co/4EuTQYHgiH</a>
            <a href="https://twitter.com/hashtag/nationalgreen?src=hash&amp;ref_src=twsrc%5Etfw">
              #nationalgreen
            </a>
            <a href="https://twitter.com/hashtag/GreenCredit?src=hash&amp;ref_src=twsrc%5Etfw">
              #GreenCredit
            </a>
            <a href="https://twitter.com/hashtag/watersector?src=hash&amp;ref_src=twsrc%5Etfw">
              #watersector
            </a>
            <a href="https://twitter.com/hashtag/news?src=hash&amp;ref_src=twsrc%5Etfw">
              #news
            </a>
            <a href="https://twitter.com/hashtag/NewsUpdate?src=hash&amp;ref_src=twsrc%5Etfw">
              #NewsUpdate
            </a>
            <a href="https://twitter.com/hashtag/BusinessNews?src=hash&amp;ref_src=twsrc%5Etfw">
              #BusinessNews
            </a>
            <a href="https://twitter.com/hashtag/LatestNews?src=hash&amp;ref_src=twsrc%5Etfw">
              #LatestNews
            </a>
            <a href="https://twitter.com/hashtag/businessmagazine?src=hash&amp;ref_src=twsrc%5Etfw">
              #businessmagazine
            </a>
            <a href="https://t.co/nYCb5bU6xh">pic.twitter.com/nYCb5bU6xh</a>
          </p>
          &mdash; Insights Success (@insightssuccess){" "}
          <a href="https://twitter.com/insightssuccess/status/1714967823121064162?ref_src=twsrc%5Etfw">
            October 19, 2023
          </a>
        </blockquote>{" "}
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Centre notifies green credit programme to incentivise individuals,
            industries and local bodies for their voluntary environmental
            actions across diverse sectors, reports{" "}
            <a href="https://twitter.com/shagun__k?ref_src=twsrc%5Etfw">
              @shagun__k
            </a>{" "}
            <a href="https://t.co/LsUTm0QoJr">https://t.co/LsUTm0QoJr</a>
            <a href="https://twitter.com/hashtag/GreenCredit?src=hash&amp;ref_src=twsrc%5Etfw">
              #GreenCredit
            </a>{" "}
            <a href="https://t.co/b07sW8DCOH">pic.twitter.com/b07sW8DCOH</a>
          </p>
          &mdash; Down To Earth (@down2earthindia){" "}
          <a href="https://twitter.com/down2earthindia/status/1713189603749060913?ref_src=twsrc%5Etfw">
            October 14, 2023
          </a>
        </blockquote>
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            Banks with more gender-diverse boards provide more credit to greener
            companies{" "}
            <a href="https://twitter.com/hashtag/GreenCredit?src=hash&amp;ref_src=twsrc%5Etfw">
              #GreenCredit
            </a>{" "}
            <a href="https://twitter.com/hashtag/ClimateChange?src=hash&amp;ref_src=twsrc%5Etfw">
              #ClimateChange
            </a>{" "}
            <a href="https://t.co/t9HpeHcpQb">https://t.co/t9HpeHcpQb</a>{" "}
            <a href="https://t.co/yrAnmiwuCk">pic.twitter.com/yrAnmiwuCk</a>
          </p>
          &mdash; Bank for International Settlements (@BIS_org){" "}
          <a href="https://twitter.com/BIS_org/status/1580536350260211712?ref_src=twsrc%5Etfw">
            October 13, 2022
          </a>
        </blockquote>
      </div>
      )}
    </>
  );
};

export default TwitterFeeds;
