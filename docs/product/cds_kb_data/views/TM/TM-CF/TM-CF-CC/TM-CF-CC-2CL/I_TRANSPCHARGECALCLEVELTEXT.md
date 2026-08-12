---
name: I_TRANSPCHARGECALCLEVELTEXT
description: "Transpchargecalcleveltext"
app_component: TM-CF-CC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-CF
  - TM-CF-CC
  - interface-view
  - text-view
  - text
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCLEVELTEXT

**Transpchargecalcleveltext**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeCalcLevel` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/calc_level preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspChargeCalcLevelDesc` |  | |  | `cast(ddtext as val_text preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspChargeCalcLevel` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'ICALCLEVELTEXT'
@EndUserText:  {label: 'Transportation Charges Calc Level - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChargeCalcLevel',
                 dataCategory:       #TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChargeCalcLevelText
  as select from dd07t
  association        to parent I_TranspChargeCalcLevel as _TranspChargeCalcLevel on $projection.TranspChargeCalcLevel = _TranspChargeCalcLevel.TranspChargeCalcLevel
  association [0..1] to I_Language                     as _Language              on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspChargeCalcLevel'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/calc_level preserving type) as TranspChargeCalcLevel,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                              as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as val_text preserving type )                               as TranspChargeCalcLevelDesc,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                        as DomainValue,

      /* Associations */
      _TranspChargeCalcLevel,
      _Language
}
where
      domname  = '/SCMTMS/CALC_LEVEL'
  and as4local = 'A'
  and substring(domvalue_l, 1, 1) <> '2'
```
