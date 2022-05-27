import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('alunos')
export class AlunosController {


    @UseGuards(AuthGuard('jwt'))
    @Get('seguro')
    getHello(): string {
        return "texto seguro"
    }

    @Get('inseguro')
    getHelloInseguro(): string {
        return "texto seguro"
    }

}
