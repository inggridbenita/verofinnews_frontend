const getNewsDetail = async (newsId) => {
  let response = await fetch(`http://127.0.0.1:5000/get_news_detail?id=${newsId}`);
  response = await response.text();
  const news = JSON.parse(response);
  
  let content = news["content"];
  content = content.replaceAll("\n", "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");

  document.getElementById("newsHeader").setAttribute("src", news["poster"]);
  document.getElementById("title").innerHTML = news["title"];
  document.getElementById("date").innerHTML = news["date"];
  document.getElementById("newsContent").innerHTML = content;
}

const init = () => {
  const news_id = getURLParameter("id");
  getNewsDetail(news_id);
}

init();