"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
<>
<Link
      href="/"
      className="font-normal space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20 flex"
    >
      <Image
        src="https://cp.urahost.fr/templates/lagom2/assets/img/logo/logo_big.778950061.png"
        alt="logo"
        width={30}
        height={30}
        className="dark:hidden"
      />
          <Image
      src="https://cp.urahost.fr/templates/lagom2/assets/img/logo/logo_big_inverse.526756489.png"
      alt="logo"
      width={30}
      height={30}
      className="hidden dark:flex"
    />
      <span className="font-medium text-black dark:text-white">Urahost</span>
    </Link></>
  );
};
