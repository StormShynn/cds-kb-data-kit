---
name: C_SUPPLIERQUOTATIONDEX
description: Supplierquotationdex
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - supplier
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
  - bo:Supplier
---
# C_SUPPLIERQUOTATIONDEX

**Supplierquotationdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SupplierQuotation` | ✓ | |  |  |
| `CompanyCode` |  | |  |  |
| `PurchasingDocumentCategory` |  | |  |  |
| `PurchasingDocumentType` |  | |  |  |
| `Supplier` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDate` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `Language` |  | |  |  |
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
| `PricingProcedure` |  | |  |  |
| `PricingDocument` |  | |  | `PurchasingDocumentCondition` |
| `PurchasingOrganization` |  | |  |  |
| `PurchasingGroup` |  | |  |  |
| `PurchasingDocumentOrderDate` |  | |  |  |
| `RequestForQuotation` |  | |  |  |
| `SupplierQuotationExternalID` |  | |  |  |
| `QuotationSubmissionDate` |  | |  |  |
| `QuotationLatestSubmissionDate` |  | |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |
| `ExchangeRate` |  | |  |  |
| `ExchangeRateIsFixed` |  | |  |  |
| `QtnLifecycleStatus` |  | |  | `QTNLifecycleStatus` |
| `FollowOnDocumentCategory` |  | |  |  |
| `PurgDocFollowOnDocumentType` |  | |  | `FollowOnDocumentType` |
| `IsEndOfPurposeBlocked` |  | |  |  |
| `_RequestForQuotation` | | ✓ | | |
| `_CompanyCode` | | ✓ | | |
| `_PurchasingDocumentCategory` | | ✓ | | |
| `_PurchasingDocumentType` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_Language` | | ✓ | | |
| `_Currency` | | ✓ | | |
| `_IncotermsClassification` | | ✓ | | |
| `_IncotermsVersion` | | ✓ | | |
| `_PaymentTerms` | | ✓ | | |
| `_PurchasingOrganization` | | ✓ | | |
| `_PurchasingGroup` | | ✓ | | |
| `_FollowOnDocumentCategory` | | ✓ | | |
| `_PurgDocFollowOnDocumentType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SupplierQuotationExtension` | `E_PurchasingDocument` | [1..1] |
| `_RequestForQuotation` | `C_RequestForQuotationDEX` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_FollowOnDocumentCategory` | `I_PurchasingDocumentCategory` | [0..1] |
| `_PurgDocFollowOnDocumentType` | `I_PurchasingDocumentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName             : 'CMMSUPLRSQTNDEX'
@AbapCatalog.compiler.compareFilter     : true
@AccessControl:{ authorizationCheck     : #MANDATORY,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #M,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ],
                modelingPattern        : #ANALYTICAL_FACT
              }

@VDM.viewType                           : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations   : true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekko', role: #MAIN,
                        viewElement     : ['SupplierQuotation' ],
                        tableElement    : ['ebeln' ]
                      }
                    ]
        }
    }
}
@EndUserText.label: 'Data Extraction for Supplier Quotation'
@ObjectModel.sapObjectNodeType.name: 'SupplierQuotation'
define view C_SupplierQuotationDEX
  as select from I_SupplierQuotation_Api01 as SupplierQuotation
  ----Extension Association
  association [1..1] to E_PurchasingDocument as _SupplierQuotationExtension on $projection.SupplierQuotation = _SupplierQuotationExtension.PurchasingDocument
  
  association [1..1] to C_RequestForQuotationDEX     as _RequestForQuotation         on  $projection.RequestForQuotation = _RequestForQuotation.RequestForQuotation
  
  association [0..1] to I_CompanyCode                as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory  on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  
  association [1..1] to I_PurchasingDocumentType     as _PurchasingDocumentType      on  $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                     and $projection.PurchasingDocumentType     = _PurchasingDocumentType.PurchasingDocumentType
                                                                                     
  association [1..1] to I_Supplier                   as _Supplier                    on  $projection.Supplier = _Supplier.Supplier
  
  association [0..1] to I_Language                   as _Language                    on  $projection.Language = _Language.Language
  
  association [1..1] to I_Currency                   as _Currency                    on  $projection.DocumentCurrency = _Currency.Currency
  
  association [0..1] to I_IncotermsClassification    as _IncotermsClassification     on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  
  association [0..1] to I_IncotermsVersion           as _IncotermsVersion            on  $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  
  association [0..1] to I_PaymentTerms               as _PaymentTerms                on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms
  
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization      on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  
  association [1..1] to I_PurchasingGroup            as _PurchasingGroup             on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [0..1] to I_PurchasingDocumentCategory as _FollowOnDocumentCategory    on  $projection.FollowOnDocumentCategory = _FollowOnDocumentCategory.PurchasingDocumentCategory
  
  association [0..1] to I_PurchasingDocumentType     as _PurgDocFollowOnDocumentType on  $projection.FollowOnDocumentCategory    = _PurgDocFollowOnDocumentType.PurchasingDocumentCategory
                                                                                     and $projection.PurgDocFollowOnDocumentType = _PurgDocFollowOnDocumentType.PurchasingDocumentType

{
  key SupplierQuotation.SupplierQuotation,
  
      @ObjectModel.foreignKey.association: '_CompanyCode'
      SupplierQuotation.CompanyCode,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      SupplierQuotation.PurchasingDocumentCategory,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      SupplierQuotation.PurchasingDocumentType,
      
      @ObjectModel.foreignKey.association: '_Supplier'
      SupplierQuotation.Supplier,
      
      @Semantics.user.createdBy: true
      SupplierQuotation.CreatedByUser,
      
      @Semantics.systemDate.createdAt: true
      SupplierQuotation.CreationDate,
      
      @Semantics.systemDateTime.lastChangedAt: true
      SupplierQuotation.LastChangeDateTime,
      
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      SupplierQuotation.Language,
      
      @ObjectModel.foreignKey.association: '_Currency'
      SupplierQuotation.DocumentCurrency,
      
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      SupplierQuotation.IncotermsClassification,
      
      SupplierQuotation.IncotermsTransferLocation,
      
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      SupplierQuotation.IncotermsVersion,
      
      SupplierQuotation.IncotermsLocation1,
      SupplierQuotation.IncotermsLocation2,
      
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      SupplierQuotation.PaymentTerms,
      
      SupplierQuotation.CashDiscount1Days,
      SupplierQuotation.CashDiscount2Days,
      SupplierQuotation.CashDiscount1Percent,
      SupplierQuotation.CashDiscount2Percent,
      SupplierQuotation.NetPaymentDays,
      SupplierQuotation.PricingProcedure,
      SupplierQuotation.PurchasingDocumentCondition as PricingDocument,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      SupplierQuotation.PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      SupplierQuotation.PurchasingGroup,
      
      @Semantics.businessDate.at: true
      SupplierQuotation.PurchasingDocumentOrderDate,
      
      @ObjectModel.sapObjectNodeTypeReference: 'RequestForQuotation'
      SupplierQuotation.RequestForQuotation,
      
      SupplierQuotation.SupplierQuotationExternalID,
      
      @Semantics.businessDate.at: true
      SupplierQuotation.QuotationSubmissionDate,
      
      @Semantics.businessDate.at: true
      SupplierQuotation.QuotationLatestSubmissionDate,
      
      SupplierQuotation.BindingPeriodValidityEndDate,
      SupplierQuotation.ExchangeRate,
      SupplierQuotation.ExchangeRateIsFixed,
      SupplierQuotation.QTNLifecycleStatus          as QtnLifecycleStatus,
      
      @ObjectModel.foreignKey.association: '_FollowOnDocumentCategory'
      SupplierQuotation.FollowOnDocumentCategory,
      
      @ObjectModel.foreignKey.association: '_PurgDocFollowOnDocumentType'
      SupplierQuotation.FollowOnDocumentType as PurgDocFollowOnDocumentType,
      
      @Semantics.booleanIndicator: true
      SupplierQuotation.IsEndOfPurposeBlocked,
      
      _RequestForQuotation,
      _CompanyCode,
      _PurchasingDocumentCategory,
      _PurchasingDocumentType,
      _Supplier,
      _Language,
      _Currency,
      _IncotermsClassification,
      _IncotermsVersion,
      _PaymentTerms,
      _PurchasingOrganization,
      _PurchasingGroup,
      _FollowOnDocumentCategory,
      _PurgDocFollowOnDocumentType
}
```
