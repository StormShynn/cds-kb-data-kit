---
name: I_EQUIPMENTCATEGORYSTDVH
description: "Equipmentcategorystdvh"
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
# I_EQUIPMENTCATEGORYSTDVH

**Equipmentcategorystdvh**

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
| `EquipmentCategory` | ✓ | |  |  |  |  |
| `EquipmentCategoryStatusProfile` |  | |  |  |  |  |
| `EquipmentCategoryViewProfile` |  | |  |  |  |  |
| `EquipCatHasLinearAttributes` |  | |  |  |  |  |
| `EquipmentCategoryOID` |  | |  |  |  |  |
| `IsUtilitiesData` |  | |  |  |  |  |
| `NumberRangeForIntIDAssignment` |  | |  |  |  |  |
| `NumberRangeForExtIDAssignment` |  | |  |  |  |  |
| `TechObjInspectionLevelCode` |  | |  |  |  |  |
| `EquipmentCategoryReferenceType` |  | |  |  |  |  |
| `_InspectionLevelText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:004:ZDpK08xG7jU}eBgLtOZvI0
@AbapCatalog.sqlViewName: 'IEC__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@Consumption.ranked: true    // Optimize Type ahead for value helps - 2302
@Search: {
  searchable: true
}                           // Optimize Type ahead for value helps - 2302
@ObjectModel.representativeKey: 'EquipmentCategory'

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
@AbapCatalog.preserveKey:true

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Equipment Category'
define view I_EquipmentCategoryStdVH as select from I_EquipmentCategory {
  @ObjectModel.text.association: '_Text'
  @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8} // Optimize Type ahead for value helps - 2302
  @Consumption.valueHelpDefault.binding.usage:#FILTER_AND_RESULT // Optimize Type ahead for value helps - 2302
  @EndUserText.label: 'Equipment Category'
  key EquipmentCategory,
  
     @UI.hidden:true
     EquipmentCategoryStatusProfile,
    // EquipCatObjectInformationCode,
    @UI.hidden:true
      EquipmentCategoryViewProfile,
      @UI.hidden:true
      EquipCatHasLinearAttributes,
      @UI.hidden:true
      EquipmentCategoryOID,
      @UI.hidden:true
      IsUtilitiesData,
      @UI.hidden:true
     NumberRangeForIntIDAssignment,
      @UI.hidden:true
      NumberRangeForExtIDAssignment,
      @UI.hidden:true
     // @ObjectModel.text.association: '_InspectionLevelText'
      TechObjInspectionLevelCode,
      // @UI.hidden:true
      //_InspectionLevelText.TechObjInspectionLevelDesc,
      @UI.hidden:true
      EquipmentCategoryReferenceType,
      @UI.hidden:true
      _InspectionLevelText,
     _Text
  
}
```
