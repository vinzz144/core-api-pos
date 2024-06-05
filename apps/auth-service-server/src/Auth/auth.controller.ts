import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthService } from "./auth.service";

@swagger.ApiTags("auths")
@common.Controller("auths")
export class AuthController {
  constructor(protected readonly service: AuthService) {}

  @common.Get("/:id/register")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Register(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.Register(body);
      }
}
