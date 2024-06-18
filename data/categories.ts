import { randomUUID } from "crypto"
import { NextRequest } from "next/server"
import { db } from "@/lib/db"

export const getCategories = async () => {
    try {
        console.log('Fetching getCategories data...');
        const categories = await db.category.findMany({
          where: {
            isActive: true,
          }
        });
        console.log('Fetching getCategories data...');
        return categories;
      } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch getCategories data.');
      }
  
}