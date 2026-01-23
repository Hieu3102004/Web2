// --- 1. LOGIC FUNCTIONS (Pure Calculation & Return) ---
// Phần này giống hệt bài học "Function - Return" của bạn

function calculateArea(w, h) { 
    return w * h; 
}

function calculatePerimeter(w, h) { 
    return (w + h) * 2; 
}

function calculateAverage(a, b) { 
    return (a + b) / 2; 
}

function calculateBMI(w, h) { 
    if(h === 0) return 0; // Tránh lỗi chia cho 0
    return w / (h * h); 
}

function calculateTotalMinutes(h, m) { 
    return h * 60 + m; 
}

function calculateMax(a, b) { 
    return (a > b) ? a : b; 
}

// --- 2. UI FUNCTIONS (Handle Actions & Display) ---

// Helper: Lấy dữ liệu từ HTML
function getValues() {
    let v1 = parseFloat(document.getElementById("input1").value);
    let v2 = parseFloat(document.getElementById("input2").value);
    return { v1, v2 };
}

// Helper: Hiển thị kết quả ra HTML (Result ... is ...)
function showResult(type, value) {
    document.getElementById("calcType").innerText = type; 
    document.getElementById("calcResult").innerText = value;
}

// --- 3. EVENT HANDLERS (Được gọi khi bấm nút bên HTML) ---

function doCalcArea() {
    let d = getValues();
    if(isNaN(d.v1)) { alert("Please enter numbers"); return; }
    
    let result = calculateArea(d.v1, d.v2); // Gọi hàm tính toán
    showResult("Area", result + " m²");     // Gọi hàm hiển thị
}

function doCalcPerimeter() {
    let d = getValues();
    let result = calculatePerimeter(d.v1, d.v2);
    showResult("Perimeter", result + " m");
}

function doCalcAverage() {
    let d = getValues();
    let result = calculateAverage(d.v1, d.v2);
    showResult("Average", result);
}

function doCalcBMI() {
    let d = getValues();
    let result = calculateBMI(d.v1, d.v2);
    showResult("BMI", result.toFixed(2));
}

function doCalcTotalMinute() {
    let d = getValues();
    let result = calculateTotalMinutes(d.v1, d.v2);
    showResult("Total Minutes", result + " min");
}

function doFindMax() {
    let d = getValues();
    let result = calculateMax(d.v1, d.v2);
    showResult("Max Value", result);
}

function resetForm() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    showResult("______", "______");
}