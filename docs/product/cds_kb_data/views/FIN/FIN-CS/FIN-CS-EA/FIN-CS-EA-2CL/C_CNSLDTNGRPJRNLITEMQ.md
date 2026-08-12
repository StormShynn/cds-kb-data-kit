---
name: C_CNSLDTNGRPJRNLITEMQ
description: "This CDS view can be used as analytical provider (primary data source) for an analytical query. You can use it to select different financial statement item hierarchies and generate consolidation reports, for example, balance sheet or profit &amp; loss statement. Since this is a C1-released query, you can use it in the Custom Analytical Queries app and in SAP Analysis for Microsoft Office. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPJRNLITEMQ')/$value
semantic_en: "This CDS view can be used as analytical provider (primary data source) for an analytical query. You can use it to select different financial statement item hierarchies and generate consolidation reports, for example, balance sheet or profit &amp; loss statement. Since this is a C1-released query, you can use it in the Custom Analytical Queries app and in SAP Analysis for Microsoft Office. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Group Data Analysis - Query — CDS view tiêu dùng dựa trên I_CnsldtnGrpJrnlItemC."
keywords:
  - "Group Data Analysis Query"
  - "group"
  - "data"
  - "analysis"
  - "query"
  - "consolidation"
  - "version"
  - "element"
  - "fiscal"
  - "year"
  - "period"
tags:
  - FIN
  - bo:companycode
  - component:FIN-CS-EA-2CL
  - consumption-view
  - FIN-CS
  - FIN-CS-EA
  - FIN-CS-EA-2CL
  - lob:finance
---
# C_CNSLDTNGRPJRNLITEMQ

