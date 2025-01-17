import {
  AssetClass,
  AssetSubClass,
  DataSource,
  Tag,
  Type
} from '@prisma/client';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsISO8601,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min
} from 'class-validator';
import { isString } from 'lodash';

export class UpdateOrderDto {
  @IsOptional()
  @IsString()
  accountId?: string;

  @IsEnum(AssetClass, { each: true })
  @IsOptional()
  assetClass?: AssetClass;

  @IsEnum(AssetSubClass, { each: true })
  @IsOptional()
  assetSubClass?: AssetSubClass;

  @IsOptional()
  @IsString()
  @Transform(({ value }: TransformFnParams) =>
    isString(value) ? value.trim() : value
  )
  comment?: string;

  @IsString()
  currency: string;

  @IsString()
  dataSource: DataSource;

  @IsISO8601()
  date: string;

  @IsNumber()
  @Min(0)
  fee: number;

  @IsString()
  id: string;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsString()
  symbol: string;

  @IsArray()
  @IsOptional()
  tags?: Tag[];

  @IsString()
  type: Type;

  @IsNumber()
  @IsPositive()
  unitPrice: number;
}
