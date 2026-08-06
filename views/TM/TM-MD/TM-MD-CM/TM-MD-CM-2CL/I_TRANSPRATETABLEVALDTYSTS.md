---
name: I_TRANSPRATETABLEVALDTYSTS
description: Transpratetablevaldtysts
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
# I_TRANSPRATETABLEVALDTYSTS

**Transpratetablevaldtysts**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `TranspRateValidityLfcycStatus` | `cast(substring(domvalue_l, 1, 2) as /scmtms/tcmm_life_cycle_status preserving type)` |
| `DomainValue` | `dd07l.domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ITRATVLDTYSTS'
@Consumption.ranked: true
@EndUserText:{label: 'Transp Rate Table Validity Status'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TranspRateTableValidityStatus',
                 representativeKey:  'TranspRateValidityLfcycStatus',
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

define root view entity I_TranspRateTableValdtySts
  as select from dd07l
  composition [0..*] of I_TranspRateTableValdtyStsTxt as _Text
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_ONLY
  key cast(substring(domvalue_l, 1, 2) as /scmtms/tcmm_life_cycle_status preserving type) as TranspRateValidityLfcycStatus,
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
      domname                     =  '/SCMTMS/TCMM_LIFE_CYCLE_STATUS'
  and as4local                    =  'A'
  and substring(domvalue_l, 1, 2) <> '02' //Deactivated
  and substring(domvalue_l, 1, 2) <> '03' //Awaiting Approval
  and substring(domvalue_l, 1, 2) <> '04' //Rate Change Requested
```
