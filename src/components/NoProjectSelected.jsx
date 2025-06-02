import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        className="w-16 h-16 object-contain mx-auto"
        alt="No project"
      />

      <h2 className="text-xl font-bold text-stone-500 my-4">
        No project selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>

      <p className="mt-8">
        <Button
          onClick={onStartAddProject}
          className="text-stone-700 hover:text-stone-950 underline"
        >
          Create new project
        </Button>
      </p>
    </div>
  );
}
