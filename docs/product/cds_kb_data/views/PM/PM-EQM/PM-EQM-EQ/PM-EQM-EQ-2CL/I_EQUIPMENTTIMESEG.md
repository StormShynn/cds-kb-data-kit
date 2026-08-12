---
name: I_EQUIPMENTTIMESEG
description: "Equipment Time Segment"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value
semantic_en: "Equipment Time Segment"
semantic_vi: "Equipment Time Segment — CDS view giao diện dựa trên equz."
keywords:
  - "equipment"
  - "time"
  - "segment"
  - "validity"
  - "date"
  - "equip"
  - "usage"
  - "period"
  - "sequence"
  - "number"
  - "next"
  - "sqnc"
  - "nmbr"
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - interface-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
---
# I_EQUIPMENTTIMESEG

**Equipment Time Segment**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | |  | `equnr` | `CHAR(18)` | Equipment Number |
| `ValidityEndDate` | ✓ | |  | `datbi` | `DATS(8)` | Valid To Date |
| `EquipUsagePeriodSequenceNumber` | ✓ | |  | `eqlfn` | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ValidityEndTime` |  | |  | `timbi` | `TIMS(6)` | Equipment usage period time stamp |
| `NextEquipUsagePeriodSqncNmbr` |  | |  | `equzn` | `NUMC(3)` | Number of next EquipUsagePeriod on same day |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  | `iloan` | `CHAR(12)` | Location and account assignment for technical object |
| `WorkCenterInternalID` |  | |  | `gewrk` | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterTypeCode` |  | |  | `pm_objty` | `CHAR(2)` | Object Type of CIM Resources for Work Center |
| `MaintenancePlannerGroup` |  | |  | `ingrp` | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `CatalogProfile` |  | |  | `rbnr` | `CHAR(9)` | Catalog Profile |
| `MaintenancePlanningPlant` |  | |  | `iwerk` | `CHAR(4)` | Maintenance Planning Plant |
| `SuperordinateEquipment` |  | |  | `hequi` | `CHAR(18)` | Superordinate Equipment |
| `EquipInstallationPositionNmbr` |  | |  | `heqnr` | `CHAR(4)` | Equipment position at InstallLoc (Superior Equip./FunctLoc) |
| `TechnicalObjectSortCode` |  | |  | `tidnr` | `CHAR(25)` | Technical identification number |
| `ConstructionMaterial` |  | |  | `submt` | `CHAR(40)` | Construction type material of the object |
| `ValidityStartDate` |  | |  | `datab` | `DATS(8)` | Valid-From Date |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `ManufacturerPartNmbr` |  | |  | `mapar` | `CHAR(30)` | Manufacturer part number |
| `LastChangeDateTime` |  | |  | `segchangeddatetime` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `_LocationAccountAssignment` | | ✓ | | | | |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_SuperordinateEquipmentText` | | ✓ | | | | |
| `_EquipmentCodeCatalog` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_ConstructionMaterial` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LocationAccountAssignment` | `I_LocationAccountAssignment` | [0..1] |
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_SuperordinateEquipmentText` | `I_EquipmentText` | [0..*] |
| `_EquipmentCodeCatalog` | `I_TechnicalReport` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_ConstructionMaterial` | `I_Product` | [0..1] |
| `_MaintenancePlanningPlant` | `I_MaintenancePlanPlant` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EQUIPMENTTIMESEG')/$value)*

```abap
@EndUserText.label: 'Equipment Time Segment'
@Analytics: { dataCategory: #DIMENSION }
@AbapCatalog:{ sqlViewName: 'IEQUITIMESEGM', compiler.compareFilter: true, preserveKey }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#CHECK
@AccessControl.privilegedAssociations:['_LocationAccountAssignment']
@ObjectModel.representativeKey: 'EquipUsagePeriodSequenceNumber'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]

define view I_EquipmentTimeSeg
  as select from equz // EQUZ = Equipment time segment
  association [0..1] to I_LocationAccountAssignment as _LocationAccountAssignment  on  _LocationAccountAssignment.MaintObjectLocAcctAssgmtNmbr = $projection.MaintObjectLocAcctAssgmtNmbr // ILOA = PM Object Location and Account Assignment
  association [0..1] to I_WorkCenterType            as _WorkCenterType             on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter                as _WorkCenter                 on  _WorkCenter.WorkCenterInternalID = $projection.WorkCenterInternalID
                                                                                   and _WorkCenter.WorkCenterTypeCode   = $projection.WorkCenterTypeCode // CRHD = Work Center Header
  association [0..*] to I_EquipmentText             as _SuperordinateEquipmentText on  _SuperordinateEquipmentText.Equipment = $projection.SuperordinateEquipment
  association [0..1] to I_TechnicalReport           as _EquipmentCodeCatalog       on  $projection.CatalogProfile = _EquipmentCodeCatalog.CatalogProfile

  association [0..1] to I_Equipment                 as _Equipment                  on  $projection.Equipment = _Equipment.Equipment
  association [0..1] to I_Product                   as _ConstructionMaterial       on  $projection.ConstructionMaterial = _ConstructionMaterial.Product
  association [0..1] to I_MaintenancePlanPlant      as _MaintenancePlanningPlant   on  $projection.MaintenancePlanningPlant = _MaintenancePlanningPlant.MaintenancePlanningPlant
{
      @ObjectModel.foreignKey.association: '_Equipment'
  key equz.equnr              as Equipment,

      @Semantics.businessDate.to: true
  key equz.datbi              as ValidityEndDate,

  key equz.eqlfn              as EquipUsagePeriodSequenceNumber,

      equz.timbi              as ValidityEndTime,
      equz.equzn              as NextEquipUsagePeriodSqncNmbr,

      @ObjectModel.foreignKey.association: '_LocationAccountAssignment'
      equz.iloan              as MaintObjectLocAcctAssgmtNmbr,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_WorkCenterStdVH',
                     element: 'WorkCenterInternalID' },
          additionalBinding: [{ localElement: 'WorkCenterTypeCode',
                                element: 'WorkCenterTypeCode' }]
        }]
      @ObjectModel.foreignKey.association: '_WorkCenter'
      equz.gewrk              as WorkCenterInternalID,

      @ObjectModel.foreignKey.association: '_WorkCenterType'
      equz.pm_objty           as WorkCenterTypeCode,


      equz.ingrp              as MaintenancePlannerGroup,
      equz.rbnr               as CatalogProfile,
      @ObjectModel.foreignKey.association: '_MaintenancePlanningPlant'
      equz.iwerk              as MaintenancePlanningPlant,
      equz.hequi              as SuperordinateEquipment,
      equz.heqnr              as EquipInstallationPositionNmbr,
      equz.tidnr              as TechnicalObjectSortCode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProductStdVH',
                     element: 'Product' }
        }]
      @ObjectModel.foreignKey.association: '_ConstructionMaterial'
      equz.submt              as ConstructionMaterial,


      @Semantics.businessDate.from: true
      equz.datab              as ValidityStartDate,
      @Semantics.systemDate.lastChangedAt: true
      equz.aedat              as LastChangeDate,

      equz.mapar              as ManufacturerPartNmbr,

      @Semantics.systemDateTime.lastChangedAt: true
      equz.segchangeddatetime as LastChangeDateTime,

      //Propagate associations
      _LocationAccountAssignment,
      _WorkCenterType,
      _WorkCenter,
      _SuperordinateEquipmentText,
      _EquipmentCodeCatalog,
      _Equipment,
      _ConstructionMaterial,
      _MaintenancePlanningPlant
}
```
