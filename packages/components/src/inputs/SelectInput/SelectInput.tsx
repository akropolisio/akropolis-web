import React, {
  ComponentPropsWithoutRef,
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import cn from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import { MenuProps } from '@material-ui/core/Menu';
import { useAncestorBackgroundHack } from '@akropolis-web/styles';
import * as R from 'ramda';

import { Arrow } from '../../icons/Arrow';
import { TextInput } from '../TextInput';
import { useStyles } from './SelectInput.style';

type Option = {
  id: string;
  label: string | JSX.Element;
};

type OwnProps = {
  options: Option[];
  selectAll?: Option;
};

type SelectInputProps = OwnProps & ComponentPropsWithoutRef<typeof TextInput>;

const MENU_PADDINGS_HEIGHT = 15;
const MENU_SHIFT_HEIGHT = 20;

export function SelectInput(props: SelectInputProps) {
  const {
    options,
    selectAll,
    value: inputValue,
    onChange,
    InputProps = {},
    SelectProps = {},
    ...restProps
  } = props;

  const { className: inputClassName, ...restInputProps } = InputProps;
  const { className: selectClassName, MenuProps: menuProps, ...restSelectProps } = SelectProps;
  const classes = useStyles();
  const backgroundColor = useAncestorBackgroundHack();
  const currentWindowHeight = useWindowHeight();
  const hasSingleOption = options.length <= 1;

  const [isMenuOpen, setIsOpen] = useState(false);
  const [toBottomDistance, setToBottomDistance] = useState(0);
  const [toTopDistance, setToTopDistance] = useState(0);
  const [value, setValue] = useState(inputValue);

  const selectInputRef = useRef<HTMLDivElement>(null);
  const handleSelectOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleSelectClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const inputRect = selectInputRef.current?.getBoundingClientRect();

    if (inputRect) {
      const { bottom, top } = inputRect;
      setToBottomDistance(currentWindowHeight - bottom - MENU_SHIFT_HEIGHT);
      setToTopDistance(top - MENU_SHIFT_HEIGHT);
    }
  }, [currentWindowHeight]);

  const selectHeight =
    Number(selectInputRef.current?.offsetHeight) * options.length + MENU_PADDINGS_HEIGHT;
  const hasBottomSpace = toBottomDistance > selectHeight;
  const hasTopSpace = toTopDistance > selectHeight;

  const menuPositionProps = useMemo<Partial<MenuProps>>(() => {
    function getVerticalPosition(type: 'anchor' | 'transform') {
      if (hasBottomSpace) {
        return type === 'anchor' ? 'bottom' : 'top';
      }
      if (hasTopSpace) {
        return type === 'anchor' ? 'top' : 'bottom';
      }

      return 'center';
    }

    return {
      elevation: 0,
      anchorOrigin: {
        vertical: getVerticalPosition('anchor'),
        horizontal: 'center',
      },
      transformOrigin: {
        vertical: getVerticalPosition('transform'),
        horizontal: 'center',
      },
      getContentAnchorEl: null,
    };
  }, [hasBottomSpace, hasTopSpace]);

  const handleInputChange = useCallback(
    event => {
      if (!selectAll) {
        onChange && onChange(event);
        return;
      }

      const newValue = event.target.value;

      const isAllOptionSelected =
        ((newValue as string[]).includes(selectAll.id) &&
          !(value as string[]).includes(selectAll.id)) ||
        (R.equals(value, [selectAll.id]) && R.equals(newValue, [selectAll.id]));

      if (isAllOptionSelected) {
        setValue([selectAll.id]);
        onChange && onChange(event);
      } else {
        setValue((newValue as string[]).filter(val => val !== selectAll.id));
        onChange && onChange(event);
      }
    },
    [selectAll, value],
  );

  return (
    <TextInput
      {...restProps}
      value={selectAll ? value : inputValue}
      ref={selectInputRef}
      select
      variant="outlined"
      disabled={hasSingleOption}
      className={cn(selectClassName, classes.root, {
        [classes.isOpen]: isMenuOpen,
        [classes.withSingleOption]: hasSingleOption,
        [classes.hasBottomSpace]: hasBottomSpace,
        [classes.hasTopSpace]: !hasBottomSpace && hasTopSpace,
      })}
      onChange={handleInputChange}
      InputProps={{
        ...restInputProps,
        className: cn(inputClassName, classes.input),
      }}
      SelectProps={{
        ...restSelectProps,
        classes: {
          select: classes.select,
        },
        MenuProps: {
          ...menuProps,
          PaperProps: {
            variant: 'outlined',
            className: cn(classes.paper, {
              [classes.hasBottomSpace]: hasBottomSpace,
              [classes.hasTopSpace]: !hasBottomSpace && hasTopSpace,
            }),
            style: { backgroundColor },
          },
          ...menuPositionProps,
        },
        IconComponent: renderArrowIcon,
        onOpen: handleSelectOpen,
        onClose: handleSelectClose,
      }}
    >
      {options.map(({ id, label }) => {
        return (
          <MenuItem key={id} value={id} className={classes.menuItem}>
            {label}
          </MenuItem>
        );
      })}
      {selectAll && (
        <MenuItem key={selectAll.id} value={selectAll.id} className={classes.menuItem}>
          {selectAll.label}
        </MenuItem>
      )}
    </TextInput>
  );

  function renderArrowIcon() {
    return (
      <div className={classes.arrowIcon}>
        <Arrow fontSize="inherit" />
      </div>
    );
  }

  function useWindowHeight() {
    const [windowHeight, setWindowHeight] = useState<number>(0);

    useEffect(() => {
      function handleResize() {
        setWindowHeight(window.innerHeight);
      }

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowHeight;
  }
}
