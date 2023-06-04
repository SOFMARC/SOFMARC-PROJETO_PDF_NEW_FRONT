import React, { Fragment, useState } from "react";
// import MaskInput from "react-maskinput";
// import Pickr from "@simonwep/pickr";
// import DatePicker from "react-datepicker";
// import Slider from "@mui/material/Slider";
import dynamic from 'next/dynamic';
const Searchable = dynamic(() => import('react-searchable-dropdown'), {
  ssr: false
})
const Slider = dynamic(() => import('@mui/material/Slider'), {
  ssr: false
})
const DatePicker = dynamic(() => import('react-datepicker'), {
  ssr: false
})
const Pickr = dynamic(() => import('@simonwep/pickr'), {
  ssr: false
})
const MaskInput = dynamic(() => import('react-maskinput'), {
  ssr: false
})

// DateMask-start
export function DateMask() {
  const [mask, setMask] = React.useState("00.00.0000");
  const [maskString, setMaskString] = React.useState("DD.MM.YYYY");
  const onChange = (e) => {
    if (parseInt(e.target.value[6], 10) > 2) {
      setMaskString("DD.MM.YY");
      setMask("00.00.00");
    } else {
      setMaskString("DD.MM.YYYY");
      setMask("00.00.0000");
    }
  };
  return (
    <Fragment>
      <MaskInput
        className="form-control"
        alwaysShowMask
        onChange={onChange}
        maskString={maskString}
        mask={mask}
        size={40}
      />
    </Fragment>
  );
  // DateMask-end
}
// USAformat-start
export function USAformat() {
  return (
    <Fragment>
      <MaskInput
        className="form-control"
        alwaysShowMask
        mask={"+1 (000) 000 - 0000"}
        size={40}
        showMask
        maskChar="_"
      />
    </Fragment>
  );
}
// USAformat-end

// Customizationformat-start
export function Customizationformat() {
  return (
    <Fragment>
      <MaskInput
        alwaysShowMask
        className="form-control"
        maskChar="_"
        mask="0000-{0}-0000"
        defaultValue="123456789"
        size={40}
      />
    </Fragment>
  );
}
// Customizationformat-end

// Creditcardformat-start
export function Creditcardformat() {
  return (
    <Fragment>
      <MaskInput
        alwaysShowMask
        className="form-control"
        maskChar="_"
        mask="0000-0000-0000-0000"
        size={40}
      />
    </Fragment>
  );
}
// Creditcardformat-end

// Nano
export function Nanomethod() {
  const colorPicker = React.useRef();

  React.useEffect(() => {
    if (colorPicker.current) {
      // Pickr.create({
      //   el: ".color-picker",
      //   theme: "nano", // or 'monolith', or 'nano'
      //   swatches: [
      //     "rgba(244, 67, 54, 1)",
      //     "rgba(233, 30, 99, 0.95)",
      //     "rgba(156, 39, 176, 0.9)",
      //     "rgba(103, 58, 183, 0.85)",
      //     "rgba(63, 81, 181, 0.8)",
      //     "rgba(33, 150, 243, 0.75)",
      //     "rgba(3, 169, 244, 0.7)",
      //     "rgba(0, 188, 212, 0.7)",
      //     "rgba(0, 150, 136, 0.75)",
      //     "rgba(76, 175, 80, 0.8)",
      //     "rgba(139, 195, 74, 0.85)",
      //     "rgba(205, 220, 57, 0.9)",
      //     "rgba(255, 235, 59, 0.95)",
      //     "rgba(255, 193, 7, 1)",
      //   ],

      //   components: {
      //     // Main components
      //     preview: true,
      //     opacity: true,
      //     hue: false,

      //     // Input / output Options
      //     interaction: {
      //       hex: true,
      //       // rgba: true,
      //       // hsla: true,
      //       // hsva: true,
      //       // cmyk: true,
      //       input: true,
      //       clear: true,
      //       save: true,
      //     },
      //   },
      // });
    }
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}
// Classic
export function Classicmethod() {
  const colorPicker = React.useRef();

  React.useEffect(() => {
    if (colorPicker.current) {
      // Pickr.create({
      //   el: ".color-picker",
      //   theme: "classic", // or 'monolith', or 'nano'

      //   swatches: [
      //     "rgba(244, 67, 54, 1)",
      //     "rgba(233, 30, 99, 0.95)",
      //     "rgba(156, 39, 176, 0.9)",
      //     "rgba(103, 58, 183, 0.85)",
      //     "rgba(63, 81, 181, 0.8)",
      //     "rgba(33, 150, 243, 0.75)",
      //     "rgba(3, 169, 244, 0.7)",
      //     "rgba(0, 188, 212, 0.7)",
      //     "rgba(0, 150, 136, 0.75)",
      //     "rgba(76, 175, 80, 0.8)",
      //     "rgba(139, 195, 74, 0.85)",
      //     "rgba(205, 220, 57, 0.9)",
      //     "rgba(255, 235, 59, 0.95)",
      //     "rgba(255, 193, 7, 1)",
      //   ],

      //   components: {
      //     // Main components
      //     preview: true,
      //     opacity: true,
      //     hue: false,

      //     // Input / output Options
      //     interaction: {
      //       hex: true,
      //       rgba: true,
      //       hsla: true,
      //       hsva: true,
      //       cmyk: true,
      //       input: true,
      //       clear: true,
      //       save: true,
      //     },
      //   },
      // });
    }
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}
// Monolith
export function Monolithmethod() {
  const colorPicker = React.useRef();

  React.useEffect(() => {
    if (colorPicker.current) {
      // Pickr.create({
      //   el: ".color-picker",
      //   theme: "classic", // or 'monolith', or 'nano'

      //   swatches: [
      //     "rgba(244, 67, 54, 1)",
      //     "rgba(233, 30, 99, 0.95)",
      //     "rgba(156, 39, 176, 0.9)",
      //     "rgba(103, 58, 183, 0.85)",
      //     "rgba(63, 81, 181, 0.8)",
      //     "rgba(33, 150, 243, 0.75)",
      //     "rgba(3, 169, 244, 0.7)",
      //     "rgba(0, 188, 212, 0.7)",
      //     "rgba(0, 150, 136, 0.75)",
      //     "rgba(76, 175, 80, 0.8)",
      //     "rgba(139, 195, 74, 0.85)",
      //     "rgba(205, 220, 57, 0.9)",
      //     "rgba(255, 235, 59, 0.95)",
      //     "rgba(255, 193, 7, 1)",
      //   ],

      //   components: {
      //     // Main components
      //     preview: true,
      //     opacity: true,
      //     hue: false,

      //     // Input / output Options
      //     interaction: {
      //       // hex: true,
      //       // rgba: true,
      //       // hsla: true,
      //       // hsva: true,
      //       // cmyk: true,
      //       input: true,
      //       clear: true,
      //       save: true,
      //     },
      //   },
      // });
    }
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}

// Date-time-picker
export const Datetimepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="Pp"
    />
  );
};

// Date-picker
export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

// Date-previous-month
export const Previousmonth = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      showPreviousMonths
      onChange={(date) => setStartDate(date)}
      monthsShown={2}
    />
  );
};

// Month-Range
export const Monthrange = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="MM/yyyy"
      showMonthYearPicker
      showFullMonthYearPicker
    />
  );
};

