---
name: I_MATRIXCNSLDTNREPORTC_2
description: "The primary purpose of this CDS view is to facilitate the reporting and analysis of consolidated financial data across different organizational units, profit centers, and segments. It integrates various dimensions and hierarchies related to financial consolidation, such as consolidation units, profit centers, segments, and more. The view is structured to support analytical queries by providing associations to various related entities, such as ledger, dimension, version, company, and more. Parameters for hierarchies: The view allows filtering based on consolidation unit hierarchy, profit center hierarchy, and segment hierarchy, providing flexibility in reporting. Associations: It includes numerous associations to other entities, enabling detailed drill-down and analysis of related data. Aggregation and semantics: The view supports aggregation of financial amounts and quantities, with semantics for currency and unit of measure, ensuring accurate and meaningful analysis. This CDS view provides the data to answer the following business questions: Consolidated financial performance: How is the financial performance of the organization when consolidated across different units, profit centers, and segments? Intercompany transactions: What are the details of intercompany transactions and eliminations within the group? Currency impact: How do currency conversions and differences impact the consolidated financial statements? Profitability analysis: What is the profitability of different segments, profit centers, and business areas within the consolidated group? Financial statement items: How are different financial statement items performing across the consolidated group? Hierarchy validity: What is the validity of different hierarchies (unit, profit center, segment) on a specific key date? Document and posting details: What are the details of consolidation documents and postings, including document types, posting levels, and reversal information? Additional account assignments: How are additional account assignments like cost centers, internal orders, and WBS elements affecting the consolidation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORTC_2')/$value
semantic_en: "The primary purpose of this CDS view is to facilitate the reporting and analysis of consolidated financial data across different organizational units, profit centers, and segments. It integrates various dimensions and hierarchies related to financial consolidation, such as consolidation units, profit centers, segments, and more. The view is structured to support analytical queries by providing associations to various related entities, such as ledger, dimension, version, company, and more. Parameters for hierarchies: The view allows filtering based on consolidation unit hierarchy, profit center hierarchy, and segment hierarchy, providing flexibility in reporting. Associations: It includes numerous associations to other entities, enabling detailed drill-down and analysis of related data. Aggregation and semantics: The view supports aggregation of financial amounts and quantities, with semantics for currency and unit of measure, ensuring accurate and meaningful analysis. This CDS view provides the data to answer the following business questions: Consolidated financial performance: How is the financial performance of the organization when consolidated across different units, profit centers, and segments? Intercompany transactions: What are the details of intercompany transactions and eliminations within the group? Currency impact: How do currency conversions and differences impact the consolidated financial statements? Profitability analysis: What is the profitability of different segments, profit centers, and business areas within the consolidated group? Financial statement items: How are different financial statement items performing across the consolidated group? Hierarchy validity: What is the validity of different hierarchies (unit, profit center, segment) on a specific key date? Document and posting details: What are the details of consolidation documents and postings, including document types, posting levels, and reversal information? Additional account assignments: How are additional account assignments like cost centers, internal orders, and WBS elements affecting the consolidation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Group Reporting Data - Cube — CDS view tổng hợp dựa trên I_MatrixCnsldtnFoundation."
keywords:
  - "group"
  - "reporting"
  - "data"
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
  - account
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - document
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - interface-view
  - lob:finance
  - order
  - transaction
  - bo:purchaseorder
---
# I_MATRIXCNSLDTNREPORTC_2

