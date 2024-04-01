import { randomUUID } from "crypto"
import { NextRequest } from "next/server"
import { prisma } from "../../../../db/prisma"

interface ListProposalsRequest extends NextRequest { }

async function getProposals(request: ListProposalsRequest) {

  // get Proposals from prisma
  const proposals = await prisma.proposal.findMany()

  return new Response(JSON.stringify({ proposals }))
}

interface CreateProposalRequest extends NextRequest { }

async function createProposal(request: CreateProposalRequest) {
  const { title, receiverId, authorId } = await request.json()

  const proposal = await prisma.proposal.create({
    data: {
      id: randomUUID(),
      title,
      authorId,
      receiverId
    }
  })

  return new Response(JSON.stringify({ proposal }))
}

export { getProposals as GET, createProposal as POST }