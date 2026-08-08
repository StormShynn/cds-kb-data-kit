---
name: C_EQUIPMENTDATADEX
description: "Equipment DEX"
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTDATADEX')/$value
semantic_en: "Equipment DEX"
semantic_vi: "Equipment DEX — CDS view tiêu dùng dựa trên I_EquipmentTimeSeg."
keywords:
  - "equipment"
  - "dex"
  - "validity"
  - "date"
  - "equip"
  - "usage"
  - "period"
  - "sequence"
  - "number"
  - "indicator"
  - "acquisition"
  - "value"
tags:
  - PM
  - component:PM-EQM-EQ-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-EQ
  - PM-EQM-EQ-2CL
---
# C_EQUIPMENTDATADEX

**Equipment DEX**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTDATADEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Equipment` | ✓ | |  |  | `CHAR(18)` | Equipment Number |
| `ValidityEndDate` | ✓ | |  |  | `DATS(8)` | Valid To Date |
| `EquipUsagePeriodSequenceNumber` | ✓ | |  |  | `NUMC(3)` | Consecutive numbering of EquipUsagePeriods on same day |
| `ABCIndicator` |  | |  |  | `CHAR(1)` | ABC Indicator for Technical Object |
| `AcquisitionValue` |  | |  |  | `CURR(13)` | Acquisition Value |
| `AddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `MasterFixedAsset` |  | |  |  | `CHAR(12)` | Main Asset Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OperationStartDate` |  | |  |  | `DATS(8)` | Start-up Date of the Technical Object |
| `TechnicalObjectType` |  | |  |  | `CHAR(10)` | Type of Technical Object |
| `FunctionalLocation` |  | |  | `cast( I_EquipmentTimeSeg._LocationAccountAssignment.FunctionalLocation as ps_s4_tplnr preserving type )` | `CHAR(30)` | Functional Location |
| `InventoryNumber` |  | |  |  | `CHAR(25)` | Inventory number |
| `AssetLocation` |  | |  |  | `CHAR(10)` | Location of maintenance object |
| `MaintenancePlant` |  | |  |  | `CHAR(4)` | Maintenance Plant |
| `AssetRoom` |  | |  |  | `CHAR(8)` | Room |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `PlantSection` |  | |  |  | `CHAR(3)` | Plant Section |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `EquipmentCategory` |  | |  |  | `CHAR(1)` | Equipment category |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `MainWorkCenterInternalID` |  | |  | `WorkCenterInternalID` | `NUMC(8)` | Object ID of the Work Center |
| `MainWorkCenter` |  | |  | `cast( I_EquipmentTimeSeg._WorkCenter.WorkCenter as gewrk preserving type )` | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` |  | |  | `cast( I_EquipmentTimeSeg._WorkCenter.Plant as wergw preserving type )` | `CHAR(4)` | Plant associated with main work center |
| `SettlementOrder` |  | |  |  | `CHAR(12)` | Settlement order |
| `WorkCenterInternalID` |  | |  |  | `NUMC(8)` | Object ID of PP work center |
| `WorkCenter` |  | |  |  | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | |  | `Plant` | `CHAR(4)` | Plant |
| `LastChangeDateTime` |  | |  | `case when I_EquipmentTimeSeg.ValidityEndDate = '99991231' then I_Equipment.LastChangeDateTime else I_EquipmentTimeSeg.LastChangeDateTime end` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EquipmentIsMarkedForDeletion` |  | |  | `cast( case when I_Equipment._Status[ exact one to one : StatusCode = 'I0076' and StatusIsInactive = '' ].StatusCode is not null then 'X' else ' ' end as eam_is_deleted preserving type )` | `CHAR(1)` | Object is deleted |
| `NextEquipUsagePeriodSqncNmbr` |  | |  |  | `NUMC(3)` | Number of next EquipUsagePeriod on same day |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `WorkCenterTypeCode` |  | |  |  | `CHAR(2)` | Object Type of CIM Resources for Work Center |
| `CatalogProfile` |  | |  |  | `CHAR(9)` | Catalog Profile |
| `SuperordinateEquipment` |  | |  |  | `CHAR(18)` | Superordinate Equipment |
| `TechnicalObjectSortCode` |  | |  |  | `CHAR(25)` | Technical identification number |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndTime` |  | |  |  | `TIMS(6)` | Equipment usage period time stamp |
| `EquipmentManufacturerPrtNmbr` |  | |  | `ManufacturerPartNmbr` | `CHAR(30)` | Manufacturer part number |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `AssetManufacturerName` |  | |  |  | `CHAR(30)` | Manufacturer of Asset |
| `ManufacturerPartTypeName` |  | |  |  | `CHAR(20)` | Manufacturer model number |
| `ManufacturerCountry` |  | |  |  | `CHAR(3)` | Country/Region of Manufacture |
| `ConstructionYear` |  | |  |  | `CHAR(4)` | Year of construction |
| `ConstructionMonth` |  | |  |  | `CHAR(2)` | Month of construction |
| `AcquisitionDate` |  | |  |  | `DATS(8)` | Acquisition date |
| `MaintObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `SerialNumber` |  | |  |  | `CHAR(18)` | Serial Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer to Whom Serial Number was Delivered |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `GrossWeight` |  | |  |  | `QUAN(13)` | Weight of object |
| `GrossWeightUnit` |  | |  |  | `UNIT(3)` | Unit of weight |
| `SizeOrDimensionText` |  | |  |  | `CHAR(18)` | Size/dimension |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Vendor number |
| `EquipmentEndOfUseDate` |  | |  |  | `DATS(8)` | End-of-Use Date of the Technical Object |
| `MaintObjectFreeDefinedAttrib` |  | |  |  | `CHAR(30)` | Sort Field |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `WBSElementInternalID` |  | |  | `cast( I_EquipmentTimeSeg._LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `FixedAsset` |  | |  |  | `CHAR(4)` | Asset Subnumber |
| `LinearDataStartPoint` |  | |  | `cast( cast( I_Equipment._LinearAssetManagementData.LinearDataStartPoint as abap.dec(11, 3) ) as eaml_start_point )` | `CHAR(18)` | Start Point |
| `LinearDataEndPoint` |  | |  | `cast( cast( I_Equipment._LinearAssetManagementData.LinearDataEndPoint as abap.dec(11, 3) ) as eaml_end_point )` | `CHAR(18)` | End Point |
| `LinearDataLength` |  | |  | `cast( I_Equipment._LinearAssetManagementData.LinearDataLength as eaml_linear_length_si )` | `FLTP(16)` | Length in SI Unit |
| `LinearDataUnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measurement for Linear Data |
| `_MainWorkCenter` |  | |  | `_WorkCenter` |  |  |
| `_MainWorkCenterPlant` |  | |  | `_Plant` |  |  |
| `_MainWorkCenterBySemanticKey` | | ✓ | | | | |
| `_WorkCenterBySemanticKey` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_WorkCenterPlant` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_EquipmentIsMarkedForDeletion` | | ✓ | | | | |
| `_EquipmentHierarchyNode` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_EquipmentText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MainWorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_WorkCenterPlant` | `I_Plant` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocationData` | [0..1] |
| `_EquipmentIsMarkedForDeletion` | `I_Indicator` | [0..1] |
| `_EquipmentHierarchyNode` | `I_EquipmentHierarchyNode` | [0..*] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_EquipmentText` | `I_EquipmentText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTDATADEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_EQUIPMENTDATADEX')/$value)*

```abap
@EndUserText.label: 'Equipment DEX'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #REQUIRED,
    privilegedAssociations: ['_Location',
                             '_EquipmentHierarchyNode',
                             '_LOCATIONACCOUNTASSIGNMENT' ]
    }
