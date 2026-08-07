---
name: I_WRNTYCLAIMHEADER
description: Wrntyclaimheader
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - header-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMHEADER

**Wrntyclaimheader**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `WrntyClaimHeaderUUID` | ✓ | |  | `pnguid` |
| `WarrantyClaimNumber` |  | |  | `clmno` |
| `WarrantyClaimType` |  | |  | `clmty` |
| `WrntyClaimExternalNumber` |  | |  | `refno` |
| `WarrantyObjectType` |  | |  | `relty` |
| `WrntyExternalObjectNumber` |  | |  | `relob_ext` |
| `Plant` |  | |  | `werks` |
| `IsArchived` |  | |  | `archiv_flag` |
| `WrntyClaimHeaderText` |  | |  | `h_pntext` |
| `WrntyClaimCreationTime` |  | |  | `creatime` |
| `WrntyClaimSourceObjectNumber` |  | |  | `source_object` |
| `WrntyClaimSource` |  | |  | `claim_source` |
| `WrntyClaimDamageDate` |  | |  | `damage_date` |
| `WrntyClaimRegistrationDate` |  | |  | `registration_date` |
| `WrntyClaimRepairDate` |  | |  | `repair_date` |
| `WrntyClaimRepairEndDate` |  | |  | `repair_end_date` |
| `WarrantyClaimMileage` |  | |  | `mileage` |
| `WarrantyClaimMileageUnit` |  | |  | `m_unit` |
| `WrntyClmOperatingDurationInHrs` |  | |  | `operating_hours` |
| `WrntyClmOperatingDurationUnit` |  | |  | `o_unit` |
| `WarrantyCustomerCoverageType` |  | |  | `coverage_type` |
| `WrntyCustClmProcessingStatus` |  | |  | `astate` |
| `WrntyCustClaimRespPerson` |  | |  | `clerk` |
| `WarrantyCustomerClaimGroup` |  | |  | `clmgrp` |
| `WarrantyCustomerClaimIsClosed` |  | |  | `closed` |
| `WrntyCustomerClaimClosedDate` |  | |  | `close_date` |
| `WarrantyCustomer` |  | |  | `parnr` |
| `WarrantyCustomerRole` |  | |  | `cast( parvw as parvw_unv preserving type )` |
| `WarrantyCustomerApplicationLog` |  | |  | `cast(log_handle as wty_log_handle preserving type )` |
| `WarrantyCustClmApplLogMessage` |  | |  | `log_message` |
| `WrntySupplierCoverageType` |  | |  | `coverage_type_sup` |
| `WrntySuplrClmProcessingStatus` |  | |  | `astate_sup` |
| `WrntySuplrClaimRespPerson` |  | |  | `clerk_sup` |
| `WrntySupplierClaimGroup` |  | |  | `clmgrp_sup` |
| `WrntySupplierClaimIsClosed` |  | |  | `closed_sup` |
| `WrntySupplierClaimClosedDate` |  | |  | `closed_date_sup` |
| `WrntySupplier` |  | |  | `parnr_sup` |
| `WrntySupplierRole` |  | |  | `cast( parvw_sup as parvw_unv preserving type )` |
| `WrntySupplierApplicationLog` |  | |  | `cast(log_handle_sup as wty_log_handle preserving type )` |
| `WrntySuplrClmApplLogMessage` |  | |  | `cast( log_message_sup as wty_balloghndl_msg_sup preserving type)` |
| `WarrantyClaimChangeDateTime` |  | |  | `timstmp` |
| `WrntyClaimCreationDate` |  | |  | `creadat` |
| `CreatedByUser` |  | |  | `creaby` |
| `WrntyClaimChangedDate` |  | |  | `chngdat` |
| `LastChangedByUser` |  | |  | `chngby` |
| `_WrntyClaimItem` | | ✓ | | |
| `_WrntyClaimVersion` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_LastChangedByUser` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_ResponsiblePerson` | | ✓ | | |
| `_CustResponsiblePerson` | | ✓ | | |
| `_ProcessingStatus` | | ✓ | | |
| `_CustProcessingStatus` | | ✓ | | |
| `_ClaimType` | | ✓ | | |
| `_ObjectType` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_SupCoverageType` | | ✓ | | |
| `_CustCoverageType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimItem` | `I_WrntyClaimItem` | [1..*] |
| `_WrntyClaimVersion` | `I_WrntyClaimVersion` | [1..*] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [1..1] |
| `_CreatedByUser` | `I_UserContactCard` | [1..1] |
| `_ResponsiblePerson` | `I_UserContactCard` | [1..1] |
| `_CustResponsiblePerson` | `I_UserContactCard` | [1..1] |
| `_ProcessingStatus` | `I_WrntyClaimProcessingStatus` | [1..1] |
| `_CustProcessingStatus` | `I_WrntyClaimProcessingStatus` | [1..1] |
| `_ClaimType` | `I_WrntyClaimType` | [1..1] |
| `_ObjectType` | `I_WrntyClaimObjectType` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_SupCoverageType` | `I_WrntyClaimCoverageType` | [1..1] |
| `_CustCoverageType` | `I_WrntyClaimCoverageType` | [1..1] |
| `_ExtensionWrntyClaim` | `E_WarrantyClaim` | [1..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #NOT_REQUIRED,
  privilegedAssociations: [ '_LastChangedByUser' , '_CreatedByUser', '_ResponsiblePerson' ]
  }
