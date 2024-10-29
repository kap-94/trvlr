import { Typography } from "@/app/_components";
import { TravelGuideImages } from "@/app//_modules";

const images = [
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
    alt: "Descripción de la imagen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
    alt: "Descripción de la imagen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    href: "/link-a-destino-1", // Opcional
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
    alt: "Descripción de la imagen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1638300183456-ac362679cfba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjB8ZHN5Qk9Wd1VzQWd8fGVufDB8fHx8fA%3D%3D",
    alt: "Descripción de la imagen 1",
    href: "/link-a-destino-1", // Opcional
  },
  //   {
  //     src: "https://plus.unsplash.com/premium_photo-1661877112841-0efa68b18527?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxkc3lCT1Z3VXNBZ3x8ZW58MHx8fHx8",
  //     alt: "Descripción de la imagen 2",
  //   },
];

export default function TravelGuide() {
  return (
    <div>
      <main>
        <Typography variant="h1">Galería de Imágenes</Typography>
        <TravelGuideImages
          title="Explora Nuestros Destinos Populares"
          subtitle="Descubre los lugares más increíbles para tu próxima aventura"
          images={images}
        />
      </main>
    </div>
  );
}
