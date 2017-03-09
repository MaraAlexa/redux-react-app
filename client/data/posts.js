import firstImg from './images/myface.png';
// look into webpack isomorphic tools for importing images more efficiently:
// https://github.com/halt-hammerzeit/webpack-isomorphic-tools#require-vs-import
// works only with urls that end in .jpg or.png - webpack issue
const posts = [
   {
      "code":"BAcyDyQwcXX",
      "caption":"Look into isomorphic tools",
      "likes":36,
      "id":"1161022966406956503",
      "display_src": firstImg
   },
   {
      "code":"BAcJeJrQca9",
      "caption":"Tiger",
      "likes":79,
      "id":"1160844458347054781",
      "display_src":"http://lorempixel.com/output/animals-q-c-640-480-5.jpg"
   },
   {
      "code":"BAF_KY4wcRY",
      "caption":"Imaginary view of the day!",
      "likes":78,
      "id":"1154606670337393752",
      "display_src":"http://lorempixel.com/output/cats-q-c-640-480-7.jpg"
   },
   {
      "code":"BAPIPRjQce9",
      "caption":"Snow ❄️",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"http://lorempixel.com/output/nature-q-c-640-480-3.jpg"
   },
   {
      "code":"-hZh6IQcfN",
      "caption":"Holiday Time",
      "likes":66,
      "id":"1126293663140399053",
      "display_src":"http://lorempixel.com/output/nature-q-c-640-480-2.jpg"
   },
   {
      "code":"-B3eiIwcYV",
      "caption":"Blue water",
      "likes":23,
      "id":"1117418173361145365",
      "display_src":"http://lorempixel.com/output/nature-q-c-640-480-10.jpg"
   },
   {
      "code":"BAhvZrRwcfu",
      "caption":"I can feel the warmth in my heart - is called love",
      "likes":31,
      "id":"1162418651480049646",
      "display_src":"http://lorempixel.com/output/nature-q-c-640-480-1.jpg"
   },
   {
      "code":"BAPIPRjQce9",
      "caption":"Beach",
      "likes":47,
      "id":"1157179863266871229",
      "display_src":"http://lorempixel.com/output/nature-q-c-640-480-8.jpg"
   },
   {
      "code":"-hZh6IQcfN",
      "caption":"From above",
      "likes":66,
      "id":"1126293663140399053",
      "display_src":"http://lorempixel.com/output/nature-q-c-640-480-6.jpg"
   }


];


export default posts;
