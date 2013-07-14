<!doctype html>
<html lang="en" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Thing">
<head>

	<meta charset="utf-8">
    <?php include('template/head.php'); ?>
    <title>WDSIGN » firstClass</title>

</head>
<body>
    
    <div id="main-content">
        <div class="limit">
        
        <aside class="sidebar">
            <img class="logo" src="assets/images/logo.png" title="WDSIGN » firstClass">            
            <ul class="main-nav">
                <li class="dropdown nav-item"><a href="#scaffolding" title="Scaffolding" class="nav-link">Scaffolding</a>
                    <ul class="submenu">
                        <li class="sub-item"><a href="#grid" class="nav-link">Grid</a></li>
                        <li class="sub-item"><a href="#box" class="nav-link">Box</a></li>
                        <li class="sub-item"><a href="#tables" class="nav-link">Tables</a></li>
                        <li class="sub-item"><a href="#forms" class="nav-link">Forms</a></li>
                        <li class="sub-item"><a href="#typography" class="nav-link">Typography</a></li>
                    </ul>
                </li>
                <li class="dropdown nav-item"><a href="#components" title="Components" class="nav-link">Components</a>
                    <ul class="submenu">
                        <li class="sub-item"><a href="#buttons" class="nav-link">buttons</a></li>
                        <li class="sub-item"><a href="#icons" class="nav-link">Icons</a></li>
                        <li class="sub-item"><a href="#labels" class="nav-link">Labels</a></li>
                        <li class="sub-item"><a href="#images" class="nav-link">Images</a></li>
                        <li class="sub-item"><a href="#gallery" class="nav-link">Gallery</a></li>
                        <li class="sub-item"><a href="#breadcrumb" class="nav-link">Breadcrumb</a></li>
                        <li class="sub-item"><a href="#lists" class="nav-link">Lists</a></li>
                        <li class="sub-item"><a href="#navigation" class="nav-link">Navigation</a></li>
                    </ul>
                </li>
                <li class="dropdown nav-item"><a href="#features" title="Features" class="nav-link">Features</a>
                    <ul class="submenu">
                        <li class="sub-item"><a href="#modal" class="nav-link">Modal</a></li>
                        <li class="sub-item"><a href="#collapse" class="nav-link">Collapse</a></li>
                        <li class="sub-item"><a href="#carousel" class="nav-link">Carousel</a></li>
                        <li class="sub-item"><a href="#slider" class="nav-link">Slider</a></li>
                        <li class="sub-item"><a href="#tooltip" class="nav-link">Tooltip</a></li>
                        <li class="sub-item"><a href="#notification" class="nav-link">Notification</a></li>
                        <li class="sub-item"><a href="#tabs" class="nav-link">Tabs</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
        
            
            
            <section class="container">
                <blockquote class="txt-blink">
                    A clean framework to help Web Designer create a better sites.
                </blockquote>
                
                <?php include('scaffolding.php'); ?>
                <hr />
                <?php include('components.php'); ?>
                <hr />
                <?php include('features.php'); ?>
                
                
            </section>
        
        </div>
    </div>
    <?php require('template/foot.php'); ?>
    <a href="https://github.com/WDSIGN/firstClass"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub"></a>
</body>
</html>