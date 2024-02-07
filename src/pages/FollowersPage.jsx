import FollowerCard from "../components/FollowerCard";
import TeamFollowers from "../data/followers.json";

const FollowersPage = () => {
  console.log(TeamFollowers);

  return (
    <div className="m-10">
      <h1 className="text-2xl font-semibold mb-5">My Team!</h1>
      <div className="grid grid-cols-3 gap-5">
        {TeamFollowers.map((team) => {
          return (
            <FollowerCard
              key={team.id}
              name={team.name}
              image={`${team.github}.png`}
              role="Junior FullStack Intern"
            />
          );
        })}
      </div>
    </div>
  );
};

export default FollowersPage;
