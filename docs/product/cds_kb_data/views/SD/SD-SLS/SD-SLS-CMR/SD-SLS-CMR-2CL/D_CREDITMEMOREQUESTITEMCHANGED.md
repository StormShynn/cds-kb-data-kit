---
name: D_CREDITMEMOREQUESTITEMCHANGED
description: "D Creditmemorequestitemchanged"
semantic_vi: "View này hiển thị sự kiện thay đổi yêu cầu hoàn tiền chi tiết, có thể được sử dụng để theo dõi các thay đổi của các mục trong yêu cầu hoàn tiền."
keywords:
  - "credit memo request"
  - "yêu cầu hoàn tiền"
  - "item change"
  - "sự kiện thay đổi"
  - "sales and distribution"
  - "sd-sls-cmr-2cl"
  - "creditmemo request item"
  - "item trong yêu cầu hoàn tiền"
  - "thay đổi của mục"
semantic_en: "This view exposes credit memo request item change events, which can be used to track changes to items in a credit memo request."
app_component: SD-SLS-CMR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-CMR
  - credit
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_CREDITMEMOREQUESTITEMCHANGED

**D Creditmemorequestitemchanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-CMR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `CreditMemoRequestType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `CreditMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Credit Memo Request Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'CreditMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_CreditMemoRequestItemChanged
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  CreditMemoRequestType         : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;

  CreditMemoRequestItemCategory : pstyv;

  Product                       : matnr;
}
```
