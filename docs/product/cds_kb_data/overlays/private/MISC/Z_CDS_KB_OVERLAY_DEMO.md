---
name: Z_CDS_KB_OVERLAY_DEMO
description: Demo private overlay view for W3a (not a real SAP object)
app_component: ZCDS
release_state: unverified
tags:
  - metadata-only
  - overlay:demo
---

# Z_CDS_KB_OVERLAY_DEMO

Private-overlay fixture used to verify enrich_index merge and MCP discovery.

## Properties

| Property | Value |
| --- | --- |
| Source | private overlay |

## Fields

| Field | Key | Association | Type | Data Source |
| --- | --- | --- | --- | --- |
| DemoKey | ✓ | | abap.char(10) | |

## Associations

| Alias | Target |
| --- | --- |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'CDS KB overlay demo'
define view entity Z_CDS_KB_OVERLAY_DEMO
  as select from I_Product
{
  key Product as DemoKey
}
```
