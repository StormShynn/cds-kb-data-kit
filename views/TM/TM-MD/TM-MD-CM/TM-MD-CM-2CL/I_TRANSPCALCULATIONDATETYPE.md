---
name: I_TRANSPCALCULATIONDATETYPE
description: Transpcalculationdatetype
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
# I_TRANSPCALCULATIONDATETYPE

**Transpcalculationdatetype**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspCalculationDateType` | ✓ | |  | `cast(substring(domvalue_l, 1, 10) as /scmtms/vdm_tcm_calc_date_type preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ITCALCDATETYPE'
@Consumption.ranked: true
@EndUserText:{label: 'Transportation Calculation Date Type'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TranspCalculationDateType',
                 representativeKey:  'TranspCalculationDateType',
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

define root view entity I_TranspCalculationDateType
  as select from dd07l
  composition [0..*] of I_TranspCalculationDateTypeTxt as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 10) as /scmtms/vdm_tcm_calc_date_type preserving type) as TranspCalculationDateType,
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
      domname  = '/SCMTMS/CALC_DATE_TYPE_CHRG'
  and as4local = 'A';
```
