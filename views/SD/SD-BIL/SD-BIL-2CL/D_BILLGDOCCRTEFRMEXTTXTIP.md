---
name: D_BILLGDOCCRTEFRMEXTTXTIP
description: D Billgdoccrtefrmexttxtip
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTEFRMEXTTXTIP

**D Billgdoccrtefrmexttxtip**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `LongTextID` |  | |  | `tdid` |
| `Language` |  | |  | `spras` |
| `LongText` |  | |  | `systring` |

## Source Code

```abap
@EndUserText.label: 'Bill Doc Create From Ext Data Text - Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
define root abstract entity D_BillgDocCrteFrmExtTxtIP
{
  LongTextID : tdid;
  Language   : spras;
  LongText   : systring;
}
```
