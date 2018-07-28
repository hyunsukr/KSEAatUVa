var http = require('http');
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
http.createServer(function (req, res) {
  if (!req.url.includes('.js') && !req.url.includes('.css') && !req.url.includes('.jpg') && !req.url.includes('.png')) {
    console.log(req.url + "this is the req.url");
    if (req.url == '/') {
      fs.readFile('home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }    
    else if (req.url == '/homeundergraduate') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('</br>');
            res.write('<div class="row">');
            res.write('<div class="col-xs-10 col-sm-3">');
            res.write('<nav class="navbar navbar-inverse navbar-fixed-left" style="background-color:#F8F8F8;">');
            res.write('  <div id="navbar" class="navbar-collapse collapse">');
            res.write('    <ul class="nav navbar-nav">');
            res.write('      <li><a href="/scholarshipunder"><span style = "color:#000000">Scholarships</span></a></li>');
            res.write('         <li role="separator" class="divider"></li>');
            res.write('     <li class="dropdown">');
            res.write('        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span style = "color:#000000">Opportunities</span></a>');
            res.write('      <ul class="dropdown-menu">');
            res.write('         <li><a href="/underintern">Internships</a></li>');
            res.write('           <li role="separator" class="divider"></li>');
            res.write('         <li><a href="/joboffers">Jobs</a></li>');
            res.write('     </ul>');
            res.write('   </li>');
            res.write('  </ul>');
            res.write(' </div>');
            res.write(' </nav>');
            
            res.write('</div>');
            res.write('<div class="col-xs-10 col-sm-9">');
            res.write('<h2 style = "color:#000099; margin-bottom:0px;">Welcome</span></h2>');
            res.write('<hr style = "height:1px;border-color:#FF8000; " >');
            res.write('<p style="text-align:center"><img src="/pics/groupphoto/Groupphoto_row.jpg" align="middle" width="600" height="300"></p></br>');
            res.write('<p style="font-size:150%"> Hello! Thank you for visiting our KSEA website! We are a group of aspiring engineers and scientists at the University of Virginia.')
            res.write('<ul style="list-style-type:disc">')
            
            res.write("<li><strong><span style = 'color:#000000'>Who?</span></strong></li>");
            res.write("<ul style='list-style-type:circle'><li>Korean Engineers and Scientists at UVa</li></ul>");
            res.write('</br>');

            res.write("<li><strong><span style = 'color:#000000'>Why?</span></strong></li>");
            res.write("<ul style='list-style-type:circle'><li>We strive to build connections with the greater charlottesville community and korean community of UVa. We do many networking events and social events to create life long bonds with each member and KSEA offers many jobs/internships/scholarships/opportunities to give back and make a juicy resume for your future career! </li></ul>");
            res.write('</br>');

            res.write("<li><strong><span style = 'color:#000000'>Goals?</span></strong></li>");
            res.write("<ul style='list-style-type:circle'><li>To Promote Networking</li></ul>");
            res.write("<ul style='list-style-type:circle'><li>To Serve as Role Models</li></ul>");
            res.write("<ul style='list-style-type:circle'><li>To Get Leadership Experiences</li></ul>");
            res.write("<ul style='list-style-type:circle'><li>To Serve the Community</li></ul>");
            res.write('</br>');

            res.write("<li><strong><span style = 'color:#000000'>How to get involved?</span></strong></li>");
            res.write("<ul style='list-style-type:circle'><li>Please come out to our meetings and events listed on the events tab on the website! We are open to anyone who is interested and will be excited to see who you guys are! If you want to know more about the club or who we are just shoot any executive board a quick email or email: <a href='mailto:kseayguva@gmail.com'>kseayguva@gmail.com</a></li></ul>");
            
            res.write('</ul>');

            res.write('</div>');
            res.write('</div>');
            res.write('</div>');
            res.write('<p style = "padding-bottom:100px"></p>');        
            res.write('</div>');
            footbot(res);
            res.write('</body>');
            res.write('</html>'); 
            res.end();
      });
    }
    else if (req.url == '/homegraduate') {
        fs.readFile('comingsoon.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url == '/joboffers') {
        fs.readFile('comingsoon.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
    else if (req.url == '/underintern') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<form action="/makeunderintern" method="post"><button type="submit" id="newuser" class="btn btn-danger">Offer an Internship!</button></form></br>');
            
            //list
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('List of Internships');
            res.write('</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            //table for events
            res.write('<table class="table table-hover">');
            res.write('<thead>');
            res.write('<tr>');

            res.write('<th scope="col">Offers</th>')
            res.write('<th scope="col"></th>');
            res.write('</tr>');
            res.write('</thead>');

            res.write('<tbody>');

            res.write('<tr>');
            res.write('<td><a href="/fasco"><span class="pull-left"><img src="/pics/events/Fasco_Global_Internship_small.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Fasco Internship</strong></br>');
            res.write('</br>Internship offer for Software Engineering and Marketing Strategies! </br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');

            /*
            res.write('<td><a href="/activitiesfair"><span class="pull-left"><img src="http://www.uvastudentcouncil.com/wp-content/uploads/2016/07/IMG_7770.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Activities Fair</strong></br>');
            res.write('</br>Check out the KSEA booth at the Acitivites fair this fall semester! Learn more about KSEA and see whats in store for the year!</br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');
            */
            res.write('</tbody>');
            res.write('</table>');

            res.write('</div>');
            res.write('<p style = "padding-bottom:400px"></p>');
            footbot(res);
            res.write('</body>');
            res.write('</html>'); 
            res.end();
            res.end();
        });
    }          
    else if (req.url == '/fasco') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h3 class="fl-heading" style="text-align:left">');
            res.write('<span style="text-align:left;color:#000099">Fasco Internship</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            res.write('<p style="text-align:center"><img src="/pics/events/Fasco_Global_Internship.jpg" align="middle" width="880" height="1300"></p></br>');
            //info
            res.write('<h3 style="text-align:left;">');
            res.write('</br><span style="color:#FF8000">Information (TLDR)</span>');
            res.write('</span>');
            res.write('</h3>');
            res.write('<ul style="list-style-type:disc">')
            res.write('<li>Who? KSEA members/Everybody</li>');
            res.write('<li>Hours? 40hr (8h/1day) </li>');
            res.write('<li>When? Summer June 11 ~ Aug 3, 2018 (8 weeks) </li> ')
            res.write('<li>Where? TBD </li> ');
            res.write('<li>Salary? 1,600,000 KRW/4weeks </li>');
            res.write('<li>Why/Purpose? </li>');
            res.write('</ul>');
            //formal info
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="color:#FF8000">Description</span>');
            res.write('</h3>');

            res.write('<p></p>');
            res.write("If you would like more specific details please don't hesitate to email <a href='mailto:kseayguva@gmail.com'>kseayguva@gmail.com</a>");
            res.write('</br>');
            res.write('<form action="/underintern" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Internships </button></form>');
            res.write('<p style = "padding-bottom:150px"></p>');
            res.write('</div>');
            footbot(res);
            res.end();
        });
    }
    else if (req.url == '/makeunderintern') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html;charset=UTF-8'});
            res.write(data);
            res.write('If you are a new user to this webpage please email your offer to <a href="mailto:kseayguva@gmail.com">kseayguva@gmail.com</a>')
            res.write('<p>Please Enter Your credentials. </p>');
            res.write('<form name="login" method="post" action="/makesocialunderlogin" >');
            res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
            res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
            res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
            res.write('<form action="/underintern" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Internships </button></form>');

            res.write('</br>');

            res.write('</div>');
            footbot(res);
            res.write('</body>');
            res.write('</html>'); 
            res.end();
        });
    }
    
    else if (req.url == '/scholarshipunder') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h3 class="fl-heading" style="text-align:center">');
            res.write('<span style="text-align:center;color:#000099">KSEA Scholarship</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            res.write('<h4 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('<span style="color:#FF8000">Objective</span>');
            res.write('</span>');
            res.write('</h4>');
            res.write('<ul style="list-style-type:disc">')
            res.write('<li>To recognize outstanding undergraduate students in the United States who excel in academics as well as in services to the community, and have demonstrated a potential to become future leaders of the society for closer cooperation between the U.S. and Korea.</h6>');
            res.write('</li></ul>');
            res.write('<h4 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('<span style="color:#FF8000">Scholarship</span>');
            res.write('</span>');
            res.write('</h4>');
            res.write('<ul style="list-style-type:disc">')
            res.write('<li>Scholar Ship reward: $2000 each</li>');
            res.write('<li>Number of recipients: 20 people</li>');
            res.write('</ul>');
            res.write('<h4 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('<span style="color:#FF8000">Details</span>');
            res.write('</span>');
            res.write('</h4>');
            res.write('<ul style="list-style-type:disc">')
            res.write('<li><span style="color:#FF0000">Deadline : 5:00 PM (EDT) March 31, 2018 (Saturday)</span></li>');
            res.write('<li>The evaluation will be based on the following criteria:</li>');
            res.write('<ol type="1">')
            res.write('<li>Academic performance</li>');
            res.write('<li>Recommendation letters</li>');
            res.write('<li>KSEA activities and community service</li>');
            res.write('<li>Essay</li>');
            res.write('</ol>');
            res.write('</ul>');
            res.write('Please check out the official page to apply here :<a href="/http://scholarship.ksea.org/InfoUndergraduate.aspx" style="color:#FF0000"> KSEA UNDERGRADUATE SCHOLARSHIPS</a>')
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            res.write('<h3 class="fl-heading" style="text-align:center">');
            res.write('<span style="text-align:center;color:#000099">Other Scholarships</span>');
            res.write('</h3>');
            res.write('<h4 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('<span style="color:#FF8000">Scholarships</span>');
            res.write('</span>');
            res.write('</h4>');
            res.write('<table class="table table-hover">');
            res.write('<thead>');
            res.write('<tr>');

            res.write('<th scope="col">Offers</th>')
            res.write('<th scope="col"></th>');
            res.write('</tr>');
            res.write('</thead>');

            res.write('<tbody>');

            res.write('<tr>');
            res.write('<td><a href="/hyundaischolarship"><span class="pull-left"><img src="/pics/events/hyundai.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Hyundai Scholarship</strong></br>');
            res.write('</br>Scholarship from Hyundai Motors for people of KSEA! </br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');

            /*
            res.write('<td><a href="/activitiesfair"><span class="pull-left"><img src="http://www.uvastudentcouncil.com/wp-content/uploads/2016/07/IMG_7770.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Activities Fair</strong></br>');
            res.write('</br>Check out the KSEA booth at the Acitivites fair this fall semester! Learn more about KSEA and see whats in store for the year!</br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');
            */
            res.write('</tbody>');
            res.write('</table>');

            res.write('</div>');
            footbot(res);
            res.write('</body>');
            res.write('</html>'); 
            res.end();
        });
    }
    else if (req.url == '/kconnect') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h3 class="fl-heading" style="text-align:center">');
            res.write('<span style="text-align:center;color:#000099">Korean Organizations at University of Virginia</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('<strong>List of organizations</strong></br>');
            res.write('<font size = "3">Click on picture for more details</font>');
            res.write('</span>');
            res.write('</h3>');            
            res.write('<table class="table table-hover">');
            res.write('<thead>');
            res.write('<tr>');

            res.write('<th scope="col">Organizations</th>')
            res.write('<th scope="col">Connect!</th>');
            res.write('</tr>');
            res.write('</thead>');

            res.write('<tbody>');

            res.write('<tr>');
            res.write('<td><a href="/"><span class="pull-left"><img src="/pics/logos/ksealogoblack.png" class="rounded float-right" style="width:200px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Korean-American Scientists and Engineers Association (KSEA at UVA) </strong></br> Website link: <a href="http://www.kseauva.org">http://www.kseauva.org/ </a></br> Email: <a href="mailto:kseayguva@gmail.com">kseayguva@gmail.com</a></br> President: Jeongsu Park (<a href="mailto:jp6kc@virginia.edu">jp6kc@virginia.edu</a>)</br>');
            res.write('<span class: "pull-left" style="text-align:left"><a href="https://www.facebook.com/groups/kseaAtUva/about/"><i class="fa fa-facebook-square" style="font-size:48px;color:#3B5998;padding-right:10px"></i></a></span>');
            res.write('<a href="https://www.facebook.com/groups/kseaAtUva/about/"><i class="fa fa-twitter-square" style="font-size:48px;padding-right:10px;color:#1DA1F2"></i></a>');
            res.write('</td>');
            res.write('</tr>');

            res.write('<td><a href="https://www.facebook.com/groups/2200074782/"><span class="pull-left"><img src="/pics/logos/ksalogo.png" class="rounded float-right" style="width:200px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Korean Student Association (KSA at UVA)</strong> </br>Website link: N/A </br> Email: <a href="mailto:lkc9dw@virginia.edu">lkc9dw@virginia.edu</a> </br>');
            res.write('<a href="https://www.facebook.com/groups/2200074782/"><i class="fa fa-facebook-square" style="font-size:48px;padding-right:10px;color:#3B5998"></i></a>');
            res.write('<a href="https://twitter.com/ksa_uva?lang=en"><i class="fa fa-twitter-square" style="font-size:48px;padding:0px;padding-right:10px;color:#1DA1F2"></i></a>');
            res.write('<a href="https://www.youtube.com/channel/UCCrULtpfBAm2Mdq6qPHyGFQ"><i class="fa fa-youtube-play" style="font-size:48px;color:red"></i></a>');
            res.write('</td>');
            res.write('</tr>');

            res.write('<td><a href="http://www.kccic.org/"><span class="pull-left"><img src="/pics/logos/kcciclogo.png" class="rounded float-right" style="width:200px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>H.I.M (HERE I AM)</strong> </br>Korean Community Church in Charlottesville (KCCIC) </br>Website link: <a href="http://www.kccic.org/">http://www.kccic.org/ </a></br> Email: <a href="mailto:kccicmail@gmail.com">kccicmail@gmail.com</a> </br> President: Dasam Jeong (<a href="mailto:dj2vp@virginia.edu">dj2vp@virginia.edu</a>)</br>');
            res.write('<a href="https://www.facebook.com/groups/kcciccollegegroup/"><i class="fa fa-facebook-square" style="font-size:48px;padding:0px;color:#3B5998"></i></a>')
            res.write('</td>');
            res.write('</tr>');

            res.write('<td><a href="https://www.refugeerescues.org/"><span class="pull-left"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/LiNK_Logo.png" class="rounded float-right" style="width:200px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Liberty in North Korea at UVa (LiNK at UVa) </strong> </br>Website link: <a href="https://www.refugeerescues.org/">https://www.refugeerescues.org/</a></br> Email: <a href="mailto:gsy2be@virginia.edu">gsy2be@virginia.edu</a> </br>');
            res.write('<a href="https://www.facebook.com/LiNKatUVA/"><i class="fa fa-facebook-square" style="font-size:48px;padding:0px;padding-right:10px;color:#3B5998"></i></a>')
            res.write('<a href="https://twitter.com/LibertyinNK/"><i class="fa fa-twitter-square" style="font-size:48px;padding-right:10px;color:#1DA1F2"></i></a>');
            res.write('<a href="https://www.instagram.com/libertyinnorthkorea/?hl=en"><i class="fa fa-instagram" style="font-size:48px;padding:0px;background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;"></i></a>')
            res.write('</td>');
            res.write('</tr>');

            res.write('<td><a href="https://www.facebook.com/kedgedance/"><span class="pull-left"><img src="/pics/logos/kedgelogo.png" class="rounded float-right" style="width:200px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>K-Edge</strong></br> Website link: N/A </br> Email: N/A </br>');
            res.write('<a href="https://www.facebook.com/kedgedance/"><i class="fa fa-facebook-square" style="font-size:48px;padding-right:10px;color:#3B5998"></i></a>')
            res.write('<a href="https://www.instagram.com/kedgedance/"><i class="fa fa-instagram" style="font-size:48px;padding:0px;padding-right:10px;background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);-webkit-background-clip: text;background-clip: text;-webkit-text-fill-color: transparent;"></i></a>')
            res.write('<a href="https://www.youtube.com/channel/UCtX05_cI901AqQKGiWoIAVA"><i class="fa fa-youtube-play" style="font-size:48px;color:red"></i></a>');
            res.write('</td>');
            res.write('</tr>');

            res.write('<td><a href="http://www.gcfhome.org/"><span class="pull-left"><img src="/pics/logos/rotunda.jpg" class="rounded float-right" style="width:200px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Grace Christian Fellowship</strong> </br> Website link: <a href="http://www.gcfhome.org">http://www.gcfhome.org/ </a></br> Email: N/A </br>');
            res.write('</td>');
            res.write('</tr>');

            res.write('</tbody>');
            res.write('</table>');
                
            res.write('</div>');
            footbot(res);
            res.write('</body>');
            res.write('</html>'); 
            res.end();
        });
    }
    else if (req.url == '/about') {
        fs.readFile('together.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h2 class="fl-heading">');
            res.write('<span style="text-align:center;color:#000099">Korean-American Scientists and Engineers Association</span>');
            res.write('</h2>');

            res.write('<h4 style="text-align:center">KSEA was established in 1971 as a non-profit professional organization and has grown to over 6,000 registered members with ~ 70 Local Chapter and Branches, ~30 Affiliated Professional Societies, and 13 Technical Groups across the United States</h4>');
            
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            
            res.write('<h3 style="text-align:center;">');
            res.write('<span style="text-align:center">');
            res.write('<span style="color:#000099">Vision</span> & <span style="color:#FF8000">Mission</span>');
            res.write('</span>');
            res.write('</h3>');
            res.write('<div class="row">');

            res.write('<div class="col-sm-5">');
            res.write('<img src="http://ksea.org/us/wp-content/uploads/pexels-photo-533189.jpeg" height = "200" width = "400">');
            res.write('</div>');
            
            res.write('<div class="col-xs-3 col-md-5">');
            res.write('KSEA at University of Virginia strives to: </br>');
            res.write('<ul>');
            res.write('<li>Promote the application of science and technology for the general welfare of society</li>');
            res.write('<li>Foster international cooperation especially between the U.S. and Korea</li>');
            res.write('<li>Help Korean-American Scientists and Engineers develop their full career potential</li>');
            res.write('<li>Closely knit the memebers to the communities</li>');
            res.write('</ul>');
            res.write('</div>');
            res.write('</div>');

            res.write('<hr style = "height:1px;border-color:#000000; " >');


            res.write('<h3 style="text-align:center;">');
            res.write('<span style="text-align:center">');
            res.write('<span style="color:#000099">Membership</span><span style="color:#FF8000"> Benefits</span>');
            res.write('</span>');
            res.write('</h3>');

            res.write('<ul>');
            res.write('<li>Leadership development through committee activities and conference organization: KSEA has 13 Technical Groups and 14 Standing Committees for your participation. You are welcome to organize technical sessions at the annual U.S.-Korea Conference on Science, Technology, and Entrepreneurship (UKC) or you may organize a conference of your own.</li>');
            res.write('<li>Networking with other Korean-American scientists and engineers: Join the Technical Groups and Committees, or come to the annual conference, UKC. The KSEA is unique in that its members come from all fields of science and engineering. The UKC offers an excellent opportunity to learn about other fields than your own.</li>');
            res.write('<li>Office use at KSEA Office while in DC: If you need a temporary office while in DC, please come to the KSEA Headquarters office. No charge for the use of a computer and local calls. Nominal charges for other office support or supplies.</li>');
            res.write('<li>Participation in technical evaluation and consulting: We will contact you when we need experts for these services.</li>');
            res.write('<li>Opportunities for community service: You may participate in community service activities of your chapter. Or you may help with National Math Competition.</li>');
            res.write('<li>Information on professional opportunities in both U.S. and Korea: Look for job openings on the KSEA web.</li>');
            res.write('<li>Awards program: KSEA honors members of distinguished records by presenting them with KSEA Awards.</li>');
            res.write('<li>Membership dues supporting your chapter: Most of your dues go back to your own chapter.</li>');
            res.write('</ul>');
            res.write('<p style = "padding-bottom:150px"></p>');
            res.write('</div>');
            footbot(res);
            res.write('</body>');
            res.write('</html>'); 
            res.end();
        });
    }
    else if (req.url == '/execgraduate') {
      fs.readFile('comingsoon.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }
    else if (req.url == '/execundergraduate') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.write('<table class="table table-hover">');
          res.write('<thead>');
          res.write('<tr>');
          res.write('<th scope="col"><span style="font-size:150%"><strong>Executive Board!<strong></span></th>');
          res.write('<th scope="col"></th>');
          res.write('</tr></thead>');
          res.write('<tbody></tr>')

          res.write('<tr><td></br><strong><span style="font-size:150%">Central Virginia Chapter</span></strong></td><td></td></tr>')

          res.write('<tr><td><span class="pull-left"><img src="/pics/profile/byungkyupark.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Byungkyu Park (Brian) </strong></br> President/Advisor for KSEA Central Virginia Chapter </br> Associate Professor in Civil & Environmental Engineering </br> Phonenumber: 434-260-0101 </br> Email: <a href="mailto:bp6v@virginia.edu">bp6v@virginia.edu</a></td></tr>');

          res.write('<tr><td><span class="pull-left"><img src="/pics/logos/rotunda.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Seunghan Ryu (Francis) </strong></br> Tresurer for KSEA Central Virginia Chapter </br>President for Korean Graduate Student Association </br> Phonenumber: 434-249-8384 </br> Email: <a href="mailto:sr5ae@virginia.edu">sr5ae@virginia.edu</a></td></tr>');

          res.write('<tr><td></br></br><strong><span style="font-size:150%">YG KSEA</span></strong></td><td></td></tr>')
        
          res.write('<tr><td><span class="pull-left"><img src="/pics/profile/jeongsupark.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Jeongsu Park (Alice)</strong></br> President </br> B.S. Systems and information Engineering </br> Phonenumber: 703-470-4540 </br> Email: <a href="mailto:jp6kc@virginia.edu">jp6kc@virginia.edu</a> </td></tr>');
          /*
          res.write('<tr><td class="align-left"><a href="/hyunsukryoo"><span class="pull-left"><img src="/pics/profile/hyunsuk.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></a></td>');
          res.write('<td>Hyun Suk Ryoo (Max)</br> Co-Vice-President </br> B.A Computer Science & B.A Statistics </br> Phonenumber: 612-963-1218 </br> Email: <a href="mailto:hr2ee@virginia.edu">hr2ee@virginia.edu</a></td></tr>');
          */
          res.write('<tr><td class="align-left"><span class="pull-left"><img src="/pics/profile/hyunsuk.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Hyun Suk Ryoo (Max)</strong></br> Co-Vice-President </br> B.A. Computer Science & B.A. Statistics (Biostatistics Concentration) </br> Phonenumber: 612-963-1218 </br> Email: <a href="mailto:hr2ee@virginia.edu">hr2ee@virginia.edu</a></td></tr>');
          
          res.write('<tr><td class="align-left"><span class="pull-left"><img src="/pics/profile/stellasonu.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Yuri Sonu (Stella) </strong></br> Co-Vice-President </br> B.A. Biology  </br> Phonenumber: 503-707-2791 </br> Email: <a href="mailto:ss7ap@virginia.edu">ss7ap@virginia.edu </a> </td></tr>');
          
          res.write('<tr><td class="align-left"><span class="pull-left"><img src="/pics/profile/parksujin.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Sujin Park </strong></br> Secretary </br> B.A. Computer Science & B.A. Studio Art</br> Phonenumber: 757-848-3446 </br> Email: <a href="mailto:sjp7yf@virginia.edu">sjp7yf@virginia.edu</a> </td></tr>');
          
          res.write('<tr><td class="align-right"><span class="pull-left"><img src="/pics/profile/jinijeon.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td><strong>Jini Jeon </strong></br> Treasure </br> B.A. Biology & Minor in Religious Studies </br> Phonenumber: 571-529-0578 </br> Email: <a href="mailto:jj7wt@virginia.edu">jj7wt@virginia.edu</a> </td></tr>');
          
          res.write('<tr><td class="align-right"><span class="pull-left"><img src="/pics/profile/jungyunjang.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td> <strong>Jungyun Jang (Jenny) </strong></br> Public Relations/Event Cordinator </br> B.A. Biology </br> Phonenumber: 703-675-4342 </br> Email: <a href="mailto:jj6jz@virginia.edu">jj6jz@virginia.edu</a> </td></tr>');
          
          res.write('<tr><td class="align-right"><span class="pull-left"><img src="/pics/profile/umhaeun.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td> <strong>Ha Eun Um </strong></br> Historian </br> B.A. Chinese Language and Literature & M.A. Elementary Education</br> Phonenumber: 703-577-7532 </br> Email: <a href="mailto:hu9ga@virginia.edu">hu9ga@virginia.edu </a> </td></tr>');
          
          res.write('<tr><td class="align-right"><span class="pull-left"><img src="/pics/profile/dongwookkim.jpg" class="rounded float-left" style="width:200px;height:200px;"alt=""></span></td>');
          res.write('<td> <strong>Dongwook Kim</strong> </br> Historian </br> B.A. Mathematics (Probabilities and Statistics Concentration) </br> Phonenumber: 434-327-0748 </br> Email: <a href="mailto:dk2sq@virginia.edu">dk2sq@virginia.edu</a> </td></tr>');
          
        

          res.write('</tbody></table>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</div>'); 
          footbot(res);
          res.write('</body>');
          res.write('</html>'); 
          res.end();
        });
      }
      /*
    else if (req.url == '/byungkyupark') {
      fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data); 
        res.write("</br>");
        res.write('<div class="row">');

        res.write('<div class="col-xs-10 col-sm-3">');
        
        res.write('<div class="card" style="width: 26rem;">');
        res.write('<img class="card-img-top" src="/pics/profile/byungkyupark.jpg" alt="Card image cap">');
        res.write('<div class="card-body">');
        res.write("<p class='card-text'>");
        res.write('Byungkyu Park </br>');
        res.write('Professor </br>');
        res.write('434-260-0101 </br>');
        res.write('bp6v@virginia.edu');
        res.write('</br>');
        res.write("</p>");
        res.write('</div>');
        res.write('</div>');
        res.write('</div>');
        
        res.write('<div class="col-xs-10 col-sm-9">');
        res.write("<p>");
        res.write('<h2 style = "color:#900; margin-bottom:0px;">Byungkyu Park (Brian)</span></h2>');
        res.write('<h3 style = "color:#000099;"> Advisor for KSEA Central Virginia Chapter </h3>');
        res.write('<h5 style = "color:#000099;"> Associate Professor of Civil and Environmental Engineering at UVA </h5>');
        res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
        res.write('<span style = "color:#000099">B.A (Computer Science), University of Virginia, 2020 </span></br>');
        res.write('<span style = "color:#000099">Degree? Graduated from Hanyang University and Texas A&M University </span></br>');
        res.write("Research Interests: Connected and Automated Vehicles </br> Passionate about “new technology” applications </br> Hobbies: listening to classical music, reading books, playing tennis</br>")
        res.write('<a href="/byungkyupark_cv.pdf"> C.V </a>');
        res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
        res.write('</div>');

        res.write("</p>");
        res.write('</div>');
        res.write('<p style = "padding-bottom:150px"></p>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');  

        res.write('</div>');
        footbot(res);
        res.end();
      });
    }
    else if (req.url == '/byungkyupark_cv.pdf') {
        //need
      fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
        res.writeHead(200, {'Content-Type': 'application/pdf'});
        res.write(data);
        res.end();
      });
    }

    else if (req.url == '/hyunsukryoo') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/profile/hyunsuk.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Hyun Suk Ryoo </br>');
          res.write('Third Year </br>');
          res.write('612-963-1218 </br>');
          res.write('hr2ee@virginia.edu');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Hyun Suk Ryoo (Max)</span></h2>');
          res.write('<h3 style = "color:#000099;"> Co-Vice President </h3>');
          res.write('<h5 style = "color:#000099;"> Software/Database Developer </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">B.A (Computer Science), University of Virginia, 2020 </span></br>');
          res.write('<span style = "color:#000099">B.A (Statistics (Biostatics Concentration)), University of Virginia, 2020 </span></br>');
          res.write("As a software/database developer my interest is to connect the fields of autmoation, research, and medicine more tightly. blah blah blah. </br>")
          res.write('<a href="/hyunsukryoo_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/hyunsukryoo_resume.pdf') {
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/jeongsupark') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Jeongsu Park </br>');
          res.write('Fourth Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Jeongsu Park (Alice) </span></h2>');
          res.write('<h3 style = "color:#000099;"> President </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/jeongsupark_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/jeongsupark_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/stellsonu') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Yuri Sonu</br>');
          res.write('Fourth Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Yuri Sonu (Stella) </span></h2>');
          res.write('<h3 style = "color:#000099;"> Co-Vice President </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/stellasonu_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');

          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/stellasonu_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/sujinpark') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Sujin Park</br>');
          res.write('Third Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Sujin Park </span></h2>');
          res.write('<h3 style = "color:#000099;"> Secretary </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/sujinpark_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/sujinpark_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/jinijeon') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Jini Jeon</br>');
          res.write('Fourth Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Jini Jeon </span></h2>');
          res.write('<h3 style = "color:#000099;"> Treasure </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/jinijeon_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/jinijeon_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/jungyunjang') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Jungyun Jang</br>');
          res.write('Third Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Jungyun Jang (Jenny) </span></h2>');
          res.write('<h3 style = "color:#000099;"> Public Relations/Event Cordinator </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/jungyunjang_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/jungyunjang_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/haeunum') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Ha Eun Um</br>');
          res.write('Third Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Ha Eun Um </span></h2>');
          res.write('<h3 style = "color:#000099;"> Historian </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/haeunum_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/haeunum_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }
      else if (req.url == '/dongwookkim') {
        fs.readFile('index.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data); 
          res.write("</br>");
          res.write('<div class="row">');
  
          res.write('<div class="col-xs-10 col-sm-3">');
          
          res.write('<div class="card" style="width: 26rem;">');
          res.write('<img class="card-img-top" src="/pics/logos/rotunda.jpg" alt="Card image cap">');
          res.write('<div class="card-body">');
          res.write("<p class='card-text'>");
          res.write('Dongwook Kim</br>');
          res.write('Fourth Year </br>');
          res.write('? </br>');
          res.write('</br>');
          res.write("</p>");
          res.write('</div>');
          res.write('</div>');
          res.write('</div>');
          
          res.write('<div class="col-xs-10 col-sm-9">');
          res.write("<p>");
          res.write('<h2 style = "color:#900; margin-bottom:0px;">Dongwook </span></h2>');
          res.write('<h3 style = "color:#000099;"> Historian </h3>');
          res.write('<h5 style = "color:#000099;"> ? </h5>');
          res.write('<hr style = "height:1px;border-color:#ffcc00; " >');
          res.write('<span style = "color:#000099">? Degree</span></br>');
          res.write("Introduction </br>")
          res.write('<a href="/dongwookkim_resume.pdf"> C.V </a>');
          res.write('<form action="/execundergraduate" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Exec Board </button></form>');
          res.write('</div>');
  
          res.write("</p>");
          res.write('</div>');
          res.write('<p style = "padding-bottom:150px"></p>');
          res.write('</div>');
          res.write('</body>');
          res.write('</html>');  
  
          res.write('</div>');
          footbot(res);
          res.end();
        });
      }
      else if (req.url == '/dongwookkim_resume.pdf') {
          //read in resume
        fs.readFile('hyunsukryoo_resume.pdf', function (err, data) {
          res.writeHead(200, {'Content-Type': 'application/pdf'});
          res.write(data);
          res.end();
        });
      }*/
    else if (req.url == '/techeventsunder') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<form action="/maketechunder" method="post"><button type="submit" id="newuser" class="btn btn-danger" style="background-image: linear-gradient(to right bottom, #659ef4, #5086d4, #3b6fb5, #255897, #0b437a);">Make a new event!</button></form>');
            res.write('</br>');
            res.write('<div class="month">      ');
            res.write('<ul>');
            res.write('<li>');
            res.write('August<br>');
            res.write('<span style="font-size:18px">2018</span>');
            res.write('</li>');
            res.write('</ul>');
            res.write('</div>');
            res.write('<ul class="weekdays">');
            res.write('<li>Mo</li>');
            res.write('<li>Tu</li>');
            res.write('<li>We</li>');
            res.write('<li>Th</li>');
            res.write('<li>Fr</li>');
            res.write('<li>Sa</li>');
            res.write('<li>Su</li>');
            res.write('</ul>');

            res.write('<ul class="days">  ');
            res.write('<li></li>');
            res.write('<li></li>');
            res.write('<li>1</li>');
            res.write('<li>2</li>');
            res.write('<li>3</li>');
            res.write('<li>4</li>');
            res.write('<li>5</li>');
            res.write('<li>6</li>');
            res.write('<li>7</li>');
            res.write('<li>8</li>');
            res.write('<li>9</li>');
            res.write('<li><a href="/randomrow"><span class="active">10</span></a></li>');
            res.write('<li>11</li>');
            res.write('<li>12</li>');
            res.write('<li>13</li>');
            res.write('<li>14</li>');
            res.write('<li>15</li>');
            res.write('<li>16</li>');
            res.write('<li>17</li>');
            res.write('<li>18</li>');
            res.write('<li>19</li>');
            res.write('<li></li>');
            res.write('<li>21</li>');
            res.write('<li>22</li>');
            res.write('<li>23</li>'); 
            res.write('<li>24</li>');
            res.write('<li>25</li>');
            res.write('<li>26</li>');
            res.write('<li>27</li>');
            res.write('<li>28</li>');
            res.write('<li>29</li>');
            res.write('<li>30</li>');
            res.write('<li>31</li>');
            res.write('</ul>');
            //list of all events
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('List of events');
            res.write('</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            //table for events
            res.write('<table class="table table-hover">');
            res.write('<thead>');
            res.write('<tr>');

            res.write('<th scope="col">Events</th>')
            res.write('<th scope="col"></th>');
            res.write('</tr>');
            res.write('</thead>');

            res.write('<tbody>');

            res.write('<tr>');
            res.write('<td><a href="/randomrow"><span class="pull-left"><img src="https://static.tildacdn.com/tild6438-3565-4838-b266-363130326466/GrapefruitMethod.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Networking KSEA & UVa Faculty!</strong></br>');
            res.write('</br>Come network with the fellow faculty at UVa. Faculty memebers are from all schools including the medical school. If you are looking for a research opportunity or internship come join us! </br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');
            /*
            res.write('<td><a href="/activitiesfair"><span class="pull-left"><img src="http://www.uvastudentcouncil.com/wp-content/uploads/2016/07/IMG_7770.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Activities Fair</strong></br>');
            res.write('</br>Check out the KSEA booth at the Acitivites fair this fall semester! Learn more about KSEA and see whats in store for the year!</br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');*/

            res.write('</tbody>');
            res.write('</table>');

            res.write('</div>');
            res.write('<p style = "padding-bottom:120px"></p>');        
            footbot(res);
            res.write('</div>');
            res.write('</body>');
            res.write('</html>');
            res.end();
        });
    }
    else if (req.url == '/maketechunder') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<p>Please Enter Your credentials. </p>');
            res.write('<form name="login" method="post" action="/maketechunderlogin" >');
            res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
            res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
            res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
            res.write('<form action="/techeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go back to tech events </button></form>');
            res.write("</br>");
            res.write('</div>');
            footbot(res);
            res.end();
        });
    }
    else if (req.url == '/maketechunderlogin') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            if (body == '' || body == 'undefined') {
                fs.readFile('index.html', function(err, data) {
                    res.write('<div class="alert alert-danger">');
                    res.write('<strong>ERROR!</strong> Wrong Username and Passwords');
                    res.write('</div>');
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write('<p>Please Enter Your credentials. </p>');
                    res.write('<form name="login" method="post" action="/maketechunderlogin >');
                    res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
                    res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
                    res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                    res.write('</div>');
                    res.write('</body>');
                    res.write('</html>'); 

                    res.write('</div>');
                    footbot(res);
                    res.end();
                });
                res.write('heh');
                res.end();
            }
            else {
                if (body.split('Username=')[1].split('&')[0] == 'kseaexecboardatuvaatkseayg' && body.split('Password=')[1] == 'Koreans1234Abcdlol') {
                    fs.readFile('index.html', function(err, data) {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.write('<form name="makenewpost" method="post" action="/sendmailundertech" >');
                        res.write('Title: <input type="text" class="form-control" name = "title" id="title" placeholder="Title" required="required">');
                        res.write('Description: <input type="text" class="form-control" name = "description" id="description" placeholder="Description" required= "required">');
                        res.write('Who: <input type="text" class="form-control" name = "who" id="who" placeholder="Who" required="required">');
                        res.write('What: <input type="text" class="form-control" name = "what" id="what" placeholder="what" required="required">');
                        res.write('When: <input type="text" class="form-control" name = "when" id="when" placeholder="When" required="required">');
                        res.write('Where: <input type="text" class="form-control" name = "where" id="where" placeholder="Where" required="required">');
                        res.write('Purpose: <input type="text" class="form-control" name = "purpose" id="purpose" placeholder="Purpose" required="required">');
                        res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                        res.write("</br>");
                        res.write('</div>');
                        res.write("</br>");
                        res.write('</div>');
                        footbot(res);
                        res.end();
                    });
                }
                else {
                    fs.readFile('index.html', function(err, data) {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.write('<div class="alert alert-danger">');
                        res.write('<strong>ERROR!</strong> Wrong Username and Passwords');
                        res.write('</div>');
                        res.write('<p>Please Enter Your credentials. </p>');
                        res.write('<form name="login" method="post" action="/makesocialunderlogin" >');
                        res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
                        res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
                        res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                        res.write("</br>");
                        res.write('<form action="/techeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go back to tech events </button></form>');
                        res.write('</div>');
                        res.write('</body>');
                        res.write('</html>'); 

                        res.write('</div>');
                        footbot(res);
                        res.end();
                    });
                }
            }
        });
    }
    else if (req.url == '/sendmailundertech') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            if (body == '' || body == 'undefined') {
                fs.readFile('index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write('<div class="alert alert-danger">');
                    res.write('<strong>ERROR!</strong> If you made it this far stop...Wrong Username and Passwords');
                    res.write('</div>');
                    res.write('<p>Please Enter Your credentials. </p>');
                    res.write('<form name="login" method="post" action="/makesocialunderlogin" >');
                    res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
                    res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
                    res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                    res.write('</div>');
                    res.write('</body>');
                    res.write('</html>'); 

                    res.write('</div>');
                    footbot(res);
                    res.end();
                });
            }
            else {
                var title = body.split('title=')[1].split('&description')[0];
                var description = body.split('description=')[1].split('&who')[0];
                var who = body.split('who=')[1].split('&what')[0];
                var what = body.split('what=')[1].split('&when')[0];
                var when = body.split('when=')[1].split('&where')[0];
                var where = body.split('where=')[1].split('&purpose')[0];
                var purpose = body.split('purpose=')[1];
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                      user: 'kseayguva@gmail.com',
                      pass: 'avugyaesk'
                    }
                  });
                  var mailOptions = {
                    from: 'kseayguva@gmail.com',
                    to: "hr2ee@virginia.edu,",
                    subject: 'KSEA EVENT UPLOAD REQUEST (tech)',
                    text: 'Title: ' + title + '  description: ' + description + '  who: ' + who + '  what: ' + what + '  when: ' + when + '  where: ' + where + '  purpose: ' + purpose
                  };
                fs.readFile('index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write("<div class='alert alert-success'>");
                    res.write('<strong>Success!</strong> You Sent the request.');
                    res.write('</div>');
                    res.write('<div class="alert alert-warning" role="alert">');
                    res.write('If you have a picture for the event please send the picture now...');
                    res.write('</div>');
                    res.write('Please label it with the eventname and year included (ex. firstgeneralmeetingfall2018.jpg)');
                    res.write('<form action="/fileuploadsocialundertech" method="post" enctype="multipart/form-data">');
                    res.write('<input type="file" name="filetoupload"><br>');
                    res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button>');
                    res.write('</form>');

                    res.write('</div>');
                    footbot(res);
                    res.end();
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                        });
                    });
                }
            });
        }
    else if (req.url == '/fileuploadsocialundertech') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/root/KSEAatUVa/pics/events/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                fs.readFile('index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write("<div class='alert alert-success'>");
                    res.write('<strong>Success!</strong> You have successfully uploaded the document.');
                    res.write('</div>');
                    res.end();
                });
                var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'kseayguva@gmail.com',
                    pass: 'avugyaesk'
                  }
                });
                var mailOptions = {
                  from: 'kseayguva@gmail.com',
                  to: "hr2ee@virginia.edu,",
                  subject: 'KSEA EVENT UPLOAD REQUEST pic tech',
                  text: 'sending corresponding pic',
                  attachments:[{path: '/root/KSEAatUVa/pics/events/' + files.filetoupload.name }]
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                     console.log(error);
                    } else {
                     console.log('Emailatt sent: ' + info.response);
                    }
                });
            });
          });
        }
    else if (req.url == '/randomrow') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h3 class="fl-heading" style="text-align:left">');
            res.write('<span style="text-align:left;color:#000099">Random Row Networking!</span>');
            res.write('</h3>');
            res.write('<span style="font-size=10px">');
            res.write('Check out the event on Facebook to <span style="color:#FF0000">RSVP</span>!</br>');
            res.write('<a href="https://www.facebook.com/events/1842294239403823/"><i class="fa fa-facebook-square" style="font-size:48px;padding-right:10px;color:#3B5998"></i></a>');
            res.write('</span>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            res.write('<p style="text-align:center"><img src="/pics/events/randomrowopener.jpg" align="middle" width="600" height="300"></p></br>');
            //info
            res.write('<h3 style="text-align:left;">');
            res.write('</br><span style="color:#FF8000">Information (TLDR)</span>');
            res.write('</span>');
            res.write('</h3>');
            res.write('<ul style="list-style-type:disc">')
            res.write('<li>Who? KSEA members & UVa Faculty (Public event)</li>');
            res.write('<li>What? Netwokring with faculty of UVa for making opporutnities such as research or internships. Get to know the facutly of UVa</li>');
            res.write('<li>When? April 7th 4:00pm - 7:00pm </li> ')
            res.write('<li>Where? Random Row Brewing Co. </li> ');
            res.write('<li>Why/Purpose? Get to know the faculty of UVa and start networking. It will be a great place to start your local network for your college years and beyond. Look at what KSEA affilated faculties have in store for you!</li>');
            res.write('</ul>');
            //formal info
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="color:#FF8000">Description</span>');
            res.write('</h3>');

            res.write('We are pleased to announce that KSEA will hold a Member Brings New Member event on April 7th 4:00 pm- 7:00 pm @ Random Row in Downtown! You can encourage your Korean colleagues, friends, family to join this event. There will be FREE DRINKS AND FREE FOOD (wings and pizzas) for KSEA members and event attendees. ');
            res.write('</br>');
            res.write('<form action="/socialeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Social Events </button></form>');
            res.write('<p style = "padding-bottom:150px"></p>');
            res.write('</div>');
            footbot(res);
            res.end();
        });
    }
    else if (req.url == '/activitiesfair') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<h3 class="fl-heading" style="text-align:left">');
            res.write('<span style="text-align:left;color:#000099">Activities Fair</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            res.write('<p style="text-align:center"><img src="http://www.uvastudentcouncil.com/wp-content/uploads/2016/07/IMG_7770.jpg" align="middle" width="600" height="300"></p></br>');
            //info
            res.write('<h3 style="text-align:left;">');
            res.write('</br><span style="color:#FF8000">Information (TLDR)</span>');
            res.write('</span>');
            res.write('</h3>');
            res.write('<ul style="list-style-type:disc">')
            res.write('<li>Who? KSEA members & Everybody</li>');
            res.write('<li>What? Acitivites Fair. Information Fair to introduce KSEA to new and current students of UVa. </li>');
            res.write('<li>When? Aug 20th, 2018 </li> ')
            res.write('<li>Where? TBD </li> ');
            res.write('<li>Why/Purpose? Introduce KSEA to the community</li>');
            res.write('</ul>');
            //formal info
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="color:#FF8000">Description</span>');
            res.write('</h3>');

            res.write('We are pleased to announce that KSEA will be participating at the activities fair on Aug 20th, 2018! During activities fair we will be introducing KSEA to the general public and show them what we do as an organization. Come learn how you can recieve scholarships/jobs/internships and come learn how you can be a part of the KSEA family!');
            res.write('</br>');
            res.write('<form action="/socialeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go Back to Social Events </button></form>');
            res.write('<p style = "padding-bottom:150px"></p>');
            res.write('</div>');
            footbot(res);
            res.end();
        });
    }
    else if (req.url == '/socialeventsunder') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<form action="/makesocialunder" method="post"><button type="submit" id="newuser" class="btn btn-danger" style="background-image: linear-gradient(to right, #108dc7, #8984d5, #d971b8, #fe6f7a, #ef8e38);">Make a new event!</button></form>');
            res.write('</br>');
            res.write('<div class="month">      ');
            res.write('<ul>');
            res.write('<li>');
            res.write('August<br>');
            res.write('<span style="font-size:18px">2018</span>');
            res.write('</li>');
            res.write('</ul>');
            res.write('</div>');
            res.write('<ul class="weekdays">');
            res.write('<li>Mo</li>');
            res.write('<li>Tu</li>');
            res.write('<li>We</li>');
            res.write('<li>Th</li>');
            res.write('<li>Fr</li>');
            res.write('<li>Sa</li>');
            res.write('<li>Su</li>');
            res.write('</ul>');

            res.write('<ul class="days">  ');
            res.write('<li></li>');
            res.write('<li></li>');
            res.write('<li>1</li>');
            res.write('<li>2</li>');
            res.write('<li>3</li>');
            res.write('<li>4</li>');
            res.write('<li>5</li>');
            res.write('<li>6</li>');
            res.write('<li>7</li>');
            res.write('<li>8</li>');
            res.write('<li>9</li>');
            res.write('<li><a href="/randomrow"><span class="active">10</span></a></li>');
            res.write('<li>11</li>');
            res.write('<li>12</li>');
            res.write('<li>13</li>');
            res.write('<li>14</li>');
            res.write('<li>15</li>');
            res.write('<li>16</li>');
            res.write('<li>17</li>');
            res.write('<li>18</li>');
            res.write('<li>19</li>');
            res.write('<li><a href="/activitiesfair"><span class="active">20</span></a></li>');
            res.write('<li>21</li>');
            res.write('<li>22</li>');
            res.write('<li>23</li>'); 
            res.write('<li>24</li>');
            res.write('<li>25</li>');
            res.write('<li>26</li>');
            res.write('<li>27</li>');
            res.write('<li>28</li>');
            res.write('<li>29</li>');
            res.write('<li>30</li>');
            res.write('<li>31</li>');
            res.write('</ul>');
            //list of all events
            res.write('<h3 style="text-align:left;">');
            res.write('<span style="text-align:left">');
            res.write('List of events');
            res.write('</span>');
            res.write('</h3>');
            res.write('<hr style = "height:1px;border-color:#000000; " >');
            //table for events
            res.write('<table class="table table-hover">');
            res.write('<thead>');
            res.write('<tr>');

            res.write('<th scope="col">Events</th>')
            res.write('<th scope="col"></th>');
            res.write('</tr>');
            res.write('</thead>');

            res.write('<tbody>');

            res.write('<tr>');
            res.write('<td><a href="/activitiesfair"><span class="pull-left"><img src="http://www.uvastudentcouncil.com/wp-content/uploads/2016/07/IMG_7770.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Activities Fair</strong></br>');
            res.write('</br>Check out the KSEA booth at the Acitivites fair this fall semester! Learn more about KSEA and see whats in store for the year!</br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');

            res.write('<td><a href="/randomrow"><span class="pull-left"><img src="https://static.tildacdn.com/tild6438-3565-4838-b266-363130326466/GrapefruitMethod.jpg" class="rounded float-right" style="width:300px;height:200px;"alt=""></span></a></td>');
            res.write('<td><span class: "pull-left" style="text-align:left"><strong>Networking KSEA & UVa Faculty!</strong></br>');
            res.write('</br>Come network with the fellow faculty at UVa. Faculty memebers are from all schools including the medical school. If you are looking for a research opportunity or internship come join us! </br>');
            res.write('</br> Click on picture for more details');
            res.write('</td>');
            res.write('</tr>');

            res.write('</tbody>');
            res.write('</table>');

            res.write('</div>');
            footbot(res);
            res.end();
        });
    }
    else if (req.url == '/makesocialunder') {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('<p>Please Enter Your credentials. </p>');
            res.write('<form name="login" method="post" action="/makesocialunderlogin" >');
            res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
            res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
            res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
            res.write('<form action="/socialeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go back to social events </button></form>');
            res.write("</br>");
            res.write('</div>');
            footbot(res);
            res.end();
        });
    }
    else if (req.url == '/makesocialunderlogin') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            if (body == '' || body == 'undefined') {
                fs.readFile('index.html', function(err, data) {
                    res.write('<div class="alert alert-danger">');
                    res.write('<strong>ERROR!</strong> Wrong Username and Passwords');
                    res.write('</div>');
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write('<p>Please Enter Your credentials. </p>');
                    res.write('<form name="login" method="post" action="/makesocialunderlogin >');
                    res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
                    res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
                    res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                    res.write("</br>");
                    res.write('<form action="/socialeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go back to social events </button></form>');
                    res.write('</div>');
                    res.write('</body>');
                    res.write('</html>'); 

                    res.write('</div>');
                    footbot(res);
                    res.end();
                });
                res.write('heh');
                res.end();
            }
            else {
                if (body.split('Username=')[1].split('&')[0] == 'kseaexecboardatuvaatkseayg' && body.split('Password=')[1] == 'Koreans1234Abcdlol') {
                    fs.readFile('index.html', function(err, data) {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.write('<form name="makenewpost" method="post" action="/sendmailunder" >');
                        res.write('</br> If this is an internship offer please email the internship directly to President!')
                        res.write('Title: <input type="text" class="form-control" name = "title" id="title" placeholder="Title" required="required">');
                        res.write('Description: <input type="text" class="form-control" name = "description" id="description" placeholder="Description" required= "required">');
                        res.write('Who: <input type="text" class="form-control" name = "who" id="who" placeholder="Who" required="required">');
                        res.write('What: <input type="text" class="form-control" name = "what" id="what" placeholder="what" required="required">');
                        res.write('When: <input type="text" class="form-control" name = "when" id="when" placeholder="When" required="required">');
                        res.write('Where: <input type="text" class="form-control" name = "where" id="where" placeholder="Where" required="required">');
                        res.write('Purpose: <input type="text" class="form-control" name = "purpose" id="purpose" placeholder="Purpose" required="required">');
                        res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                        res.write("</br>");
                        res.write('<form action="/socialeventsunder" method="post"></br><button type="submit" id="newuser" class="btn btn-primary" style="color:#ffffff; ">Go back to social events </button></form>');
                        res.write('</div>');
                        res.write("</br>");
                        res.write('</div>');
                        footbot(res);
                        res.end();
                    });
                }
                else {
                    fs.readFile('index.html', function(err, data) {
                        res.writeHead(200, {'Content-Type': 'text/html'});
                        res.write(data);
                        res.write('<div class="alert alert-danger">');
                        res.write('<strong>ERROR!</strong> Wrong Username and Passwords');
                        res.write('</div>');
                        res.write('<p>Please Enter Your credentials. </p>');
                        res.write('<form name="login" method="post" action="/makesocialunderlogin" >');
                        res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
                        res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
                        res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                        res.write('</div>');
                        res.write('</body>');
                        res.write('</html>'); 

                        res.write('</div>');
                         footbot(res);
                        res.end();
                    });
                }
            }
        });
    }
    else if (req.url == '/sendmailunder') {
        var body = '';
        req.on('data', function(chunk) {
            body += chunk;
        });
        req.on('end', function() {
            if (body == '' || body == 'undefined') {
                fs.readFile('index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write('<div class="alert alert-danger">');
                    res.write('<strong>ERROR!</strong> If you made it this far stop...Wrong Username and Passwords');
                    res.write('</div>');
                    res.write('<p>Please Enter Your credentials. </p>');
                    res.write('<form name="login" method="post" action="/makesocialunderlogin" >');
                    res.write('Username: <input type="text" class="form-control" name = "Username" id="Username" placeholder="Username" required="required">');
                    res.write('Password: <input type="password" class="form-control" pattern=".{8,}"   required title="8 characters minimum" name = "Password" id="Password" placeholder="Password" required="required">');
                    res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button></form>');
                    res.write('</div>');
                    res.write('</body>');
                    res.write('</html>'); 

                    res.write('</div>');
                    footbot(res);
                    res.end();
                });
            }
            else {
                var title = body.split('title=')[1].split('&description')[0];
                var description = body.split('description=')[1].split('&who')[0];
                var who = body.split('who=')[1].split('&what')[0];
                var what = body.split('what=')[1].split('&when')[0];
                var when = body.split('when=')[1].split('&where')[0];
                var where = body.split('where=')[1].split('&purpose')[0];
                var purpose = body.split('purpose=')[1];
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                      user: 'kseayguva@gmail.com',
                      pass: 'avugyaesk'
                    }
                  });
                  var mailOptions = {
                    from: 'kseayguva@gmail.com',
                    to: "hr2ee@virginia.edu,",
                    subject: 'KSEA EVENT UPLOAD REQUEST',
                    text: 'Title: ' + title + '  description: ' + description + '  who: ' + who + '  what: ' + what + '  when: ' + when + '  where: ' + where + '  purpose: ' + purpose
                  };
                fs.readFile('index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write("<div class='alert alert-success'>");
                    res.write('<strong>Success!</strong> You Sent the request.');
                    res.write('</div>');
                    res.write('<div class="alert alert-warning" role="alert">');
                    res.write('If you have a picture for the event please send the picture now...');
                    res.write('</div>');
                    res.write('Please label it with the eventname and year included (ex. firstgeneralmeetingfall2018.jpg)');
                    res.write('<form action="/fileuploadsocialunder" method="post" enctype="multipart/form-data">');
                    res.write('<input type="file" name="filetoupload"><br>');
                    res.write('</br><button type="submit" value="Submit" class="btn btn-primary">Submit</button>');
                    res.write('</form>');

                    res.write('</div>');
                    footbot(res);
                    res.end();
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info.response);
                        }
                        });
                    });
                }
            });
        }
    else if (req.url == '/fileuploadsocialunder') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = '/root/KSEAatUVa/pics/events/' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                fs.readFile('index.html', function(err, data) {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                    res.write("<div class='alert alert-success'>");
                    res.write('<strong>Success!</strong> You have successfully uploaded the document.');
                    res.write('</div>');
                    res.end();
                });
                var transporter = nodemailer.createTransport({
                  service: 'Gmail',
                  auth: {
                    user: 'kseayguva@gmail.com',
                    pass: 'avugyaesk'
                  }
                });
                var mailOptions = {
                  from: 'kseayguva@gmail.com',
                  to: "hr2ee@virginia.edu,",
                  subject: 'KSEA EVENT UPLOAD REQUEST pic',
                  text: 'sending corresponding pic',
                  attachments:[{path: '/root/KSEAatUVa/pics/events/' + files.filetoupload.name }]
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                     console.log(error);
                    } else {
                     console.log('Emailatt sent: ' + info.response);
                    }
                });
            });
          });
        }
    else {
        fs.readFile('comingsoon.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } 
}
  else {
      var filePath = '.' + req.url;
      if (filePath == './')
          filePath = './index.html';
      var extname = path.extname(filePath);
      var contentType = 'text/html';
      switch (extname) {
          case '.js':
              contentType = 'text/javascript';
              break;
          case '.css':
              contentType = 'text/css';
              break;
          case '.json':
              contentType = 'application/json';
              break;
          case '.png':
              contentType = 'image/png';
              break;
          case '.jpg':
              contentType = 'image/jpg';
              break;
          case '.wav':
              contentType = 'audio/wav';
              break;
      }
  
      fs.readFile(filePath, function(error, content) {
          if (error) {
              if(error.code == 'ENOENT'){
                  fs.readFile('./404.html', function(error, content) {
                      res.writeHead(200, { 'Content-Type': contentType });
                      res.end(content, 'utf-8');
                  });
              }
              else {
                  res.writeHead(500);
                  res.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                  res.end();
              }
          }
          else {
              res.writeHead(200, { 'Content-Type': contentType });
              res.end(content, 'utf-8');
          }
      });
    }
     }).listen(2020, '0.0.0.0'); //connect to local ip
//}).listen(2020); //connect to localhost

function footbot (res) {
    res.write('<div class="page-footer font-small blue  small text-light bg-dark" role = "contentinfo" style="width:100%; bottom: 0; padding-top: 1em; padding-bottom: 1em">');
    res.write('  <div class="container" style = "text-align:center">');
    res.write('&copy; KSEA at University of Virginia');
    res.write('</br> Email: <a href="mailto:kseayguva@gmail.com">kseayguva@gmail.com</a></br>')
    res.write('  </div>');
    res.write('</div>');
  }