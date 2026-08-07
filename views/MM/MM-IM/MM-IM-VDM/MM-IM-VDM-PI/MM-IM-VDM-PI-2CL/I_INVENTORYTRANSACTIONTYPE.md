---
name: I_INVENTORYTRANSACTIONTYPE
description: Inventorytransactiontype
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - inventory
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
  - bo:Inventory
---
# I_INVENTORYTRANSACTIONTYPE

**Inventorytransactiontype**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InventoryTransactionType` | ✓ | |  | `vgart` |  |  |
| `IsPhysicalInventoryRelevant` |  | |  | `xikpf` |  |  |
| `IsMaterialDocumentRelevant` |  | |  | `xmkpf` |  |  |
| `IsReservationRelevant` |  | |  | `xrkpf` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_InventoryTransactionTypeT` | [0..*] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Inventory Transaction Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                representativeKey: 'InventoryTransactionType',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'InventoryTransactionType'}
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: { dataCategory: #DIMENSION,
              technicalName: 'IINVTRANSTYPE',
              dataExtraction.enabled: true }
@Metadata.ignorePropagatedAnnotations: true

define view entity I_InventoryTransactionType
  as select from t158v

  association [0..*] to I_InventoryTransactionTypeT as _Text on $projection.InventoryTransactionType = _Text.InventoryTransactionType

{

      @ObjectModel.text.association: '_Text'
  key vgart as InventoryTransactionType,
      xikpf as IsPhysicalInventoryRelevant,
      xmkpf as IsMaterialDocumentRelevant,
      xrkpf as IsReservationRelevant,

      _Text
}
```
