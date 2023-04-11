import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { Paper, Grid, ButtonBase, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const ReviewSection = () => {
  const [state, setState] = useState({ reviews: [] });
  const [cookies, setCookie, removeCookie] = useCookies(['fetchedReviews']);

  useLayoutEffect(() => {
    function fetchReviews() {
      const url = `${process.env.REACT_APP_API_URL}&partnerId=${process.env.REACT_APP_PARTNER_ID}&nmlsId=${process.env.REACT_APP_NMLS_ID}&reviewLimit=10`;
      let alreadyFetched = cookies.fetchedReviews;

      let now = new Date();
      let time = now.getTime();
      time += 100 * 100;
      now.setTime(time);

      if (!alreadyFetched) {
        axios
          .get(url)
          .then((res) => {
            setCookie('fetchedReviews', true, { expires: now });
            localStorage.setItem(
              'fetchedReviews',
              JSON.stringify(res.data.reviews)
            );
            setState({ reviews: [...res.data.reviews] });
          })
          .catch((e) => {
            console.log(e);
            setState({ reviews: [] });
            removeCookie('fetchedReviews');
            localStorage.clear();
          });
      }
      setState({
        reviews: JSON.parse(localStorage?.getItem('fetchedReviews')),
      });
    }

    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const getInitials = (fullName) => {
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let initials = [...fullName.matchAll(rgx)] || [];

    initials = (
      (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
    ).toUpperCase();

    return {
      sx: {
        bgcolor: stringToColor(initials),
      },
      children: `${initials.split(' ')}`,
    };
  };

  const renderReviews = () => {
    return (
      <>
        <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 550,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          {state.reviews?.length ? (
            <Grid container>
              {state.reviews.map((review, index) => (
                <div
                  style={{
                    border: '1px solid black',
                    borderRadius: '6px',
                    margin: '6px',
                    padding: '12px',
                  }}
                  key={index}
                >
                  <Grid
                    item
                    xs={12}
                    sm
                    container
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Grid item>
                      <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Avatar
                          {...getInitials(review.reviewerName.displayName)}
                        />
                      </ButtonBase>
                    </Grid>

                    <Grid item>
                      <FormatQuoteIcon
                        style={{
                          fontSize: 'small',
                          transform: 'rotateY(180deg) translate(0px, -10px)',
                        }}
                      />
                      {[...Array(review.rating)].map((rev, i) => (
                        <Typography
                          gutterBottom
                          variant='subtitle1'
                          component='span'
                          key={i}
                        >
                          <StarBorderIcon />
                        </Typography>
                      ))}
                      <FormatQuoteIcon
                        style={{
                          fontSize: 'small',
                          transform: 'translate(0px, -10px)',
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm
                    container
                    width='100%'
                    padding={2}
                  >
                    <Grid item>
                      <Typography variant='body2'>{review.content}</Typography>
                    </Grid>

                    <Grid
                      item
                      mt={2}
                      mx={2}
                    >
                      <Typography variant='body1'>
                        - {review.reviewerName.displayName}
                      </Typography>
                    </Grid>
                  </Grid>
                </div>
              ))}
            </Grid>
          ) : (
            <></>
          )}
        </Paper>
      </>
    );
  };

  return <>{renderReviews()}</>;
};
