'use client';

import { createCookie } from './actions';

export default function CookieButton() {
  return (
    <button onClick={async () => await createCookie('test')}>Set Cookie</button>
  );
}
