/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
    fontfamily:{
    poppins:["poppins","sans-serif"],
  },
colors: {
  primary:"#f7ba34",
  secondary:"#69a79c",
  light:"#f7f7f7",
  drak:"#C8A1E0",
  drak2:"#D1E9F6",
  chiro:'#E5EAF4',
  gray:'#6A9C89',
  blue:'#295F98',
  andika:'#CAE6B2',
  blue2: "#00B8D9",
  black:'#1E201E',
  white:'#FFFBE6',
  pink:'#DC0083',
  orange:'#E85C0D',

},
 container:{
  center: true,
  padding: {
    DEFAULT: "1rem",
   sm: "2rem",
  lg: "4rem",
    xl: "6rem",

  },
 },
},
},
plugins: [],
};



