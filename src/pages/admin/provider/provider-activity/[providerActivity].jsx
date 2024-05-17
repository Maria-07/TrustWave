import ProviderLayout from "@/component/Layouts/ProviderLayout";
import RootLayout from "@/component/Layouts/RootLayout";
import { Timeline } from "antd";
import Link from "next/link";
import React, { useState } from "react";

const ProviderActivity = () => {
  const [mode, setMode] = useState("left");
  const onChange = (e) => {
    setMode(e.target.value);
  };

  const activity = [
    {
      id: 1,
      date: "3/15/2024",
      time: "5:15 AM",
      provider: "Vinte",
    },
    {
      id: 2,
      date: "6/27/2023",
      time: "9:29 PM",
      provider: "Youfeed",
    },
    {
      id: 3,
      date: "8/17/2023",
      time: "11:48 AM",
      provider: "Brainsphere",
    },
    {
      id: 4,
      date: "7/7/2023",
      time: "7:00 AM",
      provider: "Rooxo",
    },
    {
      id: 5,
      date: "9/30/2023",
      time: "11:49 AM",
      provider: "Jatri",
    },
    {
      id: 6,
      date: "5/12/2024",
      time: "5:30 AM",
      provider: "Topicware",
    },
    {
      id: 7,
      date: "6/16/2023",
      time: "8:26 PM",
      provider: "Dablist",
    },
    {
      id: 8,
      date: "3/21/2024",
      time: "12:17 AM",
      provider: "Thoughtbeat",
    },
    {
      id: 9,
      date: "2/29/2024",
      time: "12:30 AM",
      provider: "Gabspot",
    },
    {
      id: 10,
      date: "5/7/2024",
      time: "5:46 PM",
      provider: "Zoombox",
    },
  ];

  return (
    <div>
      <Timeline mode={mode} position="left">
        {activity.map((item) => (
          <Timeline.Item
            key={item.id}
            label={
              <>
                <h1>{item.date}</h1>
                <h1>{item.time}</h1>
              </>
            }
          >
            <div className="border p-2 rounded-md shadow-sm">
              <h1>Provider</h1>
              <p className="text-sm font-normal">
                {item.provider}{" "}
                <Link className="text-secondary" href={"#"}>
                  View Details
                </Link>
              </p>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default ProviderActivity;

ProviderActivity.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <ProviderLayout>{page}</ProviderLayout>
    </RootLayout>
  );
};
