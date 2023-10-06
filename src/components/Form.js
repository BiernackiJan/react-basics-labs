import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";


const AddTaskForm = (props) => {
  const prioritySetting = ["Low", "Medium", "High"];
  
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    priority: "Low",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit(formData);
    setFormData({
      title: "",
      deadline: "",
      priority: "Low",
      description: "",
    });
  };

  return(
    <div>
    <Box
      component = "form"
      sx={{
        '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
      }}
      onSubmit={handleSubmit}
      >
      
      <div>
        <TextField
          required
          id="outlined-required"
          name="title"
          label="Task Title"
          InputLabelProps={{ shrink: true }}
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <TextField
          required
          name="deadline"
          label="Deadline"
          InputLabelProps={{ shrink: true }}
          type="date"
          value={formData.deadline}
          onChange={handleChange}
        />
      </div>

      <div>
        <Select
          required
          name="priority"
          label="Priority"
          value={formData.priority}
          onChange={handleChange}
          >
            {prioritySetting.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
      </div>

      <div>
        <TextField
          name="description"
          id="outlined-multiline-static"
          label="Task Details"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <Button 
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            m: 1,
            p: 1,
            width: '95%'
          }}
        >
          Add Task
        </Button>
      </div>

    </Box>
    </div>
  );
};

export default AddTaskForm;