---
name: D_MATERIALDOCUMENTCANCELED_2
description: D Materialdocumentcanceled 2
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
# D_MATERIALDOCUMENTCANCELED_2

**D Materialdocumentcanceled 2**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryTransactionType` |  | |  | `vgart` |  |  |
| `D_MaterialDocumentItemCancld_2` |  | |  | `_MaterialDocumentItemCanceled : composition [1..*] of D_MaterialDocumentItemCancld_2` |  |  |

## Source Code

```abap
@EndUserText.label: 'Entity for Material Document Canceled'

@ObjectModel: { sapObjectNodeType.name: 'MaterialDocument' }
@ObjectModel.supportedCapabilities:[ #DATA_STRUCTURE]
@VDM.usage.type: [#EVENT_SIGNATURE]
define root abstract entity D_MaterialDocumentCanceled_2
  
{
    InventoryTransactionType     : vgart;
    _MaterialDocumentItemCanceled : composition [1..*] of D_MaterialDocumentItemCancld_2;
    
}
```
