---
name: D_PCLGSDCGETDNGRSGOODSEDIINFOR
description: D Pclgsdcgetdngrsgoodsediinfor
app_component: EHS-SUS-FND-PC
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-FND
  - component:EHS-SUS-FND-PC
  - lob:Other
---
# D_PCLGSDCGETDNGRSGOODSEDIINFOR

**D Pclgsdcgetdngrsgoodsediinfor**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdCmplncLogsDocument` |  | |  | `ehfnd_log_doc_number` |
| `D_PCLgsDcGetDaGdsEDIInfoItemR` |  | |  | `_ItemInformation : composition [0..*] of D_PCLgsDcGetDaGdsEDIInfoItemR` |

## Source Code

```abap
@EndUserText.label: 'DG Document EDI R'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGoodsEDIInfoR
{
  ProdCmplncLogsDocument : ehfnd_log_doc_number; // Logistics Document Number
  _ItemInformation       : composition [0..*] of D_PCLgsDcGetDaGdsEDIInfoItemR;

}
```
