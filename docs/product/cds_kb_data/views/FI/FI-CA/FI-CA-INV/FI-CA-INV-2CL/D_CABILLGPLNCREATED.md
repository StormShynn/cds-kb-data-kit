---
name: D_CABILLGPLNCREATED
description: "D Cabillgplncreated"
semantic_vi: "View D_CABILLGPLNCREATED hiển thị dữ liệu tạo kế hoạch tài khoản hợp đồng, có liên quan khi quản lý kế hoạch tài khoản hợp đồng trong thành phần FI-CA-INV-2CL."
keywords:
  - "contract account plan"
  - "tài khoản hợp đồng kế hoạch"
  - "fi-ca-inv-2cl"
  - "fi"
  - "fi-ca"
  - "fi-ca-inv"
  - "component"
  - "lob"
  - "finance"
  - "cds view"
  - "view"
semantic_en: "The D_CABILLGPLNCREATED view exposes contract account plan creation data, which is relevant when managing contract account plans in the FI-CA-INV-2CL component."
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# D_CABILLGPLNCREATED

**D Cabillgplncreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnType` |  | |  | `biptype_kk` |  |  |
| `ContractAccount` |  | |  | `vkont_kk` |  |  |
| `CAContract` |  | |  | `vtref_kk` |  |  |

## Source Code

```abap
@EndUserText.label: 'Billing Plan Created'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgBillingPlan',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define root abstract entity D_CABillgPlnCreated
{
  CABillgPlnType  : biptype_kk;
  ContractAccount : vkont_kk;
  CAContract      : vtref_kk;
}
```
