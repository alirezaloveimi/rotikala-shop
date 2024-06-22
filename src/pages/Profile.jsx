import { useUser } from "../context/UserContext";

const Profile = () => {
  const { userInfo } = useUser();

  return (
    <>
      <h2 className="w-fit text-xl text-zinc-700 dark:text-white relative before:absolute before:top-full before:w-full before:h-1 before:bg-primary">
        See Your Profile
      </h2>

      <form className="mt-5 space-y-5">
        <div className="text-zinc-700 dark:text-white space-y-2">
          <label htmlFor="">Full Name :</label>
          <input
            className="w-full bg-main p-2 rounded-lg"
            type="text"
            readOnly
            value={userInfo.fullName}
          />
        </div>
        <div className="text-zinc-700 dark:text-white space-y-2">
          <label htmlFor="">Email :</label>
          <input
            className="w-full bg-main p-2 rounded-lg"
            type="text"
            readOnly
            value={userInfo.email}
          />
        </div>
        <div className="text-zinc-700 dark:text-white space-y-2">
          <label htmlFor="">Paasword :</label>
          <input
            className="w-full bg-main p-2 rounded-lg"
            type="text"
            readOnly
            value={userInfo.password}
          />
        </div>
      </form>
    </>
  );
};

export default Profile;
