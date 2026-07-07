@@ -0,0 +1,91 @@
1	+
// ===============================
2	+
// Dark Mode
3	+
// ===============================
4	+
5	+
const themeBtn = document.getElementById("themeBtn");
6	+
7	+
if (localStorage.getItem("theme") === "dark") {
8	+
    document.body.classList.add("dark");
9	+
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
10	+
}
11	+
12	+
themeBtn.addEventListener("click", () => {
13	+
14	+
    document.body.classList.toggle("dark");
15	+
16	+
    if (document.body.classList.contains("dark")) {
17	+
        localStorage.setItem("theme", "dark");
18	+
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
19	+
    } else {
20	+
        localStorage.setItem("theme", "light");
21	+
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
22	+
    }
23	+
24	+
});
25	+
26	+
// ===============================
27	+
// Shopping Cart Counter
28	+
// ===============================
29	+
30	+
let cart = JSON.parse(localStorage.getItem("cart")) || [];
31	+
32	+
const cartCount = document.getElementById("cart-count");
33	+
34	+
function updateCartCount() {
35	+
    if (cartCount) {
36	+
        cartCount.textContent = cart.length;
37	+
    }
38	+
}
39	+
40	+
updateCartCount();
41	+
42	+
// ===============================
43	+
// Scroll To Top Button
44	+
// ===============================
45	+
46	+
const topBtn = document.createElement("button");
47	+
48	+
topBtn.innerHTML = "⬆";
49	+
topBtn.id = "topBtn";
50	+
51	+
document.body.appendChild(topBtn);
52	+
53	+
topBtn.style.position = "fixed";
54	+
topBtn.style.right = "20px";
55	+
topBtn.style.bottom = "20px";
56	+
topBtn.style.padding = "12px 16px";
57	+
topBtn.style.border = "none";
58	+
topBtn.style.borderRadius = "50%";
59	+
topBtn.style.cursor = "pointer";
60	+
topBtn.style.display = "none";
61	+
topBtn.style.fontSize = "18px";
62	+
63	+
window.addEventListener("scroll", () => {
64	+
65	+
    if (window.scrollY > 300) {
66	+
        topBtn.style.display = "block";
67	+
    } else {
68	+
        topBtn.style.display = "none";
69	+
    }
70	+
71	+
});
72	+
73	+
topBtn.addEventListener("click", () => {
74	+
75	+
    window.scrollTo({
76	+
        top: 0,
77	+
        behavior: "smooth"
78	+
    });
79	+
80	+
});
81	+
82	+
// ===============================
83	+
// Welcome Alert (Only Once)
84	+
// ===============================
85	+
86	+
if (!localStorage.getItem("visited")) {
87	+
88	+
    alert("Welcome to ShopEase!");
89	+
90	+
    localStorage.setItem("visited", "true");
91	+
}
