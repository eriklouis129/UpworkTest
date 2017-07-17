(function() {
	angular
		.module('app.directive')
		.directive('listItem', function() {
		    return {
		      restrict: 'E',
		      scope: {
		        item: '=',
		        index: '='
		      },
		      template: `
			      <div class="row">
		              <div class="col-md-2 col-sm-3 col-xs-6 media-left">
		              	<span class="index pull-left">{{index + 1}}</span>
		              	<span class="vote pull-left">{{getFormattedVotes(item.data.ups)}}</span>
		                <a href="#" class="thumbnail pull-left">
		                  <img class="img-responsive" ng-src="{{item.data.preview.images[0].source.url || '//b.thumbs.redditmedia.com/fXc6_dupql5D7FMEtVbZMNlP_PDgtWlCcUPcKisn4vE.jpg'}}" alt="...">
		                </a>
		              </div>
		              <div class="col-md-10 col-sm-9 col-xs-6">
		                <h4 class="title">{{item.data.title}}</h4>
		                <p class="sub-title">Submitted {{getTimeOffset(item.data.created)}} ago by {{item.data.author}} to {{item.data.subreddit_name_prefixed}}</p>
		                <p class="comment">{{item.data.num_comments}} comments <a href>share</a></p>
		              </div>
		          </div>
		      `,
		      link: function(scope, iElement, iAttr) {
		        scope.getFormattedVotes = function(vote) {
		        	return vote > 10000? Math.floor(vote / 1000) + '.' + Math.floor((vote % 1000) / 100) + 'K' : vote;
		        }

		        scope.getTimeOffset = function(dateTime) {
		        	return moment.unix(dateTime).fromNow(true);
		        }
		      }
		    }
		});
})()
