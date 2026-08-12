---
name: C_CASHFLOWQUERY
description: "This CDS view provides a definition of the query on the records in One Exposure. It retrieves the effective date records of cash flows coming from all the pre-defined source applications. This CDS view provides the data to answer the following business questions: What is the definition of the query on the records in One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWQUERY')/$value
semantic_en: "This CDS view provides a definition of the query on the records in One Exposure. It retrieves the effective date records of cash flows coming from all the pre-defined source applications. This CDS view provides the data to answer the following business questions: What is the definition of the query on the records in One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cash Flow Query — CDS view tiêu dùng dựa trên I_CashFlowCube."
keywords:
  - "cash"
  - "flow"
  - "query"
  - "origin"
  - "system"
  - "application"
  - "document"
  - "transaction"
  - "qualifier"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CLM-FQM-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - lob:finance
  - lob:quality management
---
# C_CASHFLOWQUERY

**This CDS view provides a definition of the query on the records in One Exposure. It retrieves the effective date records of cash flows coming from all the pre-defined source applications. This CDS view provides the data to answer the following business questions: What is the definition of the query on the records in One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OriginSystem` | ✓ | |  |  | `CHAR(10)` | Logical System |
| `OriginApplication` | ✓ | |  |  | `CHAR(5)` | Source Application |
| `OriginDocument` | ✓ | |  |  | `CHAR(32)` | Source Document ID |
| `OriginTransaction` | ✓ | |  |  | `CHAR(32)` | Source Transaction ID |
| `OriginTransactionQualifier` | ✓ | |  |  | `CHAR(3)` | Source Transaction Qualifier |
| `CashFlow` | ✓ | |  |  | `CHAR(32)` | Line Item in Source Document |
| `ValidFrom` | ✓ | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `ValidTo` | ✓ | |  |  | `DEC(21)` | UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun) |
| `CashFlowID` |  | |  |  | `NUMC(16)` | Flow ID |
| `IsValid` |  | |  |  | `CHAR(1)` | FQM Flag Actual |
| `CashTransactionOwner` |  | |  |  | `CHAR(3)` | Owner of a Business Transaction |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `TransactionDate` |  | |  |  | `DATS(8)` | Transaction Date |
| `CertaintyLevel` |  | |  |  | `CHAR(6)` | Certainty Level |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency |
| `AmountInCompanyCodeCurrency` |  | |  |  | `CURR(23)` | Amount |
| `CashReleaseStatus` |  | |  |  | `CHAR(1)` | Release Status |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `AccountingDocumentItem` |  | |  |  | `NUMC(3)` | Number of Line Item Within Accounting Document |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `PostingFiscalPeriod` |  | |  |  | `NUMC(2)` | Fiscal Period |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `GLAccount` |  | |  |  | `CHAR(10)` | General Ledger Account |
| `FinancialAccountType` |  | |  |  | `CHAR(1)` | Account Type |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ValueDate` |  | |  |  | `DATS(8)` | Value Date |
| `NetDueDate` |  | |  |  | `DATS(8)` | Net Due Date |
| `CashPlanningGroup` |  | |  |  | `CHAR(10)` | Planning Group |
| `PlanningLevel` |  | |  |  | `CHAR(2)` | Planning Level |
| `HouseBank` |  | |  |  | `CHAR(5)` | Short Key for a House Bank |
| `HouseBankAccount` |  | |  |  | `CHAR(5)` | ID for Account Details |
| `BankAccountInternalID` |  | |  |  | `NUMC(10)` | Bank Account Technical ID |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `LiquidityItem` |  | |  |  | `CHAR(16)` | Liquidity Item |
| `SourceCompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `FinancialInstrumentProductType` |  | |  |  | `CHAR(3)` | Product Type |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Financial Transaction Type |
| `SecurityClass` |  | |  |  | `CHAR(13)` | Security Class ID Number |
| `SecurityAccount` |  | |  |  | `CHAR(10)` | Securities Account |
| `AssetContract` |  | |  |  | `CHAR(13)` | Contract Number |
| `Portfolio` |  | |  |  | `CHAR(10)` | Portfolio |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CASHFLOWQUERY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CCSHFLWQRY'
@AbapCatalog.compiler.compareFilter: true
@Analytics: { query: true,settings.maxProcessingEffort: #HIGH }
@Metadata: { ignorePropagatedAnnotations: true,allowExtensions: true }
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.supportedCapabilities: [ 
  #ANALYTICAL_QUERY 
]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@EndUserText.label: 'Cash Flow Query'
@ClientHandling.algorithm: #SESSION_VARIABLE
define view C_CashFlowQuery 
as 
select from I_CashFlowCube
{
@AnalyticsDetails.query.axis: #FREE
  key OriginSystem,

@AnalyticsDetails.query.axis: #FREE
  key OriginApplication,

@AnalyticsDetails.query.hidden: true
  key OriginDocument,

@AnalyticsDetails.query.hidden: true
  key OriginTransaction,

@AnalyticsDetails.query.hidden: true
  key OriginTransactionQualifier,

@AnalyticsDetails.query.hidden: true
  key CashFlow,
  
  @AnalyticsDetails.query.hidden: true
  @Semantics.systemDateTime.createdAt: true
  key ValidFrom,

  @AnalyticsDetails.query.hidden: true
  @Semantics.systemDateTime.lastChangedAt: true
  key ValidTo,

      // general fields
      @AnalyticsDetails.query.hidden: true
      CashFlowID,
      @AnalyticsDetails.query.axis: #FREE
      IsValid,
      @AnalyticsDetails.query.axis: #FREE
      CashTransactionOwner,

      @AnalyticsDetails.query.axis: #ROWS
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true, hidden : false }
      CompanyCode,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true, hidden : false }
      TransactionDate,

      @AnalyticsDetails.query.axis: #FREE
      @Consumption.filter: { selectionType : #RANGE, multipleSelections : true, hidden : false }
      CertaintyLevel,

      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      TransactionCurrency,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @Aggregation.default: #SUM
      AmountInTransactionCurrency,
      
      @AnalyticsDetails.query.axis: #FREE
      @Semantics.currencyCode: true
      CompanyCodeCurrency,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      AmountInCompanyCodeCurrency,
      
      @AnalyticsDetails.query.axis: #FREE
      CashReleaseStatus,

      // accouting fields
      @AnalyticsDetails.query.axis: #FREE
      AccountingDocument,
      @AnalyticsDetails.query.axis: #FREE
      AccountingDocumentItem,
      @AnalyticsDetails.query.axis: #FREE
      FiscalYear,
      @AnalyticsDetails.query.axis: #FREE
      PostingFiscalPeriod,
      @AnalyticsDetails.query.axis: #FREE
      AccountingDocumentType,
      @AnalyticsDetails.query.axis: #FREE
      PaymentMethod,
      @AnalyticsDetails.query.axis: #FREE
      GLAccount,
      @AnalyticsDetails.query.axis: #FREE
      FinancialAccountType,
      @AnalyticsDetails.query.axis: #FREE
      DocumentItemText,
      @AnalyticsDetails.query.axis: #FREE
      PostingDate,
      @AnalyticsDetails.query.axis: #FREE
      ValueDate,
      @AnalyticsDetails.query.axis: #FREE
      NetDueDate,
      @AnalyticsDetails.query.axis: #FREE
      CashPlanningGroup,
      @AnalyticsDetails.query.axis: #FREE
      PlanningLevel,

      // bank fields
      @AnalyticsDetails.query.axis: #FREE
      HouseBank,
      @AnalyticsDetails.query.axis: #FREE
      HouseBankAccount,
      @AnalyticsDetails.query.axis: #FREE
      BankAccountInternalID,

      // account assignment
      @AnalyticsDetails.query.axis: #FREE
      Customer,
      @AnalyticsDetails.query.axis: #FREE
      Supplier,
      @AnalyticsDetails.query.axis: #FREE
      BusinessPartner,
      @AnalyticsDetails.query.axis: #FREE
      Material,
      @AnalyticsDetails.query.axis: #FREE
      BusinessArea,
      @AnalyticsDetails.query.axis: #FREE
      ProfitCenter,
//      @AnalyticsDetails.query.axis: #FREE
//      @ObjectModel.foreignKey.association: '_WBSElement'
//      WBSElementInternalID,
//      @AnalyticsDetails.query.axis: #FREE
//      WBSElement,
      @AnalyticsDetails.query.axis: #FREE
      PartnerCompany,
      @AnalyticsDetails.query.axis: #FREE
      CostCenter,
      @AnalyticsDetails.query.axis: #FREE
      Segment,
      @AnalyticsDetails.query.axis: #FREE
      LiquidityItem,
      @AnalyticsDetails.query.axis: #FREE
      SourceCompanyCode,
      @AnalyticsDetails.query.axis: #FREE
      Fund,
      @AnalyticsDetails.query.axis: #FREE
      GrantID,

      // trm fields
      @AnalyticsDetails.query.axis: #FREE
      FinancialInstrumentProductType,
      @AnalyticsDetails.query.axis: #FREE
      FinancialTransactionType,
      @AnalyticsDetails.query.axis: #FREE
      SecurityClass,
      @AnalyticsDetails.query.axis: #FREE
      SecurityAccount,
      @AnalyticsDetails.query.axis: #FREE
      AssetContract,
      @AnalyticsDetails.query.axis: #FREE
      Portfolio
      
      // Commented out for 'Issue with non-existing element label (ELBX)'
      //,      

      // memo record fields
      //@AnalyticsDetails.query.axis: #FREE
      //ExpirationDate, 
      //@AnalyticsDetails.query.axis: #FREE
      //BankStatementShortID,
      //@AnalyticsDetails.query.axis: #FREE
      //BankStatementItem
  
}
```
