---
name: I_CNSLDTNGROUPJRNLENTRITMDEX
description: "Cnsldtngroupjrnlentritmdex"
app_component: FIN-CS-EA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-EA
  - interface-view
  - data-extraction
  - component:FIN-CS-EA-2CL
  - lob:Other
---
# I_CNSLDTNGROUPJRNLENTRITMDEX

**Cnsldtngroupjrnlentritmdex**

| Property | Value |
|---|---|
| App Component | `FIN-CS-EA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationLedger` | ✓ | |  |  |  |  |
| `ConsolidationDimension` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `CnsldtnGroupJrnlEntry` | ✓ | |  |  |  |  |
| `CnsldtnGroupJrnlEntryItem` | ✓ | |  |  |  |  |
| `GLRecordType` |  | |  |  |  |  |
| `ConsolidationVersionElement` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `LocalCurrency` |  | |  |  |  |  |
| `GroupCurrency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `Company` |  | |  |  |  |  |
| `ConsolidationUnit` |  | |  |  |  |  |
| `ConsolidationChartOfAccounts` |  | |  |  |  |  |
| `CnsldtnFinancialStatementItem` |  | |  |  |  |  |
| `PartnerConsolidationUnit` |  | |  |  |  |  |
| `ConsolidationGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `SubItemCategory` |  | |  |  |  |  |
| `SubItem` |  | |  |  |  |  |
| `PostingLevel` |  | |  |  |  |  |
| `ConsolidationApportionment` |  | |  |  |  |  |
| `CurrencyConversionsDiffType` |  | |  |  |  |  |
| `ConsolidationDocumentType` |  | |  |  |  |  |
| `ConsolidationAcquisitionYear` |  | |  |  |  |  |
| `ConsolidationAcquisitionPeriod` |  | |  |  |  |  |
| `InvesteeConsolidationUnit` |  | |  |  |  |  |
| `InvestorConsolidationUnit` |  | |  |  |  |  |
| `AmountInTransactionCurrency` |  | |  |  |  |  |
| `AmountInLocalCurrency` |  | |  |  |  |  |
| `AmountInGroupCurrency` |  | |  |  |  |  |
| `CnsldtnQuantityInBaseUnit` |  | |  |  |  |  |
| `DocumentItemText` |  | |  |  |  |  |
| `ConsolidationPostgItemAutoFlag` |  | |  |  |  |  |
| `BusinessTransactionType` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `CurrencyTranslationDate` |  | |  |  |  |  |
| `RefConsolidationDocumentNumber` |  | |  |  |  |  |
| `ReferenceFiscalYear` |  | |  |  |  |  |
| `RefConsolidationPostingItem` |  | |  |  |  |  |
| `RefConsolidationDocumentType` |  | |  |  |  |  |
| `RefBusinessTransactionType` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `UserID` |  | |  |  |  |  |
| `ReverseDocument` |  | |  |  |  |  |
| `ReversedDocument` |  | |  |  |  |  |
| `InvestmentActivityType` |  | |  |  |  |  |
| `InvestmentActivity` |  | |  |  |  |  |
| `ConsolidationDocReversalYear` |  | |  |  |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `ReferenceDocumentContext` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `ChartOfAccounts` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `FunctionalArea` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `Segment` |  | |  |  |  |  |
| `PartnerCostCenter` |  | |  |  |  |  |
| `PartnerProfitCenter` |  | |  |  |  |  |
| `PartnerFunctionalArea` |  | |  |  |  |  |
| `PartnerBusinessArea` |  | |  |  |  |  |
| `PartnerCompany` |  | |  |  |  |  |
| `PartnerSegment` |  | |  |  |  |  |
| `OrderID` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `FinancialTransactionType` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SoldProduct` |  | |  |  |  |  |
| `SoldProductGroup` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `CustomerSupplierCountry` |  | |  |  |  |  |
| `CustomerSupplierIndustry` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `CnsldtnAdhocItem` |  | |  |  |  |  |
| `CnsldtnAdhocSet` |  | |  |  |  |  |
| `CnsldtnAdhocSetItem` |  | |  |  |  |  |
| `CustomerSupplierCorporateGroup` |  | |  |  |  |  |
| `MatchingReasonCode` |  | |  |  |  |  |
| `OriginType` |  | |  |  |  |  |
| `OriginReference` |  | |  |  |  |  |
| `CnsldtnGroupJrnlEntryBundle` |  | |  |  |  |  |
| `FinancialServicesProductGroup` |  | |  |  |  |  |
| `FinancialServicesBranch` |  | |  |  |  |  |
| `FinancialDataSource` |  | |  |  |  |  |
| `GHGCategory` |  | |  |  |  |  |
| `GHGScope` |  | |  |  |  |  |
| `GHGScope2CalculationMethod` |  | |  |  |  |  |
| `GHGScope2ContractualInstrument` |  | |  |  |  |  |
| `GHGDataQualityCharacteristic` |  | |  |  |  |  |
| `GHGEnergyClassification` |  | |  |  |  |  |
| `GHGEnergyMix` |  | |  |  |  |  |
| `GHGEnergySourcingType` |  | |  |  |  |  |
| `SustainabilityModeOfTransport` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `CnsldtnCashLedgerChartOfAccts` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `PartnerFund` |  | |  |  |  |  |
| `CnsldtnSubitemCategory` |  | |  | `cast( SubItemCategory as fincs_subitemcategory preserving type )` |  |  |
| `CnsldtnSubitem` |  | |  | `cast( SubItem as fincs_subitem preserving type )` |  |  |
| `ConsolidationPostingLevel` |  | |  | `cast( PostingLevel as fincs_postinglevel preserving type )` |  |  |
| `CnsldtnCstmSignAmtInTransCrcy` |  | |  |  |  |  |
| `CnsldtnCstmSignAmtInLoclCrcy` |  | |  |  |  |  |
| `CnsldtnCstmSignAmtInGrpCrcy` |  | |  |  |  |  |
| `CnsldtnCstmSignQtyInBaseUnit` |  | |  |  |  |  |
| `CnsldtnCstmSignLongQtyInBsUnit` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnGroupJrnlEntryItem` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
    sqlViewName: 'ICJRNLENTRITMDEX',
    compiler.compareFilter: true
}
@ClientHandling: {
    algorithm: #SESSION_VARIABLE
}
@AccessControl.authorizationCheck: #CHECK
@ObjectModel: {
    usageType: {
        sizeCategory: #XL,
        serviceQuality: #D,
        dataClass: #MIXED
    },
    modelingPattern: #ANALYTICAL_FACT,
    supportedCapabilities: [#SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #EXTRACTION_DATA_SOURCE],
    sapObjectNodeType.name: 'CnsldtnGroupJournalEntryItem'
}
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics.dataExtraction:{
    enabled: true,
    delta.changeDataCapture:{
        mapping:
        [
          {
             table: 'ACDOCU' ,
             role: #MAIN,
             viewElement: ['ConsolidationLedger', 'ConsolidationDimension', 'FiscalYear', 'CnsldtnGroupJrnlEntry', 'CnsldtnGroupJrnlEntryItem'],
             tableElement: ['RLDNR', 'RDIMEN', 'RYEAR', 'DOCNR', 'DOCLN']
          }
        ]
    }
}
@EndUserText: {
    label: 'Group Journal Entry Item Extraction'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_CnsldtnGroupJrnlEntrItmDEX
  as select from P_CnsldtnGroupJrnlEntrItm

  //Extension Association
  association [1..1] to E_CnsldtnGroupJrnlEntryItem as _Extension on  $projection.ConsolidationLedger       = _Extension.ConsolidationLedger
                                                                  and $projection.ConsolidationDimension    = _Extension.ConsolidationDimension
                                                                  and $projection.FiscalYear                = _Extension.FiscalYear
                                                                  and $projection.CnsldtnGroupJrnlEntry     = _Extension.CnsldtnGroupJrnlEntry
                                                                  and $projection.CnsldtnGroupJrnlEntryItem = _Extension.CnsldtnGroupJrnlEntryItem

{
  key ConsolidationLedger,
  key ConsolidationDimension,
  key FiscalYear,
  key CnsldtnGroupJrnlEntry,
  key CnsldtnGroupJrnlEntryItem,
      GLRecordType,
      ConsolidationVersionElement,
      TransactionCurrency,
      LocalCurrency,
      GroupCurrency,
      BaseUnit,
      FiscalPeriod,
      FiscalYearPeriod,
      Company,
      ConsolidationUnit,
      ConsolidationChartOfAccounts,
      CnsldtnFinancialStatementItem,
      PartnerConsolidationUnit,
      ConsolidationGroup,
      CompanyCode,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'CnsldtnSubitemCategory'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'CnsldtnSubitemCategory'
      SubItemCategory,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'CnsldtnSubitem'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'CnsldtnSubitem'
      SubItem,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'ConsolidationPostingLevel'
      @VDM.lifecycle.status:    #DEPRECATED
      @VDM.lifecycle.successor: 'ConsolidationPostingLevel'
      PostingLevel,

      ConsolidationApportionment,
      CurrencyConversionsDiffType,
      ConsolidationDocumentType,
      ConsolidationAcquisitionYear,
      ConsolidationAcquisitionPeriod,
      InvesteeConsolidationUnit,
      InvestorConsolidationUnit,

      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      AmountInTransactionCurrency,

      @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
      AmountInLocalCurrency,

      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      AmountInGroupCurrency,

      @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
      CnsldtnQuantityInBaseUnit,

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
      ChartOfAccounts,
      GLAccount,
      AssignmentReference,
      CostCenter,
      ProfitCenter,
      FunctionalArea,
      BusinessArea,
      ControllingArea,
      Segment,
      PartnerCostCenter,
      PartnerProfitCenter,
      PartnerFunctionalArea,
      PartnerBusinessArea,
      PartnerCompany,
      PartnerSegment,
      OrderID,
      Customer,
      Supplier,
      Product,
      ProductGroup,
      Plant,
      FinancialTransactionType,
      BillingDocumentType,
      SalesOrganization,
      DistributionChannel,
      OrganizationDivision,
      SoldProduct,
      SoldProductGroup,
      CustomerGroup,
      CustomerSupplierCountry,
      CustomerSupplierIndustry,
      SalesDistrict,
      BillToParty,
      ShipToParty,
      CnsldtnAdhocItem,
      CnsldtnAdhocSet,
      CnsldtnAdhocSetItem,
      CustomerSupplierCorporateGroup,
      MatchingReasonCode,
      OriginType,
      OriginReference,
      CnsldtnGroupJrnlEntryBundle,

      // industry-specific fields financial services
      FinancialServicesProductGroup,
      FinancialServicesBranch,
      FinancialDataSource,

      // industry-specific fields  Financial services: Green House Fields
      GHGCategory,
      GHGScope,
      GHGScope2CalculationMethod,
      GHGScope2ContractualInstrument,
      GHGDataQualityCharacteristic,
      GHGEnergyClassification,
      GHGEnergyMix,
      GHGEnergySourcingType,
      SustainabilityModeOfTransport,

      // industry-specific fields  Financial services: Public Sector Fields
      FinancialManagementArea,
      Fund,
      GrantID,
      CnsldtnCashLedgerChartOfAccts,
      CashLedgerAccount,
      PartnerFund,

      // adapted field names
      cast( SubItemCategory as fincs_subitemcategory preserving type ) as CnsldtnSubitemCategory,
      cast( SubItem as fincs_subitem preserving type )                 as CnsldtnSubitem,
      cast( PostingLevel as fincs_postinglevel preserving type )       as ConsolidationPostingLevel,
           
      // Customer sign adjusted field 
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      CnsldtnCstmSignAmtInTransCrcy,
      @Semantics: { amount : {currencyCode: 'LocalCurrency'} }
      CnsldtnCstmSignAmtInLoclCrcy,
      @Semantics: { amount : {currencyCode: 'GroupCurrency'} }
      CnsldtnCstmSignAmtInGrpCrcy,
      @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
      CnsldtnCstmSignQtyInBaseUnit,
      @Semantics: { quantity : {unitOfMeasure : 'BaseUnit'} }
      CnsldtnCstmSignLongQtyInBsUnit

}
```
