function task1()
{
    function isURL(str)
    {
    let re = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?$/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите URL");
    if (isURL(str))
        alert("URL введен правильно");
    else
        alert("URL введен неправильно");
}

function task2()
{
    function isName(str)
    {
    let re = /^[a-zA-Z$_]{1}[\w$]*/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите имя переменной");
    if (isName(str))
        alert("Имя переменной введено правильно");
    else
        alert("Имя переменной введено неправильно");
}

function task3()
{
    function isStr(str)
    {
    let re = /^[a-zA-Z0-9]+$/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите строку состоящую только из букв и цифр");
    if (isStr(str))
        alert("Строка введена правильно");
    else
        alert("Строка введена неправильно");
}

function task4()
{
    function isStr(str)
    {
    let re = /^[a-zA-Zа-яА-Я]{10,}$/;
    let flag=re.test(str);
    return flag;
    }
    let str=prompt("Введите строку, которая  не содержит спецсимволов и цифр и ее длина не менее 10 символов");
    if (isStr(str))
        alert("Строка введена правильно");
    else
        alert("Строка введена неправильно");
}

function task5()
{
    let str=prompt("Введите строку, мы посчитаем сколько в ней цифр и букв");
    function getDigits()
    {
        let digits = str.match(/\d/g).length
        return (digits);
    }
    function getNameLat()
    {
        let namelat = str.match(/[a-z]/gi).length
        return(namelat);
    }
    function getNameKiril()
    {
        let namekiril = str.match(/[а-я]/gi).length
        return(namekiril);
    }
    alert (`Количество цифр ${getDigits()}`);
    alert (`Количество латинских букв ${getNameLat()}`);
    alert (`Количество кириллических букв ${getNameKiril()}`);
}