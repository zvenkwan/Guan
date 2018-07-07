jQuery(document).ready(function($) {
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });
    });

    $.getJSON( "assets/js/profile.json", function( data ) {
    	  var profile = data;
    	  $('#name').html(profile.name);
    	  $('#title').html(profile.title);
    	  $('#email').html(profile.email);
    	  $('#phone').html(profile.phone);
    	  $('#website').html(profile.domain);
    	  $('#linkedin').html(profile.linkedin);
    	  $('#git').html(profile.git);
    	  
    	  $('#email').attr('href', 'mailto: '+ profile.email);
    	  $('#phone').attr('href', 'tel: '+ profile.phone);
    	  $('#linkedin').attr('href', profile.linkedinurl);
    	  $('#git').attr('href', profile.giturl);
    	});
    
    $.getJSON( "assets/js/degree.json", function( data ) {
  	  var dgrs = data.degrees;
  	  var degreesHtml = '';
	    $.each( dgrs, function(key, val) {
	    	degreesHtml += "<div class='item'>";
	    	var dgr = dgrs[key];
	    	degreesHtml += "<h4 class='degree'>" + dgr.degree + "</h4>";
	    	degreesHtml += "<h5 class='meta'>" + dgr.univ + "</h5>";
	    	degreesHtml += "<div class='time'>" + dgr.time + "</div>";
	    	degreesHtml += "</div><!--//item-->";
	    });
	    $(degreesHtml).insertAfter('#education');
  	});

    $.getJSON( "assets/js/experience.json", function( data ) {
    	var experiences = data.experiences;
    	var experiencesHtml = '';
    	$.each( experiences, function(key, val) {
    		var exp = experiences[key];
    		experiencesHtml += "<div class='item'><div class='meta'><div class='upper-row'>";
    		experiencesHtml += "<h3 class='job-title'>" + exp.role + "</h3>";
    		experiencesHtml += "<div class='time'>" + exp.time + "</div>";
    		experiencesHtml += "</div><!--//upper-row-->";
    		experiencesHtml += "<div class='company'>" + exp.company + "</div>";
    		experiencesHtml += "<div class='location'>" + exp.location + "</div>";
    		experiencesHtml += "</div><!--//meta-->";
    		experiencesHtml += "<div class='details'>" + exp.detail + "</div><!--//details-->";
    		experiencesHtml += "</div><!--//item-->";
    	});
    	$(experiencesHtml).insertAfter('#experiences');
    });
    
    $.getJSON( "assets/js/project.json", function( data ) {
    	var projects = data.projects;
    	var projectsHtml = '';
    	$.each( projects, function(key, val) {
    		var proj = projects[key];
    		projectsHtml += "<div class='item'><div class='meta'><div class='upper-row'>";
    		projectsHtml += "<h3 class='job-title'>" + proj.name + "</h3>";
    		projectsHtml += "<div class='time'>" + proj.time + "</div>";
    		projectsHtml += "</div><!--//upper-row-->";
    		projectsHtml += "</div><!--//meta-->";
    		projectsHtml += "<div class='details'>" + proj.detail + "</div><!--//details-->";
    		projectsHtml += "</div><!--//item-->";
    	});
    	$(projectsHtml).insertAfter('#projects');
    });

    $.getJSON( "assets/js/skill.json", function( data ) {
    	var skills = data.skills;
    	var skillsHtml = '';
    	$.each( skills, function(key, val) {
    		var skill = skills[key];
    		skillsHtml += "<div class='item'>";
    		skillsHtml += "<h3 class='level-title'>" + skill.name + "</h3>";
    		skillsHtml += "<div class='level-bar'><div class='level-bar-inner' data-level='" + skill.level + "'></div></div><!--//level-bar--></div><!--//item-->";
    	});
    	$('#skillset').html(skillsHtml);
    });
    
    $.getJSON( "assets/js/summary.json", function( data ) {
    	var summaryHtml = "<p>" + data.summary + "</p>";
    	$('#summary').html(summaryHtml);
    });
});