---
name: I_TRANSPCHARGECALCSTATUSTEXT
description: "Transpchargecalcstatustext"
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
  - status
  - component:TM-CF-CC-2CL
  - lob:Other
---
# I_TRANSPCHARGECALCSTATUSTEXT

**Transpchargecalcstatustext**

| Property | Value |
|---|---|
| App Component | `TM-CF-CC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeCalcStatus` | ✓ | |  | `cast(substring(domvalue_l, 1, 2) as /scmtms/tcc_calc_status preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspChargeCalcStatusDesc` |  | |  | `cast(ddtext as val_text preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspChargeCalcStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@EndUserText:   {label: 'Transp Charges Calculation Status - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChargeCalcStatus',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #CUSTOMIZING},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChargeCalcStatusText
  as select from dd07t
  association        to parent I_TranspChargeCalcStatus as _TranspChargeCalcStatus on $projection.TranspChargeCalcStatus = _TranspChargeCalcStatus.TranspChargeCalcStatus
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspChargeCalcStatus'
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tcc_calc_status preserving type) as TranspChargeCalcStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                   as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as val_text preserving type )                                    as TranspChargeCalcStatusDesc,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                             as DomainValue,

      /* Associations */
      _TranspChargeCalcStatus,
      _Language
}
where
      domname                     =  '/SCMTMS/TCC_CALC_STATUS'
  and as4local                    =  'A'
```
