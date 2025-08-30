import {Slide} from "@/types/slide";
import {Testimonial} from "@/types/testimonial";

export const slides: Slide[]  = [
    {
        image: "/images/photo1.jpg",
        title: "Accompagner chaque enfant",
        description: "Une plateforme dédiée aux enfants à besoins spécifiques",
    },
    {
        image: "/images/famille.jpg",
        title: "Connecter les familles",
        description: "Mettre en relation parents, professionnels et institutions",
    },
    {
        image: "/images/photo3.jpg",
        title: "Favoriser l'inclusion",
        description: "Construire ensemble un avenir inclusif pour tous les enfants",
    },
];

export const initialTestimonials: Testimonial[] = [
    {
        name: 'Awa D.',
        role: 'Mother of an autistic child',
        testimonial: 'Jigiya Sô allowed me to find a suitable school for my son. Thank you infinitely!',
    },
    {
        name: 'Dr. Mamadou',
        role: 'Pediatrician',
        testimonial: 'An essential project for better inclusion of children in Africa.',
    },
    {
        name: 'Fatou S.',
        role: 'Specialized Educator',
        testimonial: 'Finally, a platform that centralizes resources for our children.',
    },
];