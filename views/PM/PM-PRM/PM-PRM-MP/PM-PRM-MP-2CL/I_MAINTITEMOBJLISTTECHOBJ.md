---
name: I_MAINTITEMOBJLISTTECHOBJ
description: Maintitemobjlisttechobj
app_component: PM-PRM-MP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-PRM
  - PM-PRM-MP
  - interface-view
  - item-level
  - component:PM-PRM-MP-2CL
  - lob:Plant Maintenance
---
# I_MAINTITEMOBJLISTTECHOBJ

**Maintitemobjlisttechobj**

| Property | Value |
|---|---|
| App Component | `PM-PRM-MP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `MaintenanceItemObjectList` | `MaintenanceItemObjectList` |
| key `MaintenanceItemObject` | `MaintenanceItemObject` |
| `Equipment` | `Equipment` |
| `FunctionalLocation` | `FunctionalLocation` |
| `TechObjIsEquipOrFuncnlLoc` | `cast ( 'EAMS_EQUI' as eams_tec_obj_type_value )` |
| `TechnicalObject` | `}] cast ( Equipment as eams_tec_obj )` |
| `TechnicalObjectLabel` | `cast ( Equipment as eams_tech_obj_conv )` |
| `TechnicalObjectDescription` | `cast ( _EquipmentText[1:Language = $session.system_language].EquipmentName as eams_tec_obj_des )` |
| `Assembly` | `Assembly` |
| `Material` | `Material` |
| `SerialNumber` | `SerialNumber` |
| `MaintenanceNotification` | `MaintenanceNotification` |
| `MaintObjectLocAcctAssgmtNmbr` | `MaintObjectLocAcctAssgmtNmbr` |
| `SortField` | `SortField` |
| `Product` | `Product` |
| `_TechnicalObject` | *Association* |
| `_TechObjIsEquipOrFuncnlLoc` | *Association* |
| `_Assembly` | *Association* |
| `_Equipment` | *Association* |
| `_FunctionalLocation` | *Association* |
| `_LocationAccountAssignment` | *Association* |
| `_MaintenanceItem` | *Association* |
| `_MaintenanceNotification` | *Association* |
| `_Material` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TechnicalObject` | `I_TechnicalObject` | [0..1] |
| `_TechObjIsEquipOrFuncnlLoc` | `I_TechObjIsEquipOrFuncnlLoc` | [0..1] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMNTITMOBJLISTTO'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Maintenance Item Object List with Technical Object'
@ObjectModel: {
//    representativeKey: [ 'MaintenanceItemObject' ],
    usageType: {
        dataClass: #TRANSACTIONAL,
        serviceQuality: #D,
        sizeCategory: #XL
    }
}
@VDM.viewType: #COMPOSITE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern:             #CDS_MODELING_DATA_SOURCE
@ObjectModel.supportedCapabilities:     [ #CDS_MODELING_DATA_SOURCE ]



define view I_MaintItemObjListTechObj
  as select from I_MaintenanceItemObject
  association [0..1] to I_TechnicalObject           as _TechnicalObject           on  _TechnicalObject.TechnicalObject           = $projection.TechnicalObject
                                                                                  and _TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on  _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..*] to I_EquipmentText             as _EquipmentText             on  _EquipmentText.Equipment = $projection.Equipment
{
   
  key MaintenanceItemObjectList,

  key MaintenanceItemObject,

      Equipment,

      FunctionalLocation,

      // Technical Object
      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      cast ( 'EAMS_EQUI' as eams_tec_obj_type_value )                                                  as TechObjIsEquipOrFuncnlLoc,

      @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_TechnicalObjectStdVH',
            element: 'TechnicalObject'
        },
        additionalBinding: [{
            localElement: 'TechObjIsEquipOrFuncnlLoc',
            element: 'TechObjIsEquipOrFuncnlLoc'
        }]
      }]
      @ObjectModel.foreignKey.association: '_TechnicalObject'
      cast ( Equipment as eams_tec_obj )                                                               as TechnicalObject,

      @ObjectModel.text.element: ['TechnicalObjectDescription']
      cast ( Equipment as eams_tech_obj_conv )                                                         as TechnicalObjectLabel,

      cast ( _EquipmentText[1:Language = $session.system_language].EquipmentName as eams_tec_obj_des ) as TechnicalObjectDescription,

      Assembly,

      Material,

      SerialNumber,

      MaintenanceNotification,

      MaintObjectLocAcctAssgmtNmbr,

      SortField,
      
      Product,  

      /* Associations */
      _Assembly,
      _Equipment,
      _FunctionalLocation,
      _LocationAccountAssignment,
      _MaintenanceItem,
      _MaintenanceNotification,
      _Material,
      _TechnicalObject,
      _TechObjIsEquipOrFuncnlLoc
}

