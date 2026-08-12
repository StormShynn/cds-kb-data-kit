---
name: I_GVOARULEBSDGRPJRNLITEMC
description: "Consolidation reporting: The view is intended to support financial consolidation reporting by providing a structured dataset that includes various dimensions and measures relevant to consolidation processes. Rule-based analysis: It incorporates rule-based logic for analyzing group journal items, which is crucial for understanding the financial position and performance of a consolidated group. Integration with hierarchies: The view allows integration with different hierarchies such as consolidation unit, profit center, and segment hierarchies, enabling detailed and hierarchical analysis of financial data. Currency and quantity handling: It includes fields for handling amounts in different currencies (transaction, local, and group currencies) and quantities, with logic to reverse signs based on specific conditions, which is essential for accurate financial reporting. This CDS view provides the data to answer the following business questions: What are the consolidated financial results for a specific fiscal year and period? The view provides key financial measures such as amounts in various currencies and quantities, aggregated by fiscal year and period. How do different consolidation units and profit centers contribute to the overall financial results? By integrating with consolidation unit and profit center hierarchies, the view allows analysis of contributions from different organizational units. What is the impact of specific consolidation rules on financial results? The view supports rule-based analysis, enabling users to assess the impact of different consolidation rules on financial outcomes. How do currency conversion differences affect the consolidated financial statements? It includes fields for currency conversion differences, allowing analysis of their impact on financial statements. What are the details of specific journal entries in the consolidation process? The view provides detailed information on journal entries, including document numbers, posting items, and related attributes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOARULEBSDGRPJRNLITEMC')/$value
semantic_en: "Consolidation reporting: The view is intended to support financial consolidation reporting by providing a structured dataset that includes various dimensions and measures relevant to consolidation processes. Rule-based analysis: It incorporates rule-based logic for analyzing group journal items, which is crucial for understanding the financial position and performance of a consolidated group. Integration with hierarchies: The view allows integration with different hierarchies such as consolidation unit, profit center, and segment hierarchies, enabling detailed and hierarchical analysis of financial data. Currency and quantity handling: It includes fields for handling amounts in different currencies (transaction, local, and group currencies) and quantities, with logic to reverse signs based on specific conditions, which is essential for accurate financial reporting. This CDS view provides the data to answer the following business questions: What are the consolidated financial results for a specific fiscal year and period? The view provides key financial measures such as amounts in various currencies and quantities, aggregated by fiscal year and period. How do different consolidation units and profit centers contribute to the overall financial results? By integrating with consolidation unit and profit center hierarchies, the view allows analysis of contributions from different organizational units. What is the impact of specific consolidation rules on financial results? The view supports rule-based analysis, enabling users to assess the impact of different consolidation rules on financial outcomes. How do currency conversion differences affect the consolidated financial statements? It includes fields for currency conversion differences, allowing analysis of their impact on financial statements. What are the details of specific journal entries in the consolidation process? The view provides detailed information on journal entries, including document numbers, posting items, and related attributes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Rule-Based GVoA GVOA - Cube — CDS view tổng hợp dựa trên P_CNSLDTNFNDNWITHRPTRULES_2."
keywords:
  - "Rule-Based GVoA GVOA - Cube"
  - "rule"
  - "based"
  - "gvoa"
  - "cube"
  - "fiscal"
  - "year"
  - "cnsldtn"
  - "group"
  - "jrnl"
  - "entry"
  - "item"
  - "record"
  - "type"
  - "consolidation"
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
  - bo:salesorganization
---
# I_GVOARULEBSDGRPJRNLITEMC

