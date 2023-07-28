import { changeTheme,ThemeState} from "@/store/theme";


export const onChangeTheme = ({ theme, darkMode,dispatch }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }));
  };
