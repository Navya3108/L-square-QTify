import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Model.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};


export default function ModalNew(val) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} className="button" sx={{backgroundColor:"black"}}>
        Give Feedback
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500
          }
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Feedback
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <input
                type="text"
                id="nameInput"
                placeholder="FullName"
                style={{ marginBottom: "10px" }}
              />
              <input
                type="text"
                id="nameInput"
                placeholder="EmailId"
                style={{ marginBottom: "10px" }}
              />
              <textarea
                placeholder="description"
                style={{ marginBottom: "10px" }}
              />
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