**Consolidation reporting: The view is intended to support financial consolidation reporting by providing a structured dataset that includes various dimensions and measures relevant to consolidation processes. Rule-based analysis: It incorporates rule-based logic for analyzing group journal items, which is crucial for understanding the financial position and performance of a consolidated group. Integration with hierarchies: The view allows integration with different hierarchies such as consolidation unit, profit center, and segment hierarchies, enabling detailed and hierarchical analysis of financial data. Currency and quantity handling: It includes fields for handling amounts in different currencies (transaction, local, and group currencies) and quantities, with logic to reverse signs based on specific conditions, which is essential for accurate financial reporting. This CDS view provides the data to answer the following business questions: What are the consolidated financial results for a specific fiscal year and period? The view provides key financial measures such as amounts in various currencies and quantities, aggregated by fiscal year and period. How do different consolidation units and profit centers contribute to the overall financial results? By integrating with consolidation unit and profit center hierarchies, the view allows analysis of contributions from different organizational units. What is the impact of specific consolidation rules on financial results? The view supports rule-based analysis, enabling users to assess the impact of different consolidation rules on financial outcomes. How do currency conversion differences affect the consolidated financial statements? It includes fields for currency conversion differences, allowing analysis of their impact on financial statements. What are the details of specific journal entries in the consolidation process? The view provides detailed information on journal entries, including document numbers, posting items, and related attributes. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOARULEBSDGRPJRNLITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `CnsldtnGroupJrnlEntry` | ✓ | |  | `cast(ConsolidationDocumentNumber as fincs_group_jrnl_entry preserving type)` | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` | ✓ | |  | `cast(ConsolidationPostingItem as fincs_group_jrnl_entry_item preserving type)` | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  | `cast( FiscalYearPeriod as fis_jahrper_conv )` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  | `cast( ConsolidationUnit as fincs_consolidationunit preserving type )` | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  | `cast( FinancialStatementItem as fincs_md_finstatementitem preserving type )` | `CHAR(10)` | Consolidation Financial Statement Item |
| `PartnerConsolidationUnit` |  | |  | `cast( PartnerConsolidationUnit as fincs_cnsldtnpartnerunit preserving type )` | `CHAR(18)` | Partner Consolidation Unit |
| `ConsolidationGroup` |  | |  | `cast( ConsolidationGroup as fincs_md_congr preserving type )` | `CHAR(18)` | Consolidation Group |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `ConsolidationAcquisitionYear` |  | |  |  | `NUMC(4)` | Year of Acquisition |
| `ConsolidationAcquisitionPeriod` |  | |  |  | `NUMC(3)` | Period of Acquisition |
| `InvesteeConsolidationUnit` |  | |  | `cast( InvesteeConsolidationUnit as fincs_cnsldtninvesteeunit preserving type )` | `CHAR(18)` | Investee Consolidation Unit |
| `InvestorConsolidationUnit` |  | |  | `cast( InvestorConsolidationUnit as fincs_cnsldtninvesteeunit preserving type )` | `CHAR(18)` | Investee Consolidation Unit |
| `AmountInTransactionCurrency` |  | |  | `cast( case when ConsolidationReverseSign = 'X' then -1 * AmountInTransactionCurrency else AmountInTransactionCurrency end as vtcur12 )` | `CURR(23)` | Value in Transaction Currency |
| `AmountInLocalCurrency` |  | |  | `cast( case when ConsolidationReverseSign = 'X' then -1 * AmountInLocalCurrency else AmountInLocalCurrency end as vlcur12 )` | `CURR(23)` | Value in Local Currency |
| `AmountInGroupCurrency` |  | |  | `cast( case when ConsolidationReverseSign = 'X' then -1 * AmountInGroupCurrency else AmountInGroupCurrency end as vgcur12 )` | `CURR(23)` | Value in Group Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  | `cast( case when ConsolidationReverseSign = 'X' then -1 * CnsldtnQuantityInBaseUnit else CnsldtnQuantityInBaseUnit end as fincs_quan )` | `QUAN(29)` | Quantity |
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
| `CreationDateTime` |  | |  |  | `DEC(15)` | UTC Entry Date Time in Short Form (YYYYMMDDhhmmss) |
| `CnsldtnPullRequestState` |  | |  | `cast( 'X' as fincs_cnsldtnpullreq_state )` | `CHAR(1)` | Consolidation Pull Request State |
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
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `ConsolidationReportingItem` |  | |  | `cast ( ConsolidationReportingItem as fincs_reportingitem preserving type )` | `CHAR(10)` | Reporting Item |
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
| `FinancialServicesProductGroup` |  | |  |  | `CHAR(10)` | Financial Services Product Group |
| `FinancialServicesBranch` |  | |  |  | `CHAR(10)` | Financial Services Branch |
| `FinancialDataSource` |  | |  |  | `CHAR(10)` | Financial Data Source |
| `GHGCategory` |  | |  |  | `CHAR(10)` | Greenhouse Gas Category |
| `GHGScope` |  | |  |  | `CHAR(1)` | Greenhouse Gas Scope |
| `GHGScope2CalculationMethod` |  | |  |  | `CHAR(2)` | Greenhouse Gas Scope 2 Calculation Method |
| `GHGScope2ContractualInstrument` |  | |  |  | `CHAR(5)` | Greenhouse Gas Scope 2 Contractual Instrument |
| `GHGDataQualityCharacteristic` |  | |  |  | `CHAR(4)` | Greenhouse Gas Data Quality Characteristic |
| `GHGEnergyClassification` |  | |  |  | `CHAR(4)` | Greenhouse Gas Energy Classification |
| `GHGEnergyMix` |  | |  |  | `CHAR(9)` | Greenhouse Gas Energy Mix |
| `GHGEnergySourcingType` |  | |  |  | `CHAR(10)` | Greenhouse Gas Energy Sourcing Type |
| `SustainabilityModeOfTransport` |  | |  |  | `CHAR(3)` | Sustainability Mode of Transport |
| `FinancialManagementArea` |  | |  |  | `CHAR(4)` | Financial Management Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `GrantID` |  | |  |  | `CHAR(20)` | Grant |
| `CnsldtnCashLedgerChartOfAccts` |  | |  |  | `CHAR(4)` | Cash Origin Chart of Accounts |
| `CashLedgerAccount` |  | |  |  | `CHAR(10)` | Cash Origin Account |
| `Ledger` |  | |  | `cast( '' as fins_ledger )` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerFiscalYear` |  | |  | `cast( '' as fis_ryear_no_conv )` | `NUMC(4)` | Fiscal Year of Ledger |
| `DocumentEntryIsInGroupCurrency` |  | |  | `cast( '' as fincs_gcind )` | `CHAR(1)` | Group Currency is Leading Currency |
| `CnsldtnVersionGroupCrcySource` |  | |  | `cast( '' as fincs_group_curr_source )` | `CHAR(1)` | Source for Group Currency Key Figure |
| `BreakdownCategory` |  | |  | `cast( '' as fincs_consbreakdowncategory )` | `CHAR(4)` | FS Item Breakdown Category in Consolidation |
| `AmountInBalanceTransacCrcy` |  | |  | `AmountInTransactionCurrency` | `CURR(23)` | Amount in Transaction Currency |
| `AmountInCompanyCodeCurrency` |  | |  | `cast( '1' as fis_hsl )` | `CURR(23)` | Amount in Company Code Currency |
| `AmountInFreeDefinedCurrency1` |  | |  | `cast( '1' as fis_osl )` | `CURR(23)` | Amount in Freely Defined Currency 1 |
| `AmountInFreeDefinedCurrency2` |  | |  | `cast( '1' as fis_vsl )` | `CURR(23)` | Amount in Freely Defined Currency 2 |
| `AmountInFreeDefinedCurrency3` |  | |  | `cast( '1' as fis_bsl )` | `CURR(23)` | Amount in Freely Defined Currency 3 |
| `AmountInFreeDefinedCurrency4` |  | |  | `cast( '1' as fis_csl )` | `CURR(23)` | Amount in Freely Defined Currency 4 |
| `AmountInFreeDefinedCurrency5` |  | |  | `cast( '1' as fis_dsl )` | `CURR(23)` | Amount in Freely Defined Currency 5 |
| `AmountInFreeDefinedCurrency6` |  | |  | `cast( '1' as fis_esl )` | `CURR(23)` | Amount in Freely Defined Currency 6 |
| `AmountInFreeDefinedCurrency7` |  | |  | `cast( '1' as fis_fsl )` | `CURR(23)` | Amount in Freely Defined Currency 7 |
| `AmountInFreeDefinedCurrency8` |  | |  | `cast( '1' as fis_gsl )` | `CURR(23)` | Amount in Freely Defined Currency 8 |
| `AmountInFunctionalCurrency` |  | |  | `cast( '1' as fis_vfccur12 )` | `CURR(23)` | Amount in Functional Currency |
| `AmountInGlobalCurrency` |  | |  | `cast( '1' as fis_ksl )` | `CURR(23)` | Amount in Global Currency |
| `CostSourceUnit` |  | |  | `cast( '' as fis_co_meinh )` | `UNIT(3)` | Cost Source Unit |
| `ReferenceQuantityUnit` |  | |  | `cast( '' as fis_ref_qty_uom )` | `UNIT(3)` | Unit of Measure for Reference Quantity |
| `AdditionalQuantity1Unit` |  | |  | `cast( '' as fis_qunit1 )` | `UNIT(3)` | Additional Quantity 1 Unit |
| `AdditionalQuantity2Unit` |  | |  | `cast( '' as fis_qunit2 )` | `UNIT(3)` | Additional Quantity 2 Unit |
| `AdditionalQuantity3Unit` |  | |  | `cast( '' as fis_qunit3 )` | `UNIT(3)` | Additional Quantity 3 Unit |
| `QuantityInBaseUnit` |  | |  | `cast( '1' as quan1_12 )` | `QUAN(23)` | Quantity |
| `Quantity` |  | |  | `cast( '1' as quan1_12 )` | `QUAN(23)` | Quantity |
| `FixedQuantity` |  | |  | `cast( '1' as fis_quan1_12_fix )` | `QUAN(23)` | Fixed Quantity |
| `ValuationQuantity` |  | |  | `cast( '1' as fis_vquan1_12 )` | `QUAN(23)` | Valuation Quantity |
| `ValuationFixedQuantity` |  | |  | `cast( '1' as fis_vquan1_12_fix )` | `QUAN(23)` | Valuation Fixed Quantity |
| `ReferenceQuantity` |  | |  | `cast( '1' as rquan1_12 )` | `QUAN(23)` | Reference quantity |
| `AdditionalQuantity1` |  | |  | `cast( '1' as fis_quan1_l )` | `QUAN(23)` | Additional Quantity 1 |
| `AdditionalQuantity2` |  | |  | `cast( '1' as fis_quan2_l )` | `QUAN(23)` | Additional Quantity 2 |
| `AdditionalQuantity3` |  | |  | `cast( '1' as fis_quan3_l )` | `QUAN(23)` | Additional Quantity 3 |
| `_RptgItm_2` | | ✓ | | | | |
| `_Version` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_CnsldtnUnit_4` | | ✓ | | | | |
| `_CnsldtnUnitForElimination_2` | | ✓ | | | | |
| `_CnsldtnGroup_3` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_FinStmntItm_2` | | ✓ | | | | |
| `_PartnerUnit_4` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts_2` | | ✓ | | | | |
| `_GLChartOfAccounts` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |
| `_DocumentType_2` | | ✓ | | | | |
| `_PostingLevel` | | ✓ | | | | |
| `_InvesteeUnit_4` | | ✓ | | | | |
| `_Apportionment` | | ✓ | | | | |
| `_CrcyCnvrsnDiffType` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_FinancialTransactionType` | | ✓ | | | | |
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
| `_InvestorUnit` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnGroupJrnlEntryItem_3` | [1..1] |
| `_RptgItm_2` | `I_CnsldtnRptgItem_2` | [0..1] |
| `_Version` | `I_CnsldtnVersion` | [1..1] |
| `_Company` | `I_Globalcompany` | [1..1] |
| `_DebitCreditCode` | `I_DebitCreditCode` | [0..1] |
| `_CnsldtnUnit_4` | `I_CnsldtnUnit_4` | [1..1] |
| `_CnsldtnUnitForElimination_2` | `I_CnsldtnUnitForElimination_2` | [1..1] |
| `_CnsldtnGroup_3` | `I_CnsldtnGroup_3` | [1..1] |
| `_ChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_FinStmntItm_2` | `I_CnsldtnFSItem_2` | [1..1] |
| `_PartnerUnit_4` | `I_CnsldtnUnit_4` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_GLAccountInChartOfAccounts_2` | `I_CnsldtnGLAccount_2` | [0..1] |
| `_GLChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_SubItemCategory` | `I_CnsldtnSubItemCategory` | [0..1] |
| `_SubItem` | `I_CnsldtnSubItem` | [0..1] |
| `_DocumentType_2` | `I_CnsldtnDocumentType_2` | [1..1] |
| `_PostingLevel` | `I_CnsldtnPostingLevel` | [1..1] |
| `_InvesteeUnit_4` | `I_CnsldtnUnit_4` | [0..1] |
| `_Apportionment` | `I_CnsldtnApportionment` | [1..1] |
| `_CrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_LocalCurrency` | `I_Currency` | [0..1] |
| `_GroupCurrency` | `I_Currency` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_InternalOrder` | `I_CnsldtnInternalOrder` | [0..1] |
| `_Order` | `I_CnsldtnOrder` | [0..1] |
| `_Customer` | `I_CnsldtnCustomer` | [0..1] |
| `_Supplier` | `I_CnsldtnSupplier` | [0..1] |
| `_MaterialGroup` | `I_CnsldtnMaterialGroup` | [0..1] |
| `_Plant` | `I_CnsldtnPlant` | [0..1] |
| `_FinancialTransactionType` | `I_CnsldtnFinTransType` | [0..1] |
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
| `_BillingDocumentType` | `I_CnsldtnBillingDocumentType` | [0..1] |
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
| `_InvestorUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_DocumentStore` | `I_GVoARuleBsdGrpJrnlItmDSt` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOARULEBSDGRPJRNLITEMC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOARULEBSDGRPJRNLITEMC')/$value)*

```abap
@AbapCatalog: {
    entityBuffer: {
    definitionAllowed: false
 }
}
@Analytics: {
    technicalName: 'IGVARBGRPJRITM',
    dataCategory:  #CUBE,
    readClassName: 'CL_FINCS_GVA_RB_CUBE',
    internalName:  #LOCAL
}
@AccessControl: {
    authorizationCheck: #MANDATORY
}
@Metadata: {
    allowExtensions:true,
    ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType:  {
         sizeCategory:   #XL,
         serviceQuality: #D,
         dataClass:      #MIXED
   },
    supportedCapabilities: [ #ANALYTICAL_PROVIDER ],
    modelingPattern: #ANALYTICAL_CUBE
}
@VDM: {
    viewType: #COMPOSITE
}
@EndUserText.label: 'Rule-Based GVoA GVOA - Cube'
@Analytics.intentBasedNavigation.filterMapper: 'CL_FINCS_GVA_CUBE_EXIT'

define view entity I_GVoARuleBsdGrpJrnlItemC
  with parameters
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:     'I_CnsldtnUnitHierDirVH',
                element:  'ConsolidationUnitHierarchy' }
    }]
    P_ConsolidationUnitHierarchy : fincs_hryid_consunit,
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:     'I_CnsldtnProfitCenterHierDirVH',
                element:  'AdditionalMasterDataHierarchy' }
    }]
    P_ConsolidationPrftCtrHier   : fincs_hryid_profitcenter,
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition: [{
      entity: { name:     'I_CnsldtnSegmentHierDirVH',
                element:  'ConsolidationSegmentHierarchy' }
    }]
    P_ConsolidationSegmentHier   : fincs_hryid_segment,
    @Semantics.businessDate.at: true
    @Environment.systemField: #SYSTEM_DATE
    @EndUserText.label: 'Hierarchy Valid On'
    P_KeyDate                    : vdm_v_key_date,
    @Consumption.valueHelpDefinition: [{
     entity: {
         name:    'I_CnsldtnRptgItmHierDirVH',
         element: 'ConsolidationReportingItemHier'
             }
    }]
    P_ConsolidationRptgItemHier  : fincs_rihry,
    @Consumption.valueHelpDefinition: [{
     entity: {
         name:    'I_CnsldtnRptgRuleVarVH',
         element: 'ConsolidationReportingRuleID'
             }
    }]
    P_ConsolidationRptgRuleID    : fincs_rptid

  //=================================================================================================
  // The underlying view stack (P_CNSLDTNFNDNWITHRPTRULES_2) is only used for the
  // syntactically correct definition of typed elements.
  // The cube result in a query scenario is not influenced by the underlying view stack
  // because of the ABAP breakout defined by annotation @Analytics.readClassName.
  // For example the ABAP breakout reads transactional data from both ACDOCA and ACDOCU,
  // which is not reflected by the static underlying CDS view stack.
  //=================================================================================================
  as select from P_CNSLDTNFNDNWITHRPTRULES_2
                 ( P_ConsolidationUnitHierarchy:    $parameters.P_ConsolidationUnitHierarchy,
                   P_ConsolidationPrftCtrHier:      $parameters.P_ConsolidationPrftCtrHier,
                   P_ConsolidationSegmentHier:      $parameters.P_ConsolidationSegmentHier,
                   P_KeyDate:                       $parameters.P_KeyDate,
                   P_ConsolidationRptgItemHier:     $parameters.P_ConsolidationRptgItemHier,
                   P_ConsolidationReportingRuleID:  $parameters.P_ConsolidationRptgRuleID
                 )
  //Extension Association
  association [1..1] to E_CnsldtnGroupJrnlEntryItem_3 as _Extension                    on  $projection.FiscalYear                = _Extension.FiscalYear
                                                                                       and $projection.CnsldtnGroupJrnlEntry     = _Extension.CnsldtnGroupJrnlEntry
                                                                                       and $projection.CnsldtnGroupJrnlEntryItem = _Extension.CnsldtnGroupJrnlEntryItem
  association [0..1] to I_CnsldtnRptgItem_2           as _RptgItm_2                    on  $projection.ConsolidationChartOfAccounts = _RptgItm_2.ConsolidationChartOfAccounts
                                                                                       and $projection.ConsolidationReportingItem   = _RptgItm_2.ConsolidationReportingItem
  association [1..1] to I_CnsldtnVersion              as _Version                      on  $projection.ConsolidationVersion = _Version.ConsolidationVersion
  association [1..1] to I_Globalcompany               as _Company                      on  $projection.Company = _Company.Company // I_CnsldtnCompany is not C1 released
  association [0..1] to I_DebitCreditCode             as _DebitCreditCode              on  $projection.DebitCreditCode = _DebitCreditCode.DebitCreditCode
  association [1..1] to I_CnsldtnUnit_4               as _CnsldtnUnit_4                on  $projection.ConsolidationUnit = _CnsldtnUnit_4.ConsolidationUnit
  association [1..1] to I_CnsldtnUnitForElimination_2 as _CnsldtnUnitForElimination_2  on  $projection.ConsolidationUnitForElim = _CnsldtnUnitForElimination_2.ConsolidationUnit
  association [1..1] to I_CnsldtnGroup_3              as _CnsldtnGroup_3               on  $projection.ConsolidationGroup = _CnsldtnGroup_3.ConsolidationGroup
  association [1..1] to I_CnsldtnChartOfAccounts      as _ChartOfAccounts              on  $projection.ConsolidationChartOfAccounts = _ChartOfAccounts.ConsolidationChartOfAccounts
  association [1..1] to I_CnsldtnFSItem_2             as _FinStmntItm_2                on  $projection.ConsolidationChartOfAccounts = _FinStmntItm_2.ConsolidationChartOfAccounts
                                                                                       and $projection.FinancialStatementItem       = _FinStmntItm_2.CnsldtnFinancialStatementItem
  association [0..1] to I_CnsldtnUnit_4               as _PartnerUnit_4                on  $projection.PartnerConsolidationUnit = _PartnerUnit_4.ConsolidationUnit
  association [0..1] to I_CompanyCode                 as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CnsldtnGLAccount_2          as _GLAccountInChartOfAccounts_2 on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts_2.ChartOfAccounts
                                                                                       and $projection.GLAccount       = _GLAccountInChartOfAccounts_2.GLAccount
  association [0..1] to I_CnsldtnGLChartOfAccounts    as _GLChartOfAccounts            on  $projection.ChartOfAccounts = _GLChartOfAccounts.ChartOfAccounts
  association [0..1] to I_CnsldtnSubItemCategory      as _SubItemCategory              on  $projection.SubItemCategory = _SubItemCategory.SubItemCategory
  association [0..1] to I_CnsldtnSubItem              as _SubItem                      on  $projection.SubItemCategory = _SubItem.SubItemCategory
                                                                                       and $projection.SubItem         = _SubItem.SubItem
  association [1..1] to I_CnsldtnDocumentType_2       as _DocumentType_2               on  $projection.ConsolidationDocumentType = _DocumentType_2.ConsolidationDocumentType
  association [1..1] to I_CnsldtnPostingLevel         as _PostingLevel                 on  $projection.PostingLevel = _PostingLevel.PostingLevel
  association [0..1] to I_CnsldtnUnit_4               as _InvesteeUnit_4               on  $projection.InvesteeConsolidationUnit = _InvesteeUnit_4.ConsolidationUnit
  association [1..1] to I_CnsldtnApportionment        as _Apportionment                on  $projection.ConsolidationApportionment = _Apportionment.ConsolidationApportionment
  association [1..1] to I_CnsldtnCrcyCnvrsnDiffType   as _CrcyCnvrsnDiffType           on  $projection.CurrencyConversionsDiffType = _CrcyCnvrsnDiffType.CurrencyConversionsDiffType
  association [0..1] to I_Currency                    as _TransactionCurrency          on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                    as _LocalCurrency                on  $projection.LocalCurrency = _LocalCurrency.Currency
  association [0..1] to I_Currency                    as _GroupCurrency                on  $projection.GroupCurrency = _GroupCurrency.Currency
  association [0..1] to I_UnitOfMeasure               as _BaseUnit                     on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure

  // Depracation of I_CnsldtnInternalOrder
  association [0..1] to I_CnsldtnInternalOrder        as _InternalOrder                on  $projection.OrderID = _InternalOrder.InternalOrder
  association [0..1] to I_CnsldtnOrder                as _Order                        on  $projection.OrderID = _Order.OrderID
  association [0..1] to I_CnsldtnCustomer             as _Customer                     on  $projection.Customer = _Customer.Customer
  association [0..1] to I_CnsldtnSupplier             as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_CnsldtnMaterialGroup        as _MaterialGroup                on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup
  association [0..1] to I_CnsldtnPlant                as _Plant                        on  $projection.Plant = _Plant.Plant
  association [0..1] to I_CnsldtnFinTransType         as _FinancialTransactionType     on  $projection.FinancialTransactionType = _FinancialTransactionType.FinancialTransactionType
  association [0..1] to I_CnsldtnCostCenter           as _CostCenter                   on  $projection.ControllingArea = _CostCenter.ControllingArea
                                                                                       and $projection.CostCenter      = _CostCenter.CostCenter
  association [0..1] to I_CnsldtnProfitCenter         as _ProfitCenter                 on  $projection.ControllingArea = _ProfitCenter.ControllingArea
                                                                                       and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter
  association [0..1] to I_CnsldtnProfitCenterForElim  as _ProfitCenterForElim          on  $projection.ControllingArea             = _ProfitCenterForElim.ControllingArea
                                                                                       and $projection.ConsolidationPrftCtrForElim = _ProfitCenterForElim.ProfitCenter
  association [0..1] to I_CnsldtnFunctionalArea       as _FunctionalArea               on  $projection.FunctionalArea = _FunctionalArea.FunctionalArea
  association [0..1] to I_CnsldtnBusinessArea         as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_CnsldtnControllingArea      as _ControllingArea              on  $projection.ControllingArea = _ControllingArea.ControllingArea
  association [0..1] to I_CnsldtnSegment              as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..1] to I_CnsldtnSegmentForElim       as _SegmentForElim               on  $projection.ConsolidationSegmentForElim = _SegmentForElim.Segment
  association [0..1] to I_CnsldtnCostCenter           as _PartnerCostCenter            on  $projection.ControllingArea   = _PartnerCostCenter.ControllingArea
                                                                                       and $projection.PartnerCostCenter = _PartnerCostCenter.CostCenter
  association [0..1] to I_CnsldtnProfitCenter         as _PartnerProfitCenter          on  $projection.ControllingArea     = _PartnerProfitCenter.ControllingArea
                                                                                       and $projection.PartnerProfitCenter = _PartnerProfitCenter.ProfitCenter
  association [0..1] to I_CnsldtnFunctionalArea       as _PartnerFunctionalArea        on  $projection.PartnerFunctionalArea = _PartnerFunctionalArea.FunctionalArea
  association [0..1] to I_CnsldtnBusinessArea         as _PartnerBusinessArea          on  $projection.PartnerBusinessArea = _PartnerBusinessArea.BusinessArea
  association [1..1] to I_Globalcompany               as _PartnerCompany               on  $projection.PartnerCompany = _PartnerCompany.Company
  association [0..1] to I_CnsldtnSegment              as _PartnerSegment               on  $projection.PartnerSegment = _PartnerSegment.Segment
  association [0..1] to I_CnsldtnBillingDocumentType  as _BillingDocumentType          on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType //CnsldtnBillingDocumentType is not released
  association [0..1] to I_CnsldtnSalesOrganization    as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_CnsldtnDistributionChannel  as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel
  association [0..1] to I_CnsldtnDivision             as _Division                     on  $projection.OrganizationDivision = _Division.Division
  association [0..1] to I_CnsldtnProduct              as _SoldProduct                  on  $projection.SoldProduct = _SoldProduct.Product
  association [0..1] to I_CnsldtnMaterialGroup        as _SoldProductGroup             on  $projection.SoldProductGroup = _SoldProductGroup.MaterialGroup
  association [0..1] to I_CnsldtnCustomerGroup        as _CustomerGroup                on  $projection.CustomerGroup = _CustomerGroup.CustomerGroup
  association [0..1] to I_CnsldtnCountry              as _Country                      on  $projection.CustomerSupplierCountry = _Country.Country
  association [0..1] to I_CnsldtnIndustry             as _Industry                     on  $projection.CustomerSupplierIndustry = _Industry.Industry
  association [0..1] to I_CnsldtnSalesDistrict        as _SalesDistrict                on  $projection.SalesDistrict = _SalesDistrict.SalesDistrict
  association [0..1] to I_CnsldtnCustomer             as _BillToParty                  on  $projection.BillToParty = _BillToParty.Customer
  association [0..1] to I_CnsldtnCustomer             as _ShipToParty                  on  $projection.ShipToParty = _ShipToParty.Customer
  association [0..1] to I_CnsldtnAdhocItem            as _AdhocItem                    on  $projection.ConsolidationChartOfAccounts = _AdhocItem.ConsolidationChartOfAccounts
                                                                                       and $projection.CnsldtnAdhocItem             = _AdhocItem.CnsldtnAdhocItem
  association [0..1] to I_CnsldtnAdhocSet             as _AdhocSet                     on  $projection.ConsolidationChartOfAccounts = _AdhocSet.ConsolidationChartOfAccounts
                                                                                       and $projection.CnsldtnAdhocSet              = _AdhocSet.CnsldtnAdhocSet
  association [0..1] to I_CnsldtnAdhocSetItem         as _AdhocSetItem                 on  $projection.ConsolidationChartOfAccounts = _AdhocSetItem.ConsolidationChartOfAccounts
                                                                                       and $projection.CnsldtnAdhocSet              = _AdhocSetItem.CnsldtnAdhocSet
                                                                                       and $projection.CnsldtnAdhocSetItem          = _AdhocSetItem.CnsldtnAdhocSetItem
  association [0..1] to I_CnsldtnUnit_4               as _InvestorUnit                 on  $projection.InvestorConsolidationUnit = _InvestorUnit.ConsolidationUnit
  //document store association
  association [1..1] to I_GVoARuleBsdGrpJrnlItmDSt    as _DocumentStore                on  _DocumentStore.tra_fiscalyear = $projection.FiscalYear
                                                                                       and _DocumentStore.tra_00036      = $projection.CnsldtnGroupJrnlEntry
                                                                                       and _DocumentStore.tra_00052      = $projection.CnsldtnGroupJrnlEntryItem
{
        @Semantics.fiscal.year: true
  key   FiscalYear,
  key   cast(ConsolidationDocumentNumber as fincs_group_jrnl_entry preserving type)     as CnsldtnGroupJrnlEntry,
  key   cast(ConsolidationPostingItem as fincs_group_jrnl_entry_item preserving type)   as CnsldtnGroupJrnlEntryItem,
        GLRecordType,
        ConsolidationDimension,
        @ObjectModel.foreignKey.association: '_Version'
        ConsolidationVersion,
        @ObjectModel.foreignKey.association: '_TransactionCurrency'
        TransactionCurrency,
        @ObjectModel.foreignKey.association: '_LocalCurrency'
        LocalCurrency,
        @ObjectModel.foreignKey.association: '_GroupCurrency'
        GroupCurrency,
        @ObjectModel.foreignKey.association: '_BaseUnit'
        BaseUnit,
        @Semantics.fiscal.period: true
        FiscalPeriod,
        @Semantics.fiscal.yearPeriod: true
        cast( FiscalYearPeriod as fis_jahrper_conv )                                    as FiscalYearPeriod,
        @Semantics.fiscal.yearQuarter: true
        FiscalYearQuarter,
        @Semantics.fiscal.quarter: true
        FiscalQuarter,
        @Semantics.fiscal.yearVariant: true
        FiscalYearVariant,
        PeriodMode,
        @ObjectModel.foreignKey.association: '_DocumentType_2'
        ConsolidationDocumentType,
        @ObjectModel.foreignKey.association: '_DebitCreditCode'
        DebitCreditCode,
        @ObjectModel.foreignKey.association: '_Company'
        Company,
        @ObjectModel.foreignKey.association: '_CnsldtnUnit_4'
        cast( ConsolidationUnit as fincs_consolidationunit preserving type )            as ConsolidationUnit,
        @ObjectModel.foreignKey.association: '_CnsldtnUnitForElimination_2'
        ConsolidationUnitForElim,
        @ObjectModel.foreignKey.association: '_ChartOfAccounts'
        ConsolidationChartOfAccounts,
        @ObjectModel.foreignKey.association: '_FinStmntItm_2'
        cast( FinancialStatementItem as fincs_md_finstatementitem preserving type )     as FinancialStatementItem,
        @ObjectModel.foreignKey.association: '_PartnerUnit_4'
        cast( PartnerConsolidationUnit as fincs_cnsldtnpartnerunit preserving type )    as PartnerConsolidationUnit,
        @ObjectModel.foreignKey.association: '_CnsldtnGroup_3'
        cast( ConsolidationGroup as fincs_md_congr preserving type )                    as ConsolidationGroup,
        @ObjectModel.foreignKey.association: '_CompanyCode'
        CompanyCode,
        @ObjectModel.foreignKey.association: '_SubItemCategory'
        SubItemCategory,
        @ObjectModel.foreignKey.association: '_SubItem'
        SubItem,
        @ObjectModel.foreignKey.association: '_PostingLevel'
        PostingLevel,
        @ObjectModel.foreignKey.association: '_Apportionment'
        ConsolidationApportionment,
        @ObjectModel.foreignKey.association: '_CrcyCnvrsnDiffType'
        CurrencyConversionsDiffType,
        @Semantics.fiscal.year: true
        ConsolidationAcquisitionYear,
        @Semantics.fiscal.period: true
        ConsolidationAcquisitionPeriod,
        @ObjectModel.foreignKey.association: '_InvesteeUnit_4'
        cast( InvesteeConsolidationUnit as fincs_cnsldtninvesteeunit  preserving type ) as InvesteeConsolidationUnit,
        @ObjectModel.foreignKey.association: '_InvestorUnit'
        cast( InvestorConsolidationUnit as fincs_cnsldtninvesteeunit preserving type )  as InvestorConsolidationUnit,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        cast( case
              when ConsolidationReverseSign = 'X' then -1 * AmountInTransactionCurrency
              else AmountInTransactionCurrency
              end as vtcur12 )                                                          as AmountInTransactionCurrency,
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        cast( case
              when ConsolidationReverseSign = 'X' then  -1 * AmountInLocalCurrency
              else AmountInLocalCurrency
              end as vlcur12 )                                                          as AmountInLocalCurrency,
        @Aggregation.default: #SUM
        @Semantics.amount.currencyCode: 'GroupCurrency'
        cast( case
              when ConsolidationReverseSign = 'X' then  -1 * AmountInGroupCurrency
              else AmountInGroupCurrency
              end as vgcur12 )                                                          as AmountInGroupCurrency,
        @Aggregation.default: #SUM
        @Semantics.quantity.unitOfMeasure: 'BaseUnit'
        cast( case
              when ConsolidationReverseSign = 'X' then  -1 * CnsldtnQuantityInBaseUnit
              else CnsldtnQuantityInBaseUnit
              end  as fincs_quan )                                                      as CnsldtnQuantityInBaseUnit,
        DocumentItemText,
        ConsolidationPostgItemAutoFlag,
        BusinessTransactionType,
        PostingDate,
        CurrencyTranslationDate,
        RefConsolidationDocumentNumber,
        ReferenceFiscalYear,
        RefConsolidationPostingItem,
        RefConsolidationDocumentType,
        RefBusinessTransactionType,
        CreationDateTime,
        cast( 'X' as fincs_cnsldtnpullreq_state )                                       as CnsldtnPullRequestState, // The Value of CnsldtnPullRequestState will be determinated in the ABAP-Breakout : CnsldtnPullRequestState = 'X' will means released
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
        @ObjectModel.foreignKey.association: '_GLChartOfAccounts'
        ChartOfAccounts,
        @ObjectModel.foreignKey.association: '_GLAccountInChartOfAccounts_2'
        GLAccount,
        AssignmentReference,
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
        @ObjectModel.foreignKey.association: '_Order'
        OrderID,
        @ObjectModel.foreignKey.association: '_Customer'
        Customer,
        @ObjectModel.foreignKey.association: '_Supplier'
        Supplier,
        @ObjectModel.foreignKey.association: '_Plant'
        Plant,
        @ObjectModel.foreignKey.association: '_FinancialTransactionType'
        FinancialTransactionType,
        @ObjectModel.foreignKey.association: '_RptgItm_2'
        cast ( ConsolidationReportingItem as fincs_reportingitem  preserving type  )    as ConsolidationReportingItem,
        @ObjectModel.foreignKey.association: '_BillingDocumentType'
        BillingDocumentType,
        @ObjectModel.foreignKey.association: '_SalesOrganization'
        SalesOrganization,
        @ObjectModel.foreignKey.association: '_DistributionChannel'
        DistributionChannel,
        @ObjectModel.foreignKey.association: '_Division'
        OrganizationDivision,
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
        @ObjectModel.foreignKey.association: '_AdHocItem'
        CnsldtnAdhocItem,
        @ObjectModel.foreignKey.association: '_AdHocSet'
        CnsldtnAdhocSet,
        @ObjectModel.foreignKey.association: '_AdHocSetItem'
        CnsldtnAdhocSetItem,
        //Additional Fields - ICMR
        MatchingReasonCode,
        OriginType,
        OriginReference,

        // industry-specific fields  Financial services: Banking Fields
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_FS_FIELDS'  ] } ]
        FinancialServicesProductGroup,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_FS_FIELDS'  ] } ]
        FinancialServicesBranch,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_FS_FIELDS'  ] } ]
        FinancialDataSource,

        // industry-specific fields  Financial services: Green House Fields
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGCategory,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGScope,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGScope2CalculationMethod,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGScope2ContractualInstrument,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGDataQualityCharacteristic,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGEnergyClassification,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGEnergyMix,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        GHGEnergySourcingType,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_GHG_FIELDS'  ] } ]
        SustainabilityModeOfTransport,

        // industry-specific fields  Financial services: Public Sector Fields
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_PS_FIELDS'  ] } ]
        FinancialManagementArea,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_PS_FIELDS'  ] } ]
        Fund,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_PS_FIELDS'  ] } ]
        GrantID,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_PS_FIELDS'  ] } ]
        CnsldtnCashLedgerChartOfAccts,
        @Consumption.switched : [ { id : [ 'FINCS_ENABLE_PS_FIELDS'  ] } ]
        CashLedgerAccount,

        //=======================================================================================================================
        // hidden elements used during virtual cube processing in ON conditions of joins
        @Consumption.hidden: true
        cast( '' as fins_ledger )                                                       as Ledger,

        @Semantics.fiscal.year: true
        @Consumption.hidden: true
        cast( '' as fis_ryear_no_conv )                                                 as LedgerFiscalYear,

        @Consumption.hidden: true
        cast( '' as fincs_gcind )                                                       as DocumentEntryIsInGroupCurrency,

        @Consumption.hidden: true
        cast( '' as fincs_group_curr_source )                                           as CnsldtnVersionGroupCrcySource,

        @Consumption.hidden: true
        cast( '' as fincs_consbreakdowncategory )                                       as BreakdownCategory,

        //      TODO: update the currency code of following Amounts
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        @Consumption.hidden: true
        AmountInTransactionCurrency                                                     as AmountInBalanceTransacCrcy,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_hsl )                                                          as AmountInCompanyCodeCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_osl )                                                          as AmountInFreeDefinedCurrency1,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_vsl )                                                          as AmountInFreeDefinedCurrency2,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_bsl )                                                          as AmountInFreeDefinedCurrency3,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_csl )                                                          as AmountInFreeDefinedCurrency4,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_dsl )                                                          as AmountInFreeDefinedCurrency5,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_esl )                                                          as AmountInFreeDefinedCurrency6,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_fsl )                                                          as AmountInFreeDefinedCurrency7,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_gsl )                                                          as AmountInFreeDefinedCurrency8,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_vfccur12 )                                                     as AmountInFunctionalCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_ksl )                                                          as AmountInGlobalCurrency,

        @Consumption.hidden: true
        cast( '' as fis_co_meinh )                                                      as CostSourceUnit,

        @Consumption.hidden: true
        cast( '' as fis_ref_qty_uom )                                                   as ReferenceQuantityUnit,

        @Consumption.hidden: true
        cast( '' as fis_qunit1 )                                                        as AdditionalQuantity1Unit,

        @Consumption.hidden: true
        cast( '' as fis_qunit2 )                                                        as AdditionalQuantity2Unit,

        @Consumption.hidden: true
        cast( '' as fis_qunit3 )                                                        as AdditionalQuantity3Unit,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as quan1_12 )                                                         as QuantityInBaseUnit,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as quan1_12 )                                                         as Quantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan1_12_fix   )                                               as FixedQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_vquan1_12 )                                                    as ValuationQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_vquan1_12_fix   )                                              as ValuationFixedQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as rquan1_12 )                                                        as ReferenceQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan1_l )                                                      as AdditionalQuantity1,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan2_l )                                                      as AdditionalQuantity2,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan3_l )                                                      as AdditionalQuantity3,

        //=======================================================================================================================

        _Version,
        _Company,
        _CnsldtnUnit_4,
        _CnsldtnUnitForElimination_2,
        _CnsldtnGroup_3,
        _RptgItm_2,
        _ChartOfAccounts,
        _FinStmntItm_2,
        _GLAccountInChartOfAccounts_2,
        _GLChartOfAccounts,
        _PartnerUnit_4,
        _CompanyCode,
        _SubItemCategory,
        _SubItem,
        _DebitCreditCode,
        _DocumentType_2,
        _PostingLevel,
        _InvesteeUnit_4,
        _InvestorUnit,
        _Apportionment,
        _CrcyCnvrsnDiffType,
        _TransactionCurrency,
        _LocalCurrency,
        _GroupCurrency,
        _BaseUnit,
        _Order,
        _Customer,
        _Supplier,
        _MaterialGroup,
        _Plant,
        _FinancialTransactionType,
        _CostCenter,
        _ProfitCenter,
        _ProfitCenterForElim,
        _FunctionalArea,
        _BusinessArea,
        _ControllingArea,
        _Segment,
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
        _AdhocSetItem,
        @Analytics.association.toDocumentStorage: true
        _DocumentStore
}
```
