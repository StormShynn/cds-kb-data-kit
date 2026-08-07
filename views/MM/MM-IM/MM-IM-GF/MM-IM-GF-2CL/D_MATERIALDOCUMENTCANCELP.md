---
name: D_MATERIALDOCUMENTCANCELP
description: "D Materialdocumentcancelp"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - material
  - document
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# D_MATERIALDOCUMENTCANCELP

**D Materialdocumentcancelp**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PostingDate` |  | |  | `budat` |  |  |

## Source Code

```abap
@VDM.usage.type: [#ACTION_PARAMETER_STRUCTURE]
@EndUserText.label: 'Input parameters for MATDOC Cancel'
@ObjectModel.supportedCapabilities:[ #DATA_STRUCTURE]
define root abstract entity D_MaterialDocumentCancelP
{   
    
    PostingDate : budat;
    
}
```