@ObjectModel: {
    supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ],
//    modelingPattern: #ANALYTICAL_DIMENSION,
    modelingPattern: #ANALYTICAL_FACT,
//    representativeKey: 'Equipment',
    sapObjectNodeType.name: 'Equipment',
    usageType: {
       dataClass: #MIXED,
       serviceQuality: #C,
       sizeCategory: #XL
       }
    }
@Analytics: {
   internalName:#LOCAL,
//   dataCategory: #DIMENSION,
   dataCategory: #FACT,
   dataExtraction: {
     enabled: true,
     delta.changeDataCapture: {
        mapping:[
          { table: 'equz', role: #MAIN,
            viewElement:  ['Equipment', 'ValidityEndDate', 'EquipUsagePeriodSequenceNumber'],
            tableElement: ['equnr', 'datbi', 'eqlfn']
          },
          { table: 'iloa', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement:  ['MaintObjectLocAcctAssgmtNmbr'],
            tableElement: ['iloan']
          },
          { table: 'equi', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement:  ['Equipment'],
            tableElement: ['equnr']
          },
          { table: 'jest', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement:  ['MaintObjectInternalID'],
            tableElement: ['objnr'],
            filter: [{ operator: #EQ, tableElement: 'STAT', value: 'I0076' }]
          }
        ]
      }
   }
}
@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true }
define view entity C_EquipmentDataDEX
  as select from I_EquipmentTimeSeg
    inner join   I_Equipment on I_Equipment.Equipment = I_EquipmentTimeSeg.Equipment
  association [0..1] to I_WorkCenterBySemanticKey as _MainWorkCenterBySemanticKey  on  $projection.MainWorkCenter      = _MainWorkCenterBySemanticKey.WorkCenter
                                                                                   and $projection.MainWorkCenterPlant = _MainWorkCenterBySemanticKey.Plant
  association [0..1] to I_WorkCenterBySemanticKey as _WorkCenterBySemanticKey      on  $projection.workcenter      = _WorkCenterBySemanticKey.WorkCenter
                                                                                   and $projection.WorkCenterPlant = _WorkCenterBySemanticKey.Plant
  association [0..1] to I_WorkCenter              as _WorkCenter                   on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                   and _WorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_Plant                   as _WorkCenterPlant              on  $projection.WorkCenterPlant = _WorkCenterPlant.Plant
  association [0..1] to I_FunctionalLocationData  as _FunctionalLocation           on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_Indicator               as _EquipmentIsMarkedForDeletion on  $projection.EquipmentIsMarkedForDeletion = _EquipmentIsMarkedForDeletion.IndicatorValue
  association [0..*] to I_EquipmentHierarchyNode  as _EquipmentHierarchyNode       on  $projection.Equipment = _EquipmentHierarchyNode.Equipment
  association [0..1] to I_WBSElementBasicData     as _WBSElementBasicData          on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..*] to I_EquipmentText           as _EquipmentText                on  $projection.Equipment = _EquipmentText.Equipment
  -- Extensions, do not expose as association:
  //  association [0..1] to E_Equipment               as _EquipmentExtension           on  _EquipmentExtension.Equipment = $projection.Equipment
{
      /* start suppress warning shlporigin_not_inherited */
      @ObjectModel.text.association: '_EquipmentText'
      @ObjectModel.hierarchy.association: '_EquipmentHierarchyNode'
      //      @Search.defaultSearchElement: true
      //      @Consumption.valueHelp: 'Equipment'
  key I_EquipmentTimeSeg.Equipment,
      @Semantics.businessDate.to: true
  key I_EquipmentTimeSeg.ValidityEndDate,
  key I_EquipmentTimeSeg.EquipUsagePeriodSequenceNumber,

      /* Fields, as they appear in InfoObject 0EQUIPMENT */
      //      @ObjectModel.foreignKey.association: '_ABCIndicator'
      I_EquipmentTimeSeg._LocationAccountAssignment.ABCIndicator,
      @Semantics.amount.currencyCode: 'Currency'
      I_Equipment.AcquisitionValue,
      //      @ObjectModel.foreignKey.association: '_Address'
      //      @ObjectModel.foreignKey.association: '_Address2' //2302 CE - Consider I_Address_2
      I_EquipmentTimeSeg._LocationAccountAssignment.AddressID,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      I_EquipmentTimeSeg._LocationAccountAssignment.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      I_EquipmentTimeSeg._LocationAccountAssignment.CompanyCode,
      @ObjectModel.foreignKey.association: '_CostCenter'
      I_EquipmentTimeSeg._LocationAccountAssignment.CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      I_EquipmentTimeSeg._LocationAccountAssignment.ControllingArea,
      //      @Semantics.currencyCode:true
      I_Equipment.Currency,
      I_Equipment.OperationStartDate,
      @ObjectModel.foreignKey.association: '_TechnicalObjectType'
      I_Equipment.TechnicalObjectType,
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      cast( I_EquipmentTimeSeg._LocationAccountAssignment.FunctionalLocation  as ps_s4_tplnr preserving type )           as FunctionalLocation,
      I_Equipment.InventoryNumber,
      @ObjectModel.foreignKey.association: '_Location'
      I_EquipmentTimeSeg._LocationAccountAssignment.AssetLocation,
      @ObjectModel.foreignKey.association: '_MaintenancePlant'
      I_EquipmentTimeSeg._LocationAccountAssignment.MaintenancePlant,
      I_EquipmentTimeSeg._LocationAccountAssignment.AssetRoom,
      @ObjectModel.foreignKey.association: '_Material'
      I_Equipment.Material,
      @ObjectModel.foreignKey.association: '_MaintenancePlanningPlant'
      I_EquipmentTimeSeg.MaintenancePlanningPlant,
      @ObjectModel.foreignKey.association: '_PlantSection'
      I_EquipmentTimeSeg._LocationAccountAssignment.PlantSection,
      I_EquipmentTimeSeg.MaintenancePlannerGroup,
      @EndUserText: { label: 'WBS Element External ID', quickInfo: 'WBS Element External ID' }
//      cast( I_EquipmentTimeSeg._LocationAccountAssignment._WBSElementBasicData.WBSElement as ps_s4_posid )               as WBSElement,      
      I_EquipmentTimeSeg._LocationAccountAssignment._WBSElementBasicData.WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_EquipmentCategory'
      I_Equipment.EquipmentCategory,
      @Semantics.systemDate.createdAt: true
      I_Equipment.CreationDate,
      @ObjectModel.foreignKey.association: '_Plant'
      I_Equipment.Plant,
      @ObjectModel.foreignKey.association: '_MainWorkCenter'
      @EndUserText: { label: 'Internal ID of Main Work Center', quickInfo: 'Internal ID of Main Work Center' }
      I_EquipmentTimeSeg.WorkCenterInternalID                                                                            as MainWorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_MainWorkCenterBySemanticKey'
      cast( I_EquipmentTimeSeg._WorkCenter.WorkCenter as gewrk preserving type )                                         as MainWorkCenter,
      @ObjectModel.foreignKey.association: '_MainWorkCenterPlant'
      cast( I_EquipmentTimeSeg._WorkCenter.Plant as wergw preserving type )                                              as MainWorkCenterPlant,
      @ObjectModel.foreignKey.association: '_SettlementOrder'
      I_EquipmentTimeSeg._LocationAccountAssignment.SettlementOrder,
      @ObjectModel.foreignKey.association: '_WorkCenter'
      I_EquipmentTimeSeg._LocationAccountAssignment.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterBySemanticKey'
      I_EquipmentTimeSeg._LocationAccountAssignment._WorkCenter.WorkCenter,
      @ObjectModel.foreignKey.association: '_WorkCenterPlant'
      @EndUserText: { label: 'Plant of Work Center', quickInfo: 'Plant of Work Center' }
      I_EquipmentTimeSeg._LocationAccountAssignment._WorkCenter.Plant                                                    as WorkCenterPlant,

      /* Additional fields */
      /* If record is latest record (today's), then the timestamp comes from equipment.
         This is because timestamp on equipment catches changes done to EQUI AND EQUZ. Example: AcquisitionValue changed
         If record is an old record (i.e. its validity end date is not in the future), then that time segments timestamp is used.
         This will also prevent any later changes of EQUI to be detected by ODP extractor. However this was discussed to be intended. */
      @Semantics.systemDateTime.lastChangedAt: true
      case when I_EquipmentTimeSeg.ValidityEndDate = '99991231'
           then I_Equipment.LastChangeDateTime
           else I_EquipmentTimeSeg.LastChangeDateTime end                                                                as LastChangeDateTime,

      @ObjectModel.foreignKey.association: '_EquipmentIsMarkedForDeletion'
      @Semantics.booleanIndicator: true
      cast( case when I_Equipment._Status[ exact one to one : StatusCode = 'I0076' and StatusIsInactive = '' ].StatusCode is not null
                  then 'X'
                 else ' '
            end as eam_is_deleted preserving type )                                                                      as EquipmentIsMarkedForDeletion,

      //I_EquipmentTimeSeg
      I_EquipmentTimeSeg.NextEquipUsagePeriodSqncNmbr,
      I_EquipmentTimeSeg.MaintObjectLocAcctAssgmtNmbr,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      @EndUserText: { label: 'Type Code of Work Center', quickInfo: 'Type Code of Work Center' }
      I_EquipmentTimeSeg.WorkCenterTypeCode,
      I_EquipmentTimeSeg.CatalogProfile,
      I_EquipmentTimeSeg.SuperordinateEquipment,
      I_EquipmentTimeSeg.TechnicalObjectSortCode,
      @ObjectModel.foreignKey.association: '_ConstructionMaterial'
      I_EquipmentTimeSeg.ConstructionMaterial,
      @Semantics.businessDate.from: true
      I_EquipmentTimeSeg.ValidityStartDate,
      I_EquipmentTimeSeg.ValidityEndTime,
      I_EquipmentTimeSeg.ManufacturerPartNmbr                                                                            as EquipmentManufacturerPrtNmbr,

      //I_Equipment
      @ObjectModel.foreignKey.association: '_Division'
      I_Equipment.Division,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      I_Equipment.StorageLocation,
      I_Equipment.AssetManufacturerName,
      I_Equipment.ManufacturerPartTypeName,
      @Semantics.address.country: true
      @ObjectModel.foreignKey.association: '_ManufacturerCountry'
      I_Equipment.ManufacturerCountry,
      I_Equipment.ConstructionYear,
      I_Equipment.ConstructionMonth,
      I_Equipment.AcquisitionDate,
      I_Equipment.MaintObjectInternalID,
      I_Equipment.SerialNumber,
      @ObjectModel.foreignKey.association: '_Customer'
      I_Equipment.Customer,
      I_Equipment.AuthorizationGroup,
      @Semantics.quantity.unitOfMeasure: 'GrossWeightUnit'
      I_Equipment.GrossWeight,
      @ObjectModel.foreignKey.association: '_GrossWeightUnit'
      //      @Semantics.unitOfMeasure: true
      I_Equipment.GrossWeightUnit,
      I_Equipment.SizeOrDimensionText,
      I_Equipment.Batch,
      @ObjectModel.foreignKey.association: '_Supplier'
      I_Equipment.Supplier,
      //Adding EndOfUseDate field - 2308
      I_Equipment.EquipmentEndOfUseDate,

      //I_LocationAccountAssignment
      I_EquipmentTimeSeg._LocationAccountAssignment.MaintObjectFreeDefinedAttrib,
      I_EquipmentTimeSeg._LocationAccountAssignment.BusinessArea,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      @EndUserText: { label: 'WBS Element Internal ID', quickInfo: 'WBS Element Internal ID' }
      cast( I_EquipmentTimeSeg._LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type )          as WBSElementInternalID,
      I_EquipmentTimeSeg._LocationAccountAssignment.FixedAsset,

      //I_LinearAssetManagementData
      cast( cast( I_Equipment._LinearAssetManagementData.LinearDataStartPoint as abap.dec(11, 3) ) as eaml_start_point ) as LinearDataStartPoint,
      cast( cast( I_Equipment._LinearAssetManagementData.LinearDataEndPoint as abap.dec(11, 3) ) as eaml_end_point )     as LinearDataEndPoint,
      @Semantics.quantity.unitOfMeasure: 'LinearDataUnitOfMeasure'
      cast( I_Equipment._LinearAssetManagementData.LinearDataLength as eaml_linear_length_si )                           as LinearDataLength,
      //      @Semantics.unitOfMeasure: true
      I_Equipment._LinearAssetManagementData.LinearDataUnitOfMeasure,
      /* end suppress warning shlporigin_not_inherited */

      /* Associations */
      //I_EquipmentTimeSeg
      I_EquipmentTimeSeg._WorkCenter                                                                                     as _MainWorkCenter,
      I_EquipmentTimeSeg._Equipment,
      I_EquipmentTimeSeg._ConstructionMaterial,
      I_EquipmentTimeSeg._LocationAccountAssignment,
      I_EquipmentTimeSeg._MaintenancePlanningPlant,
      I_EquipmentTimeSeg._WorkCenterType,
      I_EquipmentTimeSeg._WorkCenter._Plant                                                                              as _MainWorkCenterPlant,

      //I_Equipment
      I_Equipment._ManufacturerCountry,
      I_Equipment._StorageLocation,
      I_Equipment._Division,
      I_Equipment._EquipmentCategory,
      I_Equipment._Material,
      I_Equipment._Plant,
      I_Equipment._Currency,
      I_Equipment._TechnicalObjectType,
      I_Equipment._GrossWeightUnit,
      I_Equipment._Customer,
      I_Equipment._Supplier,

      //I_LocationAccountAssignment
      --    I_EquipmentTimeSeg._LocationAccountAssignment._ABCIndicator,
      --    @API.element.releaseState: #DEPRECATED
      --    @API.element.successor: '_Address2'
      --    I_EquipmentTimeSeg._LocationAccountAssignment._Address,
      --    I_EquipmentTimeSeg._LocationAccountAssignment._Address2, //Added : 2302 CE - Consider fields from I_Address_2
      I_EquipmentTimeSeg._LocationAccountAssignment._CompanyCode,
      I_EquipmentTimeSeg._LocationAccountAssignment._ControllingArea,
      I_EquipmentTimeSeg._LocationAccountAssignment._CostCenter,
      I_EquipmentTimeSeg._LocationAccountAssignment._Location,
      I_EquipmentTimeSeg._LocationAccountAssignment._MaintenancePlant,
      I_EquipmentTimeSeg._LocationAccountAssignment._MasterFixedAsset,
      I_EquipmentTimeSeg._LocationAccountAssignment._PlantSection,
      I_EquipmentTimeSeg._LocationAccountAssignment._SettlementOrder,
      _WBSElementBasicData,

      _WorkCenterBySemanticKey,
      _WorkCenterPlant,
      _WorkCenter,
      _MainWorkCenterBySemanticKey,
      _FunctionalLocation,
      _EquipmentHierarchyNode,
      _EquipmentIsMarkedForDeletion,
      _EquipmentText
}
```
