import { Pedido as Pedido } from "@prisma/client";

import {
  quantidadePedidos,
  createPedidos,
  listAllpedidos,
  listById,
  findPedidosByClient,
  findPedidosByService,
  updatePedidos,
  deletePedidos,
  closeConnection,
} from "../Database";

export class UserController {
    static async createPedido(pedido: Pedido): Promise<void> {
      await createPedidos(pedido);
    }
  
    static async listAll(): Promise<Pedido[]> {
      const Pedido = await listAllpedidos();
      return Pedido;
    }
  
    static async listByID(pedidoId: number): Promise<Pedido | null> {
      const pedido = await listById(pedidoId);
      return pedido;
    }
  
    static async updatePedidos(pedido: Pedido): Promise<void> {
      await updatePedidos(pedido);
    }
  
    static async deletePedidos(pedidoId: number): Promise<void> {
      await deletePedidos(pedidoId);
    }
  
    static async findPedidosByClient(pedidoClient: string) {
      const Pedido: Pedido[] = await findPedidosByClient(pedidoClient);
      return Pedido;
    }
  
    static async closeDBConn() {
      await closeConnection();
    }
  }
