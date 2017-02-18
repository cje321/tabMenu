'use strict';
$(document).ready(function () {

   var tab = new TabMenu();

});


function TabMenu() {
    this.init();
    this.initEvent();
}

TabMenu.prototype = {

    // ���� ����
    init: function () {
        this.$tabMenu = $(".tab_menu li");
        this.$tabContents = $(".tab_contents li");
        this.oldIndex = null;
        this.currentIndex = 0;
    },

    // �������ڸ��� ������ �̺�Ʈ��
    initEvent: function () {
        var _this = this;

        this.$tabMenu.on("click", function () {
            _this.renewIndex( $(this) );
            _this.toggleMenu( $(this) );
            _this.toggleContent();
        });
    },

    // ��ȣ ���� ���
    renewIndex: function ($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    // �޴� ���� ���
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass("active");
        $this.addClass("active");
    },

    // �̹��� ���� ���
    toggleContent: function () {
       this.$tabContents.eq(this.oldIndex).hide();
       this.$tabContents.eq(this.currentIndex).show();
    }

};