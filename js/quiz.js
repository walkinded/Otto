(function($){

  $(document).ready(function($) {
  
      // $('.nextBtn').addClass('xbtn--grad__disabled');
    $('.quiz__question-page .tab_content').hide();
    $('.quiz__question-page .tab_content:first').show();
    $('.quiz__question-page .tabs li:first').addClass('active');
    $('.quiz__question-page .tabs li').click(function(event) {
      let tabId = $(this).find('a').attr('href');
      tabId=tabId.substr(-1,tabId.indexOf("-"));
      //console.log('#tab-'+tabId);
      // $('.nextBtn').addClass('xbtn--grad__disabled');
      
      event.preventDefault();
  
      // $('input[type="radio"]').on('click', function() {
      // 	$('.nextBtn').removeClass('xbtn--grad__disabled');
      // });
  
      $(this).addClass('active');
      // let arr_check = [];
  
      //console.log($(this).find($('input[type="radio"]').prop('checked')));
      // проверка на checked radio
      if ($('#tab-'+tabId).find('input[type="radio"]:checked').val()) {	
        console.log('totot'+$('#tab-'+tabId).find('input[type="radio"]:checked').val());		
        $('#tab-'+tabId).find('.nextBtn').removeClass('xbtn--grad__disabled');
        
      } else {
        console.log('this unchecked');	
        $('#tab-'+tabId).find('.nextBtn').addClass('xbtn--grad__disabled');
        $('#tab-4').find('.nextBtn').removeClass('xbtn--grad__disabled');

      }
      // arr_check.push($('#tab-'+tabId).find('input[type="radio"]:checked').val());
      
      $('.quiz__question-page .tab_content').hide();
      // console.log(arr_check);
  
      var selectTab = $(this).find('a').attr("href");
  
  
      $(selectTab).fadeIn();
    });
  
    var arr_check = [];
  
    $('input[type="radio"]').on('change', function() {
      $('.question-list__item-circle').removeClass('active')
      $(this).closest('.question-page').find('.nextBtn').removeClass('xbtn--grad__disabled');
      let nextTab = $(this).closest('.tab_content').attr('id');
      tabId = nextTab.substr(-1,nextTab.indexOf("-"));
      let nextTabId = +nextTab.substr(-1,nextTab.indexOf("-"));
      var valRadio = $('#tab-'+tabId).find('input[type="radio"]:checked').val();
      let titleText = $('#tab-'+tabId).find('.question-page__title p.fr').text();
  
      nextTabId ++;
      $(this).parent().find('.question-list__item-circle').addClass('active')
      
      arr_check[tabId-1] = tabId+") "+titleText +": "+valRadio+" ";
      /*if(arr_check.indexOf(valRadio)==-1){
        arr_check.push(valRadio);
        }*/
        console.log(arr_check);
        //arr_check = arr_check.replace(/<\/?[a-zA-Z]+>/gi,'');
        $('.quiz .lead__form').find('[name=your-title]').val(arr_check).attr('readonly', true);
    });
    // if (!$('input[type="radio"]').checked) {
    // 	$('.nextBtn').addClass('xbtn--grad__disabled');
    // } else {
    // 	$('.nextBtn').removeClass('xbtn--grad__disabled');
    // }
    
    
    let mainCounter = 4;
    $('.question-counter .main-count').text(mainCounter);
    $('.question-counter .counter').text(mainCounter);

    $('.nextBtn').on('click', function() {
      let nextTab = $(this).closest('.tab_content').attr('id');
      tabId = nextTab.substr(-1,nextTab.indexOf("-"));
      let nextTabId = +nextTab.substr(-1,nextTab.indexOf("-"));
      var valRadio = $('#tab-'+tabId).find('input[type="radio"]:checked').val();
  
      nextTabId ++;
      
  
      
      $('.tab_content').hide();
  
  
      $(this).closest('.quiz__question-page').find('a[href="#tab-'+nextTabId+'"]').click();

      $('.question-counter .counter').text(--mainCounter);
    });
  
    $('.btn-skip').on('click', function() {
      $(this).closest('.quiz__question-page').find('a[href="#tab-2"]').click();
    });
  
    $('.xbtn--border_back').on('click', function() {
      let prevTab = $(this).closest('.tab_content').attr('id');
      let prevTabId = +prevTab.substr(-1,prevTab.indexOf("-"));
  
      prevTabId --;
  
      $(this).closest('.quiz__question-page').find('a[href="#tab-'+prevTabId+'"]').click();
      $('.question-counter .counter').text(++mainCounter);
    });
  
  
    if($(window).width() < 769) {
      let i = 1;
      $('.quiz .tabs li a').each(function() {
      //	console.log(this + " "+ i);
        $(this).text(i);
        console.log($(this).text());
        i++;
      });
    }
    
  
  });
  
  })(jQuery);
  