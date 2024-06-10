import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const StyledContainer = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing(4)}px;
  padding: ${({ theme }) => theme.spacing(2)}px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PrivacyPolicy = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: [06-10-2024]
      </Typography>
      <Typography variant="body1" paragraph>
        At NoteSync, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and disclose your information when you use our website and services.
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We may collect the following types of information:
        <ul>
          <li><strong>Personal Information:</strong> Information that can be used to identify you, such as your name, email address, and phone number.</li>
          <li><strong>Usage Data:</strong> Information about how you use our website and services, including your IP address, browser type, and operating system.</li>
        </ul>
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        We use your information for the following purposes:
        <ul>
          <li>To provide, operate, and maintain our website and services.</li>
          <li>To improve, personalize, and expand our website and services.</li>
          <li>To communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
        </ul>
      </Typography>
      <Typography variant="h6" gutterBottom>
        3. Sharing Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        We may share your information with third parties in the following situations:
        <ul>
          <li>With your consent.</li>
          <li>For external processing by trusted partners and service providers who assist us in operating our website, conducting our business, or serving our users.</li>
          <li>To comply with legal obligations or to protect and defend our rights and property.</li>
        </ul>
      </Typography>
      <Typography variant="h6" gutterBottom>
        4. Data Security
      </Typography>
      <Typography variant="body1" paragraph>
        We use administrative, technical, and physical security measures to help protect your personal information. While we take reasonable steps to secure your information, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
      </Typography>
      <Typography variant="h6" gutterBottom>
        5. Your Privacy Rights
      </Typography>
      <Typography variant="body1" paragraph>
        Depending on your location, you may have the following rights regarding your personal information:
        <ul>
          <li>The right to access – You have the right to request copies of your personal information.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
          <li>The right to erasure – You have the right to request that we erase your personal information, under certain conditions.</li>
        </ul>
      </Typography>
      <Typography variant="h6" gutterBottom>
        6. Changes to This Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </Typography>
      <Typography variant="h6" gutterBottom>
        7. Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about this Privacy Policy, please contact us at: info@notesync.com
      </Typography>
    </StyledContainer>
  );
};

export default PrivacyPolicy;
