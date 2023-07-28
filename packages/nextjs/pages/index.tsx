import Link from "next/link";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-4">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Battle For ETH</span>
          </h1>

          <img alt="Game" width={400} height={400} src="/assets/game.png" />

          <p className="text-center text-lg">
            Battle with other to get to the chest
          </p>

          <div className="flex justify-center mb-6">
            <Link href="/game" passHref className=" py-2 px-16 mb-1 mt-3 bg-green-500 rounded baseline hover:bg-green-300 disabled:opacity-50">
              Play
            </Link>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Home;
