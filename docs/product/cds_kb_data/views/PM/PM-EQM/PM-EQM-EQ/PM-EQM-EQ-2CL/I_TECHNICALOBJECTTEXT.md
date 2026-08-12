---
name: I_TECHNICALOBJECTTEXT
description: "Technicalobjecttext"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - text-view
  - text
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALOBJECTTEXT

**Technicalobjecttext**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechnicalObject` | ✓ | |  | `cast ( Equipment as eams_tec_obj )` |  |  |
| `TechObjIsEquipOrFuncnlLoc` | ✓ | |  | `cast ( 'EAMS_EQUI' as eams_tec_obj_type_value )` |  |  |
| `Language` | ✓ | |  |  |  |  |
| `TechnicalObjectDescription` |  | |  | `cast( I_EquipmentText.EquipmentName as eams_tec_obj_des )` |  |  |
| `IsPrimaryLanguage` |  | |  |  |  |  |
| `TechnicalObjectHasLongText` |  | |  | `EquipmentHasLongText` |  |  |
| `_TechnicalObject` | | ✓ | | | | |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechnicalObject` | `I_TechnicalObject` | [0..1] |
| `_TechObjIsEquipOrFuncnlLoc` | `I_TechObjIsEquipOrFuncnlLoc` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Technical Object - Text'
@ObjectModel.dataCategory:#TEXT
@VDM.viewType:#COMPOSITE 
@AbapCatalog.sqlViewName: 'ITECHOBJTEXT'
@AccessControl.authorizationCheck: #CHECK

@ObjectModel.representativeKey: 'TechnicalObject'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_TechnicalObjectText as select from I_EquipmentText
association[0..1] to I_TechnicalObject as _TechnicalObject on _TechnicalObject.TechnicalObject = $projection.TechnicalObject and
_TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
association[0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
{

    key cast ( Equipment as eams_tec_obj )                     as TechnicalObject,
    @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
    @Environment.sql.passValue: true
    key cast ( 'EAMS_EQUI' as eams_tec_obj_type_value )        as TechObjIsEquipOrFuncnlLoc, 
 
    @ObjectModel.foreignKey.association: '_Language'
    @Semantics.language: true
    key I_EquipmentText.Language, 
  
    @Semantics.text: true
    cast( I_EquipmentText.EquipmentName as  eams_tec_obj_des ) as TechnicalObjectDescription, 
    
    @Semantics.booleanIndicator 
    I_EquipmentText.IsPrimaryLanguage,
    
    I_EquipmentText.EquipmentHasLongText as TechnicalObjectHasLongText,
    
    /* Associations */
    I_EquipmentText._Language, 
    _TechnicalObject,
    _TechObjIsEquipOrFuncnlLoc
}
union all
select from I_FunctionalLocationText
association[0..1] to I_TechnicalObject as _TechnicalObject on _TechnicalObject.TechnicalObject = $projection.TechnicalObject and
_TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
association[0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
{ 
  
   key cast ( I_FunctionalLocationText.FunctionalLocation as eams_tec_obj )    as TechnicalObject,
   @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
   key cast ( 'EAMS_FL' as eams_tec_obj_type_value )                           as TechObjIsEquipOrFuncnlLoc,  
    
   @ObjectModel.foreignKey.association: '_Language'
   @Semantics.language: true
   I_FunctionalLocationText.Language, 
 
   @Semantics.text: true
   cast( I_FunctionalLocationText.FunctionalLocationName as eams_tec_obj_des ) as TechnicalObjectDescription, 
   
   @Semantics.booleanIndicator 
   I_FunctionalLocationText.IsPrimaryLanguage,
   
   I_FunctionalLocationText.FuncnlLocHasLongText as TechnicalObjectHasLongText,
   
  /* Associations */
   I_FunctionalLocationText._Language,
   _TechnicalObject,
   _TechObjIsEquipOrFuncnlLoc
 }
```
