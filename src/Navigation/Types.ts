export interface NavigationTreeCategory {
    displayName: string;
    rootUrl: string;
    items: NavigationTreeItem[]
}

export interface NavigationTreeItem {
    displayName: string;
    url: string;
}
