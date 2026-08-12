---
name: I_REFREQUENCYUNIT
description: "Refrequencyunit"
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_REFREQUENCYUNIT

**Refrequencyunit**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REFrequencyUnit` | ✓ | |  | `cast( dd07l.domvalue_l as recdvdmfrequencyunit )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREFREQUNIT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@EndUserText.label: 'Real Estate Frequency Unit'
@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'REFrequencyUnit',
  resultSet.sizeCategory: #XS,
  usageType: {
    serviceQuality: #A,
    dataClass: #META,
    sizeCategory: #S
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities:  [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #SQL_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #VALUE_HELP_PROVIDER,
    #SEARCHABLE_ENTITY
  ],
  sapObjectNodeType.name: 'RealEstateFrequencyUnit'
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

define root view entity I_REFrequencyUnit
  as select from dd07l
  composition [0..*] of I_REFrequencyUnitText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as recdvdmfrequencyunit ) as REFrequencyUnit,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l                              as DomainValue,
      _Text
}
where
      dd07l.domname  = 'RECDFREQUENCYUNIT'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
