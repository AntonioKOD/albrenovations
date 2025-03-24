import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import TestimonialEmailTemplate from "@/components/testimonial-email";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY)


export async function POST(req: NextRequest){
    const { renderToStaticMarkup } = await import('react-dom/server');
    const body = await req.json()
    const {name, email, role, project, rating, testimonial} = body


    try{
        const {data, error} = await resend.emails.send({
            from: 'Construct Concepts <info@constructconcepts.com>',
            to: "info@constructconcepts.com",
            subject: "New testimonial from Construct Concepts",
            html: renderToStaticMarkup(React.createElement(TestimonialEmailTemplate, {name, email, role, project, rating, testimonial}))
        })

        if(error){
            return NextResponse.json(error, {status: 500})
        }
        return NextResponse.json(
            {message: 'Email sent successfully', data},
            {status: 200}
        )

    }catch(error){
        return NextResponse.json(error, {status: 500})
    }
    
    
}