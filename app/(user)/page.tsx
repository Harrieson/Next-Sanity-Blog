import React from 'react';
import { previewData } from 'next/headers';
import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import PreviewSuspense from '../../components/PreviewSuspense'
import PreviewBlogList from '../../components/PrevewBlogList';
import BlogList from '../../components/BlogList';

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
        categories[]->
    } | order(_createdAt desc)
`

export default async function HomePage() {
    if (previewData()) {
        return (<PreviewSuspense fallback={
            <div role='status'>
                <p className='text-center, text-lg animate-pulse text-[#F7AB0A0]'>Loading Preview data</p>
            </div>
        }>
            <PreviewBlogList query={query} />
        </PreviewSuspense>
        )
    }


    const posts = await client.fetch(query)
    return (
        <BlogList posts={posts} />
    )


}
