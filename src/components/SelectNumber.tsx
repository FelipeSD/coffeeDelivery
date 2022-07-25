import { IconButton, Stack, Typography as Text, useTheme } from "@mui/material";
import { Minus, Plus } from "phosphor-react";

export default function SelectNumber() {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            // spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{
                backgroundColor: theme.palette.baseButton,
                padding: "0.35rem",
                borderRadius: "0.5rem",
            }}
        >
            <IconButton size="small">
                <Minus color={theme.palette.purple} />
            </IconButton>

            <Text variant="regularM" component="span">
                1
            </Text>

            <IconButton size="small">
                <Plus color={theme.palette.purple} />
            </IconButton>
        </Stack>
    )
}