**The primary purpose of this CDS view is to facilitate the reporting and analysis of consolidated financial data across different organizational units, profit centers, and segments. It integrates various dimensions and hierarchies related to financial consolidation, such as consolidation units, profit centers, segments, and more. The view is structured to support analytical queries by providing associations to various related entities, such as ledger, dimension, version, company, and more. Parameters for hierarchies: The view allows filtering based on consolidation unit hierarchy, profit center hierarchy, and segment hierarchy, providing flexibility in reporting. Associations: It includes numerous associations to other entities, enabling detailed drill-down and analysis of related data. Aggregation and semantics: The view supports aggregation of financial amounts and quantities, with semantics for currency and unit of measure, ensuring accurate and meaningful analysis. This CDS view provides the data to answer the following business questions: Consolidated financial performance: How is the financial performance of the organization when consolidated across different units, profit centers, and segments? Intercompany transactions: What are the details of intercompany transactions and eliminations within the group? Currency impact: How do currency conversions and differences impact the consolidated financial statements? Profitability analysis: What is the profitability of different segments, profit centers, and business areas within the consolidated group? Financial statement items: How are different financial statement items performing across the consolidated group? Hierarchy validity: What is the validity of different hierarchies (unit, profit center, segment) on a specific key date? Document and posting details: What are the details of consolidation documents and postings, including document types, posting levels, and reversal information? Additional account assignments: How are additional account assignments like cost centers, internal orders, and WBS elements affecting the consolidation? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORTC_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  |  | `CHAR(2)` | Ledger |
| `ConsolidationDimension` | ✓ | |  |  | `CHAR(2)` | Dimension |
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `ConsolidationDocumentNumber` | ✓ | |  |  | `CHAR(10)` | Group Journal Entry |
| `ConsolidationPostingItem` | ✓ | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` |  | |  |  | `CHAR(3)` | Consolidation Version Element |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  | `cast( FiscalYearPeriod as fis_jahrper_conv )` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  | `cast ( ConsolidationUnit as fincs_consolidationunit preserving type )` | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Financial Statement Item |
| `PartnerConsolidationUnit` |  | |  | `cast ( PartnerConsolidationUnit as fincs_partnerconsolidationunit preserving type )` | `CHAR(18)` | Partner Unit |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  | `cast ( InvesteeConsolidationUnit as fincs_investeeconsunit preserving type )` | `CHAR(18)` | Investee Unit |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
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
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  | `cast( WBSElementExternalID as ps_posid_edit )` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `Project` |  | |  | `cast( Project as ps_pspid_edit )` | `CHAR(24)` | Project Number (External) Edited |
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
| `CnsldtnAdhocItem` |  | |  |  | `CHAR(30)` | Ad Hoc Item |
| `CnsldtnAdhocSet` |  | |  |  | `CHAR(30)` | Ad Hoc Set |
| `CnsldtnAdhocSetItem` |  | |  |  | `NUMC(8)` | Ad Hoc Set Item |
| `MatchingReasonCode` |  | |  |  | `CHAR(6)` | Reason Code |
| `OriginType` |  | |  |  | `CHAR(3)` | Origin Type |
| `OriginReference` |  | |  |  | `CHAR(30)` | Origin Reference |
| `_Ledger` | | ✓ | | | | |
| `_Dimension` | | ✓ | | | | |
| `_Version` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_CnsldtnUnit_3` | | ✓ | | | | |
| `_CnsldtnUnitForElimination` | | ✓ | | | | |
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
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_WBSElementInternalID` | | ✓ | | | | |
| `_Project` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_ProfitCenterForElim` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_SegmentForElim` | | ✓ | | | | |
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
| `_AdhocItem` | | ✓ | | | | |
| `_AdhocSet` | | ✓ | | | | |
| `_AdhocSetItem` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_PartnerUnit` | | ✓ | | | | |
| `_InvesteeUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnGroupJrnlEntryItem` | [1..1] |
| `_Ledger` | `I_CnsldtnLedger` | [1..1] |
| `_Dimension` | `I_CnsldtnDimension` | [1..1] |
| `_Version` | `I_CnsldtnVersion` | [1..1] |
| `_Company` | `I_Globalcompany` | [1..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_CnsldtnUnit_3` | `I_CnsldtnUnit_3` | [1..1] |
| `_CnsldtnUnitForElimination` | `I_CnsldtnUnitForElimination` | [1..1] |
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
| `_Material` | `I_CnsldtnMaterial` | [0..1] |
| `_MaterialGroup` | `I_CnsldtnMaterialGroup` | [0..1] |
| `_Plant` | `I_CnsldtnPlant` | [0..1] |
| `_FinancialTransactionType` | `I_CnsldtnFinTransType` | [0..1] |
| `_WBSElement` | `I_CnsldtnWBSElement` | [0..1] |
| `_WBSElementInternalID` | `I_WBSElementBasicData` | [0..1] |
| `_Project` | `I_CnsldtnProject` | [0..1] |
| `_CostCenter` | `I_CnsldtnCostCenter` | [0..1] |
| `_ProfitCenter` | `I_CnsldtnProfitCenter` | [0..1] |
| `_ProfitCenterForElim` | `I_CnsldtnProfitCenterForElim` | [0..1] |
| `_FunctionalArea` | `I_CnsldtnFunctionalArea` | [0..1] |
| `_BusinessArea` | `I_CnsldtnBusinessArea` | [0..1] |
| `_ControllingArea` | `I_CnsldtnControllingArea` | [0..1] |
| `_Segment` | `I_CnsldtnSegment` | [0..1] |
| `_SegmentForElim` | `I_CnsldtnSegmentForElim` | [0..1] |
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
| `_AdhocItem` | `I_CnsldtnAdhocItem` | [0..1] |
| `_AdhocSet` | `I_CnsldtnAdhocSet` | [0..1] |
| `_AdhocSetItem` | `I_CnsldtnAdhocSetItem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORTC_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MATRIXCNSLDTNREPORTC_2')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IMCREPORTC_2',
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
    readClassName: 'CL_FINCS_GRA_CUBE_REL',
    internalName: #LOCAL
}
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type:#PUBLIC_LOCAL_API,
    lifecycle.status: #DEPRECATED,
    lifecycle.successor: 'I_CnsldtnGrpJrnlItemC'
}
@EndUserText.label: 'Group Reporting Data - Cube'

