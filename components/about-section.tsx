'use client'
import Card from "./carousel"

export default function AboutSection(){
    return (
        <div className="bg-border p-12 max-w-full">
            <div className="flex flex-row items-center gap-12">
             <div className="flex flex-row gap-12">
             <div className="float-left mt-24">
            <Card/>
            </div>
            <Card/>
            </div>
            <div className="flex flex-col gap-4 mb-24">
            <h2 className="container text-white text-6xl flex ">Empowering Success Together</h2>
            <p className="text-white text-xl">We are passionate about creating residential spaces that inspire, reflect your style, and stand the test of time. Let us be the partner on your journey to building a home.</p>
            </div>
            </div>

        </div>
    )
}