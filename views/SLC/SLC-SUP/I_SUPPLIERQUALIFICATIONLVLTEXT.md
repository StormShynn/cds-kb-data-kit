---
name: I_SUPPLIERQUALIFICATIONLVLTEXT
description: Supplierqualificationlvltext
app_component: SLC-SUP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SLC
  - SLC-SUP
  - interface-view
  - text-view
  - supplier
  - text
  - component:SLC-SUP
  - lob:Other
  - bo:Supplier
---
# I_SUPPLIERQUALIFICATIONLVLTEXT

**Supplierqualificationlvltext**

| Property | Value |
|---|---|
| App Component | `SLC-SUP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplierQualificationLevel` | ✓ | |  | `qualification` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SupplierQualificationLevelName` |  | |  | `qualification_d` |  |  |
| `_Language` | | ✓ | | | | |
| `_SupplierQualificationLvl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SupplierQualificationLvl` | `I_SupplierQualificationLvl` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISUPQUALLVLTXT'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@ObjectModel.supportedCapabilities: 
[ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.compiler.compareFilter: true

@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.usageType.dataClass:  #META
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'SupplierQualificationLevel'
@EndUserText.label: 'Level of Supplier Qualification - Text'
define view I_SupplierQualificationLvlText as select from /srmsmc/c_ql_t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SupplierQualificationLvl as _SupplierQualificationLvl on $projection.SupplierQualificationLevel = _SupplierQualificationLvl.SupplierQualificationLevel
{
  key qualification as SupplierQualificationLevel, 
  
  @Semantics.language: true
  @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,
  
  @Semantics.text: true
  qualification_d as SupplierQualificationLevelName,
  
  _SupplierQualificationLvl,
  _Language 
  
}
```
