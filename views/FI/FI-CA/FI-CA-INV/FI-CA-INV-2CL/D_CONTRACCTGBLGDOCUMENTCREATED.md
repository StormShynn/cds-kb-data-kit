---
name: D_CONTRACCTGBLGDOCUMENTCREATED
description: D Contracctgblgdocumentcreated
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
  - document
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# D_CONTRACCTGBLGDOCUMENTCREATED

**D Contracctgblgdocumentcreated**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` |  | |  | `vkont_kk` |  |  |
| `D_CABillgDocCreatedSourceTrans` |  | |  | `_SourceTransaction : composition [0..*] of D_CABillgDocCreatedSourceTrans` |  |  |

## Source Code

```abap
@EndUserText.label: 'Billing Document Created'
@ObjectModel: {
  sapObjectNodeType.name: 'ContrAcctgBillingDocument',
  supportedCapabilities: [#DATA_STRUCTURE]
}
@VDM.usage.type: [#EVENT_SIGNATURE]
@Metadata.allowExtensions
define root abstract entity D_ContrAcctgBlgDocumentCreated
{
  ContractAccount : vkont_kk;
  _SourceTransaction : composition [0..*] of D_CABillgDocCreatedSourceTrans;
}
```
