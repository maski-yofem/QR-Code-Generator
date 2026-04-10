/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Define que o Next vai gerar arquivos estáticos
  basePath: '/QR-Code-Generator', // Nome exato do seu repositório no GitHub
  images: {
    unoptimized: true, // Necessário pois o GitHub Pages não suporta a otimização de imagem padrão do Next
  },
};

export default nextConfig;