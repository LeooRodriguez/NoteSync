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

const TermsAndConditions = () => {
  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Terms and Conditions
      </Typography>
      <Typography variant="body1" paragraph>
        Last updated: [06-10-2024]
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing and using the NoteSync website (the "Site"), you agree to be bound by the terms and conditions set forth in this document (the "Terms"). If you do not agree to these Terms, you should not use the Site.
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. Changes to the Terms
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to modify these Terms at any time. We will notify you of any significant changes through the Site. It is your responsibility to review these Terms periodically to stay informed of any modifications. Continued use of the Site after changes are posted constitutes your acceptance of those changes.
      </Typography>
      <Typography variant="h6" gutterBottom>
        3. Description of Service
      </Typography>
      <Typography variant="body1" paragraph>
        NoteSync is a web application that allows users to create, edit, organize, and delete notes. We strive to keep the Site operational and available at all times, but we do not guarantee that the service will be uninterrupted or error-free.
      </Typography>
      <Typography variant="h6" gutterBottom>
        4. Account Registration and Security
      </Typography>
      <Typography variant="body1" paragraph>
        To use certain features of the Site, you may need to register and create an account. You are responsible for maintaining the confidentiality of your account and password, and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
      </Typography>
      <Typography variant="h6" gutterBottom>
        5. Privacy
      </Typography>
      <Typography variant="body1" paragraph>
        Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share your personal information.
      </Typography>
      <Typography variant="h6" gutterBottom>
        6. Acceptable Use
      </Typography>
      <Typography variant="body1" paragraph>
        You agree to use the Site only for lawful purposes and in accordance with these Terms. You must not:
        <ul>
          <li>Post content that is illegal, offensive, defamatory, or infringes the intellectual property rights of others.</li>
          <li>Interfere with the operation of the Site or attempt to access restricted areas of the Site.</li>
          <li>Use the Site to distribute malware, spam, or any other form of unwanted content.</li>
        </ul>
      </Typography>
      <Typography variant="h6" gutterBottom>
        7. Intellectual Property
      </Typography>
      <Typography variant="body1" paragraph>
        All content on the Site, including but not limited to text, graphics, logos, button icons, images, and software, is the property of NoteSync or its content suppliers and is protected by copyright and other intellectual property laws.
      </Typography>
      <Typography variant="h6" gutterBottom>
        8. Termination
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to suspend or terminate your access to the Site at any time, without prior notice, for any reason, including but not limited to breach of these Terms.
      </Typography>
      <Typography variant="h6" gutterBottom>
        9. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        To the maximum extent permitted by law, NoteSync shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or inability to use the Site.
      </Typography>
      <Typography variant="h6" gutterBottom>
        10. Governing Law
      </Typography>
      <Typography variant="body1" paragraph>
        These Terms shall be governed by and construed in accordance with the laws of the country where NoteSync is located, without regard to its conflict of law principles. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of that jurisdiction.
      </Typography>
      <Typography variant="h6" gutterBottom>
        11. Contact
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about these Terms, please contact us at: info@notesync.com
      </Typography>
    </StyledContainer>
  );
};

export default TermsAndConditions;
