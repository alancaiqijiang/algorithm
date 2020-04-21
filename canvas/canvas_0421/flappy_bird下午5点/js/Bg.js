// 背景类
function Bg() {
    // 位置
    this.x = 0;
    // 渲染背景
    // 计算一下长宽比，
    var rate = 288 / 512;
    // 图片宽度，高度和手机屏幕高度相同，宽度要按比例计算
    this.picW = game.canvas.height * rate;
}
// 背景的更新方法
Bg.prototype.update = function () {
    this.x -= 1;
    // 这里的思路和无缝连续滚动是一个思路，就是传统轮播图
    // 当猫腻的图片x到最左边了，就要拉回来
    if (this.x < -this.picW) {
        this.x = 0;
    }
}
// 背景的渲染方法
Bg.prototype.render = function () {
    // 绘制两个背景图片，这里的套路和之前jQuery课程中的传统轮播图是一致的。
    game.ctx.drawImage(game.R['bg'], this.x, 0, this.picW, game.canvas.height);
    game.ctx.drawImage(game.R['bg'], this.x + this.picW, 0, this.picW, game.canvas.height);
}