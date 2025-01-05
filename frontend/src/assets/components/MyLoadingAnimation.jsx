import { helix } from "ldrs";
import React from "react";
helix.register();

const MyLoadingAnimation = () => {
  return <l-helix size="45" speed="2.5" color="black"></l-helix>;
};

export default MyLoadingAnimation;
