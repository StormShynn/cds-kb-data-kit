---
name: D_SALESCONTRACTDELETED
description: "D Salescontractdeleted"
semantic_vi: "Đại diện cho các hợp đồng bán hàng đã bị xóa, cung cấp thông tin về sự kiện xóa và dữ liệu tổ chức bán hàng liên quan."
keywords:
  - "sales contract"
  - "hợp đồng bán hàng"
  - "deleted"
  - "xóa"
  - "sales organization"
  - "tổ chức bán hàng"
  - "sap"
  - "sd"
  - "sales & distribution"
  - "dịch vụ bán hàng"
semantic_en: "Represents sales contracts that have been deleted, providing information on the deletion event and related sales organization data."
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
# D_SALESCONTRACTDELETED

**D Salescontractdeleted**

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
@EndUserText.label: 'Sales Contract Deleted'
@ObjectModel.sapObjectNodeType.name: 'SalesContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractDeleted
{
  @Event.raisedAt.dateTime: true
  EventRaisedDateTime  : vdm_lastchangedon;

  SalesContractType    : auart_unv;

  SalesOrganization    : vkorg;

  DistributionChannel  : vtweg;

  OrganizationDivision : spart;

  SoldToParty          : kunnr;

}
```
