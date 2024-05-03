import { randomUUID } from "crypto"
import { NextRequest } from "next/server"
import { db } from "@/lib/db"

interface ListCategoriesRequest extends NextRequest { }

async function getCategories(request: ListCategoriesRequest) {
  let response

  // get categories from prisma
  const categories = await db.category.findMany()

  return new Response(JSON.stringify({ categories }))
}

interface CreateCategoryRequest extends NextRequest { }

async function createCategory(request: CreateCategoryRequest) {
  const { name, description } = await request.json()

  const product = await db.category.create({
    data: {
      name,
      description
    }
  })

  return new Response(JSON.stringify({ product }))
}

export { getCategories as GET, createCategory as POST }