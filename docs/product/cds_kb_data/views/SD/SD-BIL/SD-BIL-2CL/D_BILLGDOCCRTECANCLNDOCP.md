---
name: D_BILLGDOCCRTECANCLNDOCP
description: "D Billgdoccrtecanclndocp"
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# D_BILLGDOCCRTECANCLNDOCP

**D Billgdoccrtecanclndocp**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillingDocumentDate` |  | |  | `fkdat` |  |  |
| `ReversalReason` |  | |  | `stgrd` |  |  |

## Source Code

```abap
@EndUserText.label: 'Create Cancellation Billing Document Parameter'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_BillgDocCrteCanclnDocP {

  BillingDocumentDate : fkdat;       
  ReversalReason : stgrd;  
    
}
```
