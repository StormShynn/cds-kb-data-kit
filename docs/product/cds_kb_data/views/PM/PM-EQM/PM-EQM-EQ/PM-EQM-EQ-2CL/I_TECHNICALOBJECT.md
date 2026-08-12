---
name: I_TECHNICALOBJECT
description: "Technicalobject"
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
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_TECHNICALOBJECT

**Technicalobject**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TechnicalObject` | ✓ | |  |  |  |  |
| `TechObjIsEquipOrFuncnlLoc` | ✓ | |  |  |  |  |
| `TechnicalObjectLabel` |  | |  | `cast( case when P_EquipmentFuncnlLocUnion.TechObjIsEquipOrFuncnlLoc = 'EAMS_FL' then _FunctionalLocationLabel.FunctionalLocationLabelName else P_EquipmentFuncnlLocUnion.TechnicalObject end as eams_tech_obj_conv )` |  |  |
| `SuperiorObjIsEquipOrFuncnlLoc` |  | |  | `cast( case when SuperordinateEquipment <> '' then 'EAMS_EQUI' when SuperiorFunctionalLocation <> '' then 'EAMS_FL' end as eams_tec_obj_type_value )` |  |  |
| `SuperiorTechnicalObject` |  | |  |  |  |  |
| `TechnicalObjectCategory` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `TechnicalObjectType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `AssetManufacturerName` |  | |  |  |  |  |
| `ManufacturerPartTypeName` |  | |  |  |  |  |
| `MaintenancePlanningPlant` |  | |  |  |  |  |
| `MaintenancePlannerGroup` |  | |  |  |  |  |
| `CatalogProfile` |  | |  |  |  |  |
| `AuthorizationGroup` |  | |  |  |  |  |
| `WorkCenterInternalID` |  | |  |  |  |  |
| `WorkCenterTypeCode` |  | |  |  |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  |  |  |
| `ManufacturerCountry` |  | |  |  |  |  |
| `ConstructionYear` |  | |  |  |  |  |
| `ConstructionMonth` |  | |  |  |  |  |
| `ConstructionMaterial` |  | |  |  |  |  |
| `AcquisitionDate` |  | |  |  |  |  |
| `Currency` |  | |  |  |  |  |
| `AcquisitionValue` |  | |  |  |  |  |
| `TechnicalObjectSortCode` |  | |  |  |  |  |
| `MaintObjectInternalID` |  | |  |  |  |  |
| `SizeOrDimensionText` |  | |  |  |  |  |
| `InventoryNumber` |  | |  |  |  |  |
| `GrossWeight` |  | |  |  |  |  |
| `GrossWeightUnit` |  | |  |  |  |  |
| `ManufacturerPartNmbr` |  | |  |  |  |  |
| `ManufacturerSerialNumber` |  | |  |  |  |  |
| `OperationStartDate` |  | |  |  |  |  |
| `FuncLocStrucIdentifyingLevel` |  | |  |  |  |  |
| `FuncLocStruc2ndIdentifyingLvl` |  | |  |  |  |  |
| `FuncLocationStructure` |  | |  |  |  |  |
| `SuperiorFunctionalLocation` |  | |  |  |  |  |
| `TechnicalObjectDescription` |  | |  |  |  |  |
| `TechnicalObjectHasLongText` |  | |  |  |  |  |
| `SuperiorTechnicalObjectName` |  | |  |  |  |  |
| `SuperiorTechnicalObjectLabel` |  | |  |  |  |  |
| `IsDeleted` |  | |  | `cast(case when _StatusObjectActiveStatus[1: StatusCode = 'I0076'].StatusCode is not null and _StatusObjectActiveStatus[1: StatusCode = 'I0076'].StatusCode = 'I0076' then 'X' else '' end as lkenz )` |  |  |
| `TechObjStatusIsInactive` |  | |  | `cast(case when _StatusObjectActiveStatus[1: StatusCode = 'I0320'].StatusCode is not null and _StatusObjectActiveStatus[1: StatusCode = 'I0320'].StatusCode = 'I0320' then 'X' else '' end as eam_inactive )` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |
| `_TechnicalObjectType` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_SuperiorFunctionalLocation` | | ✓ | | | | |
| `_FunctionalLocationLabel` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |
| `_TechObjIsEquipOrFuncnlLoc` | | ✓ | | | | |
| `_TechnicalObjectText` | | ✓ | | | | |
| `_TechnicalObjectCategory` | | ✓ | | | | |
| `_MaintenancePlannerGroup` | | ✓ | | | | |
| `_ManufacturerCountry` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_IsDeleted` | | ✓ | | | | |
| `_TechObjStatusIsInactive` | | ✓ | | | | |
| `_StatusObjectActiveStatus` | | ✓ | | | | |
| `_TechobjNumberOfSubobjects` | | ✓ | | | | |
| `_TechnicalObjectCodeCatalog` | | ✓ | | | | |
| `_TechnicalObjectHierarchy` | | ✓ | | | | |
| `_ConstructionMaterial` | | ✓ | | | | |
| `_CustWrntyObjAssgmt` | | ✓ | | | | |
| `_VndrWrntyObjAssgmt` | | ✓ | | | | |
| `_SuperFunctionalLocationLabel` | | ✓ | | | | |
| `_MaintenancePlanPlant` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_GrossWeightUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_TechnicalObjectType` | `I_TechnicalObjectType` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_SuperiorFunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_FunctionalLocationLabel` | `I_FunctionalLocationLabel` | [0..1] |
| `_MaintenancePlanningPlant` | `I_Plant` | [0..1] |
| `_TechObjIsEquipOrFuncnlLoc` | `I_TechObjIsEquipOrFuncnlLoc` | [0..1] |
| `_TechnicalObjectText` | `I_TechnicalObjectText` | [0..*] |
| `_TechnicalObjectCategory` | `I_TechnicalObjectCategory` | [0..1] |
| `_MaintenancePlannerGroup` | `I_MaintenancePlannerGroup` | [0..1] |
| `_ManufacturerCountry` | `I_Country` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_IsDeleted` | `I_Indicator` | [0..1] |
| `_TechObjStatusIsInactive` | `I_Indicator` | [0..1] |
| `_StatusObjectActiveStatus` | `I_StatusObjectActiveStatus` | [0..*] |
| `_TechobjNumberOfSubobjects` | `I_TechobjNumberOfSubobjects` | [0..1] |
| `_TechnicalObjectCodeCatalog` | `I_TechnicalReport` | [0..1] |
| `_TechnicalObjectHierarchy` | `I_TechnicalObjectHierarchy` | [1] |
| `_ConstructionMaterial` | `I_Material` | [0..1] |
| `_CustWrntyObjAssgmt` | `I_TechObjCustWrntyAssgmt` | [0..1] |
| `_VndrWrntyObjAssgmt` | `I_TechObjVndrWrntyAssgmt` | [0..1] |
| `_SuperFunctionalLocationLabel` | `I_FunctionalLocationLabel` | [0..1] |
| `_FunctionalLocationExtension` | `E_FunctionalLocation` | [0..1] |
| `_EquipmentExtension` | `E_Equipment` | [0..1] |
| `_MaintenancePlanPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_GrossWeightUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Technical Object'
@Analytics: {dataCategory: #DIMENSION}
@VDM.viewType: #COMPOSITE
@AbapCatalog.sqlViewName: 'ITECHNICALOBJECT'
@AccessControl.authorizationCheck: #CHECK
//Begin of Changes by C5335816 for New Field Inactive Status in I_TechnicalObject : 2302
//@AccessControl.privilegedAssociations:['_LocationAccountAssignment', '_TechnicalObjectText']
@AccessControl.privilegedAssociations:['_LocationAccountAssignment', '_TechnicalObjectText', '_StatusObjectActiveStatus']
//End of Changes by C5335816 for New Field Inactive Status in I_TechnicalObject : 2302
@AbapCatalog.compiler.compareFilter: true

@ObjectModel.representativeKey: [ 'TechnicalObject' ]
@ObjectModel.semanticKey:  [ 'TechnicalObject', 'TechObjIsEquipOrFuncnlLoc' ]
@ObjectModel.supportedCapabilities: [ 
   #SQL_DATA_SOURCE,
   #CDS_MODELING_DATA_SOURCE,
   #CDS_MODELING_ASSOCIATION_TARGET,
   #VALUE_HELP_PROVIDER,
   #SEARCHABLE_ENTITY
]

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true


define view I_TechnicalObject    
  as select from P_EquipmentFuncnlLocUnion 
  association [0..1] to I_User                      as _CreatedByUser              on  _CreatedByUser.UserID = $projection.CreatedByUser
  association [0..1] to I_User                      as _LastChangedByUser          on  _LastChangedByUser.UserID = $projection.LastChangedByUser
  association [0..1] to I_WorkCenterType            as _WorkCenterType             on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                as _WorkCenter                 on  _WorkCenter.WorkCenterInternalID = $projection.WorkCenterInternalID
                                                                                   and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_LocationAccountAssignment as _LocationAccountAssignment  on  _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr = $projection.MaintObjectLocAcctAssgmtNmbr
  association [0..1] to I_TechnicalObjectType       as _TechnicalObjectType        on  _TechnicalObjectType.TechnicalObjectType = $projection.TechnicalObjectType
  association [0..1] to I_Equipment                 as _Equipment                  on  _Equipment.Equipment = $projection.Equipment
  association [0..1] to I_FunctionalLocation        as _FunctionalLocation         on  _FunctionalLocation.FunctionalLocation = $projection.FunctionalLocation
  association [0..1] to I_FunctionalLocation        as _SuperiorFunctionalLocation on  _SuperiorFunctionalLocation.FunctionalLocation = $projection.SuperiorFunctionalLocation 
  association [0..1] to I_FunctionalLocationLabel   as _FunctionalLocationLabel    on  _FunctionalLocationLabel.FunctionalLocation = $projection.TechnicalObject
  association [0..1] to I_Plant                     as _MaintenancePlanningPlant   on  _MaintenancePlanningPlant.Plant = $projection.MaintenancePlanningPlant
  association [0..1] to I_TechObjIsEquipOrFuncnlLoc as _TechObjIsEquipOrFuncnlLoc  on  _TechObjIsEquipOrFuncnlLoc.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..*] to I_TechnicalObjectText       as _TechnicalObjectText        on  _TechnicalObjectText.TechnicalObject           = $projection.TechnicalObject
                                                                                   and _TechnicalObjectText.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_TechnicalObjectCategory   as _TechnicalObjectCategory    on  $projection.TechnicalObjectCategory                = _TechnicalObjectCategory.TechnicalObjectCategory
                                                                                   and _TechnicalObjectCategory.TechObjIsEquipOrFuncnlLoc = $projection.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_MaintenancePlannerGroup   as _MaintenancePlannerGroup    on  $projection.MaintenancePlannerGroup  = _MaintenancePlannerGroup.MaintenancePlannerGroup
                                                                                   and $projection.MaintenancePlanningPlant = _MaintenancePlannerGroup.MaintenancePlanningPlant
  association [0..1] to I_Country                   as _ManufacturerCountry        on  $projection.ManufacturerCountry = _ManufacturerCountry.Country
  association [0..1] to I_Currency                  as _Currency                   on  $projection.Currency = _Currency.Currency

  association [0..1] to I_Indicator                 as _IsDeleted                  on  $projection.IsDeleted = _IsDeleted.IndicatorValue
 //Begin of Changes by C5335816 for New Field Inactive Status in I_TechnicalObject : 2302 CFD
  association [0..1] to I_Indicator                 as _TechObjStatusIsInactive    on  $projection.TechObjStatusIsInactive = _TechObjStatusIsInactive.IndicatorValue
 //End of Changes by C5335816 for New Field Inactive Status in I_TechnicalObject : 2302 CFD
  association [0..*] to I_StatusObjectActiveStatus  as _StatusObjectActiveStatus   on  $projection.MaintObjectInternalID = _StatusObjectActiveStatus.StatusObject
  association [0..1] to I_TechobjNumberOfSubobjects as _TechobjNumberOfSubobjects  on  $projection.TechnicalObject           = _TechobjNumberOfSubobjects.TechnicalObject
                                                                                   and $projection.TechObjIsEquipOrFuncnlLoc = _TechobjNumberOfSubobjects.TechObjIsEquipOrFuncnlLoc

  association [0..1] to I_TechnicalReport           as _TechnicalObjectCodeCatalog on  $projection.CatalogProfile = _TechnicalObjectCodeCatalog.CatalogProfile


  association [1]    to I_TechnicalObjectHierarchy  as _TechnicalObjectHierarchy   on  $projection.TechnicalObject           = _TechnicalObjectHierarchy.TechnicalObject
                                                                                   and $projection.TechObjIsEquipOrFuncnlLoc = _TechnicalObjectHierarchy.TechObjIsEquipOrFuncnlLoc
  association [0..1] to I_Material                   as _ConstructionMaterial      on  $projection.ConstructionMaterial = _ConstructionMaterial.Material  

  association [0..1] to I_TechObjCustWrntyAssgmt as _CustWrntyObjAssgmt          on _CustWrntyObjAssgmt.ObjectInternalID = $projection.MaintObjectInternalID
 
  association [0..1] to I_TechObjVndrWrntyAssgmt as _VndrWrntyObjAssgmt          on _VndrWrntyObjAssgmt.ObjectInternalID = $projection.MaintObjectInternalID                                                                                

  association [0..1] to I_FunctionalLocationLabel   as _SuperFunctionalLocationLabel  on  P_EquipmentFuncnlLocUnion.SuperiorFunctionalLocation = _SuperFunctionalLocationLabel.FunctionalLocation

  -- Extensions, do not expose as association:
  association [0..1] to E_FunctionalLocation        as _FunctionalLocationExtension  on  _FunctionalLocationExtension.FunctionalLocation = $projection.FunctionalLocation
  association [0..1] to E_Equipment                 as _EquipmentExtension           on  _EquipmentExtension.Equipment = $projection.Equipment
  
  
  association[0..1] to I_MaintenancePlanPlant        as _MaintenancePlanPlant       on $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant
  
  association [0..1] to I_SalesOrganization         as _SalesOrganization          on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  
  association [0..1] to I_UnitOfMeasure             as _GrossWeightUnit            on  $projection.GrossWeightUnit = _GrossWeightUnit.UnitOfMeasure 
{

      @ObjectModel.text.element: ['TechnicalObjectDescription']
      @Semantics.text:true
      
  key P_EquipmentFuncnlLocUnion.TechnicalObject,

      @ObjectModel.foreignKey.association: '_TechObjIsEquipOrFuncnlLoc'
      @UI.textArrangement: #TEXT_ONLY
      @Environment.sql.passValue: true
  key P_EquipmentFuncnlLocUnion.TechObjIsEquipOrFuncnlLoc, 

@Semantics.text:true

      // External representation of Technical Object id
     cast( case when P_EquipmentFuncnlLocUnion.TechObjIsEquipOrFuncnlLoc = 'EAMS_FL' then // Functional Location
                 _FunctionalLocationLabel.FunctionalLocationLabelName
            else P_EquipmentFuncnlLocUnion.TechnicalObject end as eams_tech_obj_conv )                                                  as TechnicalObjectLabel,

      --SuperiorObjIsEquipOrFuncnlLoc,
       cast( case when SuperordinateEquipment <> '' then 'EAMS_EQUI'
           when SuperiorFunctionalLocation <> '' then 'EAMS_FL' end  as eams_tec_obj_type_value )                     as SuperiorObjIsEquipOrFuncnlLoc,
      SuperiorTechnicalObject,

      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_EquipmentCategoryStdVH',
                     element: 'TechnicalObjectCategory' },
          additionalBinding: [{ localElement: 'TechObjIsEquipOrFuncnlLoc',
                                element: 'TechObjIsEquipOrFuncnlLoc' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_TechnicalObjectCategory'
      P_EquipmentFuncnlLocUnion.TechnicalObjectCategory,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_EquipmentStdVH',
                     element: 'Equipment' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_Equipment'
      P_EquipmentFuncnlLocUnion.Equipment,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_FunctionalLocationStdVH',
                     element: 'FunctionalLocation' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      P_EquipmentFuncnlLocUnion.FunctionalLocation,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_TechnicalObjectTypeStdVH',
                     element: 'TechnicalObjectType' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_TechnicalObjectType'
      P_EquipmentFuncnlLocUnion.TechnicalObjectType,


      // Admin data
      @Semantics.user.createdBy: true
      P_EquipmentFuncnlLocUnion.CreatedByUser,
      @Semantics.systemDate.createdAt : true
      P_EquipmentFuncnlLocUnion.CreationDate,
      @Semantics.user.lastChangedBy: true
      P_EquipmentFuncnlLocUnion.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      P_EquipmentFuncnlLocUnion.LastChangeDate,

      P_EquipmentFuncnlLocUnion.AssetManufacturerName,
      P_EquipmentFuncnlLocUnion.ManufacturerPartTypeName,
      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      P_EquipmentFuncnlLocUnion.MaintenancePlanningPlant,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_MaintPlnrGrpStdVH',
                     element: 'MaintenancePlannerGroup' },
          additionalBinding: [{ localElement: 'MaintenancePlanningPlant',
                                element: 'MaintenancePlanningPlant' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      P_EquipmentFuncnlLocUnion.MaintenancePlannerGroup,
      @ObjectModel.foreignKey.association: '_TechnicalObjectCodeCatalog'
      P_EquipmentFuncnlLocUnion.CatalogProfile,
      P_EquipmentFuncnlLocUnion.AuthorizationGroup,
      @ObjectModel.foreignKey.association: '_WorkCenter'
      @UI.hidden: true
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WorkCenterStdVH',
                     element: 'WorkCenterInternalID' },
          additionalBinding: [{ localElement: 'WorkCenterTypeCode',
                                element: 'WorkCenterTypeCode' }]
        }]
      P_EquipmentFuncnlLocUnion.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      @UI.hidden: true
      P_EquipmentFuncnlLocUnion.WorkCenterTypeCode,
      @ObjectModel.foreignKey.association: '_LocationAccountAssignment'
      @UI.hidden: true
      P_EquipmentFuncnlLocUnion.MaintObjectLocAcctAssgmtNmbr,

      @Semantics.address.country: true
      @ObjectModel.foreignKey.association: '_ManufacturerCountry'
      P_EquipmentFuncnlLocUnion.ManufacturerCountry,
      P_EquipmentFuncnlLocUnion.ConstructionYear,
      P_EquipmentFuncnlLocUnion.ConstructionMonth,
      //--[ GENERATED:012:GFBfhxvv7kY4nKFWHa7fa0
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
//        @Consumption.valueHelpDefinition: [ 
//        { entity:  { name:    'I_MaterialStdVH',
//                     element: 'Material' }
//        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ConstructionMaterial'
      P_EquipmentFuncnlLocUnion.ConstructionMaterial,
      P_EquipmentFuncnlLocUnion.AcquisitionDate,
      @Semantics.currencyCode:true
      P_EquipmentFuncnlLocUnion.Currency,
      @Semantics.amount.currencyCode: 'Currency'
      P_EquipmentFuncnlLocUnion.AcquisitionValue,

      P_EquipmentFuncnlLocUnion.TechnicalObjectSortCode,

      @UI.hidden: true
      P_EquipmentFuncnlLocUnion.MaintObjectInternalID,

      P_EquipmentFuncnlLocUnion.SizeOrDimensionText,
      P_EquipmentFuncnlLocUnion.InventoryNumber,
      @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
      P_EquipmentFuncnlLocUnion.GrossWeight,
      
      @ObjectModel.foreignKey.association: '_GrossWeightUnit'
      @Semantics.unitOfMeasure: true
      P_EquipmentFuncnlLocUnion.GrossWeightUnit,
      P_EquipmentFuncnlLocUnion.ManufacturerPartNmbr,
      P_EquipmentFuncnlLocUnion.ManufacturerSerialNumber,

      P_EquipmentFuncnlLocUnion.OperationStartDate,
      @UI.hidden: true
      P_EquipmentFuncnlLocUnion.FuncLocStrucIdentifyingLevel,
      @UI.hidden: true
      P_EquipmentFuncnlLocUnion.FuncLocStruc2ndIdentifyingLvl,
      P_EquipmentFuncnlLocUnion.FuncLocationStructure,
      
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FunctionalLocationStdVH',
                     element: 'FunctionalLocation' }
        }]
      @ObjectModel.foreignKey.association: '_SuperiorFunctionalLocation'
      P_EquipmentFuncnlLocUnion.SuperiorFunctionalLocation,

      TechnicalObjectDescription,
      TechnicalObjectHasLongText,
      SuperiorTechnicalObjectName,
      SuperiorTechnicalObjectLabel,

      @ObjectModel.foreignKey.association: '_IsDeleted'
      cast(case when _StatusObjectActiveStatus[1: StatusCode = 'I0076'].StatusCode is not null
                and  _StatusObjectActiveStatus[1: StatusCode = 'I0076'].StatusCode = 'I0076'
           then 'X' else ''
      end as lkenz )                                                                                                                    as IsDeleted,
  
  //Begin of Changes by C5335816 for New Field Inactive Status in I_TechnicalObject : 2302    
        @ObjectModel.foreignKey.association: '_TechObjStatusIsInactive'
      cast(case when _StatusObjectActiveStatus[1: StatusCode = 'I0320'].StatusCode is not null
                and  _StatusObjectActiveStatus[1: StatusCode = 'I0320'].StatusCode = 'I0320'
           then 'X' else ''
      end as eam_inactive )  as TechObjStatusIsInactive,
 //End of Changes by C5335816 for New Field Inactive Status in I_TechnicalObject : 2302 
 
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      P_EquipmentFuncnlLocUnion.SalesOrganization,
      P_EquipmentFuncnlLocUnion.DistributionChannel,
      P_EquipmentFuncnlLocUnion.SalesOffice,
      P_EquipmentFuncnlLocUnion.OrganizationDivision,
      P_EquipmentFuncnlLocUnion.SalesGroup,
      P_EquipmentFuncnlLocUnion.Material,
      P_EquipmentFuncnlLocUnion.SerialNumber,


      _CreatedByUser,
      _LastChangedByUser,
      _WorkCenterType,
      _WorkCenter, // Main Work Center
      _LocationAccountAssignment,
      _TechnicalObjectType,
      _Equipment,
      _FunctionalLocation,
      _MaintenancePlanningPlant,
      _TechObjIsEquipOrFuncnlLoc,
      _TechnicalObjectText,
      _TechnicalObjectCategory,
      _MaintenancePlannerGroup,
      _ManufacturerCountry,
      _Currency,
      _IsDeleted,
      _TechObjStatusIsInactive,                //Added by C5335816 for New Field Inactive Status
      _TechnicalObjectHierarchy,
      _StatusObjectActiveStatus,
      _FunctionalLocationLabel,
      _TechobjNumberOfSubobjects,
      _TechnicalObjectCodeCatalog,
      _ConstructionMaterial,
       _CustWrntyObjAssgmt,
      _VndrWrntyObjAssgmt,
      _SuperFunctionalLocationLabel,
      _MaintenancePlanPlant,
      _SuperiorFunctionalLocation,
      _SalesOrganization,
      _GrossWeightUnit
     
}
```
