import { useColorMode } from '@docusaurus/theme-common';
import { Input, MantineProvider, Select } from '@mantine/core';
import CodeBlock from '@theme/CodeBlock';
import React, { useState } from 'react';

export const WidgetPreview = () => {
  const { colorMode } = useColorMode();

  const [protocol, setProtocol] = useState('https');
  const [url, setUrl] = useState('dash.mauz.io');
  const [widget, setWidget] = useState('cpu');
  const [multiView, setMultiView] = useState('false');
  const [showPercentage, setShowPercentage] = useState('false');
  const [primaryColor, setPrimaryColor] = useState('');
  const [surfaceColor, setSurfaceColor] = useState('');
  const [theme, setTheme] = useState('');
  const [outerRadius, setOuterRadius] = useState(20);
  const [innerRadius, setInnerRadius] = useState(10);
  const [gap, setGap] = useState(null);

  const multiViewAllowed = widget === 'cpu' || widget === 'storage';

  const multiViewPart =
    multiViewAllowed && multiView === 'true'
      ? `&multiView=${multiView.toString()}`
      : '';
  const showPercentagePart =
    showPercentage === 'true'
      ? `&showPercentage=${showPercentage.toString()}`
      : '';
  const themePart = theme !== '' ? `&theme=${theme}` : '';
  const primaryColorPart = primaryColor !== '' ? `&color=${primaryColor}` : '';
  const surfaceColorPart =
    surfaceColor !== '' ? `&surface=${surfaceColor}` : '';
  const innerRadiusPart =
    innerRadius !== null ? `&innerRadius=${innerRadius}` : '';
  const gapPart = gap !== null ? `&gap=${gap}` : '';

  const finalUrl = `${protocol}://${url}?singleGraphMode=true&graph=${widget}${multiViewPart}${showPercentagePart}${themePart}${primaryColorPart}${surfaceColorPart}${innerRadiusPart}${gapPart}`;

  return (
    <MantineProvider
      theme={{
        colorScheme: colorMode === 'dark' ? 'dark' : 'light',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            columnGap: '20px',
            rowGap: '10px',
            alignItems: 'center',
          }}
        >
          <Input.Wrapper label='URL'>
            <div
              style={{
                display: 'flex',
                flexFlow: 'row nowrap',
              }}
            >
              <Select
                style={{ width: '100px' }}
                value={protocol}
                onChange={e => setProtocol(e)}
                data={[
                  { value: 'https', label: 'https://' },
                  { value: 'http', label: 'http://' },
                ]}
              />
              <Input value={url} onChange={e => setUrl(e.target.value)} />
            </div>
          </Input.Wrapper>

          <Select
            label='Widget'
            value={widget}
            onChange={e => setWidget(e)}
            data={[
              { value: 'cpu', label: 'CPU' },
              { value: 'storage', label: 'Storage' },
              { value: 'ram', label: 'RAM' },
              { value: 'network', label: 'Network' },
              { value: 'gpu', label: 'GPU' },
            ]}
          />

          {multiViewAllowed && (
            <Select
              label='Multi-View'
              value={multiView}
              onChange={e => setMultiView(e)}
              data={[
                { value: 'true', label: 'True' },
                { value: 'false', label: 'False' },
              ]}
            />
          )}
          <Select
            label='Show Percentage'
            value={showPercentage}
            onChange={e => setShowPercentage(e)}
            data={[
              { value: 'true', label: 'True' },
              { value: 'false', label: 'False' },
            ]}
          />

          <Select
            label='Theme'
            value={theme}
            onChange={e => setTheme(e)}
            data={[
              { value: '', label: 'Inherit' },
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ]}
          />
          <Input.Wrapper label='Primary Color'>
            <Input
              icon='#'
              value={primaryColor}
              onChange={e => setPrimaryColor(e.target.value)}
            />
          </Input.Wrapper>
          <Input.Wrapper label='Surface Color'>
            <Input
              icon='#'
              value={surfaceColor}
              onChange={e => setSurfaceColor(e.target.value)}
            />
          </Input.Wrapper>

          <Input.Wrapper label='Outer Radius'>
            <Input
              rightSection='px'
              value={outerRadius}
              type='number'
              onChange={e =>
                setOuterRadius(e.target.value === '' ? null : +e.target.value)
              }
            />
          </Input.Wrapper>
          <Input.Wrapper label='Inner Radius'>
            <Input
              rightSection='px'
              value={innerRadius}
              type='number'
              onChange={e =>
                setInnerRadius(e.target.value === '' ? null : +e.target.value)
              }
            />
          </Input.Wrapper>
          <Input.Wrapper label='Gap'>
            <Input
              rightSection='px'
              value={gap}
              type='number'
              onChange={e =>
                setGap(e.target.value === '' ? null : +e.target.value)
              }
            />
          </Input.Wrapper>
        </div>

        <h3>Result</h3>
        <CodeBlock className={`language-html`}>
          {`<iframe
  src="${finalUrl}"${
            outerRadius != null
              ? `
  style="border-radius: ${outerRadius}px"`
              : ''
          }
  allowtransparency="true"
  frameborder="0"
></iframe>`}
        </CodeBlock>

        <iframe
          src={finalUrl}
          style={{
            borderRadius: (outerRadius ?? 0) + 'px',
            width: '100%',
            maxWidth: '300px',
          }}
          frameBorder='0'
          allowTransparency
        ></iframe>
      </div>
    </MantineProvider>
  );
};
