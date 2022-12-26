import { IsString, IsInt, IsBoolean, IsNumber, MinLength, IsNotEmpty } from 'class-validator';


export class CollectUserDto{

    
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    name:           string;

    @IsNumber()
    age:            number;

    @IsBoolean()
    isMarried:      boolean;
    
    @IsString()
    dateOfBirth:    string;

    
};