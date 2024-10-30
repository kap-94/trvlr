import { BlogPreview } from "@/app/_modules";
import BlogPost from "../_components/BlogPost";

const travelBlogData = {
  title: "Empacar como un Pro: Consejos para Viajes Eficientes",
  author: "Pablo Karam",
  date: "2024-10-29",
  coverImage:
    "https://plus.unsplash.com/premium_photo-1701769001159-ab615ecee55a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFtdXNlbWVudCUyMHBhcmslMjBuaWdodHxlbnwwfDB8MHx8fDA%3D",
  introduction: `
      Empacar bien es clave para viajar sin estrés. Con estos consejos, aprenderás a optimizar 
      tu equipaje para disfrutar de cada momento del viaje sin complicaciones.
    `,
  content: [
    {
      order: 1,
      title: "1. Elige la Maleta Correcta",
      body: `
          Todo comienza con seleccionar la maleta adecuada. Para viajes cortos, una mochila 
          o maleta de mano es ideal. Para viajes largos, opta por una maleta rígida que ofrezca 
          mayor protección. Asegúrate de que sea ligera y fácil de transportar.
        `,
    },
    {
      order: 2,

      title: "2. Haz una Lista de Verificación",
      body: `
          Crear una lista con lo esencial es fundamental: ropa adecuada, artículos de higiene, 
          documentos importantes y cargadores. Usa apps como Google Keep para facilitar el proceso 
          y asegurarte de no olvidar nada.
        `,
    },
    {
      order: 3,
      title: "3. La Técnica del Enrollado",
      body: `
          En lugar de doblar la ropa, enróllala para maximizar espacio y evitar arrugas. Coloca 
          los artículos más pesados y voluminosos en el fondo, y los más ligeros en la parte superior.
        `,
    },
    {
      order: 4,
      image:
        "https://images.unsplash.com/photo-1550487221-3750d2cb0b3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
      title: "4. Organiza con Cubos de Equipaje",
      body: `
          Los cubos de equipaje son una excelente forma de mantener todo ordenado. Puedes separar 
          la ropa por tipo o por día, facilitando encontrar lo que necesitas sin desordenar la maleta.
        `,
    },
    {
      order: 5,
      title: "5. Limita los Artículos de Aseo",
      body: `
          Lleva solo lo esencial en envases pequeños. Verifica las restricciones de líquidos si viajas 
          en avión. Además, muchos hoteles ofrecen artículos básicos, lo que te permite ahorrar espacio.
        `,
    },
    {
      order: 6,
      title: "6. Incluye un Kit de Emergencia",
      body: `
          Un pequeño kit con medicamentos básicos, curitas y desinfectante puede ser muy útil. No 
          olvides incluir copias de tus documentos importantes y una lista de contactos de emergencia.
        `,
    },
    {
      order: 7,
      title: "7. Ahorra Espacio para Recuerdos",
      body: `
          Siempre deja un poco de espacio extra en tu maleta para los recuerdos o compras que hagas 
          durante el viaje. Lleva una bolsa plegable adicional por si la necesitas.
        `,
    },
  ],
  highlights: [
    "Selecciona la maleta adecuada para cada tipo de viaje.",
    "Usa cubos organizadores para mantener el orden.",
    "Lleva solo los artículos de aseo necesarios.",
    "Incluye un pequeño kit de emergencia.",
    "Ahorra espacio para recuerdos o compras inesperadas.",
  ],
  gallery: [
    "https://images.unsplash.com/photo-1550487221-3750d2cb0b3c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1701769001159-ab615ecee55a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGFtdXNlbWVudCUyMHBhcmslMjBuaWdodHxlbnwwfDB8MHx8fDA%3D",
  ],
  tags: ["viajes", "equipaje", "consejos", "organización", "maleta"],
  relatedPosts: [
    {
      id: "1",
      title: "10 Tips para Viajar Ligero",
      href: "/blog/viajar-ligero",
    },
    {
      id: "2",
      title: "Cómo Preparar una Mochila de Mano",
      href: "/blog/mochila-de-mano",
    },
    {
      id: "3",
      title: "Documentación Esencial para Viajar al Extranjero",
      href: "/blog/documentacion-viajes",
    },
  ],
  readTime: 8,
};

export default function Blog() {
  return (
    <main>
      <BlogPost {...travelBlogData} />;{/* <BlogPreview /> */}
    </main>
  );
}
