import { setupWorker } from 'msw';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);
