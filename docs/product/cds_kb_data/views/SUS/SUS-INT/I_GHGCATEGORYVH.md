---
name: I_GHGCATEGORYVH
description: "Ghgcategoryvh"
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
# I_GHGCATEGORYVH

**Ghgcategoryvh**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `GHGCategory` | ✓ | |  |  |  |  |
| `GHGScope` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |
| `_GHGScope` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'GHG Category'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'GHGCategory'
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

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #COMPOSITE
define view entity I_GHGCategoryVH
  as select from I_GHGCategory
{

      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key GHGCategory,
      
      @ObjectModel.foreignKey.association: '_GHGScope'
      GHGScope,

      _Text,
      _GHGScope
}
```
