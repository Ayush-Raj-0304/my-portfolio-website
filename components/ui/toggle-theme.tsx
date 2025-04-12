"use client"

import React, { useEffect, useState } from "react"
import { Button } from "./button"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"


export default function ThemeToggle()
{
    const {setTheme , resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false);

    useEffect(()=>(
        setMounted(true)
    ),[])

    // conditional rendering to check if loaded on client side or not , or is still being processed by server, if rendered on client side useEffect will work
    if(!mounted) return null;

    return (
        <Button
        size = 'lg'
        variant='ghost'
        onClick={()=>(
            setTheme(resolvedTheme ==='dark'? 'light' : 'dark')
        )}

        >
        
        {resolvedTheme === 'dark' ? ( <SunIcon  className="size-4 text-orange-300"/>):
                                    (<MoonIcon className="size-4 text-sky-950"/>)}

        <span className="sr-only"> Toggle Theme</span>
        </Button>
    )
}