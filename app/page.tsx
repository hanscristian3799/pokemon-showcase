import PokemonList from "@/components/pokemon/PokemonList";
import { Suspense } from "react";
import Loading from "./loading";

const Home = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <PokemonList />
            </Suspense>
        </>
    );
};

export default Home;
