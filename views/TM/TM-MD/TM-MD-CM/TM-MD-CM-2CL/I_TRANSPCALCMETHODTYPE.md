---
name: I_TRANSPCALCMETHODTYPE
description: Transpcalcmethodtype
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
# I_TRANSPCALCMETHODTYPE

**Transpcalcmethodtype**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspCalculationMethodType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tcm_calc_mthd_type preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Text` | | ✓ | | |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ITCALCMETHTYPE'
@Consumption.ranked: true
@EndUserText:{label: 'Transportation Calculation Method Type'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TranspCalculationMethodType',
                 representativeKey:  'TranspCalculationMethodType',
                 dataCategory: #VALUE_HELP,
                 modelingPattern: #ANALYTICAL_DIMENSION,
                 supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE,
                                         #VALUE_HELP_PROVIDER],
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 resultSet.sizeCategory: #XS}
@Search.searchable: true
@VDM:           {viewType:           #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define root view entity I_TranspCalcMethodType
  as select from dd07l
  composition [0..*] of I_TranspCalcMethodTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tcm_calc_mthd_type preserving type) as TranspCalculationMethodType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                                    as DomainValue,

      /* Associations */
      _Text
}
where
      domname                     =  '/SCMTMS/TCM_CALC_METHOD_CODE'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 1) <> '3'
  and substring(domvalue_l, 1, 1) <> '5'
  and substring(domvalue_l, 1, 1) <> '6'
  and substring(domvalue_l, 1, 1) <> '9'
  and substring(domvalue_l, 1, 1) <> 'A'
  and substring(domvalue_l, 1, 1) <> 'B'
```
