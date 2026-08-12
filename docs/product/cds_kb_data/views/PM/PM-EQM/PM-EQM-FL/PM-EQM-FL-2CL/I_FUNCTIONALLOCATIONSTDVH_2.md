---
name: I_FUNCTIONALLOCATIONSTDVH_2
description: "Functionallocationstdvh 2"
app_component: PM-EQM-FL-2CL
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
  - PM
  - PM-EQM
  - PM-EQM-FL
  - interface-view
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FUNCTIONALLOCATIONSTDVH_2

**Functionallocationstdvh 2**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
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
| `FunctionalLocation` | ✓ | |  | `cast(FunctionalLocation as tplnr_unconverted preserving type )` |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `_FunctionalLocationText` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IFL__VH_2'
@Consumption.ranked: true 
@ObjectModel.representativeKey: 'FunctionalLocation'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
 #CDS_MODELING_DATA_SOURCE,
 #CDS_MODELING_ASSOCIATION_TARGET,
 #VALUE_HELP_PROVIDER,
 #SEARCHABLE_ENTITY
 ]

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.privilegedAssociations:['_LocationAccountAssignment','_FunctionalLocationText'] 

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Functional Location'
@Search.searchable: true


define view entity I_FunctionalLocationStdVH_2
  as select from I_FunctionalLocation
{
      @ObjectModel.text.association: '_FunctionalLocationText'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.7 } 
      @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT 
    key cast(FunctionalLocation as tplnr_unconverted preserving type ) as FunctionalLocation,
    
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.7 } 
      @Consumption.hidden: true
      _FunctionalLocationText[1:Language = $session.system_language].FunctionalLocationName,
      
      _FunctionalLocationText,
      @Consumption.hidden: true
      MaintObjectLocAcctAssgmtNmbr,
      @Consumption.hidden: true
      AuthorizationGroup,
      @Consumption.hidden: true
      MaintenancePlannerGroup,
      @Consumption.hidden: true
      MaintenancePlanningPlant,

      @Consumption.hidden: true
      _LocationAccountAssignment
}
```
