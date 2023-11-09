'use client'
import { useEffect, useRef, useState } from 'react';
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import Link from 'next/link'

const DropDown=(props)=>{
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
  
      prevOpen.current = open;
    }, [open]);
    return (
        <div>
        <Link 
          style={{marginRight: 20}} 
          href="/"
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          >
            {props.title}
          </Link>
          <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{display: 'flex', flexDirection: 'column'}}
                  >
                    <MenuItem onClick={handleClose}><a style={{color: 'black'}} href={props.href1}>{props.text1}</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={{color: 'black'}} href={props.href2}>{props.text2}</a></MenuItem>
                    <MenuItem onClick={handleClose}><a style={{color: 'black'}} href={props.href3}>{props.text3}</a></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
    );
}

export default DropDown;