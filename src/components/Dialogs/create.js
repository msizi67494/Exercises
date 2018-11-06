import React, { Component } from 'react';
import { Dialog, Button, DialogContent, DialogContentText, DialogTitle, TextField, DialogActions, FormControl, InputLabel, Select, MenuItem, WithStyles } from '@material-ui/core';
import { Add } from '@material-ui/icons';

 // CSS in JS
 const styles = theme => ({

    FormControl: {
        minWidth: 500
    }
})

export default withStyles(styles) (class Form extends Component {
    // component state
    state = {
        open: false,
        exercises: {
            title: '',
            description: '',
            muscles: ''
        }
        
    }

   

    // 
    handleToggle =() => {
        this.setState({
            open: !this.state.open
            })
        }

    handleChange = name => ({target: {value} }) => {
        
        this.setState({
            exercises: {
                ...this.state.exercises,
            [name] : value
            }
            
        })
    }

    render(){
        const { open, exercises: {title, description, muscles} } = this.state
        const { muscles: categories, classes} = this.props 

        return <div>
                <Button onClick={this.handleToggle} fullWidth="false" variant="fab" color="inherit" mini style={{flexGrow: 1, marginLeft: 30, marginRight: 12, width: 40 }}>
                    <Add/>
                </Button>
                <Dialog
                open={open}
                onClose={this.handleToggle}
                aria-labelledby="form-dialog-title"
                 >

                <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Please fill in the form below
                </DialogContentText>
                <form>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="title"
                        value={title}
                        onChange={this.handleChange('title')}
                    />
                    <br />
                    <FormControl>
                        <InputLabel  htmlFor="muscles">Muscles</InputLabel>
                        <Select
                            value={muscles}
                            onChange={this.handleChange('muscles')}
                            fullWidth
                            className={classes.FormControl}
                        >
                            {categories.map(category => 
                                    <MenuItem value={category}>{category}</MenuItem>
                                )}
                        </Select>
                    </FormControl>
                    <br/>
                    <TextField
                        autoFocus
                        multiline
                        rows="2"
                        margin="dense"
                        label="description"
                        value={description}
                        onChange={this.handleChange('description')}
                    
                    />
                    <br/>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="muscle"
                        value={muscles}
                        onChange={this.handleChange('muscle')}
                    
                        
                    />
                </form>
                </DialogContent>
                <DialogActions>
                <Button 
                    color="primary"
                    onClick={this.handleChange}
                >
                    Create
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    }
})
    