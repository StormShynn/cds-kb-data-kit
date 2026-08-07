---
name: D_SUPLRINVCCANCELP
description: "D Suplrinvccancelp"
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
  - component:MM-IV-LIV-2CL
  - lob:Sourcing & Procurement
---
# D_SUPLRINVCCANCELP

**D Suplrinvccancelp**

| Property | Value |
|---|---|
| App Component | `MM-IV-LIV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReversalReason` |  | |  | `stgrd` |  |  |
| `PostingDate` |  | |  | `budat` |  |  |

## Source Code

```abap
@EndUserText.label: 'Supplier Invoice Reversal Parameters'
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@ObjectModel.supportedCapabilities: [#DATA_STRUCTURE]
@ObjectModel.modelingPattern: #DATA_STRUCTURE

define root abstract entity D_SuplrInvcCancelP
{
  //key DummyKey        : abap.char(1);
      ReversalReason  : stgrd;
      PostingDate     : budat;
}
```
