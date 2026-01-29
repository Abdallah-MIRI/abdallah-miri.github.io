---
layout: post
title: "Data Types أنواع البيانات"
date: 2026-01-29 11:20:00 +0200
categories: ['javascript']
toc: true
---

**Javascript بتقسم البيانات لنوعين كبار**

## أ- الأنواع البدائية primitive types
**دقيم بسيطة بتتخزن مباشر**

▪︎ النصوص string: ```

```Javascript
let x = "Ahmed";
```

▪︎الأرقام Number: 
```Javascript
let y = 67;
```

▪︎الأرقام الضخمة BigInt:
```JavaScript 
let i = 1773673777615551n;
```

▪︎undefinedمتغير متعرف بس لسه مخدش قيمة
```JavaScript
let x;

console.log(typeof x) 
// undefined
```

▪︎قيمة منطقية boolean
```JavaScript
let y = true;
```

▪︎قيمة فارغة Null
```javascript
let i = null

console.log(typeof i)
// null
```

▪︎قيمة فريدة مبتكررش symbol
```javascript
let x = symbol("id")
```

## ب- الكائنات (Object)
**دا زى صندوق كبير تقدر تخزن قيم كتير ومختلفة عن بعض جواه**

زى ايه؟ بيناتك:  اسمك وسنك وطول إلخ....
```javascript
let User = {
name: "Ahmed",
age: 36,
active: false,
}
```

## typeof operator خاصية بتستخدم لمعرفة نوع البيانات 

```javascript 
console.log(typeof User);
// object
```

**كده دى أنواع البيانات فى الjavascript بختصار**

![Data types map](/assets/image/datatypesmap.png){: .w-40}