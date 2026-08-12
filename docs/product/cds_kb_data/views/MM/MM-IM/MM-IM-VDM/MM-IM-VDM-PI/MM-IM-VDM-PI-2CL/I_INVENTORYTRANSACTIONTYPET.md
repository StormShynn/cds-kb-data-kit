---
name: I_INVENTORYTRANSACTIONTYPET
description: "Inventorytransactiontypet"
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_INVENTORYTRANSACTIONTYPET

**Inventorytransactiontypet**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `InventoryTransactionTypeText` |  | |  | `cast ( ltext as pi_transaction_type_text preserving type )` |  |  |
| `_InventoryTransactionType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InventoryTransactionType` | `I_InventoryTransactionType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Inventory Transaction Type - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType:{
                            sizeCategory: #S,
                            serviceQuality: #A,
                            dataClass:#CUSTOMIZING
                          },
                 representativeKey: 'InventoryTransactionType',
                 dataCategory: #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 sapObjectNodeType.name: 'InventoryTransactionTypeText',
                 supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE]
               }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true


define view entity I_InventoryTransactionTypeT
  as

  select from t158w

  association [0..1] to I_InventoryTransactionType as _InventoryTransactionType on $projection.InventoryTransactionType = _InventoryTransactionType.InventoryTransactionType
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

{

  key vgart as InventoryTransactionType,

      @Semantics.language: true
  key spras as Language,

      @Semantics.text: true
      cast ( ltext as pi_transaction_type_text preserving type ) as InventoryTransactionTypeText,

      _InventoryTransactionType,
      _Language

}
```
