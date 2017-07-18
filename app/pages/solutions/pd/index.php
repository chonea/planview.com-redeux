<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Planview Redeux</title>

  <!-- Bootstrap Core CSS -->
  <link href="/redeux/style/bootstrap.min.css" rel="stylesheet">

  <!-- Planview CSS -->
  <!--<link rel='stylesheet' id='font-awesome-css' href='//www.planview.com/wp-content/plugins/menu-icons/includes/library/icon-picker/css/types/font-awesome.min.css?ver=4.6.1' type='text/css' media='all' />-->
  <link rel='stylesheet' id='menu-icons-extra-css' href='//www.planview.com/wp-content/plugins/menu-icons/css/extra.min.css?ver=0.10.1' type='text/css' media='all' />
  <link rel='stylesheet' id='fancybox-css' href='//www.planview.com/wp-content/plugins/fancybox-for-wordpress/fancybox/fancybox.css?ver=4.6.1' type='text/css' media='all' />
  <link rel='stylesheet' id='font-awesome-four-css' href='//www.planview.com/wp-content/plugins/font-awesome-4-menus/css/font-awesome.min.css?ver=4.6.1' type='text/css' media='all' />
  
  <!--<link rel='stylesheet' id='bootstrap-css-css' href='//www.planview.com/wp-content/themes/planview-wp-theme/vendor/bootstrap/css/bootstrap.min.css?ver=3.3.4' type='text/css' media='all' />-->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel='stylesheet' id='jqueryui-css-css' href='//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css?ver=1.11.4' type='text/css' media='all' />
  
  <link rel='stylesheet' id='bootstrap-fontawesome-css' href='//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css?ver=3.3.4' type='text/css' media='all' />
  <link rel='stylesheet' id='planview-fonts-css' href='//fast.fonts.net/cssapi/09ff86dc-664a-4b55-b9ac-75e9cac7d8aa.css?ver=4.6.1' type='text/css' media='all' />
  <link rel='stylesheet' id='planview-css' href='//www.planview.com/wp-content/themes/planview-wp-theme/css/style.css?ver=4.6.1' type='text/css' media='all' />
  
  <!--<link rel='stylesheet' id='planview-css' href='//getbootstrap.com/examples/carousel/carousel.css' type='text/css' media='all' />-->

  <!--[if lt IE 8]>
  <link rel='stylesheet' id='planview-ie-css'  href='http://www.planview.com/wp-content/themes/planview-wp-theme/css/ie-fixes.css?ver=4.6.1' type='text/css' media='all' />
  <![endif]-->

  <!-- Custom CSS -->
  <link href="/redeux/style/redeux.css?v=0.1" rel="stylesheet">
  <style>
    body {
      padding-top: 80px;
      /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */
      padding-top: 0;
    }
  </style>

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    
    <style type="text/css">
      /* Gradient fallback for IE9 */
      .gradient {
        filter: none;
      }
    </style>
  <![endif]-->  

</head>

<body>

  <div class="solutions-wrapper">
    <!-- Page Content -->

    <?php include('solutions-pd.php'); ?>

  </div>
  <!-- /.redeux-wrapper -->

  <!-- Planview JS -->
  <script type='text/javascript' src='//www.planview.com/wp-includes/js/jquery/jquery.js?ver=1.12.4'></script>
  <script type='text/javascript' src='//www.planview.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
  <script type='text/javascript' src='//www.planview.com/wp-content/themes/planview-wp-theme/js/min/planview-header.min.js?ver=20130926'></script>
  <!--<script type='text/javascript' src='//www.planview.com/wp-content/themes/planview-wp-theme/vendor/bootstrap/js/bootstrap.min.js?ver=3.3.4'></script>-->
  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
  
  <script type='text/javascript' src='//ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js?ver=1.11.4'></script>
  <script type='text/javascript' src='//www.planview.com/wp-content/themes/planview-wp-theme/js/vendor/stellar.js/src/jquery.stellar.js?ver=0.6.2'></script>
  <script type='text/javascript' src='//www.planview.com/wp-content/themes/planview-wp-theme/js/vendor/js-webshim/polyfiller.js?ver=1.8'></script>
  <script type='text/javascript' src='//www.planview.com/wp-content/themes/planview-wp-theme/js/min/planview-footer.min.js?ver=4.6.1'></script>

  <!-- Custom JS -->
  <script src="/redeux/js/redeux.js?v=0.1" type="text/javascript"></script>
  <script type='text/javascript'>
  (function($) {
    // temporary for pulling staging images
    $('img').each(function(){
      $(this).attr('src','http://planview.staging.wpengine.com/' + $(this).attr('src'));
    });
  })(jQuery);
  </script>

</body>

</html>
