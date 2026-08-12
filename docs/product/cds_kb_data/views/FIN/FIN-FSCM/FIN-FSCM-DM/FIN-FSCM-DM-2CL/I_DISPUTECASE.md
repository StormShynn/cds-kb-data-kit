---
name: I_DISPUTECASE
description: "This CDS view is designed to provide a comprehensive overview of dispute cases within a business context. It integrates various attributes related to dispute cases, such as company code, customer information, case status, currency details, and coordinator information, enabling efficient management and analysis of dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What are the details of each dispute case, including the disputed and original amounts? Which company code and customer are associated with each dispute case? What is the current status of each dispute case? Who is the coordinator responsible for handling each dispute case, and what is their full name? What is the root cause of each dispute case? What currency is used for the disputed amounts, and what is the global currency and exchange rate type associated with the company code? How can the data be extracted for analytical purposes, including change data capture for dispute cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-DM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value
semantic_en: "This CDS view is designed to provide a comprehensive overview of dispute cases within a business context. It integrates various attributes related to dispute cases, such as company code, customer information, case status, currency details, and coordinator information, enabling efficient management and analysis of dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What are the details of each dispute case, including the disputed and original amounts? Which company code and customer are associated with each dispute case? What is the current status of each dispute case? Who is the coordinator responsible for handling each dispute case, and what is their full name? What is the root cause of each dispute case? What currency is used for the disputed amounts, and what is the global currency and exchange rate type associated with the company code? How can the data be extracted for analytical purposes, including change data capture for dispute cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Dispute Case — CDS view giao diện dựa trên udmcaseattr00."
keywords:
  - "dispute"
  - "case"
  - "company"
  - "code"
  - "customer"
  - "status"
  - "disputed"
  - "amount"
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-DM-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-DM
  - FIN-FSCM-DM-2CL
  - interface-view
  - lob:finance
---
# I_DISPUTECASE

**This CDS view is designed to provide a comprehensive overview of dispute cases within a business context. It integrates various attributes related to dispute cases, such as company code, customer information, case status, currency details, and coordinator information, enabling efficient management and analysis of dispute cases in SAP Dispute Management. This CDS view provides the data to answer the following business questions: What are the details of each dispute case, including the disputed and original amounts? Which company code and customer are associated with each dispute case? What is the current status of each dispute case? Who is the coordinator responsible for handling each dispute case, and what is their full name? What is the root cause of each dispute case? What currency is used for the disputed amounts, and what is the global currency and exchange rate type associated with the company code? How can the data be extracted for analytical purposes, including change data capture for dispute cases? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-DM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  | `case_guid` | `CHAR(32)` | UUID in Character Format |
| `CompanyCode` |  | |  | `fin_bukrs` | `CHAR(4)` | Company Code |
| `Customer` |  | |  | `fin_kunnr` | `CHAR(10)` | Key of Customer in Accounts Receivable Accounting |
| `Status` |  | |  | `fin_stat_para` | `CHAR(3)` | Case: System Status |
| `DisputedAmount` |  | |  | `cast( fin_disputed_amt as udm_disputed_amt preserving type )` | `CURR(15)` | Current Disputed Amount |
| `OriginalAmount` |  | |  | `cast( fin_original_amt as udm_original_amt preserving type )` | `CURR(15)` | Original Disputed Amount |
| `Currency` |  | |  | `fin_dispute_curr` | `CUKY(5)` | Currency of Dispute Case |
| `DisputeCaseRootCause` |  | |  | `fin_root_ccode` | `CHAR(4)` | Root Cause Code |
| `DisputeCaseCoordinator` |  | |  | `fin_coordinator` | `CHAR(12)` | Coordinator of Dispute Case |
| `DsputCaseCoordinatorFullName` |  | | `_User` | `UserDescription` | `CHAR(80)` | User Description |
| `GlobalCurrency` |  | | `_GlobalCurrency` | `GlobalCurrency` | `CUKY(5)` | Global Currency |
| `GlobalCurrencyExchangeRateType` |  | | `_GlobalCurrency` | `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `_CaseAttributes` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_CaseStatus` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_User` | `I_User` | [0..1] |
| `_CaseAttributes` | `I_CaseAttributes` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Customer` | `I_Customer` | [1..1] |
| `_CaseStatus` | `I_CaseStatus` | [1..1] |
| `_Currency` | `I_Currency` | [1..1] |
| `_GlobalCurrency` | `P_LdngLdgrGlobCrcyTranslation` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_DISPUTECASE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'DisputeCaseUUID'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.sqlViewName: 'IDISPUTECASE'
@EndUserText.label: 'Dispute Case'
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
//@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.privilegedAssociations:  [ '_CaseAttributes' ]
@ObjectModel: { supportedCapabilities: [#EXTRACTION_DATA_SOURCE,#SQL_DATA_SOURCE ] }
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'DisputeCase'
@Analytics.dataExtraction: {
        enabled: true,
        delta.changeDataCapture:
        {
           mapping: [
             {
               viewElement: [ 'DisputeCaseUUID' ],
               role: #MAIN,
               table: 'udmcaseattr00',
               tableElement: ['case_guid']
             }
             ,
             {
               viewElement: [ 'DisputeCaseCoordinator' ],
               role: #LEFT_OUTER_TO_ONE_JOIN,
               table: 'usr21',
               tableElement: ['bname' ]
             }
           ]
        }
}
define view I_DisputeCase
  as select from udmcaseattr00
  association [0..1] to I_User                        as _User           on $projection.DisputeCaseCoordinator = _User.UserID
  association [1..1] to I_CaseAttributes              as _CaseAttributes on $projection.DisputeCaseUUID = _CaseAttributes.CaseUUID
  association [1..1] to I_CompanyCode                 as _CompanyCode    on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_Customer                    as _Customer       on $projection.Customer = _Customer.Customer
  association [1..1] to I_CaseStatus                  as _CaseStatus     on $projection.Status = _CaseStatus.Status
  association [1..1] to I_Currency                    as _Currency       on $projection.Currency = _Currency.Currency

  association [0..1] to P_LdngLdgrGlobCrcyTranslation as _GlobalCurrency on $projection.CompanyCode = _GlobalCurrency.CompanyCode
{
      @ObjectModel.foreignKey.association: '_CaseAttributes'
  key case_guid                                                    as DisputeCaseUUID,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      fin_bukrs                                                    as CompanyCode,

      @ObjectModel.foreignKey.association: '_Customer'
      fin_kunnr                                                    as Customer,

      fin_stat_para                                                as Status,

      @Semantics.amount.currencyCode: 'Currency'
      cast( fin_disputed_amt as udm_disputed_amt preserving type ) as DisputedAmount,
      @Semantics.amount.currencyCode: 'Currency'
      cast( fin_original_amt as udm_original_amt preserving type ) as OriginalAmount,

      @ObjectModel.foreignKey.association: '_Currency'
      fin_dispute_curr                                             as Currency,

      fin_root_ccode                                               as DisputeCaseRootCause,
      fin_coordinator                                              as DisputeCaseCoordinator,
      _User.UserDescription                                        as DsputCaseCoordinatorFullName,

      @Semantics.currencyCode: true
      _GlobalCurrency.GlobalCurrency                               as GlobalCurrency,
      _GlobalCurrency.ExchangeRateType                             as GlobalCurrencyExchangeRateType,

      _CaseAttributes,
      _CompanyCode,
      _Customer,
      _CaseStatus,
      _Currency
}
```
