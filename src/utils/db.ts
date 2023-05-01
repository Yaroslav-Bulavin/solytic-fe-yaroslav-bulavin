// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { db } from '@/mocks/db';

// eslint-disable-next-line max-len
export const getNeededUser = (userId: string) => db.users.find((x: { password: string; id: string; email: string }) => x.id === userId);
