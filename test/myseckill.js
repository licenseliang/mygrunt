function mySeckill(startTime){
	var _startTime = new Date(startTime);
	setTimeout(function(){
		if(new Date().getTime()>_startTime){
			if($("#choose-btn-ko").length>0){
				$("#choose-btn-ko").click();
			}else if($("#choose-btn-qiang").length>0){
				$("#choose-btn-qiang").click();
			}else if($("#btn-easybuy-submit").length>0){
				$("#btn-easybuy-submit").click();
			}else if($("#btn-onkeybuy").length>0){
				$("#btn-onkeybuy").click();
			}else if($("#InitCartUrl").length>0){
				$("#InitCartUrl").click();
			}else{
				mySeckill(startTime);
			}
		}else{
			mySeckill(startTime);
		}
	},100);
}

mySeckill("2017-03-09 20:00:00");


<div id="choose-btns" class="choose-btns clearfix">
    <div class="choose-amount" style="visibility: hidden;" clstag="shangpin|keycount|product|goumaishuliang_2">
        <div class="wrap-input">
            <input class="text buy-num" onkeyup="setAmount.modify('#buy-num');" id="buy-num" value="1">
            <a class="btn-reduce disabled" onclick="setAmount.reduce('#buy-num')" href="#none" data-disabled="1">-</a>
            <a class="btn-add" onclick="setAmount.add('#buy-num')" href="#none" data-disabled="1">+</a>
        </div>
    </div>

    <!--<a id="choose-btn-gift" class="btn-special1 btn-lg" style="display:none;" href="//cart.gift.jd.com/cart/addGiftToCart.action?pid=245133&pcount=1&ptype=1" class="btn-gift" clstag="shangpin|keycount|product|选作礼物购买_2"><b></b>选作礼物购买</a>-->

    <a id="choose-btn-ko" href="#none" class="btn-special1 btn-lg btn-disable" style="" clstag="shangpin|keycount|product|抢购_2">抢购</a>
    <a href="#none" id="btn-heyue" class="btn-special1 btn-lg" style="display:none;" clstag="shangpin|keycount|product|选择号码和套餐_2">选择号码和套餐</a>
                                    <a href="#none" id="InitCartUrl" class="btn-special1 btn-lg  btn-disable" clstag="shangpin|keycount|product|加入购物车_2" style="display: none;">加入购物车</a>
    <a href="#none" id="btn-baitiao" class="btn-special2 btn-lg" style="display:none;" clstag="shangpin|keycount|product|dabaitiaobutton_5025_5026_13673">打白条</a>
                                                                                                                    <a href="#none" id="btn-notify" class="J-notify-stock btn-special3 btn-lg notify-stock" style="" data-type="2" data-sku="245133" clstag="shangpin|keycount|product|daohuo_1">到货通知</a>
</div>




