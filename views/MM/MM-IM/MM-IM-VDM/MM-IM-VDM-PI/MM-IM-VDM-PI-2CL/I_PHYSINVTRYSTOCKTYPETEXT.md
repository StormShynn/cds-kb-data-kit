---
name: I_PHYSINVTRYSTOCKTYPETEXT
description: Physinvtrystocktypetext
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
  - text-view
  - text
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYSTOCKTYPETEXT

**Physinvtrystocktypetext**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `PhysicalInventoryStockType` | ✓ | |  | `bstar` |  |  |
| `PhysicalInventoryStockTypeName` |  | |  | `cast ( btext as pi_stock_type_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PhysicalInventoryStockType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_PhysicalInventoryStockType` | `I_PhysInvtryStockType` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
 @EndUserText.label: 'Stock Type of Phys Invtry - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             sizeCategory: #S,
                             serviceQuality: #A,
                             dataClass:#CUSTOMIZING
                           },
                dataCategory: #TEXT,
                representativeKey: 'PhysicalInventoryStockType',
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'PhysicalInventoryStockTypeText'
              }

@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }
@Analytics.dataExtraction.enabled: true

           
define view entity I_PhysInvtryStockTypeText
  as select from t064b

  association [0..1] to I_Language            as _Language                   on $projection.Language = _Language.Language

  association [0..1] to I_PhysInvtryStockType as _PhysicalInventoryStockType on $projection.PhysicalInventoryStockType = _PhysicalInventoryStockType.PhysicalInventoryStockType

{

      @Semantics.language: true
  key spras as Language,

  key bstar as PhysicalInventoryStockType,

      @Semantics.text: true
      cast ( btext as pi_stock_type_name preserving type ) as PhysicalInventoryStockTypeName,

      _Language,
      _PhysicalInventoryStockType

}
```
