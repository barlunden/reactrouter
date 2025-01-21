import React from "react";

import Header from "../components/Header";
import Toggle from "../components/Toggle";

const Settings = () => {
  return (
    <>
      <Header />
      <div className="h-fit bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-50 content-center">
        <p className="text-center text-5xl py-8">This is the Settings page.</p>
        <Toggle />
      </div>
    </>
  );
};

export default Settings;
