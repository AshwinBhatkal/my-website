import {
  Box,
  Button,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const { control, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (templateParams) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.EMAIL_JS.SERVICE_ID,
        process.env.EMAIL_JS.TEMPLATE_ID,
        templateParams,
        process.env.EMAIL_JS.USER_ID
      );
      reset();
      setIsLoading(false);
      setOpen(true);
      setMessage("Form Submitted Succesfully");
    } catch (e) {
      console.error(e);
      setIsLoading(false);
      setOpen(true);
      setMessage("Failed to Submit Form");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
    setMessage("");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Box mt={4} display="flex" gridGap={12}>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: "Name is required" }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <TextField
                inputRef={ref}
                aria-describedby="name"
                color="primary"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                label="Name"
                placeholder="Name"
                value={value}
                onChange={onChange}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email address is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <TextField
                inputRef={ref}
                aria-describedby="email"
                color="primary"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                label="Email address"
                placeholder="Email address"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Box>
        <Box mt={4}>
          <Controller
            name="subject"
            control={control}
            defaultValue=""
            rules={{
              required: "Subject is required",
            }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <TextField
                inputRef={ref}
                aria-describedby="subject"
                color="primary"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                label="Subject"
                placeholder="Subject"
                value={value}
                onChange={onChange}
              />
            )}
          />
        </Box>
        <Box mt={4}>
          <Controller
            name="message"
            control={control}
            defaultValue=""
            rules={{
              required: "Please fill in your message",
            }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error },
            }) => (
              <TextField
                inputRef={ref}
                aria-describedby="message"
                color="primary"
                variant="outlined"
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                label="Message"
                placeholder="Enter your message here"
                value={value}
                onChange={onChange}
                multiline
                rows={4}
              />
            )}
          />
        </Box>
        <Box mt={4} align={"center"}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={isLoading}
          >
            Submit
          </Button>
        </Box>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={message}
      />
    </>
  );
}
