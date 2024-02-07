import PropTypes from "prop-types";

const FollowerCard = ({
  name = "User",
  image = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.1448711260.1707004800&semt=ais",
  role = "unknown",
}) => {
  return (
    <div
      className="bg-white p-10 rounded shadow text-center mb-5"
      //   key={iteration}
    >
      <img
        src={image}
        alt="Anbuselvan Rocky"
        className="w-40 h-40 rounded-full mx-auto object-cover"
      />
      <div className="mt-5">
        <h4 className="font-semibold text-lg">{name}</h4>
        <small>{role}</small>
      </div>
    </div>
  );
};

FollowerCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  role: PropTypes.string,
};

export default FollowerCard;
