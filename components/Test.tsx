"use client";

import * as z from "zod";

// Commenting out the following line will cause the error to go away
const foo = z.object({});

const Test = () => {
  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
};

export default Test;
