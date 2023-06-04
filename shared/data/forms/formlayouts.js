import Multiselect from "react-select";
export const Singleselectday = (props) => {
  const objectArray = [
    { value: "1", label: "1" },
    { value: "2", label: "2 " },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: " 5" },
    { value: "6", label: " 6" },
    { value: "7", label: " 7" },
    { value: "8", label: " 8" },
    { value: "9", label: " 9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: " 12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
    { value: "21", label: "21" },
    { value: "22", label: "22" },
    { value: "23", label: "23" },
    { value: "24", label: "24" },
    { value: "25", label: "25" },
    { value: "26", label: "26" },
    { value: "27", label: "27" },
    { value: "28", label: "28" },
    { value: "29", label: "29" },
    { value: "30", label: "30" },
    { value: "31", label: "31" },
  ];
  return (
    <div>
      <Multiselect classNamePrefix='Select2'
        options={objectArray}
        {...props}
        singleSelect
        displayValue="key"
      />
    </div>
  );
};
export const SingleselectMonth = (props) => {
  const objectArray = [
    { value: "january", label: "January" },
    { value: "february", label: "February " },
    { value: "march", label: "March" },
    { value: "april", label: "April" },
    { value: "may", label: " May" },
    { value: "june", label: " June" },
    { value: "july", label: " July" },
    { value: "august", label: " August" },
    { value: "september", label: " Septmber" },
    { value: "2013", label: "October" },
    { value: "november", label: "November" },
    { value: "december", label: " December" },
  ];
  return (
    <div>
      <Multiselect classNamePrefix='Select2'
        options={objectArray}
        {...props}
        singleSelect
        displayValue="key"
      />
    </div>
  );
};
export const Singleselectyear = (props) => {
  const objectArray = [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021 " },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: " 2018" },
    { value: "2017", label: " 2017" },
    { value: "2016", label: " 2016" },
    { value: "2015", label: " 2015" },
    { value: "2014", label: " 2014" },
    { value: "2013", label: "2013" },
    { value: "2012", label: "2012" },
    { value: "2011", label: " 2011" },
    { value: "2010", label: " 2010" },
    { value: "2009", label: " 2009" },
    { value: "2008", label: " 2008" },
  ];
  return (
    <div>
      <Multiselect classNamePrefix='Select2'
        options={objectArray}
        {...props}
        singleSelect
        displayValue="key"
      />
    </div>
  );
};