import React, { useState } from "react";
import DetailContainer from "./DetailContainer";
import DotNav from "./DotNav";

const ProjectScope = () => {
  const [detailNavSelect, setDetailNavSelect] = useState("matters");

  return (
    <div className="project-scope-container padding-container">
      <aside>
        <DotNav
          setDetailNavSelect={setDetailNavSelect}
          detailNavSelect={detailNavSelect}
        />
      </aside>
      <main>
        <DetailContainer selected={detailNavSelect} />
      </main>
    </div>
  );
};

export default ProjectScope;
