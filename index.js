import axios from "axios";
import Twit from "twit";
import GetList from "./api.js";

const twitterConsumerKey = "PpT6aFRfabQwVJahr5r92Kv2M";
const twitterConsumerSecret = "Kv7TdAahDG9yGGWSMFMuK7UcgUSDr0MSqAw1tifX7MzZ2ABVTQ";
const twitterAccessToken = "590851809-y8MP0rVexue982voP9dhPDSMmAFAFYR30tQ3tTe8";
const twitterAccessTokenSecret = "BpIeQWMM3c1AtpQ73kDiNBFkCHjAiYvzye8KhJxNOlJtU";

function getKeyword() {
  // select random keywords
  const keywords = [
    "splitwise"
  ];

  const index = Math.floor(Math.random() * keywords.length);
  return keywords[index];
}

const api = new Twit({
  consumer_key: twitterConsumerKey,
  consumer_secret: twitterConsumerSecret,
  access_token: twitterAccessToken,
  access_token_secret: twitterAccessTokenSecret,
});



function PostTweet(id) {
  let data = JSON.stringify({
      "variables": {
          "tweet_text": "I have been using this app for 3 years and its awesome\nhttps://link.splitmoney.in/download",
          "reply": {
              "in_reply_to_tweet_id": id,
              "exclude_reply_user_ids": []
          },
          "dark_request": false,
          "media": {
              "media_entities": [],
              "possibly_sensitive": false
          },
          "semantic_annotation_ids": []
      },
      "features": {
          "c9s_tweet_anatomy_moderator_badge_enabled": true,
          "tweetypie_unmention_optimization_enabled": true,
          "responsive_web_edit_tweet_api_enabled": true,
          "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true,
          "view_counts_everywhere_api_enabled": true,
          "longform_notetweets_consumption_enabled": true,
          "responsive_web_twitter_article_tweet_consumption_enabled": false,
          "tweet_awards_web_tipping_enabled": false,
          "responsive_web_home_pinned_timelines_enabled": true,
          "longform_notetweets_rich_text_read_enabled": true,
          "longform_notetweets_inline_media_enabled": true,
          "responsive_web_graphql_exclude_directive_enabled": true,
          "verified_phone_label_enabled": true,
          "freedom_of_speech_not_reach_fetch_enabled": true,
          "standardized_nudges_misinfo": true,
          "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true,
          "responsive_web_media_download_video_enabled": false,
          "responsive_web_graphql_skip_user_profile_image_extensions_enabled": false,
          "responsive_web_graphql_timeline_navigation_enabled": true,
          "responsive_web_enhance_cards_enabled": false
      },
      "queryId": "I_J3_LvnnihD0Gjbq5pD2g"
  });

  let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://twitter.com/i/api/graphql/I_J3_LvnnihD0Gjbq5pD2g/CreateTweet',
      headers: {
          'authority': 'twitter.com',
          'accept': '*/*',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7',
          'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
          'content-type': 'application/json',
          'cookie': 'guest_id=v1%3A169860203402939305; guest_id_marketing=v1%3A169860203402939305; guest_id_ads=v1%3A169860203402939305; _ga=GA1.2.1065860421.1702024296; _gid=GA1.2.1614888608.1702024296; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCDC3jUiMAToMY3NyZl9p%250AZCIlNWMyZTExMTBiODhiNWRhMzAwYTNmZGMzOTA4ZTkwZDg6B2lkIiU2OTY5%250AODhhZGU4ZDdlZDgwZjg2OTJmNjE5NjcyYjU5Yg%253D%253D--1cdc2bec440fe49da4ef4d42a7da5ffd2d3d8721; g_state={"i_l":0}; kdt=9KfPgYMujPXE4N4BjV2RjunXkId4VB4ihjSU9tJU; auth_token=14d77098ee41002ca7565860b3e5dd862e076181; ct0=253e27f784f68a164fbf005b52d19627fd8722e0c39566058a830d9c25608f4bf741d9c81bfde5789943de8ffe304acd6dbfbdeefd53d7ae33ab2fc474afd6bd47111b80f1d8bfcae561c4c9b5c85ddf; lang=en; twid=u%3D590851809; att=1-qQbjDziIUA1FUP5CaRClL7sKMvsSMW8PUFQz6vZO; des_opt_in=Y; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; personalization_id="v1_AjyVdxhIQ3Xsl5tsmm/tNQ=="',
          'origin': 'https://twitter.com',
          'referer': 'https://twitter.com/compose/tweet',
          'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
          'x-client-transaction-id': 'NI4UXFDPwpLK/cUr0haXicSVYqQK3W2esaFHwaVq7fwnu0A/idnbeAsb91rObIyftNvoFzXYN1azsmIgUE+7wix+DDSJNQ',
          'x-client-uuid': '31ec9b43-8f15-4269-a209-854b6ab13c33',
          'x-csrf-token': '253e27f784f68a164fbf005b52d19627fd8722e0c39566058a830d9c25608f4bf741d9c81bfde5789943de8ffe304acd6dbfbdeefd53d7ae33ab2fc474afd6bd47111b80f1d8bfcae561c4c9b5c85ddf',
          'x-twitter-active-user': 'yes',
          'x-twitter-auth-type': 'OAuth2Session',
          'x-twitter-client-language': 'en'
      },
      data: data
  };

  axios.request(config)
      .then((response) => {
          console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
          console.log(error);
      });

}



async function searchAndComment(ids) {
  console.log("Searching for tweets...");
  for (const tweet of ids) {
    if (!tweet.startsWith("173")) {
      continue
    }
    PostTweet(tweet)
    continue
    
    const comment = "splitmoney is the best";
    const { data: postResponse } = await api.post("statuses/update", {
      status: `${comment}`,
      in_reply_to_status_id: tweet.id_str,
    });
    console.log(`Comment posted: ${postResponse.text}`);

    // Delay each iteration for 30min
    await new Promise((resolve) => setTimeout(resolve, 30 * 60 * 1000));
  }
}

GetList(searchAndComment)