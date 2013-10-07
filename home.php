<!doctype html>
<html lang="pt-br" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Thing">
<head>

	<meta charset="utf-8">
    <?php include('template/head.php'); ?>
    <title>WDSIGN » firstClass</title>

</head>
<body class="home">
    <?php include('template/sidebar.php'); ?>
    <div id="main-content">
        <section class="content">
            <h1>firstClass</h1>
            <h2>your first framework developed think in your projects.</h2>
            <p>Whitout prefix and flexible to help all of us with our projects.</p>
            
                <article class="box box-presentation box-about">
                    <header class="box-title">
                        <p class="el-title"><strong>About</strong></p>
                    </header>
                    <div class="box-content">
                        <p>A clean framework powered by <a href="http://lesscss.org/" title="LESS CSS">LESS</a> based on <a href="https://github.com/twigkit/semantic.gs/" title="Semantic.gs">Semantic.gs</a>, HTML5, CSS3 and jQuery <a href="http://jquerypicture.com/" title="Picture Responsive">Picture Responsive</a>.</p>
                        <p>This is a project to community <a href="https://plus.google.com/u/0/communities/104431911254900556469" title="WDSIGN">WDSIGN</a> and are created to help us when wee ned create a fast and clean sites.</p>
                    </div>
                </article>
                <article class="box box-presentation box-news">
                    <header class="box-title">
                        <p class="el-title"><strong>News</strong></p>
                    </header>
                    <div class="box-content">
                        <p>After a long search to find collections to add new feartures for help you:</p>
                        <ul>
                            <li>OwlCarousel - create simple and clean carousel's and responsive sliders.</li>
                            <li>HeroTabs - Tabs with clean way with multiple alignment's.</li>
                            <li>Collapse - Collapse is cool isn't?.</li>
                            <li>SuperBox - Customize your modal like you wanna.</li>
                            <li>Tooltipster's - Increase your forms, help you user.</li>
                        </ul>
                    </div>
                </article>

                <article class="box box-presentation box-help">
                    <header class="box-title">
                        <p class="el-title"><strong>Help us</strong></p>
                    </header>
                    <div class="box-content">
                        <p>Feel like you've got an idea on how to optimize the code and want to share it? We are totally open to new changes, however this is one of the first publically available plugins that I am offering and therefore do not have an exact process on pull requests. Feel free to fork the project all you want, but be aware any pull requests that are made may take a while to get implemented (if at all).</p>
                    </div>
                </article>
                <article class="box box-presentation box-cases">
                    <header class="box-title">
                        <p class="el-title"><strong>Cases</strong></p>
                    </header>
                    <div class="box-content">
                        <p>Click to saw the source and you can see our codification style used:</p>
                        <ul>
                            <li class="secondclass">WDSIGN - <a href="view-source:http://wdsign.com.br">http://wdsign.com.br</a></li>
                            <!--li class="secondclass">Equipe SuperAção - <a href="view-source:http://equipesuperacao.com.br/">http://equipesuperacao.com.br</a></li>
                            <li class="secondclass">Número 1 Suplementos - <a href="view-source:http://numero1suplementos.com.br/">http://numero1suplementos.com.br</a></li>
                            <li class="secondclass">R2BZ - <a href="view-source:http://r2bz.com.br/">http://r2bz.com.br</a></li>
                            <li class="firstclass">RickBenetti - <a href="view-source:http://rickbenetti.com.br/">http://rickbenetti.com.br</a></li-->
                        </ul>
                    </div>
                </article>
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="normalize">Normalize</h3>
            <h4>Reduces inconsistencies in the default styling of HTML elements across all browsers.</h4>
            <p>This component is based on the famous <a href="http://nicolasgallagher.com/about-normalize-css/">Normalize.css</a>, a project by <a href="http://nicolasgallagher.com/">Nicolas Gallagher</a>. It takes a different approach to the traditional CSS reset and avoids redundant code by only targeting the styles that need normalizing. The Normalize component is always loaded first, so you don't have to worry about browser inconsistencies in your projects.</p>
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="mixins">Mixins</h3>
            <h4>Add powerfull to your project</h4>
            <p>An mix with some solutions to help you.</p>
            <ul class="list-mixins">
                <li><strong>.clearfix</strong><span>Just use &:extend(.clearfix all); to add your object to <a href="http://nicolasgallagher.com/micro-clearfix-hack/">clearfix</a>. This clear fix it's a micro clearfix project by Nicolas Gallager.</span></li>
                <li><strong>.box-shadow</strong><span>It's simple add box shadow to your project, just set your values: .box-shadow(5px 5px 0px 0px rgba(0, 0, 0, 0.2)); inside your css object.</span></li>
                <li><strong>.opacity</strong><span>If you need add opacity just set: .opacity(0.5);</span></li>
                <li><strong>.placeholder</strong><span>if you need add a color only for inputs placeholder set: .placeholder(blue);</span></li>
                <li><strong>.resizable</strong><span>Add resizable option to your inputs.</span></li>
                <li><strong>.hyphens</strong><span>Some trick to use in future to your content.</span></li>
                <li><strong>.gradient-horizontal-transparent</strong><span>Just change a color base to take another background gradient horizontal style.</span></li>
                <li><strong>.gradient-vertical-transparent</strong><span>Just change a color base to take another background gradient vertical style.</span></li>
                <li><strong>.gradient-horizontal</strong><span>Choose 2 colors setting this way: .gradient-horizontal(blue, pink);</span></li>
                <li><strong>.gradient-vertical-transparent</strong><span>Choose 2 colors setting this way: .gradient-vertical-transparent(blue, pink);</span></li>
                <li><strong>.gradient-horizontal-three-colors</strong><span>Choose 3 colors setting this way: .gradient-horizontal-three-colors(blue, pink, yellow);</span></li>
                <li><strong>.gradient-vertical-three-colors</strong><span>Choose 3 colors setting this way: .gradient-vertical-three-colors(blue, pink, yellow);</span></li>
                <li><strong>.gradient-radial</strong><span>Choose 2 colors setting this way: .gradient-radial(blue, pink);</span></li>
                <li><strong>.gradient-striped</strong><span>Choose 1 color and degree setting this way: .gradient-striped(blue, 30deg);</span></li>
                <li><strong>.bg-transparent</strong><span>Add fade opacity to one color: .bg-transparent(blue, 10%);</span></li>
                <li><strong>.el-left</strong><span>Float left element</span></li>
                <li><strong>.el-right</strong><span>Float right element</span></li>
                <li><strong>.el-center</strong><span>Positioning centered element</span></li>
            </ul>
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="mixins">Variables</h3>
            <h4>Default variables to increase project power</h4>
            <p>Colors, sizes, fonts family and body set.</p>
        </section>
        <hr class="dash-line"/>
        <section class="content custom">
            <h3 id="mixins">Custom</h3>
            <h4>Your customization</h4>
            <p>All your customizations you put inside custom.less this less file will be compiled at bottom line in less files when you generate firstClass CSS.</p>
        </section>
        
        <section class="content">
            <h3 id="type">Typografy</h3>
            <h4>your font size and style</h4>
            <p>you can use html tag and class .header-level(x) created to help you:</p>
            <p class="header-level1">Header 1</p>
            <p class="header-level2">Header 2</p>
            <p class="header-level3">Header 3</p>
            <p class="header-level4">Header 4</p>
            <p class="header-level5">Header 5</p>
            <p class="header-level6">Header 6</p>
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="forms">Forms</h3>
            <h4>Just help you create a better forms</h4>
            
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="tables">Tables</h3>
            <h4>Just help you create a better tables and more stylized</h4>
            
        </section>
        <hr class="dash-line"/>
        <section class="content boxes">
            <h3 id="box">Box</h3>
            <h4>All our layout's is based in box, but this box's do more significancy to your content</h4>
            
            <article class="box box-flat box-modelo columns quarter-column">
                <header class="box-title">
                    <h4>Title box</h4>
                </header>
                <article class="box-content">
                    <p>Box content you can put here, saw the box format:</p>
                    <textarea name="code" id="box-content-example" cols="30" rows="10" class="code">
                        <article class="box box-flat box-modelo columns quarter-column">
                            <header class="box-title">
                                <h4>Title box</h4>
                            </header>
                            <article class="box-content">
                                <p>Box content you can put here.</p>                                
                            </article>
                        </article>    
                    </textarea>
                </article>
            </article>            
        </section>
        <hr class="dash-line"/>
        <section class="content grid">
            <h3 id="grid">Grid</h3>
            <h4>Only options you needed, LESS CSS provide to us a more flexible columns style:</h4>
                        
                <article class="columns quarter-column grid-modelo">Quarter column</article>
                <article class="columns quarter-column grid-modelo">Quarter column</article>
                <article class="columns quarter-column grid-modelo">Quarter column</article>
                <article class="columns quarter-column last grid-modelo">Quarter column</article>
        
                <hr class="dash-line"/>
                
                <article class="columns third-column grid-modelo">Third column</article>
                <article class="columns third-column grid-modelo">Third column</article>
                <article class="columns third-column last grid-modelo">Third column</article>
            
                <hr class="dash-line"/>
                
                <article class="columns half-column grid-modelo">Half column</article>
                <article class="columns half-column last grid-modelo">Half column</article>
        </section>
        
        <hr class="dash-line"/>
        <section class="content boxes">
            <h3 id="box">Colors</h3>
            <h4>With variables you have many options</h4>
            
            <div class="color-swatches">
                <div class="color-swatch black-10">@black-10: <span>darken(@white, 10%)</span></div>
                <div class="color-swatch black-20">@black-20: <span>darken(@white, 20%)</span></div>
                <div class="color-swatch black-30">@black-30: <span>darken(@white, 30%)</span></div>
                <div class="color-swatch black-40">@black-40: <span>darken(@white, 40%)</span></div>
                <div class="color-swatch black-50">@black-50: <span>darken(@white, 50%)</span></div>
                <div class="color-swatch black-60">@black-60: <span>darken(@white, 60%)</span></div>
                <div class="color-swatch black-70">@black-70: <span>darken(@white, 70%)</span></div>
                <div class="color-swatch black-80">@black-80: <span>darken(@white, 80%)</span></div>
                <div class="color-swatch black-90">@black-90: <span>darken(@white, 90%)</span></div>
            </div>

            <div class="color-swatches">
                <div class="color-swatch default-primary">@default-primary: <span>#428bca</span></div>
                <div class="color-swatch default-success">@default-success: <span>#5cb85c</span></div>
                <div class="color-swatch default-warning">@default-warning: <span>#f0ad4e</span></div>
                <div class="color-swatch default-danger">@default-danger: <span>#d9534f</span></div>
                <div class="color-swatch default-info">@default-info: <span>#5bc0de</span></div>
            </div>

            <div class="color-swatches">
                <div class="color-swatch brand-first">@brand-first: <span>#008afd</span></div>
                <div class="color-swatch brand-second">@brand-second: <span>#92c847</span></div>
                <div class="color-swatch brand-third">@brand-third: <span>#ffa800</span></div>
                <div class="color-swatch brand-fourth">@brand-fourth: <span>#4a4a4a</span></div>
            </div>

            <div class="color-swatches">
                <div class="color-swatch notification-primary">@notification-primary: <span>#ffed8c</span></div>
                <div class="color-swatch notification-success">@notification-success: <span>#c9e8c9</span></div>
                <div class="color-swatch notification-warning">@notification-warning: <span>#f8c3a8</span></div>
                <div class="color-swatch notification-danger">@notification-danger: <span>#d9534f</span></div>
                <div class="color-swatch notification-info">@notification-info: <span>#bde6f2</span></div>
            </div>
                
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="buttons">Buttons</h3>
            <p>Buttons options help to create a beautifull sites:</p>
            <div class="buttons-block">
                <p>Rounded Buttons</p>
                <a href="#" class="btn btn-rounded btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-rounded btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-rounded btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-rounded btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-rounded btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Metro Buttons</p>
                <a href="#" class="btn btn-metro btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-metro btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-metro btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-metro btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-metro btn-info" aria-label="Info button">Info</a>
            </secion>

            <secion class="buttons-block">
                <p>Flat Buttons</p>
                <a href="#" class="btn btn-flat btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-flat btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-flat btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-flat btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-flat btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Wide Buttons</p>
                <a href="#" class="btn btn-wide btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-wide btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-wide btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-wide btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-wide btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Large Buttons</p>
                <a href="#" class="btn btn-large btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-large btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-large btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-large btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-large btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Medium Buttons</p>
                <a href="#" class="btn btn-medium btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-medium btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-medium btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-medium btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-medium btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Small Buttons</p>
                <a href="#" class="btn btn-small btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-small btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-small btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-small btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-small btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Horizontal Gradient and Rounded Buttons</p>
                <a href="#" class="btn btn-rounded btn-horz-gradient btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-rounded btn-horz-gradient btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-rounded btn-horz-gradient btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-rounded btn-horz-gradient btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-rounded btn-horz-gradient btn-info" aria-label="Info button">Info</a>
            </div>

            <div class="buttons-block">
                <p>Vertical Gradient and Rounded Buttons</p>
                <a href="#" class="btn btn-rounded btn-vert-gradient btn-primary" aria-label="Primary button">Primary</a>
                <a href="#" class="btn btn-rounded btn-vert-gradient btn-success" aria-label="Success button">Success</a>
                <a href="#" class="btn btn-rounded btn-vert-gradient btn-error" aria-label="Error button">Error</a>
                <a href="#" class="btn btn-rounded btn-vert-gradient btn-danger" aria-label="Danger button">Danger</a>
                <a href="#" class="btn btn-rounded btn-vert-gradient btn-info" aria-label="Info button">Info</a>
            </div>
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="webicons">WebIcons</h3>
            <p>Social network icons is better because load it's then fast:</p>
            <ul class="icons-list">
                <li><a class="webicon f500px small" href="#">500px</a></li>
                <li><a class="webicon aboutme small" href="#">About.me</a></li>
                <li><a class="webicon adn small" href="#">ADN (App.net)</a></li>
                <li><a class="webicon android small" href="#">Android</a></li>
                <li><a class="webicon apple small" href="#">Apple</a></li>
                <li><a class="webicon behance small" href="#">Behance</a></li>
                <li><a class="webicon bitbucket small" href="#">Bitbucket</a></li>
                <li><a class="webicon blogger small" href="#">Blogger</a></li>
                <li><a class="webicon branch small" href="#">Branch</a></li>
                <li><a class="webicon coderwall small" href="#">Coderwall</a></li>
                <li><a class="webicon creativecloud small" href="#">Creative Cloud</a></li>
                <li><a class="webicon dribbble small" href="#">Dribbble</a></li>
                <li><a class="webicon dropbox small" href="#">Dropbox</a></li>
                <li><a class="webicon evernote small" href="#">Evernote</a></li>
                <li><a class="webicon fairheadcreative small" href="#">Fairhead Creative</a></li>
                <li><a class="webicon facebook small" href="#">Facebook</a></li>
                <li><a class="webicon flickr small" href="#">Flickr</a></li>
                <li><a class="webicon foursquare small" href="#">Foursquare</a></li>
                <li><a class="webicon git small" href="#">Git</a></li>
                <li><a class="webicon github small" href="#">Github</a></li>
                <li><a class="webicon goodreads small" href="#">Goodreads</a></li>
                <li><a class="webicon google small" href="#">Google</a></li>
                <li><a class="webicon googleplay small" href="#">Google Play</a></li>
                <li><a class="webicon googleplus small" href="#">Google+</a></li>
                <li><a class="webicon hangouts small" href="#">Hangouts</a></li>
                <li><a class="webicon html5 small" href="#">HTML5</a></li>
                <li><a class="webicon icloud small" href="#">iCloud</a></li>
                <li><a class="webicon indiegogo small" href="#">Indiegogo</a></li>
                <li><a class="webicon instagram small" href="#">Instagram</a></li>
                <li><a class="webicon instapaper small" href="#">Instapaper</a></li>
                <li><a class="webicon kickstarter small" href="#">Kickstarter</a></li>
                <li><a class="webicon klout small" href="#">Klout</a></li>
                <li><a class="webicon lastfm small" href="#">Last.fm</a></li>
                <li><a class="webicon linkedin small" href="#">LinkedIn</a></li>
                <li><a class="webicon mail small" href="#">Mail</a></li>
                <li><a class="webicon medium small" href="#">Medium</a></li>
                <li><a class="webicon mixi small" href="#">Mixi</a></li>
                <li><a class="webicon mercurial small" href="#">Mercurial</a></li>
                <li><a class="webicon msn small" href="#">MSN</a></li>
                <li><a class="webicon orkut small" href="#">Orkut</a></li>
                <li><a class="webicon openid small" href="#">OpenID</a></li>
                <li><a class="webicon picasa small" href="#">Picasa</a></li>
                <li><a class="webicon pinterest small" href="#">Pinterest</a></li>
                <li><a class="webicon pocketapp small" href="#">PocketApp</a></li>
                <li><a class="webicon potluck small" href="#">Potluck</a></li>
                <li><a class="webicon quora small" href="#">Quora</a></li>
                <li><a class="webicon rdio small" href="#">Rdio</a></li>
                <li><a class="webicon reddit small" href="#">Reddit</a></li>
                <li><a class="webicon renren small" href="#">Renren</a></li>
                <li><a class="webicon rss small" href="#">RSS</a></li>
                <li><a class="webicon skitch small" href="#">Skitch</a></li>
                <li><a class="webicon skype small" href="#">Skype</a></li>
                <li><a class="webicon soundcloud small" href="#">SoundCloud</a></li>
                <li><a class="webicon spotify small" href="#">Spotify</a></li>
                <li><a class="webicon stackoverflow small" href="#">Stack Overflow</a></li>
                <li><a class="webicon stumbleupon small" href="#">StumbleUpon!</a></li>
                <li><a class="webicon svn small" href="#">SVN</a></li>
                <li><a class="webicon tent small" href="#">Tent</a></li>
                <li><a class="webicon tripadvisor small" href="#">Trip Advisor</a></li>
                <li><a class="webicon tumblr small" href="#">Tumblr</a></li>
                <li><a class="webicon twitter small" href="#">Twitter</a></li>
                <li><a class="webicon vimeo small" href="#">Vimeo</a></li>
                <li><a class="webicon windows small" href="#">Windows</a></li>
                <li><a class="webicon wordpress small" href="#">Wordpress</a></li>
                <li><a class="webicon xing small" href="#">Xing</a></li>
                <li><a class="webicon weibo small" href="#">Sina Weibo</a></li>
                <li><a class="webicon yahoo small" href="#">Yahoo!</a></li>
                <li><a class="webicon yelp small" href="#">Yelp!</a></li>
                <li><a class="webicon youtube small" href="#">YouTube</a></li>
                <li><a class="webicon youversion small" href="#">YouVersion</a></li>
                <li><a class="webicon zerply small" href="#">Zerply</a></li>
            </ul>
            
            <ul class="icons-list">
                <li><a class="webicon f500px" href="#">500px</a></li>
                <li><a class="webicon aboutme" href="#">About.me</a></li>
                <li><a class="webicon adn" href="#">ADN (App.net)</a></li>
                <li><a class="webicon android" href="#">Android</a></li>
                <li><a class="webicon apple" href="#">Apple</a></li>
                <li><a class="webicon behance" href="#">Behance</a></li>
                <li><a class="webicon bitbucket" href="#">Bitbucket</a></li>
                <li><a class="webicon coderwall" href="#">Coderwall</a></li>
                <li><a class="webicon blogger" href="#">Blogger</a></li>
                <li><a class="webicon branch" href="#">Branch</a></li>
                <li><a class="webicon creativecloud" href="#">Creative Cloud</a></li>
                <li><a class="webicon dribbble" href="#">Dribbble</a></li>
                <li><a class="webicon dropbox" href="#">Dropbox</a></li>
                <li><a class="webicon evernote" href="#">Evernote</a></li>
                <li><a class="webicon fairheadcreative" href="#">Fairhead Creative</a></li>
                <li><a class="webicon facebook" href="#">Facebook</a></li>
                <li><a class="webicon flickr" href="#">Flickr</a></li>
                <li><a class="webicon foursquare" href="#">Foursquare</a></li>
                <li><a class="webicon git" href="#">Git</a></li>
                <li><a class="webicon github" href="#">Github</a></li>
                <li><a class="webicon goodreads" href="#">Goodreads</a></li>
                <li><a class="webicon google" href="#">Google</a></li>
                <li><a class="webicon googleplay" href="#">Google Play</a></li>
                <li><a class="webicon googleplus" href="#">Google+</a></li>
                <li><a class="webicon hangouts" href="#">Hangouts</a></li>
                <li><a class="webicon html5" href="#">HTML5</a></li>
                <li><a class="webicon icloud" href="#">iCloud</a></li>
                <li><a class="webicon indiegogo" href="#">Indiegogo</a></li>
                <li><a class="webicon instagram" href="#">Instagram</a></li>
                <li><a class="webicon instapaper" href="#">Instapaper</a></li>
                <li><a class="webicon kickstarter" href="#">Kickstarter</a></li>
                <li><a class="webicon klout" href="#">Klout</a></li>
                <li><a class="webicon lastfm" href="#">Last.fm</a></li>
                <li><a class="webicon linkedin" href="#">LinkedIn</a></li>
                <li><a class="webicon mail" href="#">Mail</a></li>
                <li><a class="webicon medium" href="#">Medium</a></li>
                <li><a class="webicon mixi" href="#">Mixi</a></li>
                <li><a class="webicon mercurial" href="#">Mercurial</a></li>
                <li><a class="webicon msn" href="#">MSN</a></li>
                <li><a class="webicon orkut" href="#">Orkut</a></li>
                <li><a class="webicon openid" href="#">OpenID</a></li>
                <li><a class="webicon picasa" href="#">Picasa</a></li>
                <li><a class="webicon pinterest" href="#">Pinterest</a></li>
                <li><a class="webicon pocketapp" href="#">PocketApp</a></li>
                <li><a class="webicon potluck" href="#">Potluck</a></li>
                <li><a class="webicon quora" href="#">Quora</a></li>
                <li><a class="webicon rdio" href="#">Rdio</a></li>
                <li><a class="webicon reddit" href="#">Reddit</a></li>
                <li><a class="webicon renren" href="#">Renren</a></li>
                <li><a class="webicon rss" href="#">RSS</a></li>
                <li><a class="webicon skitch" href="#">Skitch</a></li>
                <li><a class="webicon skype" href="#">Skype</a></li>
                <li><a class="webicon soundcloud" href="#">SoundCloud</a></li>
                <li><a class="webicon spotify" href="#">Spotify</a></li>
                <li><a class="webicon stackoverflow" href="#">Stack Overflow</a></li>
                <li><a class="webicon stumbleupon" href="#">StumbleUpon!</a></li>
                <li><a class="webicon svn" href="#">SVN</a></li>
                <li><a class="webicon tent" href="#">Tent</a></li>
                <li><a class="webicon tripadvisor" href="#">Trip Advisor</a></li>
                <li><a class="webicon tumblr" href="#">Tumblr</a></li>
                <li><a class="webicon twitter" href="#">Twitter</a></li>
                <li><a class="webicon vimeo" href="#">Vimeo</a></li>
                <li><a class="webicon windows" href="#">Windows</a></li>
                <li><a class="webicon wordpress" href="#">Wordpress</a></li>
                <li><a class="webicon xing" href="#">Xing</a></li>
                <li><a class="webicon weibo" href="#">Sina Weibo</a></li>
                <li><a class="webicon yahoo" href="#">Yahoo!</a></li>
                <li><a class="webicon yelp" href="#">Yelp!</a></li>
                <li><a class="webicon youtube" href="#">YouTube</a></li>
                <li><a class="webicon youversion" href="#">YouVersion</a></li>
                <li><a class="webicon zerply" href="#">Zerply</a></li>
            </ul>
            
            <ul class="icons-list">
                <li><a class="webicon f500px large" href="#">500px</a></li>
                <li><a class="webicon aboutme large" href="#">About.me</a></li>
                <li><a class="webicon adn large" href="#">ADN (App.net)</a></li>
                <li><a class="webicon android large" href="#">Android</a></li>
                <li><a class="webicon apple large" href="#">Apple</a></li>
                <li><a class="webicon behance large" href="#">Behance</a></li>
                <li><a class="webicon bitbucket large" href="#">Bitbucket</a></li>
                <li><a class="webicon coderwall large" href="#">Coderwall</a></li>
                <li><a class="webicon blogger large" href="#">Blogger</a></li>
                <li><a class="webicon branch large" href="#">Branch</a></li>
                <li><a class="webicon creativecloud large" href="#">Creative Cloud</a></li>
                <li><a class="webicon dribbble large" href="#">Dribbble</a></li>
                <li><a class="webicon dropbox large" href="#">Dropbox</a></li>
                <li><a class="webicon evernote large" href="#">Evernote</a></li>
                <li><a class="webicon fairheadcreative large" href="#">Fairhead Creative</a></li>
                <li><a class="webicon facebook large" href="#">Facebook</a></li>
                <li><a class="webicon flickr large" href="#">Flickr</a></li>
                <li><a class="webicon foursquare large" href="#">Foursquare</a></li>
                <li><a class="webicon git large" href="#">Git</a></li>
                <li><a class="webicon github large" href="#">Github</a></li>
                <li><a class="webicon goodreads large" href="#">Goodreads</a></li>
                <li><a class="webicon google large" href="#">Google</a></li>
                <li><a class="webicon googleplay large" href="#">Google Play</a></li>
                <li><a class="webicon googleplus large" href="#">Google+</a></li>
                <li><a class="webicon hangouts large" href="#">Hangouts</a></li>
                <li><a class="webicon html5 large" href="#">HTML5</a></li>
                <li><a class="webicon icloud large" href="#">iCloud</a></li>
                <li><a class="webicon indiegogo large" href="#">Indiegogo</a></li>
                <li><a class="webicon instagram large" href="#">Instagram</a></li>
                <li><a class="webicon instapaper large" href="#">Instapaper</a></li>
                <li><a class="webicon kickstarter large" href="#">Kickstarter</a></li>
                <li><a class="webicon klout large" href="#">Klout</a></li>
                <li><a class="webicon lastfm large" href="#">Last.fm</a></li>
                <li><a class="webicon linkedin large" href="#">LinkedIn</a></li>
                <li><a class="webicon mail large" href="#">Mail</a></li>
                <li><a class="webicon medium large" href="#">Medium</a></li>
                <li><a class="webicon mixi large" href="#">Mixi</a></li>
                <li><a class="webicon mercurial large" href="#">Mercurial</a></li>
                <li><a class="webicon msn large" href="#">MSN</a></li>
                <li><a class="webicon orkut large" href="#">Orkut</a></li>
                <li><a class="webicon openid large" href="#">OpenID</a></li>
                <li><a class="webicon picasa large" href="#">Picasa</a></li>
                <li><a class="webicon pinterest large" href="#">Pinterest</a></li>
                <li><a class="webicon pocketapp large" href="#">PocketApp</a></li>
                <li><a class="webicon potluck large" href="#">Potluck</a></li>
                <li><a class="webicon quora large" href="#">Quora</a></li>
                <li><a class="webicon rdio large" href="#">Rdio</a></li>
                <li><a class="webicon reddit large" href="#">Reddit</a></li>
                <li><a class="webicon renren large" href="#">Renren</a></li>
                <li><a class="webicon rss large" href="#">RSS</a></li>
                <li><a class="webicon skitch large" href="#">Skitch</a></li>
                <li><a class="webicon skype large" href="#">Skype</a></li>
                <li><a class="webicon soundcloud large" href="#">SoundCloud</a></li>
                <li><a class="webicon spotify large" href="#">Spotify</a></li>
                <li><a class="webicon stackoverflow large" href="#">Stack Overflow</a></li>
                <li><a class="webicon stumbleupon large" href="#">StumbleUpon!</a></li>
                <li><a class="webicon svn large" href="#">SVN</a></li>
                <li><a class="webicon tent large" href="#">Tent</a></li>
                <li><a class="webicon tripadvisor large" href="#">Trip Advisor</a></li>
                <li><a class="webicon tumblr large" href="#">Tumblr</a></li>
                <li><a class="webicon twitter large" href="#">Twitter</a></li>
                <li><a class="webicon vimeo large" href="#">Vimeo</a></li>
                <li><a class="webicon windows large" href="#">Windows</a></li>
                <li><a class="webicon wordpress large" href="#">Wordpress</a></li>
                <li><a class="webicon xing large" href="#">Xing</a></li>
                <li><a class="webicon weibo large" href="#">Sina Weibo</a></li>
                <li><a class="webicon yahoo large" href="#">Yahoo!</a></li>
                <li><a class="webicon yelp large" href="#">Yelp!</a></li>
                <li><a class="webicon youtube large" href="#">YouTube</a></li>
                <li><a class="webicon youversion large" href="#">YouVersion</a></li>
                <li><a class="webicon zerply large" href="#">Zerply</a></li>
            </ul>
            
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="labels">Labels</h3>
            <p>Lorem ipsum dolor sit amet, <span class="label label-clean label-info">consectetur</span> adipiscing elit. Curabitur bibendum leo ut nibh placerat interdum. Sed scelerisque nisi non dolor cursus, eget cursus mauris varius. Suspendisse pharetra <span class="label label-clean label-success">lorem aliquet placerat</span> ornare. Sed a dignissim mauris. Aenean non magna <em class="label label-clean label-warning">lobortis, consectetur enim quis, aliquam sem</em>. Etiam suscipit magna augue, sed volutpat orci semper id. <strong class="label label-clean label-danger">Etiam feugiat lorem</strong> ut vestibulum interdum. In hac habitasse platea dictumst. Phasellus id ultricies nibh. Nulla convallis metus a tempus pulvinar. Donec augue tortor, ultrices eu varius id, hendrerit quis enim. Maecenas pretium purus ut convallis hendrerit.</p>

                    <p>Pellentesque id risus rutrum erat vestibulum tempor eu at metus. <span class="label label-darken label-danger">Pellentesque</span> habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque et mattis eros. Vivamus porttitor eu urna ut fringilla. Vestibulum vestibulum aliquam purus vitae luctus. <span class="label label-darken label-warning">Vivamus non dolor hendrerit</span>, aliquam erat a, rhoncus odio. Sed eu ligula a odio luctus pulvinar. <strong class="label label-darken label-info">Fusce faucibus dui vitae neque</strong> venenatis, sit amet sagittis risus feugiat. In hac habitasse platea dictumst. Duis lacinia, enim et vehicula rutrum, orci eros dignissim felis, non sollicitudin neque dolor et sapien. In imperdiet elit fermentum sodales dapibus. <em class="label label-darken label-success">Phasellus vel dolor congue, aliquam mauris a</em>, hendrerit felis.</p>
                    
                    <p class="label label-darken label-info">.label.label-darken.label-info</p>
                    <p class="label label-darken label-warning">.label.label-darken.label-warning</p>
                    <p class="label label-darken label-danger">.label.label-darken.label-danger</p>
                    <p class="label label-darken label-success">.label.label-darken.label-success</p>
                    
                    <p class="label label-clean label-info">.label.label-clean.label-info</p>
                    <p class="label label-clean label-warning">.label.label-clean.label-warning</p>
                    <p class="label label-clean label-danger">.label.label-clean.label-danger</p>
                    <p class="label label-clean label-success">.label.label-clean.label-success</p>
        </section>
        <hr class="dash-line"/>
        <section class="content">
            <h3 id="navigation">Navigation</h3>
            <p>Why site navigations can be simple how we imagine? this new markup we bring to help you:</p>
            
            <nav role="navigation">
                <ul class="nav-main nav-horizontal nav-flat nav-bg-third">
                    <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                    <li class="nav-item nav-dropdown nav-item-active"><a href="#" class="nav-link">Test</a>
                        <ul class="nav-submenu">
                            <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                            <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                            <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                            <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                            <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                </ul>
            </nav>
            <textarea name="code-nav-example" id="box-content-nav-horizontal" cols="30" rows="10" class="code code-nav-example">
                <nav role="navigation">
                    <ul class="nav-main nav-horizontal">
                        <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                        <li class="nav-item nav-dropdown nav-item-active"><a href="#" class="nav-link">Test</a>
                            <ul class="nav-submenu">
                                <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                                <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                                <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                                <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                                <li class="nav-sub-item"><a href="#" class="nav-sub-link">Sub Test</a></li>
                            </ul>
                        </li>
                        <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Test</a></li>
                    </ul>
                </nav>
            </textarea>
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="images">Images</h3>
                <figure class="responsive" title="A Half Brained Idea">
                    <img src="http://placehold.it/1008x360">
                    <figcaption>Check out the responsive images</figcaption>
                </figure>

                    <div class="container-example row">
                        <figure class="fig-left">
                            <img src="http://placehold.it/400x260">
                            <figcaption class="txt-center">Texto Central</figcaption>
                        </figure>
                        <p>Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so - if you want to sing this way, think of what you'd like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. La la la la la, la la la la la la la, la la la la la la la, la la la la la la la la la la la la la, so - Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name.</p>

                        <p>Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold.</p>
                    </div>

                    <div class="container-example row">
                        <figure class="fig-right">
                            <img src="http://placehold.it/400x260">
                            <figcaption class="txt-left">Texto à Esquerda</figcaption>
                        </figure>
                        <p>Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so - if you want to sing this way, think of what you'd like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. La la la la la, la la la la la la la, la la la la la la la, la la la la la la la la la la la la la, so - Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name.</p>

                        <p>Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold.</p>
                    </div>

                    <div class="container-example row">
                        <p>Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name. Birds taught me to sing, when they took me to their king, first I had to fly, in the sky so high so high, so high so high so high, so - if you want to sing this way, think of what you'd like to say, add a tune and you will see, just how easy it can be. Treacle pudding, fish and chips, fizzy drinks and liquorice, flowers, rivers, sand and sea, snowflakes and the stars are free. La la la la la, la la la la la la la, la la la la la la la, la la la la la la la la la la la la la, so - Barnaby The Bear's my name, never call me Jack or James, I will sing my way to fame, Barnaby the Bear's my name.</p>

                        <figure class="fig-center">
                            <img src="http://placehold.it/400x260">
                            <figcaption class="txt-right">Texto à Direita</figcaption>
                        </figure>

                        <p>Children of the sun, see your time has just begun, searching for your ways, through adventures every day. Every day and night, with the condor in flight, with all your friends in tow, you search for the Cities of Gold. Ah-ah-ah-ah-ah... wishing for The Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold. Do-do-do-do ah-ah-ah, do-do-do-do, Cities of Gold. Do-do-do-do, Cities of Gold. Ah-ah-ah-ah-ah... some day we will find The Cities of Gold.</p>
                    </div>
        </section>
        <hr class="dash-line" />
        <section class="content gallery">
            <h3 id="gallery">Gallery</h3>
            <ul class="gallery count4">
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/5413945027/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9441781825/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9445855848/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a></figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9714577671/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9719271192/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9445913390/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9443121795/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/8620877994/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/8619775233/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/8619765071/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/8619761297/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/8619747899/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
                <li class="gallery-item">
                    <figure>
                        <a href="http://www.flickr.com/photos/christyam/9271493684/" class="gallery-link" title="Image Gallery" rel="superbox[gallery][galeria_exemplo]">
                            <img src="media/thumb-220.png" alt="" class="gallery-img">
                            <figcaption>Image Title</figcaption>
                        </a>
                    </figure>
                </li>
            </ul>
        </section>
        
        <section class="content">
            <h3 id="notification">Notification</h3>
            <div class="notification primary">
                <p>This a simple notification to help your client comunicate their users about something new or remember something.</p>
            </div>
            
            <div class="notification warning">
                <p>Errors or 404 errors will be comunicated thsi way.</p>
            </div>
            
            <div class="notification danger">
                <p>With this alert you can advise your client they need do somathing to continue this way.</p>
            </div>
            
            <div class="notification info">
                <p>Long informations whit paragraphs have a new style.</p>
                <p>Just create a better notification bars with a complete data.</p>
            </div>
            
            <div class="notification success">
                <p>Put a blink messages and give a new style to your notifications</p>
                <p class="txt-blue">Other font colors</p>
                <p class="txt-monospace">Other font family</p>
                <p><strong>Other font weight</strong></p>
                <p><em>Other font style</em></p>
                <p><a href="#" title="This is a link demo">This is a link demo</a></p>
            </div>
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="modal">Modal</h3>
            <p>Superbox it's a great plugin because you can format how you wanna, saw exemples bellow:</p>
                    
            <p><a href="http://farm4.static.flickr.com/3269/2605397024_73497a6cf5.jpg" rel="superbox[image]">Superbox picture (auto dimensions)</a></p>
            
            <p><a href="http://farm4.static.flickr.com/3111/2605394848_e11968abaf.jpg" rel="superbox[image][700x]">Superbox picture (defined width)</a></p>
            
            <p><a href="http://farm4.static.flickr.com/3031/2605388478_b8ae228aab.jpg" rel="superbox[image][x600]">Superbox picture (defined height)</a></p>
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="tabs">Tabs</h3>
            <p>jQuery HeroTabs, its easer to use and apply to your all projects.</p>
            <div class="tabs tabs-standard tabs-example">
                <ul class="tab-nav js-nav">
                    <li class="tab-nav-item js-nav-item"><a href="#tab1">Item 1</a></li>
                    <li class="tab-nav-item js-nav-item"><a href="#tab2">Item 2</a></li>
                    <li class="tab-nav-item js-nav-item"><a href="#tab3">Item 3</a></li>
                </ul>
                <div class="tabs-container">
                    <div>
                    <div class="tab-pane js-tab" id="tab1">
                        <p>content 1</p>
                    </div>
                    </div>
                    <div class="tab-pane js-tab" id="tab2">
                        <p>content 2</p>
                    </div>
                    <div class="tab-pane js-tab" id="tab3">
                        <p>content 3</p>
                    </div>
                </div>
            </div>
            <div class="tabs tabs-horizontal tabs-example-horizontal">
                <ul class="tab-nav js-nav">
                    <li class="tab-nav-item js-nav-item tab-flat-item"><a href="#tab1">Item 1</a></li>
                    <li class="tab-nav-item js-nav-item tab-flat-item"><a href="#tab2">Item 2</a></li>
                    <li class="tab-nav-item js-nav-item tab-flat-item"><a href="#tab3">Item 3</a></li>
                </ul>
                <div class="tabs-container">
                    <div>
                    <div class="tab-pane js-tab" id="tab1">
                        <p>content 1</p>
                    </div>
                    </div>
                    <div class="tab-pane js-tab" id="tab2">
                        <p>content 2</p>
                    </div>
                    <div class="tab-pane js-tab" id="tab3">
                        <p>content 3</p>
                    </div>
                </div>
            </div>
            <div class="tabs tabs-vertical tabs-example-vertical">
                <ul class="tab-nav js-nav">
                    <li class="tab-nav-item js-nav-item tab-flat-item"><a href="#tab1">Item 1</a></li>
                    <li class="tab-nav-item js-nav-item tab-flat-item"><a href="#tab2">Item 2</a></li>
                    <li class="tab-nav-item js-nav-item tab-flat-item"><a href="#tab3">Item 3</a></li>
                </ul>
                <div class="tabs-container">
                    <div>
                    <div class="tab-pane js-tab" id="tab1">
                        <p>content 1</p>
                    </div>
                    </div>
                    <div class="tab-pane js-tab" id="tab2">
                        <p>content 2</p>
                    </div>
                    <div class="tab-pane js-tab" id="tab3">
                        <p>content 3</p>
                    </div>
                </div>
            </div>
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="tooltip">Tooltip</h3>
           
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="collapse">Collapse</h3>
            
            <div class="collapse-container collapse-left" data-collapse="accordion">
                <p class="collapse-header">Item 1</p>
                <div class="collapse-item">
                    Lorem ipsum amet dolor
                </div>
                <p class="collapse-header open" data-collapse-summary>Item 2</p>
                <div class="collapse-item">
                    Lorem ipsum amet dolor
                </div>
                <p class="collapse-header">Item 3</p>
                <div class="collapse-item">
                    Lorem ipsum amet dolor
                </div>
            </div>
           
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="carousel">Carousel</h3>
           
        </section>
        <hr class="dash-line" />
        <section class="content">
            <h3 id="slider">Slider</h3>
           
        </section>
        <hr class="dash-line" />
        <section class="content validation">
            <h3 id="validation">Validation</h3>
           
        </section>
    </div>
    <?php require('template/foot.php'); ?>
</body>
</html>
