---
name: I_MATRIXCNSLDTNREPORT01C
description: "This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This view uses year-to-date (YTD) mode. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORT01C')/$value
semantic_en: "This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This view uses year-to-date (YTD) mode. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Group Data Analysis - Cube — CDS view tổng hợp dựa trên I_MatrixCnsldtn01Fndn."
keywords:
  - "group"
  - "data"
  - "analysis"
  - "cube"
  - "consolidation"
  - "ledger"
  - "dimension"
  - "fiscal"
  - "year"
  - "document"
  - "number"
  - "posting"
  - "item"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - document
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - transaction
  - bo:purchaseorder
---
# I_MATRIXCNSLDTNREPORT01C

**This CDS view provides access to the combined data of old and new reporting logic. If you are using fiscal year periods where some of them belong to the old reporting logic and some to the new reporting logic, then you can use this CDS view. This view uses year-to-date (YTD) mode. This CDS view provides the data to answer the following business questions: What is the organizational unit information of the consolidated data in my specified fiscal year and period? What is the document number, posting level, and document type for a certain journal entry? What are the amounts of relevant financial statement items or reporting items in the transaction currency, local currency, and group currency? What are the amounts of interunit eliminations between consolidation unit pairs in the same consolidation group? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORT01C')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `ConsolidationDimension` | ✓ | |  |  | `CHAR(2)` | Dimension |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `ConsolidationDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` | ✓ | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `ConsolidationGroup` | ✓ | |  |  | `CHAR(18)` | Consolidation Group |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Reporting Period |
| `YTDAmtInCnsldtnGroupCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Group Currency |
| `YTDAmtInCnsldtnTransactionCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Transaction Currency |
| `YTDAmtInCnsldtnLocalCrcy` |  | |  |  | `CURR(23)` | YTD Amount in Local Currency |
| `YTDQtyInCnsldtnBaseUnit` |  | |  |  | `QUAN(29)` | YTD Quantity |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `FiscalYearPeriod` |  | |  | `cast(Fndn.FiscalYearPeriod as fis_jahrper_conv preserving type)` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Unit |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Unit |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `ConsolidationPostgItemAutoFlag` |  | |  |  | `CHAR(1)` | Indicator: Automatic posting lines |
| `BusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CurrencyTranslationDate` |  | |  |  | `DATS(8)` | Value Date for Currency Translation |
| `RefConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `ReferenceFiscalYear` |  | |  |  | `NUMC(4)` | Original Fiscal Year |
| `RefConsolidationPostingItem` |  | |  |  | `NUMC(6)` | Six-figure number of line item |
| `RefConsolidationDocumentType` |  | |  |  | `CHAR(1)` | Document Category |
| `RefBusinessTransactionType` |  | |  |  | `CHAR(4)` | Business Transaction |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `UserID` |  | |  |  | `CHAR(12)` | User Name |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document Number |
| `ReversedDocument` |  | |  |  | `CHAR(10)` | Number of Reversed Document |
| `InvestmentActivityType` |  | |  |  | `CHAR(2)` | Consolidation of Investments Activity |
| `InvestmentActivity` |  | |  |  | `CHAR(10)` | Consolidation of Investments Activity Number |
| `ConsolidationDocReversalYear` |  | |  |  | `NUMC(4)` | Year of reversal document or reversed document |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Transaction |
| `ReferenceDocumentContext` |  | |  |  | `CHAR(10)` | Reference Organizational Units |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast( Fndn.WBSElementExternalID as ps_posid_edit preserving type )` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Project` |  | |  | `cast( Fndn.Project as ps_pspid_edit preserving type )` | `CHAR(24)` | Project Number (External) Edited |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `SoldProduct` |  | |  |  | `CHAR(40)` | Product Sold |
| `SoldProductGroup` |  | |  |  | `CHAR(9)` | Product Sold Group |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `CustomerSupplierCountry` |  | |  |  | `CHAR(3)` | Country/Region of Customer or Supplier |
| `CustomerSupplierIndustry` |  | |  |  | `CHAR(4)` | Industry Key |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `CustomerSupplierCorporateGroup` |  | |  |  | `CHAR(10)` | Group Key |
| `_Ledger` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |
| `_Version` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_CnsldtnUnit_3` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_FinStmntItm` | | ✓ | | | | |
| `_PartnerUnit_3` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts` | | ✓ | | | | |
| `_GLChartOfAccounts` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |
| `_DocumentType` | | ✓ | | | | |
| `_PostingLevel` | | ✓ | | | | |
| `_InvesteeUnit_3` | | ✓ | | | | |
| `_Apportionment` | | ✓ | | | | |
| `_CrcyCnvrsnDiffType` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_InternalOrder` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_PartnerCostCenter` | | ✓ | | | | |
| `_PartnerProfitCenter` | | ✓ | | | | |
| `_PartnerFunctionalArea` | | ✓ | | | | |
| `_PartnerBusinessArea` | | ✓ | | | | |
| `_PartnerCompany` | | ✓ | | | | |
| `_PartnerSegment` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Ledger` | `I_CnsldtnLedger` | [1..1] |
| `_Dimension` | `I_CnsldtnDimension` | [1..1] |
| `_Version` | `I_CnsldtnVersion` | [1..1] |
| `_Company` | `I_Globalcompany` | [1..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_CnsldtnUnit_3` | `I_CnsldtnUnit_3` | [1..1] |
| `_CnsldtnGroup` | `I_CnsldtnGroupWithEmptyValue` | [1..1] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_FinStmntItm` | `I_GroupReportingFSItem` | [1..1] |
| `_PartnerUnit_3` | `I_CnsldtnUnit_3` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_GLAccountInChartOfAccounts` | `I_CnsldtnGLAccount` | [0..1] |
| `_GLChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_SubItemCategory` | `I_CnsldtnSubItemCategory` | [0..1] |
| `_SubItem` | `I_CnsldtnSubItem` | [0..1] |
| `_DocumentType` | `I_CnsldtnDocumentType` | [1..1] |
| `_PostingLevel` | `I_CnsldtnPostingLevel` | [1..1] |
| `_InvesteeUnit_3` | `I_CnsldtnUnit_3` | [0..1] |
| `_Apportionment` | `I_CnsldtnApportionment` | [1..1] |
| `_CrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_LocalCurrency` | `I_Currency` | [0..1] |
| `_GroupCurrency` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_InternalOrder` | `I_CnsldtnInternalOrder` | [0..1] |
| `_Customer` | `I_CnsldtnCustomer` | [0..1] |
| `_Supplier` | `I_CnsldtnSupplier` | [0..1] |
| `_MaterialGroup` | `I_CnsldtnMaterialGroup` | [0..1] |
| `_Plant` | `I_CnsldtnPlant` | [0..1] |
| `_FinancialTransactionType` | `I_CnsldtnFinTransType` | [0..1] |
| `_WBSElement` | `I_CnsldtnWBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementBasicData` | [0..1] |
| `_Project` | `I_CnsldtnProject` | [0..1] |
| `_CostCenter` | `I_CnsldtnCostCenter` | [0..1] |
| `_ProfitCenter` | `I_CnsldtnProfitCenter` | [0..1] |
| `_FunctionalArea` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_BusinessArea` | `I_CnsldtnBusinessArea` | [0..1] |
| `_ControllingArea` | `I_CnsldtnControllingArea` | [0..1] |
| `_Segment` | `I_CnsldtnSegment` | [0..1] |
| `_PartnerCostCenter` | `I_CnsldtnCostCenter` | [0..1] |
| `_PartnerProfitCenter` | `I_CnsldtnProfitCenter` | [0..1] |
| `_PartnerFunctionalArea` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_PartnerBusinessArea` | `I_CnsldtnBusinessArea` | [0..1] |
| `_PartnerCompany` | `I_Globalcompany` | [1..1] |
| `_PartnerSegment` | `I_CnsldtnSegment` | [0..1] |
| `_BillingDocumentType` | `I_CnsldtnBillingType` | [0..1] |
| `_SalesOrganization` | `I_CnsldtnSalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_CnsldtnDistributionChannel` | [0..1] |
| `_Division` | `I_CnsldtnDivision` | [0..1] |
| `_SoldProduct` | `I_CnsldtnProduct` | [0..1] |
| `_SoldProductGroup` | `I_CnsldtnMaterialGroup` | [0..1] |
| `_CustomerGroup` | `I_CnsldtnCustomerGroup` | [0..1] |
| `_Country` | `I_CnsldtnCountry` | [0..1] |
| `_Industry` | `I_CnsldtnIndustry` | [0..1] |
| `_SalesDistrict` | `I_CnsldtnSalesDistrict` | [0..1] |
| `_BillToParty` | `I_CnsldtnCustomer` | [0..1] |
| `_ShipToParty` | `I_CnsldtnCustomer` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORT01C')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORT01C')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IMCRPT01C',
    compiler.compareFilter: true,
    preserveKey: true,
    buffering.status: #NOT_ALLOWED
}
@AccessControl: {
    authorizationCheck: #CHECK
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #D,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_CUBE
}
@Analytics: {
    dataCategory: #CUBE,
    internalName: #LOCAL
}
@VDM: {
    viewType: #COMPOSITE
}
@EndUserText.label: 'Group Data Analysis - Cube'

define view I_MatrixCnsldtnReport01C
  with parameters
    @Consumption.derivation: { lookupEntity: 'I_CnsldtnGlobalParameter',
      resultElement: 'ConsolidationGroup'
    }
    P_ConsolidationGroup   : fc_congr,
    @EndUserText.label: 'From Fiscal Year Period'
    @Semantics.fiscal.yearPeriod: true
    P_FromFiscalYearPeriod : fincs_fiscyearper,
    @Semantics.fiscal.yearPeriod: true
    @EndUserText.label: 'To Fiscal Year Period'
    P_ToFiscalYearPeriod   : fincs_fiscyearper

  as select from            I_MatrixCnsldtn01Fndn( P_ConsolidationGroup:    $parameters.P_ConsolidationGroup,
                                                   P_FromFiscalYearPeriod:  $parameters.P_FromFiscalYearPeriod,
                                                   P_ToFiscalYearPeriod:    $parameters.P_ToFiscalYearPeriod) as Fndn

    left outer to many join I_CnsldtnVersion                                                                  as CnsldtnVersion on CnsldtnVersion.ConsolidationVersion = Fndn.ConsolidationVersion

  association [1..1] to I_CnsldtnLedger              as _Ledger                     on  $projection.ConsolidationLedger = _Ledger.ConsolidationLedger

  association [1..1] to I_CnsldtnDimension           as _Dimension                  on  $projection.ConsolidationDimension = _Dimension.ConsolidationDimension

  association [1..1] to I_CnsldtnVersion             as _Version                    on  $projection.ConsolidationVersion = _Version.ConsolidationVersion

  association [1..1] to I_Globalcompany              as _Company                    on  $projection.Company = _Company.Company

  association [0..1] to I_DebitCreditCode            as _DebitCreditCode            on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

  association [1..1] to I_CnsldtnUnit_3              as _CnsldtnUnit_3              on  $projection.ConsolidationUnit = _CnsldtnUnit_3.ConsolidationUnit

  association [1..1] to I_CnsldtnGroupWithEmptyValue as _CnsldtnGroup               on  $projection.ConsolidationDimension = _CnsldtnGroup.ConsolidationDimension
                                                                                    and $projection.ConsolidationGroup     = _CnsldtnGroup.ConsolidationGroup

  association [1..1] to I_CnsldtnChartOfAccounts     as _ChartOfAccounts            on  $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts

  association [1..1] to I_GroupReportingFSItem       as _FinStmntItm                on  $projection.ConsolidationChartOfAccounts = _FinStmntItm.ConsolidationChartOfAccounts
                                                                                    and $projection.FinancialStatementItem       = _FinStmntItm.FinancialStatementItem

  association [0..1] to I_CnsldtnUnit_3              as _PartnerUnit_3              on  $projection.PartnerConsolidationUnit = _PartnerUnit_3.ConsolidationUnit

  association [0..1] to I_CompanyCode                as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_CnsldtnGLAccount           as _GLAccountInChartOfAccounts on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts.ChartOfAccounts
                                                                                    and $projection.GLAccount       = _GLAccountInChartOfAccounts.GLAccount

  association [0..1] to I_CnsldtnGLChartOfAccounts   as _GLChartOfAccounts          on  $projection.ChartOfAccounts = _GLChartOfAccounts.ChartOfAccounts

  association [0..1] to I_CnsldtnSubItemCategory     as _SubItemCategory            on  $projection.SubItemCategory = _SubItemCategory.SubItemCategory

  association [0..1] to I_CnsldtnSubItem             as _SubItem                    on  $projection.SubItemCategory = _SubItem.SubItemCategory
                                                                                    and $projection.SubItem         = _SubItem.SubItem

  association [1..1] to I_CnsldtnDocumentType        as _DocumentType               on  $projection.ConsolidationDimension    = _DocumentType.ConsolidationDimension
                                                                                    and $projection.ConsolidationDocumentType = _DocumentType.ConsolidationDocumentType

  association [1..1] to I_CnsldtnPostingLevel        as _PostingLevel               on  $projection.PostingLevel = _PostingLevel.PostingLevel

  association [0..1] to I_CnsldtnUnit_3              as _InvesteeUnit_3             on  $projection.InvesteeConsolidationUnit = _InvesteeUnit_3.ConsolidationUnit

  association [1..1] to I_CnsldtnApportionment       as _Apportionment              on  $projection.ConsolidationApportionment = _Apportionment.ConsolidationApportionment

  association [1..1] to I_CnsldtnCrcyCnvrsnDiffType  as _CrcyCnvrsnDiffType         on  $projection.CurrencyConversionsDiffType = _CrcyCnvrsnDiffType.CurrencyConversionsDiffType

  association [0..1] to I_Currency                   as _TransactionCurrency        on  $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [0..1] to I_Currency                   as _LocalCurrency              on  $projection.LocalCurrency = _LocalCurrency.Currency

  association [0..1] to I_Currency                   as _GroupCurrency              on  $projection.GroupCurrency = _GroupCurrency.Currency

  association [0..1] to I_UnitOfMeasure              as _BaseUnit                   on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  association [0..1] to I_CnsldtnInternalOrder       as _InternalOrder              on  $projection.OrderID = _InternalOrder.InternalOrder

  association [0..1] to I_CnsldtnCustomer            as _Customer                   on  $projection.Customer = _Customer.Customer

  association [0..1] to I_CnsldtnSupplier            as _Supplier                   on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_CnsldtnMaterialGroup       as _MaterialGroup              on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [0..1] to I_CnsldtnPlant               as _Plant                      on  $projection.Plant = _Plant.Plant

  association [0..1] to I_CnsldtnFinTransType        as _FinancialTransactionType   on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType

  association [0..1] to I_CnsldtnWBSElement          as _WBSElement                 on  $projection.Project              = _WBSElement.Project
                                                                                    and $projection.WBSElementExternalID = _WBSElement.WBSElement

  association [0..1] to I_WBSElementBasicData        as _WBSElementInternalID       on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID

  association [0..1] to I_CnsldtnProject             as _Project                    on  $projection.Project = _Project.Project

  association [0..1] to I_CnsldtnCostCenter          as _CostCenter                 on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                    and $projection.CostCenter      = _CostCenter.CostCenter

  association [0..1] to I_CnsldtnProfitCenter        as _ProfitCenter               on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_CnsldtnFunctionalArea      as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1] to I_CnsldtnBusinessArea        as _BusinessArea               on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_CnsldtnControllingArea     as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CnsldtnSegment             as _Segment                    on  $projection.Segment = _Segment.Segment

  association [0..1] to I_CnsldtnCostCenter          as _PartnerCostCenter          on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                    and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter

  association [0..1] to I_CnsldtnProfitCenter        as _PartnerProfitCenter        on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                    and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter

  association [0..1] to I_CnsldtnFunctionalArea      as _PartnerFunctionalArea      on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea

  association [0..1] to I_CnsldtnBusinessArea        as _PartnerBusinessArea        on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea

  association [1..1] to I_Globalcompany              as _PartnerCompany             on  $projection.PartnerCompany = _PartnerCompany.Company

  association [0..1] to I_CnsldtnSegment             as _PartnerSegment             on  $projection.PartnerSegment = _PartnerSegment.Segment

  association [0..1] to I_CnsldtnBillingType         as _BillingDocumentType        on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_CnsldtnSalesOrganization   as _SalesOrganization          on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization

  association [0..1] to I_CnsldtnDistributionChannel as _DistributionChannel        on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_CnsldtnDivision            as _Division                   on  $projection.OrganizationDivision = _Division.Division

  association [0..1] to I_CnsldtnProduct             as _SoldProduct                on  $projection.SoldProduct = _SoldProduct.Product

  association [0..1] to I_CnsldtnMaterialGroup       as _SoldProductGroup           on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup

  association [0..1] to I_CnsldtnCustomerGroup       as _CustomerGroup              on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup

  association [0..1] to I_CnsldtnCountry             as _Country                    on  $projection.CustomerSupplierCountry = _Country.Country

  association [0..1] to I_CnsldtnIndustry            as _Industry                   on  $projection.CustomerSupplierIndustry = _Industry.Industry

  association [0..1] to I_CnsldtnSalesDistrict       as _SalesDistrict              on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict

  association [0..1] to I_CnsldtnCustomer            as _BillToParty                on  $projection.BillToParty = _BillToParty.Customer

  association [0..1] to I_CnsldtnCustomer            as _ShipToParty                on  $projection.ShipToParty = _ShipToParty.Customer
{
      //================================================================================
      // Keys
      //================================================================================

      @ObjectModel.foreignKey.association: '_Ledger'
  key Fndn.ConsolidationLedger,
      @ObjectModel.foreignKey.association: '_Dimension'
  key Fndn.ConsolidationDimension,

      @Semantics.fiscal.year: true
  key Fndn.FiscalYear,
  key Fndn.ConsolidationDocumentNumber,    //Successor should be CnsldtnGroupJrnlEntry
  key Fndn.ConsolidationPostingItem,
      @ObjectModel.foreignKey.association: '_CnsldtnGroup'
  key Fndn.ConsolidationGroup,
      @Semantics.fiscal.period: true
  key Fndn.FiscalPeriod,

      //================================================================================
      // Measures and their units
      //================================================================================

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      Fndn.YTDAmtInCnsldtnGroupCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      Fndn.YTDAmtInCnsldtnTransactionCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
      Fndn.YTDAmtInCnsldtnLocalCrcy,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
      Fndn.YTDQtyInCnsldtnBaseUnit,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_GroupCurrency'
      Fndn.GroupCurrency,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      Fndn.TransactionCurrency,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_LocalCurrency'
      Fndn.LocalCurrency,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      Fndn.BaseUnit,

      //================================================================================
      // Dimensions
      //================================================================================

      Fndn.GLRecordType,

      @ObjectModel.foreignKey.association: '_Version'
      Fndn.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
      cast(Fndn.FiscalYearPeriod as fis_jahrper_conv preserving type)    as FiscalYearPeriod,

      @Semantics.fiscal.yearVariant: true
      CnsldtnVersion.FiscalYearVariant                                   as FiscalYearVariant,

      @ObjectModel.foreignKey.association: '_DocumentType'
      Fndn.ConsolidationDocumentType,

      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      Fndn.DebitCreditCode,

      @ObjectModel.foreignKey.association: '_Company'
      Fndn.Company,

      @ObjectModel.foreignKey.association: '_CnsldtnUnit_3'
      Fndn.ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      Fndn.ConsolidationChartOfAccounts,

      @ObjectModel.foreignKey.association: '_FinStmntItm'
      Fndn.FinancialStatementItem,

      @ObjectModel.foreignKey.association: '_PartnerUnit_3'
      Fndn.PartnerConsolidationUnit,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      Fndn.CompanyCode,

      @ObjectModel.foreignKey.association: '_SubItemCategory'
      Fndn.SubItemCategory,

      @ObjectModel.foreignKey.association: '_SubItem'
      Fndn.SubItem,

      @ObjectModel.foreignKey.association: '_PostingLevel'
      Fndn.PostingLevel,

      @ObjectModel.foreignKey.association: '_Apportionment'
      Fndn.ConsolidationApportionment,

      @ObjectModel.foreignKey.association: '_CrcyCnvrsnDiffType'
      Fndn.CurrencyConversionsDiffType,

      @Semantics.fiscal.year: true
      Fndn.ConsolidationAcquisitionYear,

      @Semantics.fiscal.period: true
      Fndn.ConsolidationAcquisitionPeriod,

      @ObjectModel.foreignKey.association: '_InvesteeUnit_3'
      Fndn.InvesteeConsolidationUnit,

      Fndn.DocumentItemText,

      Fndn.ConsolidationPostgItemAutoFlag,

      Fndn.BusinessTransactionType,

      Fndn.PostingDate,
      Fndn.CurrencyTranslationDate,
      Fndn.RefConsolidationDocumentNumber,

      @Semantics.fiscal.year: true
      Fndn.ReferenceFiscalYear,

      Fndn.RefConsolidationPostingItem,
      Fndn.RefConsolidationDocumentType,
      Fndn.RefBusinessTransactionType,
      Fndn.CreationDate,
      Fndn.CreationTime,
      Fndn.UserID,
      Fndn.ReverseDocument,
      Fndn.ReversedDocument,
      Fndn.InvestmentActivityType,
      Fndn.InvestmentActivity,
      Fndn.ConsolidationDocReversalYear,
      Fndn.ReferenceDocumentType,
      Fndn.ReferenceDocumentContext,
      Fndn.LogicalSystem,

      /*** Begin Of Additional Fields in Consolidation Journal Entries in S/4 ***/
      @ObjectModel.foreignKey.association: '_GLChartOfAccounts'
      Fndn.ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      Fndn.GLAccount,

      Fndn.AssignmentReference,

      // Universal Journal Entry: G/L additional account assignments
      @ObjectModel.foreignKey.association: '_CostCenter'
      Fndn.CostCenter,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      Fndn.ProfitCenter,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      Fndn.FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      Fndn.BusinessArea,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      Fndn.ControllingArea,

      @ObjectModel.foreignKey.association: '_Segment'
      Fndn.Segment,

      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      Fndn.PartnerCostCenter,

      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      Fndn.PartnerProfitCenter,

      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      Fndn.PartnerFunctionalArea,

      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      Fndn.PartnerBusinessArea,

      @ObjectModel.foreignKey.association: '_PartnerCompany'
      Fndn.PartnerCompany,

      @ObjectModel.foreignKey.association: '_PartnerSegment'
      Fndn.PartnerSegment,

      @ObjectModel.foreignKey.association: '_InternalOrder'
      Fndn.OrderID,

      @ObjectModel.foreignKey.association: '_Customer'
      Fndn.Customer,

      @ObjectModel.foreignKey.association: '_Supplier'
      Fndn.Supplier,

      @ObjectModel.foreignKey.association: '_Plant'
      Fndn.Plant,

      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      Fndn.FinancialTransactionType,

      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      Fndn.WBSElementInternalID,

      @ObjectModel.foreignKey.association: '_WBSElement'
      cast( Fndn.WBSElementExternalID as ps_posid_edit preserving type ) as WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_Project'
      cast( Fndn.Project as ps_pspid_edit preserving type )              as Project,
      /*** End Of Additional Fields in Consolidation Journal Entries in S/4 ***/

      /*** 1802CE: Begin Of Additional Fields in Consolidation Journal Entries in S/4 ***/
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      Fndn.BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      Fndn.SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      Fndn.DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      Fndn.OrganizationDivision,
      //  SoldMaterial,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      Fndn.MaterialGroup,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      Fndn.SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      Fndn.SoldProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      Fndn.CustomerGroup,
      @ObjectModel.foreignKey.association: '_Country'
      Fndn.CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_Industry'
      Fndn.CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      Fndn.SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      Fndn.BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      Fndn.ShipToParty,
      Fndn.CustomerSupplierCorporateGroup,

      //================================================================================
      // Associations
      //================================================================================
      _Ledger,

      _Dimension,

      _Version,

      _Company,

      _CnsldtnUnit_3,

      _CnsldtnGroup,

      _ChartOfAccounts,

      _FinStmntItm,

      _GLAccountInChartOfAccounts,

      _GLChartOfAccounts,

      _PartnerUnit_3,

      _CompanyCode,

      _SubItemCategory,

      _SubItem,

      _DebitCreditCode,

      _DocumentType,

      _PostingLevel,

      _InvesteeUnit_3,

      _Apportionment,

      _CrcyCnvrsnDiffType,

      _TransactionCurrency,

      _LocalCurrency,

      _GroupCurrency,

      _BaseUnit,

      _InternalOrder,

      _Customer,

      _Supplier,

      _MaterialGroup,

      _Plant,

      _FinancialTransactionType,

      _WBSElement,

      _WBSElementInternalID,

      _Project,

      _CostCenter,

      _ProfitCenter,

      _FunctionalArea,

      _BusinessArea,

      _ControllingArea,

      _Segment,

      _PartnerCostCenter,

      _PartnerProfitCenter,

      _PartnerFunctionalArea,

      _PartnerBusinessArea,

      _PartnerCompany,

      _PartnerSegment,

      _BillingDocumentType,

      _SalesOrganization,

      _DistributionChannel,

      _Division,

      _SoldProduct,

      _SoldProductGroup,

      _CustomerGroup,

      _Country,

      _Industry,

      _SalesDistrict,

      _BillToParty,

      _ShipToParty
}
```
