import { db } from "@/lib/db";

export const getAllProposes = async () => {
  try {
    console.log('Fetching getAllProposes data...');
    const proposes = await db.proposal.findMany({
    });
    console.log('Fetching getAllProposes data...');
    return proposes;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch getAllProposes data.');
  }
};