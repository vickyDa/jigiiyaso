'use client'

import { useState } from 'react'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from '@/components/ui/tabs'
import ParentForm from "@/components/forms/ParentForm";
import ProfessionalForm from "@/components/forms/ProfessionalForm";
import SchoolForm from "@/components/forms/SchoolForm";
import OrganizationForm from "@/components/forms/OrganizationForm";


export default function RegistrationTabs() {
    const [activeForm, setActiveForm] = useState('parent')

    return (
        <Tabs value={activeForm} onValueChange={setActiveForm} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 p-1 rounded-full">
                <TabsTrigger
                    value="parent"
                    className="rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                    👪 Parents
                </TabsTrigger>
                <TabsTrigger
                    value="professional"
                    className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                    🩺 Professionnels
                </TabsTrigger>
                <TabsTrigger
                    value="school"
                    className="rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                    🏫 Écoles
                </TabsTrigger>
                <TabsTrigger
                    value="organization"
                    className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                    🏢 Organismes
                </TabsTrigger>
            </TabsList>

            <TabsContent value="parent"><ParentForm /></TabsContent>
            <TabsContent value="professional"><ProfessionalForm /></TabsContent>
            <TabsContent value="school"><SchoolForm /></TabsContent>
            <TabsContent value="organization"><OrganizationForm /></TabsContent>
        </Tabs>
    )
}
