function Game() {
    // 得到canvas画布
    this.canvas = document.getElementById('canvas');
    // 上下文
    this.ctx = this.canvas.getContext('2d');

    // 设置canvas画布和视口相同宽度、高度
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;

    // 所有图片都加载好之后，游戏才能开始。
    // 所有图片数组，alias是对图片的“称呼”
    var allImages = [
        { 'url': 'images/bg.png', 'alias': 'bg' },
        { 'url': 'images/bird0_0.png', 'alias': 'bird0_0' },
        { 'url': 'images/bird0_1.png', 'alias': 'bird0_1' },
        { 'url': 'images/bird0_2.png', 'alias': 'bird0_2' },
        { 'url': 'images/land.png', 'alias': 'land' },
    ];

    // 做一个R对象，键名都是图片的昵称，值都是图片img对象
    this.R = {};
    // 一上来就要显示正在加载图片
    // 清屏
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // 设置文字居中
    this.ctx.textAlign = 'center';
    // 设置文字字号
    this.ctx.font = '30px 微软雅黑';
    // 写文字
    this.ctx.fillText(`正在加载图片请稍后 0 / ${allImages.length}`, this.canvas.width / 2, this.canvas.height / 2);

    // 备份this
    var self = this;
    // 遍历allImages数组，依次加载它们，如果加载好了，就在对象R中加入它
    for (var i = 0; i < allImages.length; i++) {
        (function (i) {
            var img = new Image();
            // 当这张图片加载好之后，this就是img
            img.onload = function () {
                // 设置给game类的实例alias这个属性
                self.R[allImages[i].alias] = this;
                // 输出测试一下
                console.log(self.R);
                // 在屏幕上显示当前已经加载好的图片的张数
                self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
                self.ctx.textAlign = 'center';
                self.ctx.font = '30px 微软雅黑';
                self.ctx.fillText(`正在加载图片请稍后 ${Object.keys(self.R).length} / ${allImages.length}`, self.canvas.width / 2, self.canvas.height / 2);

                // 统计键的个数，统计一个对象的键的个数，就要用Object.keys(对象).length
                // Object.keys(对象)可以将一个对象的键变为数组
                // 每张图片加载好之后，都要问问当前已经加载好的图片总数，是否等于总图片数
                if (Object.keys(self.R).length == allImages.length) {
                    // 所有图片都加载完毕
                    // 运行定时器
                    self.start();
                }
            };
            img.src = allImages[i].url;
        })(i);
    }
}
// 开始游戏
Game.prototype.start = function () {
    var self = this;
    // 帧编号
    this.f = 0;
    // 实例化背景
    this.bg = new Bg();
    // 实例化大地类
    this.land = new Land();

    // 定时器
    setInterval(function () {
        // 清屏
        self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        // 打印帧编号
        self.f++;
        self.ctx.textAlign = 'left';
        self.ctx.font = '20px 宋体';
        self.ctx.fillText(self.f, 10, 20);

        // 绘制背景
        self.bg.update();
        self.bg.render();
        // 绘制大地
        self.land.update();
        self.land.render();
    }, 20);
}