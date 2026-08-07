---
name: I_DUNNINGAREASTDVH
description: Dunningareastdvh
app_component: FI-AR-AR-C-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-AR
  - FI-AR-AR
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-AR-AR-C-2CL
  - lob:Finance
---
# I_DUNNINGAREASTDVH

**Dunningareastdvh**

| Property | Value |
|---|---|
| App Component | `FI-AR-AR-C-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  |
| `DunningArea` | ✓ | |  |  |
| `_Text` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |

## Source Code

```abap
//GENERATED:001:ZDpK08xG7jUzzDJcov86lW
@AbapCatalog.sqlViewName: 'IDUNNINGAREA__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'DunningArea'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Dunning Area'

@Search.searchable: true

@ObjectModel.supportedCapabilities:[ #CDS_MODELING_DATA_SOURCE ]

@Consumption.ranked: true

define view I_DunningAreaStdVH
  as select from I_DunningArea
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.ranking: #LOW
  key CompanyCode,
      @Search: { defaultSearchElement: true,
                 fuzzinessThreshold:   0.8 }
      @ObjectModel.text.association: '_Text'
      @Search.ranking: #HIGH      
  key DunningArea,

      _Text,

      @Consumption.hidden: true
      _CompanyCode
}
```
