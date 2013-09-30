<!doctype html>
<html lang="pt-br" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Thing">
<head>

	<meta charset="utf-8">
    <?php include('template/head.php'); ?>
    <title>WDSIGN » firstClass » Scaffolding</title>

</head>
<body class="scaffolding">

    <div id="main-content">
        <div class="limit">

            <?php include('template/sidebar.php'); ?>


            <main class="content">
                <h1 class="content-title">Scaffolding</h1>
                <section id="type">
                    <h2 class="content-subtitle">Typograpfy</h2>
                    <h3>Heading 1</h3>
                    
                    <h2>Subtitle &mdash; h2</h2>
                    <h3>Subtitle &mdash; h3</h3>
                    <h4>Subtitle &mdash; h4</h4>
                    <h5>Subtitle &mdash; h5</h5>
                    <h6>Subtitle &mdash; h6</h6>
                    <p>
                        Here, it must needs be said, that accidents like this have in more than one case occurred to ships in violent storms. The magnetic energy, as developed in the mariner's needle, is, as all know, essentially one with the electricity beheld in heaven; hence it is not to be much marvelled at, that such things should be.
                    </p>
                    
                    <pre class="code-content">
&lt;html lang="en"&gt;
    &lt;head&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;p&gt;HTML HERE&lt;/p&gt;
    &lt;/body&gt;
