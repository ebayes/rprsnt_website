import * as React from "react"
import { Label } from '@radix-ui/react-label';
import Image from 'next/image';
import { Box, Button, Card, Flex, Heading, Link, Text, TextField, Callout } from '@radix-ui/themes';
import NextLink from 'next/link';
import { useState } from 'react';
import { InfoCircledIcon } from '@radix-ui/react-icons'

function login() {
  const [showCallout, setShowCallout] = useState(false);

  const handleClick = () => {
    setShowCallout(true);
  };

  return (
    <div style={{ 
      backgroundImage: `url('/rprsnt_bg_1.svg')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
      gap: '30px', 
  }}>
      <Link href="/">
      <Image src= '/rprsnt_logo_mobile.svg' alt="Logo Mobile" width={50} height={50} />
      </Link>
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
        
  
      <Card size="4" >
      <Flex align="center" justify="center">
      <Box mb="5">
      <Heading size="4">Login to RPRSNT</Heading>
      </Box>
      </Flex>
      
         

          <Box mb="5">
            <Label>
              <Text as="div" size="2" weight="bold" mb="2">
                Email address
              </Text>
              <TextField.Input tabIndex={-1} placeholder="Enter your email" />
            </Label>
          </Box>

          <Box mb="5" position="relative">
            <Box position="absolute" top="0" right="0" style={{ marginTop: -2 }}>
              <Link tabIndex={-1} size="2" href="/forgot">
                Forgot password?
              </Link>
            </Box>

            <Label>
              <Text as="div" size="2" weight="bold" mb="2">
                Password
              </Text>
              <TextField.Input type="password" tabIndex={-1} placeholder="Enter your password" />
            </Label>
          </Box>

          <Flex mt="6" justify="end" gap="3">
          <NextLink href="https://tally.so/r/w4B7Nr">
            <Button tabIndex={-1} variant="outline">
              Create an account
            </Button>
            </NextLink>
            <Button tabIndex={-1} onClick={handleClick}>Sign in</Button>
            
          </Flex>
          
        </Card>
        {showCallout && (
              <Callout.Root color="red">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text size="1">
                Wrong email or password. Try again or click <Link href="/forgot">forgot password</Link> to reset it.
              </Callout.Text>
            </Callout.Root>
            )}
        </Flex>
        
    </div>
  )
}

export default login