import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // {
    //   id: uuid(),
    //   name: 'toyota',
    //   createAt: new Date().getTime(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const newbrand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createAt: new Date().getTime(),
    };
    this.brands.push(newbrand);

    return newbrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`this brand whit "${id}" Null`);
    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        return brandDB = {
          ...brandDB,
          name: updateBrandDto.name,
          updateAt: new Date().getTime(),      
        };
      }

      return brand;
    });
    return {
      "resp" : 200 ,
      brandDB};
  }

  remove(id: string) {
    const searchId = this.findOne(id);
    if (searchId) this.brands = this.brands.filter((brand) => brand.id !== id);
  }
  fillBrandsWithSeedData(brands : Brand[]){
    this.brands = brands
  }
}
