---
name: I_GVOAGRPJRNLITEMC
description: "Use this CDS view to extend the Group View on Accounting review booklet. This CDS view provides the data to answer the following business questions: What are the consolidated financial results for a specific fiscal year and period? How do financial results vary across different consolidation units and groups? What are the amounts in transaction, local, and group currencies for specific financial statement items? How do different business transaction types impact the consolidated financial statements? What is the impact of currency conversion differences on the consolidated financial results? How do specific consolidation document types and posting levels affect the financial consolidation process? What are the quantities and amounts associated with specific financial transactions in base units? How do industry-specific fields, such as those for financial services or public sector, influence the financial consolidation outcomes? What is the relationship between various financial dimensions, such as cost centers, profit centers, and segments, in the context of consolidation? How do partner units and intercompany transactions affect the overall consolidation results? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOAGRPJRNLITEMC')/$value
semantic_en: "Use this CDS view to extend the Group View on Accounting review booklet. This CDS view provides the data to answer the following business questions: What are the consolidated financial results for a specific fiscal year and period? How do financial results vary across different consolidation units and groups? What are the amounts in transaction, local, and group currencies for specific financial statement items? How do different business transaction types impact the consolidated financial statements? What is the impact of currency conversion differences on the consolidated financial results? How do specific consolidation document types and posting levels affect the financial consolidation process? What are the quantities and amounts associated with specific financial transactions in base units? How do industry-specific fields, such as those for financial services or public sector, influence the financial consolidation outcomes? What is the relationship between various financial dimensions, such as cost centers, profit centers, and segments, in the context of consolidation? How do partner units and intercompany transactions affect the overall consolidation results? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "GVOA - Cube — CDS view tổng hợp dựa trên I_MatrixCnsldtnFoundation."
keywords:
  - "GVOA - Cube"
  - "gvoa"
  - "cube"
  - "fiscal"
  - "year"
  - "cnsldtn"
  - "group"
  - "jrnl"
  - "entry"
  - "item"
  - "consolidation"
  - "period"
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
  - transaction
---
# I_GVOAGRPJRNLITEMC

