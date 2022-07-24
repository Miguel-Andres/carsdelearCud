import { IsOptional,  IsString, IsUUID } from 'class-validator';

export class UpdateCarDto {

    @IsString()
    @IsUUID()
    @IsOptional()
    id ? :string

    @IsString()
    @IsOptional()
    brand ?: string 

    @IsOptional()
    model ?: string
}