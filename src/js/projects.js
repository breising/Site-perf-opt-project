window.onload = function() {
    var view = {
        captureOriginal: function() {
            data.originalContent.heroContent = document.getElementById('hero').innerHTML;
            data.originalContent.contentContent = document.getElementById('content').innerHTML;
        },
        renderOriginal: function() {
            document.getElementById('hero').innerHTML = data.originalContent.heroContent;
            document.getElementById('content').innerHTML = data.originalContent.contentContent;
            view.listen();
        },
        renderContent: function(project) {
            var x = project + 'Hero';
            var y = data.projectData[x];
            document.getElementById('hero').innerHTML = y;
            var x = project + 'Content';
            var y = data.projectData[x];
            document.getElementById('content').innerHTML = y;
            view.listen();
        },
        listen: function() {
            $(document).ready(function() {
                $('body').click(function(event) {
                    if (event.target.parentNode.id.slice(0, 7) === 'project') {
                        x = event.target.parentNode.id.slice(0, 8);
                        view.renderContent(x);
                    } else {
                        view.renderOriginal();
                    }
                })
            })
        }
    }
    var octopus = {
        init: function() {
            view.captureOriginal();
            view.listen();
        }
    }
    var data = {
        projectData: {
            project1Hero: '<strong>Portfolio Item 1</strong> 1Some Text here',
            project1Content: '<img class="img-responsive" src="images/spacer-291x165.jpg"><p>1Some text here</p><p>Some text here</p>',
            project2Hero: '<strong>Portfolio Item 2</strong> 2Some Text here',
            project2Content: '<img class="img-responsive" src="images/spacer-291x165.jpg"><p>2Some text here</p><p>Some text here</p>',
            project3Hero: '<strong>Portfolio Item 3</strong> 3Some Text here',
            project3Content: '<img class="img-responsive" src="images/spacer-291x165.jpg"><p>3Some text here</p><p>Some text here</p>',
            project4Hero: '<strong>Portfolio Item 4</strong> 4Some Text here',
            project4Content: '<img class="img-responsive" src="images/spacer-291x165.jpg"><p>4Some text here</p><p>Some text here</p>'
        },
        originalContent: {
            heroContent: '',
            contentContent: ''
        }
    }
    octopus.init();
};