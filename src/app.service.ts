import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nest!';
  }
  getHelloBro(): string {
    return 'Hello Bros!!';
  }
}
