# 🎮 Coding Playground

สนามฝึกซ้อม Coding สำหรับการทดลองและฝึกฝนทักษะการเขียนโปรแกรม JavaScript แบบ Real-time!

## 📖 คืออะไร?

Playground คือพื้นที่ที่คุณสามารถ:
- ✏️ เขียนและทดลองโค้ดอย่างอิสระ
- 🧪 ทดสอบโค้ดแบบเรียลไทม์ด้วย Watch Mode
- 🎯 ฝึกฝนแก้โจทย์หรือทดลองแนวคิดใหม่ๆ
- 📊 เห็นผลทดสอบทันทีเมื่อบันทึกไฟล์

## 🚀 วิธีใช้งาน

### เริ่มต้น Watch Mode

```bash
pnpm playground:watch
```

เมื่อรันคำสั่งนี้แล้ว:
1. ✅ Jest จะรันทดสอบและแสดงผล
2. 🔄 เมื่อคุณแก้ไขไฟล์และบันทึก (Save) ทดสอบจะรันใหม่ทันที
3. 📝 คุณสามารถดูผลลัพธ์และแก้ไขโค้ดได้เลย

### รันทดสอบครั้งเดียว

```bash
pnpm playground
```

## 📁 โครงสร้าง

```
playground/
├── README.md              📄 ไฟล์นี้ - คำแนะนำการใช้งาน
├── solution.js           💻 ไฟล์เขียนโค้ดที่นี่!
└── __spec__/
    └── solution.spec.js  🧪 ไฟล์ทดสอบ
```

## 💡 วิธีการฝึกฝน

### 1. เขียนฟังก์ชันของคุณ

แก้ไขไฟล์ `solution.js`:

```javascript
// ลบหรือแก้ไขฟังก์ชันตัวอย่าง แล้วเขียนของคุณเอง
function add(a, b) {
	return a + b;
}

// หรือเขียนฟังก์ชันใหม่
function multiply(a, b) {
	return a * b;
}

// อย่าลืม export ฟังก์ชันที่ต้องการทดสอบ
export default add;
```

### 2. เขียนทดสอบ

แก้ไขไฟล์ `__spec__/solution.spec.js`:

```javascript
import add from "../solution";
// ถ้าเขียนฟังก์ชันใหม่ import เพิ่ม:
// import multiply from "../solution";

describe("Your Function", () => {
	test("should work correctly", () => {
		expect(add(2, 3)).toBe(5);
	});
});
```

### 3. ดูผลลัพธ์แบบเรียลไทม์

เมื่อบันทึกไฟล์ (Save) ทดสอบจะรันใหม่ทันที:

```bash
PASS  playground/__spec__/solution.spec.js
  Your Function
    ✓ should work correctly (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
```

## 🎯 ตัวอย่างการฝึกฝน

### แนวทางที่ 1: ฝึกตามโจทย์

1. เลือกโจทย์จาก exercises/ ที่ยังไม่ได้ทำ
2. คัดลอกโจทย์ไปใช้ใน playground
3. เขียนโค้ดและทดสอบจนกว่าจะผ่าน
4. ย้ายโค้ดที่เสร็จแล้วกลับไป exercises/

### แนวทางที่ 2: ฝึกทักษะพื้นฐาน

เขียนฟังก์ชันง่ายๆ เช่น:
- `reverseString(str)` - กลับข้อความ
- `isPalindrome(str)` - เช็คว่าเป็น palindrome หรือไม่
- `factorial(n)` - หาค่า factorial
- `fizzBuzz(n)` - เกม FizzBuzz คลาสสิก

### แนวทางที่ 3: ฝึกเทคนิคใหม่ๆ

ลองใช้:
- Array methods (`map`, `filter`, `reduce`)
- Destructuring
- Spread/Rest operators
- Async/Await
- Classes

## 🎨 Best Practices

### ✅ ควรทำ

- เขียน Comment อธิบายโค้ด
- ทดสอบกับ edge cases
- เขียนทดสอบหลาย test cases
- ใช้ชื่อตัวแปรที่ชัดเจน
- Refactor โค้ดให้ดีขึ้นเรื่อยๆ

### ❌ ไม่ควรทำ

- เก็บโค้ดที่เสร็จแล้วไว้ใน playground
- เขียนโค้ดที่ไม่มีการทดสอบ
- ลืม export function ที่จะทดสอบ
- ใช้ชื่อตัวแปรที่ไม่ชัดเจน (เช่น a, b, x, y)

## 🎉 เริ่มต้นฝึกฝนได้เลย!

รันคำสั่งนี้แล้วเริ่มเขียนโค้ด:

```bash
pnpm playground:watch
```

สนุกกับการเขียนโค้ด! 💪🚀
