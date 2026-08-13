---
name: D_DNGRSGDSCLASSFCTNGETDESCSR
description: "D Dngrsgdsclassfctngetdescsr"
semantic_vi: "Chứa dữ liệu phương thức vận chuyển hàng nguy hiểm và mô tả cho yêu cầu hoàn thiện tài liệu. Sử dụng để lấy phương thức vận chuyển và mô tả cho yêu cầu hoàn thiện tài liệu trong EHS-SUS-DG."
keywords:
  - "dangerous goods"
  - "mode of transport"
  - "document completion request"
  - "ehs-sus-dg"
  - "completion request"
  - "transport mode"
  - "description"
  - "hàng nguy hiểm"
  - "phương thức vận chuyển"
  - "yêu cầu hoàn thiện tài liệu"
semantic_en: "Exposes dangerous goods mode of transport and description data for document completion requests. Used to retrieve transport mode and description for document completion requests in EHS-SUS-DG."
app_component: EHS-SUS-DG
software_component: SAPSCORE
release_state: released
atc_state: released
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
