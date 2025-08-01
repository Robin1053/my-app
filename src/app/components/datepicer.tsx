
import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, StaticTimePicker, DatePicker } from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


export default function TimePiAcker() {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                    <StaticTimePicker defaultValue={dayjs('2022-04-17T15:30')} ampm={false} />
                </DemoContainer>
            </LocalizationProvider>
        </>
    );
}