@EndUserText.label: 'Warranty Claim Header'
@VDM.viewType: #BASIC //*******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel:{
    compositionRoot: true,
    representativeKey: 'WrntyClaimHeaderUUID',
    usageType:{
        dataClass       : #TRANSACTIONAL,
        serviceQuality  : #A,
        sizeCategory    : #L
        },
//Commented by Jeni becos custom cube view can't be created on top of analytical dimension view
//  modelingPattern: #ANALYTICAL_DIMENSION,
//  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
@Analytics.technicalName: 'IWRNTYCLMHDR'
//Commented by Jeni becos custom cube view can't be created on top of analytical dimension view
//@Analytics:{
//             dataCategory: #DIMENSION,
//             dataExtraction.enabled: true
//           }
//@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
//@Feature: 'LO_WTY_CLAIM_MANAGEMENT'
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */


define root view entity I_WrntyClaimHeader
  as select from pnwtyh
  association [1..*] to I_WrntyClaimItem             as _WrntyClaimItem        on  $projection.WrntyClaimHeaderUUID             = _WrntyClaimItem.WrntyClaimHeaderUUID
                                                                               and _WrntyClaimItem.WrntyClmPartsIsCausingDamage = 'X'
  association [1..*] to I_WrntyClaimVersion          as _WrntyClaimVersion     on  $projection.WrntyClaimHeaderUUID = _WrntyClaimVersion.WrntyClaimHeaderUUID
  association [0..1] to I_Supplier                   as _Supplier              on  $projection.WrntySupplier = _Supplier.Supplier
  association [0..1] to I_Customer                   as _Customer              on  $projection.WarrantyCustomer = _Customer.Customer
  association [1..1] to I_UserContactCard            as _LastChangedByUser     on  $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [1..1] to I_UserContactCard            as _CreatedByUser         on  $projection.CreatedByUser = _CreatedByUser.ContactCardID
  association [1..1] to I_UserContactCard            as _ResponsiblePerson     on  $projection.WrntySuplrClaimRespPerson = _ResponsiblePerson.ContactCardID
  association [1..1] to I_UserContactCard            as _CustResponsiblePerson on  $projection.WrntyCustClaimRespPerson = _CustResponsiblePerson.ContactCardID
  association [1..1] to I_WrntyClaimProcessingStatus as _ProcessingStatus      on  $projection.WrntySuplrClmProcessingStatus = _ProcessingStatus.WrntyClaimProcessingStatus
  association [1..1] to I_WrntyClaimProcessingStatus as _CustProcessingStatus  on  $projection.WrntyCustClmProcessingStatus = _CustProcessingStatus.WrntyClaimProcessingStatus
  association [1..1] to I_WrntyClaimType             as _ClaimType             on  $projection.WarrantyClaimType = _ClaimType.WarrantyClaimType
  association [1..1] to I_WrntyClaimObjectType       as _ObjectType            on  $projection.WarrantyObjectType = _ObjectType.WarrantyObjectType
  association [1..1] to I_Plant                      as _Plant                 on  $projection.Plant = _Plant.Plant
  association [1..1] to I_WrntyClaimCoverageType     as _SupCoverageType       on  $projection.WrntySupplierCoverageType = _SupCoverageType.WrntyClaimCoverageType
  association [1..1] to I_WrntyClaimCoverageType     as _CustCoverageType      on  $projection.WarrantyCustomerCoverageType = _CustCoverageType.WrntyClaimCoverageType
  //  association [1..1] to I_WrntyExternalObjectNumber  as _ExternalObjectNumber on  $projection.WrntyExternalObjectNumber = _ExternalObjectNumber.Equipment
  //association [0..1] to I_WrntyClaimAlertCount    as _WrntyClaimAlertCount on  $projection.WrntySupplierApplicationLog = _WrntyClaimAlertCount.ApplicationLogHandle
   association [1..1] to E_WarrantyClaim              as _ExtensionWrntyClaim            on  $projection.WrntyClaimHeaderUUID = _ExtensionWrntyClaim.WrntyClaimHeaderUUID
{

  key pnguid                                                            as WrntyClaimHeaderUUID,
      //pncnt                                                     as WarrantyInternalNumber,
      //pntxcnt                                                   as WrntyComponentNode,
      clmno                                                             as WarrantyClaimNumber,
      @ObjectModel.foreignKey.association: '_ClaimType'
      clmty                                                             as WarrantyClaimType,
      //refdt                                                     as ReferenceDate,
      refno                                                             as WrntyClaimExternalNumber,
      //      oldcn                                                     as WrntyPrecedingClaim,
      //      autno                                                     as WarrantyAuthorizationNumber,
      //      autna                                                     as WarrantyAuthorizerName,
      //      clerk                                                     as WrntyClaimResponsiblePerson,
      @ObjectModel.foreignKey.association:'_ObjectType'
      relty                                                             as WarrantyObjectType,
      relob_ext                                                         as WrntyExternalObjectNumber,
      //      relob                                                     as WrntyInternalObjectNumber,
      //      relot                                                     as WrntyObjectGrouping,
      //      reldt                                                     as WrntyObjectDate,
      //      parnr                                                     as Partner,
      //      cast(parvw as parvw_unv preserving type )                 as WrntyPartRole,
      //objnr                                                     as WrntyObjectNumberStsMgmt,
      //      astate                                                    as WrntyClaimProcessingStatus,
      @ObjectModel.foreignKey.association:'_Plant'
      werks                                                             as Plant,
      //qmnum                                                     as WrntyClaimNotificationNumber,
      //      cast (log_handle as abap.char( 22 ))                      as WrntyApplicationLog,
      //      log_message                                               as WrntyClaimMsgText,
      //      clmgrp                                                    as WarrantyClaimGroup,
      //      result_out_mwty                                           as WrntyResultObjCheckCustomer,
      //      result_in_mwty                                            as WrntySupplierCheckResult, //
      //      relty2                                                    as WrntyTypeObject2,
      //      relob_ext2                                                as WrntyExternalObjectNumber2,
      //      relob2                                                    as WrntyInternalObjectNumber1,
      //      serno                                                     as WrntySerialNumber,
      //      cast(serno2  as wty_serno preserving type )               as SerialNumber,
      //      cbactiondt                                                as WrntyRecallValidDate,
      //      close_date                                                as ClosedDate,
      archiv_flag                                                       as IsArchived,
      //      ctr_mode                                                  as WrntyProcessingMode,
      //      new_header                                                as WrntyNewStatus,
      //      manual                                                    as WrntyClaimIsManuallyProcessed,
      //      closed                                                    as IsClosed,
      //timstmp                                                   as ValidToDateTime,

      h_pntext                                                          as WrntyClaimHeaderText,
      //      logsys                                                    as WrntyLogicalSystem,
      creatime                                                          as WrntyClaimCreationTime,
      source_object                                                     as WrntyClaimSourceObjectNumber,
      claim_source                                                      as WrntyClaimSource,
      damage_date                                                       as WrntyClaimDamageDate,
      registration_date                                                 as WrntyClaimRegistrationDate,
      repair_date                                                       as WrntyClaimRepairDate,
      repair_end_date                                                   as WrntyClaimRepairEndDate,
      //      coverage_type                                             as WrntyClaimCoverageType,
      //      _WrntyClaimItem.Material                    as Material,
      //      _WrntyClaimItem.WrntyDefectCode             as WrntyDefectCode,

      mileage                                                           as WarrantyClaimMileage,
      m_unit                                                            as WarrantyClaimMileageUnit,
      operating_hours                                                   as WrntyClmOperatingDurationInHrs,
      o_unit                                                            as WrntyClmOperatingDurationUnit,
      @ObjectModel.foreignKey.association:'_CustCoverageType'
      coverage_type                                                     as WarrantyCustomerCoverageType,
      @ObjectModel.foreignKey.association:'_CustProcessingStatus'
      astate                                                            as WrntyCustClmProcessingStatus,
      @ObjectModel.foreignKey.association:'_CustResponsiblePerson'
      clerk                                                             as WrntyCustClaimRespPerson,
      clmgrp                                                            as WarrantyCustomerClaimGroup,
      closed                                                            as WarrantyCustomerClaimIsClosed,
      close_date                                                        as WrntyCustomerClaimClosedDate,
      //@ObjectModel.foreignKey.association:'_Customer'
      parnr                                                             as WarrantyCustomer,
      cast( parvw            as parvw_unv preserving type )             as WarrantyCustomerRole,
      cast(log_handle    as wty_log_handle preserving type )            as WarrantyCustomerApplicationLog,
      log_message                                                       as WarrantyCustClmApplLogMessage,
      @ObjectModel.foreignKey.association:'_SupCoverageType'
      coverage_type_sup                                                 as WrntySupplierCoverageType,
      @ObjectModel.foreignKey.association:'_ProcessingStatus'
      astate_sup                                                        as WrntySuplrClmProcessingStatus,
      @ObjectModel.foreignKey.association:'_ResponsiblePerson'
      clerk_sup                                                         as WrntySuplrClaimRespPerson,
      clmgrp_sup                                                        as WrntySupplierClaimGroup,
      closed_sup                                                        as WrntySupplierClaimIsClosed,
      closed_date_sup                                                   as WrntySupplierClaimClosedDate,
      @ObjectModel.foreignKey.association: '_Supplier'
      parnr_sup                                                         as WrntySupplier,
      cast( parvw_sup            as parvw_unv preserving type )         as WrntySupplierRole,
      cast(log_handle_sup    as wty_log_handle preserving type )        as WrntySupplierApplicationLog,
      cast( log_message_sup  as wty_balloghndl_msg_sup preserving type) as WrntySuplrClmApplLogMessage,
      timstmp                                                           as WarrantyClaimChangeDateTime,
      creadat                                                           as WrntyClaimCreationDate,
      @ObjectModel.foreignKey.association:'_CreatedByUser'
      creaby                                                            as CreatedByUser,
      chngdat                                                           as WrntyClaimChangedDate,
      @ObjectModel.foreignKey.association:'_LastChangedByUser'
      chngby                                                            as LastChangedByUser,
      _Plant,
      _ProcessingStatus,
      _ClaimType,
      _ObjectType,
      _Supplier,
      _LastChangedByUser,
      _CreatedByUser,
      _WrntyClaimItem,
      _ResponsiblePerson,
      _WrntyClaimVersion,
      _CustProcessingStatus,
      _CustResponsiblePerson,
      _Customer,
      _SupCoverageType,
     // _Extension,
      _CustCoverageType
      //_WrntyClaimAlertCount
      //    _ExternalObjectNumber

}

//where astate >= 'C020' and astate <= 'C110' ;
```
