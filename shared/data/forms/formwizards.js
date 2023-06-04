import React, { Fragment, useState } from "react";
import StepZilla from "react-stepzilla";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Form, } from "react-bootstrap";
import validator from "validator";

const Login = () => {
  return (
    <Fragment>
      <div>
        <section>
          <div className="form-group">
            <label className="main-content-label tx-11 tx-medium tx-gray-600">
              Email Address
            </label>
            <input className="form-control" required="" type="email" />
          </div>
          <div className="form-group">
            <label className="main-content-label tx-11 tx-medium tx-gray-600">
              Password
            </label>
            <input className="form-control" required="" type="password" />
          </div>
          <label className="ckbox mb-3">
            <input type="checkbox" />
            <span className="tx-13">Check me out</span>
          </label>
        </section>
      </div>
    </Fragment>
  )
}
const Billing = () => {
  return (
    <Fragment>
      <div>

        <section>
          <div className="form-group">
            <label className="main-content-label tx-11 tx-medium tx-gray-600">
              User Name
            </label>
            <input className="form-control" required="" type="text" />
          </div>
          <div className="form-group">
            <label className="main-content-label tx-11 tx-medium tx-gray-600">
              Email Address
            </label>
            <input className="form-control" required="" type="email" />
          </div>
          <div className="form-group">
            <label className="main-content-label tx-11 tx-medium tx-gray-600">
              Password
            </label>
            <input className="form-control" required="" type="password" />
          </div>
          <label className="ckbox mb-3">
            <input type="checkbox" />
            <span className="tx-13">Check me out</span>
          </label>
        </section>
      </div>
    </Fragment>
  )
}
const End = () => {
  return (
    <Fragment>

      <div>
        <section>
          <label className="ckbox mb-3">
            <input type="checkbox" />
            <span className="tx-13">I agree terms & Conditions</span>
          </label>
        </section>
      </div>
    </Fragment>

  )
}


const stepswizard =
  [
    { name: 'Login', component: <Login /> },
    { name: 'New User', component: <Billing /> },
    { name: 'End', component: <End /> },
  ]
export const AccordionWizardForm = () => {
  return (
    <div className='step-progress'>
      <h6>
        <StepZilla steps={stepswizard} />
      </h6>
    </div>
  );
}

// ............................................formvalidation............................
function Name({ nextStep, handleFormData, values }) {
  const [error, setError] = useState(false);
  const submitFormData = (e) => {
    e.preventDefault();
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="form-group">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="firstName"
            defaultValue={values.firstName}
            type="text"
            placeholder="First Name"
            onChange={handleFormData("firstName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid #6259ca" : "" }}
            name="lastName"
            defaultValue={values.lastName}
            type="text"
            placeholder="Last Name"
            onChange={handleFormData("lastName")}
          />
          {error ? (
            <Form.Text style={{ color: "#6259ca" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Button type="submit">Continue</Button>
      </Form>
    </div>
  );
}
function StepTwo({ nextStep, handleFormData, prevStep, values }) {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <div>
      <Form onSubmit={submitFormData}>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="number"
            placeholder="Age"
            onChange={handleFormData("age")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group className="mb-3 form-group">
          <Form.Label>Email</Form.Label>
          <Form.Control
            style={{ border: error ? "2px solid red" : "" }}
            type="email"
            placeholder="email"
            onChange={handleFormData("email")}
          />
          {error ? (
            <Form.Text style={{ color: "red" }}>
              This is a required field
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>
        <div>
          <Button className="float-start" onClick={prevStep}>
            Previous
          </Button>

          <Button className="float-end" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
function Final({ values }) {
  const { firstName, lastName, age, email } = values;
  return (
    <div style={{ textAlign: "left" }}>
      <div>
        <p>
          <strong>First Name :</strong> {firstName}
        </p>
        <p>
          <strong>Last Name :</strong> {lastName}
        </p>
        <p>
          <strong>Age :</strong> {age}
        </p>
        <p>
          <strong>Email :</strong> {email}
        </p>
      </div>
    </div>
  );
}
export function WizardForm() {
  const [step, setstep] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const nextStep = () => {
    setstep(step + 1);
  };
  const prevStep = () => {
    setstep(step - 1);
  };
  const handleInputData = (input) => (e) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };
  switch (step) {
    case 1:
      return (
        <div className="custom-margin">
          <Name
            nextStep={nextStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );

    default:
      return (
        <div className="custom-margin">
          <StepTwo
            nextStep={nextStep}
            prevStep={prevStep}
            handleFormData={handleInputData}
            values={formData}
          />
        </div>
      );

    case 3:
      return (
        <div className="">
          <div className="custom-margin">
            <Final values={formData} />
          </div>
        </div>
      );
  }
}
// <........................................Accordin............................>
const steps = [
  {
    label: "Select campaign settings",
    description: `For each ad campaign that you create, you can control how much
you're willing to spend on clicks and conversions, which networks
and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: "Create an ad group",
    description:
      "An ad group contains one or more ads which target a shared set of keywords.",
  },
  {
    label: "Create an ad",
    description: `Try out different ad text to see what brings in the most customers,
and learn how to enhance your ads using features like ad extensions.
If you run into any problems with your ads, find out how to tell if
they're running and how to resolve approval issues.`,
  },
];

export function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}

//................................................

//End