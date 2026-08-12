---
name: I_KNBNCALCNEWCTNLKNGTXT
description: "Knbncalcnewctnlkngtxt"
app_component: PP-KAB-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
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
# I_KNBNCALCNEWCTNLKNGTXT

**Knbncalcnewctnlkngtxt**

| Property | Value |
|---|---|
| App Component | `PP-KAB-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `KnbnCalcNewCtnLkng` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as nlock)` |  |  |
| `Language` | ✓ | |  | `cast(ddlanguage as spras preserving type)` |  |  |
| `KnbnCalcNewCtnLkngName` |  | |  | `cast(ddtext as vdm_newctnlock_text preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_KnbnCalcNewCtnLkng` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_KnbnCalcNewCtnLkng` | `I_KnbnCalcNewCtnLkng` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IKNBCLCCTNLCKTX'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Kanban Calculation New Container Locking - Text'

@Metadata.ignorePropagatedAnnotations: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'KnbnCalcNewCtnLkng'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataExtraction.enabled: true

define view I_KnbnCalcNewCtnLkngTxt
  as select from dd07t
  association [1..1] to I_KnbnCalcNewCtnLkng  as _KnbnCalcNewCtnLkng   on $projection.KnbnCalcNewCtnLkng = _KnbnCalcNewCtnLkng.KnbnCalcNewCtnLkng

  association [0..1] to I_Language            as _Language             on $projection.Language = _Language.Language


{
      @ObjectModel.foreignKey.association: '_KnbnCalcNewCtnLkng'
  key cast(substring(domvalue_l, 1, 1) as nlock)                    as KnbnCalcNewCtnLkng,
      @Semantics.language: true
  key cast(ddlanguage as spras preserving type)                     as Language,

      @Semantics.text: true
      cast(ddtext as vdm_newctnlock_text preserving type)           as KnbnCalcNewCtnLkngName,
      
      @Consumption.hidden:true
      @Analytics.hidden:true
      domvalue_l as DomainValue,

      _KnbnCalcNewCtnLkng,
      _Language

}
where
      domname  = 'NLOCK'
  and as4local = 'A';
```
