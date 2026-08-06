---
name: I_RECONDITIONAMTREFTEXT
description: Reconditionamtreftext
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RECONDITIONAMTREFTEXT

**Reconditionamtreftext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `REConditionAmountReference` | `cast( dd07t.domvalue_l as recdvdmcondvaluerefer )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `REConditionAmountReferenceName` | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | *Association* |
| `_REConditionAmountReference` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECONDAMTREFT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'RE Condition Amount Reference - Text'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REConditionAmountReference',
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'REConditionAmountReferenceText'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define view entity I_REConditionAmtRefText
  as select from dd07t
  association        to parent I_REConditionAmtRef as _REConditionAmountReference on $projection.REConditionAmountReference = _REConditionAmountReference.REConditionAmountReference
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_REConditionAmountReference'
      @ObjectModel.text.element: ['REConditionAmountReferenceName']
  key cast( dd07t.domvalue_l as recdvdmcondvaluerefer )    as REConditionAmountReference,
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as REConditionAmountReferenceName,
      _REConditionAmountReference,
      _Language
}
where
      dd07t.domname  = 'RECDCONDVALUEREFER'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
