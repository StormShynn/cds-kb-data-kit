---
name: I_TRANSPORTATIONRATESIGNTYPE_2
description: "Transportationratesigntype 2"
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - transport
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPORTATIONRATESIGNTYPE_2

**Transportationratesigntype 2**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspRateSignType` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_rate_sign_ind preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics:     { dataCategory:       #DIMENSION,
                  internalName:       #LOCAL }
@Analytics.technicalName: 'ITRATESIGNTYP'
@Consumption.ranked: true
@EndUserText:{label: 'Transportation Rate Sign Type'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {sapObjectNodeType.name: 'TransportationRateSignType',
                 representativeKey:  'TranspRateSignType',
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
                 lifecycle.contract.type: #PUBLIC_LOCAL_API}

define root view entity I_TransportationRateSignType_2
  as select from dd07l
  composition [0..*] of I_TranspRateSignTypeText as _Text
{
      @ObjectModel.text.association: '_Text'
      @UI.textArrangement: #TEXT_ONLY
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_rate_sign_ind preserving type) as TranspRateSignType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      dd07l.domvalue_l                                                               as DomainValue,

      _Text
}
where
      domname  = '/SCMTMS/SIGN_INDICATOR'
  and as4local = 'A';
```
