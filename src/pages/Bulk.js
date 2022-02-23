import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  MenuItem,
  TextField,
} from "@mui/material";
import Header from "../Component/Header";

const types = [
  {
    name: "Model College Entrance",
    label: "Model College Entrance",
  },
  {
    name: "Public Service",
    label: "Public Service",
  },
];

const publicExams = [
  {
    name: "Compulsory",
    label: "Compulsory",
  },
  {
    name: "Combine",
    label: "Combine",
  },
  {
    name: "External Secretariat",
    label: "External Secretariat",
  },
];

const combineExams = [
  {
    name: "C.O. 2",
    label: "C.O 2",
  },
  {
    name: "C.A",
    label: "C.A",
  },
];

const Bulk = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [exam, setExam] = useState("");
  const [publicOptions, setPublicOptions] = useState("");
  const [combineOptions, setCombineOptions] = useState("");
  const [candidate, setCandidate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(exam);
    console.log(candidate);
  };

  return (
    <>
      <Header />
      <Box component="div" className="bulk">
        <Card className="bulk-card">
          <h1 style={{ textAlign: "center", paddingTop: "2rem" }}>
            Bulk Pin Purchase
          </h1>
          <Container>
            <form noValidate autoComplete="off" className="bulk-form">
              <div style={{ paddingBottom: "1.5rem" }}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  fullWidth
                />
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  fullWidth
                />
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  fullWidth
                />
              </div>
              <div style={{ paddingBottom: "1rem" }}>
                <TextField
                  id="outlined-basic"
                  label="Exam Type"
                  select
                  variant="outlined"
                  onChange={(e) => setExam(e.target.value)}
                  value={exam}
                  fullWidth
                  helperText="Please enter the type of exam"
                >
                  {types.map((type, i) => (
                    <MenuItem key={i} value={type.name}>
                      {type.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                {exam === "Public Service" && (
                  <TextField
                    id="outlined-basic"
                    label="Type of Public Service Exam"
                    select
                    variant="outlined"
                    onChange={(e) => setPublicOptions(e.target.value)}
                    value={publicOptions}
                    fullWidth
                  >
                    {publicExams.map((single, i) => (
                      <MenuItem key={i} value={single.name}>
                        {single.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                {exam === "Model College Entrance" ||
                  (publicOptions === "Combine" && (
                    <TextField
                      id="outlined-basic"
                      label="Type of Combine Exam"
                      select
                      variant="outlined"
                      onChange={(e) => setCombineOptions(e.target.value)}
                      value={combineOptions}
                      fullWidth
                    >
                      {combineExams.map((single, i) => (
                        <MenuItem key={i} value={single.name}>
                          {single.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  ))}
              </div>
              <div style={{ paddingBottom: "1.5rem" }}>
                <TextField
                  id="outlined-basic"
                  label="Number of Candidate"
                  variant="outlined"
                  onChange={(e) => setCandidate(e.target.value)}
                  value={candidate}
                  fullWidth
                />
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  style={{ textTransform: "inherit" }}
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Container>
        </Card>
      </Box>
    </>
  );
};

export default Bulk;
