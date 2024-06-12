// /* istanbul ignore file */
// import React from 'react';

// import isEqual from 'lodash/isEqual';

// import { SearchFilter } from 'lumapps-sdk-js';

// import { Button, Checkbox, FlexBox, List, ListItem, MultiSelect, Orientation, Size, Text } from '@lumx/react';
// import { mdiFilterOutline } from '@lumx/icons';

// export type FilterProps = {
//     /** Label for the filter */
//     label: Record<string, string>;
//     /** Current selected filter value(s) */
//     value?: SearchFilter | SearchFilter[];
//     /** Options for the filter */
//     choices: SearchFilter[];
//     /** Unique identifier for the filter */
//     id: string;
//     /** Field name associated with the filter */
//     field: string;
// // Omit isCollapsed as it's not relevant for the dropdown implementation  </b>
//     /** Whether the filter supports selecting multiple options */
//     isMultiple?: boolean;
//     /** Whether to display all available options even if they have no counts */
//     shouldDisplayAllValues: boolean;
//     /** Action to perform when the filter value changes */
//     onChange(value: SearchFilter | SearchFilter[]): void;
// };

// export const Filter = ({ label, value, choices, id, field, isMultiple, shouldDisplayAllValues, onChange }: FilterProps) => {
//     const [isOpen, setOpen] = React.useState(false);
//     const toggleOpen = () => setOpen((wasOpen) => !wasOpen);
//     const anchorRef = React.useRef(null);

//     const handleOnChange = (selectedValue: SearchFilter | SearchFilter[]) => {
//         if (!isEqual(selectedValue, value)) {
//             onChange(selectedValue);
//         }
//     };

//     const renderItem = (option: SearchFilter) => <Text>{option.label.default}</Text>;

//     return (
//         <FlexBox orientation={Orientation.horizontal} hAlign="center">
//             <Text as="p" typography="caption" className="lumx-spacing-margin-right-big">
//                 {label.default}
//             </Text>
//             {isMultiple ? (
//                 <MultiSelect
//                     aria-haspopup
//                     aria-controls={id}
//                     aria-expanded={isOpen}
//                     ref={anchorRef}
//                     onOpen={toggleOpen}
//                     onClose={toggleOpen}
//                     size="s"
//                     rightIcon={mdiFilterOutline}
//                     value={value || []}
//                     onChange={handleOnChange}
//                     renderOption={renderItem}
//                     shouldDisplayAllValues={shouldDisplayAllValues}
//                 />
//             ) : (
//                 <Button
//                     aria-haspopup
//                     aria-controls={id}
//                     aria-expanded={isOpen}
//                     ref={anchorRef}
//                     onClick={toggleOpen}
//                     size="s"
//                     rightIcon={mdiFilterOutline}
//                     emphasis="low"
//                 >
//                     {value ? value.label.default : 'Select a value'}
//                 </Button>
//             )}
//             {isOpen && (
//                 <List role="menu" aria-label={label.default}>
//                     {choices.map((option) => (
//                         <ListItem key={option.value} role="menuitem" size={Size.tiny}>
//                             <Checkbox
//                                 checked={value?.includes(option) || false} // Handles both single and multi-select cases
//                                 onChange={(e) => handleOnChange(e.target.checked ? option : value?.filter((v) => v !== option) || [])}
//                             >
//                                 {option.label.default}
//                             </Checkbox>
//                         </ListItem>
//                     ))}
//                 </List>
//             )}
//         </FlexBox>
//     );
// };