&lt;/html&gt;
                    </pre>
                    <address>
                        Street ABC, 456<br/>
                        Los Angeles, EUA
                    </address>
                    <blockquote cite="http://abandon.ie">
                        <p>
                            I was very fond of Powell; he was thoroughly a man in every respect; a polished southern gentleman; a staunch and true friend; and it was with a feeling of the deepest grief that I finally gave up my crude endeavors at resuscitation.
                        </p>
                    </blockquote>
                    <hr />
                    
                    <h3>List Types</h3>
                    <p><strong>Ordered List</strong><p>
                
                    <ol>
                        <li>List item</li>
                        <li>List item</li>
                        <li>
                            List item
                            <ol>
                                <li>List item level 2</li>
                                <li>
                                    List item level 2
                                    <ol>
                                        <li>List item level 3</li>
                                        <li>List item level 3</li>
                                    </ol>
                                </li>
                            </ol>
                        </li>
                    </ol>
                    <hr />
                    
                    <p><strong>Unordered List</strong></p>
                
                    <ul>
                        <li>List item 01</li>
                        <li>List item 02</li>
                        <li>
                            List item 03
                            <ul>
                                <li>List item level 2</li>
                                <li>
                                    List item level 2
                                    <ul>
                                        <li>List item level 3</li>
                                        <li>List item level 3</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                
                    <p><strong>Definition List</strong></p>
                
                    <dl>
                        <dt>Definition list title</dt>
                        <dd>Definition list data</dd>
                        <dt>Definition list title</dt>
                        <dd>Definition list data</dd>
                        <dt>Definition list title</dt>
                        <dd>Definition list data</dd>
                    </dl>
                    
                </section>
                
                <section id="forms">
                    
                    <h2 class="content-subtitle">Forms</h2>
                    
                    <form class="form-container">
                        <fieldset class="wide-container">
                            <legend>Wide Content</legend>
                            <ul class="form-list">
                                <li class="form-list-item">
                                    <label>Name:</label>
                                    <input type="text" name="name" id="name" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" id="email" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Telphone (BR):</label>
                                    <input type="tel" name="telphone" id="telphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Cellphone (BR 11):</label>
                                    <input type="tel" name="cellphone" id="cellphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Address:</label>
                                    <textarea name="address" id="address" class="text-address">
                                    </textarea>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset class="columns half-column">
                            <legend>Double Content</legend>
                            <ul class="form-list">
                                <li class="form-list-item">
                                    <label>Name:</label>
                                    <input type="text" name="name" id="name" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" id="email" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Telphone (BR):</label>
                                    <input type="tel" name="telphone" id="telphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Cellphone (BR 11):</label>
                                    <input type="tel" name="cellphone" id="cellphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Address:</label>
                                    <textarea name="address" id="address" class="text-address">
                                    </textarea>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset class="columns half-column">
                            <legend>Double Content</legend>
                            <ul class="frm-list">
                                <li class="form-list-item">
                                    <label>Name:</label>
                                    <input type="text" name="name" id="name" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" id="email" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Telphone (BR):</label>
                                    <input type="tel" name="telphone" id="telphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Cellphone (BR 11):</label>
                                    <input type="tel" name="cellphone" id="cellphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Address:</label>
                                    <textarea name="address" id="address" class="text-address">
                                    </textarea>
                                </li>
                            </ul>
                        </fieldset>
                        <fieldset class="wide-container">
                            <legend>Wide Content</legend>
                            <ul class="form-list columns half-column">
                                <li class="form-list-item">
                                    <label>Name:</label>
                                    <input type="text" name="name" id="name" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" id="email" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Telphone (BR):</label>
                                    <input type="tel" name="telphone" id="telphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Cellphone (BR 11):</label>
                                    <input type="tel" name="cellphone" id="cellphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Address:</label>
                                    <textarea name="address" id="address" class="text-address">
                                    </textarea>
                                </li>
                            </ul>
                            <ul class="form-list columns half-column">
                                <li class="form-list-item">
                                    <label>Name:</label>
                                    <input type="text" name="name" id="name" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>E-mail:</label>
                                    <input type="email" name="email" id="email" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Telphone (BR):</label>
                                    <input type="tel" name="telphone" id="telphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Cellphone (BR 11):</label>
                                    <input type="tel" name="cellphone" id="cellphone" class="ipt-wide">
                                </li>
                                <li class="form-list-item">
                                    <label>Address:</label>
                                    <textarea name="address" id="address" class="text-address">
                                    </textarea>
                                </li>
                            </ul>
                        </fieldset>
                    </form>
                    
                </section>
                
                <section id="tables">
                    
                    <h2 class="content-subtitle">Tables</h2>
                    
                    <table class="tbl-classic">
                        <thead>
                            <tr>
                                <th colspan="2">ID</th>
                                <th>Item</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <td>Total:</td>
                                <td colspan="3">4</td>
                            </tr>
                        </tfoot>
                        <tbody>
                            <tr>
                                <td colspan="2">01</td>
                                <td>Test</td>
                                <td>More tests with table content</td>
                            </tr>
                            <tr>
                                <td colspan="2">02</td>
                                <td>Test</td>
                                <td>More tests with table content</td>
                            </tr>
                            <tr>
                                <td colspan="2">03</td>
                                <td>Test</td>
                                <td>More tests with table content</td>
                            </tr>
                            <tr>
                                <td colspan="2">04</td>
                                <td>Test</td>
                                <td>More tests with table content</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </section>
                
                            
                <section id="box">
                    
                    <h2 class="content-subtitle">Box</h2>
                    
                    <article class="box">
                        <header class="box-title">
                            <p class="el-title"><strong>Box Title</strong></p>
                        </header>
                        <div class="box-content">
                            <p>Box content</p>
                        </div>
                    </article>
                
                </section>
                
                <section i="grid">
                    
                    <h2 class="content-subtitle">Grids</h2>
                
                    <div class="columns-container">
                        <p>Half Content</p>
                        <div class="columns half-column"></div>
                        <div class="columns half-column"></div>
                    </div>
                
                    <div class="columns-container">
                        <p>Third Content</p>
                        <div class="columns third-column"></div>
                        <div class="columns third-column"></div>
                        <div class="columns third-column"></div>
                    </div>
                
                    <div class="columns-container">
                        <p>Quarter Content</p>
                        <div class="columns quarter-column"></div>
                        <div class="columns quarter-column"></div>
                        <div class="columns quarter-column"></div>
                        <div class="columns quarter-column"></div>
                    </div>
                
                    <div class="columns-container">
                        <div class="header">
                            <p class="el-left">Half Content</p>
                            <p class="el-right">Quarter Content</p>
                        </div>
                        <div class="columns half-column"></div>
                        <div class="columns quarter-column"></div>
                        <div class="columns quarter-column"></div>
                    </div>
                    
                </section>
                

            </main>

        </div>
    </div>
    <?php require('template/foot.php'); ?>
</body>
</html>