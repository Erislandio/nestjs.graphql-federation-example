import { Injectable, Scope } from "@nestjs/common";
import DataLoader from "dataloader";
import { User } from "./entities/user.entity";
import { UsersService } from "./users.service";

@Injectable({ scope: Scope.REQUEST })
export class UsersLoader {
  constructor(private readonly usersService: UsersService) {}

  public readonly batchUsers = new DataLoader<string, User>(
    async (ids: readonly string[]) => {
      const users = await this.usersService.findByIds(ids);
      const usersMap = new Map(users.map((user) => [user.id, user]));
      return ids.map((id) => usersMap.get(id));
    },
  );
}
