---
name: I_EQUIPMENTSTDVH
description: "Equipmentstdvh"
app_component: PM-EQM-EQ-2CL
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
  - PM-EQM-EQ
  - interface-view
  - value-help
  - standard-value-help
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTSTDVH

**Equipmentstdvh**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
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
| `Equipment` | ✓ | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `_EquipmentText` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.technicalName: 'IE__VH6'
@ObjectModel.representativeKey: 'Equipment'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
 #CDS_MODELING_DATA_SOURCE,
 #CDS_MODELING_ASSOCIATION_TARGET,
 #VALUE_HELP_PROVIDER,
 #SEARCHABLE_ENTITY
 ]

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_EquipmentText']

@Search.searchable: true
@Consumption.ranked:true



@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Equipment'
define view entity I_EquipmentStdVH
  as select from I_Equipment
{

      @ObjectModel.text.association: '_EquipmentText'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @Consumption: { valueHelpDefault: { 
        binding: {
          usage: #FILTER_AND_RESULT
        }
       } }        // Optimize Type ahead for value helps - 2302
  key Equipment,
      @Search: { defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Consumption.hidden: true
      _EquipmentText[1:Language=$session.system_language].EquipmentName,
      
      @Consumption.hidden: true
      _EquipmentText,
      @Consumption.hidden: true
      Customer,
      @Consumption.hidden: true
      Supplier,
      @Consumption.hidden: true
      AuthorizationGroup,

      @Consumption.hidden: true
      _Customer,
      @Consumption.hidden: true
      _Supplier
}
```
