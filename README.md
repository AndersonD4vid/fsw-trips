## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Sistema de Reserva de Viagens

## Funcionalidades 
- Buscar viagens
	- Por localização, por data inicial, orçamento máximo.

- Ver detalhes de uma viangem
	- Fotos(4), descrição da viagem, ver foto principal, destaques, preço por noite, data, hóspedes.

- Reservar uma viagem
	- Garantir que a data selecionada não foi reservada por outro usuário.
	- Garantir que número máximo de hóspedes seja respeitado.

- Ver viagens reservadas
 	- Pegar viagens do usúario

- Cancelar essas viagem
	- Ao cancelar uma viagem, data precisa ficar disponivel novamente.


# O que foi usado no projeto como back-end e banco de dados 
Next.js, TailwindCSS, Node.Js, PostgreSQL com Prisma, Supabase.

[![My Skills](https://skillicons.dev/icons?i=nextjs,tailwindcss,nodejs,postgres,prisma,supabase,&perline=10)](https://skillicons.dev)

## Aprenda mais
- O que é uma migration?: É basicamente uma migração na estrutura dos dados,
por exemplo, nesse momento os dados não existe no banco, quando fazer a migration ai vai
pegar nosso shema e se conectar com nosso banco, criando as tabelas no banco no supabase.

##  Next.js: SSR & Server Components 
Server Side Rendering  (SSR)
 	- Parte do componente (conteúdo) é renderizado no servidor
 	- Melhora o SEO e performance (menos carga para o cliente)

Server Components
- O componente inteiro é renderizado no servidor

Vantagens: Integração direta com banco de dados; melhor performance; cache facilitado
Desvantagens: não podem ter interatividades (useState, useEffect, onClick)

# Como iniciar o projeto
- Em breve mais informações




