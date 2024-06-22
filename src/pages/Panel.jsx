// data
import { icons } from "../data/Icons";

const Panel = () => {
  return (
    <>
      <h2 className="w-fit text-xl text-zinc-700 dark:text-white relative before:absolute before:top-full before:w-full before:h-1 before:bg-primary">
        Panel
      </h2>

      <div className="mt-12 space-y-4">
        <div className="flex-align-center gap-x-4">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <p className="text-zinc-700 dark:text-white">Account</p>
        </div>

        <div className="text-white grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="p-4 flex-align-center gap-x-3 rounded-xl bg-red-600">
            <span className="text-lg">{icons.user}</span>
            <p>Some Test Text</p>
          </div>
          <div className="p-4 flex-align-center gap-x-3 rounded-xl bg-blue-600">
            <span className="text-lg">{icons.call}</span>
            <p>Some Test Text</p>
          </div>
          <div className="p-4 flex-align-center gap-x-3 rounded-xl bg-pink-600">
            <span className="text-lg">{icons.heart}</span>
            <p>Some Test Text</p>
          </div>
          <div className="p-4 flex-align-center gap-x-3 rounded-xl bg-green-600">
            <span className="text-lg">{icons.info}</span>
            <p>Some Test Text</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Panel;
