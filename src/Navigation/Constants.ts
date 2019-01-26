import { NavigationTreeCategory } from './Types';

export const APPLICATION_NAVIGATION_TREE: NavigationTreeCategory[] = [{
            displayName: 'Data Structures',
            rootUrl: '/data-structures',
            items: [
                {
                    displayName: 'Linked List',
                    url: '/linked-list'
                },
                {
                    displayName: 'Hash Table',
                    url: '/hash-table'
                }
            ]
        },
        {
            displayName: 'Algorithms',
            rootUrl: '/algorithms',
            items: [
                {
                    displayName: 'Bubble Sort',
                    url: '/bubble-sort'
                },
                {
                    displayName: 'Binary Search',
                    url: '/binary-search'
                }
            ]
        }];