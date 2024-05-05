import { db } from "@/lib/db";

export const getCountAllProposesPending = async () => {
  try {
    console.log('Fetching getAllProposesPending data...');
    const proposes = await db.proposal.findMany({
      where: {
        status: {
          contains: 'Pending',
        },
      }
    });
    console.log('Fetching getAllProposesPending data...');
    return proposes.length;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch getAllProposesPending data.');
  }
};