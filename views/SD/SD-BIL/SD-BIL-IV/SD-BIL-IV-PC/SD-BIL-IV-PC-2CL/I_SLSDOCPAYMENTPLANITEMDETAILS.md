---
name: I_SLSDOCPAYMENTPLANITEMDETAILS
description: Slsdocpaymentplanitemdetails
app_component: SD-BIL-IV-PC-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - payment
  - item-level
  - component:SD-BIL-IV-PC-2CL
  - lob:Sales & Distribution
---
# I_SLSDOCPAYMENTPLANITEMDETAILS

**Slsdocpaymentplanitemdetails**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-PC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |
| `PaymentPlanItem` | ✓ | |  |  |
| `PaymentPlan` |  | |  |  |
| `SalesDocumentType` |  | |  |  |
| `OrganizationDivision` |  | |  |  |
| `SalesOrganization` |  | |  |  |
| `DistributionChannel` |  | |  |  |
| `SDDocumentCategory` |  | |  |  |
| `ElectronicPaymentType` |  | |  |  |
| `ElectronicPayment` |  | |  |  |
| `ElectronicPaymentSequence` |  | |  |  |
| `EPaytValidityStartDate` |  | |  |  |
| `EPaytValidityEndDate` |  | |  |  |
| `ElectronicPaymentHolderName` |  | |  |  |
| `ElectronicPaymentEntryMode` |  | |  |  |
| `AuthorizedAmountInAuthznCrcy` |  | |  |  |
| `AuthorizationCurrency` |  | |  |  |
| `AuthorizationByDigitalPaytSrvc` |  | |  |  |
| `AuthorizationByAcquirer` |  | |  |  |
| `AuthorizationDate` |  | |  |  |
| `AuthorizationTime` |  | |  |  |
| `MerchantByClearingHouse` |  | |  |  |
| `ElectronicPaymentIsSettled` |  | |  |  |
| `ElectronicPaymentTerminal` |  | |  |  |
| `EPaytPaymentSettlement` |  | |  |  |
| `EPaytByDigitalPaymentSrvc` |  | |  |  |
| `PaymentServiceProvider` |  | |  |  |
| `PaymentByPaymentServicePrvdr` |  | |  |  |
| `TransactionByPaytSrvcPrvdr` |  | |  |  |
| `PaymentCardAuthznRelationID` |  | |  |  |
| `ElectronicPaymentCallStatus` |  | |  |  |
| `EPaytAuthorizationResult` |  | |  |  |
| `EPaytToBeAuthorizedAmount` |  | |  |  |
| `EPaytAuthorizationIsExpired` |  | |  |  |
| `EPaytAmountIsChanged` |  | |  |  |
| `PreauthorizationIsRequested` |  | |  |  |
| `AuthorizationStatusName` |  | |  |  |
| `MaximumToBeAuthorizedAmount` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `PaytPlnForAuthorizationItem` |  | |  |  |
| `PaytPlnItmForAuthorizationItem` |  | |  |  |
| `PaymentPlanAuthorizationItem` |  | |  |  |
| `PaymentPlanRelatedBillgStatus` |  | |  |  |
| `EPaytAuthorizationType` |  | |  |  |
| `_SalesDocument` | | ✓ | | |
| `_SalesOrganization` | | ✓ | | |
| `_DistributionChannel` | | ✓ | | |
| `_SalesDocumentType` | | ✓ | | |
| `_OrganizationDivision` | | ✓ | | |
| `_SDDocumentCategory` | | ✓ | | |
| `_PaymentCardType` | | ✓ | | |
| `_AuthorizationCurrency` | | ✓ | | |
| `_PaymentCardMerchant` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesDocument` | `I_SalesDocument` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ISDPAYTPLANITEM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API}

@ObjectModel: {
   representativeKey: 'PaymentPlanItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #M
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
}
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Sales Document Payment Plan Item Details'
@Metadata.ignorePropagatedAnnotations: true

define view I_SlsDocPaymentPlanItemDetails
  as select from I_PaymentPlanItemDetails as PaymentItemDetails

    inner join   I_SalesDocumentBasic     as SalesDocument on PaymentItemDetails.PaymentPlan = SalesDocument.PaymentPlan
  
  association [1..1] to I_SalesDocument               as _SalesDocument                  on $projection.SalesDocument = _SalesDocument.SalesDocument

{
      // Key
      @ObjectModel.foreignKey.association: '_SalesDocument'
  key SalesDocument.SalesDocument,
  key PaymentPlanItem,
      PaymentItemDetails.PaymentPlan,

      //Sales Organization
      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      SalesDocument.SalesDocumentType,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      SalesDocument.OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesDocument.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SalesDocument.DistributionChannel,
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      SalesDocument.SDDocumentCategory,

      // Payment Card     
      @ObjectModel.foreignKey.association: '_PaymentCardType'
      ElectronicPaymentType,
      ElectronicPayment,
      ElectronicPaymentSequence,
      EPaytValidityStartDate,
      EPaytValidityEndDate,
      ElectronicPaymentHolderName,
      ElectronicPaymentEntryMode,

      // Amount
      @Semantics.amount.currencyCode: 'AuthorizationCurrency'
      AuthorizedAmountInAuthznCrcy,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_AuthorizationCurrency'
      AuthorizationCurrency,

      // Authorization
      AuthorizationByDigitalPaytSrvc,
      AuthorizationByAcquirer,
      AuthorizationDate,
      AuthorizationTime,
 
      // Clearing House
      @ObjectModel.foreignKey.association: '_PaymentCardMerchant'
      MerchantByClearingHouse,
      ElectronicPaymentIsSettled,
      ElectronicPaymentTerminal,
      EPaytPaymentSettlement,
      // Token
      EPaytByDigitalPaymentSrvc,
      PaymentServiceProvider,
      PaymentByPaymentServicePrvdr,
      TransactionByPaytSrvcPrvdr,
      PaymentCardAuthznRelationID,

      //Only for SD
      ElectronicPaymentCallStatus,
      EPaytAuthorizationResult,
      @Semantics.amount.currencyCode: 'AuthorizationCurrency'
      EPaytToBeAuthorizedAmount,
      EPaytAuthorizationIsExpired,
      EPaytAmountIsChanged,
      PreauthorizationIsRequested,
      AuthorizationStatusName,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      MaximumToBeAuthorizedAmount,
      PaymentItemDetails.TransactionCurrency, 
      PaytPlnForAuthorizationItem,
      PaytPlnItmForAuthorizationItem,
      PaymentPlanAuthorizationItem,

      //Payment Status
      PaymentPlanRelatedBillgStatus,
      //Payment Status Description
      _BillingPlanRelatedBillgSts._Text[1: Language=$session.system_language].BillingPlanRelatedBillgStsDesc,
      
      // Electronic Payment: Authorization type
      EPaytAuthorizationType,
      //Electronic Payment Description
      _ElectronicPaymentAuthznType._Text[1: Language=$session.system_language].EPaytAuthorizationTypeDesc,
            
      //Association
      _SalesDocument,
      _SalesOrganization,
      _DistributionChannel,
      _SalesDocumentType,
      _OrganizationDivision,
      _SDDocumentCategory,
      _PaymentCardType,
      _AuthorizationCurrency,
      _PaymentCardMerchant

}
```
