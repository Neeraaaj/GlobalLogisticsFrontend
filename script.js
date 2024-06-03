function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  
function files(index) {
    var data = `
       ./ezgif-frame-001.png
       ./ezgif-frame-002.png
       ./ezgif-frame-003.png
       ./ezgif-frame-004.png
       ./ezgif-frame-005.png
       ./ezgif-frame-006.png
       ./ezgif-frame-007.png
       ./ezgif-frame-008.png
       ./ezgif-frame-009.png
       ./ezgif-frame-010.png
       ./ezgif-frame-011.png
       ./ezgif-frame-012.png
       ./ezgif-frame-013.png
       ./ezgif-frame-014.png
       ./ezgif-frame-015.png
       ./ezgif-frame-016.png
       ./ezgif-frame-017.png
       ./ezgif-frame-018.png
       ./ezgif-frame-019.png
       ./ezgif-frame-020.png
       ./ezgif-frame-021.png
       ./ezgif-frame-022.png
       ./ezgif-frame-023.png
       ./ezgif-frame-024.png
       ./ezgif-frame-025.png
       ./ezgif-frame-026.png
       ./ezgif-frame-027.png
       ./ezgif-frame-028.png
       ./ezgif-frame-029.png
       ./ezgif-frame-030.png
       ./ezgif-frame-031.png
       ./ezgif-frame-032.png
       ./ezgif-frame-033.png
       ./ezgif-frame-034.png
       ./ezgif-frame-035.png
       ./ezgif-frame-036.png
       ./ezgif-frame-037.png
       ./ezgif-frame-038.png
       ./ezgif-frame-039.png
       ./ezgif-frame-040.png
       ./ezgif-frame-041.png
       ./ezgif-frame-042.png
       ./ezgif-frame-043.png
       ./ezgif-frame-044.png
       ./ezgif-frame-045.png
       ./ezgif-frame-046.png
       ./ezgif-frame-047.png
       ./ezgif-frame-048.png
       ./ezgif-frame-049.png
       ./ezgif-frame-050.png
       ./ezgif-frame-051.png
       ./ezgif-frame-052.png
       ./ezgif-frame-053.png
       ./ezgif-frame-054.png
       ./ezgif-frame-055.png
       ./ezgif-frame-056.png
       ./ezgif-frame-057.png
       ./ezgif-frame-058.png
       ./ezgif-frame-059.png
       ./ezgif-frame-060.png
       ./ezgif-frame-061.png
       ./ezgif-frame-062.png
       ./ezgif-frame-063.png
       ./ezgif-frame-064.png
       ./ezgif-frame-065.png
       ./ezgif-frame-066.png
       ./ezgif-frame-067.png
       ./ezgif-frame-068.png
       ./ezgif-frame-069.png
       ./ezgif-frame-070.png
       ./ezgif-frame-071.png
       ./ezgif-frame-072.png
       ./ezgif-frame-073.png
       ./ezgif-frame-074.png
       ./ezgif-frame-075.png
       ./ezgif-frame-076.png
       ./ezgif-frame-077.png
       ./ezgif-frame-078.png
       ./ezgif-frame-079.png
       ./ezgif-frame-080.png
       ./ezgif-frame-081.png
       ./ezgif-frame-082.png
       ./ezgif-frame-083.png
       ./ezgif-frame-084.png
       ./ezgif-frame-085.png
       ./ezgif-frame-086.png
       ./ezgif-frame-087.png
       ./ezgif-frame-088.png
       ./ezgif-frame-089.png
       ./ezgif-frame-090.png
       ./ezgif-frame-091.png
       ./ezgif-frame-092.png
       ./ezgif-frame-093.png
       ./ezgif-frame-094.png
       ./ezgif-frame-095.png
       ./ezgif-frame-096.png
       ./ezgif-frame-097.png
       ./ezgif-frame-098.png
       ./ezgif-frame-099.png
       ./ezgif-frame-100.png
       ./ezgif-frame-101.png
       ./ezgif-frame-102.png
       ./ezgif-frame-103.png
       ./ezgif-frame-104.png
       ./ezgif-frame-105.png
       ./ezgif-frame-106.png
       ./ezgif-frame-107.png
       ./ezgif-frame-108.png
       ./ezgif-frame-109.png
       ./ezgif-frame-110.png
       ./ezgif-frame-111.png
       ./ezgif-frame-112.png
       ./ezgif-frame-113.png
       ./ezgif-frame-114.png
       ./ezgif-frame-115.png
       ./ezgif-frame-116.png
       ./ezgif-frame-117.png
       ./ezgif-frame-118.png
       ./ezgif-frame-119.png
       ./ezgif-frame-120.png
       ./ezgif-frame-121.png
       ./ezgif-frame-122.png
       ./ezgif-frame-123.png
       ./ezgif-frame-124.png
       ./ezgif-frame-125.png
       ./ezgif-frame-126.png
       ./ezgif-frame-127.png
       ./ezgif-frame-128.png
       ./ezgif-frame-129.png
       ./ezgif-frame-130.png
       ./ezgif-frame-131.png
       ./ezgif-frame-132.png
       ./ezgif-frame-133.png
       ./ezgif-frame-134.png
   `;
    return data.split("\n")[index];
}

