import { Body, Controller, ForbiddenException, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/current-user.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateContactMessageDto } from './contact.dto';
import { ContactService } from './contact.service';

type AuthenticatedUser = { role: string };

@ApiTags('Contact messages')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  @ApiOperation({ summary: 'Send a contact or membership message' })
  create(@Body() body: CreateContactMessageDto) {
    return this.contactService.create(body);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'List messages for administrators' })
  findAll(@CurrentUser() user: AuthenticatedUser) {
    if (user.role !== 'ADMIN' && user.role !== 'SUPER_ADMIN') {
      throw new ForbiddenException('Administrator access is required');
    }
    return this.contactService.findAll();
  }
}
