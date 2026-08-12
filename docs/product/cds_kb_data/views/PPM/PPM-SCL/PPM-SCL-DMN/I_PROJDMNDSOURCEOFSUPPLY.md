---
name: I_PROJDMNDSOURCEOFSUPPLY
description: "Projdmndsourceofsupply"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDSOURCEOFSUPPLY

**Projdmndsourceofsupply**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandSourceOfSupply` | ✓ | |  | `cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_source_of_supply )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_SourceOfSupplyText` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{ representativeKey: 'ProjectDemandSourceOfSupply',
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S,
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET],
               sapObjectNodeType.name: 'ProjectDemandSourceOfSupply'
              }
@Metadata.ignorePropagatedAnnotations:true
@VDM:{ viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }
@EndUserText.label: 'Resource Assignment Source for Proj Dmnds'

define root view entity I_ProjDmndSourceOfSupply
  as select from dd07l
  composition [0..*] of I_ProjDmndSourceOfSupplyText as _SourceOfSupplyText
{
      @ObjectModel.text.association: '_SourceOfSupplyText'
  key cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_source_of_supply ) as ProjectDemandSourceOfSupply,
      @Consumption.hidden: true
      dd07l.domvalue_l                                                      as DomainValue,

      _SourceOfSupplyText
}
where
      domname  = 'PROJ_DMND_SOURCE_OF_SUPPLY'
  and as4local = 'A'
```
