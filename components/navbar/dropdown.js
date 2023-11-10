'use client'
import { useEffect, useRef, useState } from 'react';
import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from '@mui/material';
import Link from 'next/link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
          href="/"
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{fontFamily:"'TildaSans', Arial, sans-serif", fontSize:"25px", fontWeight:"400", color:"#ffffff"}}
          >
            {props.title}<ArrowDropDownIcon/>
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
              <Paper
                style={{ borderRadius: "30px" }}
              >
                <ClickAwayListener onClickAway={handleClose} >
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{ display: 'flex', flexDirection: 'column', padding: '18px 20px', wordWrap: 'inherit', maxWidth: 200, borderRadius: "30px", background: '#7000ce' }}
                  >
                    <MenuItem onClick={handleClose}>
                      <a style={{ color: 'white', whiteSpace: 'normal' }} href={props.href1}>
                        {props.text1}
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a style={{ color: 'white', whiteSpace: 'normal' }} href={props.href2}>
                        {props.text2}
                      </a>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <a style={{ color: 'white', whiteSpace: 'normal' }} href={props.href3}>
                        {props.text3}
                      </a>
                    </MenuItem>
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