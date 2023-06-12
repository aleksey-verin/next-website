// import Post from '@/models/Post'
// import Post from '@/models/Post'
import { Post } from '@/models/Post'
import connect from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (request: any) => {
  try {
    await connect()

    const posts = await Post.find()
    console.log(posts)
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new NextResponse('Database error', { status: 500 })
  }
}
