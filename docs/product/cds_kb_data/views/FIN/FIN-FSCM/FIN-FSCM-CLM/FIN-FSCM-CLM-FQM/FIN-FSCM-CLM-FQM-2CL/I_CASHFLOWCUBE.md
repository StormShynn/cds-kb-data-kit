---
name: I_CASHFLOWCUBE
description: "This CDS view helps to retrieve the records related to One Exposure. It retrieves the effective date records of cash flows coming from all pre-defined source applications. This CDS view provides the data to answer the following business questions: How to retrieve the records related to One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CLM-FQM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHFLOWCUBE')/$value
semantic_en: "This CDS view helps to retrieve the records related to One Exposure. It retrieves the effective date records of cash flows coming from all pre-defined source applications. This CDS view provides the data to answer the following business questions: How to retrieve the records related to One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Cash Flow - Cube — CDS view tổng hợp dựa trên I_CashFlow."
keywords:
  - "cash"
  - "flow"
  - "cube"
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
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-FQM
  - FIN-FSCM-CLM-FQM-2CL
  - interface-view
  - lob:finance
  - lob:quality management
---
# I_CASHFLOWCUBE

**This CDS view helps to retrieve the records related to One Exposure. It retrieves the effective date records of cash flows coming from all pre-defined source applications. This CDS view provides the data to answer the following business questions: How to retrieve the records related to One Exposure? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-FQM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHFLOWCUBE')/$value) |

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
| `WBSElementInternalID` |  | |  | `cast( WBSElementInternalID as abap.numc( 8 ) )` | `NUMC(8)` |  |
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
| `ExpirationDate` |  | |  |  | `DATS(8)` |  |
| `BankStatementShortID` |  | |  |  | `NUMC(8)` | Short Key for Bank Statement (Surrogate Key) |
| `BankStatementItem` |  | |  |  | `NUMC(5)` | Memo Record Number (Line Item Number in Bank Statement) |
| `_CompanyCode` | | ✓ | | | | |
| `_LiquidityItem` | | ✓ | | | | |
| `_PlanningLevel` | | ✓ | | | | |
| `_PlanningGroup` | | ✓ | | | | |
| `_BankAccount` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_SourceCompanyCode` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_LiquidityItem` | `I_LiquidityItem` | [1..1] |
| `_PlanningLevel` | `I_PlanningLevel` | [1..1] |
| `_PlanningGroup` | `I_CashPlanningGroup` | [1..1] |
| `_BankAccount` | `I_BankAccount` | [0..1] |
| `_Extension` | `E_CashFlow` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHFLOWCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CASHFLOWCUBE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICSHFLWCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel:   {
                    usageType:  {
                                    sizeCategory: #XL,
                                    serviceQuality: #D,
                                    dataClass: #MIXED
                                },
                   supportedCapabilities: [ #ANALYTICAL_PROVIDER,#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                   modelingPattern: #ANALYTICAL_CUBE
                }

@Analytics:     {
                    dataCategory: #CUBE,
                    internalName: #LOCAL

                }
@VDM:           {
                    viewType: #COMPOSITE
                }
@Metadata:  {
                ignorePropagatedAnnotations: true,
                allowExtensions: true
            }
@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Cash Flow - Cube'
define view I_CashFlowCube  
  as select from I_CashFlow as a
  association [1..1] to I_CompanyCode   as _CompanyCode                on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_LiquidityItem as _LiquidityItem              on $projection.LiquidityItem = _LiquidityItem.LiquidityItem
  association [1..1] to I_PlanningLevel as _PlanningLevel              on $projection.PlanningLevel = _PlanningLevel.PlanningLevel
  association [1..1] to I_CashPlanningGroup as _PlanningGroup              on $projection.CashPlanningGroup = _PlanningGroup.CashPlanningGroup
  association [0..1] to I_BankAccount   as _BankAccount                on $projection.BankAccountInternalID = _BankAccount.BankAccountInternalID
  association [0..1] to E_CashFlow      as _Extension                 on  $projection.CashFlowID = _Extension.CashFlowID and $projection.ValidFrom = _Extension.ValidFrom
{
  key OriginSystem,
  key OriginApplication,
  key OriginDocument,
  key OriginTransaction,
  key OriginTransactionQualifier,
  key CashFlow,
  
  @Semantics.systemDateTime.createdAt: true
  key ValidFrom,
  @Semantics.systemDateTime.lastChangedAt: true
  key ValidTo,

      // general fields
      CashFlowID,
      @Semantics.booleanIndicator: true
      IsValid,
      CashTransactionOwner,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,
      TransactionDate,
      CertaintyLevel,
      @Semantics.currencyCode: true
      TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      @Aggregation.default: #SUM
      AmountInTransactionCurrency,
      @Semantics.currencyCode: true
      CompanyCodeCurrency,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      AmountInCompanyCodeCurrency,
      CashReleaseStatus,

      // accouting fields
      AccountingDocument,
      AccountingDocumentItem,
      FiscalYear,
      PostingFiscalPeriod,
      AccountingDocumentType,
      PaymentMethod,
      //@ObjectModel.foreignKey.association: '_GLAccount'
      GLAccount,
      FinancialAccountType,
      DocumentItemText,
      PostingDate,
      ValueDate,
      NetDueDate,
      //@ObjectModel.foreignKey.association: '_PlanningGroup'
      CashPlanningGroup,
      @ObjectModel.foreignKey.association: '_PlanningLevel'
      PlanningLevel,

      // bank fields
      HouseBank,
      HouseBankAccount,
      //@ObjectModel.foreignKey.association: '_BankAccount'
      BankAccountInternalID,

      // account assignment
      Customer,
      Supplier,
      BusinessPartner,
      Material,
      BusinessArea,
      ProfitCenter,
      
      // Commented out for 'Issue with field having a Conversion Exit (CNVX)'
//      @ObjectModel.foreignKey.association: '_WBSElement'
      @EndUserText: { label: 'WBS Element' }
      cast( WBSElementInternalID as abap.numc( 8 ) ) as  WBSElementInternalID,
//      WBSElement,
      PartnerCompany,
      CostCenter,
      Segment,
      @ObjectModel.foreignKey.association: '_LiquidityItem'
      LiquidityItem,
      SourceCompanyCode,
      Fund,
      GrantID,

      // trm fields
      FinancialInstrumentProductType,
      FinancialTransactionType,
      SecurityClass,
      SecurityAccount,
      AssetContract,
      Portfolio,
      
      // memo record fields
      @EndUserText: { label: 'Expiration Date' }
      ExpirationDate, 
      BankStatementShortID,
      BankStatementItem,

      /* Associations */
      _CompanyCode,
      _BankAccount,
      _Currency,
      _PlanningGroup,
      _PlanningLevel,
      _LiquidityItem,
//      _GLAccount,
//      _WBSElement,
      _SourceCompanyCode,
      _AccountingDocument
     

}
```
