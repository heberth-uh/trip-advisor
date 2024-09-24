import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {

    const sample = [
        {
            "__typename": "Typeahead_QuerySuggestionItem",
            "documentId": "pt;10021;p10021",
            "suggestionType": "query",
            "buCategory": "ATTRACTIONS",
            "text": "sightseeing",
            "parentGeoDetails": null,
            "route": {
                "__typename": "Routing_Route",
                "fragment": null,
                "page": "AttractionsHome",
                "url": "/Attractions",
                "nonCanonicalUrl": "/Attractions",
                "typedParams": {
                    "__typename": "Routing_AttractionsHomeParameters"
                }
            },
            "scopeType": null
        },
        {
            "__typename": "Typeahead_QuerySuggestionItem",
            "documentId": "geo-pt;10021-nearby;gnear;p10021",
            "suggestionType": "query",
            "buCategory": "ATTRACTIONS",
            "text": "sightseeing near me",
            "parentGeoDetails": null,
            "route": {
                "__typename": "Routing_Route",
                "fragment": null,
                "page": "Search",
                "url": "/Search?q=sightseeing+near+me&ssrc=A&searchNearby=true&searchSessionId=8d53a7c8-69b1-472c-8a52-fe6cc141aedd",
                "nonCanonicalUrl": "/Search?q=sightseeing+near+me&ssrc=A&searchNearby=true&searchSessionId=8d53a7c8-69b1-472c-8a52-fe6cc141aedd",
                "typedParams": {
                    "__typename": "Routing_SearchParameters"
                }
            },
            "scopeType": "NEARBY"
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;294265;g294265",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 294265,
                "isGeo": true,
                "placeType": "CITY",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "Singapore",
                    "longOnlyHierarchyTypeaheadV2": "Singapore, Asia"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 1.285801,
                    "longitude": 103.85111
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": ""
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g294265-Singapore-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g294265-Singapore-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 294265
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 609,
                        "maxWidth": 3116,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/b1/singapore.jpg?w={width}&h={height}&s=1"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fc/b1/singapore.jpg?w=100&h=100&s=1"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 49,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 120,
                            "width": 320,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/320x120/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 107,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 768,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/768x250/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/1024x250/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/1280x250/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/33/fc/b1/singapore.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 500,
                            "width": 2560,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/2560x500/15/33/fc/b1/singapore.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;298507;g298507",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 298507,
                "isGeo": true,
                "placeType": "MUNICIPALITY",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "St. Petersburg",
                    "longOnlyHierarchyTypeaheadV2": "Northwestern District, Russia"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 59.938026,
                    "longitude": 30.317114
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": ""
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g298507-St_Petersburg_Northwestern_District-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g298507-St_Petersburg_Northwestern_District-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 298507
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 1329,
                        "maxWidth": 2000,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a4/e0/27/st-petersburg.jpg?w={width}&h={height}&s=1"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/a4/e0/27/st-petersburg.jpg?w=100&h=100&s=1"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 166,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 120,
                            "width": 320,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/320x120/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 213,
                            "width": 320,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-c/320x120/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 365,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 768,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/768x250/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 510,
                            "width": 768,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-c/768x250/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/1024x250/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 680,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 680,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-c/1024x250/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/1280x250/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 851,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 1329,
                            "width": 2000,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-o/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 500,
                            "width": 2560,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/2560x500/05/a4/e0/27/st-petersburg.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 1701,
                            "width": 2560,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-c/2560x500/05/a4/e0/27/st-petersburg.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;189433;g189433",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 189433,
                "isGeo": true,
                "placeType": "ISLAND",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "Santorini",
                    "longOnlyHierarchyTypeaheadV2": "South Aegean, Greece"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 36.376793,
                    "longitude": 25.451546
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": null
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g189433-Santorini_Cyclades_South_Aegean-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g189433-Santorini_Cyclades_South_Aegean-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 189433
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 3334,
                        "maxWidth": 5000,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/81/30/3f/caption.jpg?w={width}&h={height}&s=1&cx=1846&cy=1833&chk=v1_6ae0a81ae3361e988707"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/81/30/3f/caption.jpg?w=100&h=100&s=1&cx=1846&cy=1833&chk=v1_6ae0a81ae3361e988707"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/1d/81/30/3f/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/1d/81/30/3f/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/1d/81/30/3f/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 167,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/1d/81/30/3f/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 367,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/1d/81/30/3f/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 683,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/1d/81/30/3f/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 854,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1d/81/30/3f/caption.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;187886;g187886",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 187886,
                "isGeo": true,
                "placeType": "ISLAND",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "Sicily",
                    "longOnlyHierarchyTypeaheadV2": "Italy, Europe"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 37.583767,
                    "longitude": 14.270325
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": null
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g187886-Sicily-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g187886-Sicily-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 187886
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 599,
                        "maxWidth": 3068,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/07/sicily.jpg?w={width}&h={height}&s=1"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/07/sicily.jpg?w=100&h=100&s=1"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 49,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 120,
                            "width": 320,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/320x120/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 107,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 768,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/768x250/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/1024x250/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/1280x250/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 250,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/15/33/f9/07/sicily.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 500,
                            "width": 2560,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-b/2560x500/15/33/f9/07/sicily.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;60750;g60750",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 60750,
                "isGeo": true,
                "placeType": "MUNICIPALITY",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "San Diego",
                    "longOnlyHierarchyTypeaheadV2": "California, United States"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 32.71562,
                    "longitude": -117.1558
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": null
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g60750-San_Diego_California-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g60750-San_Diego_California-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 60750
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 1282,
                        "maxWidth": 1920,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c9/62/b2/caption.jpg?w={width}&h={height}&s=1&cx=960&cy=640&chk=v1_4980f8958312dde2edce"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c9/62/b2/caption.jpg?w=100&h=100&s=1&cx=960&cy=640&chk=v1_4980f8958312dde2edce"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/c9/62/b2/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/c9/62/b2/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/1c/c9/62/b2/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 167,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/c9/62/b2/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 367,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/c9/62/b2/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 684,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/1c/c9/62/b2/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 855,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c9/62/b2/caption.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;60713;g60713",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 60713,
                "isGeo": true,
                "placeType": "CITY",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "San Francisco",
                    "longOnlyHierarchyTypeaheadV2": "California, United States"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 37.778934,
                    "longitude": -122.41579
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": null
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g60713-San_Francisco_California-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g60713-San_Francisco_California-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 60713
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 3851,
                        "maxWidth": 5777,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c2/87/c8/caption.jpg?w={width}&h={height}&s=1"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c2/87/c8/caption.jpg?w=100&h=100&s=1"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/1c/c2/87/c8/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/1c/c2/87/c8/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/1c/c2/87/c8/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 167,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/1c/c2/87/c8/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 367,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/1c/c2/87/c8/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 683,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/1c/c2/87/c8/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 853,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/c2/87/c8/caption.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;294197;g294197",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 294197,
                "isGeo": true,
                "placeType": "CITY",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "Seoul",
                    "longOnlyHierarchyTypeaheadV2": "South Korea, Asia"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": 37.51502,
                    "longitude": 127.01647
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": ""
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g294197-Seoul-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g294197-Seoul-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 294197
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 4000,
                        "maxWidth": 6000,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f2/f0/caption.jpg?w={width}&h={height}&s=1"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/33/f2/f0/caption.jpg?w=100&h=100&s=1"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/1b/33/f2/f0/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/1b/33/f2/f0/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/1b/33/f2/f0/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 167,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/1b/33/f2/f0/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 367,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/1b/33/f2/f0/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 683,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/1b/33/f2/f0/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 853,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/33/f2/f0/caption.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_LocationItem",
            "documentId": "loc;303631;g303631",
            "detailsV2": {
                "__typename": "LocationSelection_LocationInformationV2",
                "locationId": 303631,
                "isGeo": true,
                "placeType": "CITY",
                "names": {
                    "__typename": "LocationSelection_LocationNames",
                    "name": "Sao Paulo",
                    "longOnlyHierarchyTypeaheadV2": "State of Sao Paulo, Brazil"
                },
                "geocode": {
                    "__typename": "LocationSelection_LocationInformationV2Geocode",
                    "latitude": -23.550455,
                    "longitude": -46.637535
                },
                "contact": {
                    "__typename": "LocationSelection_LocationInformationV2Contact",
                    "streetAddress": {
                        "__typename": "LocationSelection_Address",
                        "street1": ""
                    }
                },
                "route": {
                    "__typename": "Routing_Route",
                    "fragment": null,
                    "page": "Tourism",
                    "url": "/Tourism-g303631-Sao_Paulo_State_of_Sao_Paulo-Vacations.html",
                    "nonCanonicalUrl": "/Tourism-g303631-Sao_Paulo_State_of_Sao_Paulo-Vacations.html",
                    "typedParams": {
                        "__typename": "Routing_TourismParameters",
                        "geoId": 303631
                    }
                }
            },
            "details": {
                "__typename": "LocationInformation",
                "socialStatistics": {
                    "__typename": "SocialStatistics",
                    "isSaved": false
                }
            },
            "image": {
                "__typename": "PrimaryMedia_PrimaryMedia",
                "photo": {
                    "__typename": "Photo",
                    "photoSizeDynamic": {
                        "__typename": "PhotoSizeDynamic",
                        "maxHeight": 3456,
                        "maxWidth": 5184,
                        "urlTemplate": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/88/aa/57/caption.jpg?w={width}&h={height}&s=1"
                    },
                    "photoSizes": [
                        {
                            "__typename": "PhotoSize",
                            "height": 0,
                            "width": 0,
                            "url": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/88/aa/57/caption.jpg?w=100&h=100&s=1"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 50,
                            "width": 50,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-t/2b/88/aa/57/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 150,
                            "width": 150,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-l/2b/88/aa/57/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 200,
                            "width": 180,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-i/2b/88/aa/57/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 167,
                            "width": 250,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-f/2b/88/aa/57/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 367,
                            "width": 550,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-s/2b/88/aa/57/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 683,
                            "width": 1024,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-w/2b/88/aa/57/caption.jpg"
                        },
                        {
                            "__typename": "PhotoSize",
                            "height": 853,
                            "width": 1280,
                            "url": "https://media-cdn.tripadvisor.com/media/photo-m/1280/2b/88/aa/57/caption.jpg"
                        }
                    ]
                }
            }
        },
        {
            "__typename": "Typeahead_RescueResultItem",
            "documentId": "RESCUE",
            "text": "s"
        }
    ]

    const [attractions, setAttractions] = useState()
    const [searchString, setSearchString] = useState('')

    const API_KEY = import.meta.env.VITE_X_RAPIDAPI_KEY
    // location/search
    const url = `https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=${searchString}&lang=en_US&units=km`;
    // Location/auto-complete
    // const url = 'https://travel-advisor.p.rapidapi.com/locations/auto-complete?query=eiffel%20tower&lang=en_US&units=km';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': API_KEY,
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
    };

    useEffect(() => {

        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setAttractions(data.data)
        //     })

        // navigator.geolocation.getCurrentPosition( (position) => {
        //     // console.log('position', position)
        //     setLatitude(position.coords.latitude)
        // }, (error) => console.log('error', error))
        let filtered = sample.filter(place => 'detailsV2' in place)

        console.log('filetred', filtered)

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('search', searchString)
        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data.data.Typeahead_autocomplete.results);
        //         setAttractions(data.data.Typeahead_autocomplete.results)
        //     })
        let filtered = sample.filter(place => 'detailsV2' in place)
        console.log('filetred', filtered)
        setAttractions(filtered)
    }

    return (
        <main>
            <h1>Where to go?</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Paris, Madrir, Hawai...'
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <section className='attraction-card'>
                {attractions && attractions.map((attraction, id) => (
                    <article key={id}>
                        <Link to={`/location/${60763}`}>
                            <img src={attraction.image?.photo?.photoSizes.slice(-4)[0].url} alt={attraction.detailsV2?.names?.name} />
                            <h4>{attraction.detailsV2.names?.name}, {attraction.detailsV2.names.longOnlyHierarchyTypeaheadV2}</h4>
                        </Link>
                        <p>{attraction.detailsV2.locationId}</p>
                        <hr />
                    </article>
                ))}
            </section>
        </main>
    )
}