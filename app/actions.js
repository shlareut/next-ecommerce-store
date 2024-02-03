// to be continued -- question -> storing shopping cart in cookies, vs. local storage vs. in database with anonymous user id

'use server';
import { cookies } from 'next/headers';
import React from 'react';

export async function createCookie(value) {
  await cookies().set('test cookie', value);
}
