import { Box, Stack, useTheme } from "@mui/material";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useState } from "react";
import SelectItem from "../../../components/SelectItem";
import Legend from "./Legend";

export default function Payment() {
    const theme = useTheme();
    const [selected, setSelected] = useState<string>("creditCard");

    function handleSelect(value: string) {
        setSelected(value);
    }

    return (
        <Box my={2} p={5} className="card-default">
            <Legend
                title="Pagamento"
                description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
                icon={<CurrencyDollar color={theme.palette.purple} />}
            />

            <Stack direction={{ xs: "column", md: "row" }} spacing={1} mt={3}>
                <SelectItem
                    text="Cartão de crédito"
                    icon={<CreditCard />}
                    onClick={() => handleSelect("creditCard")}
                    selected={selected === "creditCard"}
                />
                <SelectItem
                    text="Cartão de débito"
                    icon={<Bank />}
                    onClick={() => handleSelect("debitCard")}
                    selected={selected === "debitCard"}
                />
                <SelectItem
                    text="Dinheiro"
                    icon={<Money />}
                    onClick={() => handleSelect("money")}
                    selected={selected === "money"}
                />
            </Stack>
        </Box>
    )
}