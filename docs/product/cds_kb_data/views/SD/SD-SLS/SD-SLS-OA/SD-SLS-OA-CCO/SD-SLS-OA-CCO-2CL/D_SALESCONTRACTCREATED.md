---
name: D_SALESCONTRACTCREATED
description: "D Salescontractcreated"
semantic_vi: "View D_SALESCONTRACTCREATED hiển thị các sự kiện tạo hợp đồng bán hàng, cung cấp dữ liệu về thời điểm và cách tạo hợp đồng bán hàng trong hệ thống. Nó có thể được sử dụng để phân tích các mẫu tạo hợp đồng bán hàng và xác định xu hướng."
keywords:
  - "sales contract"
  - "hợp đồng bán hàng"
  - "sales contract creation"
  - "tạo hợp đồng bán hàng"
  - "sap"
  - "sd"
  - "sales distribution"
  - "sales organization"
  - "distribution channel"
  - "organization division"
  - "sold to party"
  - "event raised date time"
semantic_en: "The D_SALESCONTRACTCREATED view exposes sales contract creation events, providing data on when and how sales contracts are created in the system. It can be used to analyze sales contract creation patterns and identify trends."
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
  - component:SD-SLS-OA-CCO-2CL
  - lob:Sales & Distribution
---
# D_SALESCONTRACTCREATED

**D Salescontractcreated**

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

## Source Code

```abap
@EndUserText.label: 'Sales Contract Created'
@ObjectModel.sapObjectNodeType.name: 'SalesContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractCreated
{
  @Event.raisedAt.dateTime       : true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesContractType    : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
