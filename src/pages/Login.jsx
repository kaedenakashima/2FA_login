import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Link as RouterLink } from "react-router-dom"
export const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const { login } = useAuth()
  const onSubmit2Login = async (e) => {
    e.preventDefault()
    console.log('email, pwd',email,pwd)
    if (email === "1@gmail.com" && pwd === "1") {
      await login({ email })
    } else {
      alert("Invalid email or pwd")
    }
  }
  return (
  <Container component="main" maxWidth="xs">
  <Box
    sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Log In
    </Typography>
    <Box component="form" onSubmit={onSubmit2Login} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        onChange={(e) => setPwd(e.target.value)}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Login In
      </Button>
      <Grid container>
        <Grid item>
          <RouterLink to="/register">
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </RouterLink>
        </Grid>
      </Grid>
    </Box>
     {/* <div className='content2'>
     <form onSubmit={handleLogin}>
       <div>
         <label htmlFor="email">Email:</label>
         <input
           id="email"
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
         />
       </div>
       <div>
         <label htmlFor="pwd">Pwd:</label>
         <input
           id="pwd"
           type="pwd"
           value={pwd}
           onChange={(e) => setPwd(e.target.value)}
         />
       </div>
       <button type="submit">Login</button>
     </form>
   </div> */}
  </Box>
</Container>

  )
}