---
name: I_FUNCTIONALLOCATION
description: "Functionallocation"
app_component: PM-EQM-FL-2CL
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
  - PM-EQM-FL
  - interface-view
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FUNCTIONALLOCATION

**Functionallocation**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  | `tplnr` |  |  |
| `FunctionalLocationOID` |  | |  | `functionallocationoid` |  |  |
| `FuncLocationStructure` |  | |  | `tplkz` |  |  |
| `FunctionalLocationCategory` |  | |  | `fltyp` |  |  |
| `WorkCenterInternalID` |  | |  | `lgwid` |  |  |
| `WorkCenterTypeCode` |  | |  | `pm_objty` |  |  |
| `TechnicalObjectType` |  | |  | `eqart` |  |  |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  | `iloan` |  |  |
| `ConstructionMaterial` |  | |  | `submt` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `AssetManufacturerName` |  | |  | `herst` |  |  |
| `ManufacturerPartTypeName` |  | |  | `typbz` |  |  |
| `MaintenancePlannerGroup` |  | |  | `ingrp` |  |  |
| `MaintenancePlanningPlant` |  | |  | `iwerk` |  |  |
| `CatalogProfile` |  | |  | `rbnr` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `SuperiorFunctionalLocation` |  | |  | `tplma` |  |  |
| `ManufacturerCountry` |  | |  | `herld` |  |  |
| `ConstructionYear` |  | |  | `baujj` |  |  |
| `ConstructionMonth` |  | |  | `baumm` |  |  |
| `AcquisitionValue` |  | |  | `answt` |  |  |
| `Currency` |  | |  | `waers` |  |  |
| `AcquisitionDate` |  | |  | `ansdt` |  |  |
| `MaintObjectInternalID` |  | |  | `objnr` |  |  |
| `FuncnlLocPosInSuperiorTechObj` |  | |  | `posnr` |  |  |
| `ManufacturerPartNmbr` |  | |  | `mapar` |  |  |
| `ManufacturerSerialNumber` |  | |  | `serge` |  |  |
| `InventoryNumber` |  | |  | `invnr` |  |  |
| `GrossWeight` |  | |  | `brgew` |  |  |
| `GrossWeightUnit` |  | |  | `gewei` |  |  |
| `SizeOrDimensionText` |  | |  | `groes` |  |  |
| `OperationStartDate` |  | |  | `datab` |  |  |
| `LastChangeDateTime` |  | |  | `changeddatetime` |  |  |
| `EquipmentInstallationIsAllowed` |  | |  | `iequi` |  |  |
| `OnePieceOfEquipmentIsAllowed` |  | |  | `einzl` |  |  |
| `FunctionalLocationEndOfUseDate` |  | |  | `endofuse` |  |  |
| `_FunctionalLocationCategory` | | ✓ | | | | |
| `_TechnicalObjectType` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |
| `_FunctionalLocationText` | | ✓ | | | | |
| `_SuperiorFunctionalLocation` | | ✓ | | | | |
| `_SupFunctionalLocationText` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |
| `_MaintenancePlannerGroup` | | ✓ | | | | |
| `_ManufacturerCountry` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_FunctionalLocationCodeCatalog` | | ✓ | | | | |
| `_FuncLocationStructure` | | ✓ | | | | |
| `_FunctionalLocationLabel` | | ✓ | | | | |
| `_ConstructionMaterial` | | ✓ | | | | |
| `_GrossWeightUnit` | | ✓ | | | | |
| `_LinearAssetManagementData` | | ✓ | | | | |
| `_Status` | | ✓ | | | | |
| `_PlantMaintenancePartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FunctionalLocationCategory` | `I_FunctionalLocationCategory` | [0..1] |
| `_TechnicalObjectType` | `I_TechnicalObjectType` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_FunctionalLocationText` | `I_FunctionalLocationText` | [0..*] |
| `_SuperiorFunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_SupFunctionalLocationText` | `I_FunctionalLocationText` | [0..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_LastChangedByUser` | `I_User` | [0..1] |
| `_MaintenancePlanningPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_MaintenancePlannerGroup` | `I_MaintenancePlannerGroup` | [0..1] |
| `_ManufacturerCountry` | `I_Country` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_FunctionalLocationCodeCatalog` | `I_TechnicalReport` | [0..1] |
| `_FuncLocationStructure` | `I_FuncLocationStructure` | [0..1] |
| `_FunctionalLocationLabel` | `I_FunctionalLocationLabel` | [0..1] |
| `_ConstructionMaterial` | `I_Material` | [0..1] |
| `_GrossWeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_LinearAssetManagementData` | `I_LinearAssetManagementData` | [0..1] |
| `_Status` | `I_StatusObjectStatus` | [0..*] |
| `_PlantMaintenancePartner` | `I_PlantMaintenancePartner` | [0..*] |
| `_FunctionalLocationExtension` | `E_FunctionalLocation` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Functional Location'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog: { sqlViewName: 'IFUNCTLLOCATION', compiler.compareFilter, preserveKey }
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'FunctionalLocation'
@ObjectModel.semanticKey:  [ 'FunctionalLocation' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AccessControl.privilegedAssociations:['_CreatedByUser','_LastChangedByUser','_LocationAccountAssignment', '_Status']
@Metadata: { ignorePropagatedAnnotations, allowExtensions }
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION]

define view I_FunctionalLocation
  as select from iflot
  association [0..1] to I_FunctionalLocationCategory as _FunctionalLocationCategory    on  _FunctionalLocationCategory.FunctionalLocationCategory = $projection.FunctionalLocationCategory
  association [0..1] to I_TechnicalObjectType        as _TechnicalObjectType           on  _TechnicalObjectType.TechnicalObjectType = $projection.TechnicalObjectType
  association [0..1] to I_WorkCenterType             as _WorkCenterType                on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                 as _WorkCenter                    on  _WorkCenter.WorkCenterInternalID = $projection.WorkCenterInternalID
                                                                                       and _WorkCenter.WorkCenterTypeCode   = $projection.WorkCenterTypeCode
  association [0..1] to I_LocationAccountAssignment  as _LocationAccountAssignment     on  _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr = $projection.MaintObjectLocAcctAssgmtNmbr
  association [0..*] to I_FunctionalLocationText     as _FunctionalLocationText        on  _FunctionalLocationText.FunctionalLocation = $projection.FunctionalLocation
  association [0..1] to I_FunctionalLocation         as _SuperiorFunctionalLocation    on  _SuperiorFunctionalLocation.FunctionalLocation = $projection.SuperiorFunctionalLocation
  association [0..*] to I_FunctionalLocationText     as _SupFunctionalLocationText     on  _SupFunctionalLocationText.FunctionalLocation = $projection.SuperiorFunctionalLocation
  association [0..1] to I_User                       as _CreatedByUser                 on  _CreatedByUser.UserID = $projection.CreatedByUser
  association [0..1] to I_User                       as _LastChangedByUser             on  _LastChangedByUser.UserID = $projection.LastChangedByUser
  association [0..1] to I_MaintenancePlanPlant       as _MaintenancePlanningPlant      on  _MaintenancePlanningPlant.MaintenancePlanningPlant = $projection.MaintenancePlanningPlant
  association [0..1] to I_MaintenancePlannerGroup    as _MaintenancePlannerGroup       on  $projection.MaintenancePlannerGroup  = _MaintenancePlannerGroup.MaintenancePlannerGroup
                                                                                       and $projection.MaintenancePlanningPlant = _MaintenancePlannerGroup.MaintenancePlanningPlant
  association [0..1] to I_Country                    as _ManufacturerCountry           on  $projection.ManufacturerCountry = _ManufacturerCountry.Country
  association [0..1] to I_Currency                   as _Currency                      on  $projection.Currency = _Currency.Currency
  association [0..1] to I_TechnicalReport            as _FunctionalLocationCodeCatalog on  $projection.CatalogProfile = _FunctionalLocationCodeCatalog.CatalogProfile

  association [0..1] to I_FuncLocationStructure      as _FuncLocationStructure         on  $projection.FuncLocationStructure = _FuncLocationStructure.FuncLocationStructure

  association [0..1] to I_FunctionalLocationLabel    as _FunctionalLocationLabel       on  _FunctionalLocationLabel.FunctionalLocation = $projection.FunctionalLocation
  association [0..1] to I_Material                   as _ConstructionMaterial          on  $projection.ConstructionMaterial = _ConstructionMaterial.Material

  association [0..1] to I_UnitOfMeasure              as _GrossWeightUnit               on  $projection.GrossWeightUnit = _GrossWeightUnit.UnitOfMeasure
  association [0..1] to I_LinearAssetManagementData  as _LinearAssetManagementData     on  $projection.FunctionalLocation                  = _LinearAssetManagementData.LinearDataObjectKey
                                                                                       and _LinearAssetManagementData.LinearDataObjectType = 'IF'
  association [0..*] to I_StatusObjectStatus         as _Status                        on  $projection.MaintObjectInternalID = _Status.StatusObject
  association [0..*] to I_PlantMaintenancePartner    as _PlantMaintenancePartner       on  $projection.MaintObjectInternalID = _PlantMaintenancePartner.MaintObjectInternalID

  -- Extension, do not expose as association:
  association [0..1] to E_FunctionalLocation         as _FunctionalLocationExtension   on  _FunctionalLocationExtension.FunctionalLocation = $projection.FunctionalLocation

{
      @ObjectModel.text.association: '_FunctionalLocationText'
  key iflot.tplnr                 as FunctionalLocation,
      iflot.functionallocationoid as FunctionalLocationOID,
      @ObjectModel.foreignKey.association: '_FuncLocationStructure'
      iflot.tplkz                 as FuncLocationStructure,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FuncnlLocCatStdVH',
                     element: 'FunctionalLocationCategory' }
        }]
      @ObjectModel.foreignKey.association: '_FunctionalLocationCategory'
      iflot.fltyp                 as FunctionalLocationCategory,
      @ObjectModel.foreignKey.association: '_WorkCenter'
      iflot.lgwid                 as WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      iflot.pm_objty              as WorkCenterTypeCode,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_TechnicalObjectTypeStdVH',
                     element: 'TechnicalObjectType' }
        }]
      @ObjectModel.foreignKey.association: '_TechnicalObjectType'
      iflot.eqart                 as TechnicalObjectType,
      @ObjectModel.foreignKey.association: '_LocationAccountAssignment'
      iflot.iloan                 as MaintObjectLocAcctAssgmtNmbr,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaterialStdVH',
                     element: 'Material' }
        }]
      @ObjectModel.foreignKey.association: '_ConstructionMaterial'
      iflot.submt                 as ConstructionMaterial,

      // Admin data
      @Semantics.user.createdBy: true
      iflot.ernam                 as CreatedByUser,
      @Semantics.systemDate.createdAt : true
      iflot.erdat                 as CreationDate,
      @Semantics.user.lastChangedBy: true
      iflot.aenam                 as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      iflot.aedat                 as LastChangeDate,

      iflot.herst                 as AssetManufacturerName,
      iflot.typbz                 as ManufacturerPartTypeName,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MaintPlnrGrpStdVH',
                     element: 'MaintenancePlannerGroup' },
          additionalBinding: [{ localElement: 'MaintenancePlanningPlant',
                                element: 'MaintenancePlanningPlant' }]
        }]
      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      iflot.ingrp                 as MaintenancePlannerGroup,
      @ObjectModel.foreignKey.association: '_MaintenancePlanningPlant'
      iflot.iwerk                 as MaintenancePlanningPlant,
      @ObjectModel.foreignKey.association: '_FunctionalLocationCodeCatalog'
      iflot.rbnr                  as CatalogProfile,
      iflot.begru                 as AuthorizationGroup,
      @ObjectModel.text.association: '_SupFunctionalLocationText'
      iflot.tplma                 as SuperiorFunctionalLocation,

      @ObjectModel.foreignKey.association: '_ManufacturerCountry'
      iflot.herld                 as ManufacturerCountry,
      iflot.baujj                 as ConstructionYear,
      iflot.baumm                 as ConstructionMonth,
      @Semantics.amount.currencyCode: 'Currency'
      iflot.answt                 as AcquisitionValue,
      @Semantics.currencyCode: true
      iflot.waers                 as Currency,
      iflot.ansdt                 as AcquisitionDate,
      iflot.objnr                 as MaintObjectInternalID,
      iflot.posnr                 as FuncnlLocPosInSuperiorTechObj,
      iflot.mapar                 as ManufacturerPartNmbr,
      iflot.serge                 as ManufacturerSerialNumber,
      iflot.invnr                 as InventoryNumber,

      @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
      iflot.brgew                 as GrossWeight,

      @ObjectModel.foreignKey.association: '_GrossWeightUnit'
      @Semantics.unitOfMeasure: true
      iflot.gewei                 as GrossWeightUnit,
      iflot.groes                 as SizeOrDimensionText,

      iflot.datab                 as OperationStartDate,

      @Semantics.systemDateTime.lastChangedAt: true
      iflot.changeddatetime       as LastChangeDateTime,

      iflot.iequi                 as EquipmentInstallationIsAllowed,

      iflot.einzl                 as OnePieceOfEquipmentIsAllowed,
      iflot.endofuse              as FunctionalLocationEndOfUseDate,


      // Propagate association
      _LastChangedByUser,
      _CreatedByUser,
      _FunctionalLocationText,
      _FunctionalLocationCategory,
      _SuperiorFunctionalLocation,
      _SupFunctionalLocationText,
      _WorkCenterType,
      _WorkCenter,
      _TechnicalObjectType,
      _LocationAccountAssignment,
      _MaintenancePlanningPlant,
      _MaintenancePlannerGroup,
      _ManufacturerCountry,
      _Currency,
      _FunctionalLocationCodeCatalog,
      _FuncLocationStructure,
      _FunctionalLocationLabel,
      _ConstructionMaterial,
      _GrossWeightUnit,
      _LinearAssetManagementData,
      _Status,
      _PlantMaintenancePartner
}
```
