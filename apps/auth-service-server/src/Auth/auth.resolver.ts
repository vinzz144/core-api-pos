import * as graphql from "@nestjs/graphql";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Query(() => String)
  async Register(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.Register(args);
  }
}
