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
      <Image src= '/rprsnt_logo_mobile.svg' alt="Logo Mobile" width={50} height={50} />
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
      <Heading size="4">Forgot your password?</Heading>
      </Box>
      </Flex>
         

          <Box mb="5">
            <Label>
              <Text as="div" size="2" weight="bold" mb="2">
                Email address
              </Text>
              <TextField.Input tabIndex={-1} placeholder="Enter your email here" />
            </Label>
          </Box>

          <Box mb="5" position="relative">
            

            
          </Box>

          <Flex mt="6" justify="end" gap="3">
          <NextLink href="/login">
            <Button tabIndex={-1} variant="outline">
              Back
            </Button>
            </NextLink>
            <Button tabIndex={-1} onClick={handleClick}>Get password</Button>
            
          </Flex>
          
        </Card>
        {showCallout && (
              <Callout.Root color="red">
              <Callout.Icon>
                <InfoCircledIcon />
              </Callout.Icon>
              <Callout.Text size="1">
                Email not recognised. Try again.
              </Callout.Text>
            </Callout.Root>
            )}
        </Flex>
        
    </div>
  )
}

export default login