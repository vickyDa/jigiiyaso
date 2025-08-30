import { Card, CardContent } from '@/components/ui/card';
import {Testimonial} from "@/types/testimonial";
interface TestimonialCardProps extends Testimonial {}

export default function TestimonialCard({ name, role, testimonial }: TestimonialCardProps) {
    return (
        <Card className="h-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {name.charAt(0)}
                    </div>
                    <div className="ml-3">
                        <h4 className="font-semibold text-green-800">{name}</h4>
                        <p className="text-sm text-gray-600">{role}</p>
                    </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial}"</p>
            </CardContent>
        </Card>
    );
}