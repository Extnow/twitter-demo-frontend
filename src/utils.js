// @flow

if (!process.env.REACT_APP_ACCESS_TOKEN) throw new Error('REACT_APP_ACCESS_TOKEN missing');
export const accesToken = process.env.REACT_APP_ACCESS_TOKEN;

if (!process.env.PUBLIC_URL) throw new Error('PUBLIC_URL missing');
export const publicUrl = process.env.PUBLIC_URL;

export const host = 'https://twitter-demo.erodionov.ru';
