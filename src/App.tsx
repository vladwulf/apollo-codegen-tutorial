import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import { LaunchCard } from "./components/LaunchCard";
import { GET_LAUNCHES } from "./graphql/queries.graphql";
import {
  GetLaunches,
  GetLaunchesVariables,
} from "./graphql/__generated__/GetLaunches";

function App() {
  const { data, loading } = useQuery<GetLaunches, GetLaunchesVariables>(
    GET_LAUNCHES,
    {
      variables: {
        limit: 10,
      },
    }
  );

  function renderLoader() {
    if (loading && !data) {
      return (
        <div>
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={50} />
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-40">
      <h1 className="text-4xl font-bold text-center mb-10">SpaceX Launches</h1>
      <div
        className="max-w-screen-sm mx-auto bg-gray-100 shadow-md rounded-md p-5 overflow-auto"
        style={{ maxHeight: 600 }}
      >
        {renderLoader()}
        {data?.launches?.map((launch) => {
          return (
            <LaunchCard
              key={Number(launch?.id)}
              id={Number(launch?.id)}
              missionName={launch?.mission_name!}
              details={launch?.details!}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
