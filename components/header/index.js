import {
  AppBar,
  Box,
  Container,
  Link,
  Toolbar,
  Typography,
} from "@material-ui/core";

export default function Header() {
  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Container maxWidth="md">
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6">ASHWIN BHATKAL</Typography>
              <Box>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Contact</Link>
              </Box>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
