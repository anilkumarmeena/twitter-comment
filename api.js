import axios from "axios";


export default function GetList(cb) {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://twitter.com/i/api/graphql/lMv4QkY3vpla38q9tiD-tA/SearchTimeline?variables=%7B%22rawQuery%22%3A%22splitwise%22%2C%22count%22%3A20%2C%22cursor%22%3A%22DAACCgACGA1lP1qAJxAKAAMYDWU_Wn7HgAgABAAAAAILAAUAAAO8QUFBQUFDNk5zd2dBQUFDdkFBQUFBQUFBRlh3QUFBQUhBQUFBVmdFQUJDSVVNd1JFQmdNQkFRQWdBa3N3Z0FCQ0NOU0ZZZ0FBb0JKZ29BUUVLQWhEQW9DQVFBYUJDQVJBeUZRQUFBRUZFS0FKUkJRQUJTQ0lDRUFEQUtoUUFDRXFDQ0pDQndKQUFSWUdCQUFKVFlzQVNoaVVBRWdCQ3dCd1FJQkVnUVJnRUJFd29nSUlSTlFJUUtoQkFCaFFJQWhXSVJnQU5RZ0JRQUNnd2dnRkFGQlFDQWdBRE13b21DZ0dFQTBnQkpCSWlDSUlvZ01RQmdBUUNBQlFpUUFVQUVCQUVBd3FCQU1DQklCQUNBQUFDVUlBWWdDc0kwSHlHQkVBQkZJQUVBVkNFSkFZVkFjbEFnQWxBRkFFQUJGQVFZeUFDQUFnQ0FBQUJRZ1lIUWlJQW9BRUxMWUZBREFnaU1VaXpJSUNnTndIY3hIQW9nRWhDYnNHQW9RZ2pvQ0NFZ0FnVUFBQlRRVUFHQUJ4SmtBWXdBSWlBZ0hTQXdBeEFnWUFRb1JSQUFJSElBbXBBaUFRVW9BQkVBZ1FBQUJrU1VBUURZQ2lDQUlPRGdLQkRFUUV4QVNRRURLWXdTS0FBQUJFZ0FBRUFBQ0JCSWdnQUFFQkFCQUFBSUFBRUNFUUFnQVFRSUJna0lCSURBREFnS0RnQVFrSWdBaEkwQUFRWUlDU1JRZ0ZDdEFCZ0FLaVVBUUFBS0VFQUJ4RUlBQVFBUm5BRUNtS2dJQ0E0QWdFSVJBbVJTb0FBT0lPR1FBQ0FBQlF6b0FJSURFQUFTQUppZEFCQUVBUUNBVkdCUUZnNEVRWXdRQlNBSkZSZ0FJSXdBeUNKUVVEZ0FBQUFFQVRFd2lBVXNBQkFBZ0FrVUFnQUhtb01JUVJnS0FJQUlBb0lrSVFKQWdJQW9BSUVvSUNSZ0FRa1FBQUtnVW1rVENTZ0FNb0twQktBV0VpRkdLUUpJaEFRQUJJRUFFQUFTQ0FJR0FBQXNCQ2FtQ0lDQWpDTEFZY0VKSUJJaFFDS2lBSkFCQUFBa1ZBaHloQkVBQUJFQlZSSU1BeUFGa0FGQWlJTUFRQXdJa2pBQktRVUVLWUVFQWxsQUFDeEVnaUVDQUFpQUFBbUVEZ0FpaEFJS1VBRUFJUU5Ea1NBZ0FBZ0FnUUlCbmdHQUFGRVFBSUlSQUdFQWdscVJJQW9JQVFBRUlBYlVBZ0lRSUlBSWhYQUVaUUFTQUJDQ0FBQUVRRFJKQT0IAAYAAAAACAAHAAAABwwACAoAARgEStEKlrHrAAAA%22%2C%22querySource%22%3A%22typed_query%22%2C%22product%22%3A%22Top%22%7D&features=%7B%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Atrue%2C%22responsive_web_home_pinned_timelines_enabled%22%3Atrue%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Afalse%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22responsive_web_media_download_video_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D',
        headers: {
            'authority': 'twitter.com',
            'accept': '*/*',
            'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8,fr;q=0.7',
            'authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA',
            'content-type': 'application/json',
            'cookie': 'guest_id=v1%3A169860203402939305; guest_id_marketing=v1%3A169860203402939305; guest_id_ads=v1%3A169860203402939305; _ga=GA1.2.1065860421.1702024296; _gid=GA1.2.1614888608.1702024296; _twitter_sess=BAh7CSIKZmxhc2hJQzonQWN0aW9uQ29udHJvbGxlcjo6Rmxhc2g6OkZsYXNo%250ASGFzaHsABjoKQHVzZWR7ADoPY3JlYXRlZF9hdGwrCDC3jUiMAToMY3NyZl9p%250AZCIlNWMyZTExMTBiODhiNWRhMzAwYTNmZGMzOTA4ZTkwZDg6B2lkIiU2OTY5%250AODhhZGU4ZDdlZDgwZjg2OTJmNjE5NjcyYjU5Yg%253D%253D--1cdc2bec440fe49da4ef4d42a7da5ffd2d3d8721; g_state={"i_l":0}; kdt=9KfPgYMujPXE4N4BjV2RjunXkId4VB4ihjSU9tJU; auth_token=14d77098ee41002ca7565860b3e5dd862e076181; ct0=253e27f784f68a164fbf005b52d19627fd8722e0c39566058a830d9c25608f4bf741d9c81bfde5789943de8ffe304acd6dbfbdeefd53d7ae33ab2fc474afd6bd47111b80f1d8bfcae561c4c9b5c85ddf; lang=en; twid=u%3D590851809; att=1-qQbjDziIUA1FUP5CaRClL7sKMvsSMW8PUFQz6vZO; des_opt_in=Y; external_referer=padhuUp37zjgzgv1mFWxJ12Ozwit7owX|0|8e8t2xd8A2w%3D; personalization_id="v1_AjyVdxhIQ3Xsl5tsmm/tNQ=="',
            'referer': 'https://twitter.com/search?q=splitwise&src=typed_query&f=top',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'x-client-transaction-id': 'ecNZER2Cj9+HsIhmn1vaxInYL+lHkCDT/OwKjOgnoLFq9g1yxJSWNUZWuheDIcHS+XmYWngr3QVFKU5LpxR5EPqee32UeA',
            'x-client-uuid': '31ec9b43-8f15-4269-a209-854b6ab13c33',
            'x-csrf-token': '253e27f784f68a164fbf005b52d19627fd8722e0c39566058a830d9c25608f4bf741d9c81bfde5789943de8ffe304acd6dbfbdeefd53d7ae33ab2fc474afd6bd47111b80f1d8bfcae561c4c9b5c85ddf',
            'x-twitter-active-user': 'yes',
            'x-twitter-auth-type': 'OAuth2Session',
            'x-twitter-client-language': 'en'
        }
    };

    axios.request(config)
        .then((response) => {
            process(response.data, cb)
        })
        .catch((error) => {
            console.log(error);
        });



}

function process(result, cb) {
    let entries = result.data.search_by_raw_query.search_timeline.timeline.instructions[0].entries
    let ids = []
    entries.forEach(element => {
        ids.push(element.entryId.substring("tweet-".length))
    });
    cb(ids)
}

