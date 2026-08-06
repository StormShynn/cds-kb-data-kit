---
name: D_CABILLGDOCCREATEDSOURCETRANS
description: D Cabillgdoccreatedsourcetrans
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
# D_CABILLGDOCCREATEDSOURCETRANS

**D Cabillgdoccreatedsourcetrans**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `CABllbleItmSourceTransType` | `srctatype_kk` |
| `CABllbleItmSourceTransId` | `srctaid_kk` |
| `_Parent` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Billing Document Created - Source Trans'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgBillingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define abstract entity D_CABillgDocCreatedSourceTrans
{
  CABllbleItmSourceTransType : srctatype_kk;
  CABllbleItmSourceTransId   : srctaid_kk;
  _Parent                    : association to parent D_ContrAcctgBlgDocumentCreated;
}
```
