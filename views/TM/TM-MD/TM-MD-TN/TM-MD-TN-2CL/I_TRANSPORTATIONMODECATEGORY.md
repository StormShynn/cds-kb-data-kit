---
name: I_TRANSPORTATIONMODECATEGORY
description: Transportationmodecategory
app_component: TM-MD-TN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-TN
  - interface-view
  - transport
  - component:TM-MD-TN-2CL
  - lob:Other
---
# I_TRANSPORTATIONMODECATEGORY

**Transportationmodecategory**

| Property | Value |
|---|---|
| App Component | `TM-MD-TN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationModeCategory` | ✓ | |  | `cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_trmod_cat preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText:   {label:              'Transportation Mode Category'}
@Analytics:     {dataCategory:       #DIMENSION,
                 dataExtraction:     {enabled: true},
                 internalName:       #LOCAL}
@Analytics.technicalName: 'ITRMODECAT'
@ObjectModel:   {representativeKey:     'TransportationModeCategory',
                 usageType:             {serviceQuality: #A,
                                         sizeCategory:   #S,
                                         dataClass:      #META},
                 modelingPattern:        #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY]}
@VDM:           {viewType:           #BASIC}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Metadata:       {allowExtensions:   true,
                 ignorePropagatedAnnotations: true}
@ObjectModel.sapObjectNodeType.name: 'TransportationModeCategory'

define root view entity I_TransportationModeCategory
  as select from dd07l
  composition [0..*] of I_TransportationModeCategoryT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast(substring(domvalue_l, 1, 1) as /scmtms/vdm_tor_trmod_cat preserving type) as TransportationModeCategory,

      @Consumption.hidden: true
      @Analytics.hidden: true
      domvalue_l                                                                     as DomainValue,

      /* Associations */
      _Text
}
where
      domname  = '/SAPAPO/TRMODCAT'
  and as4local = 'A';
```
