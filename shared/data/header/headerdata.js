import dynamic from 'next/dynamic';
const Searchable = dynamic(() => import('react-searchable-dropdown'), { ssr: false });

export default function Selectoptions() {
  return (
    <div >
      <Searchable className="form-control select2 "
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          {
            value: "",
            label: "All categories"

          },
          {
            value: "it projects",
            label: "IT Projects"
          },
          {
            value: "business case",
            label: "Business Case"
          },
          {
            value: "microsoft project",
            label: "Microsoft Project"
          },
          {
            value: "risk ]management",
            label: "Risk Management"
          },
          {
            value: "popular",
            label: "Popular"
          },
          {
            value: "team building",
            label: "Team Building"
          },
        ]}
        onSelect={(value) => {
          console.log(value);
        }}
        listMaxHeight={140} //by default 140
      />
    </div>
  );
}