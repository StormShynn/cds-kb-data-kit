---
name: I_KNBNCALCNEWCTNNMBRASSGMTTXT
description: Knbncalcnewctnnmbrassgmttxt
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-KAB
  - PP-KAB-VDM
  - interface-view
  - component:PP-KAB-VDM-2CL
  - lob:Manufacturing
---
# I_KNBNCALCNEWCTNNMBRASSGMTTXT

**Knbncalcnewctnnmbrassgmttxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `KnbnCalcNewCtnNmbrAssgmt` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as nknum)` |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |
| `KnbnCalcNewCtnNmbrAssgmtName` |  | |  | `cast(ddtext as vdm_nmbrassngmnt_text preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_KnbnCalcNmbrAssignment` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnCalcNmbrAssignment` | `I_KnbnCalcNewCtnNmbrAssgmt` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCNRASSGTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation Number Assignment - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KnbnCalcNewCtnNmbrAssgmt'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KnbnCalcNewCtnNmbrAssgmtTxt
  as select from dd07t
  association [1..1] to I_KnbnCalcNewCtnNmbrAssgmt  as _KnbnCalcNmbrAssignment   on $projection.KnbnCalcNewCtnNmbrAssgmt = _KnbnCalcNmbrAssignment.KnbnCalcNewCtnNmbrAssgmt

  association [0..1] to I_Language                  as _Language                 on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnCalcNmbrAssignment'
  key cast(substring(domvalue_l, 1, 1) as nknum)                    as KnbnCalcNewCtnNmbrAssgmt,
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true
      cast(ddtext as vdm_nmbrassngmnt_text preserving type)         as KnbnCalcNewCtnNmbrAssgmtName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnCalcNmbrAssignment,
      _Language

}
where
      domname  = 'NKNUM'
  and as4local = 'A';
```
