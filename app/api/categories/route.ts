import { NextRequest } from "next/server"
import { getCategories } from "@/data/categories"

interface CategoryResponse {
  categoriesEntities: {
    id: string
    name: string
    description: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
  }[]
}

export interface Category {
  value: string
  name: string
}

async function getActiveCategories() {

  const categoriesEntities = await getCategories()
  const response = new Response(JSON.stringify({ categoriesEntities }))
  let categories = [{}];
  if (response.ok) {
    const { categoriesEntities: receivedCategories } = await response.json() as CategoryResponse
    const categoriesFormatted = receivedCategories.map(category => ({
      value: category.name.toLowerCase(),
      name: category.name
    }))
    categories = categoriesFormatted
  }

  return categories
}

export { getActiveCategories as GET }