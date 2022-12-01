import { Link } from "react-router-dom";
import { useSuperHeroesData } from "./hooks/useSuperHeroesData";

export default function RQSuperHeroesPage() {
  const onSuccess = () => {
    console.log("Perform after data fetching");
  };
  const onError = () => {
    console.log("Perform after encountering error");
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);
  console.log(isLoading, isFetching);

  if (isLoading || isFetching) return <h2>Loading...</h2>;
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div>
        <h2>RQ Super Heroes Page</h2>
        <button onClick={refetch}>Fetch Heroes</button>
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
            </div>
          );
        })}
        {/* {data.map((name) => {
          return <div key={name}>{name}</div>;
        })} */}
      </div>
    </>
  );
}
