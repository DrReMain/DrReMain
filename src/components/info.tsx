import React from "react";

interface IProps {
  github: string;
  office?: string;
  officeCN?: string;
}

const Info: React.FC<IProps> = ({ github, office, officeCN }) => {
  return (
    <>
      <div>
        <label style={{ marginRight: "26px" }}>GitHub:</label>
        <a target="_blank" href={github}>
          {github}
        </a>
      </div>

      {office && (
        <div>
          <label style={{ marginRight: "45px" }}>官网:</label>
          <a target="_blank" href={office}>
            {office}
          </a>
        </div>
      )}
      {officeCN && (
        <div>
          <label style={{ marginRight: "13px" }}>中文官网:</label>
          <a target="_blank" href={officeCN}>
            {officeCN}
          </a>
        </div>
      )}

      <br />
      <br />
    </>
  );
};

export default Info;
