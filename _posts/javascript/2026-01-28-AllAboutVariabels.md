---
layout: post
title: 'تعريف المتغيرات'
date: 2026-01-28 11:30:00 +0200
categories: ['javascript']
toc: true
---

## ايه هيا المتغيرات؟

المتغيرات عبارة عن صندوق بنخزن فيه الاشياء او ما نحتاجها نطلعها او نشيلها ونضيف حاجة تانى مكنها

![خريطة زهنية للمتغير variabel](/assets/image/javascript/box-var.png){: .mt-4 .mb-4 .w-full!}

## انواع المتغيرات

1. var: ودا النوع القديم

2. let: دا النوع الاحدث لتعريف المتغيرات وممكن تغير قيمة بعدين

3. const: ودا اختصار ل constant ود قيمةته ثابته مش بتتغير ولو حولت هيطلع Error خطأ من اللغة نفسها
   
## Hoisting
   
ودى حركة بتعملها javascript بترفع المتغيرات لفوق خالص قبل ما تشغل الكود و var بيترفع وقيمه بتقبى undefind لكن let وconst بيترفعوا بس مبيسمحوش ليك تستخدمهم قبل السطر بتاعهم ودا هنتكلم عنه فى Scope  

## كيف تسمى المتغيرات؟

4. مينفعش تبدأ برقم زى كده
   
   ```javascript
   let 5hg = "name;"
   ```

5. مسموح بالحروف زى كدة 
   
   ```javascript
   let $button = "click"
   let _color = #ffffff
   ```

6. الطريقة المفضلة للاستخدام camelCase 
   
   ```javascript
   let myUserName = "MIRI"
   ```
   
## Variable Scopes
   
   يعنى المتغيرات دى متشافة فين؟
   
   - Global: يعنى متشافة فى كل حته فى الكود
   
   - function: دى متشافة بس جوا function اللى اتعرف فيها
   
   - block: دا خاص بالlet وconst المتغير بيقبى متشاف بس جوا {} الكتلة دى, مثال if او for

### if a **condition**

```javascript
if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
} 
```

### Loops  **for**

```javascript
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
```


