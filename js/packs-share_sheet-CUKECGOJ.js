var s=function(t){t.preventDefault();let e=$(this),a=$('<button class="btn btn-default">Close</button>');Radiopaedia.Modal({title:e.attr("title")||e.text(),message:$(e.data().shareSheet).html(),actions:a,size:e.data().shareSheetSize||"sm",callbacks:{open:function(){$(".js-share-tooltip",this.content).tooltip()}}}),a.on("click",Radiopaedia.Modal.close)};document.addEventListener("click",t=>{t?.target instanceof Element&&t.target.matches("a[data-share-sheet], span[data-share-sheet]")&&s.call(t.target,t)},!1);