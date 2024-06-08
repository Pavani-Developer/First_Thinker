import * as React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#141417', color: 'white', py: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Foodei
            </Typography>
            <Typography variant="body2" color="textSecondary">
              © 2023 Foodei Technologies Pvt. Ltd
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton aria-label="Facebook" color="inherit" href="https://facebook.com">
                <FacebookIcon />
              </IconButton>
              <IconButton aria-label="Twitter" color="inherit" href="https://twitter.com">
                <TwitterIcon />
              </IconButton>
              <IconButton aria-label="Instagram" color="inherit" href="https://instagram.com">
                <InstagramIcon />
              </IconButton>
              <IconButton aria-label="LinkedIn" color="inherit" href="https://linkedin.com">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              About
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Careers
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Team
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Swiggy One
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Swiggy Instamart
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Swiggy Genie
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Help & Support
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Partner with Us
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Ride with Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Terms & Conditions
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Cookie Policy
            </Link>
            <Link href="#" color="inherit" variant="body2" display="block" gutterBottom>
              Privacy Policy
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ mt: 5 }}>
          <Typography variant="h6" gutterBottom>
            We deliver to:
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Bangalore</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Gurgaon</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Hyderabad</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Delhi</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Mumbai</Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Pune</Typography>
            </Grid>
            {/* Add more cities as needed */}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
