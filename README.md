# Формирователь случайной гаммы

Моделирование работы формирователя случайной гаммы и исследование характеристик гаммы

## Как запустить программу (без установки):

1. Копируем содержимое файла index.js
2. Вставляем скопированный код на сайте: [Онлайн-компилятор JavaScript](https://www.programiz.com/javascript/online-compiler/)
3. Вносим свои данные из лабораторной работы (см. пункт "Как пользоваться программой")
4. Нажимаем кнопку "Run"
5. Получаем результаты

## Как пользоваться программой:

1. В переменную `polynomialInput` записываем характеристический многочлен для Вашего варианта (см. таблицу в задании к ЛР)
https://github.com/dumbus/random-gamma-generator/blob/b2590d68667b2fbf782f4550549dc7983fd78848/index.js#L1

2. В переменную `listNumberInput` записываем Ваш номер в группе по журналу (в десятичной системе счисления)
https://github.com/dumbus/random-gamma-generator/blob/b2590d68667b2fbf782f4550549dc7983fd78848/index.js#L2

3. В переменную `randomNumberInput` записываем случайное число, заданное преподавателем (если не задано, то равно 1)
https://github.com/dumbus/random-gamma-generator/blob/b2590d68667b2fbf782f4550549dc7983fd78848/index.js#L3

4. В переменную `firstNodeInput` первый нелинейный узел (см. таблицу в задании к ЛР), (возможные варианты: И, ИЛИ, И-НЕ, ИЛИ-НЕ)
https://github.com/dumbus/random-gamma-generator/blob/b2590d68667b2fbf782f4550549dc7983fd78848/index.js#L5

5. В переменную `secondNodeInput` записываем второй нелинейный узел (см. таблицу в задании к ЛР), (возможные варианты: И, ИЛИ, И-НЕ, ИЛИ-НЕ)
https://github.com/dumbus/random-gamma-generator/blob/b2590d68667b2fbf782f4550549dc7983fd78848/index.js#L6

6. В переменную `thirdNodeInput` записываем третий нелинейный узел (см. таблицу в задании к ЛР), (возможные варианты: УЛ, ДЖ)
https://github.com/dumbus/random-gamma-generator/blob/b2590d68667b2fbf782f4550549dc7983fd78848/index.js#L7

7. Запускаем программу.

## Требования к предоставляемым данным:

* Характеристический многочлен записываем строго, как указано в задании (цифры должны идти по убыванию и не должны повторяться)

* Номер в группе может быть указан от 0 до 31

* Случайное число может быть указано от 0 до 31

* Первый нелинейный узел может быть задан вариантами: `И`, `ИЛИ`, `И-НЕ`, `ИЛИ-НЕ`

* Второй нелинейный узел может быть задан вариантами: `И`, `ИЛИ`, `И-НЕ`, `ИЛИ-НЕ`

* Третий нелинейный узел может быть задан вариантами: `УЛ`, `ДЖ`

> Если в данных допущена ошибка, программа выведет в консоль соответствующее сообщение об ошибке (ошибки предусмотрены далеко не все)

## Результаты работы программы:

### 1. Данные варианта:

* Формула характеристического многочлена `h(x)`

* Начальное заполнение регистра (находится по формуле `S = K ⊕ R`), где `K`- ключ ( Ваш номер по журналу, представленный в двоичном виде, младший разряд справа), `R` –случайное число (если не задано преподавателем, то  равно 1)

* Нелинейные узлы, используемые для построения формирователя случайной гаммы

*Скриншот с примером вывода:*  
![вариант](https://user-images.githubusercontent.com/79057837/235304368-383bfd9a-1096-42e8-ba6a-bc7372d72066.PNG)

### 2. Начальные данные:

* Максимальный период рекуррентной последовательности

*Скриншот с примером вывода:*  
![начальные данные](https://user-images.githubusercontent.com/79057837/235304388-ae417803-9b63-49ef-8aa9-bb8c76b8eee1.PNG)

### 3. Моделирование работы ЛРР

* Таблица смены состояний регистра

*Скриншот с примером вывода (представлен не целиком):*  
![работа ЛРР](https://user-images.githubusercontent.com/79057837/235304394-0c3a8b09-56f0-4dc8-a590-9060eff46142.PNG)

### 4. Исследование линейно рекуррентной последовательности

* Линейно рекуррентная последовательность
* Период последовательности
* Баланс единиц и нулей
* Серии одинаковых символов, идущих подряд
* Свойство "окна" (сначала описаны все состояния регистра, затем делается вывод о выполнении или невыполнении свойства "окна")

*Скриншот с примером вывода:*  
![исследование ЛРП](https://user-images.githubusercontent.com/79057837/235304422-eb6ffd94-4fcf-47e3-9fe0-fec0d0455c40.PNG)

### 5. Моделирование работы формирователя случайной гаммы

* Таблица смены состояний регистра, результатов суммы регистра и результатов каждого нелинейного узла

*Скриншот с примером вывода (представлен не целиком):*  
![Моделирование работы ФСГ](https://user-images.githubusercontent.com/79057837/235304446-265be311-70ba-4619-8aaf-43dfb8382b06.PNG)

### 6. Полученные последовательности

* Линейно рекуррентная последовательность
* Последовательность на выходе 1-ого нелинейного узла
* Последовательность на выходе 2-ого нелинейного узла
* Последовательность на выходе 3-его нелинейного узла

*Скриншот с примером вывода:*  
![Последовательности](https://user-images.githubusercontent.com/79057837/235304459-666d8292-cc33-4406-8458-81389e8aa3b8.PNG)

### 7. Исследование последовательности на выходе формирователя случайной гаммы

* Последовательность на выходе формирователя случайной гаммы
* Период последовательности
* Баланс единиц и нулей
* Серии одинаковых символов, идущих подряд
* Свойство "окна" (сначала описаны все состояния регистра, затем делается вывод о выполнении или невыполнении свойства "окна")

*Скриншот с примером вывода:*  
![Исследование последовательности ФСГ](https://user-images.githubusercontent.com/79057837/235304469-5fd950b1-ef8c-420e-826f-9d5143ec1002.PNG)
