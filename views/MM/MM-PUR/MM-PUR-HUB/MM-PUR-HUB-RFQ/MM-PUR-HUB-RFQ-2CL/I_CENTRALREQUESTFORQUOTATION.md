---
name: I_CENTRALREQUESTFORQUOTATION
description: Centralrequestforquotation
app_component: MM-PUR-HUB-RFQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-HUB
  - interface-view
  - component:MM-PUR-HUB-RFQ-2CL
  - lob:Sourcing & Procurement
---
# I_CENTRALREQUESTFORQUOTATION

**Centralrequestforquotation**

| Property | Value |
|---|---|
| App Component | `MM-PUR-HUB-RFQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CentralRequestForQuotation` | ✓ | |  |  |
| `CompanyCode` |  | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentType` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `Language` |  | |  |  |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `DocumentCurrency` |  | |  |  |
| `IncotermsClassification` |  | |  |  |
| `IncotermsTransferLocation` |  | |  |  |
| `IncotermsVersion` |  | |  |  |
| `IncotermsLocation1` |  | |  |  |
| `IncotermsLocation2` |  | |  |  |
| `PaymentTerms` |  | |  |  |
| `CashDiscount1Days` |  | |  |  |
| `CashDiscount2Days` |  | |  |  |
| `CashDiscount1Percent` |  | |  |  |
| `CashDiscount2Percent` |  | |  |  |
| `NetPaymentDays` |  | |  |  |
| `ValidityStartDate` |  | |  |  |
| `ValidityEndDate` |  | |  |  |
| `RFQPublishingDate` |  | |  |  |
| `QuotationLatestSubmissionDate` |  | |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |
| `TargetAmount` |  | |  |  |
| `RFQLifecycleStatus` |  | |  |  |
| `RequestForQuotationName` |  | |  |  |
| `QuotationEarliestSubmsnDate` |  | |  |  |
| `LatestRegistrationDate` |  | |  |  |
| `CorrespncInternalReference` |  | |  |  |
| `FollowOnDocumentCategory` |  | |  |  |
| `FollowOnDocumentType` |  | |  |  |
| `PurgDocFollowOnDocumentType` |  | |  |  |
| `PurchasingDocumentDeletionCode` |  | |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |
| `PurContrValidityStartDate` |  | |  |  |
| `PurContrValidityEndDate` |  | |  |  |
| `_CentralReqForQuotationItem` | | ✓ | | |
| `_CntrlReqForQuotationBidder` | | ✓ | | |
| `_FollowOnDocumentType` | | ✓ | | |
| `_FollowOnDocumentCategory` | | ✓ | | |
| `_CentralSupplierQuotation` | | ✓ | | |
| `_PurchasingDocumentType` | | ✓ | | |
| `_PurchasingDocumentCategory` | | ✓ | | |
| `_CreatedByUser` | | ✓ | | |
| `_IncotermsClassification` | | ✓ | | |
| `_IncotermsVersion` | | ✓ | | |
| `_DocumentCurrency` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_PurchasingGroup` | | ✓ | | |
| `_PurchasingOrganization` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CentralReqForQuotationItem` | `I_CentralReqForQuotationItem` | [1..*] |
| `_CntrlReqForQuotationBidder` | `I_CntrlReqForQuotationBidder` | [1..*] |
| `_FollowOnDocumentType` | `I_PurchasingDocumentType` | [0..1] |
| `_FollowOnDocumentCategory` | `I_PurchasingDocumentCategory` | [0..1] |
| `_CentralSupplierQuotation` | `I_CentralSupplierQuotation` | [0..*] |
| `_CentralReqForQuotationExtn` | `E_PurchasingDocument` | [1..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@EndUserText.label: 'Central Request For Quotation Header'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.sqlViewName: 'ICNTRLRFQHDR'
//@AccessControl.privilegedAssociations: [ '_CreatedByUser' ]

@ObjectModel:{ representativeKey: 'CentralRequestForQuotation',
               semanticKey: 'CentralRequestForQuotation',
               usageType.dataClass: #TRANSACTIONAL,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #M }

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_CentralRequestForQuotation
  as select from R_CentralRequestForQuotation

    association [1..*] to I_CentralReqForQuotationItem as _CentralReqForQuotationItem on  $projection.CentralRequestForQuotation = _CentralReqForQuotationItem.CentralRequestForQuotation
  
    association [1..*] to I_CntrlReqForQuotationBidder as _CntrlReqForQuotationBidder on  $projection.CentralRequestForQuotation = _CntrlReqForQuotationBidder.CentralRequestForQuotation
   
    association [0..1] to I_PurchasingDocumentType     as _FollowOnDocumentType       on  $projection.PurchasingDocumentCategory = _FollowOnDocumentType.PurchasingDocumentCategory
                                                                                      and $projection.PurchasingDocumentType     = _FollowOnDocumentType.PurchasingDocumentType
  
    //association [0..1] to I_RequestForQuotationType    as _RFQType                    on  $projection.PurchasingDocumentType = _RFQType.RFQType
  
    association [0..1] to I_PurchasingDocumentCategory as _FollowOnDocumentCategory   on  $projection.PurchasingDocumentCategory = _FollowOnDocumentCategory.PurchasingDocumentCategory
  
    association [0..*] to I_CentralSupplierQuotation   as _CentralSupplierQuotation   on  $projection.CentralRequestForQuotation = _CentralSupplierQuotation.CentralRequestForQuotation
  
    //association [0..1] to I_RFQLifecycleStatus         as _RFQLifecycleStatus         on  $projection.RFQLifecycleStatus = _RFQLifecycleStatus.RFQLifecycleStatus
    
--Extension Association
  association [1..1] to E_PurchasingDocument           as _CentralReqForQuotationExtn   on _CentralReqForQuotationExtn.PurchasingDocument = $projection.CentralRequestForQuotation
{
  key CentralRequestForQuotation,

      @ObjectModel: { foreignKey.association: '_CompanyCode'}
      CompanyCode,

      @ObjectModel: { foreignKey.association: '_PurchasingDocumentCategory' }
      PurchasingDocumentCategory,

      //@ObjectModel: { foreignKey.association: '_RFQType' }
      PurchasingDocumentType,
      CreatedByUser,
      CreationDate,
      LastChangeDateTime,
      Language,

      @ObjectModel: { foreignKey.association: '_PurchasingOrganization'}
      PurchasingOrganization,

      @ObjectModel: { foreignKey.association: '_PurchasingGroup'}
      PurchasingGroup,

      @Semantics.currencyCode:true
      @ObjectModel: { foreignKey.association: '_DocumentCurrency'}
      DocumentCurrency,

      @ObjectModel: { foreignKey.association: '_IncotermsClassification' }
      IncotermsClassification,
      IncotermsTransferLocation,
      @ObjectModel: {foreignKey.association: '_IncotermsVersion' }
      IncotermsVersion,
      IncotermsLocation1,
      IncotermsLocation2,

      //@ObjectModel.foreignKey.association: '_PaymentTerms'
      PaymentTerms,
      CashDiscount1Days,
      CashDiscount2Days,
      CashDiscount1Percent,
      CashDiscount2Percent,
      NetPaymentDays,
      ValidityStartDate,
      ValidityEndDate,
      RFQPublishingDate,
      QuotationLatestSubmissionDate,
      BindingPeriodValidityEndDate,

      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      TargetAmount,

      //@ObjectModel: {  foreignKey.association: '_RFQLifecycleStatus'}
      RFQLifecycleStatus,
      RequestForQuotationName,
      QuotationEarliestSubmsnDate,
      LatestRegistrationDate,
      CorrespncInternalReference,

      @ObjectModel.foreignKey.association: '_FollowOnDocumentCategory'
      FollowOnDocumentCategory,

      @ObjectModel.foreignKey.association: '_FollowOnDocumentType'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: 'PurgDocFollowOnDocumentType'
      FollowOnDocumentType,
      PurgDocFollowOnDocumentType,
      PurchasingDocumentDeletionCode,

      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,
      PurContrValidityStartDate,
      PurContrValidityEndDate,

      /* Associations */
      _CentralReqForQuotationItem,
      _CntrlReqForQuotationBidder,
      _PurchasingDocumentType,
      _PurchasingDocumentCategory,
      //_RFQType,
      //_PaymentTerms,
      _CreatedByUser,
      _IncotermsClassification,
      _IncotermsVersion,
      _DocumentCurrency,
      _CompanyCode,
      _PurchasingGroup,
      _PurchasingOrganization,
      _CentralSupplierQuotation,
      _Language,
      //_RFQLifecycleStatus,
      _FollowOnDocumentCategory,
      _FollowOnDocumentType
}
where
  PurchasingDocumentCategory = 'N'
```
