type RootStackParamList = {
    Home: undefined;
    Detail:  { id: number; title: string; content: string, star: number } | undefined;
    About: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

declare module "*.png"