---
name: I_GHGENERGYSOURCINGTYPEVH
description: "Ghgenergysourcingtypevh"
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SUS
  - SUS-INT
  - interface-view
  - value-help
  - component:SUS-INT
  - lob:Other
---
# I_GHGENERGYSOURCINGTYPEVH

**Ghgenergysourcingtypevh**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGEnergySourcingType` | ✓ | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'GHG Energy Sourcing Type'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GHGEnergySourcingType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
                                      
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass:      #META
@ObjectModel.usageType.sizeCategory:   #S

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE                                      
define view entity I_GHGEnergySourcingTypeVH as select from I_GHGEnergySourcingType
{ 
      @ObjectModel.text.association: '_Text'
  key GHGEnergySourcingType,
  
      _Text
}
```
