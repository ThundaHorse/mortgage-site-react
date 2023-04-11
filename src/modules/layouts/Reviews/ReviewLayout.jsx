import React, { useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';

export const ReviewSection = () => {
  const [state, setState] = useState({ reviews: [] });
  const [cookies, setCookie, removeCookie] = useCookies(['fetchedReviews']);

  useLayoutEffect(() => {
    function fetchReviews() {
      const url = `${process.env.REACT_APP_API_URL}&partnerId=${process.env.REACT_APP_PARTNER_ID}&nmlsId=${process.env.REACT_APP_NMLS_ID}&reviewLimit=10`;
      const alreadyFetched = cookies.fetchedReviews;

      let now = new Date();
      let time = now.getTime();
      time += 100 * 100;
      now.setTime(time);

      if (!alreadyFetched) {
        removeCookie('fetchedReviews');
        localStorage.clear();

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
          });
      }
      setState({
        reviews: JSON.parse(localStorage?.getItem('fetchedReviews')),
      });
    }

    fetchReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderReviews = () => {
    return (
      <>
        {state.reviews?.length ? (
          <div className='row'>
            {state.reviews.map((review, index) => (
              <div
                className='col'
                key={index}
              >
                {[...Array(review.rating)].map((rev, i) => (
                  <span key={i}>*</span>
                ))}

                <p>{review.reviewerName.displayName}</p>
                <p>{review.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </>
    );
  };

  return <>{renderReviews()}</>;
};
