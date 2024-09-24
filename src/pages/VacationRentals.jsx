import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const sample = {
    "data": [
        {
            "location_id": "8712073",
            "name": "Atoll Transfer",
            "latitude": "4.176831",
            "longitude": "73.511345",
            "num_reviews": "272",
            "timezone": "Indian/Maldiv298571es",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/95/97/7a/vip-transfer-of-artist.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/95/97/7a/vip-transfer-of-artist.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/95/97/7a/vip-transfer-of-artist.jpg",
                        "height": "932"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/1c/95/97/7a/vip-transfer-of-artist.jpg",
                        "height": "745"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/95/97/7a/vip-transfer-of-artist.jpg",
                        "height": "182"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2021-01-29T17:02:35-0500",
                "caption": "VIP transfer of artist to our speedboats 2021",
                "id": "479565690",
                "helpful_votes": "1",
                "published_date": "2021-01-29T17:02:35-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.5089306831359863",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "2",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#2 of 24 things to do in Male",
            "subcategory_ranking": "#2 of 24 things to do in Male",
            "ranking": "#2 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "4.5",
            "is_closed": false,
            "open_now_text": "Open Now",
            "is_long_closed": false,
            "description": "We are the first online Transfer booking provider based in Maldives. As we are connected partner to all Transfer service provider in Maldives. “No one knows Maldives Transfer bette, Due to COVID 19 all boat service subject to change the timing and cancellations.",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d8712073-Reviews-Atoll_Transfer-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d8712073-Atoll_Transfer-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "59",
                    "name": "Transportation"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 797-3501",
            "website": "http://www.atolltransfer.com",
            "email": "info@atolltransfer.com",
            "address_obj": {
                "street1": "Lily Magu",
                "street2": "G.Noomaraage , 2nd Floor",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20066"
            },
            "address": "Lily Magu G.Noomaraage , 2nd Floor, Male 20066",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 540,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 540,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 540,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 540,
                            "close_time": 1020
                        }
                    ],
                    [
                        {
                            "open_time": 540,
                            "close_time": 1020
                        }
                    ],
                    [],
                    [
                        {
                            "open_time": 540,
                            "close_time": 1020
                        }
                    ]
                ],
                "timezone": "Indian/Maldives"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "56",
                    "name": "Ferries"
                }
            ]
        },
        {
            "location_id": "460006",
            "name": "Male Fish Market",
            "latitude": "4.180172",
            "longitude": "73.5097",
            "num_reviews": "642",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/01/33/46/fe/male-maldives.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/01/33/46/fe/male-maldives.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "604",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/01/33/46/fe/male-maldives.jpg",
                        "height": "403"
                    },
                    "large": {
                        "width": "604",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/01/33/46/fe/male-maldives.jpg",
                        "height": "403"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/01/33/46/fe/male-maldives.jpg",
                        "height": "366"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2009-07-28T20:16:08-0400",
                "caption": "Male, Maldives",
                "id": "20137726",
                "helpful_votes": "23",
                "published_date": "2009-07-28T20:15:54-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.451812505722046",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "4",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#4 of 24 things to do in Male",
            "subcategory_ranking": "#4 of 24 things to do in Male",
            "ranking": "#4 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d460006-Reviews-Male_Fish_Market-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d460006-Male_Fish_Market-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "",
                "street2": "",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": ""
            },
            "address": "Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "142",
                    "name": "Flea & Street Markets"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=460006&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.34",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=460006&clt=TM&from=api&nt=true",
                        "price": "$115.00",
                        "rounded_up_price": "$115",
                        "offer_type": "",
                        "title": "Full Day Male' Walking Tour",
                        "product_code": "9221P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/75/b1/24.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FPrivate-Half-Day-Local-Experience-of-Male%2Fd4673-36070P9%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=2d83ffc93b4a2d43e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=460006&clt=TM&from=api&nt=true",
                        "price": "$33.60",
                        "rounded_up_price": "$34",
                        "offer_type": "",
                        "title": "Private Half-Day Local Experience of Malé【English/日本語】",
                        "product_code": "36070P9",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/7a.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-tour-with-a-Spanish-speaking-guide-4h%2Fd4673-234122P3%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=a0250ef50937ddae9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=460006&clt=TM&from=api&nt=true",
                        "price": "$40.00",
                        "rounded_up_price": "$40",
                        "offer_type": "",
                        "title": "Male Small Group City Tour",
                        "product_code": "234122P3",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/08/c4.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-guided-walking-tour-4h%2Fd4673-234122P2%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=90b017600a3074657&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=460006&clt=TM&from=api&nt=true",
                        "price": "$40.33",
                        "rounded_up_price": "$41",
                        "offer_type": "",
                        "title": "Male' guided walking tour - 3h",
                        "product_code": "234122P2",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/09/11.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2F5-Hours-Male-City-Tour-with-Local-Guide%2Fd4673-453426P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=568ea57f56e040c74&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=460006&clt=TM&from=api&nt=true",
                        "price": "$55.00",
                        "rounded_up_price": "$55",
                        "offer_type": "",
                        "title": "3 Hour Male' City Tour with Local Guide",
                        "product_code": "453426P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/12/41/d0/31.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "460007",
            "name": "Male Local Market",
            "latitude": "4.180105",
            "longitude": "73.509895",
            "num_reviews": "410",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/18/13/23/20/male-local-market.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/18/13/23/20/male-local-market.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "992",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/18/13/23/20/male-local-market.jpg",
                        "height": "744"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/18/13/23/20/male-local-market.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/18/13/23/20/male-local-market.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2019-06-26T07:38:49-0400",
                "caption": "",
                "id": "403907360",
                "helpful_votes": "2",
                "published_date": "2019-06-26T07:38:49-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.357243061065674",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "5",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#5 of 24 things to do in Male",
            "subcategory_ranking": "#5 of 24 things to do in Male",
            "ranking": "#5 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d460007-Reviews-Male_Local_Market-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d460007-Male_Local_Market-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+94 11 2 693747",
            "website": "http://srilankatouritineraries.com",
            "address_obj": {
                "street1": "",
                "street2": "",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": ""
            },
            "address": "Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "142",
                    "name": "Flea & Street Markets"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=460007&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.34",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=460007&clt=TM&from=api&nt=true",
                        "price": "$115.00",
                        "rounded_up_price": "$115",
                        "offer_type": "",
                        "title": "Full Day Male' Walking Tour",
                        "product_code": "9221P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/75/b1/24.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FPrivate-Half-Day-Local-Experience-of-Male%2Fd4673-36070P9%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=2d83ffc93b4a2d43e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=460007&clt=TM&from=api&nt=true",
                        "price": "$33.60",
                        "rounded_up_price": "$34",
                        "offer_type": "",
                        "title": "Private Half-Day Local Experience of Malé【English/日本語】",
                        "product_code": "36070P9",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/7a.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2F5-Hours-Male-City-Tour-with-Local-Guide%2Fd4673-453426P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=568ea57f56e040c74&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=460007&clt=TM&from=api&nt=true",
                        "price": "$55.00",
                        "rounded_up_price": "$55",
                        "offer_type": "",
                        "title": "3 Hour Male' City Tour with Local Guide",
                        "product_code": "453426P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/12/41/d0/31.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "3968164",
            "name": "Grand Friday Mosque",
            "latitude": "4.17847",
            "longitude": "73.51096",
            "num_reviews": "322",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/0a/21/be/43/grand-friday-mosque.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0a/21/be/43/grand-friday-mosque.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "800",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/21/be/43/grand-friday-mosque.jpg",
                        "height": "546"
                    },
                    "large": {
                        "width": "800",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0a/21/be/43/grand-friday-mosque.jpg",
                        "height": "546"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0a/21/be/43/grand-friday-mosque.jpg",
                        "height": "375"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2016-01-24T05:19:08-0500",
                "caption": "Мечеть Великая Пятница",
                "id": "169983555",
                "helpful_votes": "2",
                "published_date": "2016-01-24T05:19:08-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.497537612915039",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "3",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#3 of 24 things to do in Male",
            "subcategory_ranking": "#3 of 24 things to do in Male",
            "ranking": "#3 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d3968164-Reviews-Grand_Friday_Mosque-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d3968164-Grand_Friday_Mosque-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "website": "http://islamicaffairs.gov.mv",
            "email": "info@islamicaffairs.gov.mv",
            "address_obj": {
                "street1": null,
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=3968164&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.34",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=3968164&clt=TM&from=api&nt=true",
                        "price": "$115.00",
                        "rounded_up_price": "$115",
                        "offer_type": "",
                        "title": "Full Day Male' Walking Tour",
                        "product_code": "9221P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/75/b1/24.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FPrivate-Half-Day-Local-Experience-of-Male%2Fd4673-36070P9%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=2d83ffc93b4a2d43e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=3968164&clt=TM&from=api&nt=true",
                        "price": "$33.60",
                        "rounded_up_price": "$34",
                        "offer_type": "",
                        "title": "Private Half-Day Local Experience of Malé【English/日本語】",
                        "product_code": "36070P9",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/7a.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-tour-with-a-Spanish-speaking-guide-4h%2Fd4673-234122P3%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=a0250ef50937ddae9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=3968164&clt=TM&from=api&nt=true",
                        "price": "$40.00",
                        "rounded_up_price": "$40",
                        "offer_type": "",
                        "title": "Male Small Group City Tour",
                        "product_code": "234122P3",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/08/c4.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-guided-walking-tour-4h%2Fd4673-234122P2%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=90b017600a3074657&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=3968164&clt=TM&from=api&nt=true",
                        "price": "$40.33",
                        "rounded_up_price": "$41",
                        "offer_type": "",
                        "title": "Male' guided walking tour - 3h",
                        "product_code": "234122P2",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/09/11.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-City-Walking-Tour%2Fd4673-363348P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=62126cfa2cb32d31d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=5&cnt=1&geo=3968164&clt=TM&from=api&nt=true",
                        "price": "$48.00",
                        "rounded_up_price": "$48",
                        "offer_type": "",
                        "title": "Private Male City Walking Tour with optional Vilimale tour",
                        "product_code": "363348P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/6f/4c/b5.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "1068503",
            "name": "Hukuru Miskiiy Mosque",
            "latitude": "4.17791",
            "longitude": "73.51236",
            "num_reviews": "267",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/0f/14/9a/61/hukuru-miskiiy-old-friday.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0f/14/9a/61/hukuru-miskiiy-old-friday.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "6144",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0f/14/9a/61/hukuru-miskiiy-old-friday.jpg",
                        "height": "3072"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/0f/14/9a/61/hukuru-miskiiy-old-friday.jpg",
                        "height": "512"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0f/14/9a/61/hukuru-miskiiy-old-friday.jpg",
                        "height": "275"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2017-04-25T00:36:49-0400",
                "caption": "Hukuru Miskiiy (Old Friday Mosque)",
                "id": "253008481",
                "helpful_votes": "19",
                "published_date": "2017-04-25T00:36:49-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.6120479106903076",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "1",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#1 of 24 things to do in Male",
            "subcategory_ranking": "#1 of 24 things to do in Male",
            "ranking": "#1 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d1068503-Reviews-Hukuru_Miskiiy_Mosque-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d1068503-Hukuru_Miskiiy_Mosque-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 332-3228",
            "website": "http://www.visitmaldives.com/en/places/hukuru-miskiiy",
            "email": "info@visitmaldives.com",
            "address_obj": {
                "street1": "Henveiru",
                "street2": "",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": ""
            },
            "address": "Henveiru, Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "3",
                    "name": "Architectural Buildings"
                },
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=1068503&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.34",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=1068503&clt=TM&from=api&nt=true",
                        "price": "$115.00",
                        "rounded_up_price": "$115",
                        "offer_type": "",
                        "title": "Full Day Male' Walking Tour",
                        "product_code": "9221P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/75/b1/24.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FPrivate-Half-Day-Local-Experience-of-Male%2Fd4673-36070P9%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=2d83ffc93b4a2d43e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=1068503&clt=TM&from=api&nt=true",
                        "price": "$33.60",
                        "rounded_up_price": "$34",
                        "offer_type": "",
                        "title": "Private Half-Day Local Experience of Malé【English/日本語】",
                        "product_code": "36070P9",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/7a.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-City-Walking-Tour%2Fd4673-363348P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=62126cfa2cb32d31d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=1068503&clt=TM&from=api&nt=true",
                        "price": "$48.00",
                        "rounded_up_price": "$48",
                        "offer_type": "",
                        "title": "Private Male City Walking Tour with optional Vilimale tour",
                        "product_code": "363348P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/6f/4c/b5.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2F5-Hours-Male-City-Tour-with-Local-Guide%2Fd4673-453426P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=568ea57f56e040c74&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=1068503&clt=TM&from=api&nt=true",
                        "price": "$55.00",
                        "rounded_up_price": "$55",
                        "offer_type": "",
                        "title": "3 Hour Male' City Tour with Local Guide",
                        "product_code": "453426P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/12/41/d0/31.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "1068509",
            "name": "National Museum",
            "latitude": "4.177174",
            "longitude": "73.509895",
            "num_reviews": "331",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/07/eb/af/5b/national-museum.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/07/eb/af/5b/national-museum.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/07/eb/af/5b/national-museum.jpg",
                        "height": "768"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/07/eb/af/5b/national-museum.jpg",
                        "height": "412"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/07/eb/af/5b/national-museum.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2015-05-20T02:16:35-0400",
                "caption": "Entry to the Heritage Department building",
                "id": "132886363",
                "helpful_votes": "2",
                "published_date": "2015-05-20T06:12:07-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.9134702682495117",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "13",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#13 of 24 things to do in Male",
            "subcategory_ranking": "#13 of 24 things to do in Male",
            "ranking": "#13 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "open_now_text": "Open Now",
            "is_long_closed": false,
            "description": "Sun-Thu 08:00 - 18:00",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d1068509-Reviews-National_Museum-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d1068509-National_Museum-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "49",
                    "name": "Museums"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 332-3206",
            "address_obj": {
                "street1": "Chaandhanee Magu",
                "street2": "",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": ""
            },
            "address": "Chaandhanee Magu, Male",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 600,
                            "close_time": 1080
                        }
                    ],
                    [
                        {
                            "open_time": 615,
                            "close_time": 930
                        }
                    ],
                    [
                        {
                            "open_time": 615,
                            "close_time": 930
                        }
                    ],
                    [
                        {
                            "open_time": 615,
                            "close_time": 930
                        }
                    ],
                    [
                        {
                            "open_time": 615,
                            "close_time": 930
                        }
                    ],
                    [],
                    []
                ],
                "timezone": "Indian/Maldives"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "161",
                    "name": "Specialty Museums"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=1068509&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.34",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=1068509&clt=TM&from=api&nt=true",
                        "price": "$115.00",
                        "rounded_up_price": "$115",
                        "offer_type": "",
                        "title": "Full Day Male' Walking Tour",
                        "product_code": "9221P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/75/b1/24.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FPrivate-Half-Day-Local-Experience-of-Male%2Fd4673-36070P9%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=2d83ffc93b4a2d43e&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=1068509&clt=TM&from=api&nt=true",
                        "price": "$33.60",
                        "rounded_up_price": "$34",
                        "offer_type": "",
                        "title": "Private Half-Day Local Experience of Malé【English/日本語】",
                        "product_code": "36070P9",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/7a.jpg",
                        "description": null,
                        "primary_category": "Historical & Heritage Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-City-Walking-Tour%2Fd4673-363348P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=62126cfa2cb32d31d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=1068509&clt=TM&from=api&nt=true",
                        "price": "$48.00",
                        "rounded_up_price": "$48",
                        "offer_type": "",
                        "title": "Private Male City Walking Tour with optional Vilimale tour",
                        "product_code": "363348P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/6f/4c/b5.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2F5-Hours-Male-City-Tour-with-Local-Guide%2Fd4673-453426P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=568ea57f56e040c74&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=1068509&clt=TM&from=api&nt=true",
                        "price": "$55.00",
                        "rounded_up_price": "$55",
                        "offer_type": "",
                        "title": "3 Hour Male' City Tour with Local Guide",
                        "product_code": "453426P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/12/41/d0/31.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "298571",
            "ad_position": "inline1",
            "ad_size": "8X8",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "detail": "0",
            "page_type": "attractions",
            "mob_ptype": "app_attractions"
        },
        {
            "location_id": "6885322",
            "name": "Artificial Beach",
            "latitude": "4.17925",
            "longitude": "73.50673",
            "num_reviews": "261",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/07/b1/4c/e0/artificial-beach.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/07/b1/4c/e0/artificial-beach.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2560",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/07/b1/4c/e0/artificial-beach.jpg",
                        "height": "1706"
                    },
                    "large": {
                        "width": "2560",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-b/2560x500/07/b1/4c/e0/artificial-beach.jpg",
                        "height": "500"
                    },
                    "medium": {
                        "width": "320",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-c/320x120/07/b1/4c/e0/artificial-beach.jpg",
                        "height": "213"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2015-04-14T00:38:58-0400",
                "caption": "Bãi biển nhân tạo",
                "id": "129060064",
                "helpful_votes": "71",
                "published_date": "2015-04-16T06:29:26-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.9551901817321777",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "11",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#11 of 24 things to do in Male",
            "subcategory_ranking": "#11 of 24 things to do in Male",
            "ranking": "#11 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d6885322-Reviews-Artificial_Beach-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d6885322-Artificial_Beach-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "57",
                    "name": "Nature & Parks"
                },
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 330-7800",
            "website": "http://www.facebook.com/Artificial-Beach-543567059048998",
            "address_obj": {
                "street1": "Boduthakurufaanu Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20082"
            },
            "address": "Boduthakurufaanu Magu, Male 20082",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "52",
                    "name": "Beaches"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-Private-Tour-by-Chartered-Vehicle-and-Local-Guide%2Fd4673-36070P12%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=e1ed1e62c3c34da2f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=6885322&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$2.80",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-Private-Tour-by-Chartered-Vehicle-and-Local-Guide%2Fd4673-36070P12%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=e1ed1e62c3c34da2f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=6885322&clt=TM&from=api&nt=true",
                        "price": "$280.00",
                        "rounded_up_price": "$280",
                        "offer_type": "",
                        "title": "【Airport pickup/drop off Option】Male` guided Tour | Chartered car",
                        "product_code": "36070P12",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/6c.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            }
        },
        {
            "location_id": "8066420",
            "name": "Sultan Park",
            "latitude": "4.177959",
            "longitude": "73.51098",
            "num_reviews": "127",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/08/21/9d/ef/sultan-park.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/08/21/9d/ef/sultan-park.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "640",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/08/21/9d/ef/sultan-park.jpg",
                        "height": "427"
                    },
                    "large": {
                        "width": "640",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/08/21/9d/ef/sultan-park.jpg",
                        "height": "427"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/08/21/9d/ef/sultan-park.jpg",
                        "height": "366"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2015-06-18T22:18:36-0400",
                "caption": "Small park in Maldives",
                "id": "136420847",
                "helpful_votes": "7",
                "published_date": "2015-06-19T06:36:17-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.9369375705718994",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "12",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#12 of 24 things to do in Male",
            "subcategory_ranking": "#12 of 24 things to do in Male",
            "ranking": "#12 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "open_now_text": "Open Now",
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d8066420-Reviews-Sultan_Park-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d8066420-Sultan_Park-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "57",
                    "name": "Nature & Parks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 300-4300",
            "website": "http://www.facebook.com/RasraniBageecha",
            "address_obj": {
                "street1": null,
                "street2": "opposite the Islamic Centre on Medhuziyaaraiy Magu",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "opposite the Islamic Centre on Medhuziyaaraiy Magu, Male",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ]
                ],
                "timezone": "Indian/Maldives"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "70",
                    "name": "Parks"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=8066420&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.40",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FFull-Day-Male-Walking-Tour%2Fd4673-9221P8%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=9dc0d9ee6975e1fea&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=8066420&clt=TM&from=api&nt=true",
                        "price": "$115.00",
                        "rounded_up_price": "$115",
                        "offer_type": "",
                        "title": "Full Day Male' Walking Tour",
                        "product_code": "9221P8",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/75/b1/24.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-tour-with-a-Spanish-speaking-guide-4h%2Fd4673-234122P3%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=a0250ef50937ddae9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=8066420&clt=TM&from=api&nt=true",
                        "price": "$40.00",
                        "rounded_up_price": "$40",
                        "offer_type": "",
                        "title": "Male Small Group City Tour",
                        "product_code": "234122P3",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/08/c4.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-guided-walking-tour-4h%2Fd4673-234122P2%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=90b017600a3074657&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=3&cnt=1&geo=8066420&clt=TM&from=api&nt=true",
                        "price": "$40.33",
                        "rounded_up_price": "$41",
                        "offer_type": "",
                        "title": "Male' guided walking tour - 3h",
                        "product_code": "234122P2",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/09/11.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-City-Walking-Tour%2Fd4673-363348P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=62126cfa2cb32d31d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=4&cnt=1&geo=8066420&clt=TM&from=api&nt=true",
                        "price": "$48.00",
                        "rounded_up_price": "$48",
                        "offer_type": "",
                        "title": "Private Male City Walking Tour with optional Vilimale tour",
                        "product_code": "363348P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/6f/4c/b5.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "15611079",
            "name": "Sinamale Bridge",
            "num_reviews": "37",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/e9/e5/91/sinamale-bridge.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/e9/e5/91/sinamale-bridge.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/e5/91/sinamale-bridge.jpg",
                        "height": "343"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/e5/91/sinamale-bridge.jpg",
                        "height": "343"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/e9/e5/91/sinamale-bridge.jpg",
                        "height": "343"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2018-12-31T10:29:26-0500",
                "caption": "Sinamale bridge",
                "id": "367650193",
                "helpful_votes": "6",
                "published_date": "2018-12-31T10:29:26-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.9920878410339355",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "9",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#9 of 24 things to do in Male",
            "subcategory_ranking": "#9 of 24 things to do in Male",
            "ranking": "#9 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d15611079-Reviews-Sinamale_Bridge-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d15611079-Sinamale_Bridge-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": null,
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "163",
                    "name": "Points of Interest & Landmarks"
                },
                {
                    "key": "5",
                    "name": "Bridges"
                }
            ]
        },
        {
            "location_id": "460004",
            "name": "Mulee Aage",
            "latitude": "4.177703",
            "longitude": "73.512375",
            "num_reviews": "132",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/07/dd/1d/df/mulee-aage.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/07/dd/1d/df/mulee-aage.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2000",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/07/dd/1d/df/mulee-aage.jpg",
                        "height": "1500"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/07/dd/1d/df/mulee-aage.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/07/dd/1d/df/mulee-aage.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2015-05-11T05:59:18-0400",
                "caption": "View from Main Gate",
                "id": "131931615",
                "helpful_votes": "1",
                "published_date": "2015-05-11T05:59:18-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.0686771869659424",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "6",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#6 of 24 things to do in Male",
            "subcategory_ranking": "#6 of 24 things to do in Male",
            "ranking": "#6 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d460004-Reviews-Mulee_Aage-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d460004-Mulee_Aage-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "",
                "street2": "",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": ""
            },
            "address": "Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "17",
                    "name": "Historic Sites"
                }
            ]
        },
        {
            "location_id": "6878319",
            "name": "Tsunami Monument",
            "latitude": "4.17925",
            "longitude": "73.50673",
            "num_reviews": "134",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/0e/af/19/85/tsunami-monument.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/af/19/85/tsunami-monument.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "2048",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/af/19/85/tsunami-monument.jpg",
                        "height": "1536"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/af/19/85/tsunami-monument.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/af/19/85/tsunami-monument.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2017-03-16T15:00:59-0400",
                "caption": "Tsunami Monument",
                "id": "246356357",
                "helpful_votes": "2",
                "published_date": "2017-03-16T15:00:59-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.000911235809326",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "8",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#8 of 24 things to do in Male",
            "subcategory_ranking": "#8 of 24 things to do in Male",
            "ranking": "#8 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d6878319-Reviews-Tsunami_Monument-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d6878319-Tsunami_Monument-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Boduthakurufaanu Street",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "Boduthakurufaanu Street, Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "163",
                    "name": "Points of Interest & Landmarks"
                },
                {
                    "key": "26",
                    "name": "Monuments & Statues"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-Private-Tour-by-Chartered-Vehicle-and-Local-Guide%2Fd4673-36070P12%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=e1ed1e62c3c34da2f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=6878319&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$2.80",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-Private-Tour-by-Chartered-Vehicle-and-Local-Guide%2Fd4673-36070P12%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=e1ed1e62c3c34da2f&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=6878319&clt=TM&from=api&nt=true",
                        "price": "$280.00",
                        "rounded_up_price": "$280",
                        "offer_type": "",
                        "title": "【Airport pickup/drop off Option】Male` guided Tour | Chartered car",
                        "product_code": "36070P12",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/06/71/16/6c.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            }
        },
        {
            "location_id": "12871214",
            "name": "Victory Monument",
            "latitude": "4.178039",
            "longitude": "73.51096",
            "num_reviews": "69",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/18/13/26/2e/victory-monument.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/18/13/26/2e/victory-monument.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "848",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/18/13/26/2e/victory-monument.jpg",
                        "height": "668"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/18/13/26/2e/victory-monument.jpg",
                        "height": "433"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/18/13/26/2e/victory-monument.jpg",
                        "height": "197"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2019-06-26T07:44:09-0400",
                "caption": "",
                "id": "403908142",
                "helpful_votes": "0",
                "published_date": "2019-06-26T07:44:09-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "3.0212996006011963",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "7",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#7 of 24 things to do in Male",
            "subcategory_ranking": "#7 of 24 things to do in Male",
            "ranking": "#7 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d12871214-Reviews-Victory_Monument-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d12871214-Victory_Monument-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": null,
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "26",
                    "name": "Monuments & Statues"
                }
            ]
        },
        {
            "location_id": "14108878",
            "name": "Rasfannu",
            "latitude": "4.17925",
            "longitude": "73.50673",
            "num_reviews": "17",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/13/19/94/d1/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/13/19/94/d1/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "640",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/13/19/94/d1/caption.jpg",
                        "height": "480"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/13/19/94/d1/caption.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/13/19/94/d1/caption.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2018-05-28T21:59:10-0400",
                "caption": "釣りができるテラス",
                "id": "320443601",
                "helpful_votes": "3",
                "published_date": "2018-05-28T21:59:10-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.8349251747131348",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "15",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#15 of 24 things to do in Male",
            "subcategory_ranking": "#15 of 24 things to do in Male",
            "ranking": "#15 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "4.0",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d14108878-Reviews-Rasfannu-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d14108878-Rasfannu-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "57",
                    "name": "Nature & Parks"
                },
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "website": "https://www.facebook.com/RasfannuBeach/",
            "address_obj": {
                "street1": "Boduthakurufaanu Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20006"
            },
            "address": "Boduthakurufaanu Magu, Male 20006",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "52",
                    "name": "Beaches"
                }
            ]
        },
        {
            "location_id": "12667137",
            "name": "Jumhooree Maidhaan",
            "latitude": "4.17925",
            "longitude": "73.50673",
            "num_reviews": "56",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/18/13/28/bb/jumhooree-maidhaan.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/18/13/28/bb/jumhooree-maidhaan.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "956",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/18/13/28/bb/jumhooree-maidhaan.jpg",
                        "height": "716"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/18/13/28/bb/jumhooree-maidhaan.jpg",
                        "height": "412"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/18/13/28/bb/jumhooree-maidhaan.jpg",
                        "height": "187"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2019-06-26T07:48:09-0400",
                "caption": "",
                "id": "403908795",
                "helpful_votes": "0",
                "published_date": "2019-06-26T07:48:09-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.959357976913452",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "10",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#10 of 24 things to do in Male",
            "subcategory_ranking": "#10 of 24 things to do in Male",
            "ranking": "#10 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "open_now_text": "Open Now",
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d12667137-Reviews-Jumhooree_Maidhaan-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d12667137-Jumhooree_Maidhaan-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Boduthakurufaanu Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "Boduthakurufaanu Magu, Male",
            "hours": {
                "week_ranges": [
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ],
                    [
                        {
                            "open_time": 0,
                            "close_time": 1439
                        }
                    ]
                ],
                "timezone": "Indian/Maldives"
            },
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "163",
                    "name": "Points of Interest & Landmarks"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-tour-with-a-Spanish-speaking-guide-4h%2Fd4673-234122P3%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=a0250ef50937ddae9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=12667137&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.40",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-tour-with-a-Spanish-speaking-guide-4h%2Fd4673-234122P3%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=a0250ef50937ddae9&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=12667137&clt=TM&from=api&nt=true",
                        "price": "$40.00",
                        "rounded_up_price": "$40",
                        "offer_type": "",
                        "title": "Male Small Group City Tour",
                        "product_code": "234122P3",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/08/c4.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    },
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-guided-walking-tour-4h%2Fd4673-234122P2%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=90b017600a3074657&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=2&cnt=1&geo=12667137&clt=TM&from=api&nt=true",
                        "price": "$40.33",
                        "rounded_up_price": "$41",
                        "offer_type": "",
                        "title": "Male' guided walking tour - 3h",
                        "product_code": "234122P2",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0b/08/09/11.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            }
        },
        {
            "location_id": "298571",
            "ad_position": "inline2",
            "ad_size": "8X8",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "detail": "0",
            "page_type": "attractions",
            "mob_ptype": "app_attractions"
        },
        {
            "location_id": "14076483",
            "name": "Centro Mall",
            "latitude": "4.216113",
            "longitude": "73.542564",
            "num_reviews": "8",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/1d/07/5d/a5/photo8jpg.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/1d/07/5d/a5/photo8jpg.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/07/5d/a5/photo8jpg.jpg",
                        "height": "960"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/1d/07/5d/a5/photo8jpg.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/1d/07/5d/a5/photo8jpg.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2021-05-25T10:42:44-0400",
                "caption": "",
                "id": "487021989",
                "helpful_votes": "0",
                "published_date": "2021-05-25T10:42:44-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.741504192352295",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "16",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#16 of 24 things to do in Male",
            "subcategory_ranking": "#16 of 24 things to do in Male",
            "ranking": "#16 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.0",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d14076483-Reviews-Centro_Mall-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d14076483-Centro_Mall-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 335-5101",
            "website": "https://www.facebook.com/CentroMaldives/",
            "address_obj": {
                "street1": "Huvandhumaa Hingun",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "23000"
            },
            "address": "Huvandhumaa Hingun, Male 23000",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "143",
                    "name": "Shopping Malls"
                }
            ]
        },
        {
            "location_id": "12677409",
            "name": "Medhu Ziyaarath",
            "latitude": "4.177747",
            "longitude": "73.512634",
            "num_reviews": "22",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/be/0e/e1/the-building.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/be/0e/e1/the-building.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/16/be/0e/e1/the-building.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/16/be/0e/e1/the-building.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/be/0e/e1/the-building.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": false,
                "uploaded_date": "2019-03-10T11:16:52-0400",
                "caption": "The building",
                "id": "381554401",
                "helpful_votes": "0",
                "published_date": "2019-03-10T11:16:52-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "location_subtype": "none",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "preferred_map_engine": "default",
            "raw_ranking": "2.8360986709594727",
            "ranking_geo": "Male",
            "ranking_geo_id": "298571",
            "ranking_position": "14",
            "ranking_denominator": "24",
            "ranking_category": "attraction",
            "ranking_subcategory": "#14 of 24 things to do in Male",
            "subcategory_ranking": "#14 of 24 things to do in Male",
            "ranking": "#14 of 24 things to do in Male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "rating": "3.5",
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attraction_Review-g298571-d12677409-Reviews-Medhu_Ziyaarath-Male.html",
            "write_review": "https://www.tripadvisor.com/UserReview-g298571-d12677409-Medhu_Ziyaarath-Male.html",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "subcategory": [
                {
                    "key": "47",
                    "name": "Sights & Landmarks"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "phone": "+960 332-3206",
            "address_obj": {
                "street1": "Lonuziyaarai Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "Lonuziyaarai Magu, Male",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "10",
                    "name": "Sacred & Religious Sites"
                }
            ],
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-City-Walking-Tour%2Fd4673-363348P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=62126cfa2cb32d31d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=TOP&slot=1&cnt=1&geo=12677409&clt=TM&from=api&nt=true"
            },
            "offer_group": {
                "lowest_price": "$0.48",
                "offer_list": [
                    {
                        "url": "https://www.tripadvisor.com/Commerce?url=https%3A%2F%2Fwww.viator.com%2Ftours%2FMale%2FMale-City-Walking-Tour%2Fd4673-363348P1%3Feap%3Dmobile-app-11383%26aid%3Dtripenandr&partnerKey=1&urlKey=62126cfa2cb32d31d&logme=true&uidparam=refid&attrc=true&Provider=Viator&area=viator_multi&slot=1&cnt=1&geo=12677409&clt=TM&from=api&nt=true",
                        "price": "$48.00",
                        "rounded_up_price": "$48",
                        "offer_type": "",
                        "title": "Private Male City Walking Tour with optional Vilimale tour",
                        "product_code": "363348P1",
                        "partner": "Viator",
                        "image_url": "https://media.tacdn.com/media/attractions-splice-spp-360x240/0f/6f/4c/b5.jpg",
                        "description": null,
                        "primary_category": "Cultural Tours"
                    }
                ],
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            }
        },
        {
            "location_id": "0",
            "name": "Scuba & Snorkeling",
            "num_reviews": "2206",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/64/e7/22/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/64/e7/22/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/64/e7/22/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/22/64/e7/22/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/64/e7/22/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-03-09T08:08:35-0500",
                "caption": "",
                "id": "577038114",
                "helpful_votes": "0",
                "published_date": "2022-03-09T08:08:35-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Kalaafaanu Hingun",
                "street2": "H. Dhoorihaa",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20076"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "194",
                    "name": "Scuba & Snorkeling"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 73
        },
        {
            "location_id": "0",
            "name": "Private Tours",
            "num_reviews": "757",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/64/e7/22/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/64/e7/22/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/64/e7/22/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/22/64/e7/22/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/64/e7/22/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-03-09T08:08:35-0500",
                "caption": "",
                "id": "577038114",
                "helpful_votes": "0",
                "published_date": "2022-03-09T08:08:35-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "42",
                    "name": "Tours"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Kalaafaanu Hingun",
                "street2": "H. Dhoorihaa",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20076"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "235",
                    "name": "Private Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$33.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 54
        },
        {
            "location_id": "0",
            "name": "Nature & Wildlife Tours",
            "num_reviews": "308",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/64/e7/22/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/64/e7/22/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/64/e7/22/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/22/64/e7/22/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/64/e7/22/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-03-09T08:08:35-0500",
                "caption": "",
                "id": "577038114",
                "helpful_votes": "0",
                "published_date": "2022-03-09T08:08:35-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Kalaafaanu Hingun",
                "street2": "H. Dhoorihaa",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20076"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "220",
                    "name": "Nature & Wildlife Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 10
        },
        {
            "location_id": "0",
            "name": "Boat Tours",
            "num_reviews": "514",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/64/e7/22/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/64/e7/22/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/64/e7/22/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/22/64/e7/22/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/64/e7/22/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-03-09T08:08:35-0500",
                "caption": "",
                "id": "577038114",
                "helpful_votes": "0",
                "published_date": "2022-03-09T08:08:35-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Kalaafaanu Hingun",
                "street2": "H. Dhoorihaa",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20076"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "167",
                    "name": "Boat Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$180.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 51
        },
        {
            "location_id": "0",
            "name": "Spas",
            "latitude": "4.45875",
            "longitude": "73.7181",
            "num_reviews": "322",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/03/bc/ee/e3/duniye-spa.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/03/bc/ee/e3/duniye-spa.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "800",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/03/bc/ee/e3/duniye-spa.jpg",
                        "height": "530"
                    },
                    "large": {
                        "width": "800",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/03/bc/ee/e3/duniye-spa.jpg",
                        "height": "530"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/03/bc/ee/e3/duniye-spa.jpg",
                        "height": "364"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2013-04-10T04:50:57-0400",
                "caption": "The Over Water Spa, Meeru",
                "id": "62713571",
                "helpful_votes": "12",
                "published_date": "2013-04-10T04:50:57-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "40",
                    "name": "Spas & Wellness"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Champa Building, 3rd Floor",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20187"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "127",
                    "name": "Spas"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 9
        },
        {
            "location_id": "0",
            "name": "Parasailing & Paragliding",
            "latitude": "4.17856",
            "longitude": "73.51023",
            "num_reviews": "171",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "960"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2020-02-10T09:26:24-0500",
                "caption": "Diving with Best Dives Maldives",
                "id": "450522688",
                "helpful_votes": "0",
                "published_date": "2020-02-10T09:26:24-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Chandhanee Magu",
                "street2": "MF Building 6th Floor",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20189"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "192",
                    "name": "Parasailing & Paragliding"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$645.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            },
            "rollup_count": 11
        },
        {
            "location_id": "298571",
            "ad_position": "inline3",
            "ad_size": "8X8",
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "detail": "0",
            "page_type": "attractions",
            "mob_ptype": "app_attractions"
        },
        {
            "location_id": "0",
            "name": "Fishing Charters & Tours",
            "num_reviews": "291",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/12/e4/12/7c/the-maldives-is-home.jpg",
                        "height": "141"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/12/e4/12/7c/the-maldives-is-home.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1920",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/12/e4/12/7c/the-maldives-is-home.jpg",
                        "height": "1080"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/12/e4/12/7c/the-maldives-is-home.jpg",
                        "height": "576"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/12/e4/12/7c/the-maldives-is-home.jpg",
                        "height": "309"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2018-05-08T18:05:30-0400",
                "caption": "The Maldives is home to beautiful deserted sandbanks - come explore them with us!",
                "id": "316936828",
                "helpful_votes": "3",
                "published_date": "2018-05-08T18:05:30-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": null,
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "217",
                    "name": "Fishing Charters & Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 45
        },
        {
            "location_id": "0",
            "name": "Multi-day Tours",
            "num_reviews": "448",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/22/64/e7/22/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/22/64/e7/22/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/22/64/e7/22/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/22/64/e7/22/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/22/64/e7/22/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-03-09T08:08:35-0500",
                "caption": "",
                "id": "577038114",
                "helpful_votes": "0",
                "published_date": "2022-03-09T08:08:35-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "42",
                    "name": "Tours"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Kalaafaanu Hingun",
                "street2": "H. Dhoorihaa",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20076"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "288",
                    "name": "Multi-day Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$180.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 49
        },
        {
            "location_id": "0",
            "name": "Waterskiing & Jetskiing",
            "latitude": "4.17856",
            "longitude": "73.51023",
            "num_reviews": "116",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "960"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/1a/da/6e/40/diving-with-best-dives.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2020-02-10T09:26:24-0500",
                "caption": "Diving with Best Dives Maldives",
                "id": "450522688",
                "helpful_votes": "0",
                "published_date": "2020-02-10T09:26:24-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Chandhanee Magu",
                "street2": "MF Building 6th Floor",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20189"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "199",
                    "name": "Waterskiing & Jetskiing"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$180.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 11
        },
        {
            "location_id": "0",
            "name": "Gift & Specialty Shops",
            "latitude": "4.173545",
            "longitude": "73.51719",
            "num_reviews": "103",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/23/76/b9/20/shopfront.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/23/76/b9/20/shopfront.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/23/76/b9/20/shopfront.jpg",
                        "height": "1022"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/23/76/b9/20/shopfront.jpg",
                        "height": "439"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/23/76/b9/20/shopfront.jpg",
                        "height": "200"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2022-05-21T01:40:28-0400",
                "caption": "Shopfront ",
                "id": "594983200",
                "helpful_votes": "0",
                "published_date": "2022-05-21T01:40:28-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "26",
                    "name": "Shopping"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Sosun Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20076"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "144",
                    "name": "Gift & Specialty Shops"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 9
        },
        {
            "location_id": "0",
            "name": "Kayaking & Canoeing",
            "latitude": "4.17926",
            "longitude": "73.50675",
            "num_reviews": "71",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/76/4b/2f/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/76/4b/2f/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/76/4b/2f/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/21/76/4b/2f/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/76/4b/2f/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2021-11-26T07:36:43-0500",
                "caption": "",
                "id": "561400623",
                "helpful_votes": "2",
                "published_date": "2021-11-26T07:36:43-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Boduthakurufaanu Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20308"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "191",
                    "name": "Kayaking & Canoeing"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$180.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 10
        },
        {
            "location_id": "0",
            "name": "Food Tours",
            "latitude": "4.178609",
            "longitude": "73.51394",
            "num_reviews": "107",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/0e/55/8d/eb/male-walking-guided-tour.jpg",
                        "height": "141"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/0e/55/8d/eb/male-walking-guided-tour.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/0e/55/8d/eb/male-walking-guided-tour.jpg",
                        "height": "720"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/0e/55/8d/eb/male-walking-guided-tour.jpg",
                        "height": "576"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/0e/55/8d/eb/male-walking-guided-tour.jpg",
                        "height": "309"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2017-02-03T11:37:40-0500",
                "caption": "=Day Tour= English guide Discover Local Ordinary Days, Male` Walking Tour",
                "id": "240487915",
                "helpful_votes": "1",
                "published_date": "2017-02-03T11:37:40-0500",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "42",
                    "name": "Tours"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": null,
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": null
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "204",
                    "name": "Food Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$33.60",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": false
            },
            "rollup_count": 4
        },
        {
            "location_id": "0",
            "name": "City Tours",
            "latitude": "4.177707",
            "longitude": "73.50626",
            "num_reviews": "193",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/29/6b/3e/df/horizon-iii.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/29/6b/3e/df/horizon-iii.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1100",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-o/29/6b/3e/df/horizon-iii.jpg",
                        "height": "825"
                    },
                    "large": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/29/6b/3e/df/horizon-iii.jpg",
                        "height": "413"
                    },
                    "medium": {
                        "width": "250",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-f/29/6b/3e/df/horizon-iii.jpg",
                        "height": "188"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2023-06-08T09:10:36-0400",
                "caption": "Horizon III ",
                "id": "694894303",
                "helpful_votes": "0",
                "published_date": "2023-06-08T09:10:36-0400",
                "user": {
                    "user_id": null,
                    "member_id": "0",
                    "type": "user"
                }
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "42",
                    "name": "Tours"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Orchid Magu, Bolisssifaru 2nd Floor",
                "street2": "Bolisafaru",
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20255"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "224",
                    "name": "City Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": true,
            "booking": {
                "provider": "Viator",
                "url": "https://www.tripadvisor.com"
            },
            "offer_group": {
                "lowest_price": "$33.00",
                "has_see_all_url": true,
                "is_eligible_for_ap_list": true
            },
            "rollup_count": 8
        },
        {
            "location_id": "0",
            "name": "Adrenaline & Extreme Tours",
            "latitude": "4.17926",
            "longitude": "73.50675",
            "num_reviews": "63",
            "timezone": "Indian/Maldives",
            "location_string": "Male",
            "photo": {
                "images": {
                    "small": {
                        "width": "150",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-l/21/76/4b/2f/caption.jpg",
                        "height": "150"
                    },
                    "thumbnail": {
                        "width": "50",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-t/21/76/4b/2f/caption.jpg",
                        "height": "50"
                    },
                    "original": {
                        "width": "1280",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/21/76/4b/2f/caption.jpg",
                        "height": "853"
                    },
                    "large": {
                        "width": "1024",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-w/21/76/4b/2f/caption.jpg",
                        "height": "683"
                    },
                    "medium": {
                        "width": "550",
                        "url": "https://media-cdn.tripadvisor.com/media/photo-s/21/76/4b/2f/caption.jpg",
                        "height": "367"
                    }
                },
                "is_blessed": true,
                "uploaded_date": "2021-11-26T07:36:43-0500",
                "caption": "",
                "id": "561400623",
                "helpful_votes": "2",
                "published_date": "2021-11-26T07:36:43-0500",
                "user": null
            },
            "awards": [],
            "doubleclick_zone": "as.maldives.kaafu_atoll.north_male_atoll.male",
            "distance": null,
            "distance_string": null,
            "bearing": null,
            "is_closed": false,
            "is_long_closed": false,
            "description": "",
            "web_url": "https://www.tripadvisor.com/Attractions",
            "write_review": "https://www.tripadvisor.com",
            "ancestors": [
                {
                    "subcategory": [
                        {
                            "key": "city",
                            "name": "City"
                        }
                    ],
                    "name": "Male",
                    "abbrv": null,
                    "location_id": "298571"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "North Male Atoll",
                    "abbrv": null,
                    "location_id": "298332"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Kaafu Atoll",
                    "abbrv": null,
                    "location_id": "298329"
                },
                {
                    "subcategory": [
                        {
                            "key": "islandgroup",
                            "name": "Island Group"
                        }
                    ],
                    "name": "Maldives",
                    "abbrv": null,
                    "location_id": "293953"
                }
            ],
            "category": {
                "key": "rollup",
                "name": "Rollup"
            },
            "subcategory": [
                {
                    "key": "61",
                    "name": "Outdoor Activities"
                }
            ],
            "parent_display_name": "Male",
            "is_jfy_enabled": false,
            "nearest_metro_station": [],
            "address_obj": {
                "street1": "Boduthakurufaanu Magu",
                "street2": null,
                "city": "Male",
                "state": null,
                "country": null,
                "postalcode": "20308"
            },
            "address": "",
            "is_candidate_for_contact_info_suppression": false,
            "subtype": [
                {
                    "key": "212",
                    "name": "Adrenaline & Extreme Tours"
                }
            ],
            "rollup_category": {
                "key": "attraction",
                "name": "Attraction"
            },
            "rollup_contains_bookable": false,
            "rollup_count": 10
        }
    ],
    "filters": {
        "distance": {
            "0.0": {
                "count": "376",
                "label": "Any Distance",
                "priority": "0",
                "selected": true
            },
            "25.0": {
                "count": "188",
                "label": "25 mi",
                "priority": "6",
                "selected": false
            },
            "1.0": {
                "count": "188",
                "label": "1 mi",
                "priority": "2",
                "selected": false
            },
            "2.0": {
                "count": "188",
                "label": "2 mi",
                "priority": "3",
                "selected": false
            },
            "0.3": {
                "count": "188",
                "label": "0.3 mi",
                "priority": "1",
                "selected": false
            },
            "10.0": {
                "count": "188",
                "label": "10 mi",
                "priority": "5",
                "selected": false
            },
            "5.0": {
                "count": "188",
                "label": "5 mi",
                "priority": "4",
                "selected": false
            }
        },
        "subtype": {
            "0": {
                "count": "188",
                "label": "All",
                "selected": true
            },
            "1": {
                "count": "3",
                "label": "Art Galleries",
                "parent_id": "49",
                "selected": false
            },
            "3": {
                "count": "1",
                "label": "Architectural Buildings",
                "parent_id": "47",
                "selected": false
            },
            "5": {
                "count": "1",
                "label": "Bridges",
                "parent_id": "47",
                "selected": false
            },
            "10": {
                "count": "4",
                "label": "Sacred & Religious Sites",
                "parent_id": "47",
                "selected": false
            },
            "17": {
                "count": "1",
                "label": "Historic Sites",
                "parent_id": "47",
                "selected": false
            },
            "20": {
                "count": "1",
                "label": "Islands",
                "parent_id": "57",
                "selected": false
            },
            "26": {
                "count": "2",
                "label": "Monuments & Statues",
                "parent_id": "47",
                "selected": false
            },
            "28": {
                "count": "1",
                "label": "Art Museums",
                "parent_id": "49",
                "selected": false
            },
            "52": {
                "count": "3",
                "label": "Beaches",
                "parent_id": "61",
                "selected": false
            },
            "56": {
                "count": "1",
                "label": "Ferries",
                "parent_id": "59",
                "selected": false
            },
            "70": {
                "count": "2",
                "label": "Parks",
                "parent_id": "57",
                "selected": false
            },
            "97": {
                "count": "1",
                "label": "Movie Theaters",
                "parent_id": "56",
                "selected": false
            },
            "105": {
                "count": "1",
                "label": "Karaoke Bars",
                "parent_id": "20",
                "selected": false
            },
            "120": {
                "count": "1",
                "label": "Arenas & Stadiums",
                "parent_id": "47",
                "selected": false
            },
            "127": {
                "count": "9",
                "label": "Spas",
                "parent_id": "40",
                "selected": false
            },
            "130": {
                "count": "1",
                "label": "Sports Camps & Clinics",
                "parent_id": "61",
                "selected": false
            },
            "142": {
                "count": "2",
                "label": "Flea & Street Markets",
                "parent_id": "26",
                "selected": false
            },
            "143": {
                "count": "1",
                "label": "Shopping Malls",
                "parent_id": "26",
                "selected": false
            },
            "144": {
                "count": "9",
                "label": "Gift & Specialty Shops",
                "parent_id": "26",
                "selected": false
            },
            "161": {
                "count": "1",
                "label": "Specialty Museums",
                "parent_id": "49",
                "selected": false
            },
            "163": {
                "count": "4",
                "label": "Points of Interest & Landmarks",
                "parent_id": "47",
                "selected": false
            },
            "167": {
                "count": "51",
                "label": "Boat Tours",
                "parent_id": "61",
                "selected": false
            },
            "174": {
                "count": "1",
                "label": "Bus Tours",
                "parent_id": "42",
                "selected": false
            },
            "182": {
                "count": "46",
                "label": "Taxis & Shuttles",
                "parent_id": "59",
                "selected": false
            },
            "183": {
                "count": "5",
                "label": "Walking Tours",
                "parent_id": "42",
                "selected": false
            },
            "184": {
                "count": "6",
                "label": "Water Sports",
                "parent_id": "61",
                "selected": false
            },
            "186": {
                "count": "2",
                "label": "Gear Rentals",
                "parent_id": "61",
                "selected": false
            },
            "187": {
                "count": "17",
                "label": "Boat Rentals",
                "parent_id": "61",
                "selected": false
            },
            "188": {
                "count": "33",
                "label": "Dolphin & Whale Watching",
                "parent_id": "61",
                "selected": false
            },
            "189": {
                "count": "2",
                "label": "Gondola Cruises",
                "parent_id": "61",
                "selected": false
            },
            "190": {
                "count": "29",
                "label": "Speed Boats Tours",
                "parent_id": "61",
                "selected": false
            },
            "191": {
                "count": "10",
                "label": "Kayaking & Canoeing",
                "parent_id": "61",
                "selected": false
            },
            "192": {
                "count": "11",
                "label": "Parasailing & Paragliding",
                "parent_id": "61",
                "selected": false
            },
            "194": {
                "count": "73",
                "label": "Scuba & Snorkeling",
                "parent_id": "61",
                "selected": false
            },
            "195": {
                "count": "25",
                "label": "Shark Diving",
                "parent_id": "61",
                "selected": false
            },
            "196": {
                "count": "10",
                "label": "Submarine Tours",
                "parent_id": "61",
                "selected": false
            },
            "197": {
                "count": "17",
                "label": "Surfing, Windsurfing & Kitesurfing",
                "parent_id": "61",
                "selected": false
            },
            "198": {
                "count": "15",
                "label": "Swim with Dolphins",
                "parent_id": "61",
                "selected": false
            },
            "199": {
                "count": "11",
                "label": "Waterskiing & Jetskiing",
                "parent_id": "61",
                "selected": false
            },
            "200": {
                "count": "1",
                "label": "Duck Tours",
                "parent_id": "61",
                "selected": false
            },
            "201": {
                "count": "1",
                "label": "Beer Tastings & Tours",
                "parent_id": "42",
                "selected": false
            },
            "202": {
                "count": "2",
                "label": "Coffee & Tea Tours",
                "parent_id": "42",
                "selected": false
            },
            "203": {
                "count": "2",
                "label": "Cooking Classes",
                "parent_id": "36",
                "selected": false
            },
            "204": {
                "count": "4",
                "label": "Food Tours",
                "parent_id": "42",
                "selected": false
            },
            "211": {
                "count": "2",
                "label": "4WD, ATV & Off-Road Tours",
                "parent_id": "61",
                "selected": false
            },
            "212": {
                "count": "10",
                "label": "Adrenaline & Extreme Tours",
                "parent_id": "61",
                "selected": false
            },
            "213": {
                "count": "1",
                "label": "Balloon Rides",
                "parent_id": "61",
                "selected": false
            },
            "214": {
                "count": "5",
                "label": "Bike Tours",
                "parent_id": "61",
                "selected": false
            },
            "216": {
                "count": "6",
                "label": "Eco Tours",
                "parent_id": "61",
                "selected": false
            },
            "217": {
                "count": "45",
                "label": "Fishing Charters & Tours",
                "parent_id": "61",
                "selected": false
            },
            "219": {
                "count": "2",
                "label": "Hiking & Camping Tours",
                "parent_id": "61",
                "selected": false
            },
            "220": {
                "count": "10",
                "label": "Nature & Wildlife Tours",
                "parent_id": "61",
                "selected": false
            },
            "222": {
                "count": "6",
                "label": "Air Tours",
                "parent_id": "61",
                "selected": false
            },
            "223": {
                "count": "2",
                "label": "Archaeology Tours",
                "parent_id": "42",
                "selected": false
            },
            "224": {
                "count": "8",
                "label": "City Tours",
                "parent_id": "42",
                "selected": false
            },
            "225": {
                "count": "8",
                "label": "Cultural Tours",
                "parent_id": "42",
                "selected": false
            },
            "227": {
                "count": "2",
                "label": "Helicopter Tours",
                "parent_id": "42",
                "selected": false
            },
            "228": {
                "count": "3",
                "label": "Historical & Heritage Tours",
                "parent_id": "42",
                "selected": false
            },
            "229": {
                "count": "1",
                "label": "Hop-On Hop-Off Tours",
                "parent_id": "42",
                "selected": false
            },
            "231": {
                "count": "2",
                "label": "Motorcycle Tours",
                "parent_id": "42",
                "selected": false
            },
            "233": {
                "count": "4",
                "label": "Night Tours",
                "parent_id": "42",
                "selected": false
            },
            "235": {
                "count": "54",
                "label": "Private Tours",
                "parent_id": "42",
                "selected": false
            },
            "237": {
                "count": "11",
                "label": "Self-Guided Tours & Rentals",
                "parent_id": "42",
                "selected": false
            },
            "240": {
                "count": "3",
                "label": "Bar, Club & Pub Tours",
                "parent_id": "20",
                "selected": false
            },
            "241": {
                "count": "1",
                "label": "Fashion Shows & Tours",
                "parent_id": "42",
                "selected": false
            },
            "242": {
                "count": "1",
                "label": "Shopping Tours",
                "parent_id": "42",
                "selected": false
            },
            "243": {
                "count": "3",
                "label": "Safaris",
                "parent_id": "61",
                "selected": false
            },
            "244": {
                "count": "1",
                "label": "Ski & Snow Tours",
                "parent_id": "61",
                "selected": false
            },
            "269": {
                "count": "8",
                "label": "Photography Tours",
                "parent_id": "42",
                "selected": false
            },
            "270": {
                "count": "7",
                "label": "Stand-Up Paddleboarding",
                "parent_id": "61",
                "selected": false
            },
            "272": {
                "count": "3",
                "label": "Paint & Pottery Studios",
                "parent_id": "56",
                "selected": false
            },
            "273": {
                "count": "7",
                "label": "Canyoning & Rappelling Tours",
                "parent_id": "61",
                "selected": false
            },
            "279": {
                "count": "1",
                "label": "Skydiving",
                "parent_id": "42",
                "selected": false
            },
            "287": {
                "count": "41",
                "label": "Day Trips",
                "parent_id": "42",
                "selected": false
            },
            "288": {
                "count": "49",
                "label": "Multi-day Tours",
                "parent_id": "42",
                "selected": false
            },
            "325": {
                "count": "3",
                "label": "Hair & Nail Salons",
                "parent_id": "40",
                "selected": false
            }
        },
        "min_rating": {
            "3": {
                "count": "108",
                "label": "3",
                "selected": false
            },
            "4": {
                "count": "91",
                "label": "4",
                "selected": false
            },
            "5": {
                "count": "64",
                "label": "5",
                "selected": false
            }
        },
        "rating": {
            "1": {
                "count": "2",
                "label": "Terrible",
                "selected": false
            },
            "2": {
                "count": "3",
                "label": "Poor",
                "selected": false
            },
            "3": {
                "count": "17",
                "label": "Average",
                "selected": false
            },
            "4": {
                "count": "27",
                "label": "Very Good",
                "selected": false
            },
            "5": {
                "count": "64",
                "label": "Excellent",
                "selected": false
            },
            "all": {
                "count": "188",
                "label": "All",
                "selected": true
            }
        },
        "subcategory": {
            "0": {
                "count": "188",
                "label": "All",
                "locale_independent_label": "All",
                "selected": true
            },
            "20": {
                "count": "4",
                "label": "Nightlife",
                "locale_independent_label": "Nightlife",
                "selected": false
            },
            "26": {
                "count": "14",
                "label": "Shopping",
                "locale_independent_label": "Shopping",
                "selected": false
            },
            "36": {
                "count": "6",
                "label": "Food & Drink",
                "locale_independent_label": "Food & Drink",
                "selected": false
            },
            "40": {
                "count": "11",
                "label": "Spas & Wellness",
                "locale_independent_label": "Spas & Wellness",
                "selected": false
            },
            "41": {
                "count": "4",
                "label": "Classes & Workshops",
                "locale_independent_label": "Classes & Workshops",
                "selected": false
            },
            "42": {
                "count": "140",
                "label": "Tours",
                "locale_independent_label": "Tours",
                "selected": false
            },
            "47": {
                "count": "11",
                "label": "Sights & Landmarks",
                "locale_independent_label": "Sights & Landmarks",
                "selected": false
            },
            "49": {
                "count": "5",
                "label": "Museums",
                "locale_independent_label": "Museums",
                "selected": false
            },
            "55": {
                "count": "111",
                "label": "Boat Tours & Water Sports",
                "locale_independent_label": "Boat Tours & Water Sports",
                "selected": false
            },
            "56": {
                "count": "4",
                "label": "Fun & Games",
                "locale_independent_label": "Fun & Games",
                "selected": false
            },
            "57": {
                "count": "6",
                "label": "Nature & Parks",
                "locale_independent_label": "Nature & Parks",
                "selected": false
            },
            "59": {
                "count": "47",
                "label": "Transportation",
                "locale_independent_label": "Transportation",
                "selected": false
            },
            "61": {
                "count": "123",
                "label": "Outdoor Activities",
                "locale_independent_label": "Outdoor Activities",
                "selected": false
            }
        },
        "typeahead_tag": {
            "11292": {
                "count": "15",
                "label": "Free Entry",
                "locale_independent_label": "Free",
                "selected": false
            },
            "11295": {
                "count": "13",
                "label": "Good for a Rainy Day",
                "locale_independent_label": "Rainy Day",
                "selected": false
            },
            "11306": {
                "count": "14",
                "label": "Good for Kids",
                "locale_independent_label": "Family (young children)",
                "selected": false
            },
            "11309": {
                "count": "21",
                "label": "Budget-friendly",
                "locale_independent_label": "Thrifty Traveler",
                "selected": false
            },
            "11312": {
                "count": "7",
                "label": "Good for Adrenaline Seekers",
                "locale_independent_label": "Thrill-Seeker",
                "selected": false
            },
            "12159": {
                "count": "6",
                "label": "Honeymoon spot",
                "locale_independent_label": "Honeymoon spot",
                "selected": false
            },
            "12163": {
                "count": "9",
                "label": "Adventurous",
                "locale_independent_label": "Adventurous",
                "selected": false
            },
            "12169": {
                "count": "25",
                "label": "Good for Couples",
                "locale_independent_label": "Good for couples",
                "selected": false
            },
            "12170": {
                "count": "16",
                "label": "Good for Big Groups",
                "locale_independent_label": "Good for big groups",
                "selected": false
            }
        },
        "exclude_locations": {
            "filtered": {
                "count": "188",
                "label": "Results filtered"
            },
            "all": {
                "count": "188",
                "label": "All"
            }
        }
    },
    "filters_v2": {
        "search_filters": [],
        "filter_sections": [
            {
                "label": "Sort by",
                "section_id": "sort",
                "filter_groups": [
                    {
                        "type": "single_select",
                        "key": "sort",
                        "tracking_key": "sort",
                        "label": "Sort by",
                        "options": [
                            {
                                "label": "Traveler Favorites",
                                "value": "ml_score",
                                "selected": true,
                                "default": true,
                                "single_select": true
                            },
                            {
                                "label": "Traveler Ranked",
                                "value": "ranking",
                                "selected": false,
                                "default": false,
                                "single_select": true
                            }
                        ]
                    }
                ]
            },
            {
                "label": "Minimum Traveler Rating",
                "section_id": "min_rating",
                "filter_groups": [
                    {
                        "type": "single_select",
                        "key": "min_rating",
                        "tracking_key": "rating",
                        "label": "Minimum Traveler Rating",
                        "options": [
                            {
                                "label": "3",
                                "value": "3",
                                "selected": false,
                                "count": "108",
                                "default": false
                            },
                            {
                                "label": "4",
                                "value": "4",
                                "selected": false,
                                "count": "91",
                                "default": false
                            },
                            {
                                "label": "5",
                                "value": "5",
                                "selected": false,
                                "count": "64",
                                "default": false
                            }
                        ]
                    }
                ]
            },
            {
                "label": "Attraction Category",
                "section_id": "subcategory",
                "filter_groups": [
                    {
                        "type": "single_select",
                        "key": "subcategory",
                        "tracking_key": "category",
                        "label": "Attraction Category",
                        "options": [
                            {
                                "label": "Boat Tours & Water Sports",
                                "value": "55",
                                "selected": false,
                                "count": "111",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Fun & Games",
                                "value": "56",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Nature & Parks",
                                "value": "57",
                                "selected": false,
                                "count": "6",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Sights & Landmarks",
                                "value": "47",
                                "selected": false,
                                "count": "11",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Food & Drink",
                                "value": "36",
                                "selected": false,
                                "count": "6",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Shopping",
                                "value": "26",
                                "selected": false,
                                "count": "14",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Transportation",
                                "value": "59",
                                "selected": false,
                                "count": "47",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Museums",
                                "value": "49",
                                "selected": false,
                                "count": "5",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "All",
                                "value": "0",
                                "selected": true,
                                "count": "188",
                                "default": true,
                                "single_select": true
                            },
                            {
                                "label": "Outdoor Activities",
                                "value": "61",
                                "selected": false,
                                "count": "123",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Spas & Wellness",
                                "value": "40",
                                "selected": false,
                                "count": "11",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Classes & Workshops",
                                "value": "41",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Tours",
                                "value": "42",
                                "selected": false,
                                "count": "140",
                                "default": false,
                                "single_select": false
                            },
                            {
                                "label": "Nightlife",
                                "value": "20",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false
                            }
                        ]
                    }
                ]
            },
            {
                "label": "Attraction Type",
                "section_id": "subtype",
                "parent_section_id": "subcategory",
                "filter_groups": [
                    {
                        "type": "multi_select",
                        "key": "subtype",
                        "tracking_key": "type",
                        "label": "Attraction Type",
                        "options": [
                            {
                                "label": "Speed Boats Tours",
                                "value": "190",
                                "selected": false,
                                "count": "29",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Kayaking & Canoeing",
                                "value": "191",
                                "selected": false,
                                "count": "10",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Parasailing & Paragliding",
                                "value": "192",
                                "selected": false,
                                "count": "11",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Stand-Up Paddleboarding",
                                "value": "270",
                                "selected": false,
                                "count": "7",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Scuba & Snorkeling",
                                "value": "194",
                                "selected": false,
                                "count": "73",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Shark Diving",
                                "value": "195",
                                "selected": false,
                                "count": "25",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Paint & Pottery Studios",
                                "value": "272",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "56"
                            },
                            {
                                "label": "Submarine Tours",
                                "value": "196",
                                "selected": false,
                                "count": "10",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Canyoning & Rappelling Tours",
                                "value": "273",
                                "selected": false,
                                "count": "7",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Surfing, Windsurfing & Kitesurfing",
                                "value": "197",
                                "selected": false,
                                "count": "17",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Swim with Dolphins",
                                "value": "198",
                                "selected": false,
                                "count": "15",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Motorcycle Tours",
                                "value": "231",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Waterskiing & Jetskiing",
                                "value": "199",
                                "selected": false,
                                "count": "11",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Night Tours",
                                "value": "233",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Private Tours",
                                "value": "235",
                                "selected": false,
                                "count": "54",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Skydiving",
                                "value": "279",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Self-Guided Tours & Rentals",
                                "value": "237",
                                "selected": false,
                                "count": "11",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Beaches",
                                "value": "52",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Movie Theaters",
                                "value": "97",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "56"
                            },
                            {
                                "label": "Sacred & Religious Sites",
                                "value": "10",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Ferries",
                                "value": "56",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "59"
                            },
                            {
                                "label": "Historic Sites",
                                "value": "17",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Specialty Museums",
                                "value": "161",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "49"
                            },
                            {
                                "label": "Points of Interest & Landmarks",
                                "value": "163",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Bar, Club & Pub Tours",
                                "value": "240",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "20"
                            },
                            {
                                "label": "Arenas & Stadiums",
                                "value": "120",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Fashion Shows & Tours",
                                "value": "241",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "All",
                                "value": "0",
                                "selected": true,
                                "count": "188",
                                "default": true,
                                "single_select": true
                            },
                            {
                                "label": "Shopping Tours",
                                "value": "242",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Day Trips",
                                "value": "287",
                                "selected": false,
                                "count": "41",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Art Galleries",
                                "value": "1",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "49"
                            },
                            {
                                "label": "Safaris",
                                "value": "243",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Boat Tours",
                                "value": "167",
                                "selected": false,
                                "count": "51",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Multi-day Tours",
                                "value": "288",
                                "selected": false,
                                "count": "49",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Duck Tours",
                                "value": "200",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Ski & Snow Tours",
                                "value": "244",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Architectural Buildings",
                                "value": "3",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Beer Tastings & Tours",
                                "value": "201",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Coffee & Tea Tours",
                                "value": "202",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Cooking Classes",
                                "value": "203",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "36"
                            },
                            {
                                "label": "Bridges",
                                "value": "5",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Spas",
                                "value": "127",
                                "selected": false,
                                "count": "9",
                                "default": false,
                                "single_select": false,
                                "parent_id": "40"
                            },
                            {
                                "label": "Food Tours",
                                "value": "204",
                                "selected": false,
                                "count": "4",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Hair & Nail Salons",
                                "value": "325",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "40"
                            },
                            {
                                "label": "Islands",
                                "value": "20",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "57"
                            },
                            {
                                "label": "Monuments & Statues",
                                "value": "26",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "47"
                            },
                            {
                                "label": "Art Museums",
                                "value": "28",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "49"
                            },
                            {
                                "label": "Bus Tours",
                                "value": "174",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Sports Camps & Clinics",
                                "value": "130",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "4WD, ATV & Off-Road Tours",
                                "value": "211",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Adrenaline & Extreme Tours",
                                "value": "212",
                                "selected": false,
                                "count": "10",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Balloon Rides",
                                "value": "213",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Bike Tours",
                                "value": "214",
                                "selected": false,
                                "count": "5",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Eco Tours",
                                "value": "216",
                                "selected": false,
                                "count": "6",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Fishing Charters & Tours",
                                "value": "217",
                                "selected": false,
                                "count": "45",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Parks",
                                "value": "70",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "57"
                            },
                            {
                                "label": "Hiking & Camping Tours",
                                "value": "219",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Taxis & Shuttles",
                                "value": "182",
                                "selected": false,
                                "count": "46",
                                "default": false,
                                "single_select": false,
                                "parent_id": "59"
                            },
                            {
                                "label": "Walking Tours",
                                "value": "183",
                                "selected": false,
                                "count": "5",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Water Sports",
                                "value": "184",
                                "selected": false,
                                "count": "6",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Flea & Street Markets",
                                "value": "142",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "26"
                            },
                            {
                                "label": "Gear Rentals",
                                "value": "186",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Boat Rentals",
                                "value": "187",
                                "selected": false,
                                "count": "17",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Nature & Wildlife Tours",
                                "value": "220",
                                "selected": false,
                                "count": "10",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Shopping Malls",
                                "value": "143",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "26"
                            },
                            {
                                "label": "Dolphin & Whale Watching",
                                "value": "188",
                                "selected": false,
                                "count": "33",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Gift & Specialty Shops",
                                "value": "144",
                                "selected": false,
                                "count": "9",
                                "default": false,
                                "single_select": false,
                                "parent_id": "26"
                            },
                            {
                                "label": "Air Tours",
                                "value": "222",
                                "selected": false,
                                "count": "6",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Gondola Cruises",
                                "value": "189",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "61"
                            },
                            {
                                "label": "Archaeology Tours",
                                "value": "223",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "City Tours",
                                "value": "224",
                                "selected": false,
                                "count": "8",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Cultural Tours",
                                "value": "225",
                                "selected": false,
                                "count": "8",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Photography Tours",
                                "value": "269",
                                "selected": false,
                                "count": "8",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Karaoke Bars",
                                "value": "105",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "20"
                            },
                            {
                                "label": "Helicopter Tours",
                                "value": "227",
                                "selected": false,
                                "count": "2",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Historical & Heritage Tours",
                                "value": "228",
                                "selected": false,
                                "count": "3",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            },
                            {
                                "label": "Hop-On Hop-Off Tours",
                                "value": "229",
                                "selected": false,
                                "count": "1",
                                "default": false,
                                "single_select": false,
                                "parent_id": "42"
                            }
                        ]
                    }
                ]
            },
            {
                "label": "",
                "section_id": "bookable_first",
                "filter_groups": [
                    {
                        "type": "single_select",
                        "key": "bookable_first",
                        "tracking_key": "onlinebookable",
                        "label": "Book online first",
                        "options": [
                            {
                                "label": "Book online first",
                                "value": "true",
                                "selected": false,
                                "count": "1",
                                "default": false
                            }
                        ]
                    }
                ]
            }
        ],
        "metadata": {
            "sort": "Ranking"
        }
    },
    "paging": {
        "results": "30",
        "total_results": "82"
    }
}
export default function VacationRentals() {


    const params = useParams()

    const locationId = params.locationId
    const url = `https://travel-advisor.p.rapidapi.com/attractions/list?location_id=298571&currency=USD&lang=en_US&lunit=km&sort=recommended`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    const [attractions, setAttractions] = useState([])

    useEffect(() => {
        // Static information for a data structure and requests saving
        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => console.log(data))
        setAttractions(sample.data)
    }, [sample])
    
    console.log('attractions', attractions)

    return (
        <main>
            <h2>Attraction results</h2>
            <section>
            {
                attractions && attractions.map( (attraction, key) => (
                    <div key={key}>
                        <img src={attraction.photo?.images?.small?.url} alt={attraction.photo?.caption} />
                        <p>{attraction.name}</p>
                        <p>{attraction.rating}</p>
                        <hr />
                    </div>
                ))
            }

            </section>
        </main>
    )
}
