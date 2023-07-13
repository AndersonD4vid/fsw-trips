# Full Stack Week - Sistema de Reservas de Viagens

## Deploy: https://fsw-trips-six.vercel.app/



# Objetivo do sistema viagens desenvolvido
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


# Tecnologias usadas no projeto
Next.js, TailwindCSS, TypeScript, Node.Js, PostgreSQL com Prisma, Supabase.

[![My Skills](https://skillicons.dev/icons?i=nextjs,tailwindcss,typescript,nodejs,postgres,prisma,supabase,&perline=10)](https://skillicons.dev)

# Páginas da aplicação
- /: Página inicial com lista de viagens e botão para login do usuário.
- /trips/[id]: Uma página com detalhes da viagem.
- /trips/[id]/confirmation: Uma página com detalhes da viagem e confirmação da reserva.
- /checkout/stripe: Uma página com checkout de pagamento.
- /my-trips: Uma página com as reservas do usuário.


## Um pouco sobre migration no prisma
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

Obrigado por ler até aqui!