define view I_MatrixCnsldtnReportC_2
  with parameters
    @Consumption.defaultValue: '$'
    @EndUserText.label: 'Consolidation Unit Hierarchy'
    @Consumption.valueHelpDefinition: {
      entity: { name:     'I_CnsldtnUnitHierDirVH',
                element:  'ConsolidationUnitHierarchy' }
    }
    P_ConsolidationUnitHierarchy : fincs_hryid,

    @Consumption.defaultValue: '$'
    @EndUserText.label: 'Profit Center Hierarchy'
    @Consumption.valueHelpDefinition: {
      entity: { name:     'I_CnsldtnProfitCenterHierDirVH',
                element:  'AdditionalMasterDataHierarchy' }
    }
    P_ConsolidationPrftCtrHier   : fincs_hryid,

    @Consumption.defaultValue: '$'
    @EndUserText.label: 'Segment Hierarchy'
    @Consumption.valueHelpDefinition: {
      entity: { name:     'I_CnsldtnSegmentHierDirVH',
                element:  'ConsolidationSegmentHierarchy' }
    }
    P_ConsolidationSegmentHier   : fincs_hryid,

    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @EndUserText.label: 'Hierarchy Valid On'
    P_KeyDate                    : sydate

  as select from I_MatrixCnsldtnFoundation
                 ( P_ConsolidationUnitHierarchy: $parameters.P_ConsolidationUnitHierarchy,
                 P_ConsolidationPrftCtrHier: $parameters.P_ConsolidationPrftCtrHier,
                 P_ConsolidationSegmentHier: $parameters.P_ConsolidationSegmentHier,
                 P_KeyDate: $parameters.P_KeyDate ) as MatrixCnsldtnFoundation


  //Extension Association
  association [1..1] to E_CnsldtnGroupJrnlEntryItem  as _Extension                  on  $projection.ConsolidationLedger         = _Extension.ConsolidationLedger
                                                                                    and $projection.ConsolidationDimension      = _Extension.ConsolidationDimension
                                                                                    and $projection.FiscalYear                  = _Extension.FiscalYear
                                                                                    and $projection.ConsolidationDocumentNumber = _Extension.CnsldtnGroupJrnlEntry
                                                                                    and $projection.ConsolidationPostingItem    = _Extension.CnsldtnGroupJrnlEntryItem

  association [1..1] to I_CnsldtnLedger              as _Ledger                     on  $projection.ConsolidationLedger = _Ledger.ConsolidationLedger

  association [1..1] to I_CnsldtnDimension           as _Dimension                  on  $projection.ConsolidationDimension = _Dimension.ConsolidationDimension

  association [1..1] to I_CnsldtnVersion             as _Version                    on  $projection.ConsolidationVersion = _Version.ConsolidationVersion

  association [1..1] to I_Globalcompany              as _Company                    on  $projection.Company = _Company.Company

  association [0..1] to I_DebitCreditCode            as _DebitCreditCode            on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode

  association [1..1] to I_CnsldtnUnit_3              as _CnsldtnUnit_3              on  $projection.ConsolidationUnit = _CnsldtnUnit_3.ConsolidationUnit

  association [1..1] to I_CnsldtnUnitForElimination  as _CnsldtnUnitForElimination  on  $projection.ConsolidationDimension   = _CnsldtnUnitForElimination.ConsolidationDimension
                                                                                    and $projection.ConsolidationUnitForElim = _CnsldtnUnitForElimination.ConsolidationUnit

  //  association [1..1] to I_CnsldtnGroup               as _CnsldtnGroup               on  $projection.ConsolidationDimension = _CnsldtnGroup.ConsolidationDimension
  //                                                                                    and $projection.ConsolidationGroup     = _CnsldtnGroup.ConsolidationGroup

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

  association [0..1] to I_CnsldtnMaterial            as _Material                   on  $projection.Material = _Material.Material

  association [0..1] to I_CnsldtnMaterialGroup       as _MaterialGroup              on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [0..1] to I_CnsldtnPlant               as _Plant                      on  $projection.Plant = _Plant.Plant

  association [0..1] to I_CnsldtnFinTransType        as _FinancialTransactionType   on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType

  //  association [0..1] to I_WBSElement                 as _WBSElement                 on  $projection.WBSElement = _WBSElement.WBSElement
  association [0..1] to I_CnsldtnWBSElement          as _WBSElement                 on  $projection.Project              = _WBSElement.Project
                                                                                    and $projection.WBSElementExternalID = _WBSElement.WBSElement

  association [0..1] to I_WBSElementBasicData        as _WBSElementInternalID       on  $projection.WBSElementInternalID = _WBSElementInternalID.WBSElementInternalID

  //  association [0..1] to I_Project             as _Project                    on  $projection.Project = _Project.Project
  association [0..1] to I_CnsldtnProject             as _Project                    on  $projection.Project = _Project.Project

  association [0..1] to I_CnsldtnCostCenter          as _CostCenter                 on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                    and $projection.CostCenter      = _CostCenter.CostCenter

  association [0..1] to I_CnsldtnProfitCenter        as _ProfitCenter               on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_CnsldtnProfitCenterForElim as _ProfitCenterForElim        on  $projection.ControllingArea             = _ProfitCenterForElim.ControllingArea
                                                                                    and $projection.ConsolidationPrftCtrForElim = _ProfitCenterForElim.ProfitCenter

  association [0..1] to I_CnsldtnFunctionalArea      as _FunctionalArea             on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1] to I_CnsldtnBusinessArea        as _BusinessArea               on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_CnsldtnControllingArea     as _ControllingArea            on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_CnsldtnSegment             as _Segment                    on  $projection.Segment = _Segment.Segment

  association [0..1] to I_CnsldtnSegmentForElim      as _SegmentForElim             on  $projection.ConsolidationSegmentForElim = _SegmentForElim.Segment

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

  association [0..1] to I_CnsldtnAdhocItem           as _AdhocItem                  on  $projection.ConsolidationChartOfAccounts = _AdhocItem.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnAdhocItem             = _AdhocItem.CnsldtnAdhocItem

  association [0..1] to I_CnsldtnAdhocSet            as _AdhocSet                   on  $projection.ConsolidationChartOfAccounts = _AdhocSet.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnAdhocSet              = _AdhocSet.CnsldtnAdhocSet

  association [0..1] to I_CnsldtnAdhocSetItem        as _AdhocSetItem               on  $projection.ConsolidationChartOfAccounts = _AdhocSetItem.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnAdhocSet              = _AdhocSetItem.CnsldtnAdhocSet
                                                                                    and $projection.CnsldtnAdhocSetItem          = _AdhocSetItem.CnsldtnAdhocSetItem
{
      /**************************** ACDOCU Part ************************************************/
      @ObjectModel.foreignKey.association: '_Ledger'
  key ConsolidationLedger,
      @ObjectModel.foreignKey.association: '_Dimension'
  key ConsolidationDimension,

      @Semantics.fiscal.year: true
  key FiscalYear,
  key ConsolidationDocumentNumber, //Successor should be CnsldtnGroupJrnlEntry
  key ConsolidationPostingItem,

      GLRecordType,

      @ObjectModel.foreignKey.association: '_Version'
      ConsolidationVersion,

      ConsolidationVersionElement,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_LocalCurrency'
      LocalCurrency,

      @Semantics.currencyCode:true
      @ObjectModel.foreignKey.association: '_GroupCurrency'
      GroupCurrency,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,

      @Semantics.fiscal.period: true
      FiscalPeriod,

      @Semantics.fiscal.yearPeriod: true
      cast( FiscalYearPeriod as fis_jahrper_conv )                                        as FiscalYearPeriod,

      @Semantics.fiscal.yearVariant: true
      FiscalYearVariant,

      PeriodMode,

      @ObjectModel.foreignKey.association: '_DocumentType'
      ConsolidationDocumentType,

      @ObjectModel.foreignKey.association: '_DebitCreditCode'
      DebitCreditCode,

      @ObjectModel.foreignKey.association: '_Company'
      Company,


      @ObjectModel.foreignKey.association: '_CnsldtnUnit'
      cast ( ConsolidationUnit as fincs_consolidationunit  preserving type )              as ConsolidationUnit,

      @ObjectModel.foreignKey.association: '_CnsldtnUnitForElimination'
      ConsolidationUnitForElim,

      @ObjectModel.foreignKey.association: '_ChartOfAccounts'
      ConsolidationChartOfAccounts,

      //Test 1811
      @ObjectModel.foreignKey.association: '_FinStmntItm'
      FinancialStatementItem,

      //  @ObjectModel.foreignKey.association: '_FSItem'
      //  FSItemNew,

      @ObjectModel.foreignKey.association: '_PartnerUnit'
      cast ( PartnerConsolidationUnit as fincs_partnerconsolidationunit preserving type ) as PartnerConsolidationUnit,


      //TODO Fiscal Year/Period Dependent Consolidation Group (Hierarchy / Attributes)
      @ObjectModel.foreignKey.association: '_CnsldtnGroup'
      ConsolidationGroup,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode,

      @ObjectModel.foreignKey.association: '_SubItemCategory'
      SubItemCategory,

      @ObjectModel.foreignKey.association: '_SubItem'
      SubItem,

      @ObjectModel.foreignKey.association: '_PostingLevel'
      PostingLevel,

      //  _PostingLevel.ConsolidationReportingLevel,
      //cast('' as fincs_reporting_level)    as  CnsldtnReportingLevel,

      @ObjectModel.foreignKey.association: '_Apportionment'
      ConsolidationApportionment,

      @ObjectModel.foreignKey.association: '_CrcyCnvrsnDiffType'
      CurrencyConversionsDiffType,

      @Semantics.fiscal.year: true
      ConsolidationAcquisitionYear,

      @Semantics.fiscal.period: true
      ConsolidationAcquisitionPeriod,

      @ObjectModel.foreignKey.association: '_InvesteeUnit'
      cast ( InvesteeConsolidationUnit as fincs_investeeconsunit preserving type )        as InvesteeConsolidationUnit,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
      AmountInLocalCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      AmountInGroupCurrency,

      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
      CnsldtnQuantityInBaseUnit,

      DocumentItemText,

      ConsolidationPostgItemAutoFlag,

      BusinessTransactionType,
      //TODO bvorg,

      PostingDate,
      CurrencyTranslationDate,
      RefConsolidationDocumentNumber,

      @Semantics.fiscal.year: true
      ReferenceFiscalYear,

      RefConsolidationPostingItem,
      RefConsolidationDocumentType,
      RefBusinessTransactionType,
      CreationDate,
      CreationTime,
      UserID,
      ReverseDocument,
      ReversedDocument,
      InvestmentActivityType,
      InvestmentActivity,
      ConsolidationDocReversalYear,
      ReferenceDocumentType,
      ReferenceDocumentContext,
      LogicalSystem,

      /*** Begin Of Additional Fields in Consolidation Journal Entries in S/4 ***/
      @ObjectModel.foreignKey.association: '_GLChartOfAccounts'
      ChartOfAccounts,

      @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts'
      GLAccount,

      //  ReferenceDocumentNumber,

      AssignmentReference,

      // Universal Journal Entry: G/L additional account assignments
      //TODO Add Associate For addtional account assignments
      //
      @ObjectModel.foreignKey.association: '_CostCenter'
      CostCenter,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      ProfitCenter,

      @ObjectModel.foreignKey.association: '_ProfitCenterForElim'
      ConsolidationPrftCtrForElim,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      BusinessArea,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      ControllingArea,

      @ObjectModel.foreignKey.association: '_Segment'
      Segment,

      @ObjectModel.foreignKey.association: '_SegmentForElim'
      ConsolidationSegmentForElim,

      @ObjectModel.foreignKey.association: '_PartnerCostCenter'
      PartnerCostCenter,

      @ObjectModel.foreignKey.association: '_PartnerProfitCenter'
      PartnerProfitCenter,

      @ObjectModel.foreignKey.association: '_PartnerFunctionalArea'
      PartnerFunctionalArea,

      @ObjectModel.foreignKey.association: '_PartnerBusinessArea'
      PartnerBusinessArea,

      @ObjectModel.foreignKey.association: '_PartnerCompany'
      PartnerCompany,

      @ObjectModel.foreignKey.association: '_PartnerSegment'
      PartnerSegment,

      @ObjectModel.foreignKey.association: '_InternalOrder'
      OrderID,

      @ObjectModel.foreignKey.association: '_Customer'
      Customer,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier,

      @ObjectModel.foreignKey.association: '_Material'
      Material, //do not use any longer, use Product

      @ObjectModel.foreignKey.association: '_Plant'
      Plant,

      @ObjectModel.foreignKey.association: '_FinancialTransactionType'
      FinancialTransactionType,

      @ObjectModel.foreignKey.association: '_WBSElementInternalID'
      WBSElementInternalID,

      //  @ObjectModel.foreignKey.association: '_WBSElement'
      //  WBSElement,

      @ObjectModel.foreignKey.association: '_WBSElement'
      cast( WBSElementExternalID as ps_posid_edit )                                       as WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_Project'
      cast( Project as ps_pspid_edit )                                                    as Project,
      /*** End Of Additional Fields in Consolidation Journal Entries in S/4 ***/

      //  ConsolidationRecordNumber,


      /*** 1802CE: Begin Of Additional Fields in Consolidation Journal Entries in S/4 ***/
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      BillingDocumentType,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      @ObjectModel.foreignKey.association: '_Division'
      OrganizationDivision,
      //  SoldMaterial,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      MaterialGroup,
      @ObjectModel.foreignKey.association: '_SoldProduct'
      SoldProduct,
      @ObjectModel.foreignKey.association: '_SoldProductGroup'
      SoldProductGroup,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CustomerGroup,
      @ObjectModel.foreignKey.association: '_Country'
      CustomerSupplierCountry,
      @ObjectModel.foreignKey.association: '_Industry'
      CustomerSupplierIndustry,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SalesDistrict,
      @ObjectModel.foreignKey.association: '_BillToParty'
      BillToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      ShipToParty,
      CustomerSupplierCorporateGroup,

      //Additional Fileds: Adhoc Item
      @ObjectModel.foreignKey.association: '_AdhocItem'
      CnsldtnAdhocItem,
      @ObjectModel.foreignKey.association: '_AdhocSet'
      CnsldtnAdhocSet,
      @ObjectModel.foreignKey.association: '_AdhocSetItem'
      CnsldtnAdhocSetItem,

      //Additional Fields - ICMR
      MatchingReasonCode,
      OriginType,
      OriginReference,

      // Associations
      _Ledger,

      _Dimension,

      _Version,

      _Company,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CnsldtnUnit_3'
      _CnsldtnUnit,
      _CnsldtnUnit_3,

      _CnsldtnUnitForElimination,

      _CnsldtnGroup,

      _ChartOfAccounts,

      _FinStmntItm,
      // Test 1811
      //  _FSItem,

      _GLAccountInChartOfAccounts,

      //  _GLAccountInCompanyCode,

      _GLChartOfAccounts,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_PartnerUnit_3'
      _PartnerUnit,
      _PartnerUnit_3,


      _CompanyCode,

      _SubItemCategory,

      _SubItem,

      _DebitCreditCode,

      _DocumentType,

      _PostingLevel,

      //  _PostingLevel._ReportingLevel,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_InvesteeUnit_3'
      _InvesteeUnit,
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

      _Material,

      _MaterialGroup,

      _Plant,

      _FinancialTransactionType,

      _WBSElement,

      _WBSElementInternalID,

      _Project,

      _CostCenter,

      _ProfitCenter,

      //  Profit Center Eliminated
      _ProfitCenterForElim,

      _FunctionalArea,

      _BusinessArea,

      _ControllingArea,

      _Segment,

      //  Segment Eliminated
      _SegmentForElim,

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

      _ShipToParty,

      _AdhocItem,

      _AdhocSet,

      _AdhocSetItem

}
```
