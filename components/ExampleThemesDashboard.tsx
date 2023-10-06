import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  CopyIcon,
  Cross2Icon,
  DotsHorizontalIcon,
  DrawingPinFilledIcon,
  DrawingPinIcon,
  MagnifyingGlassIcon,
  OpenInNewWindowIcon,
  PlusIcon,
  Share2Icon,
  CaretDownIcon,
  Pencil1Icon,
  MagicWandIcon,
  QuoteIcon,
  KeyboardIcon,
  CropIcon,
  UpdateIcon,
  EnvelopeClosedIcon,
  FileIcon,
  FileTextIcon,
} from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Separator,
  Strong,
  Switch,
  Text,
  TextField,
  Theme,
  TextArea,
  DropdownMenu,
  Quote,
} from '@radix-ui/themes';
import { Marker } from './Marker';
import { allPeople, email } from './people';
import * as React from 'react';

export const ExampleThemesDashboard = (props: React.ComponentPropsWithoutRef<typeof Flex>) => {
  const [state, setState] = React.useState({
    todo: [
      { id: 'a', completed: false },
      { id: 'b', completed: false },
      { id: 'c', completed: false },
      { id: 'd', completed: false },
      { id: 'e', completed: true },
      { id: 'f', completed: true },
    ],
    activityPinned: true,
    financePinned: false,
  });
  const [response, setResponse] = React.useState('');
  const [loader, setLoader] = React.useState(false);

  const GenerateText = async () => {
    setLoader(true);
    // Simulate a delay with setTimeout
    setTimeout(() => {
      setResponse('sample text');
      setLoader(false);
    }, 2000);
  };

  return (
    <Flex align="center" gap="6" {...props}>
      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 640,
          // Space to align the vertically centered content with the dot grid
          // marginBottom: 15,
        }}
      >
        <Card size="4">
          <Flex gap="3" mb="5">
            <Box grow="1">
              <TextField.Input tabIndex={-1} size="2" placeholder="Search cases" />
            </Box>
            <Button tabIndex={-1} size="2">
              <MagnifyingGlassIcon />
            </Button>
          </Flex>

          <Flex direction="column">
            {[4, 2, 12, 20, 16].map((number, i) => (
              <Box key={number}>
                <Flex gap="4" align="center">
                  <Flex gap="3" align="center" style={{ width: 200, whiteSpace: 'nowrap' }}>
                    <Avatar
                      src={allPeople[number]?.image}
                      fallback={allPeople[number]?.name[0].toUpperCase()}
                    />
                    <Link tabIndex={-1} size="2">
                      {allPeople[number]?.name}
                    </Link>
                  </Flex>

                  <Text size="2" color="gray">
                    {email(allPeople[number]?.name)}
                  </Text>

                  <Flex grow="1" justify="end">
                    <IconButton tabIndex={-1} variant="ghost" highContrast>
                      <DotsHorizontalIcon width="16" height="16" />
                    </IconButton>
                  </Flex>
                </Flex>

                {i !== 4 && (
                  <Box style={{ marginTop: -1 }}>
                    <Separator size="4" my="3" />
                  </Box>
                )}
              </Box>
            ))}
          </Flex>
        </Card>

        <Card size="4" id="draftresponse">
          <Flex direction="column" gap="3">
            <Heading as="h3" size="3">
              <Flex gap="2" align="center">
                <MagicWandIcon width="15" height="15" />
                Draft a response
              </Flex>
            </Heading>

            <TextArea style={{ height: '200px' }}>
              {loader ? <img src="https://i.gifer.com/CVyf.gif" alt="Loading..." /> : response}
            </TextArea>
            <Flex justify="between">
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft" size="2">
                    Formal
                    <CaretDownIcon width="16" height="16" />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content size="1">
                  <DropdownMenu.Item>
                    <Flex gap="3">
                      Formal <QuoteIcon width="15" height="15" />
                    </Flex>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Flex gap="3">
                      Informal <KeyboardIcon width="15" height="15" />
                    </Flex>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <Flex gap="3">
                      Shorten <CropIcon width="15" height="15" />
                    </Flex>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              <Flex gap="3">
                <Button tabIndex={-1} size="2" onClick={GenerateText}>
                  Generate
                  {/* <UpdateIcon/> Try again */}
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Card>

        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Casework Tasks
            </Heading>
          </Box>

          <Flex gap="3" position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Share2Icon width="20" height="20" />
            </IconButton>
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <PlusIcon width="20" height="20" />
            </IconButton>
          </Flex>

          <Text as="p" size="2" mb="5" color="gray">
            Stay on top of your daily casework tasks.
          </Text>

          <ToDoList
            items={state.todo}
            onItemsChange={(items) => setState({ ...state, todo: items })}
          />
        </Card>
      </Flex>

      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 416,
          // Space to align the vertically centered content with the dot grid
          // marginBottom: 15,
        }}
      >
        

        <Card size="4">
          <Box position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Cross2Icon width="20" height="20" />
            </IconButton>
          </Box>

          <Flex gap="3" direction="column" align="center">
            <Marker height="8" width="8">
              <CheckIcon width="32" height="32" />
            </Marker>

            <Box height="8">
              <Heading as="h3" size="6">
                Case completed
              </Heading>
            </Box>
          </Flex>

          <Text as="p" size="3" align="center" mb="5">
            You helpd Poppy with her housing issue. A summary has been added to the database and
            sent to you from  <Strong>casework@user.rprsnt.ai</Strong>
          </Text>

          <Flex direction="column" gap="3" align="stretch">
            <Button tabIndex={-1}>Next case</Button>

            <Button tabIndex={-1} variant="outline">
              Done
            </Button>
          </Flex>
        </Card>

        <Card size="4">
          <Box position="absolute" top="0" right="0" m="3">
            <IconButton tabIndex={-1} variant="ghost" color="gray" highContrast>
              <Cross2Icon width="20" height="20" />
            </IconButton>
          </Box>

          <Box height="7" mb="4">
            <Heading as="h3" size="6" mt="-1">
              Case{' '}
              <Link tabIndex={-1} weight="bold">
                #3463
              </Link>
            </Heading>
          </Box>

          <Grid columns="2" gapX="4" gapY="5">
            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                Case Opened
              </Text>
              <Text as="div" size="3" weight="bold">
                June 21, 2023
              </Text>
            </Box>

            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                Case due
              </Text>
              <Text as="div" size="3" weight="bold">
                July 21, 2023
              </Text>
            </Box>

            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                Constituent
              </Text>
              <Text as="div" size="3" mb="1" weight="bold">
                John Doe
              </Text>
              <Text as="div" size="2">
                Tweed Rd, Clevedon, Avon, BS21 6RR, United Kingdom
              </Text>
            </Box>

            <Box>
              <Text as="div" size="2" mb="1" color="gray">
                Case Officer
              </Text>
              <Text as="div" size="3" mb="1" weight="bold">
                Jane Smith
              </Text>
              <Text as="div" size="2">
                99 Manchester Rd, Manchester, Lancashire, M21 9GA, United Kingdom
              </Text>
            </Box>

            <Flex direction="column" gap="1" style={{ gridColumn: '1 / -1' }}>
              <Flex justify="between">
                <Text size="2" mb="1" color="gray">
                  Issue
                </Text>
                <Text size="2" mb="1" color="gray">
                  Resolution
                </Text>
              </Flex>
              <Flex justify="between">
                <Text size="3" mb="1" weight="bold">
                  Housing
                </Text>
                <Text size="2">Resolved</Text>
              </Flex>
              <Box style={{ marginTop: -1 }}>
                <Separator size="4" mt="1" mb="2" />
              </Box>
              <Flex justify="between">
                <Text size="2">Total Cases</Text>
                <Text size="2">1</Text>
              </Flex>
            </Flex>
          </Grid>

          <Flex mt="6" justify="end" gap="3">
            <Button tabIndex={-1} variant="outline" color="red">
              Delete
            </Button>
            <Button tabIndex={-1}>Add</Button>
          </Flex>
        </Card>
      </Flex>

      <Flex
        shrink="0"
        gap="6"
        direction="column"
        style={{
          width: 640,
          // Space to align the vertically centered content with the dot grid
          // marginBottom: -13,
        }}
      >
        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Casework Metrics
            </Heading>
          </Box>

          <Flex position="absolute" top="0" right="0" m="3">
            <IconButton
              tabIndex={-1}
              variant="ghost"
              color="gray"
              highContrast
              style={{ margin: 0 }}
            >
              <OpenInNewWindowIcon width="20" height="20" />
            </IconButton>

            <IconButton
              tabIndex={-1}
              variant={state.financePinned ? 'soft' : 'ghost'}
              color="gray"
              highContrast
              style={{ margin: 0 }}
              onClick={() =>
                setState((state) => ({ ...state, financePinned: !state.financePinned }))
              }
            >
              {state.financePinned ? (
                <DrawingPinFilledIcon width="20" height="20" />
              ) : (
                <DrawingPinIcon width="20" height="20" />
              )}
            </IconButton>
          </Flex>

          <Text as="p" size="2" mb="6" color="gray">
            Review your casework KPIs for the month.
          </Text>

          <Grid columns="3" gap="5">
            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Open Cases
                </Text>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                120
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Closed Cases
                </Text>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                85
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Cases Overdue
                </Text>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                35
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  New Cases
                </Text>
                <Badge color="red" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  5%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                25
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Resolved Cases
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  10%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                30
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Active Cases
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  2%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                90
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Average Resolution Time
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowDownIcon width="12" height="12" style={{ marginLeft: -2 }} />1 day
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                3 days
              </Text>
            </Box>

            <Box>
              <Flex gap="2" mb="2" align="center">
                <Text size="2" color="gray">
                  Constituent Satisfaction
                </Text>
                <Badge color="teal" radius="full">
                  <ArrowUpIcon width="12" height="12" style={{ marginLeft: -2 }} />
                  5%
                </Badge>
              </Flex>
              <Text as="div" mb="2" size="8" weight="bold">
                85%
              </Text>
            </Box>
          </Grid>
        </Card>

        <Card size="4">
          <Box height="7">
            <Heading as="h3" size="6" mt="-1">
              Recent activity
            </Heading>
          </Box>

          <Flex position="absolute" top="0" right="0" m="3">
            <IconButton
              tabIndex={-1}
              variant="ghost"
              color="gray"
              highContrast
              style={{ margin: 0 }}
            >
              <OpenInNewWindowIcon width="20" height="20" />
            </IconButton>

            <IconButton
              tabIndex={-1}
              variant={state.activityPinned ? 'soft' : 'ghost'}
              color="gray"
              highContrast
              style={{ margin: 0 }}
              onClick={() =>
                setState((state) => ({ ...state, activityPinned: !state.activityPinned }))
              }
            >
              {state.activityPinned ? (
                <DrawingPinFilledIcon width="20" height="20" />
              ) : (
                <DrawingPinIcon width="20" height="20" />
              )}
            </IconButton>
          </Flex>

          <Text as="p" size="2" mb="7" color="gray">
            Review what has happened over the past days.
          </Text>

          <Flex direction="column">
            <Flex direction="column" gap="3" mb="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[6].image}
                    fallback={allPeople[6]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[6].name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Closed case <Link tabIndex={-1}>#3461</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 21, 11:34 am
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[8].image}
                    fallback={allPeople[8]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[8].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Resolved <Link tabIndex={-1}>housing issue</Link> for{' '}
                      <Link tabIndex={-1}>John Doe</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 21, 9:43 am
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[8].image}
                    fallback={allPeople[8]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[8].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Responded to your comment <Link tabIndex={-1}>#7514</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 21, 9:41 am
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[28].image}
                    fallback={allPeople[28]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[28].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Completed <Link tabIndex={-1}>4 casework tasks</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 4:55 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[26].image}
                    fallback={allPeople[26]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[26].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Updated case details for <Link tabIndex={-1}>John Doe</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 3:30 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[25].image}
                    fallback={allPeople[25]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[25].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Created <Link tabIndex={-1}>a new report</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 3:22 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" my="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[25].image}
                    fallback={allPeople[25]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[25].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Deleted report <Link tabIndex={-1}>#34</Link>
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 1:00 pm
                </Text>
              </Flex>
            </Flex>

            <Box style={{ marginTop: -1 }}>
              <Separator size="4" />
            </Box>

            <Flex direction="column" gap="3" mt="5">
              <Flex justify="between" align="center">
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src={allPeople[20].image}
                    fallback={allPeople[20]?.name[0].toUpperCase()}
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      {allPeople[20].name}
                    </Text>
                    <Text as="p" size="2" color="gray">
                      Joined the team
                    </Text>
                  </Box>
                </Flex>

                <Text size="2" color="gray">
                  June 20, 12:47 pm
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

interface ToDoItem {
  id: string;
  completed: boolean;
}

interface ToDoList {
  items: ToDoItem[];
  onItemsChange: (items: ToDoItem[]) => void;
}

const itemsContent = {
  a: (
    <span>
      Respond to constituent{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        John Doe
      </Link>{' '}
      regarding housing issue
    </span>
  ),
  b: (
    <span>
      Schedule meeting with{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        Acme Co.
      </Link>{' '}
      regarding local development
    </span>
  ),
  c: (
    <span>
      Prepare briefing{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        requested
      </Link>{' '}
      by Mayor Sousa
    </span>
  ),
  d: (
    <span>
      Review support request{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        #85
      </Link>
    </span>
  ),
  e: <span>Close Q2 budget review</span>,
  f: (
    <span>
      Review case{' '}
      <Link tabIndex={-1} onClick={(event) => event.preventDefault()}>
        #3456
      </Link>
    </span>
  ),
};

const ToDoList = ({ items, onItemsChange }: ToDoList) => {
  return (
    <Flex gap="2" direction="column">
      {items.map((item) => (
        <Label key={item.id}>
          <Flex gap="2" align="center">
            <Checkbox
              tabIndex={-1}
              checked={item.completed}
              onCheckedChange={(checked) => {
                const newItems = items.slice();
                const newItem = newItems.find((candidate) => candidate.id === item.id);
                newItem.completed = Boolean(checked);
                onItemsChange(newItems);
              }}
            />
            <Text
              size="2"
              color={item.completed ? 'gray' : undefined}
              style={
                {
                  textDecoration: item.completed ? 'line-through' : undefined,
                  '--accent-12': 'var(--accent-11)',
                } as React.CSSProperties
              }
            >
              {itemsContent[item.id]}
            </Text>
          </Flex>
        </Label>
      ))}
    </Flex>
  );
};
