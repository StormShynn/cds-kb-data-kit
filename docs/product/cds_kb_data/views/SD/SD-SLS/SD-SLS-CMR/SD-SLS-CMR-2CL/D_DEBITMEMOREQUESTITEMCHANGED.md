---
name: D_DEBITMEMOREQUESTITEMCHANGED
description: "D Debitmemorequestitemchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi yêu cầu ghi nợ, có thể được sử dụng để theo dõi các thay đổi của các mục yêu cầu ghi nợ trong thời gian thực."
keywords:
  - "debit memo request"
  - "yêu cầu ghi nợ"
  - "item change"
  - "sự kiện thay đổi"
  - "sales and distribution"
  - "bán hàng và phân phối"
  - "sap"
  - "sd-sls-cmr-2cl"
semantic_en: "This view exposes debit memo request item change events, which can be used to track changes to debit memo request items in real-time."
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
  - item-level
  - component:SD-SLS-CMR-2CL
  - lob:Sales & Distribution
---
# D_DEBITMEMOREQUESTITEMCHANGED

**D Debitmemorequestitemchanged**

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
| `DebitMemoRequestType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `DebitMemoRequestItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Debit Memo Request Item Changed'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.sapObjectNodeType.name: 'DebitMemoRequestItem'
@Metadata.allowExtensions      // **** enable extensibility ****
define abstract entity D_DebitMemoRequestItemChanged
{

  @Event.raisedAt.dateTime      : true
  EventRaisedDateTime           : vdm_lastchangedon;

  DebitMemoRequestType          : auart_unv;

  SalesOrganization             : vkorg;

  DistributionChannel           : vtweg;

  OrganizationDivision          : spart;

  SoldToParty                   : kunnr;

  DebitMemoRequestItemCategory  : pstyv;

  Product                       : matnr;
}
```