**This CDS view can be used as analytical provider (primary data source) for an analytical query. You can use it to select different financial statement item hierarchies and generate consolidation reports, for example, balance sheet or profit &amp; loss statement. Since this is a C1-released query, you can use it in the Custom Analytical Queries app and in SAP Analysis for Microsoft Office. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPJRNLITEMQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationVersion` |  | |  |  | `CHAR(3)` | Consolidation Version |
| `ConsolidationVersionElement` |  | |  |  | `CHAR(3)` | Consolidation Version Element |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Reporting Period |
| `FiscalYearPeriod` |  | |  |  | `NUMC(7)` | Fiscal Year Period |
| `PeriodMode` |  | |  |  | `CHAR(10)` | Period Mode |
| `ConsolidationChartOfAccounts` |  | |  |  | `CHAR(2)` | Consolidation Chart of Accounts |
| `FinancialStatementItem` |  | |  |  | `CHAR(10)` | Consolidation Financial Statement Item |
| `ConsolidationGroup` |  | |  |  | `CHAR(18)` | Consolidation Group |
| `ConsolidationUnit` |  | |  |  | `CHAR(18)` | Consolidation Unit |
| `ConsolidationUnitForElim` |  | |  |  | `CHAR(25)` | Consolidation Unit for Elimination |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `ConsolidationPrftCtrForElim` |  | |  |  | `CHAR(25)` | Profit Center for Elimination |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `ConsolidationSegmentForElim` |  | |  |  | `CHAR(25)` | Segment for Elimination |
| `SubItemCategory` |  | |  |  | `CHAR(3)` | Subitem Category |
| `SubItem` |  | |  |  | `CHAR(10)` | Subitem |
| `ConsolidationDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingLevel` |  | |  |  | `CHAR(2)` | Posting Level |
| `PartnerConsolidationUnit` |  | |  |  | `CHAR(18)` | Partner Consolidation Unit |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `FinancialTransactionType` |  | |  |  | `CHAR(3)` | Transaction Type |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `CurrencyConversionsDiffType` |  | |  |  | `NUMC(1)` | Currency Translation |
| `GroupCurrency` |  | |  |  | `CUKY(5)` | Group Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `LocalCurrency` |  | |  |  | `CUKY(5)` | Currency key of the local currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `AmountInGroupCurrency` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `AmountInTransactionCurrency` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `AmountInLocalCurrency` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `CnsldtnQuantityInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `CnsldtnGroupJrnlEntry` |  | |  |  | `CHAR(10)` | Group Journal Entry |
| `CnsldtnGroupJrnlEntryItem` |  | |  |  | `CHAR(6)` | Group Journal Entry Item |
| `GLRecordType` |  | |  |  | `CHAR(1)` | Record Type |
| `FiscalYearVariant` |  | |  |  | `CHAR(2)` | Fiscal Year Variant |
| `DebitCreditCode` |  | |  |  | `CHAR(1)` | Debit/Credit Indicator |
| `Company` |  | |  |  | `CHAR(6)` | Company |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Original company code |
| `ConsolidationApportionment` |  | |  |  | `NUMC(1)` | Apportionment |
| `InvesteeConsolidationUnit` |  | |  |  | `CHAR(18)` | Investee Consolidation Unit |
| `DocumentItemText` |  | |  |  | `CHAR(50)` | Item Text |
| `ConsolidationPostgItemAutoFlag` |  | |  |  | `CHAR(1)` | Indicator: Automatic posting lines |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `RefConsolidationDocumentNumber` |  | |  |  | `CHAR(10)` | Document Number of an Accounting Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `UserID` |  | |  |  | `CHAR(12)` | User Name |
| `ReverseDocument` |  | |  |  | `CHAR(10)` | Reverse Document Number |
| `ReversedDocument` |  | |  |  | `CHAR(10)` | Number of Reversed Document |
| `InvestmentActivityType` |  | |  |  | `CHAR(2)` | Consolidation of Investments Activity |
| `InvestmentActivity` |  | |  |  | `CHAR(10)` | Consolidation of Investments Activity Number |
| `ConsolidationDocReversalYear` |  | |  |  | `NUMC(4)` | Year of reversal document or reversed document |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Transaction |
| `ChartOfAccounts` |  | |  |  | `CHAR(4)` | Chart of Accounts |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `AssignmentReference` |  | |  |  | `CHAR(18)` | Assignment Number |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
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
| `PartnerFund` |  | |  |  | `CHAR(10)` | Partner Fund |
| `FinancialStatementItemHier` |  | |  | `cast(:P_FinancialStatementItemHier as fincs_ithry preserving type )` | `CHAR(10)` | Item Hierarchy |
| `ConsolidationUnitHierarchy` |  | |  | `cast(:P_ConsolidationUnitHierarchy as fincs_hryid_consunit preserving type )` | `CHAR(40)` | Consolidation Unit Hierarchy |
| `ConsolidationSegmentHierarchy` |  | |  | `cast(:P_ConsolidationSegmentHier as fincs_hryid_segment preserving type )` | `CHAR(40)` | Segment Hierarchy |
| `ConsolidationPrftCtrHierarchy` |  | |  | `cast(:P_ConsolidationPrftCtrHier as fincs_hryid_profitcenter preserving type )` | `CHAR(40)` | Profit Center Hierarchy |
| `KeyDate` |  | |  | `cast(:P_KeyDate as vdm_v_key_date preserving type )` | `DATS(8)` | Key Date |
| `CnsldtnSignAdjdAmtInTransCrcy` |  | |  | `cast ( 1 as fincs_sign_adjd_amt_trans_crcy )` | `CURR(23)` | Sign-Adjusted Amount in Transaction Currency |
| `CnsldtnSignAdjdAmtInLocalCrcy` |  | |  | `cast ( 1 as fincs_sign_adjd_amt_local_crcy )` | `CURR(23)` | Sign-Adjusted Amount in Local Currency |
| `CnsldtnSignAdjdAmtInGroupCrcy` |  | |  | `cast ( 1 as fincs_sign_adjd_amt_group_crcy )` | `CURR(23)` | Sign-Adjusted Amount in Group Currency |
| `CnsldtnSignAdjdQtyInBaseUnit` |  | |  | `cast ( 1 as fincs_sign_adjd_qty_base_unit )` | `QUAN(29)` | Sign-Adjusted Quantity |
| `CnsldtnIntSignAmtInTransCrcy` |  | |  |  | `CURR(23)` | Amount in Transaction Currency |
| `CnsldtnIntSignAmtInLocalCrcy` |  | |  |  | `CURR(23)` | Amount in Local Currency |
| `CnsldtnIntSignAmtInGroupCrcy` |  | |  |  | `CURR(23)` | Amount in Group Currency |
| `CnsldtnIntSignQtyInBaseUnit` |  | |  |  | `QUAN(29)` | Quantity |
| `_FinStmntItmHierDir` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_GroupCurrency` | | ✓ | | | | |
| `_LocalCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_SubItemCategory` | | ✓ | | | | |
| `_SubItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinStmntItmHierDir` | `I_FinStmntItmHierDir` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPJRNLITEMQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CNSLDTNGRPJRNLITEMQ')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'CSGRPJRNLITMQ',
    compiler.compareFilter: true,
    buffering.status:  #NOT_ALLOWED
}
@AccessControl: {
    authorizationCheck: #PRIVILEGED_ONLY
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
@ObjectModel: {
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #D,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #ANALYTICAL_QUERY ],
    modelingPattern: #ANALYTICAL_QUERY
}
@Analytics: {
    query: true
}
@VDM: {
    viewType: #CONSUMPTION
}
@EndUserText.label: 'Group Data Analysis - Query' // The  @EndUserText: {label: ......'} format leads to issue when using the Key User Tools

define view C_CnsldtnGrpJrnlItemQ
  with parameters
    @AnalyticsDetails.query.variableSequence : 150
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition:[{
      entity: { name:    'I_CnsldtnUnitHierDirVH',
                element: 'ConsolidationUnitHierarchy' }
    }]
    P_ConsolidationUnitHierarchy   : fincs_hryid_consunit,

    @AnalyticsDetails.query.variableSequence : 170
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition:[{
      entity: { name: 'I_CnsldtnProfitCenterHierDirVH',
                element: 'AdditionalMasterDataHierarchy' }
    }]
    P_ConsolidationPrftCtrHier     : fincs_hryid_profitcenter,

    @AnalyticsDetails.query.variableSequence : 190
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition:[{
      entity: { name:    'I_CnsldtnSegmentHierDirVH',
                element: 'ConsolidationSegmentHierarchy' }
    }]
    P_ConsolidationSegmentHier     : fincs_hryid_segment,

    @Semantics.businessDate.at: true
    @AnalyticsDetails.query.variableSequence : 210
    @Environment.systemField: #SYSTEM_DATE
    @EndUserText.label: 'Hierarchy Valid On'
    P_KeyDate                      : vdm_v_key_date,

    @AnalyticsDetails.query.variableSequence : 60
    @Consumption.defaultValue: '$'
    @Consumption.valueHelpDefinition:[{
      entity: { name:    'I_FinStmntItmHierDirVH',
                element: 'FinancialStatementItemHier' }
    }]
    @EndUserText.label: 'FS Item Hierarchy'
    P_FinancialStatementItemHier   : fincs_ithry,

    @AnalyticsDetails.query.variableSequence : 52
    @EndUserText.label: 'Consolidation Chart of Accounts'
    P_ConsolidationChartOfAccounts : fincs_itclg

  as select from I_CnsldtnGrpJrnlItemC
                  ( P_ConsolidationUnitHierarchy:   $parameters.P_ConsolidationUnitHierarchy,
                    P_ConsolidationPrftCtrHier:     $parameters.P_ConsolidationPrftCtrHier,
                    P_ConsolidationSegmentHier:     $parameters.P_ConsolidationSegmentHier,
                    P_KeyDate:                      $parameters.P_KeyDate ) as CnsldtnGrpJrnlItemC

  association [1..1] to I_FinStmntItmHierDir as _FinStmntItmHierDir on  $projection.ConsolidationChartOfAccounts       = _FinStmntItmHierDir.ConsolidationChartOfAccounts
                                                                    and _FinStmntItmHierDir.FinancialStatementItemHier = $parameters.P_FinancialStatementItemHier
{
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 20
  @EndUserText.label: 'Version'
  ConsolidationVersion,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.display: #KEY
  @EndUserText.label: 'Consolidation Version Element'
  ConsolidationVersionElement,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 30
  @EndUserText.label: 'Fiscal Year'
  FiscalYear,

  @AnalyticsDetails.query.variableSequence : 40
  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @EndUserText.label: 'Period'
  FiscalPeriod,

  @AnalyticsDetails.query.variableSequence : 50
  FiscalYearPeriod,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.variableSequence : 51
  PeriodMode,

  @AnalyticsDetails.query.variableSequence : 60
  ConsolidationChartOfAccounts,

  @Consumption.filter: {
    hierarchyBinding : [
                        { type : #PARAMETER, value : 'P_ConsolidationChartOfAccounts'},
                        { type : #PARAMETER, value : 'P_FinancialStatementItemHier'}],
    selectionType: #HIERARCHY_NODE,
    multipleSelections: true,
    mandatory:          false
    }
  @AnalyticsDetails.query: {
      variableSequence :  70,
      axis:               #ROWS,
      display:            #KEY_TEXT,
      displayHierarchy:   #FILTER,
      hierarchyInitialLevel: 2
      }
  @Consumption.semanticObject: 'ConsolidationFinanceSItem'
  FinancialStatementItem,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: true}
  @AnalyticsDetails.query.variableSequence : 10
  @EndUserText.label: 'Consolidation Group'
  ConsolidationGroup,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 130,
  axis: #FREE,
  display: #KEY
  }
  @EndUserText.label:'Consolidation Unit'
  @Consumption.semanticObject: 'ConsolidationOrgUnit'
  ConsolidationUnit,

  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #KEY
  @EndUserText.label: 'Consolidation Unit Eliminated'
  ConsolidationUnitForElim,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 200,
  axis: #FREE,
  display: #KEY
  }
  @EndUserText.label:'Profit Center'
  ProfitCenter,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Profit Center Eliminated'
  ConsolidationPrftCtrForElim,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query: {
  variableSequence : 195,
  axis: #FREE,
  display: #KEY
  }
  @EndUserText.label:'Segment'
  Segment,

  @AnalyticsDetails.query.axis: #FREE
  @EndUserText.label: 'Segment Eliminated'
  ConsolidationSegmentForElim,

  @ObjectModel.foreignKey.association: '_SubItemCategory'
  SubItemCategory,

  @ObjectModel.foreignKey.association: '_SubItem'
  SubItem,
  ConsolidationDocumentType,
  PostingLevel,
  PartnerConsolidationUnit,
  PartnerProfitCenter,
  PartnerSegment,

  @ObjectModel.foreignKey.association: '_ControllingArea'
  ControllingArea,
  CostCenter,
  FinancialTransactionType,

  FunctionalArea,
  CurrencyConversionsDiffType,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: true, mandatory: false}
  @AnalyticsDetails.query.variableSequence : 90
  @EndUserText.label: 'Group Currency'
  @Consumption.hidden: false
  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_GroupCurrency'
  GroupCurrency,

  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  TransactionCurrency,

  @Semantics.currencyCode:true
  @ObjectModel.foreignKey.association: '_LocalCurrency'
  LocalCurrency,

  @Semantics.unitOfMeasure: true
  @ObjectModel.foreignKey.association: '_BaseUnit'
  BaseUnit,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  @Consumption.semanticObject: 'ConsolidationJournalEntryList'
  AmountInGroupCurrency,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  AmountInTransactionCurrency,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  AmountInLocalCurrency,

  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  CnsldtnQuantityInBaseUnit,

  CnsldtnGroupJrnlEntry,
  CnsldtnGroupJrnlEntryItem,
  GLRecordType,
  FiscalYearVariant,
  DebitCreditCode,
  Company,
  CompanyCode,
  ConsolidationApportionment,
  InvesteeConsolidationUnit,
  DocumentItemText,
  ConsolidationPostgItemAutoFlag,
  PostingDate,
  RefConsolidationDocumentNumber,
  CreationDate,
  CreationTime,
  UserID,
  ReverseDocument,
  ReversedDocument,
  InvestmentActivityType,
  InvestmentActivity,
  ConsolidationDocReversalYear,
  ReferenceDocumentType,
  ChartOfAccounts,
  GLAccount,
  AssignmentReference,
  BusinessArea,
  PartnerCostCenter,
  PartnerFunctionalArea,
  PartnerBusinessArea,
  PartnerCompany,
  OrderID,
  Customer,
  Supplier,
  Plant,
  BillingDocumentType,
  SalesOrganization,
  DistributionChannel,
  OrganizationDivision,
  MaterialGroup,
  SoldProduct,
  SoldProductGroup,
  CustomerGroup,
  CustomerSupplierCountry,
  CustomerSupplierIndustry,
  SalesDistrict,
  BillToParty,
  ShipToParty,
  CustomerSupplierCorporateGroup,

  @Consumption.filter: {selectionType: #SINGLE, multipleSelections: false, mandatory: false}
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnAdhocItem,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnAdhocSet,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnAdhocSetItem,

  //Additional Fields - ICMR
  MatchingReasonCode,
  OriginType,
  OriginReference,

  //Industry-specific fields  Financial services: Banking Fields
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  FinancialServicesProductGroup,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  FinancialServicesBranch,

  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  FinancialDataSource,

  // industry-specific fields  Financial services: Green House Fields
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGCategory,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGScope,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGScope2CalculationMethod,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGScope2ContractualInstrument,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGDataQualityCharacteristic,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGEnergyClassification,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGEnergyMix,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GHGEnergySourcingType,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  SustainabilityModeOfTransport,

  // industry-specific fields  Financial services: Public Sector Fields
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  FinancialManagementArea,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  Fund,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  GrantID,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CnsldtnCashLedgerChartOfAccts,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  CashLedgerAccount,
  @AnalyticsDetails.query.axis: #FREE
  @AnalyticsDetails.query.totals: #HIDE
  PartnerFund,

  cast(:P_FinancialStatementItemHier as fincs_ithry preserving type )              as FinancialStatementItemHier,
  //----------------------------------------------------------------------------------------------------------------
  // the following parameters can be deleted in successor versions
  cast(:P_ConsolidationUnitHierarchy as fincs_hryid_consunit preserving type )     as ConsolidationUnitHierarchy,
  cast(:P_ConsolidationSegmentHier   as fincs_hryid_segment preserving type )      as ConsolidationSegmentHierarchy,
  cast(:P_ConsolidationPrftCtrHier   as fincs_hryid_profitcenter preserving type ) as ConsolidationPrftCtrHierarchy,
  cast(:P_KeyDate                    as vdm_v_key_date preserving type )           as KeyDate,
  //----------------------------------------------------------------------------------------------------------------

  @Semantics.amount.currencyCode: 'TransactionCurrency'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignAmtInTransCrcy else $projection.CnsldtnIntSignAmtInTransCrcy * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_amt_trans_crcy )                                     as CnsldtnSignAdjdAmtInTransCrcy,

  @Semantics.amount.currencyCode: 'LocalCurrency'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignAmtInLocalCrcy else $projection.CnsldtnIntSignAmtInLocalCrcy * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_amt_local_crcy )                                     as CnsldtnSignAdjdAmtInLocalCrcy,

  @Semantics.amount.currencyCode: 'GroupCurrency'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignAmtInGroupCrcy else $projection.CnsldtnIntSignAmtInGroupCrcy * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_amt_group_crcy )                                     as CnsldtnSignAdjdAmtInGroupCrcy,

  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  @AnalyticsDetails.query.formula: 'case when noerr(HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem)) = 0 then $projection.CnsldtnIntSignQtyInBaseUnit else $projection.CnsldtnIntSignQtyInBaseUnit * HRY_NODE_SIGN_VALUE($projection.FinancialStatementItem) end'
  cast ( 1 as fincs_sign_adjd_qty_base_unit )                                      as CnsldtnSignAdjdQtyInBaseUnit,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
  @Consumption.hidden: true
  CnsldtnIntSignAmtInTransCrcy,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
  @Consumption.hidden: true
  CnsldtnIntSignAmtInLocalCrcy,

  @Aggregation.default: #SUM
  @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
  @Consumption.semanticObject: 'ConsolidationJournalEntryList'
  @Consumption.hidden: true
  CnsldtnIntSignAmtInGroupCrcy,

  @Aggregation.default: #SUM
  @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
  @Consumption.hidden: true
  CnsldtnIntSignQtyInBaseUnit,

  _FinStmntItmHierDir,
  _ControllingArea,
  _TransactionCurrency,
  _GroupCurrency,
  _LocalCurrency,
  _BaseUnit,
  _SubItemCategory,
  _SubItem
}
where
      ConsolidationChartOfAccounts =  :P_ConsolidationChartOfAccounts
  and GLRecordType                 <> 'R'
```
