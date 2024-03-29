import * as React from 'react';

export type AlignProperty = 'left' | 'right' | 'center';

export type RowPaddingSize = 'medium' | 'small' | 'extra-small';

export type SubtablePaddingFromTitle = 'medium' | 'unset';

export type VerticalAlignProperty = 'center' | 'top' | 'bottom';

export type ColSpanProperty = number | 'end' | undefined;

export type RowWithClassName<T> = {
  className?: string;
  entryRowClassName?: string | ((entry: T, entryIndex: number, entries: T[]) => string);
  subRowClassName?: string;
  headerRowClassName?: string;
  subHeaderRowClassName?: string;
};

export type ColumnWithClassName<T> = {
  className?: string | ((entry: T, entryIndex: number, entries: T[]) => string);
};

export type Column<T, U = null> = {
  cellContent: CellContent<T, U>;
  align?: AlignProperty;
  verticalAlign?: VerticalAlignProperty;
  renderTitle?(): React.ReactNode;
  titleClassName?: string;
} & ColumnWithClassName<T>;

export type CellContent<T, U> = SimpleCellContent<T> | CellContentForRowExpander<T, U>;

export type SimpleCellContent<T> = {
  kind: 'simple';
  render(entry: T, entryIndex: number, entries: T[]): React.ReactNode;
  colSpan?: ColSpanProperty | ((entry: T, entryIndex: number, entries: T[]) => ColSpanProperty);
};

export type CellContentForRowExpander<T, U> = {
  kind: 'for-row-expander';
  expandedArea: ExpandedArea<T, U>;
  colSpan?: ColSpanProperty | ((entry: T, entryIndex: number, entries: T[]) => ColSpanProperty);
};

export type ExpandedArea<T, U> = ExpandedAreaWithinSingleCell<T> | ExpandedAreaWithinSubtable<T, U>;

export type ExpandedAreaWithinSingleCell<T> = {
  kind: 'single-cell';
  renderContent(entry: T, entryIndex: number, entries: T[]): React.ReactNode;
} & ColumnWithClassName<T>;

export type ExpandedAreaWithinSubtable<T, U> = {
  kind: 'subtable';
  paddingFromTitle?: SubtablePaddingFromTitle;
  getSubtableEntries(entry: T, entryIndex: number, entries: T[]): U[];
  subtableColumns: Array<SubtableColumn<U>>;
};

export type SubtableColumn<T> = {
  renderTitle?(): React.ReactNode;
  renderCell(subtableEntry: T, subtableEntryIndex: number, subtableEntries: T[]): React.ReactNode;
  align?: AlignProperty;
  titleClassName?: string;
} & ColumnWithClassName<T>;

export type Summary = {
  renderLabel(): React.ReactNode;
  renderValue(): React.ReactNode;
  className?: string;
};

export type RowCellsRendererAccumulator = {
  cells: React.ReactNode[];
  cellsToSkip: number;
};
