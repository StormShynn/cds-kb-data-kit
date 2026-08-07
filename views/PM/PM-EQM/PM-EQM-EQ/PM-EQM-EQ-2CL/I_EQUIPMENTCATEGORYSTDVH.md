---
name: I_EQUIPMENTCATEGORYSTDVH
description: Equipmentcategorystdvh
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
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
