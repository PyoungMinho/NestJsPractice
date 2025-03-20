import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// express 라우터 같은 존재 Url을 받아서 처리
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // Get 메서드
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return this.appService.getHelloBro();
    // return 'Hello guys!'; 위 처럼 서비스를 불러오는게 Nest.js의 컨벤션
  }
}
