import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/welcome"} passHref>
      <div className="flex justify-center items-center w-full px-4 gap-x-3 mb-6 mt-2">
        <h1 className="text-2xl font-bold">MM</h1>
      </div>
    </Link>
  );
};

export default Logo;
