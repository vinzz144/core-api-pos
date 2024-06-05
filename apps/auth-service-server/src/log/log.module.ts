import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LogModuleBase } from "./base/log.module.base";
import { LogService } from "./log.service";
import { LogController } from "./log.controller";
import { LogResolver } from "./log.resolver";

@Module({
  imports: [LogModuleBase, forwardRef(() => AuthModule)],
  controllers: [LogController],
  providers: [LogService, LogResolver],
  exports: [LogService],
})
export class LogModule {}
