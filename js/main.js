/**
 * 在城市创造了kupletsky谢尔盖16.12.14.
 */

(function($) {
    $("body")
        // 添加了滑下动画下拉列表
        .on('show.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        })
        // 添加滑下动画下拉
        .on('hide.bs.dropdown', '.dropdown', function(e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });

    $(document).ready(function() {

        //JS的聚会
        jsSocials.shares.paypal = {
            label: "PayPal",
            logo: "fa fa-paypal",
            shareUrl: "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business={email}&lc=US&item_name={name}&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted",
            countUrl: ""
        };
        jsSocials.shares.github = {
            label: "GitHub",
            logo: "fa fa-github",
            shareUrl: "http://127.0.0.1:51792/material-design-color-palette",
            countUrl: "https://api.github.com/repos/zavoloklom/material-design-color-palette",
            getCount: function(data) {
                return data.stargazers_count;
            }
        };

        $("#jssocial").jsSocials({
            shares: [
                {
                    share: "paypal",
                    label: "Donate with PayPal",
                    logo: "zmdi zmdi-hc-fw zmdi-paypal",
                    email: "s.kupletsky@gmail.com",
                    name: "Material Design Color Palette"
                },
                {
                    share: "github",
                    label: "Star",
                    logo: "zmdi zmdi-hc-fw zmdi-github",
                    user: "zavoloklom",
                    repo: "material-design-color-palette"
                },
                {
                    share: "twitter",
                    label: "Tweet",
                    logo: "zmdi zmdi-hc-fw zmdi-twitter",
                    via: "zavoloklom",
                    hashtags: "materialDesign"
                },
                {
                    share: "facebook",
                    label: "Share",
                    logo: "zmdi zmdi-hc-fw zmdi-facebook"
                },
                {
                    share: "googleplus",
                    label: "Share",
                    logo: "zmdi zmdi-hc-fw zmdi-google-plus"
                },
                {
                    share: "pinterest",
                    label: "Pin it",
                    logo: "zmdi zmdi-hc-fw zmdi-pinterest-box"
                }
            ],
            url: "http://127.0.0.1:51792/material-design-color-palette/",
            text: "材质设计调色板",
            user: "zavoloklom",
            showLabel: true,
            showCount: true
        });

        //设置颜色
        var colorPalettes = $('.color-palette');//输出变量 color调色板= 赋值('.color-palette')

        colorPalettes.each(function(j) {
            var colorBlocks = $(this).find('> div > div');

            var color = $(this).parent().attr('id');

            colorBlocks.each(function(i) {

                var number = $(this).find('.title').text();
                var hex = $(this).find('.subhead').text();

                var textClass = $(this).find('>div').attr('class');

                // 添加ddrop下来
                $(this).prepend(
                    '<div class="hidden-xs dropdown pull-right">'
                        + '<a href="#" class="dropdown-toggle '+textClass+'" type="button" data-toggle="dropdown">'
                        + '<i class="zmdi zmdi-copy"></i>'
                        + '</a>'
                        + '<ul class="dropdown-menu">'
                        + '<li><a href="#" id="color-'+ j + i+'" class="zclip" data-copy-text="'+ hex +'">复制颜色值</a></li>'
                        + '<li><a href="#" id="text-'+j + i+'" class="zclip" data-copy-text="mdc-text-'+ color + '-' + number +'">复制class文本</a></li>'
                        + '<li><a href="#" id="bg-'+j + i+'" class="zclip" data-copy-text="mdc-bg-'+ color + '-' + number +'">复制class背景</a></li>'
                        //+ '<li><a href="#" id="border-'+j + i+'" class="zclip" data-copy-text="mdc-border-'+ color + '-' + number +'">边框复制类</a></li>'
                        + '</ul>'
                        + '</div>'
                );

            });
        });

        $("body")
            .on('click', '.zclip', function(e){//.在('点击','.zclip', 函数(e){
                e.preventDefault();//e.防止违约
            })
            .on('copy', '.zclip', function(e) {
                e.preventDefault();
                var copy = $(this).data("copy-text");
                e.clipboardData.clearData();
                e.clipboardData.setData("text/plain", copy);
                $.snackbar({content: '值 "'+ copy +'" 被复制到剪贴板!'});
            });
    });

})(jQuery);