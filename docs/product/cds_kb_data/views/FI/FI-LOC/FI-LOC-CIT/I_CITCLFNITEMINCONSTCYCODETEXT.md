---
name: I_CITCLFNITEMINCONSTCYCODETEXT
description: "Citclfniteminconstcycodetext"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - text-view
  - text
  - item-level
  - component:FI-LOC-CIT
  - lob:Finance
---
# I_CITCLFNITEMINCONSTCYCODETEXT

**Citclfniteminconstcycodetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CITClassfctnItemInconstcyCode` | ✓ | |  | `cast( dd07t.domvalue_l as ficite_amnt_inconsistency )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `CITClfnItemInconstcyCodeDesc` |  | |  | `cast( dd07t.ddtext as ficite_amnt_inconsistency_desc )` |  |  |
| `_Language` | | ✓ | | | | |
| `_Value` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICITCLITMINCT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'CIT Item Inconsistency Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'CITClassfctnItemInconstcyCode'
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
define view I_CITClfnItemInconstcyCodeText
  as select from dd07t
  association        to parent I_CITClfnItemInconstcyCodeVH as _Value    on $projection.CITClassfctnItemInconstcyCode = _Value.CITClassfctnItemInconstcyCode
  association [0..1] to I_Language                          as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )      as Language,
      @ObjectModel.foreignKey.association: '_Value'
      @ObjectModel.text.element: ['CITClfnItemInconstcyCodeDesc']
  key cast( dd07t.domvalue_l as ficite_amnt_inconsistency )  as CITClassfctnItemInconstcyCode,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as ficite_amnt_inconsistency_desc ) as CITClfnItemInconstcyCodeDesc,
      _Value,
      _Language
}
where
      dd07t.domname  = 'FICITE_AMNT_INCONSISTENCY'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
