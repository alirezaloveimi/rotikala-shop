// all icons
import { icons } from "../data/Icons";

const SectionHeader = ({ title }) => {
  return (
    <div className="flex-center-between mb-6">
      <h4 className="text-zinc-700 dark:text-white text-lg md:text-xl">
        {title}
      </h4>

      <span className="flex-align-center text-primary gap-x-3">
        See All
        {icons.arrowForwar}
      </span>
    </div>
  );
};

export default SectionHeader;
