'use strict';

app.run(function()
{
	// Page Loading Overlay
	public_vars.$pageLoadingOverlay = jQuery('.page-loading-overlay');

	jQuery(window).load(function()
	{
		public_vars.$pageLoadingOverlay.addClass('loaded');
	})
});


app.config(function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, ASSETS){

	$urlRouterProvider.otherwise('/admin-role');

	$stateProvider.
		// Main Layout Structure
		state('app', {
			abstract: true,
			url: '',
			templateUrl: appHelper.templatePath('layout/app-body'),
			controller: function($rootScope){
				$rootScope.isLoginPage        = false;
				$rootScope.isLightLoginPage   = false;
				$rootScope.isLockscreenPage   = false;
				$rootScope.isMainPage         = true;
			}
		}).


		// Update Highlights
		state('app.update-highlights', {
			url: '/update-highlights',
			templateUrl: appHelper.templatePath('update-highlights'),
		}).

		// Layouts
		state('app.layout-and-skins', {
			url: '/layout-and-skins',
			templateUrl: appHelper.templatePath('layout-and-skins'),
		}).



		// Widgets
		state('app.widgets', {
			url: '/widgets',
			templateUrl: appHelper.templatePath('widgets'),
			resolve: {
				deps: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.maps.vectorMaps,
						ASSETS.icons.meteocons
					]);
				}
			}
		}).

		// Administration Module
		state('app.admin-role', {
			url: '/admin-role',
			templateUrl: 'modules/admin/views/role-entity.html',
			controller: 'RoleEntityCtrl',
			controllerAs: 'roleEntityCtrl'
		}).
		// Extra
		state('app.extra-icons-font-awesome', {
			url: '/extra-icons-font-awesome',
			templateUrl: appHelper.templatePath('extra/icons-font-awesome'),
			resolve: {
				fontAwesome: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
						ASSETS.extra.tocify,
					]);
				},
			}
		}).
		state('app.extra-icons-linecons', {
			url: '/extra-icons-linecons',
			templateUrl: appHelper.templatePath('extra/icons-linecons'),
			resolve: {
				linecons: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
						ASSETS.extra.tocify,
					]);
				},
			}
		}).
		state('app.extra-icons-elusive', {
			url: '/extra-icons-elusive',
			templateUrl: appHelper.templatePath('extra/icons-elusive'),
			resolve: {
				elusive: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
						ASSETS.extra.tocify,
						ASSETS.icons.elusive,
					]);
				},
			}
		}).
		state('app.extra-icons-meteocons', {
			url: '/extra-icons-meteocons',
			templateUrl: appHelper.templatePath('extra/icons-meteocons'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
						ASSETS.extra.tocify,
						ASSETS.icons.meteocons,
					]);
				},
			}
		}).
		state('app.extra-profile', {
			url: '/extra-profile',
			templateUrl: appHelper.templatePath('extra/profile'),
			resolve: {
				profile: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.googleMapsLoader,
						ASSETS.icons.elusive,
					]);
				},
			}
		}).
		state('app.extra-timeline', {
			url: '/extra-timeline',
			templateUrl: appHelper.templatePath('extra/timeline'),
			resolve: {
				timeline: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.googleMapsLoader,
					]);
				},
			}
		}).
		state('app.extra-timeline-centered', {
			url: '/extra-timeline-centered',
			templateUrl: appHelper.templatePath('extra/timeline-centered'),
			resolve: {
				elusive: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.googleMapsLoader,
					]);
				},
			}
		}).
		state('app.extra-calendar', {
			url: '/extra-calendar',
			templateUrl: appHelper.templatePath('extra/calendar'),
			resolve: {
				fullCalendar: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
						ASSETS.core.moment,
						ASSETS.extra.fullCalendar,
					]);
				},
			}
		}).
		state('app.extra-gallery', {
			url: '/extra-gallery',
			templateUrl: appHelper.templatePath('extra/gallery'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
					]);
				},
			}
		}).
		state('app.extra-notes', {
			url: '/extra-notes',
			templateUrl: appHelper.templatePath('extra/notes'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.xenonLib.notes,
					]);
				},
			}
		}).
		state('app.extra-image-crop', {
			url: '/extra-image-crop',
			templateUrl: appHelper.templatePath('extra/image-cropper'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.extra.cropper,
					]);
				},
			}
		}).
		state('app.extra-portlets', {
			url: '/extra-portlets',
			templateUrl: appHelper.templatePath('extra/portlets'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
					]);
				},
			}
		}).
		state('app.extra-search', {
			url: '/extra-search',
			templateUrl: appHelper.templatePath('extra/search')
		}).
		state('app.extra-invoice', {
			url: '/extra-invoice',
			templateUrl: appHelper.templatePath('extra/invoice')
		}).
		state('app.extra-page-404', {
			url: '/extra-page-404',
			templateUrl: appHelper.templatePath('extra/page-404')
		}).
		state('app.extra-tocify', {
			url: '/extra-tocify',
			templateUrl: appHelper.templatePath('extra/tocify'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.jQueryUI,
						ASSETS.extra.tocify,
					]);
				},
			}
		}).
		state('app.extra-loading-progress', {
			url: '/extra-loading-progress',
			templateUrl: appHelper.templatePath('extra/loading-progress')
		}).
		state('app.extra-notifications', {
			url: '/extra-notifications',
			templateUrl: appHelper.templatePath('extra/notifications'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.extra.toastr,
					]);
				},
			}
		}).
		state('app.extra-nestable-lists', {
			url: '/extra-nestable-lists',
			templateUrl: appHelper.templatePath('extra/nestable-lists'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.uikit.base,
						ASSETS.uikit.nestable,
					]);
				},
			}
		}).
		state('app.extra-scrollable', {
			url: '/extra-scrollable',
			templateUrl: appHelper.templatePath('extra/scrollable')
		}).
		state('app.extra-blank-page', {
			url: '/extra-blank-page',
			templateUrl: appHelper.templatePath('extra/blank-page')
		}).
		state('app.extra-maps-google', {
			url: '/extra-maps-google',
			templateUrl: appHelper.templatePath('extra/maps-google'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.googleMapsLoader,
					]);
				},
			}
		}).
		state('app.extra-maps-advanced', {
			url: '/extra-maps-advanced',
			templateUrl: appHelper.templatePath('extra/maps-advanced'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.core.googleMapsLoader,
					]);
				},
			}
		}).
		state('app.extra-maps-vector', {
			url: '/extra-maps-vector',
			templateUrl: appHelper.templatePath('extra/maps-vector'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.maps.vectorMaps,
					]);
				},
			}
		}).

		// Members
		state('app.extra-members-list', {
			url: '/extra-members-list',
			templateUrl: appHelper.templatePath('extra/members-list')
		}).
		state('app.extra-members-add', {
			url: '/extra-members-add',
			templateUrl: appHelper.templatePath('extra/members-add'),
			resolve: {
				datepicker: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.forms.datepicker,
						ASSETS.forms.multiSelect,
						ASSETS.forms.select2,
					]);
				},
				//sssss
			}
		}).

		// Charts
		state('app.charts-variants', {
			url: '/charts-variants',
			templateUrl: appHelper.templatePath('charts/bars'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
					]);
				},
			}
		}).
		state('app.charts-range-selector', {
			url: '/charts-range-selector',
			templateUrl: appHelper.templatePath('charts/range'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
					]);
				},
			}
		}).
		state('app.charts-sparklines', {
			url: '/charts-sparklines',
			templateUrl: appHelper.templatePath('charts/sparklines'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
					]);
				},
			}
		}).
		state('app.charts-gauges', {
			url: '/charts-gauges',
			templateUrl: appHelper.templatePath('charts/gauges'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
					]);
				},
			}
		}).
		state('app.charts-bar-gauges', {
			url: '/charts-bar-gauges',
			templateUrl: appHelper.templatePath('charts/bar-gauges'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
					]);
				},
			}
		}).
		state('app.charts-linear-gauges', {
			url: '/charts-linear-gauges',
			templateUrl: appHelper.templatePath('charts/gauges-linear'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
					]);
				},
			}
		}).
		state('app.charts-map-charts', {
			url: '/charts-map-charts',
			templateUrl: appHelper.templatePath('charts/map'),
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxGlobalize,
					]);
				},
				dxCharts: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.charts.dxCharts,
						ASSETS.charts.dxVMWorld,
					]);
				},
			}
		}).

		// Logins and Lockscreen
		state('login', {
			url: '/login',
			templateUrl: appHelper.templatePath('login'),
			controller: 'LoginCtrl',
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.forms.jQueryValidate,
						ASSETS.extra.toastr,
					]);
				},
			}
		}).
		state('login-light', {
			url: '/login-light',
			templateUrl: appHelper.templatePath('login-light'),
			controller: 'LoginLightCtrl',
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.forms.jQueryValidate,
					]);
				},
			}
		}).
		state('lockscreen', {
			url: '/lockscreen',
			templateUrl: appHelper.templatePath('lockscreen'),
			controller: 'LockscreenCtrl',
			resolve: {
				resources: function($ocLazyLoad){
					return $ocLazyLoad.load([
						ASSETS.forms.jQueryValidate,
						ASSETS.extra.toastr,
					]);
				},
			}
		});
});


