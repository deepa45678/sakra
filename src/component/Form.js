import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "@mui/material/Button";

export default function MultilineTextFields() {
  const [InpValue, setInpValue] = React.useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInpValue((v) => [...v, { name: value }]);
    console.log("InpValue", InpValue);
  };

  const dropdownValues = [
    {
      label: "Source",
      inpName: "Source",
      options: ["Inbound", "Premium Clinik", " Home care"],
    },
    {
      label: "Service Line",
      inpName: "Line",
      options: [
        "Appointment",
        "Modify Appointment",
        "Emergency",
        "Patient Feedback / Complaint",
        "Diagnostics",
        "Admission",
        "COVID",
        "Home Care",
        "Call Drop",
        "General Query",
      ],
    },
    {
      label: "Patient Type",
      inpName: "Patient",
      options: ["New Patient", "Repeat Patient"],
    },
    {
      label: "Services",
      inpName: "Services",
      options: [
        "Consultaion",
        "Healthcheck",
        "Digonastic(X-ray)",
        "Ultrasound(USG)",
        "Mammograpy(Mammo)",
        "Bonedenistometry(BMD)",
        "ECHO",
        "TMT",
        "ECG",
        "Audiometry",
        "Sample collection",
        "Procedure-injection,dressing,vaccination",
        "Dialysis",
        "VC Consultation",
        "Health Check",
        "Appointment Query",
        "Overbooking-OPD",
        "VC Re-Schdule",
        "Health Check",
        "Query",
        "OPD Cancel",
        "Others",
        "Radiology",
        "Admission(Medical)",
        "Admission – Surgery",
        "Procedure",
        "Home care – Lab",
        "Home care- Pharmacy",
        "Home care Nursing",
        "Home care- Physiotherapy",
        "Home care – Others ",
        "COVID test",
        "COVID admission",
        "Radiology/Scanning",
        "Radiology",
        "Admission - Medical",
        "Customer - Call Drop",
        "Columbia Asia",
        "Language Barrier",
      ],
    },
    {
      label: "Hospital Name",
      inpName: "Name",
      options: ["Sakra", "Speciality Clinic", "HomeCare"],
    },
    {
      label: "Select Department",
      inpName: "Department",
      options: [
        "ONCOLOGY",
        "CARDIOLOGY",
        "CTVS",
        "DERMATOLOGY",
        "DENTAL",
        "GASTRO MEDICINE",
        "SURGICAL GASTRO SERVICE",
        "ENT & HEAD NECK SURGERY",
        "ENDOCROCRINLOGY & DIABETES",
        "OBSTERICS & GYNAECOLOGY",
        "INTERNAL MEDICINE",
        "IVF",
        "NEUROLOGY",
        "NEURO SURGRY",
        "NEPHROLOGY",
        "OPTHALMOLOGY",
        "ORTHOPEDICS",
        "PEDIATRIC GASTROENTROLOGY",
        "PAEDIATRIC & NEONATOLOGY",
        "PAEDIATRIC SURGERY & PAEDIATRIC UROLOGY",
        "PLASTIC SURGERY",
        "HEALTH CHEKUP",
        "PSYCHIATRY",
        "PULMONOLOGY",
        "PHYSICAL MEDICINE,REHABILITATION & SPORTS MEDICINE",
        "RADIOLOGY & IMAGING",
        "RHEUMATLOGY",
        "UROLOGY & ANDRALOGY",
        "CRITICAL CARE-ICUS,CCU & HEART COMMAND",
        "BLOOD BANK",
        "LABOROTARY SERVICE",
        "CLINICAL PHARMACOLOGY",
        "ACCIDENT AND EMERGENCY",
        "ANAESTHESIA",
        "DIETICIAN",
        "NURSING SHORT TERM SERVICE",
        "NURSING SERVICES",
        "PHYSIOSERVICE",
        "MEDICALEQUIPMENT",
        "PHELBOTOMY",
        "COVID HOME ISOLATION CARE",
      ],
    },
    {
      label: "Select Priority",
      inpName: "Priority",
      options: ["normal", "critical", "urgent"],
    },
    {
      label: "abonded call",
      inpName: "call",
      options: ["YES", "NO"],
    },
    {
      label: "Lead type",
      inpName: "type",
      options: ["valid lead", "invalid"],
    },
  ];

  return (
    <>
      {" "}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          {dropdownValues.map((item, index) => (
            <TextField
              key={`options-${index}`}
              id="outlined-select-currency"
              select
              name={item.inpName}
              label={item.label}
              value={InpValue.field1}
              onChange={handleChange}
              placeholder="select"
            >
              <MenuItem value={0}> Select {item.label}</MenuItem>
              {item.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          ))}
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Alternate caller number"
            value={InpValue.Alternate}
            name="Alternate"
            onChange={handleChange}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Doctor Name"
            name="Doctor"
            value={InpValue.Doctor}
            onChange={handleChange}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Patient Name"
            name="Patient"
            value={InpValue.Patient}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="caller number"
            value={InpValue.Alternate}
            name="Alternate"
            onChange={handleChange}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Caller Name"
            name="Caller"
            value={InpValue.Doctor}
            onChange={handleChange}
          />
        </div>
      </Box>
      <br></br>
      <br></br>
      <div>
        <TextField fullWidth label="Remark" id="Remark" />
        <br></br>
        <br></br>
        <br></br>
        <div>
         
          <TextField
            id="outlined-select-currency"
            select
            name="status" fullWidth
            label="Select Status"
            value={InpValue.status}
            onChange={handleChange}
            placeholder="status"
          >
            <MenuItem value={0}>Select status</MenuItem>
            <MenuItem value={0}>Lead converted </MenuItem>
            <MenuItem value={0}>Intiated</MenuItem>
            <MenuItem value={0}>Lead closed</MenuItem>
            <MenuItem value={0}>Non-contactable</MenuItem>
          </TextField>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <Button
          variant="contained"
          color="success"
          fullWidth
          style={{ width: "100%" }}
        >
          Save
        </Button>
      </div>
    </>
  );
}
