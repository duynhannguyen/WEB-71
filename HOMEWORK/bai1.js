/*
Đè bài: Hãy thử 5 phép toán trong mảng.
- Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
- Thêm “Rock-n-Roll” vào cuối.
- Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
- Tách giá trị đầu tiên của mảng và hiển thị nó.
- Thêm trước Rap và Reggae vào mảng.
*/ 

let styles = ["Jazz", "Blues"]
styles.push("Rock-n-roll")
if(styles.length % 2 ){
    console.log(styles.length);
    const middleIndex = Math.floor(styles.length/2);
    console.log(middleIndex);
    styles[middleIndex] = "Classics"
    console.log(styles);
}
console.log("Giá trị đầu tiên:" ,styles.shift())

styles.unshift("Rap", "Reggae")
console.log(
    styles
    );


