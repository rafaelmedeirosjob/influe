import { NextRequest } from "next/server"
import { getCategories } from "@/data/categories"

async function getActiveCategories() {

  const categoriesEntities = await getCategories()
  const response = new Response(JSON.stringify({ categoriesEntities }))
  return response
}

export { getActiveCategories as GET }