**Use this CDS view to extend the Group View on Accounting review booklet. This CDS view provides the data to answer the following business questions: What are the consolidated financial results for a specific fiscal year and period? How do financial results vary across different consolidation units and groups? What are the amounts in transaction, local, and group currencies for specific financial statement items? How do different business transaction types impact the consolidated financial statements? What is the impact of currency conversion differences on the consolidated financial results? How do specific consolidation document types and posting levels affect the financial consolidation process? What are the quantities and amounts associated with specific financial transactions in base units? How do industry-specific fields, such as those for financial services or public sector, influence the financial consolidation outcomes? What is the relationship between various financial dimensions, such as cost centers, profit centers, and segments, in the context of consolidation? How do partner units and intercompany transactions affect the overall consolidation results? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOAGRPJRNLITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  | `NUMC(4)` | Fiscal Year |
| `CnsldtnGroupJrnlEntry` | ✓ | |  | `cast(ConsolidationDocumentNumber as fincs_group_jrnl_entry preserving type)` | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` | ✓ | |  | `cast(ConsolidationPostingItem as fincs_group_jrnl_entry_item preserving type)` | `CHAR(6)` | Group Journal Entry Item |
| `ConsolidationGroup` | ✓ | |  | `cast( ConsolidationGroup as fincs_md_congr preserving type )` | `CHAR(18)` | Consolidation Group |
| `FiscalPeriod` | ✓ | |  |  | `NUMC(3)` | Reporting Period |
| `PeriodMode` | ✓ | |  |  | `CHAR(10)` | Period Mode |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `ConsolidationDimension` |  | |  |  | `CHAR(2)` | Dimension |
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `FiscalYearPeriod` |  | |  | `cast( FiscalYearPeriod as fis_jahrper_conv preserving type )` | `NUMC(7)` | Fiscal Year Period |
| `FiscalYearQuarter` |  | |  |  | `NUMC(5)` | Fiscal Year + Fiscal Quarter |
| `FiscalQuarter` |  | |  |  | `NUMC(1)` | Fiscal Quarter |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `ConsolidationUnit` |  | |  | `cast( ConsolidationUnit as fincs_consolidationunit preserving type )` | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  | `cast( FinancialStatementItem as fincs_md_finstatementitem preserving type )` | `CHAR(10)` | Consolidation Financial Statement Item |
| `PartnerConsolidationUnit` |  | |  | `cast( PartnerConsolidationUnit as fincs_cnsldtnpartnerunit preserving type )` | `CHAR(18)` | Partner Consolidation Unit |
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
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
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
| `Project` |  | |  | `cast(Project as ps_pspid_edit preserving type)` | `CHAR(24)` | Project Number (External) Edited |
| `WBSElement` |  | |  | `cast( WBSElementExternalID as ps_posid_edit preserving type )` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
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
| `Currency` |  | |  | `cast( LocalCurrency as fincs_currency preserving type )` | `CUKY(5)` | Currency |
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
| `_PeriodModeText` | | ✓ | | | | |
| `_CnsldtnUnit_4` | | ✓ | | | | |
| `_CnsldtnUnitForElimination_2` | | ✓ | | | | |
| `_CnsldtnGroup_3` | | ✓ | | | | |
| `_FinStmntItm_2` | | ✓ | | | | |
| `_PartnerUnit_4` | | ✓ | | | | |
| `_GLAccountInChartOfAccounts_2` | | ✓ | | | | |
| `_DocumentType_2` | | ✓ | | | | |
| `_InvesteeUnit_4` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SoldProductGroup` | | ✓ | | | | |
| `_InvestorUnit` | | ✓ | | | | |
| `_DocumentStore` | | ✓ | | | | |
| `_Version` | | ✓ | | | | |
| `_Company` | | ✓ | | | | |
| `_ChartOfAccounts` | | ✓ | | | | |
| `_GLChartOfAccounts` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |
| `_DebitCreditCode` | | ✓ | | | | |
| `_PostingLevel` | | ✓ | | | | |
| `_Apportionment` | | ✓ | | | | |
| `_CrcyCnvrsnDiffType` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
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
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SoldProduct` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Industry` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_BillToParty` | | ✓ | | | | |
| `_ShipToParty` | | ✓ | | | | |
| `_AdhocItem` | | ✓ | | | | |
| `_AdhocSet` | | ✓ | | | | |
| `_AdhocSetItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnGroupJrnlEntryItem_3` | [1..1] |
| `_PeriodModeText` | `I_CnsldtnPeriodModeText` | [0..1] |
| `_CnsldtnUnit_4` | `I_CnsldtnUnit_4` | [1..1] |
| `_CnsldtnUnitForElimination_2` | `I_CnsldtnUnitForElimination_2` | [1..1] |
| `_CnsldtnGroup_3` | `I_CnsldtnGroup_3` | [1..1] |
| `_FinStmntItm_2` | `I_CnsldtnFSItem_2` | [1..1] |
| `_PartnerUnit_4` | `I_CnsldtnUnit_4` | [0..1] |
| `_GLAccountInChartOfAccounts_2` | `I_CnsldtnGLAccount_2` | [0..1] |
| `_DocumentType_2` | `I_CnsldtnDocumentType_2` | [1..1] |
| `_InvesteeUnit_4` | `I_CnsldtnUnit_4` | [0..1] |
| `_Order` | `I_CnsldtnOrder` | [0..1] |
| `_WBSElement` | `I_CnsldtnWBSElement` | [0..1] |
| `_BillingDocumentType` | `I_CnsldtnBillingDocumentType` | [0..1] |
| `_SoldProductGroup` | `I_CnsldtnProductGroup` | [0..1] |
| `_InvestorUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_DocumentStore` | `I_GVoAGrpJrnlItmDSt` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOAGRPJRNLITEMC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GVOAGRPJRNLITEMC')/$value)*

```abap
@AbapCatalog: {
    entityBuffer: {
    definitionAllowed: false
 }
}
@Analytics: {
    technicalName: 'IGVAGRPJRLITM',
    dataCategory:  #CUBE,
    readClassName: 'CL_FINCS_GVA_CUBE',
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
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #D,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #ANALYTICAL_PROVIDER ],
    modelingPattern: #ANALYTICAL_CUBE
}
@VDM: {
    viewType: #COMPOSITE
}
@EndUserText.label: 'GVOA - Cube'

@Analytics.intentBasedNavigation.filterMapper: 'CL_FINCS_GVA_CUBE_EXIT'

