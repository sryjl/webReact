import React from "react";
import Index from "../view/index/index";
import Course from "../view/course/index";
import Lecturer from "../view/lecturer/index";
import Login from "../view/login/index";
import Work from "../view/work/index";

const routerList = [
  {
    name: "首页",
    path: "/",
    exact: true, //是否精确匹配
    render(props) {
      console.log(props);
      return <Index {...props} />;
    },
  },
  {
    name: "课程安排",
    path: "/course",
    exact: false,
    render(props) {
      return <Course {...props} />;
    },
  },
  {
    name: "讲师",
    path: "/lecturer",
    exact: false,
    render(props) {
      return <Lecturer {...props} />;
    },
  },
  {
    name: "登陆",
    path: "/login",
    exact: false,
    render(props) {
      return <Login {...props} />;
    },
  },
  {
    name: "作品详情",
    path: "/work",
    exact: false,
    render(props) {
      return <Work {...props} />;
    },
  },
];

export default routerList;
