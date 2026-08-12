---
name: I_INVTRYSPECIALSTOCKVALNTYPET
description: "Invtryspecialstockvalntypet"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_INVTRYSPECIALSTOCKVALNTYPET

**Invtryspecialstockvalntypet**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `InventorySpecialStockValnType` | ✓ | |  | `cast( dd07t.domvalue_l as fis_inventoryspclstockvalntype )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `InventorySpclStkValnTypeName` |  | |  | `cast( dd07t.ddtext as fis_invtryspclstkvalntypename preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_InvtrySpecialStockValnType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@EndUserText.label: 'Valuation Type of Special Stock - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFISPECSTKVTT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'InventorySpecialStockValnType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_InvtrySpecialStockValnTypeT as select from dd07t 

  association to parent I_InvtrySpecialStockValnType as _InvtrySpecialStockValnType on $projection.InventorySpecialStockValnType = _InvtrySpecialStockValnType.InventorySpecialStockValnType
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language, 
      @ObjectModel.foreignKey.association: '_InvtrySpecialStockValnType'
      @ObjectModel.text.element: ['InventorySpclStkValnTypeName']
  key cast( dd07t.domvalue_l as fis_inventoryspclstockvalntype ) as InventorySpecialStockValnType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as fis_invtryspclstkvalntypename preserving type ) as InventorySpclStkValnTypeName,
      _InvtrySpecialStockValnType,
      _Language
} 
where dd07t.domname  = 'KZBWS'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
