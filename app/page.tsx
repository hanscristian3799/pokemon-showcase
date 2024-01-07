import PokemonList from "@/components/pokemon/PokemonList";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-end mt-8 mx-8">
                <Link
                    className="bg-main-red p-4 rounded-md cursor-pointer transition-all duration-300 active:opacity-80 text-white"
                    href={`/pokemon/pikachu/ability/moves/games/forms`}
                >
                    Pokemon Filter
                </Link>
            </div>
            <Suspense fallback={<Loading />}>
                <PokemonList />
            </Suspense>
        </>
    );
};

export default Home;