// Year-range
export const Yearrange = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      className="form-control"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showYearPicker
      dateFormat="yyyy"
    />
  );
};

// RangeSlider1
export function Rangeslider() {
  const getText = (value) => `${value}`;
  const coustomMarks = [
    {
      label: "10",
      value: 10,
    },

    {
      label: "100",
      value: 100,
    },
  ];
  return (
    <div>
      <Slider
        style={{
          color: "#6259ca",
        }}
        min={10}
        max={100}
        defaultValue={20}
        marks={coustomMarks}
        getAriaValueText={getText}
        valueLabelDisplay="on"
      />
    </div>
  );
}

// RangeSlider2
export function Labelalwaysvisible() {
  const getText = (value) => `${value}`;
  const coustomMarks = [
    {
      label: "100",
      value: 100,
    },

    {
      label: "1000",
      value: 1000,
    },
  ];
  return (
    <div>
      <Slider
        style={{
          color: "#6259ca",
        }}
        min={100}
        max={1000}
        defaultValue={550}
        marks={coustomMarks}
        getAriaValueText={getText}
        valueLabelDisplay="on"
      />
    </div>
  );
}

// Rangeslider3
export function SliderDisabled() {
  return (
    <div>
      <Slider
        style={{
          color: "",
        }}
        defaultValue={20}
        valueLabelDisplay="on"
        step={10}
        marks
        min={10}
        max={110}
        disabled
      />
    </div>
  );
}

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([20, 40,]);

  const handleChange1 = (_event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };
  return (
    <div>
      <Slider
        style={{
          color: "#6259ca",
        }}
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        getAriaValueText={valuetext}
        disableSwap
        valueLabelDisplay="on"
      />
    </div>
  );
}

export const Dayrange = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Fragment>
      <DatePicker
        className="form-control"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
      // endDate={endDate}
      />
    </Fragment>
  );
}



export function SelectoptionsSizesLg() {
  return (
    <div >
      <Searchable className="form-control select2 "
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          {
            value: "czech republic",
            label: "Czech Republic"
          },
          {
            value: "germany",
            label: "Germany"
          },
          {
            value: "poland",
            label: "Poland"
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

export function SelectoptionsSizesMd() {
  return (
    <div >
      <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          {
            value: "czech republic",
            label: "Czech Republic"
          },
          {
            value: "germany",
            label: "Germany"
          },
          {
            value: "poland",
            label: "Poland"
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
export function SelectoptionsSizesSm() {
  return (
    <div >
      <Searchable className="form-control select2"
        value="test"
        placeholder="Choose one" // by default "Search"
        notFoundText="No result found" // by default "No result found"
        noInput
        options={[
          {
            value: "czech republic",
            label: "Czech Republic"
          },
          {
            value: "germany",
            label: "Germany"
          },
          {
            value: "poland",
            label: "Poland"
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