where
      Equipment is not null
  and Equipment <> ''


union all select from I_MaintenanceItemObject
  association [0..1] to I_TechnicalObject           as _TechnicalObject           on  _TechnicalObject.TechnicalObject           = $projection.TechnicalObject
                                                                                  and _TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on  _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_FunctionalLocationLabel   as _FunctionalLocationLabel   on  _FunctionalLocationLabel.FunctionalLocation = $projection.FunctionalLocation
  association [0..*] to I_FunctionalLocationText    as _FunctionalLocationText    on  _FunctionalLocationText.FunctionalLocation = $projection.FunctionalLocation
{
 
  key MaintenanceItemObjectList,

  key MaintenanceItemObject,

      Equipment,

      FunctionalLocation,

      // Technical Object
      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      cast ( 'EAMS_FL' as eams_tec_obj_type_value )                                                                      as TechObjIsEquipOrFuncnlLoc,

      @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_TechnicalObjectStdVH',
            element: 'TechnicalObject'
        },
        additionalBinding: [{
            localElement: 'TechObjIsEquipOrFuncnlLoc',
            element: 'TechObjIsEquipOrFuncnlLoc'
        }]
      }]
      @ObjectModel.foreignKey.association: '_TechnicalObject'
      cast ( FunctionalLocation as eams_tec_obj )                                                                        as TechnicalObject,

      @ObjectModel.text.element: ['TechnicalObjectDescription']
      cast ( _FunctionalLocationLabel.FunctionalLocationLabelName as eams_tech_obj_conv )                                as TechnicalObjectLabel,

      cast ( _FunctionalLocationText[1:Language = $session.system_language].FunctionalLocationName as eams_tec_obj_des ) as TechnicalObjectDescription,

      Assembly,

      Material,

      SerialNumber,

      MaintenanceNotification,

      MaintObjectLocAcctAssgmtNmbr,

      SortField,
      Product,

      /* Associations */
      _Assembly,
      _Equipment,
      _FunctionalLocation,
      _LocationAccountAssignment,
      _MaintenanceItem,
      _MaintenanceNotification,
      _Material,
      _TechnicalObject,
      _TechObjIsEquipOrFuncnlLoc
}

where
  (
       Equipment          is null
    or Equipment          =  ''
  )
  and  FunctionalLocation <> ''


union all select from I_MaintenanceItemObject
  association [0..1] to I_TechnicalObject           as _TechnicalObject           on  _TechnicalObject.TechnicalObject           = $projection.TechnicalObject
                                                                                  and _TechnicalObject.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc on  _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
{
  
  key MaintenanceItemObjectList,

  key MaintenanceItemObject,

      Equipment,

      FunctionalLocation,

      // Technical Object
      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      cast ('' as eams_tec_obj_type_value ) as  TechObjIsEquipOrFuncnlLoc,

      @Consumption.valueHelpDefinition: [{
        entity: {
            name:    'I_TechnicalObjectStdVH',
            element: 'TechnicalObject'
        },
        additionalBinding: [{
            localElement: 'TechObjIsEquipOrFuncnlLoc',
            element: 'TechObjIsEquipOrFuncnlLoc'
        }]
      }]
      @ObjectModel.foreignKey.association: '_TechnicalObject'
      cast ('' as eams_tec_obj )            as  TechnicalObject,

      @ObjectModel.text.element: ['TechnicalObjectDescription']
      cast ('' as eams_tech_obj_conv )      as  TechnicalObjectLabel,

      cast ('' as eams_tec_obj_des )        as  TechnicalObjectDescription,

      Assembly,

      Material,

      SerialNumber,

      MaintenanceNotification,

      MaintObjectLocAcctAssgmtNmbr,

      SortField,
      Product,

      /* Associations */
      _Assembly,
      _Equipment,
      _FunctionalLocation,
      _LocationAccountAssignment,
      _MaintenanceItem,
      _MaintenanceNotification,
      _Material,
      _TechnicalObject,
      _TechObjIsEquipOrFuncnlLoc
}
where
  (
       Equipment          is null
    or Equipment          = ''
  )
  and
  (
       FunctionalLocation is null
    or FunctionalLocation = ''
  )
```
