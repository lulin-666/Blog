// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Site title and description
export const SITE_TITLE = "麓林的博客";
export const SITE_DESCRIPTION = "胡桃宵宫纳西妲，可莉绫华芙宁娜";
export const DATE_FORMAT = "ddd MMM DD YYYY";

// User profile information
export const USER_NAME = "麓林";
export const USER_AVATAR = "/profile.webp";

// Server and transition settings
export const SERVER_URL = "https://lulin.us.kg";
export const TRANSITION_API = true;

// Some informative text on the site
export const infoTest = {
  tag: "Tag: ",
  noTag: "Uncategorized",
  tagPage: "Blog - ",
  link: "Link: ",
  prevPage: "Recent posts",
  nextPage: "Older posts",
};

// Menu items for navigation
export const menuItems = [
  { id: "home", text: "主页", href: "/", svg: "home" }, // Home page
  { id: "about", text: "关于", href: "/about", svg: "about" }, // About page
  { id: "blog", text: "博客", href: "/blog", svg: "blog" }, // Blog page
  { id: "project", text: "项目", href: "/project", svg: "project" }, // Projects page
  { id: "friend", text: "友链", href: "/friend", svg: "friend" }, // Friends page
  {
    id: "contact",
    text: "邮件",
    href: "mailto:Zlulin@outlook.com", // Contact email
    target: "_blank", // Open in a new tab
    svg: "contact",
  },
];

// Social media and contact icons
export const socialIcons = [
  {
    href: "https://space.bilibili.com/3493297762863803",
    ariaLabel: "Support my work",
    title: "三连+关注",
    svg: "support",
  },
  {
    href: "https://github.com/lulin-666",
    ariaLabel: "Github",
    title: "Github",
    svg: "github",
  },
  {
    href: "https://space.bilibili.com/3493297762863803",
    ariaLabel: "BiliBili",
    title: "BiliBili",
    svg: "bilibili",
  },
  {
    href: "/rss.xml",
    ariaLabel: "RSS Feed",
    title: "RSS Feed",
    svg: "rss",
  },
];
