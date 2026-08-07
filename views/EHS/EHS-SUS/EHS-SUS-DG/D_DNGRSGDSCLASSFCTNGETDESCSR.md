---
name: D_DNGRSGDSCLASSFCTNGETDESCSR
description: D Dngrsgdsclassfctngetdescsr
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - EHS
  - EHS-SUS
  - EHS-SUS-DG
  - component:EHS-SUS-DG
  - lob:Other
---
# D_DNGRSGDSCLASSFCTNGETDESCSR

**D Dngrsgdsclassfctngetdescsr**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-DG` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CmplRqRsltDngrsGdsModeOfTrUUID` |  | |  | `cmplrqrsltdngrsgdsmodeoftruuid` |  |  |
| `CmplRqVers` |  | |  | `ehfnd_bco_id` |  |  |
| `DngrsGoodsModeOfTransport` |  | |  | `ehfnd_req_mot` |  |  |
| `Language` |  | |  | `ehfnd_langu` |  |  |
| `DangerousGoodDescForDocuments` |  | |  | `ehdgm_final_description` |  |  |
| `CmplRqVersName` |  | |  | `ehdgm_regulation_name` |  |  |

## Source Code

```abap
@EndUserText.label: 'DG Classfctn Get Description Result'
@ObjectModel.supportedCapabilities: [ #DATA_STRUCTURE ]
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
define root abstract entity D_DngrsGdsClassfctnGetDescsR
{
  CmplRqRsltDngrsGdsModeOfTrUUID : cmplrqrsltdngrsgdsmodeoftruuid;
  CmplRqVers                     : ehfnd_bco_id;
  DngrsGoodsModeOfTransport      : ehfnd_req_mot;
  Language                       : ehfnd_langu;
  DangerousGoodDescForDocuments  : ehdgm_final_description;
  CmplRqVersName                 : ehdgm_regulation_name;
}
```
