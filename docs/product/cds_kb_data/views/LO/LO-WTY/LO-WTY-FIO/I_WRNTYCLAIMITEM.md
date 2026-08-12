---
name: I_WRNTYCLAIMITEM
description: "Wrntyclaimitem"
app_component: LO-WTY-FIO
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-WTY
  - interface-view
  - item-level
  - component:LO-WTY-FIO
  - lob:Logistics General
---
# I_WRNTYCLAIMITEM

**Wrntyclaimitem**

| Property | Value |
|---|---|
| App Component | `LO-WTY-FIO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrntyItemUUID` | ✓ | |  | `pvguid` |  |  |
| `WrntyVersionUUID` |  | |  | `version_guid` |  |  |
| `WarrantyClaimItemNumber` |  | |  | `posnr` |  |  |
| `WrntyControllingItemType` |  | |  | `poskt` |  |  |
| `WarrantyItemType` |  | |  | `poskt_cust` |  |  |
| `WarrantyClaimItemDefectCode` |  | |  | `defct` |  |  |
| `WarrantyItemKey` |  | |  | `itmno` |  |  |
| `WrntyClaimQuantity` |  | |  | `quant` |  |  |
| `QuantityUnit` |  | |  | `meinh` |  |  |
| `WrntyCurrencyCode` |  | |  | `cast (_WrntyClaimVersion.WrntyCurrencyCode as wty_crncy preserving type )` |  |  |
| `WarrantyClaimItemDecisionCode` |  | |  | `rejcd` |  |  |
| `WrntyReturnPartsFrmCustStatus` |  | |  | `retpa` |  |  |
| `WrntyClmPartsIsCausingDamage` |  | |  | `causp` |  |  |
| `WrntyClaimItemShortText` |  | |  | `pvtxt` |  |  |
| `WrntyClaimantClaimAmount` |  | |  | `valic` |  |  |
| `WrntyReimburserClaimAmount` |  | |  | `valov` |  |  |
| `WrntyReimburseApprovedAmount` |  | |  | `valiv` |  |  |
| `WrntyClaimedApprovedAmount` |  | |  | `valoc` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `WrntyReturnPartsToSuplrStatus` |  | |  | `retpa_v` |  |  |
| `WarrantyClaimItemTaxCode` |  | |  | `tax_code` |  |  |
| `WrntyItemCustRetPartsDate` |  | |  | `retpa_date` |  |  |
| `WrntyItemSuplrRetPartsDate` |  | |  | `retpa_date_v` |  |  |
| `WrntyItmCustRetPartsDelivDate` |  | |  | `retpa_delv_date` |  |  |
| `WrntyItmSuplrRetPartsDelivDate` |  | |  | `retpa_delv_date_v` |  |  |
| `WarrantyClaimCatalog` |  | |  | `wrntycatalog_id` |  |  |
| `WarrantyClaimItemPricingStatus` |  | |  | `pricing_ok` |  |  |
| `WarrantyClaimChangeDateTime` |  | |  | `timstmp` |  |  |
| `WrntyClaimCreationDate` |  | |  | `creadat` |  |  |
| `CreatedByUser` |  | |  | `creaby` |  |  |
| `WrntyClaimChangedDate` |  | |  | `chngdat` |  |  |
| `LastChangedByUser` |  | |  | `chngby` |  |  |
| `WrntyClaimHeaderUUID` |  | | `_WrntyClaimVersion` | `WrntyClaimHeaderUUID` |  |  |
| `WrntyPriceExchangeRateDate` |  | | `_WrntyClaimVersion` | `WrntyPriceExchangeRateDate` |  |  |
| `WrntyDocumentCondition` |  | | `_WrntyClaimVersion` | `WrntyDocumentCondition` |  |  |
| `WrntyClmItmDfltCndnType` |  | |  | `case poskt when 'MAT' then case _WrntyClaimVersion.WarrantyClaimVersionCategory when 'IV' then _DfltCndnType.MatlItmCndnTypeInbFrmRmbsr when 'OV' then _DfltCndnType.MatlItmCndnTypeOutbToRmbsr when 'IC' then _DfltCndnType.MatlItmCndnTypeInbFrmClmnt when 'OC' then _DfltCndnType.MatlItmCndnTypeOutbToClmnt else'' end when 'FR' then case _WrntyClaimVersion.WarrantyClaimVersionCategory when 'IV' then _DfltCndnType.LabItmCndnTypeInbFrmRmbsr when 'OV' then _DfltCndnType.LabItmCndnTypeOutbToRmbsr when 'IC' then _DfltCndnType.LabItmCndnTypeForInbFrmClmnt when 'OC' then _DfltCndnType.LabItmCndnTypeOutbToClmnt else'' end when 'SUBL' then case _WrntyClaimVersion.WarrantyClaimVersionCategory when 'IV' then _DfltCndnType.ExtItmCndnTypeInbFrmRmbsr when 'OV' then _DfltCndnType.ExtItmCndnTypeOutbToRmbsr when 'IC' then _DfltCndnType.ExtItmCndnTypeInbFrmClmnt when 'OC' then _DfltCndnType.ExtItmCndnTypeOutbToClmnt else'' end else '' end` |  |  |
| `_WrntyClaimVersion` | | ✓ | | | | |
| `_LastChangedByUser` | | ✓ | | | | |
| `_DfltCndnType` | | ✓ | | | | |
| `_ItemType` | | ✓ | | | | |
| `_ItemCtrlgType` | | ✓ | | | | |
| `_DecisionCode` | | ✓ | | | | |
| `_SupRetPartsSts` | | ✓ | | | | |
| `_CustRetPartsSts` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_WrntyClaimVersion` | `I_WrntyClaimVersion` | [1..1] |
| `_LastChangedByUser` | `I_UserContactCard` | [1..1] |
| `_DfltCndnType` | `I_WrntyClaimItemDfltCndnType` | [1..1] |
| `_ItemType` | `I_WrntyClaimItemType` | [1..1] |
| `_ItemCtrlgType` | `I_WrntyClmControllingItemType` | [1..1] |
| `_DecisionCode` | `I_WrntyClaimDecisionCode` | [1..1] |
| `_SupRetPartsSts` | `I_WarrantyReturnedPartsStatus` | [1..1] |
| `_CustRetPartsSts` | `I_WarrantyReturnedPartsStatus` | [1..1] |
| `_Material` | `I_Material` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_ExtensionWrntyItem` | `E_WarrantyClaimItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AccessControl.privilegedAssociations: [ '_LastChangedByUser' ] //, '_CreatedByUser'
@EndUserText.label: 'Warranty Claim Item'
@VDM.viewType: #BASIC // *******Modernization Task********
//@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
//S *******Modernization Task********
   sapObjectNodeType:{
      name: 'WarrantyClaimItem'}, 
//E *******Modernization Task********
   representativeKey: 'WrntyItemUUID',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     //serviceQuality: #C,//*******Modernization Task********
     serviceQuality: #B,
     sizeCategory:   #L
   },
//Commented by Jeni becos custom cube CDS view can't be created on top of analytical dimension view
//   modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
//  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]  
}
@Analytics.technicalName: 'IWRNTYCLMITM'
//@Analytics:{
//             dataCategory: #DIMENSION,
//             dataExtraction.enabled: true
//          }
//@Analytics.internalName:#LOCAL
@Metadata.allowExtensions:true           
@Metadata.ignorePropagatedAnnotations: true
define view entity I_WrntyClaimItem
  as select from pvwty
  association [1..1] to I_WrntyClaimVersion as _WrntyClaimVersion on $projection.WrntyVersionUUID = _WrntyClaimVersion.WrntyVersionUUID
  association [1..1] to I_UserContactCard            as _LastChangedByUser             on  $projection.LastChangedByUser = _LastChangedByUser.ContactCardID
  association [1..1] to I_WrntyClaimItemDfltCndnType as _DfltCndnType                  on $projection.WrntyControllingItemType = _DfltCndnType.WrntyControllingItemType
  association [1..1] to I_WrntyClaimItemType         as _ItemType                      on $projection.WarrantyItemType = _ItemType.WarrantyItemType
  association [1..1] to I_WrntyClmControllingItemType   as _ItemCtrlgType            on $projection.WrntyControllingItemType = _ItemCtrlgType.WrntyControllingItemType
  association [1..1] to I_WrntyClaimDecisionCode as _DecisionCode                     on $projection.WarrantyClaimItemDecisionCode = _DecisionCode.WarrantyClaimItemDecisionCode
  association [1..1] to I_WarrantyReturnedPartsStatus as _SupRetPartsSts             on $projection.WrntyReturnPartsToSuplrStatus = _SupRetPartsSts.WrntySupplierReturnParts
                                                                                      and _SupRetPartsSts.WrntyClaimReturnedPartner  = 'V'    
  association [1..1] to I_WarrantyReturnedPartsStatus as _CustRetPartsSts             on $projection.WrntyReturnPartsFrmCustStatus = _CustRetPartsSts.WrntySupplierReturnParts
                                                                                      and _CustRetPartsSts.WrntyClaimReturnedPartner = 'C'
  association [0..1] to I_Material                as _Material                      on $projection.Material = _Material.Material
  association [1..1] to I_UnitOfMeasure           as _UnitOfMeasure                 on $projection.QuantityUnit = _UnitOfMeasure.UnitOfMeasure
  association [1..1] to E_WarrantyClaimItem            as _ExtensionWrntyItem                on  $projection.WrntyItemUUID = _ExtensionWrntyItem.WrntyItemUUID 
{
  key pvguid                                                                    as WrntyItemUUID,
//  key pvcnt                                                                     as WarrantyInternalNumber,
      version_guid                                                              as WrntyVersionUUID,
      posnr                                                                     as WarrantyClaimItemNumber,
                                                                                  //WarrantyClaimItemNumber
      @ObjectModel.foreignKey.association: '_ItemCtrlgType'                                                                         
      poskt                                                                     as WrntyControllingItemType,
      @ObjectModel.foreignKey.association: '_ItemType'
      poskt_cust                                                                as WarrantyItemType,
      defct                                                                     as WarrantyClaimItemDefectCode,
//      itmno                                                                     as WrntyItemNumber, 

      itmno                                                                     as WarrantyItemKey, 
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      quant                                                                     as WrntyClaimQuantity,
      @ObjectModel.foreignKey.association:'_UnitOfMeasure'
      meinh                                                                     as QuantityUnit,
      cast (_WrntyClaimVersion.WrntyCurrencyCode as wty_crncy preserving type ) as WrntyCurrencyCode,
//      @Semantics.amount.currencyCode: 'WrntyCurrencyCode'
//      contr                                                                     as WrntyContributionAmount,
//      cntty                                                                     as ConditionCalculationTypeName,
@ObjectModel.foreignKey.association: '_DecisionCode'
      rejcd                                                                     as WarrantyClaimItemDecisionCode,// WarrantyClaimItemDecisionCode 
      //refkt                                                                     as WrntyRefType, // to be commented 
      //refnr                                                                     as WarrantyReferenceNumber,// to be commented 
//      @ObjectModel.foreignKey.association:'_CustRetPartsSts'
      retpa                                                                     as WrntyReturnPartsFrmCustStatus,
      //causp                                                                     as WrntyCauseDamage, 
      @Semantics.booleanIndicator: true
      causp                                                                       as WrntyClmPartsIsCausingDamage,
      pvtxt                                                                     as WrntyClaimItemShortText,//WrntyClaimItemShortText
      @Semantics.amount.currencyCode: 'WrntyCurrencyCode'
      valic                                                                     as WrntyClaimantClaimAmount,
      @Semantics.amount.currencyCode: 'WrntyCurrencyCode'
      valov                                                                     as WrntyReimburserClaimAmount,
      @Semantics.amount.currencyCode: 'WrntyCurrencyCode'
      valiv                                                                     as WrntyReimburseApprovedAmount,
      @Semantics.amount.currencyCode: 'WrntyCurrencyCode'
      valoc                                                                     as WrntyClaimedApprovedAmount,
      @ObjectModel.foreignKey.association:'_Material'
      matnr                                                                     as Material,
//      mdocm                                                                     as WrntyMeasurementDocumentNumber,
//      log_handle                                                                as WrntyMessageHandle,
//      herst                                                                     as WrntyPartNumber,
//      split                                                                     as WrntyVersionSplit,
      //retpa_v                                                                   as WrntySupplierReturnParts,
//      @ObjectModel.foreignKey.association:'_SupRetPartsSts' 
      retpa_v                                                                     as WrntyReturnPartsToSuplrStatus, 
      tax_code                                                                  as WarrantyClaimItemTaxCode,
                                                                                   //WarrantyClaimItemTaxCode
                                                                                   
//      txjcd1                                                                    as WrntyTaxJurisdictionCode1,
//      txjcd2                                                                    as WrntyTaxJurisdictionCode2,
//      txjcd3                                                                    as WrntyTaxJurisdictionCode3,
//      result_out_mwtyi                                                          as WrntyResultCheckCustomer,
//      result_in_mwtyi                                                           as WrntySupplierCheckResult,
      
      //refdt_refnr                                                               as WrntyClaimReferenceDate, // to be commented 
//      i_relob                                                                   as WrntyItemInternalObjectNumber,
//      i_relob_ext                                                               as WrntyItemExternalObjectNumber,
//      i_relty                                                                   as WrntyTypeObject,
//      i_reldt                                                                   as WrntyObjectDate,
      //i_serno                                                                   as WrntySerialNumber, // to be commented 
//      i_mganr                                                                   as WrntyMaster,
//      i_gwldt                                                                   as WrntyMasterStartDate,
      //retpa_date                                                                as WrntyReturnedClaimantDate,
      //retpa_date_v                                                              as WrntyReturnReimburseDate,
      retpa_date                                                                as WrntyItemCustRetPartsDate,
      retpa_date_v                                                              as WrntyItemSuplrRetPartsDate,
      retpa_delv_date                                                           as WrntyItmCustRetPartsDelivDate,
      retpa_delv_date_v                                                         as WrntyItmSuplrRetPartsDelivDate,
       wrntycatalog_id                                                          as WarrantyClaimCatalog,
//        i_dummy                                                                   as WrntyDummyFunc,
      pricing_ok                                                                as WarrantyClaimItemPricingStatus,
                                                                                     // WarrantyClaimItemPricingStatus
//      new_item                                                                  as WrntyNewPricingStatus,
      timstmp                                                                   as WarrantyClaimChangeDateTime,// to be chnaged 
      creadat                                                                   as WrntyClaimCreationDate,
      creaby                                                                    as CreatedByUser,
      chngdat                                                                   as WrntyClaimChangedDate,
      chngby                                                                    as LastChangedByUser,
      
      _WrntyClaimVersion.WrntyClaimHeaderUUID                                   as WrntyClaimHeaderUUID,
      //_WrntyClaimVersion.SalesOrganization                                      as SalesOrganization,
      _WrntyClaimVersion.WrntyPriceExchangeRateDate                             as WrntyPriceExchangeRateDate,
       _WrntyClaimVersion.WrntyDocumentCondition,
       // _WrntyClaimVersion.WrntyClaimCategory,
      // _WrntyClaimVersion.WarrantyClaimVersionCategory,
         case poskt
         when 'MAT' then
         case _WrntyClaimVersion.WarrantyClaimVersionCategory
         when 'IV' then _DfltCndnType.MatlItmCndnTypeInbFrmRmbsr
         when 'OV' then _DfltCndnType.MatlItmCndnTypeOutbToRmbsr
         when 'IC' then _DfltCndnType.MatlItmCndnTypeInbFrmClmnt
         when 'OC' then _DfltCndnType.MatlItmCndnTypeOutbToClmnt
         else''
         end
         when 'FR' then
         case _WrntyClaimVersion.WarrantyClaimVersionCategory
         when 'IV' then _DfltCndnType.LabItmCndnTypeInbFrmRmbsr
         when 'OV' then _DfltCndnType.LabItmCndnTypeOutbToRmbsr
         when 'IC' then _DfltCndnType.LabItmCndnTypeForInbFrmClmnt
         when 'OC' then _DfltCndnType.LabItmCndnTypeOutbToClmnt
         else''
         end
         when 'SUBL' then
         case _WrntyClaimVersion.WarrantyClaimVersionCategory
         when 'IV' then _DfltCndnType.ExtItmCndnTypeInbFrmRmbsr
         when 'OV' then _DfltCndnType.ExtItmCndnTypeOutbToRmbsr
         when 'IC' then _DfltCndnType.ExtItmCndnTypeInbFrmClmnt
         when 'OC' then _DfltCndnType.ExtItmCndnTypeOutbToClmnt
         else''
         end
         else ''
         end as WrntyClmItmDfltCndnType,
//         _ItemTypeVisibility.WrntyMaterialItemIsHidden,
//         _ItemTypeVisibility.WrntyItemIsHidden,
      _WrntyClaimVersion,
      _LastChangedByUser,
      _DfltCndnType,
      _ItemType,
    _ItemCtrlgType,
    _DecisionCode,
    _SupRetPartsSts,
    _CustRetPartsSts,
    _Material,
  //  _Extension,
    _UnitOfMeasure
    

}
```
