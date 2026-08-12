---
name: I_TECHNICALOBJECTTYPESTDVH
description: "Technicalobjecttypestdvh"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - value-help
  - standard-value-help
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALOBJECTTYPESTDVH

**Technicalobjecttypestdvh**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechnicalObjectType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:004:ZDpK08xG7jU}eBgLtOZvI0
@AbapCatalog.sqlViewName: 'ITOT__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'TechnicalObjectType'

@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
 #CDS_MODELING_DATA_SOURCE,
 #CDS_MODELING_ASSOCIATION_TARGET,
 #VALUE_HELP_PROVIDER,
 #SEARCHABLE_ENTITY
 ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

@EndUserText.label: 'Techncial Object Type'
define view I_TechnicalObjectTypeStdVH
  as select from I_TechnicalObjectType
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.9
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
      @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT // Optimize Type ahead for value helps - 2302
  key TechnicalObjectType,

      _Text
}
```
