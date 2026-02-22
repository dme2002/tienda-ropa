export interface Product {
    id: string;
    name: string;
    title: string;
    price: number;
    origin: string;
    description: string;
    category: string;
    subcategory?: string;
    stock: number;
    images: string[];
    slug: string;
    badge?: string;
    discount?: number;
    specs?: { label: string; value: string }[];
}

export const products: Product[] = [
    {
        id: "1",
        name: "Frijoles Rojos",
        title: "Frijoles Rojos",
        price: 120,
        origin: "Marcala",
        description: "Frijoles rojos de seda de primera calidad, cosechados en las tierras altas. Caracterizados por su cocción rápida, textura suave y alto contenido nutricional. Ideales para exportación y consumo doméstico.",
        category: "Granos",
        subcategory: "Legumbres",
        stock: 500,
        images: ["https://www.buenprovecho.hn/wp-content/uploads/2022/11/5EE712A2-01F4-409C-844F-5C6D1056FA63.jpeg"],
        slug: "frijoles-rojos-premium",
        badge: "Cosecha Nueva",
        discount: 5,
        specs: [
            { label: "Variedad", value: "Rojo de Seda" },
            { label: "Origen", value: "Tierras Altas" },
            { label: "Peso", value: "Saco 100 lbs" },
            { label: "Calidad", value: "Exportación" }
        ]
    },
    {
        id: "2",
        name: "Café en Grano",
        title: "Café en Grano",
        price: 399,
        origin: "Juticalpa",
        description: "Café estrictamente altura (SHB) con notas achocolatadas y cítricas. Cultivado bajo sombra, procesado artesanalmente para preservar su aroma y cuerpo intenso. Perfecto para tostadores exigentes.",
        category: "Exportación",
        subcategory: "Café",
        stock: 200,
        images: ["https://huupa.coffee/cdn/shop/articles/granos_de_cafe-792033_a69513e8-8fb8-4a3b-9890-c66d4fb70f59.jpg?v=1742927345"],
        slug: "cafe-grano-exportacion",
        badge: "Orgánico",
        discount: 10,
        specs: [
            { label: "Tostado", value: "Medio (En Grano)" },
            { label: "Altitud", value: "1,500 msnm" },
            { label: "Proceso", value: "Lavado" },
            { label: "Puntaje", value: "85+ SCAA" }
        ]
    },
    {
        id: "3",
        name: "Exportación de Vehículos",
        title: "Exportación de Vehículos",
        price: 1199,
        origin: "Olancho",
        description: "Servicio logístico integral para el transporte y exportación de vehículos. Manejamos toda la documentación aduanera, inspección previa y transporte seguro hacia cualquier destino internacional.",
        category: "Servicios",
        subcategory: "Logística",
        stock: 100,
        images: ["https://cdn.auto4export.com/assets/blog/2023-08-09-43fafc9ec07d782764069ca4e49ac58bfdc10acc.jpg"],
        slug: "servicio-exportacion-carros",
        badge: "Seguro Incluido",
        specs: [
            { label: "Cobertura", value: "Internacional" },
            { label: "Modalidad", value: "Contenedor / Ro-Ro" },
            { label: "Tiempo Est.", value: "15-30 días" },
            { label: "Trámites", value: "Aduana Completa" }
        ]
    },
    {
        id: "4",
        name: "Semillas de Chía",
        title: "Semillas de Chía",
        price: 99,
        origin: "Jesus de otoro",
        description: "Superalimento rico en Omega-3 y fibra. Nuestra chía es seleccionada mecánicamente para garantizar la máxima pureza. Ideal para la industria alimentaria.",
        category: "Granos",
        subcategory: "Superfoods",
        stock: 350,
        images: ["https://image.tuasaude.com/media/article/th/d9/beneficios-da-chia_14506.jpg"],
        slug: "semillas-chia-organica",
        badge: "Superfood",
        specs: [
            { label: "Pureza", value: "99.9%" },
            { label: "Humedad", value: "< 8%" },
            { label: "Certificación", value: "Orgánica" },
            { label: "Empaque", value: "Bolsas 25kg" }
        ]
    },
    {
        id: "5",
        name: "Maíz Amarillo",
        title: "Maíz Amarillo",
        price: 85,
        origin: "El Paraíso",
        description: "Maíz amarillo de grano cristalino seleccionado, ideal para la producción de harinas y forraje de alta calidad energética.",
        category: "Granos",
        subcategory: "Cereales",
        stock: 1000,
        images: ["https://graffoods.com/wp-content/uploads/2024/09/230.webp"],
        slug: "maiz-amarillo-industrial",
        badge: "Granel",
        specs: [
            { label: "Variedad", value: "Híbrido" },
            { label: "Humedad", value: "13.5%" },
            { label: "Pureza", value: "98%" },
            { label: "Grano", value: "Entero" }
        ]
    },
    {
        id: "6",
        name: "Cacao en Grano",
        title: "Cacao en Grano",
        price: 550,
        origin: "Yoro",
        description: "Granos de cacao fermentados y secados al sol. Perfil aromático profundo con notas frutales, perfecto para chocolatería fina.",
        category: "Exportación",
        subcategory: "Cacao",
        stock: 150,
        images: ["https://campoverdeperu.com/wp-content/uploads/2025/02/granos-cacao-campoverde.webp"],
        slug: "cacao-grano-fermentado",
        badge: "Gourmet",
        discount: 15,
        specs: [
            { label: "Fermentación", value: "6 días" },
            { label: "Humedad", value: "7%" },
            { label: "Tipo", value: "Trinitario" },
            { label: "Calidad", value: "Grado 1" }
        ]
    },
    {
        id: "7",
        name: "Tomate Roma",
        title: "Tomate Roma",
        price: 45,
        origin: "Copán",
        description: "Tomates Roma frescos de consistencia firme. Cultivados bajo normas de buenas prácticas agrícolas (BPA).",
        category: "Hortalizas",
        subcategory: "Frutos",
        stock: 500,
        images: ["https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"],
        slug: "tomate-roma-fresco",
        badge: "Fresco",
        specs: [
            { label: "Calibre", value: "Grande" },
            { label: "Vida Anaquel", value: "15 días" },
            { label: "Cultivo", value: "Invernadero" },
            { label: "Empaque", value: "Caja 25lb" }
        ]
    },
    {
        id: "8",
        name: "Cebolla Blanca",
        title: "Cebolla Blanca",
        price: 38,
        origin: "Intibucá",
        description: "Cebolla blanca de bulbos grandes y firmes. Excelente calidad de túnica para transporte de larga distancia.",
        category: "Hortalizas",
        subcategory: "Bulbos",
        stock: 600,
        images: ["https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1?auto=format&fit=crop&w=800&q=80"],
        slug: "cebolla-blanca-premium",
        badge: "Top Ventas",
        specs: [
            { label: "Diámetro", value: "3.5 pulg" },
            { label: "Curado", value: "Natural" },
            { label: "Grado", value: "US No. 1" },
            { label: "Humedad", value: "65%" }
        ]
    },
    {
        id: "9",
        name: "Zanahoria Jumbo",
        title: "Zanahoria Jumbo",
        price: 25,
        origin: "Comayagua",
        description: "Zanahorias frescas, lavadas y seleccionadas. Color naranja intenso y alta concentración de azúcar natural.",
        category: "Hortalizas",
        subcategory: "Raíces",
        stock: 450,
        images: ["https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80"],
        slug: "zanahoria-lavada-jumbo",
        specs: [
            { label: "Tamaño", value: "7-9 pulgadas" },
            { label: "Limpieza", value: "Hidrolavada" },
            { label: "Textura", value: "Firme" },
            { label: "Empaque", value: "Saco malla" }
        ]
    },
    {
        id: "10",
        name: "Pimiento Verde",
        title: "Pimiento Verde",
        price: 55,
        origin: "Comayagua",
        description: "Pimientos morrones de paredes gruesas y color verde brillante. Cultivados hidropónicamente.",
        category: "Hortalizas",
        subcategory: "Frutos",
        stock: 300,
        images: ["https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/12/22/17032431342689.jpg"],
        slug: "pimiento-verde-morron",
        badge: "Premium",
        specs: [
            { label: "Paredes", value: "6-8 mm" },
            { label: "Lóbulos", value: "4 Lóbulos" },
            { label: "Grado", value: "Clase A" },
            { label: "Almacén", value: "7-10°C" }
        ]
    },
    {
        id: "11",
        name: "Lentejas Verdes",
        title: "Lentejas Verdes",
        price: 75,
        origin: "Choluteca",
        description: "Lentejas verdes seleccionadas. Alta capacidad de hidratación y cocción uniforme. Rica fuente de proteína.",
        category: "Granos",
        subcategory: "Legumbres",
        stock: 400,
        images: ["https://www.grandturkishbazaar.com/wp-content/uploads/2021/02/green-lentils.png"],
        slug: "lenteja-verde-grande",
        discount: 5,
        specs: [
            { label: "Calibre", value: "6-7 mm" },
            { label: "Humedad", value: "12%" },
            { label: "Pureza", value: "99.5%" },
            { label: "Cocción", value: "25-30 min" }
        ]
    },
    {
        id: "12",
        name: "Garbanzo Kabuli",
        title: "Garbanzo Kabuli",
        price: 110,
        origin: "La Paz",
        description: "Garbanzo de grano grande y color crema claro. Ideal para la industria del hummus y conservas.",
        category: "Granos",
        subcategory: "Legumbres",
        stock: 380,
        images: ["https://cdn.b2brazil.com/sites/default/files/styles/large/public/b2brazil/product/image/kabuli-chickpeas-1346180.jpg.webp"],
        slug: "garbanzo-kabuli-export",
        badge: "Grande",
        specs: [
            { label: "Calibre", value: "12 mm" },
            { label: "Humedad", value: "11%" },
            { label: "Origen", value: "Valles Secos" },
            { label: "Limpieza", value: "Electrónica" }
        ]
    },
    {
        id: "13",
        name: "Trigo Panadero",
        title: "Trigo Panadero",
        price: 95,
        origin: "Lempira",
        description: "Trigo de alta fuerza para panificación profesional. Granos limpios y libres de impurezas con alto contenido de gluten.",
        category: "Granos",
        subcategory: "Cereales",
        stock: 800,
        images: ["https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"],
        slug: "trigo-panadero-fuerza",
        specs: [
            { label: "Proteína", value: "13%" },
            { label: "Humedad", value: "12.5%" },
            { label: "Cosecha", value: "2025" },
            { label: "Tipo", value: "Duro" }
        ]
    },
    {
        id: "14",
        name: "Pimienta Negra",
        title: "Pimienta Negra",
        price: 180,
        origin: "Comayagua",
        description: "Pimienta negra entera de exportación. Grano maduro y secado uniformemente para conservar aceites esenciales.",
        category: "Exportación",
        subcategory: "Especias",
        stock: 120,
        images: ["https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=800&q=80"],
        slug: "pimienta-negra-entera",
        badge: "Intenso",
        specs: [
            { label: "Pureza", value: "99%" },
            { label: "Densidad", value: "550g/l" },
            { label: "Humedad", value: "11.5%" },
            { label: "Aroma", value: "Pungente" }
        ]
    },
    {
        id: "15",
        name: "Brócoli Premium",
        title: "Brócoli Premium",
        price: 32,
        origin: "Intibucá",
        description: "Brócoli de floretes compactos y color verde azulado intenso. Enfriado por sistema Hydro-cooling para máxima frescura.",
        category: "Hortalizas",
        subcategory: "Crucíferas",
        stock: 250,
        images: ["https://shop.adelaidecentralmarket.com.au/cdn/shop/products/auSvi3PWMU.jpg?v=1630393891"],
        slug: "brocoli-fresco-export",
        badge: "Calidad A",
        specs: [
            { label: "Corte", value: "Corona" },
            { label: "Tamaño", value: "10-14 cm" },
            { label: "Enfriamiento", value: "Hydro-cooling" },
            { label: "Empaque", value: "Caja con Hielo" }
        ]
    }
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);