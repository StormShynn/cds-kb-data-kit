---
name: D_PCLGSDCGETDNGRSGOODSEDIINFOP
description: D Pclgsdcgetdngrsgoodsediinfop
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
# D_PCLGSDCGETDNGRSGOODSEDIINFOP

**D Pclgsdcgetdngrsgoodsediinfop**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-FND-PC` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProdCmplncLogsDocumentUUID` |  | |  | `ehfnd_log_doc_uuid` |
| `D_PCLGSDCGETDAGDSEDIINFOITEMP` |  | |  | `_Items : composition [0..*] of D_PCLGSDCGETDAGDSEDIINFOITEMP` |

## Source Code

```abap
@EndUserText.label: 'PCLD DG Get EDI Informtion Parameter'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
define root abstract entity D_PCLgsDcGetDngrsGoodsEDIInfoP
{
  ProdCmplncLogsDocumentUUID : ehfnd_log_doc_uuid;
  _Items                      : composition [0..*] of D_PCLGSDCGETDAGDSEDIINFOITEMP;

}
```
