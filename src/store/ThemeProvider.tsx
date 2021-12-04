import { useState } from "react";

import ThemeContext from "./theme-context";

const ThemeProvider: React.FC<{}> = (props) => {
  const DUMMY_DATA: DataFormat[] = [
    {
      id: "1",
      socialMedia: "Facebook",
      username: "@username",
      data: "1234",
      variation: "up",
      variationAmount: "123",
      overview: [
        {
          metric: "Page Views",

          data: "87",

          variation: "up",

          variationAmount: "3%",
        },
        {
          metric: "Likes",

          data: "52",

          variation: "down",

          variationAmount: "2%",
        },
      ],
    },
    {
      id: "2",
      socialMedia: "Twitter",
      username: "@username",
      data: "1234",
      variation: "up",
      variationAmount: "123",
      overview: [
        {
          metric: "Retweets",

          data: "117",

          variation: "up",

          variationAmount: "303%",
        },
        {
          metric: "Likes",

          data: "507",

          variation: "up",

          variationAmount: "553%",
        },
      ],
    },
    {
      id: "3",
      socialMedia: "Instagram",
      username: "@username",
      data: "1234",
      variation: "up",
      variationAmount: "123",
      overview: [
        {
          metric: "Likes",

          data: "5462",

          variation: "up",

          variationAmount: "2257%",
        },
        {
          metric: "Profile Views",

          data: "52k",

          variation: "up",

          variationAmount: "1375%",
        },
      ],
    },
    {
      id: "4",
      socialMedia: "Youtube",
      username: "@username",
      data: "1234",
      variation: "up",
      variationAmount: "123",
      overview: [
        {
          metric: "Likes",

          data: "107",

          variation: "down",

          variationAmount: "19%",
        },
        {
          metric: "Total Views",

          data: "1407",

          variation: "down",

          variationAmount: "12%",
        },
      ],
    },
  ];

  const [theme, setTheme] = useState<"Light" | "Dark">("Light");

  const changeTheme = (newTheme: "Light" | "Dark") => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        changeTheme: changeTheme,
        data: DUMMY_DATA,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export interface DataFormat {
  id: string;
  socialMedia: "Facebook" | "Instagram" | "Twitter" | "Youtube";
  username: string;
  data: string;
  variation: "up" | "down";
  variationAmount: string;
  overview: [
    {
      metric:
        | "Page Views"
        | "Likes"
        | "Profile Views"
        | "Retweets"
        | "Total Views";

      data: string;

      variation: "up" | "down";

      variationAmount: string;
    },
    {
      metric:
        | "Page Views"
        | "Likes"
        | "Profile Views"
        | "Retweets"
        | "Total Views";

      data: string;

      variation: "up" | "down";

      variationAmount: string;
    }
  ];
}

export default ThemeProvider;
