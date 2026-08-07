---
name: I_EQUIPMENTCATEGORY
description: Equipmentcategory
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
  - equipment
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_EQUIPMENTCATEGORY

**Equipmentcategory**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `EquipmentCategory` | ✓ | |  | `eqtyp` |
| `IsUtilitiesData` |  | |  | `isu_knz` |
| `NumberRangeForIntIDAssignment` |  | |  | `numki` |
| `NumberRangeForExtIDAssignment` |  | |  | `numke` |
| `TechObjInspectionLevelCode` |  | |  | `idms_type` |
| `EquipmentCategoryReferenceType` |  | |  | `reftp` |
| `EquipmentCategoryStatusProfile` |  | |  | `stsma` |
| `EquipmentCategoryViewProfile` |  | |  | `view_prof` |
| `EquipCatHasLinearAttributes` |  | |  | `lfe_ind` |
| `EquipmentCategoryOID` |  | |  | `cast( t370t.eqtyp as equipmentcategory_oid )` |
| `_Text` | | ✓ | | |
| `_InspectionLevelText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EquiCategoryText` | [0..*] |
| `_InspectionLevelText` | `I_TechObjInspectionLevelText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Equipment Category'
@Analytics: { dataCategory: #DIMENSION,
  dataExtraction : { enabled: true ,
  delta.changeDataCapture.automatic: true }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IEQUICATTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'EquipmentCategory'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.alternativeKey:[{id:'OID',element:['EquipmentCategoryOID']}] 
@ObjectModel.sapObjectNodeType.name:'EquipmentCategory'
@ObjectModel.objectIdentifier.oidElement:'EquipmentCategoryOID' 
define view I_EquipmentCategory
  as select from           t370t // T370T = Equipment categories
  association [0..*] to I_EquiCategoryText           as _Text                on _Text.EquipmentCategory = $projection.EquipmentCategory
  association [0..*] to I_TechObjInspectionLevelText as _InspectionLevelText on _InspectionLevelText.TechObjInspectionLevelCode = $projection.TechObjInspectionLevelCode
{
      @ObjectModel.text.association: '_Text'
  key t370t.eqtyp     as EquipmentCategory,

      t370t.isu_knz   as IsUtilitiesData,

      t370t.numki     as NumberRangeForIntIDAssignment,

      t370t.numke     as NumberRangeForExtIDAssignment,

      @ObjectModel.text.association: '_InspectionLevelText'
      t370t.idms_type as TechObjInspectionLevelCode,
      t370t.reftp as EquipmentCategoryReferenceType,
      t370t.stsma as EquipmentCategoryStatusProfile,
    //  t370t.infow as EquipCatObjectInformationCode,
      t370t.view_prof as EquipmentCategoryViewProfile,
      t370t.lfe_ind as EquipCatHasLinearAttributes,
      //MDI/ODM
      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      cast( t370t.eqtyp as equipmentcategory_oid ) as EquipmentCategoryOID, 
      // Propagate association
      _Text,
      _InspectionLevelText
}
```
