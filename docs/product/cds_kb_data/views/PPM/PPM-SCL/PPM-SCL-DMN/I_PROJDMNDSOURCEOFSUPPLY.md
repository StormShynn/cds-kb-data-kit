---
name: I_PROJDMNDSOURCEOFSUPPLY
description: "Projdmndsourceofsupply"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
