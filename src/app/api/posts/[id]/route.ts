import { Post } from '@/models/Post'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

interface BlogPostProps {
  params: {
    id: string
  }
}

export const GET = async (request: any, { params }: BlogPostProps) => {
  const { id } = params

  try {
    await connect()

    const post = await Post.findById(id)
    return new NextResponse(JSON.stringify(post), { status: 200 })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}
