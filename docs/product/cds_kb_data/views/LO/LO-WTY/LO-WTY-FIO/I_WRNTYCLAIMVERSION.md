---
name: I_WRNTYCLAIMVERSION
description: "Wrntyclaimversion"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMVERSION

**Wrntyclaimversion**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyVersionUUID` | ✓ | |  | `pnguid` |  |  |
| `WrntyClaimHeaderUUID` |  | |  | `header_guid` |  |  |
| `WrntyVersionNumber` |  | |  | `cast(versn as wty_versn preserving type )` |  |  |
| `WarrantyClaimVersionCategory` |  | |  | `kateg` |  |  |
| `WrntyDecisionCode` |  | |  | `v_rejcd` |  |  |
| `WarrantyClaimVersionPartner` |  | |  | `v_parnr` |  |  |
| `WrntyClaimVersionPartnerRole` |  | |  | `cast(v_parvw as parvw_unv preserving type )` |  |  |
| `WarrantyClaimVersionIsActive` |  | |  | `aktiv` |  |  |
| `WrntyBillingDocumentDate` |  | |  | `fkdat` |  |  |
| `WrntyDocumentCondition` |  | |  | `knumv` |  |  |
| `WrntyCurrencyCode` |  | |  | `v_crncy` |  |  |
| `WrntyPriceExchangeRateDate` |  | |  | `prsdt` |  |  |
| `WrntyExchangeRateForPrice` |  | |  | `cast(kursk as fis_absolute_exchangerate preserving type)` |  |  |
| `WrntyNumberPrecedingVersion` |  | |  | `prev_version` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `WrntyVersionForReversePosting` |  | |  | `reversal` |  |  |
| `PurchasingOrganization` |  | |  | `ekorg` |  |  |
| `WarrantyVersionPricingStatus` |  | |  | `pricing_ok` |  |  |
| `WrntyVersIsReldForShipgToPart` |  | |  | `compsend` |  |  |
| `WarrantyClaimChangeDateTime` |  | |  | `timstmp` |  |  |
| `WrntyClaimCreationDate` |  | |  | `creadat` |  |  |
| `CreatedByUser` |  | |  | `creaby` |  |  |
| `WrntyClaimChangedDate` |  | |  | `chngdat` |  |  |
| `LastChangedByUser` |  | |  | `chngby` |  |  |
| `WarrantyClaimVersionText` |  | |  | `pntext` |  |  |
| `WarrantyVersionRprstvID` |  | |  | `vers_representativeid` |  |  |
| `WrntyCustClmProcessingStatus` |  | | `_WrntyClaimHeader` | `WrntyCustClmProcessingStatus` |  |  |
| `WrntySuplrClmProcessingStatus` |  | | `_WrntyClaimHeader` | `WrntySuplrClmProcessingStatus` |  |  |
| `_WrntyClaimHeader` | | ✓ | | | | |
| `_Header` | | ✓ | | | | |
| `_WrntyClaimItem` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_DecisionCode` | | ✓ | | | | |
| `_VersionCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimHeader` | `I_WrntyClaimHeader` | [1..1] |
| `_Header` | `I_WrntyClaimHeader` | [1..1] |
| `_WrntyClaimItem` | `I_WrntyClaimItem` | [1..*] |
| `_LastChangedByUser` | `I_UserContactCard` | [1..1] |
| `_CreatedByUser` | `I_UserContactCard` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_DecisionCode` | `I_WrntyClaimDecisionCode` | [1..1] |
| `_VersionCategory` | `I_WarrantyClaimVersionCategory` | [1..1] |
| `_ExtensionWrntyVers` | `E_WarrantyClaimVersion` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: [ '_LastChangedByUser' , '_CreatedByUser']
@EndUserText.label: 'Warranty Claim Version'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel:{
// *******Modernization Task********
    sapObjectNodeType:{
       name: 'WarrantyClaimVersion'},     
// *******Modernization Task********      
    representativeKey: 'WrntyVersionUUID',
    usageType:{
        dataClass       : #TRANSACTIONAL,
        serviceQuality  : #A,
        sizeCategory    : #L
        },
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
//Commented by Jeni becos custom cube CDS view can't be created on top of analytical dimension view
//  modelingPattern: #ANALYTICAL_DIMENSION,
//  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE] 
}
@Analytics.technicalName: 'IWRNTYCLMVRN'
//@Analytics:{
//             dataCategory: #DIMENSION,
//             dataExtraction.enabled: true,
//             internalName:#LOCAL
//           }
@Metadata.allowExtensions:true           
@Metadata.ignorePropagatedAnnotations: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */



define view entity I_WrntyClaimVersion
  as select from pnwtyv
  association [1..1] to I_WrntyClaimHeader       as _WrntyClaimHeader on $projection.WrntyClaimHeaderUUID = _WrntyClaimHeader.WrntyClaimHeaderUUID
  association [1..1] to I_WrntyClaimHeader       as _Header on $projection.WrntyClaimHeaderUUID = _Header.WrntyClaimHeaderUUID
  association [1..*] to I_WrntyClaimItem         as _WrntyClaimItem   on $projection.WrntyVersionUUID = _WrntyClaimItem.WrntyVersionUUID
  association [1..1] to I_UserContactCard            as _LastChangedByUser on  $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [1..1] to I_UserContactCard            as _CreatedByUser     on  $projection.CreatedByUser = _CreatedByUser.ContactCardID
  //association [1..*] to I_WrntyClaimCategoryText as _Text             on $projection.WrntyClaimCategory = _Text.ClaimCategory
//  association [1..*] to I_WrntyClaimVersionCategoryTxt as _Text             on $projection.WarrantyClaimVersionCategory = _Text.WarrantyClaimVersionCategory
  association [0..1] to I_Customer                     as _Customer    on  $projection.WarrantyClaimVersionPartner = _Customer.Customer
  association [1..1] to I_Supplier                   as _Supplier          on $projection.WarrantyClaimVersionPartner = _Supplier.Supplier
  association [0..1] to I_SalesOrganization            as _SalesOrganization         on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_PurchasingOrganization       as _PurchasingOrganization    on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [1..1] to I_WrntyClaimDecisionCode       as _DecisionCode              on  $projection.WrntyDecisionCode = _DecisionCode.WarrantyClaimItemDecisionCode 
  association [1..1] to I_WarrantyClaimVersionCategory as _VersionCategory on $projection.WarrantyClaimVersionCategory = _VersionCategory.WarrantyClaimVersionCategory
 association [1..1] to E_WarrantyClaimVersion                 as _ExtensionWrntyVers                    on  $projection.WrntyVersionUUID = _ExtensionWrntyVers.WrntyVersionUUID
{

  key pnguid                                                            as WrntyVersionUUID,
      header_guid                                                       as WrntyClaimHeaderUUID,
      //      pncnt                                                     as WarrantyInternalNumber, to be removed 
      //      pntxcnt                                                   as WrntyComponentNode, to be removed 
      cast(versn    as wty_versn   preserving type )                    as WrntyVersionNumber,
      //kateg                                                             as WrntyClaimCategory, 
      @ObjectModel.foreignKey.association:'_VersionCategory'                                                                        
        kateg                                                           as  WarrantyClaimVersionCategory,
      @ObjectModel.foreignKey.association: '_DecisionCode'  
      v_rejcd                                                           as WrntyDecisionCode,
      //v_parnr                                                           as WrntyPartNumber,
       
      v_parnr                                                           as WarrantyClaimVersionPartner,
      //cast(v_parvw as parvw_unv preserving type )                       as WrntyPartRole ,
      cast(v_parvw as parvw_unv preserving type )                       as WrntyClaimVersionPartnerRole,
      //cast(v_parvw as parvw_unv preserving type )                       as WrntyClaimVersionPartnerRole,
      //      refkt                                                     as WrntyRefType,
      //      refnr                                                     as WarrantyReferenceNumber,
      //aktiv                                                             as WrntyActiveVersion,
      @Semantics.booleanIndicator :true
      aktiv                                                             as WarrantyClaimVersionIsActive,
      fkdat                                                             as WrntyBillingDocumentDate,
      knumv                                                             as WrntyDocumentCondition,
      v_crncy                                                           as WrntyCurrencyCode,
      prsdt                                                             as WrntyPriceExchangeRateDate,
      cast(kursk  as fis_absolute_exchangerate preserving type)         as WrntyExchangeRateForPrice,
      //      v_log_handle                                              as WrntyApplLogHandle,
      //      log_hdl_dfct                                              as WrntyApplLogHandleDefect,
      prev_version                                                      as WrntyNumberPrecedingVersion,
      // WrntyClmPrecedingVersionNmbr
      @ObjectModel.foreignKey.association:'_SalesOrganization'
      vkorg                                                             as SalesOrganization,
      vtweg                                                             as DistributionChannel,
      spart                                                             as Division,
      //      v_mdocm                                                   as WrntyMeasurementDocumentNumber,
      reversal                                                          as WrntyVersionForReversePosting,
      //      endvn                                                     as WrntyClaimIsFinalVersion,
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      ekorg                                                             as PurchasingOrganization,
      //      sdvbeln                                                   as WrntyContractDocumentNumber,
      //      sdposnr                                                   as WrntyContractItemNumber,
      //      refdt_vers                                                as WrntyReferenceVersionDate,
      // v_mganr                                                   as WrntyMasterVersions,
      //      v_gwldt                                                   as WrntyAssignedStartDate,
//      result_out_mwtyv                                                  as WrntyResultObjCheckCustomer, //to be commented 
//      result_in_mwtyv                                                   as WrntySupplierCheckResult,   // to be commneted 
      //v_dummy                                                   as WrntyDummyFunc,
      //pricing_ok                                                        as WrntyPricingStatus,
      pricing_ok                                                        as WarrantyVersionPricingStatus,
      
      //      new_version                                               as WrntyNewVersionStatus,
      //compsend                                                          as WrntyRelVersionShipPartner,
      @Semantics.booleanIndicator :true
      compsend                                                          as WrntyVersIsReldForShipgToPart,
      //WrntyVersIsReldForShipgToPart
      //timstmp                                                           as ValidToDateTime,
      timstmp                                                           as WarrantyClaimChangeDateTime,
      creadat                                                           as WrntyClaimCreationDate,
      @ObjectModel.foreignKey.association:'_CreatedByUser'
      creaby                                                            as CreatedByUser,
      chngdat                                                           as WrntyClaimChangedDate,
      @ObjectModel.foreignKey.association: '_LastChangedByUser'
      chngby                                                            as LastChangedByUser,
      //pntext                                                            as WrntyOfVersionText,
      pntext                                                            as WarrantyClaimVersionText,
      vers_representativeid                                             as WarrantyVersionRprstvID,
      _WrntyClaimHeader.WrntyCustClmProcessingStatus,
      _WrntyClaimHeader.WrntySuplrClmProcessingStatus,
     // WarrantyClaimVersionText
      //_Text[1:Language=$session.system_language].WrntyClaimCategoryText as WrntyClaimCategoryText,
//      _Text[1:Language=$session.system_language].WrntyClaimVersionCategoryText as WrntyClaimVersionCategoryText,
      _WrntyClaimHeader,
      _Header,
      _WrntyClaimItem,
      _LastChangedByUser,
      _CreatedByUser,
      _Customer,
      _Supplier,
      _SalesOrganization,
      _PurchasingOrganization,
      _DecisionCode,
     // _Extension,
      _VersionCategory
}
```
