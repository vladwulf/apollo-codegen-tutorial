import React from "react";

type LaunchCardProps = {
  id: number;
  missionName?: string;
  details?: string;
};
export const LaunchCard: React.FC<LaunchCardProps> = (props) => {
  return (
    <div
      className="bg-white p-4 rounded-md shadow text-gray-900 mb-4"
      key={props.id}
    >
      <div className="text-base font-medium text-gray-900">
        {props.missionName}
      </div>
      <p className="text-gray-600 text-xs font-light">{props.details}</p>
    </div>
  );
};
