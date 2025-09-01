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
import { Building2, GraduationCap, Stethoscope, Users } from 'lucide-react';


export default function RegistrationTabs() {
    const [activeForm, setActiveForm] = useState('parent')

    return (
        <Tabs value={activeForm} onValueChange={setActiveForm} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-gray-100 p-1 rounded-full">
                <TabsTrigger
                    value="parent"
                    className="rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                    <Users className="w-4 h-4 mr-2" /> Parents
                </TabsTrigger>
                <TabsTrigger
                    value="professional"
                    className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                    <Stethoscope className="w-4 h-4 mr-2" /> Professionnels
                </TabsTrigger>
                <TabsTrigger
                    value="school"
                    className="rounded-full data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                    <GraduationCap className="w-4 h-4 mr-2" /> Écoles
                </TabsTrigger>
                <TabsTrigger
                    value="organization"
                    className="rounded-full data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                    <Building2 className="w-4 h-4 mr-2" /> Organismes
                </TabsTrigger>
            </TabsList>

            <TabsContent value="parent"><ParentForm /></TabsContent>
            <TabsContent value="professional"><ProfessionalForm /></TabsContent>
            <TabsContent value="school"><SchoolForm /></TabsContent>
            <TabsContent value="organization"><OrganizationForm /></TabsContent>
        </Tabs>
    )
}
