import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD' | 'RUB' |'All'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
}

let defaultMoney: MoneyType[] = [  // типизируем
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    if(filter === 'All') return money
    return money.filter(m => m.banknote === filter)
}


function App() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')

    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        // Добавление денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
    }

    const removeMoney = (banknote: BanknotsType) => {
        // Снятие денег сделаем в последнюю очередь, после настройки фильтров и отрисовки денег
       // const index = money.findIndex
       //  if (index !== -1) {
       //      setMoney(money.filter((el, i) => ...));
       //  }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}   //отрисовать будем деньги после фильтрации
                setFilterValue={setFilterValue}  //useState передаем? Так можно было?!
            />
        </div>
    );
}

export default App;
