// @flow

if (!process.env.REACT_APP_ACCESS_TOKEN) throw new Error('REACT_APP_ACCESS_TOKEN missing');
export const accesToken = process.env.REACT_APP_ACCESS_TOKEN;

export const host = 'https://twitter-demo.erodionov.ru';