---
name: D_SALESCONTRACTITEMCHANGED
description: "D Salescontractitemchanged"
semantic_vi: "View này hiển thị các sự kiện thay đổi chi tiết hợp đồng bán hàng, cung cấp thông tin về thời điểm và chi tiết nào được thay đổi trong hợp đồng bán hàng."
keywords:
  - "sales contract"
  - "hợp đồng bán hàng"
  - "sales contract item"
  - "chi tiết hợp đồng bán hàng"
  - "change event"
  - "sự kiện thay đổi"
  - "sales organization"
  - "sales contract type"
semantic_en: "This view exposes sales contract item change events, providing information on when and what items were changed in a sales contract."
app_component: SD-SLS-OA-CCO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - sales-contract
  - contract
  - item-level
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# D_SALESCONTRACTITEMCHANGED

**D Salescontractitemchanged**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-CCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EventRaisedDateTime` |  | |  | `vdm_lastchangedon` |  |  |
| `SalesContractType` |  | |  | `auart_unv` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SoldToParty` |  | |  | `kunnr` |  |  |
| `SalesContractItemCategory` |  | |  | `pstyv` |  |  |
| `Product` |  | |  | `matnr` |  |  |

## Source Code

```abap
@EndUserText.label: 'Sales Contract Item Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesContractItem'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractItemChanged
{
  @Event.raisedAt.dateTime  : true
  EventRaisedDateTime       : vdm_lastchangedon;

  SalesContractType         : auart_unv;

  SalesOrganization         : vkorg;

  DistributionChannel       : vtweg;

  OrganizationDivision      : spart;

  SoldToParty               : kunnr;

  SalesContractItemCategory : pstyv;

  Product                   : matnr;

}
```
