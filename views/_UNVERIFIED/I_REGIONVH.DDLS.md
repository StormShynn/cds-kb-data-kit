---
name: I_REGIONVH.DDLS
description: Region
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/abapedia/steampunk-2305-api/blob/2d5698c17e6e2e0fcf5c50a8c8f8808d70a3d40d/src/i_regionvh.ddls.asddls
semantic_en: Region — Interface CDS view based on I_Region.
semantic_vi: Region — CDS view giao diện dựa trên I_Region.
keywords:
  - region
  - country
tags:
  - RE
  - component:RE
  - interface-view
---
# I_REGIONVH.DDLS

**Region**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/abapedia/steampunk-2305-api/blob/2d5698c17e6e2e0fcf5c50a8c8f8808d70a3d40d/src/i_regionvh.ddls.asddls) |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Country` | ✓ | |  |  |
| `Region` | ✓ | |  |  |
| `_RegionText` | | ✓ | | |
| `_Country` | | ✓ | | |

## Source Code

*Source: [https://github.com/abapedia/steampunk-2305-api/blob/2d5698c17e6e2e0fcf5c50a8c8f8808d70a3d40d/src/i_regionvh.ddls.asddls](https://github.com/abapedia/steampunk-2305-api/blob/2d5698c17e6e2e0fcf5c50a8c8f8808d70a3d40d/src/i_regionvh.ddls.asddls)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Consumption.ranked: true 
@EndUserText.label: 'Region'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_RegionVH
  as select from I_Region
{
  key Country,
  key Region,
      _RegionText,
      _Country
}
```
