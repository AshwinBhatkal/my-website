import { useState } from "react";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Hero from "../components/hero";
import Layout from "../components/layout";
import parse from "html-react-parser";
import { Controller, useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  description: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
  ideas: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(9),
    },
  },

  contactForm: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(9),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(9),
      marginBottom: theme.spacing(4.5),
    },
  },
}));

const ideas = [
  "<strong>Happiness is a journey, not a destination</strong> - Finding the right balance between contentment and ambition is crucial for a happy life. Take life one day at a time yet don't lose sight of the future. It's all about the balance.",
  "<strong>What goes around comes around</strong> - All your actions, voluntary or <em>involuntary</em>, have reactions that will find it's way to come back to you in some form or the other, good or bad.",
  `<strong>We always have a choice!</strong> - <em>"Whatever comes our way, whatever battle we have raging inside us, we always have a choice. It's the choices that make us who we are, and we can always choose to do what's right"</em> - Spider-Man(2002)`,
  `<strong>Ego hinders growth</strong> - There is no bigger hinderance to growth than your own ego. Your emotional side will always go on the defensive at first whenever challenged. You have to let your guard down and question yourself, "Is there something I can do better here?"`,
  // "<strong>There's no problem knowledge cannot solve</strong> - Well, maybe one problem. <em>Learning how and where to search for the right knowledge as is it dedication, persistence and a little bit of luck.</em>.",
  // "<strong>Keep learning</strong> - The worst thing that could happen for most people is to succeed. Once they succeed, their focus shifts from continuing to learn and expand to replicating prior results. It’s tragic when the mind that was successful in the past congeals in contentment. Yearn to learn and grow.",
  "<strong>Be authentic</strong> - Being authentic is a conscious decision you make every single day. Identify your strengths and accept your imperfections. Improve and strive to provide value daily.",
];

export default function Home() {
  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(true);
  const [message, setMessage] = useState("");

  const onSubmit = async (templateParams) => {
    setIsLoading(true);
    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      reset();
      setIsLoading(false);
      setOpen(true);
      setMessage("Form Submitted Succesfully");
    } catch (e) {
      // console.log(e);
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
    <Layout>
      <Head>
        <title>Ashwin Bhatkal - Storyteller, Developer, Blogger</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Hero />
      </section>
      <Container maxWidth="lg">
        <section className={classes.description}>
          <Typography variant="h4" align="center">
            I believe success is best achieved by working on all spheres of your
            life that you deem important.
          </Typography>
        </section>
      </Container>
      <Container maxWidth="md">
        <section className={classes.ideas}>
          <Typography variant="h2" align="center" gutterBottom>
            Ideas I Live By
          </Typography>
          <List>
            {ideas.map((idea, index) => (
              <ListItem key={index}>
                <ListItemText
                  primaryTypographyProps={{
                    align: "justify",
                    variant: "body1",
                  }}
                >
                  {`${index + 1}. `}
                  {parse(idea)}
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </section>
        <section className={classes.contactForm}>
          <Typography variant="h2" align="center" gutterBottom id="contact">
            Get in touch
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Want to work on a project or collaborate? Use the contact form below
          </Typography>
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
                    placeholder="Message"
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
        </section>
      </Container>
    </Layout>
  );
}
