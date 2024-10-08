import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function DemoClass() {
  return (
    <div>
      <div>

      </div>
      <div>
        <Link href="">
          <Image src="../assets/images/say-hello.svg" alt="" width={500} height={500} />
        </Link>
      </div>
    </div>
  );
}
