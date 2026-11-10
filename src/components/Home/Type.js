import dynamic from "next/dynamic";

import { typewriter } from "../../data/content";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

function Type() {
  return (
    <Typewriter
      options={{
        strings: typewriter,
        autoStart: true,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Type;
