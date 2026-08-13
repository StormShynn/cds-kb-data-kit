---
name: D_SALESCONTRACTCHANGED
description: "D Salescontractchanged"
semantic_vi: "View D_SALESCONTRACTCHANGED lưu trữ các thay đổi của hợp đồng bán hàng, cung cấp một bản ghi của khi và cách các hợp đồng bán hàng được cập nhật. Nó hữu ích cho việc theo dõi các thay đổi của hợp đồng bán hàng theo thời gian."
keywords:
  - "sales contract"
  - "hợp đồng bán hàng"
  - "sales contract change"
  - "thay đổi hợp đồng bán hàng"
  - "sap sales"
  - "sales distribution"
  - "sd sls"
  - "sd sls oa"
  - "sales contract tracking"
semantic_en: "The D_SALESCONTRACTCHANGED view captures sales contract changes, providing a record of when and how sales contracts are updated. It is useful for tracking changes to sales contracts over time."
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
# D_SALESCONTRACTCHANGED

**D Salescontractchanged**

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
@EndUserText.label: 'Sales Contract Changed'
@ObjectModel.sapObjectNodeType.name: 'SalesContract'
@VDM.usage.type: [#EVENT_SIGNATURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@Metadata.allowExtensions: true
define abstract entity D_SalesContractChanged
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
