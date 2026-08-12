---
name: C_FUNCTIONALLOCATIONDEX
description: "Functional Location Data"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALLOCATIONDEX')/$value
semantic_en: "Functional Location Data"
semantic_vi: "Functional Location Data — CDS view tiêu dùng dựa trên I_FunctionalLocation."
keywords:
  - "functional"
  - "location"
  - "data"
  - "maint"
  - "object"
  - "acct"
  - "assgmt"
  - "nmbr"
  - "indicator"
  - "address"
  - "master"
  - "fixed"
  - "asset"
tags:
  - PM
  - component:PM-EQM-FL-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-FL
  - PM-EQM-FL-2CL
---
# C_FUNCTIONALLOCATIONDEX

**Functional Location Data**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALLOCATIONDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalLocation` | ✓ | |  | `cast(I_FunctionalLocation.FunctionalLocation as ps_s4_tplnr preserving type )` | `CHAR(30)` | Functional Location |
| `MaintObjectLocAcctAssgmtNmbr` |  | |  |  | `CHAR(12)` | Location and account assignment for technical object |
| `ABCIndicator` |  | | `_LocationAccountAssignment` | `ABCIndicator` | `CHAR(1)` | ABC Indicator for Technical Object |
| `AddressID` |  | | `_LocationAccountAssignment` | `AddressID` | `CHAR(10)` | Address Number |
| `MasterFixedAsset` |  | | `_LocationAccountAssignment` | `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `ConstructionMaterial` |  | |  |  | `CHAR(40)` | Construction type material of the object |
| `CompanyCode` |  | | `_LocationAccountAssignment` | `CompanyCode` | `CHAR(4)` | Company Code |
| `CostCenter` |  | | `_LocationAccountAssignment` | `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | | `_LocationAccountAssignment` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `OperationStartDate` |  | |  |  | `DATS(8)` | Start-up Date of the Technical Object |
| `TechnicalObjectType` |  | |  |  | `CHAR(10)` | Type of Technical Object |
| `AssetLocation` |  | | `_LocationAccountAssignment` | `AssetLocation` | `CHAR(10)` | Location of maintenance object |
| `MaintenancePlant` |  | | `_LocationAccountAssignment` | `MaintenancePlant` | `CHAR(4)` | Maintenance Plant |
| `AssetRoom` |  | | `_LocationAccountAssignment` | `AssetRoom` | `CHAR(8)` | Room |
| `MaintenancePlanningPlant` |  | |  |  | `CHAR(4)` | Maintenance Planning Plant |
| `PlantSection` |  | | `_LocationAccountAssignment` | `PlantSection` | `CHAR(3)` | Plant Section |
| `MaintenancePlannerGroup` |  | |  |  | `CHAR(3)` | Planner Group for Customer Service and Plant Maintenance |
| `WBSElementExternalID` |  | | `_LocationAccountAssignment._WBSElementBasicData` | `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `FunctionalLocationCategory` |  | |  |  | `CHAR(1)` | Functional location category |
| `MainWorkCenter` |  | |  | `cast( I_FunctionalLocation._WorkCenter.WorkCenter as gewrk preserving type )` | `CHAR(8)` | Main work center for maintenance tasks |
| `MainWorkCenterPlant` |  | |  | `Plant` | `CHAR(4)` | Plant |
| `SettlementOrder` |  | | `_LocationAccountAssignment` | `SettlementOrder` | `CHAR(12)` | Settlement order |
| `WorkCenter` |  | | `_LocationAccountAssignment._WorkCenter` | `WorkCenter` | `CHAR(8)` | Work Center |
| `WorkCenterPlant` |  | | `_LocationAccountAssignment._WorkCenter` | `Plant` | `CHAR(4)` | Plant |
| `MainWorkCenterInternalID` |  | |  | `WorkCenterInternalID` | `NUMC(8)` | Object ID of the Work Center |
| `WorkCenterInternalID` |  | | `_LocationAccountAssignment` | `WorkCenterInternalID` | `NUMC(8)` | Object ID of PP work center |
| `WorkCenterTypeCode` |  | | `_LocationAccountAssignment` | `WorkCenterTypeCode` | `CHAR(2)` | Object types of the CIM resource |
| `SuperiorFunctionalLocation` |  | |  | `cast( I_FunctionalLocation.SuperiorFunctionalLocation as ps_s4_tplnr preserving type )` | `CHAR(30)` | Functional Location |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on which the object was created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on which the object was last changed |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `LastChangeDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `FunctionalLocationEndOfUseDate` |  | |  |  | `DATS(8)` | End-of-Use Date of the Technical Object |
| `MaintObjectInternalID` |  | |  |  | `CHAR(22)` | Object Number |
| `FuncnlLocIsMarkedForDeletion` |  | |  | `cast( case when _Status[ exact one to one : StatusCode = 'I0076' and StatusIsInactive = '' ].StatusCode is not null then 'X' else ' ' end as eam_is_deleted preserving type )` | `CHAR(1)` | Object is deleted |
| `WBSElementInternalID` |  | |  | `cast( _LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type )` | `NUMC(8)` | WBS Element |
| `LinearDataStartPoint` |  | |  | `cast( cast( I_FunctionalLocation._LinearAssetManagementData.LinearDataStartPoint as abap.dec(11, 3) ) as eaml_start_point )` | `CHAR(18)` | Start Point |
| `LinearDataEndPoint` |  | |  | `cast( cast( I_FunctionalLocation._LinearAssetManagementData.LinearDataEndPoint as abap.dec(11, 3) ) as eaml_end_point )` | `CHAR(18)` | End Point |
| `LinearDataLength` |  | |  | `cast( I_FunctionalLocation._LinearAssetManagementData.LinearDataLength as eaml_linear_length_si )` | `FLTP(16)` | Length in SI Unit |
| `LinearDataUnitOfMeasure` |  | |  |  | `UNIT(3)` | Unit of Measurement for Linear Data |
| `_MainWorkCenterBySemanticKey` | | ✓ | | | | |
| `_MainWorkCenterPlant` | | ✓ | | | | |
| `_WorkCenterBySemanticKey` | | ✓ | | | | |
| `_WorkCenterPlant` | | ✓ | | | | |
| `_MainWorkCenter` | | ✓ | | | | |
| `_FuncnlLocIsMarkedForDeletion` | | ✓ | | | | |
| `_MaintenancePlanPlant` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_FunctionalLocationCategory` | | ✓ | | | | |
| `_ConstructionMaterial` | | ✓ | | | | |
| `_TechnicalObjectType` | | ✓ | | | | |
| `_MaintenancePlannerGroup` | | ✓ | | | | |
| `_MaintenancePlanningPlant` | | ✓ | | | | |
| `_FunctionalLocationText` | | ✓ | | | | |
| `_LocationAccountAssignment` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MainWorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_MainWorkCenterPlant` | `I_Plant` | [0..1] |
| `_WorkCenterBySemanticKey` | `I_WorkCenterBySemanticKey` | [0..1] |
| `_WorkCenterPlant` | `I_Plant` | [0..1] |
| `_MainWorkCenter` | `I_WorkCenter` | [0..1] |
| `_FuncnlLocIsMarkedForDeletion` | `I_Indicator` | [0..1] |
| `_MaintenancePlanPlant` | `I_MaintenancePlanPlant` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALLOCATIONDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_FUNCTIONALLOCATIONDEX')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@EndUserText.label: 'Functional Location Data'

@VDM.viewType: #CONSUMPTION

@Metadata: { ignorePropagatedAnnotations,
             allowExtensions }

@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED,
  privilegedAssociations: ['_Location',
                           '_LocationAccountAssignment' ]
}

@ObjectModel: {
  sapObjectNodeType.name: 'FunctionalLocation',
  representativeKey: 'FunctionalLocation',
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #XXL  },
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
}

@Analytics: {
  internalName:#LOCAL,
  dataCategory: #DIMENSION,
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping:[
        {
            table: 'iflot', role: #MAIN,
            viewElement:  ['FunctionalLocation'],
            tableElement: ['tplnr' ]
        },
        {
            table: 'iloa', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement:  ['MaintObjectLocAcctAssgmtNmbr'],
            tableElement: ['iloan']
        },
        {
            table: 'jest', role: #LEFT_OUTER_TO_ONE_JOIN,
            viewElement:  ['MaintObjectInternalID'],
            tableElement: ['objnr'],
            filter: [{ operator: #EQ, tableElement: 'STAT', value: 'I0076' }]
         }
    ]
    }
  }
}

define view entity C_FunctionalLocationDEX
  as select from I_FunctionalLocation as I_FunctionalLocation
  // Out of the first release's scope
  //  association [0..1] to I_FunclocationLabelInternal   as _PrimaryLabel                 on  $projection.FunctionalLocation             = _PrimaryLabel.FunctionalLocation
  //                                                                                       and _PrimaryLabel.FuncnlLocLabelIsPrimaryLabel = 'X'
  //                                                                                       and _PrimaryLabel.FunctionalLocLabelIsActive   = 'X'
  association [0..1] to I_WorkCenterBySemanticKey as _MainWorkCenterBySemanticKey  on  $projection.MainWorkCenter      = _MainWorkCenterBySemanticKey.WorkCenter
                                                                                   and $projection.MainWorkCenterPlant = _MainWorkCenterBySemanticKey.Plant
  association [0..1] to I_Plant                   as _MainWorkCenterPlant          on  $projection.MainWorkCenterPlant = _MainWorkCenterPlant.Plant
  association [0..1] to I_WorkCenterBySemanticKey as _WorkCenterBySemanticKey      on  $projection.workcenter      = _WorkCenterBySemanticKey.WorkCenter
                                                                                   and $projection.WorkCenterPlant = _WorkCenterBySemanticKey.Plant
  association [0..1] to I_Plant                   as _WorkCenterPlant              on  $projection.WorkCenterPlant = _WorkCenterPlant.Plant
  association [0..1] to I_WorkCenter              as _MainWorkCenter               on  _MainWorkCenter.WorkCenterInternalID = $projection.MainWorkCenterInternalID
                                                                                   and _MainWorkCenter.WorkCenterTypeCode   = 'A'
  association [0..1] to I_Indicator               as _FuncnlLocIsMarkedForDeletion on  $projection.FuncnlLocIsMarkedForDeletion = _FuncnlLocIsMarkedForDeletion.IndicatorValue
  association [0..1] to I_MaintenancePlanPlant    as _MaintenancePlanPlant         on  $projection.MaintenancePlanningPlant = _MaintenancePlanPlant.MaintenancePlanningPlant
  association [0..1] to I_WBSElementBasicData     as _WBSElementBasicData          on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID

{
      /* start suppress warning shlporigin_not_inherited */
      //  key I_FunctionalLocation.FunctionalLocation,
  key cast(I_FunctionalLocation.FunctionalLocation as ps_s4_tplnr preserving type )                                               as FunctionalLocation,
      I_FunctionalLocation.MaintObjectLocAcctAssgmtNmbr,

      @ObjectModel.foreignKey.association: '_ABCIndicator'
      _LocationAccountAssignment.ABCIndicator,
      _LocationAccountAssignment.AddressID,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      _LocationAccountAssignment.MasterFixedAsset,
      @ObjectModel.foreignKey.association: '_ConstructionMaterial'
      ConstructionMaterial,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      _LocationAccountAssignment.CompanyCode,
      @ObjectModel.foreignKey.association: '_CostCenter'
      _LocationAccountAssignment.CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      _LocationAccountAssignment.ControllingArea,
      OperationStartDate,
      @ObjectModel.foreignKey.association: '_TechnicalObjectType'
      TechnicalObjectType,
      @ObjectModel.foreignKey.association: '_Location'
      _LocationAccountAssignment.AssetLocation,
      @ObjectModel.foreignKey.association: '_MaintenancePlant'
      _LocationAccountAssignment.MaintenancePlant,
      _LocationAccountAssignment.AssetRoom,
      @ObjectModel.foreignKey.association: '_MaintenancePlanPlant'
      MaintenancePlanningPlant,
      @ObjectModel.foreignKey.association: '_PlantSection'
      _LocationAccountAssignment.PlantSection,
      @ObjectModel.foreignKey.association: '_MaintenancePlannerGroup'
      MaintenancePlannerGroup,
      @EndUserText: { label: 'WBS Element External ID', quickInfo: 'WBS Element External ID' }
//      cast( _LocationAccountAssignment._WBSElementBasicData.WBSElement  as ps_s4_posid )                                          as WBSElement,
      _LocationAccountAssignment._WBSElementBasicData.WBSElementExternalID,
      @ObjectModel.foreignKey.association: '_FunctionalLocationCategory'
      FunctionalLocationCategory,
      @ObjectModel.foreignKey.association: '_MainWorkCenterBySemanticKey'
      cast( I_FunctionalLocation._WorkCenter.WorkCenter as gewrk preserving type )                                                as MainWorkCenter,
      @ObjectModel.foreignKey.association: '_MainWorkCenterPlant'
      @EndUserText: { label: 'Plant of Work Center', quickInfo: 'Plant of Work Center' }
      I_FunctionalLocation._WorkCenter.Plant                                                                                      as MainWorkCenterPlant,
      @ObjectModel.foreignKey.association: '_SettlementOrder'
      _LocationAccountAssignment.SettlementOrder,
      @ObjectModel.foreignKey.association: '_WorkCenterBySemanticKey'
      _LocationAccountAssignment._WorkCenter.WorkCenter,
      @ObjectModel.foreignKey.association: '_WorkCenterPlant'
      _LocationAccountAssignment._WorkCenter.Plant                                                                                as WorkCenterPlant,
      @ObjectModel.foreignKey.association: '_MainWorkCenter'
      @EndUserText: { label: 'Internal ID of Main Work Center', quickInfo: 'Internal ID of Main Work Center' }
      I_FunctionalLocation.WorkCenterInternalID                                                                                   as MainWorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenter'
      _LocationAccountAssignment.WorkCenterInternalID,
      @ObjectModel.foreignKey.association: '_WorkCenterType'
      @EndUserText: { label: 'Type Code of Work Center', quickInfo: 'Type Code of Work Center' }
      _LocationAccountAssignment.WorkCenterTypeCode                                                                               as WorkCenterTypeCode,

      /* Additional fields */
      cast( I_FunctionalLocation.SuperiorFunctionalLocation   as ps_s4_tplnr preserving type )                                    as SuperiorFunctionalLocation,
      @Semantics.systemDate.createdAt: true
      I_FunctionalLocation.CreationDate,
      @Semantics.systemDate.lastChangedAt: true
      I_FunctionalLocation.LastChangeDate,
      AuthorizationGroup,
      @Semantics.systemDateTime.lastChangedAt: true
      I_FunctionalLocation.LastChangeDateTime,
      I_FunctionalLocation.FunctionalLocationEndOfUseDate,

      I_FunctionalLocation.MaintObjectInternalID,

      @ObjectModel.foreignKey.association: '_FuncnlLocIsMarkedForDeletion'
      @Semantics.booleanIndicator: true
      cast( case when _Status[ exact one to one : StatusCode = 'I0076' and StatusIsInactive = '' ].StatusCode is not null
              then 'X' else ' '
            end as eam_is_deleted preserving type )                                                                               as FuncnlLocIsMarkedForDeletion,

      // I_LocationAccountAssignment
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      @EndUserText: { label: 'WBS Element Internal ID', quickInfo: 'WBS Element Internal ID' }
      cast( _LocationAccountAssignment.WBSElementInternalID as ps_s4_pspnr preserving type )                                      as WBSElementInternalID,
      //I_LinearAssetManagementData
      cast( cast( I_FunctionalLocation._LinearAssetManagementData.LinearDataStartPoint as abap.dec(11, 3) ) as eaml_start_point ) as LinearDataStartPoint,
      cast( cast( I_FunctionalLocation._LinearAssetManagementData.LinearDataEndPoint as abap.dec(11, 3) ) as eaml_end_point )     as LinearDataEndPoint,
      @Semantics.quantity.unitOfMeasure: 'LinearDataUnitOfMeasure'
      cast( I_FunctionalLocation._LinearAssetManagementData.LinearDataLength as eaml_linear_length_si )                           as LinearDataLength,
      I_FunctionalLocation._LinearAssetManagementData.LinearDataUnitOfMeasure,

      /* end suppress warning shlporigin_not_inherited */

      /* Associations */
      _FunctionalLocationCategory,
      _ConstructionMaterial,
      _TechnicalObjectType,
      _MaintenancePlannerGroup,
      _MaintenancePlanningPlant,
      //      _PrimaryLabel._FunctionalLocLabelingSyst, Out of the first release's scope
      _WBSElementBasicData,
      _LocationAccountAssignment._PlantSection,
      _LocationAccountAssignment._Location,
      _LocationAccountAssignment._CompanyCode,
      _LocationAccountAssignment._MaintenancePlant,
      _LocationAccountAssignment._MasterFixedAsset,
      _LocationAccountAssignment._ABCIndicator,
      _LocationAccountAssignment._CostCenter,
      _LocationAccountAssignment._ControllingArea,
      _LocationAccountAssignment._SettlementOrder,
      _LocationAccountAssignment._WorkCenter,
      _LocationAccountAssignment._WorkCenterType,

      _MainWorkCenterBySemanticKey,
      _MainWorkCenterPlant,
      _WorkCenterBySemanticKey,
      _WorkCenterPlant,
      _MainWorkCenter,
      _FuncnlLocIsMarkedForDeletion,
      //      _SuperiorFunctionalLocation,
      _MaintenancePlanPlant,
      _FunctionalLocationText,
      _LocationAccountAssignment
}
```
