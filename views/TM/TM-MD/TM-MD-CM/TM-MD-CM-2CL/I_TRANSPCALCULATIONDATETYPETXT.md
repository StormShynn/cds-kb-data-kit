---
name: I_TRANSPCALCULATIONDATETYPETXT
description: "Transpcalculationdatetypetxt"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPCALCULATIONDATETYPETXT

**Transpcalculationdatetypetxt**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspCalculationDateType` | ✓ | |  | `cast(domvalue_l as /scmtms/vdm_tcm_calc_date_type preserving type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `TranspCalculationDateTypeDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tcm_calc_dte_typt preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_TranspCalculationDateType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'ITCALCDATETYPTXT'
@EndUserText:   {label: 'Transp Calculation Date Type - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspCalculationDateType',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspCalculationDateTypeTxt
  as select from dd07t
  association        to parent I_TranspCalculationDateType as _TranspCalculationDateType on $projection.TranspCalculationDateType = _TranspCalculationDateType.TranspCalculationDateType
  association [0..1] to I_Language                         as _Language                  on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspCalculationDateType'
  key cast(domvalue_l as /scmtms/vdm_tcm_calc_date_type preserving type) as TranspCalculationDateType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                         as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tcm_calc_dte_typt preserving type)      as TranspCalculationDateTypeDesc,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                   as DomainValue,

      /* Associations */
      _TranspCalculationDateType,
      _Language
}
where
      domname  = '/SCMTMS/CALC_DATE_TYPE_CHRG'
  and as4local = 'A';
```
