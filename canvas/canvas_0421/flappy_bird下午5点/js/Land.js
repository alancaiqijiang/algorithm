// 背景类
function Land() {
    // 位置
    this.x = 0;
    // 渲染背景
    
}
// 背景的更新方法
Land.prototype.update = function () {
    this.x -= 1;
    // 这里的思路和无缝连续滚动是一个思路，就是传统轮播图
    // 当猫腻的图片x到最左边了，就要拉回来
    if (this.x < -336) {
        this.x = 0;
    }
}
// 背景的渲染方法
Land.prototype.render = function () {
    // 绘制3个背景图片，这里的套路和之前jQuery课程中的传统轮播图是一致的。
    game.ctx.drawImage(game.R['land'], this.x, game.canvas.height * 0.77);
    game.ctx.drawImage(game.R['land'], this.x + 336, game.canvas.height * 0.77);
    game.ctx.drawImage(game.R['land'], this.x + 336 * 2, game.canvas.height * 0.77);
    // 用纯色填充底下
    game.ctx.fillStyle = 'rgb(222,216,149)';
    game.ctx.fillRect(0, game.canvas.height * 0.85, game.canvas.width, game.canvas.height * 0.15);
}