import {
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Head from "next/head";
import Hero from "../components/hero";
import Layout from "../components/layout";
import parse from "html-react-parser";

const useStyles = makeStyles((theme) => ({
  description: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(12),

    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
    },
  },
  ideas: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(6),

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
      </Container>
    </Layout>
  );
}
