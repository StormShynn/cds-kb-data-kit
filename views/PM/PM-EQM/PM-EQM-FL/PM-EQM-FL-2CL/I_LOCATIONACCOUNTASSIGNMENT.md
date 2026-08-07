---
name: I_LOCATIONACCOUNTASSIGNMENT
description: "Locationaccountassignment"
app_component: PM-EQM-FL-2CL
software_component: SAPSCORE
release_state: released
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
# I_LOCATIONACCOUNTASSIGNMENT

**Locationaccountassignment**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintObjectLocAcctAssgmtNmbr` | ✓ | |  | `iloan` |  |  |
| `WorkCenterInternalID` |  | |  | `ppsid` |  |  |
| `WorkCenterTypeCode` |  | |  | `cr_objty` |  |  |
| `FunctionalLocation` |  | |  | `tplnr` |  |  |
| `MaintenancePlant` |  | |  | `swerk` |  |  |
| `PlantSection` |  | |  | `beber` |  |  |
| `AssetLocation` |  | |  | `stort` |  |  |
| `MaintObjectFreeDefinedAttrib` |  | |  | `eqfnr` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ControllingArea` |  | |  | `kokrs` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `MaintenanceObjectLocation` |  | |  | `stort` |  |  |
| `AssetRoom` |  | |  | `msgrp` |  |  |
| `ABCIndicator` |  | |  | `abckz` |  |  |
| `AddressID` |  | |  | `adrnr` |  |  |
| `WBSElementInternalID` |  | |  | `proid` |  |  |
| `MasterFixedAsset` |  | |  | `anlnr` |  |  |
| `FixedAsset` |  | |  | `anlun` |  |  |
| `SettlementOrder` |  | |  | `aufnr` |  |  |
| `StandingOrderNumber` |  | |  | `daufn` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `SalesOffice` |  | |  | `vkbur` |  |  |
| `OrganizationDivision` |  | |  | `spart` |  |  |
| `SalesGroup` |  | |  | `vkgrp` |  |  |
| `_WorkCenterType` | | ✓ | | | | |
| `_WorkCenter` | | ✓ | | | | |
| `_MaintenancePlant` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_PlantSection` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_ABCIndicator` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_PMNotifMaintenanceData` | | ✓ | | | | |
| `_Location` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |
| `_FixedAsset` | | ✓ | | | | |
| `_SettlementOrder` | | ✓ | | | | |
| `_StandingOrderNumber` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SlsOrganizationDistrChnl` | | ✓ | | | | |
| `_SalesAreaSalesOffice` | | ✓ | | | | |
| `_SalesOfficeSalesGroup` | | ✓ | | | | |
| `_CostCenterText` | | ✓ | | | | |
| `_Address2` | | ✓ | | | | |
| `_PhoneNumber` | | ✓ | | | | |
| `_FaxNumber` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WorkCenterType` | `I_WorkCenterType` | [0..1] |
| `_WorkCenter` | `I_WorkCenter` | [0..1] |
| `_MaintenancePlant` | `I_Plant` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_PlantSection` | `I_PlantSection` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_ABCIndicator` | `I_ABCIndicator` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_PMNotifMaintenanceData` | `I_PMNotifMaintenanceData` | [0..1] |
| `_Location` | `I_Location` | [0..1] |
| `_MasterFixedAsset` | `I_MasterFixedAsset` | [0..1] |
| `_FixedAsset` | `I_FixedAsset` | [0..1] |
| `_SettlementOrder` | `I_Order` | [0..1] |
| `_StandingOrderNumber` | `I_MaintenanceOrder` | [0..1] |
| `_Address` | `I_Address` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_SlsOrganizationDistrChnl` | `I_SlsOrganizationDistrChnl` | [0..1] |
| `_SalesAreaSalesOffice` | `I_SalesAreaSalesOffice` | [0..1] |
| `_SalesOfficeSalesGroup` | `I_SalesOfficeSalesGroup` | [0..1] |
| `_CostCenterText` | `I_CostCenterText` | [0..*] |
| `_Address2` | `I_AddressDefaultRepresentation` | [0..1] |
| `_PhoneNumber` | `I_AddressPhoneNumber_2` | [0..*] |
| `_FaxNumber` | `I_AddressFaxNumber_2` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Location and Account Assignment'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog: { sqlViewName: 'ILOCACCASSIGNMT', preserveKey }
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AccessControl.privilegedAssociations:['_PlantSection','_FunctionalLocation']
@ObjectModel.representativeKey: 'MaintObjectLocAcctAssgmtNmbr'
@ObjectModel.semanticKey:  [ 'MaintObjectLocAcctAssgmtNmbr' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@Metadata.allowExtensions: true

@Metadata.ignorePropagatedAnnotations
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION]

define view I_LocationAccountAssignment
  as select from iloa
  association [0..1] to I_WorkCenterType           as _WorkCenterType           on  $projection.WorkCenterTypeCode = _WorkCenterType.WorkCenterTypeCode
  association [0..1] to I_WorkCenter               as _WorkCenter               on  $projection.WorkCenterInternalID = _WorkCenter.WorkCenterInternalID
                                                                                and $projection.WorkCenterTypeCode   = _WorkCenter.WorkCenterTypeCode
  association [0..1] to I_Plant                    as _MaintenancePlant         on  $projection.MaintenancePlant = _MaintenancePlant.Plant
  association [0..1] to I_FunctionalLocation       as _FunctionalLocation       on  $projection.FunctionalLocation = _FunctionalLocation.FunctionalLocation
  association [0..1] to I_PlantSection             as _PlantSection             on  $projection.PlantSection     = _PlantSection.PlantSection
                                                                                and $projection.MaintenancePlant = _PlantSection.Plant
  association [0..*] to I_CostCenter               as _CostCenter               on  $projection.CostCenter      = _CostCenter.CostCenter
                                                                                and $projection.ControllingArea = _CostCenter.ControllingArea
  association [0..1] to I_CompanyCode              as _CompanyCode              on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_ControllingArea          as _ControllingArea          on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_BusinessArea             as _BusinessArea             on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Division                 as _Division                 on  $projection.Division = _Division.Division
  association [0..1] to I_ABCIndicator             as _ABCIndicator             on  $projection.ABCIndicator = _ABCIndicator.ABCIndicator
  association [0..1] to I_WBSElementBasicData      as _WBSElementBasicData      on  $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID
  association [0..1] to I_PMNotifMaintenanceData   as _PMNotifMaintenanceData   on  $projection.MaintObjectLocAcctAssgmtNmbr = _PMNotifMaintenanceData.MaintObjectLocAcctAssgmtNmbr
  association [0..1] to I_Location                 as _Location                 on  $projection.MaintenancePlant = _Location.Plant
                                                                                and $projection.AssetLocation    = _Location.Location
  association [0..1] to I_MasterFixedAsset         as _MasterFixedAsset         on  $projection.CompanyCode      = _MasterFixedAsset.CompanyCode
                                                                                and $projection.MasterFixedAsset = _MasterFixedAsset.MasterFixedAsset
  association [0..1] to I_FixedAsset               as _FixedAsset               on  $projection.CompanyCode      = _FixedAsset.CompanyCode
                                                                                and $projection.MasterFixedAsset = _FixedAsset.MasterFixedAsset
                                                                                and $projection.FixedAsset       = _FixedAsset.FixedAsset
  association [0..1] to I_Order                    as _SettlementOrder          on  $projection.SettlementOrder = _SettlementOrder.OrderID
  association [0..1] to I_MaintenanceOrder         as _StandingOrderNumber      on  $projection.StandingOrderNumber = _StandingOrderNumber.MaintenanceOrder
  association [0..1] to I_Address                  as _Address                  on  $projection.AddressID = _Address.AddressID
  association [0..1] to I_SalesOrganization        as _SalesOrganization        on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_SlsOrganizationDistrChnl as _SlsOrganizationDistrChnl on  $projection.SalesOrganization   = _SlsOrganizationDistrChnl.SalesOrganization
                                                                                and $projection.DistributionChannel = _SlsOrganizationDistrChnl.DistributionChannel
  association [0..1] to I_SalesAreaSalesOffice     as _SalesAreaSalesOffice     on  $projection.SalesOffice          = _SalesAreaSalesOffice.SalesOffice
                                                                                and $projection.SalesOrganization    = _SalesAreaSalesOffice.SalesOrganization
                                                                                and $projection.DistributionChannel  = _SalesAreaSalesOffice.DistributionChannel
                                                                                and $projection.OrganizationDivision = _SalesAreaSalesOffice.OrganizationDivision
  association [0..1] to I_SalesOfficeSalesGroup    as _SalesOfficeSalesGroup    on  $projection.SalesOffice = _SalesOfficeSalesGroup.SalesOffice
                                                                                and $projection.SalesGroup  = _SalesOfficeSalesGroup.SalesGroup
  association [0..*] to I_CostCenterText           as _CostCenterText           on  $projection.ControllingArea       = _CostCenterText.ControllingArea
                                                                                and $projection.CostCenter            = _CostCenterText.CostCenter
                                                                                and _CostCenterText.ValidityStartDate <= $session.system_date
                                                                                and _CostCenterText.ValidityEndDate   >= $session.system_date
  association [0..1] to I_AddressDefaultRepresentation as _Address2             on  $projection.AddressID = _Address2.AddressID  //2302CE
    
  association [0..*] to I_AddressPhoneNumber_2     as _PhoneNumber              on  $projection.AddressID  <> ''     //2502CE
                                                                                and $projection.AddressID = _PhoneNumber.AddressID
                                                                                and _PhoneNumber.PhNmbrIsCurrentOverallDefault = 'X'  
                                                                                and _PhoneNumber.AddressPersonID = ''
  association [0..*] to I_AddressFaxNumber_2       as _FaxNumber                on  $projection.AddressID  <> ''     //2502CE
                                                                                and $projection.AddressID = _FaxNumber.AddressID       
                                                                                and _FaxNumber.FaxNumberIsCurrentDefault = 'X'  
                                                                                and _FaxNumber.AddressPersonID = ''  
{

  key iloa.iloan    as MaintObjectLocAcctAssgmtNmbr,

      @ObjectModel.foreignKey.association: '_WorkCenter'
      iloa.ppsid    as WorkCenterInternalID,

      @ObjectModel.foreignKey.association: '_WorkCenterType'
      iloa.cr_objty as WorkCenterTypeCode,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FunctionalLocationStdVH',
                     element: 'FunctionalLocation' }
        }]
      @ObjectModel.foreignKey.association: '_FunctionalLocation'
      iloa.tplnr    as FunctionalLocation,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantStdVH',
                     element: 'Plant' }
        }]
      @ObjectModel.foreignKey.association: '_MaintenancePlant'
      iloa.swerk    as MaintenancePlant,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PlantSectionStdVH',
                     element: 'PlantSection' },
          additionalBinding: [{ localElement: 'MaintenancePlant',
                                element: 'Plant' }]
        }]
      @ObjectModel.foreignKey.association: '_PlantSection'
      iloa.beber    as PlantSection,

      @ObjectModel.foreignKey.association: '_Location'
      iloa.stort    as AssetLocation,

      iloa.eqfnr    as MaintObjectFreeDefinedAttrib, // Sort Field

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BusinessAreaStdVH',
                     element: 'BusinessArea' }
        }]
      @ObjectModel.foreignKey.association: '_BusinessArea'
      iloa.gsber    as BusinessArea,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.foreignKey.association: '_ControllingArea'
      iloa.kokrs    as ControllingArea,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CostCenterStdVH',
                     element: 'CostCenter' },
          additionalBinding: [{ localElement: 'ControllingArea',
                                element: 'ControllingArea' }]
        }]
      @ObjectModel.foreignKey.association: '_CostCenter'
      @ObjectModel.text.association:'_CostCenterText'
      iloa.kostl    as CostCenter,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CompanyCodeStdVH',
                     element: 'CompanyCode' }
        }]
      @ObjectModel.foreignKey.association: '_CompanyCode'
      iloa.bukrs    as CompanyCode,

      @ObjectModel.foreignKey.association: '_Division'
      iloa.spart    as Division,

      iloa.stort    as MaintenanceObjectLocation,

      iloa.msgrp    as AssetRoom,

      @ObjectModel.foreignKey.association: '_ABCIndicator'
      iloa.abckz    as ABCIndicator,

//      @ObjectModel.foreignKey.association: '_Address'
      @ObjectModel.foreignKey.association: '_Address2' //2302 CE - Adapt I_Address_2 View
      iloa.adrnr    as AddressID,

      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      iloa.proid    as WBSElementInternalID,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_MasterFixedAssetStdVH',
                     element: 'MasterFixedAsset' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' }]
        }]
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      iloa.anlnr    as MasterFixedAsset,

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_FixedAssetStdVH',
                     element: 'FixedAsset' },
          additionalBinding: [{ localElement: 'CompanyCode',
                                element: 'CompanyCode' },
                              { localElement: 'MasterFixedAsset',
                                element: 'MasterFixedAsset' }]
        }]
      @ObjectModel.foreignKey.association: '_FixedAsset'
      iloa.anlun    as FixedAsset,

      @ObjectModel.foreignKey.association: '_SettlementOrder'
      iloa.aufnr    as SettlementOrder,

      @Consumption.valueHelpDefinition: [
      { entity:  { name:    'I_MaintenanceOrderStdVH',
               element: 'MaintenanceOrder' }
      }]
      @ObjectModel.foreignKey.association: '_StandingOrderNumber'
      iloa.daufn    as StandingOrderNumber,

      @ObjectModel.foreignKey.association: '_SalesOrganization'
      iloa.vkorg    as SalesOrganization,

      iloa.vtweg    as DistributionChannel,

      iloa.vkbur    as SalesOffice,

      iloa.spart    as OrganizationDivision,

      iloa.vkgrp    as SalesGroup,


      // Propagate association
      _PMNotifMaintenanceData,
      _WorkCenterType,
      _WorkCenter,
      _MaintenancePlant,
      _FunctionalLocation,
      _PlantSection,
      _CostCenter,
      @Consumption.hidden: true
      _CostCenterText,
      _CompanyCode,
      _ControllingArea,
      _BusinessArea,
      _Division,
      _ABCIndicator,
      _WBSElementBasicData,
      _Location,
      _MasterFixedAsset,
      _FixedAsset,
      _SettlementOrder,
      _StandingOrderNumber,
       @API.element.releaseState: #DEPRECATED
       @API.element.successor: '_Address2'
      _Address,
      _Address2,  //2302 CE - Adapt I_Address_2 View
      _SalesAreaSalesOffice,
      _SalesOrganization,
      _SlsOrganizationDistrChnl,
      _SalesOfficeSalesGroup,
      _PhoneNumber,
      _FaxNumber
}
```