function rover(index) {
    var data = `
  ./rover/animated_medium20221003-25346-mrlsiz_000.png
  ./rover/animated_medium20221003-25346-mrlsiz_001.png
  ./rover/animated_medium20221003-25346-mrlsiz_002.png
  ./rover/animated_medium20221003-25346-mrlsiz_003.png
  ./rover/animated_medium20221003-25346-mrlsiz_004.png
  ./rover/animated_medium20221003-25346-mrlsiz_005.png
  ./rover/animated_medium20221003-25346-mrlsiz_006.png
  ./rover/animated_medium20221003-25346-mrlsiz_007.png
  ./rover/animated_medium20221003-25346-mrlsiz_008.png
  ./rover/animated_medium20221003-25346-mrlsiz_009.png
  ./rover/animated_medium20221003-25346-mrlsiz_010.png
  ./rover/animated_medium20221003-25346-mrlsiz_011.png
  ./rover/animated_medium20221003-25346-mrlsiz_012.png
  ./rover/animated_medium20221003-25346-mrlsiz_013.png
  ./rover/animated_medium20221003-25346-mrlsiz_014.png
  ./rover/animated_medium20221003-25346-mrlsiz_015.png
  ./rover/animated_medium20221003-25346-mrlsiz_016.png
  ./rover/animated_medium20221003-25346-mrlsiz_017.png
  ./rover/animated_medium20221003-25346-mrlsiz_018.png
  ./rover/animated_medium20221003-25346-mrlsiz_019.png
  ./rover/animated_medium20221003-25346-mrlsiz_020.png
  ./rover/animated_medium20221003-25346-mrlsiz_021.png
  ./rover/animated_medium20221003-25346-mrlsiz_022.png
  ./rover/animated_medium20221003-25346-mrlsiz_023.png
  ./rover/animated_medium20221003-25346-mrlsiz_024.png
  ./rover/animated_medium20221003-25346-mrlsiz_025.png
  ./rover/animated_medium20221003-25346-mrlsiz_026.png
  ./rover/animated_medium20221003-25346-mrlsiz_027.png
  ./rover/animated_medium20221003-25346-mrlsiz_028.png
  ./rover/animated_medium20221003-25346-mrlsiz_029.png
  ./rover/animated_medium20221003-25346-mrlsiz_030.png
  ./rover/animated_medium20221003-25346-mrlsiz_031.png
  ./rover/animated_medium20221003-25346-mrlsiz_032.png
  ./rover/animated_medium20221003-25346-mrlsiz_033.png
  ./rover/animated_medium20221003-25346-mrlsiz_034.png
  ./rover/animated_medium20221003-25346-mrlsiz_035.png
  ./rover/animated_medium20221003-25346-mrlsiz_036.png
  ./rover/animated_medium20221003-25346-mrlsiz_037.png
  ./rover/animated_medium20221003-25346-mrlsiz_038.png
  ./rover/animated_medium20221003-25346-mrlsiz_039.png
  ./rover/animated_medium20221003-25346-mrlsiz_040.png
  ./rover/animated_medium20221003-25346-mrlsiz_041.png
  ./rover/animated_medium20221003-25346-mrlsiz_042.png
  ./rover/animated_medium20221003-25346-mrlsiz_043.png
  ./rover/animated_medium20221003-25346-mrlsiz_044.png
  ./rover/animated_medium20221003-25346-mrlsiz_045.png
  ./rover/animated_medium20221003-25346-mrlsiz_046.png
  ./rover/animated_medium20221003-25346-mrlsiz_047.png
  ./rover/animated_medium20221003-25346-mrlsiz_048.png
  ./rover/animated_medium20221003-25346-mrlsiz_049.png
  ./rover/animated_medium20221003-25346-mrlsiz_050.png
  ./rover/animated_medium20221003-25346-mrlsiz_051.png
  ./rover/animated_medium20221003-25346-mrlsiz_052.png
  ./rover/animated_medium20221003-25346-mrlsiz_053.png
  ./rover/animated_medium20221003-25346-mrlsiz_054.png
  ./rover/animated_medium20221003-25346-mrlsiz_055.png
  ./rover/animated_medium20221003-25346-mrlsiz_056.png
  ./rover/animated_medium20221003-25346-mrlsiz_057.png
  ./rover/animated_medium20221003-25346-mrlsiz_058.png
  ./rover/animated_medium20221003-25346-mrlsiz_059.png
  ./rover/animated_medium20221003-25346-mrlsiz_060.png
  ./rover/animated_medium20221003-25346-mrlsiz_061.png
  ./rover/animated_medium20221003-25346-mrlsiz_062.png
  ./rover/animated_medium20221003-25346-mrlsiz_063.png
  ./rover/animated_medium20221003-25346-mrlsiz_064.png
  ./rover/animated_medium20221003-25346-mrlsiz_065.png
  ./rover/animated_medium20221003-25346-mrlsiz_066.png
  ./rover/animated_medium20221003-25346-mrlsiz_067.png
  ./rover/animated_medium20221003-25346-mrlsiz_068.png
  ./rover/animated_medium20221003-25346-mrlsiz_069.png
  ./rover/animated_medium20221003-25346-mrlsiz_070.png
  ./rover/animated_medium20221003-25346-mrlsiz_071.png
  ./rover/animated_medium20221003-25346-mrlsiz_072.png
  ./rover/animated_medium20221003-25346-mrlsiz_073.png
  ./rover/animated_medium20221003-25346-mrlsiz_074.png
  ./rover/animated_medium20221003-25346-mrlsiz_075.png
  ./rover/animated_medium20221003-25346-mrlsiz_076.png
  ./rover/animated_medium20221003-25346-mrlsiz_077.png
  ./rover/animated_medium20221003-25346-mrlsiz_078.png
  ./rover/animated_medium20221003-25346-mrlsiz_079.png
  ./rover/animated_medium20221003-25346-mrlsiz_080.png
  ./rover/animated_medium20221003-25346-mrlsiz_081.png
  ./rover/animated_medium20221003-25346-mrlsiz_082.png
  ./rover/animated_medium20221003-25346-mrlsiz_083.png
  ./rover/animated_medium20221003-25346-mrlsiz_084.png
  ./rover/animated_medium20221003-25346-mrlsiz_085.png
  ./rover/animated_medium20221003-25346-mrlsiz_086.png
  ./rover/animated_medium20221003-25346-mrlsiz_087.png
  ./rover/animated_medium20221003-25346-mrlsiz_088.png
  ./rover/animated_medium20221003-25346-mrlsiz_089.png
  ./rover/animated_medium20221003-25346-mrlsiz_090.png
  ./rover/animated_medium20221003-25346-mrlsiz_091.png
  ./rover/animated_medium20221003-25346-mrlsiz_092.png
  ./rover/animated_medium20221003-25346-mrlsiz_093.png
  ./rover/animated_medium20221003-25346-mrlsiz_094.png
  ./rover/animated_medium20221003-25346-mrlsiz_095.png
  ./rover/animated_medium20221003-25346-mrlsiz_096.png
  ./rover/animated_medium20221003-25346-mrlsiz_097.png
  ./rover/animated_medium20221003-25346-mrlsiz_098.png
  ./rover/animated_medium20221003-25346-mrlsiz_099.png
  ./rover/animated_medium20221003-25346-mrlsiz_100.png
  ./rover/animated_medium20221003-25346-mrlsiz_101.png
  ./rover/animated_medium20221003-25346-mrlsiz_102.png
  ./rover/animated_medium20221003-25346-mrlsiz_103.png
  ./rover/animated_medium20221003-25346-mrlsiz_104.png
  ./rover/animated_medium20221003-25346-mrlsiz_105.png
  ./rover/animated_medium20221003-25346-mrlsiz_106.png
  ./rover/animated_medium20221003-25346-mrlsiz_107.png
  ./rover/animated_medium20221003-25346-mrlsiz_108.png
  ./rover/animated_medium20221003-25346-mrlsiz_109.png
  ./rover/animated_medium20221003-25346-mrlsiz_110.png
  ./rover/animated_medium20221003-25346-mrlsiz_111.png
  ./rover/animated_medium20221003-25346-mrlsiz_112.png
  ./rover/animated_medium20221003-25346-mrlsiz_113.png
  ./rover/animated_medium20221003-25346-mrlsiz_114.png
  ./rover/animated_medium20221003-25346-mrlsiz_115.png
  ./rover/animated_medium20221003-25346-mrlsiz_116.png
  ./rover/animated_medium20221003-25346-mrlsiz_117.png
  ./rover/animated_medium20221003-25346-mrlsiz_118.png
  ./rover/animated_medium20221003-25346-mrlsiz_119.png
  ./rover/animated_medium20221003-25346-mrlsiz_120.png
  ./rover/animated_medium20221003-25346-mrlsiz_121.png
  ./rover/animated_medium20221003-25346-mrlsiz_122.png
  ./rover/animated_medium20221003-25346-mrlsiz_123.png
  ./rover/animated_medium20221003-25346-mrlsiz_124.png
  ./rover/animated_medium20221003-25346-mrlsiz_125.png
  ./rover/animated_medium20221003-25346-mrlsiz_126.png
  ./rover/animated_medium20221003-25346-mrlsiz_127.png
  ./rover/animated_medium20221003-25346-mrlsiz_128.png
  ./rover/animated_medium20221003-25346-mrlsiz_129.png
  ./rover/animated_medium20221003-25346-mrlsiz_130.png
  ./rover/animated_medium20221003-25346-mrlsiz_131.png
  ./rover/animated_medium20221003-25346-mrlsiz_132.png
  ./rover/animated_medium20221003-25346-mrlsiz_133.png
  ./rover/animated_medium20221003-25346-mrlsiz_134.png
  ./rover/animated_medium20221003-25346-mrlsiz_135.png
  ./rover/animated_medium20221003-25346-mrlsiz_136.png
  ./rover/animated_medium20221003-25346-mrlsiz_137.png
  ./rover/animated_medium20221003-25346-mrlsiz_138.png
  ./rover/animated_medium20221003-25346-mrlsiz_139.png
  ./rover/animated_medium20221003-25346-mrlsiz_140.png
  ./rover/animated_medium20221003-25346-mrlsiz_141.png
  ./rover/animated_medium20221003-25346-mrlsiz_142.png
  ./rover/animated_medium20221003-25346-mrlsiz_143.png
  ./rover/animated_medium20221003-25346-mrlsiz_144.png
  ./rover/animated_medium20221003-25346-mrlsiz_145.png
  ./rover/animated_medium20221003-25346-mrlsiz_146.png
  ./rover/animated_medium20221003-25346-mrlsiz_147.png
  ./rover/animated_medium20221003-25346-mrlsiz_148.png
  ./rover/animated_medium20221003-25346-mrlsiz_149.png
  ./rover/animated_medium20221003-25346-mrlsiz_150.png
  ./rover/animated_medium20221003-25346-mrlsiz_151.png
  ./rover/animated_medium20221003-25346-mrlsiz_152.png
  ./rover/animated_medium20221003-25346-mrlsiz_153.png
  ./rover/animated_medium20221003-25346-mrlsiz_154.png
  ./rover/animated_medium20221003-25346-mrlsiz_155.png
  ./rover/animated_medium20221003-25346-mrlsiz_156.png
  ./rover/animated_medium20221003-25346-mrlsiz_157.png
  ./rover/animated_medium20221003-25346-mrlsiz_158.png
  ./rover/animated_medium20221003-25346-mrlsiz_159.png
  ./rover/animated_medium20221003-25346-mrlsiz_160.png
  ./rover/animated_medium20221003-25346-mrlsiz_161.png
  ./rover/animated_medium20221003-25346-mrlsiz_162.png
  ./rover/animated_medium20221003-25346-mrlsiz_163.png
  ./rover/animated_medium20221003-25346-mrlsiz_164.png
  ./rover/animated_medium20221003-25346-mrlsiz_165.png
  ./rover/animated_medium20221003-25346-mrlsiz_166.png
  ./rover/animated_medium20221003-25346-mrlsiz_167.png
  ./rover/animated_medium20221003-25346-mrlsiz_168.png
  ./rover/animated_medium20221003-25346-mrlsiz_169.png
  ./rover/animated_medium20221003-25346-mrlsiz_170.png
  ./rover/animated_medium20221003-25346-mrlsiz_171.png
  ./rover/animated_medium20221003-25346-mrlsiz_172.png
  ./rover/animated_medium20221003-25346-mrlsiz_173.png
  ./rover/animated_medium20221003-25346-mrlsiz_174.png
  ./rover/animated_medium20221003-25346-mrlsiz_175.png
  ./rover/animated_medium20221003-25346-mrlsiz_176.png
  ./rover/animated_medium20221003-25346-mrlsiz_177.png
  ./rover/animated_medium20221003-25346-mrlsiz_178.png
  ./rover/animated_medium20221003-25346-mrlsiz_179.png
  ./rover/animated_medium20221003-25346-mrlsiz_180.png
  ./rover/animated_medium20221003-25346-mrlsiz_181.png
  ./rover/animated_medium20221003-25346-mrlsiz_182.png
  ./rover/animated_medium20221003-25346-mrlsiz_183.png
  ./rover/animated_medium20221003-25346-mrlsiz_184.png
  ./rover/animated_medium20221003-25346-mrlsiz_185.png
  ./rover/animated_medium20221003-25346-mrlsiz_186.png
  ./rover/animated_medium20221003-25346-mrlsiz_187.png
  ./rover/animated_medium20221003-25346-mrlsiz_188.png
  ./rover/animated_medium20221003-25346-mrlsiz_189.png
  ./rover/animated_medium20221003-25346-mrlsiz_190.png
  ./rover/animated_medium20221003-25346-mrlsiz_191.png
  ./rover/animated_medium20221003-25346-mrlsiz_192.png
  ./rover/animated_medium20221003-25346-mrlsiz_193.png
  ./rover/animated_medium20221003-25346-mrlsiz_194.png
  ./rover/animated_medium20221003-25346-mrlsiz_195.png
  ./rover/animated_medium20221003-25346-mrlsiz_196.png
  ./rover/animated_medium20221003-25346-mrlsiz_197.png
  ./rover/animated_medium20221003-25346-mrlsiz_198.png
  ./rover/animated_medium20221003-25346-mrlsiz_199.png
  ./rover/animated_medium20221003-25346-mrlsiz_200.png
  ./rover/animated_medium20221003-25346-mrlsiz_201.png
  ./rover/animated_medium20221003-25346-mrlsiz_202.png
  ./rover/animated_medium20221003-25346-mrlsiz_203.png
  ./rover/animated_medium20221003-25346-mrlsiz_204.png
  ./rover/animated_medium20221003-25346-mrlsiz_205.png
  ./rover/animated_medium20221003-25346-mrlsiz_206.png
  ./rover/animated_medium20221003-25346-mrlsiz_207.png
  ./rover/animated_medium20221003-25346-mrlsiz_208.png
  ./rover/animated_medium20221003-25346-mrlsiz_209.png
  ./rover/animated_medium20221003-25346-mrlsiz_210.png
  ./rover/animated_medium20221003-25346-mrlsiz_211.png
  ./rover/animated_medium20221003-25346-mrlsiz_212.png
  ./rover/animated_medium20221003-25346-mrlsiz_213.png
  ./rover/animated_medium20221003-25346-mrlsiz_214.png
  ./rover/animated_medium20221003-25346-mrlsiz_215.png
  ./rover/animated_medium20221003-25346-mrlsiz_216.png
  ./rover/animated_medium20221003-25346-mrlsiz_217.png
  ./rover/animated_medium20221003-25346-mrlsiz_218.png
  ./rover/animated_medium20221003-25346-mrlsiz_219.png
  ./rover/animated_medium20221003-25346-mrlsiz_220.png
  ./rover/animated_medium20221003-25346-mrlsiz_221.png
  ./rover/animated_medium20221003-25346-mrlsiz_222.png
  ./rover/animated_medium20221003-25346-mrlsiz_223.png`;
    return data.split("\n")[index];
}
  
  const frameCount = 300;
  const roverCount = 224;
  
  const images = [];
  const rovers = [];

  const imageSeq = {
    frame: 1,
  };
  const roverSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  for (let i = 0; i < roverCount; i++) {
    const img = new Image();
    img.src = rover(i);
    rovers.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });


  images[1].onload = render;

  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }

  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `bottom top`,
  });
  

  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })