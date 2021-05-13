import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), { //chama o chart de maneira dinamica
    ssr: false,         //Faz com que o chart seja carregado apenas pelo browser e não pelo next
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: theme.colors.gray[500]
    },

    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis:{
        type: 'datetime',
        axisBorder:{
            color: theme.colors.gray[600]
        },
        axisTicks:{
            color: theme.colors.gray[600]
        },
        categories:[
                '2021-05-18T00:00:00.000Z',
                '2021-05-19T00:00:00.000Z',
                '2021-05-20T00:00:00.000Z',
                '2021-05-21T00:00:00.000Z',
                '2021-05-22T00:00:00.000Z',
                '2021-05-23T00:000:00.000Z',
                '2021-05-24T00:00:00.000Z',
            ],
     },
    fill: {
        opacity:0.3,
        type:'gradient',
        gradient:{
            shade:'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3, 
        }
    }
};

const series = [
    {
        name: "series1",
        data: [31, 120, 10, 28, 61, 18, 300]
    }
]


export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex width="100%" my="6" maxWidth="1480px" mx="auto" px="6">
                <Sidebar />

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box
                        p={["6","8"]}
                        background="gray.800"
                        borderRadius="8px"
                        paddingBottom="4"
                    >
                        <Text fontSize="lg" marginBottom="4">
                            Inscritos da Semana
                    </Text>
                        <Chart options={options} series={series} type="area" height="160px" />
                    </Box>
                    <Box
                        p={["6","8"]}
                        background="gray.800"
                        borderRadius="8px"
                        paddingBottom="4"
                    >
                        <Text fontSize="lg" marginBottom="4">
                            Taxa de abertura
                    </Text>
                        <Chart options={options} series={series} type="area" height="160px" />
                    </Box>

                </SimpleGrid>
            </Flex>
        </Flex>
    )
}