import React, {Component} from 'react';
import {defaultProps, propTypes} from '../components/button.react';
import {
    Box,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Button,
    ThemeProvider,
    CssBaseline,
    TextField,
} from '@mui/material';
import {themes} from '@mott-macdonald/smi-react-ui-kit';

import '@mott-macdonald/smi-react-ui-kit/fonts.css';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class button extends Component {
    render() {
        const {id, label, setProps, value, n_clicks} = this.props;

        return (
            <ThemeProvider theme={themes.light}>
                <CssBaseline />
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={2}
                >
                    <Button
                        id={id}
                        value={value}
                        onChange={() => {
                            setProps({n_clicks: n_clicks + 1});
                            setProps({n_clicks_timestamp: Date.now()});
                        }}
                    >
                        {label}
                    </Button>
                    <TextField label="This is a text field from UI Kit" />
                    <Box sx={{minWidth: 120}}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Age (Select from UI Kit)
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Age"
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }
}

button.defaultProps = defaultProps;
button.propTypes = propTypes;
