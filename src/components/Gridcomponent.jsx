import React, { useState } from "react";

const contentData = {
  item1: {
    title: "Campaigns",
    description:
      "Lets you create,monitor and measure the outcomes of a company's marketing across mutiple channels.Optimize sales and profitibility campaign spending and success rate consistently",
    image: "https://www.bridgesuite.ai/assets/image/tabs/campaigns.png",
  },
  item2: {
    title: "Lead Management",
    description:
      "Lets you create,monitor and measure the outcomes of a company's marketing across mutiple channels.Optimize sales and profitibility campaign spending and success rate consistently",
    image: "https://www.bridgesuite.ai/assets/image/tabs/lead-management.png",
  },
  item4: {
    title: "Opportunity Management",
    description:
      "Lets you create,monitor and measure the outcomes of a company's marketing across mutiple channels.Optimize sales and profitibility campaign spending and success rate consistently",
    image:
      "https://www.bridgesuite.ai/assets/image/tabs/opportunity-management.png",
  },
  item5: {
    title: "Quotation",
    description:
      "Lets you create,monitor and measure the outcomes of a company's marketing across mutiple channels.Optimize sales and profitibility campaign spending and success rate consistently",
    image: "https://www.bridgesuite.ai/assets/image/tabs/quotation.png",
  },
  item3: {
    title: "Sales Order",
    description:
      "Lets you create,monitor and measure the outcomes of a company's marketing across mutiple channels.Optimize sales and profitibility campaign spending and success rate consistently",
    image: "https://www.bridgesuite.ai/assets/image/tabs/sales-order.png",
  },
  item6: {
    title: "Target Meter",
    description:
      "Lets you create,monitor and measure the outcomes of a company's marketing across mutiple channels.Optimize sales and profitibility campaign spending and success rate consistently",
    image: "https://www.bridgesuite.ai/assets/image/tabs/target-meter.png",
  },
};

const GridComponent = () => {
  const [activeContent, setActiveContent] = useState(contentData.item1);

  const handleItemClick = (itemKey) => {
    setActiveContent(contentData[itemKey]);
  };

  return (
    <div className="flex items-center justify-center mt-6 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl">
        <div className="space-y-4">
          {Object.keys(contentData).map((key) => (
            <div
              key={key}
              onClick={() => handleItemClick(key)}
              className="cursor-pointer p-4 border rounded-md bg-gray-100 hover:bg-gray-200 transition duration-200"
            >
              <h4 className="font-semibold">{contentData[key].title}</h4>
            </div>
          ))}
        </div>
        <div className="p-4 border rounded-md bg-gray-50">
          <img
            className="h-48 mx-auto"
            src={activeContent.image}
            alt={activeContent.title}
          />
          <h4 className="mt-2 text-lg font-semibold">{activeContent.title}</h4>
          <p className="mt-1 text-sm">{activeContent.description}</p>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
