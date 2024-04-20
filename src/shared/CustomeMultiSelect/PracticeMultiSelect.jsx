/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

const PracticeMultiSelect = ({
  practices,
  setPracticeId,
  setFetchQuery,
  theme,
}) => {
  console.log(theme);
  const [selected, setSelected] = useState([]);
  const patientDataProcess = () => {
    let processedData = [];
    if (practices) {
      for (let x of practices) {
        /*processedData.push({
          label: x?.client_full_name,
          value: x?.client_full_name,
          id: x?.id,
        });*/
        processedData.push({
          label: x?.name,
          value: x?.name,
          id: x?.id,
        });
      }
    }
    return processedData;
  };

  const dataoptions = patientDataProcess();

  const customValueRenderer = (selected, _options) => {
    if (selected.length) {
      if (selected.length > 3) return `All Selected ${selected.length}`;
      return selected.map(({ label }) => label + "," + " ");
    }
    return "None selected";
  };

  // const getId = selected.map((item) => item.id);
  // console.log("selected PracticeMultiSelect", getId);

  useEffect(() => {
    const getPracticeMultiSelectId = async () => {
      const getId = selected.map((item) => item.id);
      // setPracticeId(getId);
      // setFetchQuery(false);
    };
    getPracticeMultiSelectId();
  }, [selected, setPracticeId]);

  //console.log(selected);

  // useEffect(() => {
  //   const getPracticeMultiSelectId = async () => {
  //     const getId = selected.map((item) => item.id);
  //     if (getId) {
  //       receivedData(getId);
  //     }
  //   };
  //   getPracticeMultiSelectId();
  // }, [selected, receivedData]);

  return (
    <>
      {theme ? (
        <MultiSelect
          // ClearSelectedIcon={<FaTimes />}
          // ArrowRenderer={() => <BiChevronDown />}
          className="listview mt-1"
          options={dataoptions}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          valueRenderer={customValueRenderer}
        />
      ) : (
        <MultiSelect
          // ClearSelectedIcon={<FaTimes />}
          // ArrowRenderer={() => <BiChevronDown />}
          className="Global mt-[4px]"
          options={dataoptions}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          valueRenderer={customValueRenderer}
        />
      )}
    </>
  );
};

export default PracticeMultiSelect;
