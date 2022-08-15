import * as React from 'react';
import Card from '../Card/Card/Card';
import CardActions from '../Card/CardActions/CardActions';
import CardContent from '../Card/CardContent/CardContent';
import Button from '../Button/Button';
import Typography from '../Typography/Typography';
import Container from '../Container/Container';
import Avatar from '../Avatar/Avatar';
import Box from '../Box/Box';
import Grid from '../Grid/Grid';

interface ProfileCardProps {
  name: string;
  email: string;
  phone: string;
  roles: (string | null)[];
}

export default function ProfileCard({
  name,
  email,
  phone,
  roles,
}: ProfileCardProps) {
  return (
    <>
      <Container
        component="main"
        sx={{
          marginTop: '10vh',
          minWidth: '90vw',
        }}
      >
        <Card>
          <CardContent>
            <Box
              component="span"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '2rem',
              }}
            >
              <Avatar
                src=""
                alt="Default avatar image"
                sx={{ width: 96, height: 96, marginBottom: '1rem' }}
              />
              <Typography
                gutterBottom
                variant="h5"
                component="h1"
              >
                {name}
              </Typography>
            </Box>
            <Grid
              container
              spacing={2}
            >
              <Grid
                item
                xs={3}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  Full Name:
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  {name}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  Email Address:
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  {email}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  Phone Number:
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  {phone}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  Roles:
                </Typography>
              </Grid>
              <Grid
                item
                xs={9}
              >
                <Typography
                  variant="body1"
                  component="p"
                >
                  {roles}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <Box
            component="span"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <CardActions>
              <Button>Edit Profile</Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </>
  );
}