app.constant('ASSETS', {
	'core': {
		'bootstrap': appHelper.assetPath('js/bootstrap.min.js'), // Some plugins which do not support angular needs this

		'jQueryUI': [
			appHelper.assetPath('js/jquery-ui/jquery-ui.min.js'),
			appHelper.assetPath('js/jquery-ui/jquery-ui.structure.min.css'),
		],

		'moment': appHelper.assetPath('js/moment.min.js'),

		'googleMapsLoader': appHelper.assetPath('app/js/angular-google-maps/load-google-maps.js')
	},

	'charts': {

		'dxGlobalize': appHelper.assetPath('js/devexpress-web-14.1/js/globalize.min.js'),
		'dxCharts': appHelper.assetPath('js/devexpress-web-14.1/js/dx.chartjs.js'),
		'dxVMWorld': appHelper.assetPath('js/devexpress-web-14.1/js/vectormap-data/world.js'),
	},

	'xenonLib': {
		notes: appHelper.assetPath('js/xenon-notes.js'),
	},

	'maps': {

		'vectorMaps': [
			appHelper.assetPath('js/jvectormap/jquery-jvectormap-1.2.2.min.js'),
			appHelper.assetPath('js/jvectormap/regions/jquery-jvectormap-world-mill-en.js'),
			appHelper.assetPath('js/jvectormap/regions/jquery-jvectormap-it-mill-en.js'),
		],
	},

	'icons': {
		'meteocons': appHelper.assetPath('css/fonts/meteocons/css/meteocons.css'),
		'elusive': appHelper.assetPath('css/fonts/elusive/css/elusive.css'),
	},

	'tables': {
		'rwd': appHelper.assetPath('js/rwd-table/js/rwd-table.min.js'),

		'datatables': [
			appHelper.assetPath('js/datatables/dataTables.bootstrap.css'),
			appHelper.assetPath('js/datatables/datatables-angular.js'),
		],

	},

	'forms': {

		'select2': [
			appHelper.assetPath('js/select2/select2.css'),
			appHelper.assetPath('js/select2/select2-bootstrap.css'),

			appHelper.assetPath('js/select2/select2.min.js'),
		],

		'daterangepicker': [
			appHelper.assetPath('js/daterangepicker/daterangepicker-bs3.css'),
			appHelper.assetPath('js/daterangepicker/daterangepicker.js'),
		],

		'colorpicker': appHelper.assetPath('js/colorpicker/bootstrap-colorpicker.min.js'),

		'selectboxit': appHelper.assetPath('js/selectboxit/jquery.selectBoxIt.js'),

		'tagsinput': appHelper.assetPath('js/tagsinput/bootstrap-tagsinput.min.js'),

		'datepicker': appHelper.assetPath('js/datepicker/bootstrap-datepicker.js'),

		'timepicker': appHelper.assetPath('js/timepicker/bootstrap-timepicker.min.js'),

		'inputmask': appHelper.assetPath('js/inputmask/jquery.inputmask.bundle.js'),

		'formWizard': appHelper.assetPath('js/formwizard/jquery.bootstrap.wizard.min.js'),

		'jQueryValidate': appHelper.assetPath('js/jquery-validate/jquery.validate.min.js'),

		'dropzone': [
			appHelper.assetPath('js/dropzone/css/dropzone.css'),
			appHelper.assetPath('js/dropzone/dropzone.min.js'),
		],

		'typeahead': [
			appHelper.assetPath('js/typeahead.bundle.js'),
			appHelper.assetPath('js/handlebars.min.js'),
		],

		'multiSelect': [
			appHelper.assetPath('js/multiselect/css/multi-select.css'),
			appHelper.assetPath('js/multiselect/js/jquery.multi-select.js'),
		],

		'icheck': [
			appHelper.assetPath('js/icheck/skins/all.css'),
			appHelper.assetPath('js/icheck/icheck.min.js'),
		],

		'bootstrapWysihtml5': [
			appHelper.assetPath('js/wysihtml5/src/bootstrap-wysihtml5.css'),
			appHelper.assetPath('js/wysihtml5/wysihtml5-angular.js')
		],
	},

	'uikit': {
		'base': [
			appHelper.assetPath('js/uikit/uikit.css'),
			appHelper.assetPath('js/uikit/css/addons/uikit.almost-flat.addons.min.css'),
			appHelper.assetPath('js/uikit/js/uikit.min.js'),
		],

		'codemirror': [
			appHelper.assetPath('js/uikit/vendor/codemirror/codemirror.js'),
			appHelper.assetPath('js/uikit/vendor/codemirror/codemirror.css'),
		],

		'marked': appHelper.assetPath('js/uikit/vendor/marked.js'),
		'htmleditor': appHelper.assetPath('js/uikit/js/addons/htmleditor.min.js'),
		'nestable': appHelper.assetPath('js/uikit/js/addons/nestable.min.js'),
	},

	'extra': {
		'tocify': appHelper.assetPath('js/tocify/jquery.tocify.min.js'),

		'toastr': appHelper.assetPath('js/toastr/toastr.min.js'),

		'fullCalendar': [
			appHelper.assetPath('js/fullcalendar/fullcalendar.min.css'),
			appHelper.assetPath('js/fullcalendar/fullcalendar.min.js'),
		],

		'cropper': [
			appHelper.assetPath('js/cropper/cropper.min.js'),
			appHelper.assetPath('js/cropper/cropper.min.css'),
		]
	}
});
