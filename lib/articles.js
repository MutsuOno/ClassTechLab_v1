import fetch from "node-fetch";
import dummy_data from "../dummy-data/dummy_data";

const base_url =
  "https://198182tj3g.execute-api.ap-northeast-1.amazonaws.com/edbaseapi/v1";

export async function getAllArticle() {
  // 本番用
  const res = await fetch(base_url);
  const jsonObject = await res.json();

  // テスト用
  // const jsonObject = dummy_data;

  console.log(jsonObject[0].field.name);

  return jsonObject;
}

export function getArticlePaths() {
  const jsonObject = dummy_data;

  return jsonObject.map((item) => {
    return {
      params: {
        id: item.field.id,
      },
    };
  });
}

export async function getArticle(search_id) {
  // const res = await fetch(base_url);
  // const jsonObject = await res.json();

  const jsonObject = dummy_data;

  const data = jsonObject.filter(function (item, index) {
    if (item.field.id === search_id) return true;
  });

  return data[0];
}

export async function getSearchArticles(keyword, category, school_type) {
  var url = base_url + "/search?q=" + keyword;

  if (category != "すべて") {
    url = url + "&category=" + category;
  }

  if (school_type != "すべて") {
    url = url + "&school=" + school_type;
  }
  console.log(url);

  const res = await fetch(url);

  const jsonObject = await res.json();
  // const jsonObject = dummy_data;

  return jsonObject;
}
