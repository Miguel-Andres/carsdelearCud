import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    
    private cars =[
        {
            id : 1 ,
            brand : 'toyota',
            model : 'corolla'
        },
        {
            id : 3 ,
            brand : 'honda',
            model : 'civic'
        }, {
            id : 2 ,
            brand : 'jeep',
            model : 'Renegade'
        },
    ]

  public findAll(){
        return this.cars
    }

    findOneById(id:number){

        const  car = this.cars.find(car=> car.id === id)
     if(!car)  throw new  NotFoundException(`car whit id ${id} not found`) 

       return car 
    }
}
