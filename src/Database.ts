import { PrismaClient, pedidos } from "@prisma/client";
const prisma = new PrismaClient();

const createPedidos = async (pedidos: pedidos) => {
  await prisma.pedidos.create({
    data: {
      cliente: pedidos.cliente,
      servico: pedidos.servico,
      status: pedidos.status,
    },
  });
};

const listAllpedidos = async () => {
  const Pedidos = await prisma.pedidos.findMany();
  return Pedidos;
};

const quantidadePedidos = async () => {
  const totalPedidos = await prisma.pedidos.count();
  return totalPedidos;
};

const listById = async (pedidosId: number): Promise<pedidos | null> => {
  const pedidos = await prisma.pedidos.findUnique({
    where: {
      id: pedidosId,
    },
  });
  return pedidos;
};

const findPedidosByClient = async (pedidosCliente: string) => {
  const pedidos: pedidos[] = await prisma.pedidos.findMany({
    where: {
      cliente: {
        startsWith: pedidosCliente,
      },
    },
  });
  return pedidos;
};

const findPedidosByService = async (pedidosService: string) => {
    const pedidos: pedidos[] = await prisma.pedidos.findMany({
      where: {
        servico: {
          startsWith: pedidosService,
        },
      },
    });
    return pedidos;
  };
  

const updatePedidos = async (pedidos: pedidos) => {
  await prisma.pedidos.update({
    where: {
      id: pedidos.id,
    },
    data: {
      cliente: pedidos.cliente,
      servico: pedidos.servico,
      status: pedidos.status,
    },
  });
};

const deletePedidos = async (pedidosId: number) => {
  await prisma.pedidos.delete({
    where: {
      id: pedidosId,
    },
  });
};

// const login = async (pedidosEmail: string, pedidosPassword: string) => {
//   const pedidos = await prisma.pedidos.findUnique({
//     where: {
//       email: pedidosEmail,
//       AND: [
//         {
//           password: pedidosPassword
//         }
//       ]
//     },
//   });
//   return pedidos;
// };

const closeConnection = async () => {
  await prisma.$disconnect();
};

export {
  quantidadePedidos,
  createPedidos,
  listAllpedidos,
  listById,
  findPedidosByClient,
  findPedidosByService,
  updatePedidos,
  deletePedidos,
  closeConnection,
};
