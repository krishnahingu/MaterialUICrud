/* eslint-disable dot-notation */
import { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { select, put } from 'redux-saga/effects';
import { setError } from '../store/actions/error';
import { setLoading } from '../store/actions/loading';

const dateFns = new DateFnsUtils();

/**
 * Hook to run a handler once on mount and never again.
 * @param {() => void} handler Function to run on mount.
 * See https://reactjs.org/docs/hooks-reference.html#useeffect
 * See https://github.com/facebook/create-react-app/issues/6880
 * This function is mainly to provide a better signal to the developer than
 * knowing how `useEffect` works when you pass an empty array. It also helps to
 * get around warnings raised by `react-hooks/exhaustive-deps` and we use it
 * instead of `// eslint-disable-next-line react-hooks/exhaustive-deps`.
 * We only run the handler once, so we don't care if dependencies change!
 */
export const useOnMount = (handler) => useEffect(handler, []);

export const loadGooglePlacesScript = () => {
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}&libraries=places`;
  document.head.append(script);
};

// Saga helpers

export function* getHeaders() {
  return yield select((state) => {
    const headers = {};

    if (state.auth.authToken) {
      headers['Authorization'] = `Bearer ${state.auth.authToken}`;
    }
    return headers;
  });
}

export function* handleException(e, errorType) {
  if (!e) return;

  const errorMessage = e?.response?.data?.message;
  yield put(setLoading());
  yield put(setError({ type: errorType, message: errorMessage }));
}

// Formatting helpers

export const convertBytesToKilobytes = (bytes) => {
  const kb = Math.floor(bytes / 1000);
  return `${kb} KB`;
};

export const formatDate = (date, format) => dateFns.format(date, format);

export const formatVideoDuration = (duration) => {
  let formattedDuration = '';

  const durationSplit = duration.split(':');

  if (parseInt(durationSplit[0], 10)) {
    formattedDuration += `${parseInt(durationSplit[0], 10)} hr `;
  }

  if (parseInt(durationSplit[1], 10)) {
    formattedDuration += `${parseInt(durationSplit[1], 10)}:${durationSplit[2]} min`;
  } else if (parseInt(durationSplit[2], 10)) {
    formattedDuration += `${parseInt(durationSplit[2], 10)} sec`;
  }

  return formattedDuration;
};

export const getValueFromToken = (token, value) => {
  if (value === 'role') {
    return 'ROLE_COMPANY_MANAGER';
  }
};
