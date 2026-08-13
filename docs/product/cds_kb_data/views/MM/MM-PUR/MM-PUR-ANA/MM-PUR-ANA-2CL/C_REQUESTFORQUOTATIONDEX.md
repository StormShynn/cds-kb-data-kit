---
name: C_REQUESTFORQUOTATIONDEX
description: "Requestforquotationdex"
semantic_vi: "View Requestforquotationdex CDS hiển thị một tập hợp dữ liệu yêu cầu báo giá, bao gồm thông tin về đơn đặt hàng mua và chi tiết tạo, có thể được sử dụng để phân tích và báo cáo về RFQ trong quá trình cung cấp và quản lý nguồn cung."
keywords:
  - "rfq"
  - "request for quotation"
  - "đơn yêu cầu báo giá"
  - "purchasing document"
  - "đơn đặt hàng mua"
  - "sourcing and procurement"
  - "cung cấp và quản lý nguồn cung"
  - "mm-pur-ana"
  - "ekko"
semantic_en: "The Requestforquotationdex CDS view exposes a collection of request for quotation data, including purchasing document information and creation details, which can be used to analyze and report on RFQs in the sourcing and procurement process."
app_component: MM-PUR-ANA-2CL
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
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_REQUESTFORQUOTATIONDEX

**Requestforquotationdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
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
| `RequestForQuotation` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentType` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `IncotermsVersion` |  | |  |  |  |  |
| `IncotermsLocation1` |  | |  |  |  |  |
| `IncotermsLocation2` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `CashDiscount1Days` |  | |  |  |  |  |
| `CashDiscount2Days` |  | |  |  |  |  |
| `CashDiscount1Percent` |  | |  |  |  |  |
| `CashDiscount2Percent` |  | |  |  |  |  |
| `NetPaymentDays` |  | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `ValidityEndDate` |  | |  |  |  |  |
| `RFQPublishingDate` |  | |  |  |  |  |
| `QuotationLatestSubmissionDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `TargetAmount` |  | |  |  |  |  |
| `RFQLifecycleStatus` |  | |  |  |  |  |
| `RequestForQuotationName` |  | |  |  |  |  |
| `QuotationEarliestSubmsnDate` |  | |  |  |  |  |
| `LatestRegistrationDate` |  | |  |  |  |  |
| `CorrespncInternalReference` |  | |  |  |  |  |
| `FollowOnDocumentCategory` |  | |  |  |  |  |
| `PurgDocFollowOnDocumentType` |  | |  | `FollowOnDocumentType` |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_PurchasingDocumentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_IncotermsVersion` | | ✓ | | | | |
| `_PaymentTerms` | | ✓ | | | | |
| `_FollowOnDocumentCategory` | | ✓ | | | | |
| `_PurgDocFollowOnDocumentType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RequestQtnExtension` | `E_PurchasingDocument` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_IncotermsVersion` | `I_IncotermsVersion` | [0..1] |
| `_PaymentTerms` | `I_PaymentTerms` | [0..1] |
| `_FollowOnDocumentCategory` | `I_PurchasingDocumentCategory` | [0..1] |
| `_PurgDocFollowOnDocumentType` | `I_PurchasingDocumentType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName             : 'CMMREQFORQTNDEX'
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
                        viewElement     : ['RequestForQuotation' ],
                        tableElement    : ['ebeln' ]
                      }
                    ]
        }
    }
}
@EndUserText.label: 'Data Extraction for Request For Quotation'
@ObjectModel.sapObjectNodeType.name: 'RequestForQuotation'
define view C_RequestForQuotationDEX 
 as select from I_Requestforquotation_Api01 as RequestForQuotation
 --Extension Association
  association [0..1] to E_PurchasingDocument         as _RequestQtnExtension      on $projection.RequestForQuotation = _RequestQtnExtension.PurchasingDocument
  
  association [0..1] to I_CompanyCode                as _CompanyCode                 on  $projection.CompanyCode = _CompanyCode.CompanyCode
  
  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory  on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  
  association [1..1] to I_PurchasingDocumentType     as _PurchasingDocumentType      on  $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                     and $projection.PurchasingDocumentType     = _PurchasingDocumentType.PurchasingDocumentType
  
  association [0..1] to I_Language                   as _Language                    on  $projection.Language = _Language.Language
  
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization      on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  
  association [1..1] to I_PurchasingGroup            as _PurchasingGroup             on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  
  association [1..1] to I_Currency                   as _Currency                    on  $projection.DocumentCurrency = _Currency.Currency
  
  association [0..1] to I_IncotermsClassification    as _IncotermsClassification     on  $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification
  
  association [0..1] to I_IncotermsVersion           as _IncotermsVersion            on  $projection.IncotermsVersion = _IncotermsVersion.IncotermsVersion
  
  association [0..1] to I_PaymentTerms               as _PaymentTerms                on  $projection.PaymentTerms = _PaymentTerms.PaymentTerms

  association [0..1] to I_PurchasingDocumentCategory as _FollowOnDocumentCategory    on  $projection.FollowOnDocumentCategory = _FollowOnDocumentCategory.PurchasingDocumentCategory
  
  association [0..1] to I_PurchasingDocumentType     as _PurgDocFollowOnDocumentType on  $projection.FollowOnDocumentCategory    = _PurgDocFollowOnDocumentType.PurchasingDocumentCategory
                                                                                     and $projection.PurgDocFollowOnDocumentType = _PurgDocFollowOnDocumentType.PurchasingDocumentType
  
{
  key RequestForQuotation.RequestForQuotation,
  
      @ObjectModel.foreignKey.association: '_CompanyCode'
      RequestForQuotation.CompanyCode,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      RequestForQuotation.PurchasingDocumentCategory,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      RequestForQuotation.PurchasingDocumentType,
      
      @Semantics.user.createdBy: true
      RequestForQuotation.CreatedByUser,
      
      @Semantics.systemDate.createdAt: true
      RequestForQuotation.CreationDate,
      
      @Semantics.systemDateTime.lastChangedAt: true
      RequestForQuotation.LastChangeDateTime,
      
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      RequestForQuotation.Language,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      RequestForQuotation.PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      RequestForQuotation.PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_Currency'
      RequestForQuotation.DocumentCurrency,
      
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      RequestForQuotation.IncotermsClassification,
      
      RequestForQuotation.IncotermsTransferLocation,
      
      @ObjectModel.foreignKey.association: '_IncotermsVersion'
      RequestForQuotation.IncotermsVersion,
      
      RequestForQuotation.IncotermsLocation1,
      RequestForQuotation.IncotermsLocation2,
      
      @ObjectModel.foreignKey.association: '_PaymentTerms'
      RequestForQuotation.PaymentTerms,
      
      RequestForQuotation.CashDiscount1Days,
      RequestForQuotation.CashDiscount2Days,
      RequestForQuotation.CashDiscount1Percent,
      RequestForQuotation.CashDiscount2Percent,
      RequestForQuotation.NetPaymentDays,
      RequestForQuotation.ValidityStartDate,
      RequestForQuotation.ValidityEndDate,
      
      @Semantics.businessDate.at: true
      RequestForQuotation.RFQPublishingDate,
      
      @Semantics.businessDate.at: true
      RequestForQuotation.QuotationLatestSubmissionDate,
      
      RequestForQuotation.BindingPeriodValidityEndDate,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      RequestForQuotation.TargetAmount,
      
      RequestForQuotation.RFQLifecycleStatus,
      
      @Semantics.text: true
      RequestForQuotation.RequestForQuotationName,
      
      @Semantics.businessDate.at: true
      RequestForQuotation.QuotationEarliestSubmsnDate,
      
      @Semantics.businessDate.at: true
      RequestForQuotation.LatestRegistrationDate,
      
      RequestForQuotation.CorrespncInternalReference,
      
      @ObjectModel.foreignKey.association: '_FollowOnDocumentCategory'
      RequestForQuotation.FollowOnDocumentCategory,
      
      @ObjectModel.foreignKey.association: '_PurgDocFollowOnDocumentType'
      RequestForQuotation.FollowOnDocumentType as PurgDocFollowOnDocumentType,
      
      @Semantics.booleanIndicator: true
      RequestForQuotation.IsEndOfPurposeBlocked,
      
      _CompanyCode,
      _PurchasingDocumentCategory,
      _PurchasingDocumentType,
      _Language,
      _PurchasingOrganization,
      _PurchasingGroup,
      _Currency,
      _IncotermsClassification,
      _IncotermsVersion,
      _PaymentTerms,
      _FollowOnDocumentCategory,
      _PurgDocFollowOnDocumentType
}
```
