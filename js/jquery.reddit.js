(function($){ 

	/*
	 * Youtube.
	 */

	/*
	 * Soundcloud.
	 */

	/*
	 * Vimeo.
	 */

	window.player= {
		playerState : 0,
		playlist : {},
		ready : function() {
		//Load up all the players.

		},
		
		/*
		 * Fetch tracks from reddit and update the browse area.
		 */
		getTracks : function(subreddit, num, more) {
			var redditURL = "http://www.reddit.com/r/" +subreddit+ "/.json?limit="+num+"&jsonp=?";
			var regex = new RegExp("(youtube.com|soundcloud.com|youtu.be|vimeo.com)");

			// Set loading playlist to True
			
			this.playlist.subreddit = subreddit;
			this.playlist.limit = num;

			$.getJSON(redditURL, function (response) {
				// Set loading playlist to False
				var data = response.data;				
				for ( i=0; i < data.children.length; i++) {
					cdata = data.children[i].data;
					if (regex.test(cdata.domain)) {
						$("#playlist").append(cdata.name+"<hr/>");
						$("#playlist").append(cdata.url+"<hr/>");
						$("#playlist").append(cdata.title+"<hr/>");
						$("#playlist").append(cdata.domain.split(".")[0]+"<hr/>");
					}
				}
			});
		},

		getMoreTracks : function(subreddit) {
			this.getTracks(subreddit, 200, true);
		},

		/*
		 * Generic player methods
		 */

		play : function() {
		},

		pause: function() {

		},

		stop: function() {
		},

		/*
		 * Playlist methods
		 */

		playNext : function () {
		},

		playPrevious : function() {
		}
	}
})(jQuery);
