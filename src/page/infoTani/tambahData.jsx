import EditorText from "@/components/textAreaEditor"
import { Radio, Group, Button } from '@mantine/core';
import MainCard from "@/components/MainCard"
import TextInput from "@/components/uiComponents/inputComponents/textInput" 
import { IconPlus, IconX, IconDeviceFloppy} from '@tabler/icons-react';
const TambahInfoTani = ()=>{
    return(
        <MainCard transparent row center >
            <MainCard width="80%" >
                <h1 className="text-center">Tambahkan Data Tani</h1>
                <MainCard transparent gap="0">
                    <MainCard transparent noPadding  width="40%">
                        <TextInput id="judul" name="judul" label="Judul" />
                    </MainCard >
                    <MainCard transparent noPadding row gap="15rem">
                        <MainCard transparent noPadding gap="0">
                            <span>26 Oktober 2023</span>
                            <span>Dibuat Oleh: @suheri_26</span>
                        </MainCard>
                        <MainCard transparent noPadding gap="0">
                            <div className="flex justify-center">
                                    <IconPlus className="m-auto rounded-full h-[20px] w-[20px] border border-black me-1"/>
                                <span className="underline">Upload Baru</span>            
                            </div>
                        </MainCard>
                        <MainCard transparent noPadding gap="0">
                                <Radio.Group
                                    withAsterisk
                                    >
                                    <Group mt="xs">
                                        <Radio value="berita" label="Berita" />
                                        <Radio value="artikel" label="Artikel" />
                                        <Radio value="tips" label="Tips" />
                                    </Group>
                                </Radio.Group>
                        </MainCard>
                    </MainCard>
                </MainCard>
                <EditorText/>
                <MainCard transparent row style={{justifyContent:"end"}}>
                    <Button leftIcon={<IconDeviceFloppy size="1rem" />} variant='outline'>save</Button>
                    <Button leftIcon={<IconX size="1rem" />} variant='outline'>save</Button>
                </MainCard>
            </MainCard>
        </MainCard>
    )
}

export default TambahInfoTani