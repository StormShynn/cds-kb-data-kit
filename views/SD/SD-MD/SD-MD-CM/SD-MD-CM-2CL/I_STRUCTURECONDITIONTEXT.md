---
name: I_STRUCTURECONDITIONTEXT
description: "Structureconditiontext"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_STRUCTURECONDITIONTEXT

**Structureconditiontext**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `StructureCondition` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as kdupl )` |  |  |
| `StructureConditionName` |  | |  | `cast ( ddtext as price_element_struc_cndn_descr )` |  |  |
| `_StructureCondition` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_StructureCondition` | `I_StructureCondition` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ISTRUCCNDNTEXT'
@AbapCatalog.preserveKey:true 
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Structure Condition - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.representativeKey: 'StructureCondition'
@Metadata.ignorePropagatedAnnotations:true
define view I_StructureConditionText
  as select from dd07t
  association [0..1] to I_StructureCondition as _StructureCondition on $projection.StructureCondition = _StructureCondition.StructureCondition
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language
{
      @Semantics.language:true
  key cast( ddlanguage as spras )                       as Language,
      @ObjectModel.foreignKey.association: '_StructureCondition'
  key cast ( substring( domvalue_l, 1, 1 ) as kdupl )   as StructureCondition,
      @Semantics.text:true
      cast ( ddtext as price_element_struc_cndn_descr ) as StructureConditionName,
      _StructureCondition,
      _Language
}
where
      domname  = 'KDUPL'
  and as4local = 'A'
```
