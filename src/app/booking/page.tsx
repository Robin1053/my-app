'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { jsConfettiRef } from '../components/ConfettiWrapper';
import TimePicker from '../components/datepicer';
import { ClassNames } from '@emotion/react';



export function getSteps() { }

const steps = [
    'Wann hast du Zeit?',
    'Was möchtest du machen?',
    'Wo möchtest du es machen?',
];
const getStepContent = (step: number) => {
    switch (step) {
        case 0:
            return <>
                <div className='center-content'>
                    <Typography variant="h5">Bitte wähle eine Zeit aus.</Typography>
                    <TimePicker></TimePicker>
                </div>
            </>;
        case 1:
            return <Typography>Was möchtest du gemeinsam machen? Kino, Spaziergang, ...?</Typography>;
        case 2:
            return <Typography>Wähle einen Ort, z. B. Café, Park oder deine Lieblingsstadt.</Typography>;
        default:
            return <Typography>Unbekannter Schritt</Typography>;
    }
};

export default function HorizontalLinearStepper() {


    useEffect(() => {
        const shouldShow = localStorage.getItem('showConfetti');
        if (shouldShow === 'true') {
            jsConfettiRef.instance?.addConfetti({
                emojis: ['💖', '🌹', '🎉', '❤️'],
                confettiNumber: 100,
                emojiSize: 40,
            });
            localStorage.removeItem('showConfetti');
        }
    }, []);

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());

    const isStepSkipped = (step: number) => skipped.has(step);

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setSkipped(new Set());
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps: { completed?: boolean } = {};
                    const labelProps: {
                        optional?: React.ReactNode;
                    } = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }

                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        Alle Schritte abgeschlossen – ich freu mich auf dich&nbsp;<span role="img" aria-label="Herz">❤️</span>
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Zurücksetzen</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ mt: 2, mb: 1 }}>{getStepContent(activeStep)}</Box>
                    <div className='absolute bottom-0 left-0 w-full bg-gray-200 p-4'>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />

                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </div>
                </React.Fragment>

            )}
        </Box>
    );
}
