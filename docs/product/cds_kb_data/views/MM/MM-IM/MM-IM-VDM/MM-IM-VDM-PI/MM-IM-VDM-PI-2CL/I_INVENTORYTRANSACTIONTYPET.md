---
name: I_INVENTORYTRANSACTIONTYPET
description: "Inventorytransactiontypet"
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
