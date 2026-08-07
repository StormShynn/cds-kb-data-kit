---
name: D_SUPPLIERINVOICESIMULATER
description: "D Supplier InvoiceSIMULATER"
app_component: MM-IV-LIV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-LIV
  - supplier
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# D_SUPPLIERINVOICESIMULATER

**D Supplier InvoiceSIMULATER**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `mmiv_rap_action_result_ok` |  | |  | `key SupplierInvoiceIsSimulated : mmiv_rap_action_result_ok` |  |  |

## Source Code

```abap
@EndUserText.label: 'Simulate Result'
@VDM.usage.type: [#ACTION_RESULT_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE
define abstract entity D_SupplierInvoiceSimulateR 
{

    key SupplierInvoiceIsSimulated : mmiv_rap_action_result_ok;
    
}
```
