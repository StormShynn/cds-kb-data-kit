---
name: I_BOMITEMCATEGORYTEXT
description: "Bomitemcategorytext"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - text-view
  - bom
  - text
  - item-level
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
---
# I_BOMITEMCATEGORYTEXT

**Bomitemcategorytext**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `BillOfMaterialItemCategory` | ✓ | |  | `postp` |  |  |
| `BillOfMaterialItemCategoryDesc` |  | |  | `ptext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'BillOfMaterialItemCategory'
@ObjectModel.dataCategory:#TEXT
@Analytics.technicalName: 'IBOMITMCATEGORYT'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@EndUserText.label: 'Bill Of Material Item Category - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel.supportedCapabilities: [  #CDS_MODELING_ASSOCIATION_TARGET, 
                                       #SQL_DATA_SOURCE, 
                                       #CDS_MODELING_DATA_SOURCE, 
                                       #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name: 'BillOfMaterialItemCategoryText'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_BomItemCategoryText
  as select from t418t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras     as Language,
      _Language,
  key postp     as BillOfMaterialItemCategory,
      @Semantics.text: true
      ptext     as BillOfMaterialItemCategoryDesc

}
```
