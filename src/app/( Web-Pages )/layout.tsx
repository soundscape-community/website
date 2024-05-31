"use client"
import { redirect } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import SiteHeader from '@/components/SiteHeader'
import SiteFooter from '@/components/SiteFooter';


export default function Layout({
    children,
}: {
    children: React.ReactNode
 }) {

    

    return (  
        <main className="flex min-h-screen flex-col items-center  mt-header-gap">
            <SiteHeader />
            { children }
            <SiteFooter />
        </main>
    );
}