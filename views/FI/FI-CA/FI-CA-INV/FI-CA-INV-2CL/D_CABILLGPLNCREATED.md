---
name: D_CABILLGPLNCREATED
description: D Cabillgplncreated
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
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

| Field | Data Source |
|---|---|
| `CABillgPlnType` | `biptype_kk` |
| `ContractAccount` | `vkont_kk` |
| `CAContract` | `vtref_kk` |

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