define view entity I_GVoAGrpJrnlItemC
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
    P_KeyDate                    : vdm_v_key_date

  //=================================================================================================
  // The underlying view stack (I_MatrixCnsldtnFoundation) is only used for the
  // syntactically correct definition of typed elements.
  // The cube result in a query scenario is not influenced by the underlying view stack
  // because of the ABAP breakout defined by annotation @Analytics.readClassName.
  // For example the ABAP breakout reads transactional data from both ACDOCA and ACDOCU,
  // which is not reflected by the static underlying CDS view stack.
  //=================================================================================================
  as select from I_MatrixCnsldtnFoundation
                 ( P_ConsolidationUnitHierarchy:  $parameters.P_ConsolidationUnitHierarchy,
                   P_ConsolidationPrftCtrHier:    $parameters.P_ConsolidationPrftCtrHier,
                   P_ConsolidationSegmentHier:    $parameters.P_ConsolidationSegmentHier,
                   P_KeyDate:                     $parameters.P_KeyDate
                 ) as MatrixCnsldtnFoundation

  //Extension Association
  association [1..1] to E_CnsldtnGroupJrnlEntryItem_3 as _Extension                    on  $projection.FiscalYear                = _Extension.FiscalYear
                                                                                       and $projection.CnsldtnGroupJrnlEntry     = _Extension.CnsldtnGroupJrnlEntry
                                                                                       and $projection.CnsldtnGroupJrnlEntryItem = _Extension.CnsldtnGroupJrnlEntryItem

  association [0..1] to I_CnsldtnPeriodModeText       as _PeriodModeText               on  $projection.PeriodMode   = _PeriodModeText.PeriodMode
                                                                                       and _PeriodModeText.Language = $session.system_language

  association [1..1] to I_CnsldtnUnit_4               as _CnsldtnUnit_4                on  $projection.ConsolidationUnit = _CnsldtnUnit_4.ConsolidationUnit

  association [1..1] to I_CnsldtnUnitForElimination_2 as _CnsldtnUnitForElimination_2  on  $projection.ConsolidationUnitForElim = _CnsldtnUnitForElimination_2.ConsolidationUnit

  association [1..1] to I_CnsldtnGroup_3              as _CnsldtnGroup_3               on  $projection.ConsolidationGroup = _CnsldtnGroup_3.ConsolidationGroup

  association [1..1] to I_CnsldtnFSItem_2             as _FinStmntItm_2                on  $projection.ConsolidationChartOfAccounts = _FinStmntItm_2.ConsolidationChartOfAccounts
                                                                                       and $projection.FinancialStatementItem       = _FinStmntItm_2.CnsldtnFinancialStatementItem

  association [0..1] to I_CnsldtnUnit_4               as _PartnerUnit_4                on  $projection.PartnerConsolidationUnit = _PartnerUnit_4.ConsolidationUnit

  association [0..1] to I_CnsldtnGLAccount_2          as _GLAccountInChartOfAccounts_2 on  $projection.ChartOfAccounts = _GLAccountInChartOfAccounts_2.ChartOfAccounts
                                                                                       and $projection.GLAccount       = _GLAccountInChartOfAccounts_2.GLAccount

  association [1..1] to I_CnsldtnDocumentType_2       as _DocumentType_2               on  $projection.ConsolidationDocumentType = _DocumentType_2.ConsolidationDocumentType

  association [0..1] to I_CnsldtnUnit_4               as _InvesteeUnit_4               on  $projection.InvesteeConsolidationUnit = _InvesteeUnit_4.ConsolidationUnit

  association [0..1] to I_CnsldtnOrder                as _Order                        on  $projection.OrderID = _Order.OrderID

  association [0..1] to I_CnsldtnWBSElement           as _WBSElement                   on  $projection.Project    = _WBSElement.Project
                                                                                       and $projection.WBSElement = _WBSElement.WBSElement

  association [0..1] to I_CnsldtnBillingDocumentType  as _BillingDocumentType          on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [0..1] to I_CnsldtnProductGroup         as _SoldProductGroup             on  $projection.SoldProductGroup = _SoldProductGroup.ProductGroup

  association [0..1] to I_CnsldtnUnit_4               as _InvestorUnit                 on  $projection.InvestorConsolidationUnit = _InvestorUnit.ConsolidationUnit

  // The association _CnsldtnProject causes ATC error due to incompatible type of element Project (ABPS conversion routine exists only in MD view)
  //  association [0..1] to I_CnsldtnProject              as _CnsldtnProject               on  $projection.Project = _CnsldtnProject.Project

  //document store association
  association [0..1] to I_GVoAGrpJrnlItmDSt           as _DocumentStore                on  _DocumentStore.tra_fiscalyear   = $projection.FiscalYear
                                                                                       and _DocumentStore.tra_00067        = $projection.CnsldtnGroupJrnlEntry
                                                                                       and _DocumentStore.tra_00087        = $projection.CnsldtnGroupJrnlEntryItem
                                                                                       and _DocumentStore.tra_00082        = $projection.ConsolidationGroup
                                                                                       and _DocumentStore.tra_fiscalperiod = $projection.FiscalPeriod
                                                                                       and _DocumentStore.tra_periodmode   = $projection.PeriodMode
{
        @Semantics.fiscal.year: true
  key   FiscalYear,

  key   cast(ConsolidationDocumentNumber as fincs_group_jrnl_entry preserving type)    as CnsldtnGroupJrnlEntry,

  key   cast(ConsolidationPostingItem as fincs_group_jrnl_entry_item preserving type)  as CnsldtnGroupJrnlEntryItem,

        @ObjectModel.foreignKey.association: '_CnsldtnGroup_3'
  key   cast( ConsolidationGroup as fincs_md_congr preserving type )                   as ConsolidationGroup,

        @Semantics.fiscal.period: true
  key   FiscalPeriod,

  key   PeriodMode,


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

        @Semantics.fiscal.yearPeriod: true
        cast( FiscalYearPeriod as fis_jahrper_conv preserving type )                   as FiscalYearPeriod,

        @Semantics.fiscal.yearQuarter: true
        FiscalYearQuarter,

        @Semantics.fiscal.quarter: true
        FiscalQuarter,

        @Semantics.fiscal.yearVariant: true
        FiscalYearVariant,

        @ObjectModel.foreignKey.association: '_DocumentType_2'
        ConsolidationDocumentType,

        @ObjectModel.foreignKey.association: '_DebitCreditCode'
        DebitCreditCode,

        @ObjectModel.foreignKey.association: '_Company'
        Company,

        @ObjectModel.foreignKey.association: '_CnsldtnUnit_4'
        cast( ConsolidationUnit as fincs_consolidationunit preserving type )           as ConsolidationUnit,

        @ObjectModel.foreignKey.association: '_CnsldtnUnitForElimination_2'
        ConsolidationUnitForElim,

        @ObjectModel.foreignKey.association: '_ChartOfAccounts'
        ConsolidationChartOfAccounts,

        @ObjectModel.foreignKey.association: '_FinStmntItm_2'
        cast( FinancialStatementItem as fincs_md_finstatementitem preserving type )    as FinancialStatementItem,

        @ObjectModel.foreignKey.association: '_PartnerUnit_4'
        cast( PartnerConsolidationUnit as fincs_cnsldtnpartnerunit preserving type )   as PartnerConsolidationUnit,

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
        cast( InvesteeConsolidationUnit as fincs_cnsldtninvesteeunit preserving type ) as InvesteeConsolidationUnit,

        @ObjectModel.foreignKey.association: '_InvestorUnit'
        cast( InvestorConsolidationUnit as fincs_cnsldtninvesteeunit preserving type ) as InvestorConsolidationUnit,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        AmountInTransactionCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        AmountInLocalCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
        AmountInGroupCurrency,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        CnsldtnQuantityInBaseUnit,

        DocumentItemText,

        ConsolidationPostgItemAutoFlag,

        BusinessTransactionType,

        PostingDate,
        CurrencyTranslationDate,
        RefConsolidationDocumentNumber,

        @Semantics.fiscal.year: true
        ReferenceFiscalYear,

        RefConsolidationPostingItem,
        RefConsolidationDocumentType,
        RefBusinessTransactionType,
        CreationDateTime,
        cast( 'X' as fincs_cnsldtnpullreq_state )                                      as CnsldtnPullRequestState, // The Value of CnsldtnPullRequestState will be determinated in the ABAP-Breakout : CnsldtnPullRequestState = 'X' will means released
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
        @ObjectModel.foreignKey.association: '_BillingDocumentType'
        BillingDocumentType,
        @ObjectModel.foreignKey.association: '_SalesOrganization'
        SalesOrganization,
        @ObjectModel.foreignKey.association: '_DistributionChannel'
        DistributionChannel,
        @ObjectModel.foreignKey.association: '_Division'
        OrganizationDivision,
        @ObjectModel.foreignKey.association: '_Material'
        Material,
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

        // Additionnal Flieds: AdHoc Item
        @ObjectModel.foreignKey.association: '_AdhocItem'
        CnsldtnAdhocItem,
        @ObjectModel.foreignKey.association: '_AdhocSet'
        CnsldtnAdhocSet,
        @ObjectModel.foreignKey.association: '_AdhocSetItem'
        CnsldtnAdhocSetItem,
        cast(Project as ps_pspid_edit preserving type)                                 as Project,
        cast( WBSElementExternalID as ps_posid_edit  preserving type )                 as WBSElement,

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

        cast( LocalCurrency as fincs_currency preserving type )                        as Currency,

        //=======================================================================================================================
        // hidden elements used during virtual cube processing in ON conditions of joins
        @Consumption.hidden: true
        cast( '' as fins_ledger )                                                      as Ledger,

        @Semantics.fiscal.year: true
        @Consumption.hidden: true
        cast( '' as fis_ryear_no_conv )                                                as LedgerFiscalYear,

        @Consumption.hidden: true
        cast( '' as fincs_gcind )                                                      as DocumentEntryIsInGroupCurrency,

        @Consumption.hidden: true
        cast( '' as fincs_group_curr_source )                                          as CnsldtnVersionGroupCrcySource,

        @Consumption.hidden: true
        cast( '' as fincs_consbreakdowncategory )                                      as BreakdownCategory,

        //      TODO: update the currency code of following Amounts
        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
        @Consumption.hidden: true
        AmountInTransactionCurrency                                                    as AmountInBalanceTransacCrcy,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_hsl )                                                         as AmountInCompanyCodeCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_osl )                                                         as AmountInFreeDefinedCurrency1,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_vsl )                                                         as AmountInFreeDefinedCurrency2,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_bsl )                                                         as AmountInFreeDefinedCurrency3,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_csl )                                                         as AmountInFreeDefinedCurrency4,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_dsl )                                                         as AmountInFreeDefinedCurrency5,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_esl )                                                         as AmountInFreeDefinedCurrency6,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_fsl )                                                         as AmountInFreeDefinedCurrency7,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_gsl )                                                         as AmountInFreeDefinedCurrency8,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_vfccur12 )                                                    as AmountInFunctionalCurrency,

        @Aggregation.default: #SUM
        @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
        @Consumption.hidden: true
        cast( '1' as fis_ksl )                                                         as AmountInGlobalCurrency,

        @Consumption.hidden: true
        cast( '' as fis_co_meinh )                                                     as CostSourceUnit,

        @Consumption.hidden: true
        cast( '' as fis_ref_qty_uom )                                                  as ReferenceQuantityUnit,

        @Consumption.hidden: true
        cast( '' as fis_qunit1 )                                                       as AdditionalQuantity1Unit,

        @Consumption.hidden: true
        cast( '' as fis_qunit2 )                                                       as AdditionalQuantity2Unit,

        @Consumption.hidden: true
        cast( '' as fis_qunit3 )                                                       as AdditionalQuantity3Unit,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as quan1_12 )                                                        as QuantityInBaseUnit,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as quan1_12 )                                                        as Quantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan1_12_fix   )                                              as FixedQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_vquan1_12 )                                                   as ValuationQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_vquan1_12_fix   )                                             as ValuationFixedQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as rquan1_12 )                                                       as ReferenceQuantity,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan1_l )                                                     as AdditionalQuantity1,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan2_l )                                                     as AdditionalQuantity2,

        @Aggregation.default: #SUM
        @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
        @Consumption.hidden: true
        cast( '1' as fis_quan3_l )                                                     as AdditionalQuantity3,

        //=======================================================================================================================

        _Version,

        _PeriodModeText,

        _Company,

        _CnsldtnUnit_4,

        _CnsldtnUnitForElimination_2,

        _CnsldtnGroup_3,

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

        _Material,

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
