---
name: I_BSORDGLACCTLINEITEMCUBE
description: "Bsordglacctlineitemcube"
app_component: CRM-S4-ANA-CDS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - analytical
  - item-level
  - component:CRM-S4-ANA-CDS-2CL
  - lob:Other
---
# I_BSORDGLACCTLINEITEMCUBE

**Bsordglacctlineitemcube**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-CDS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |  |  |
| `BusinessSolutionOrder` | ✓ | |  |  |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |  |  |
| `CompanyCode` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `AccountingDocument` | ✓ | |  |  |  |  |
| `LedgerGLLineItem` | ✓ | |  |  |  |  |
| `SemanticTag` | ✓ | |  |  |  |  |
| `BusSolnOrdType` |  | |  |  |  |  |
| `BusSolnOrdDescription` |  | |  |  |  |  |
| `BusSolnOrdItmDescription` |  | |  |  |  |  |
| `BusSolnOrdItmStatus` |  | |  |  |  |  |
| `BusSolnOrdStatus` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `$parameters.P_DisplayCurrency` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `CompanyCodeCurrency` |  | |  |  |  |  |
| `RevenueAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `CostAmountInCompanyCodeCrcy` |  | |  |  |  |  |
| `RecognizedMarginAmtInCCCrcy` |  | |  |  |  |  |
| `SlsItmRevenueAmount` |  | |  |  |  |  |
| `SrvcContrItmRevenueAmount` |  | |  |  |  |  |
| `ExpnItmRevenueAmount` |  | |  |  |  |  |
| `SbscrBilgItmRevenueAmount` |  | |  |  |  |  |
| `SrvcPrtItmRevenueAmount` |  | |  |  |  |  |
| `SrvcItmRevenueAmount` |  | |  |  |  |  |
| `EntProjItmRevenueAmount` |  | |  |  |  |  |
| `CalendarYear` |  | | `_CalendarPeriod` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_CalendarPeriod` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_CalendarPeriod` | `CalendarMonth` |  |  |
| `FiscalYearVariant` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalQuarter` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `_ServiceObjType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_JournalEntry` | | ✓ | | | | |
| `_SemanticTag` | | ✓ | | | | |
| `_ServiceDocumentType` | | ✓ | | | | |
| `_ServiceDocItemStatus` | | ✓ | | | | |
| `_SrvcDocItmLifecycleStatus` | | ✓ | | | | |
| `_ServiceDocumentStatus` | | ✓ | | | | |
| `_SrvcDocLifecycleStatus` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_FiscalYearVariant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CalendarPeriod` | `I_CalendarDate` | [1] |

## Source Code

```abap
@EndUserText.label: 'GL Account Item for Soln Order - Cube'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'IBSGLLINITMCUBE',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
   dataCategory: #CUBE,
   internalName: #LOCAL
   }
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XXL
   },
   supportedCapabilities: [#ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   modelingPattern: #ANALYTICAL_CUBE
}
@Aggregation.allowPrecisionLoss:true
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

define view I_BSOrdGLAcctLineItemCube
  with parameters
    P_DisplayCurrency : vdm_v_display_currency

  as select from P_BSOrdGLAcctLineItemCube

  association [1] to I_CalendarDate as _CalendarPeriod on $projection.PostingDate = _CalendarPeriod.CalendarDate

{
          @ObjectModel.foreignKey.association: '_ServiceObjType'
  key     ServiceObjectType,
          @ObjectModel.text.element: 'BusSolnOrdDescription'
          @EndUserText.label: 'Solution Order'
  key     BusinessSolutionOrder,

          @ObjectModel.text.element: 'BusSolnOrdItmDescription'
          @EndUserText.label: 'Solution Order Item'
  key     BusinessSolutionOrderItem,

          @ObjectModel.foreignKey.association: '_CompanyCode'
          @Environment.sql.passValue: true
  key     CompanyCode,

          @ObjectModel.foreignKey.association: '_FiscalYear'
          @Environment.sql.passValue: true
  key     FiscalYear,

          @ObjectModel.foreignKey.association: '_JournalEntry'
  key     AccountingDocument,
  key     LedgerGLLineItem,

          @ObjectModel.foreignKey.association: '_SemanticTag'
  key     SemanticTag,


          @ObjectModel.foreignKey.association: '_ServiceDocumentType'
          @EndUserText.label: 'Solution Order Type'
          BusSolnOrdType,

          @Semantics.text: true
          @EndUserText.label: 'Solution Order Description'
          BusSolnOrdDescription,

          @Semantics.text: true
          BusSolnOrdItmDescription,

          @ObjectModel.foreignKey.association: '_SrvcDocItmLifecycleStatus'
          @EndUserText.label: 'Solution Order Item Status'
          BusSolnOrdItmStatus,

          @ObjectModel.foreignKey.association: '_SrvcDocLifecycleStatus'
          @EndUserText.label: 'Solution Order Status'
          BusSolnOrdStatus,

          @ObjectModel.foreignKey.association: '_TransactionCurrency'
          @Semantics.currencyCode:true
          TransactionCurrency,

          @Semantics.currencyCode: true
          $parameters.P_DisplayCurrency   as DisplayCurrency,
          

          @ObjectModel.foreignKey.association: '_SalesOrganization'
          SalesOrganization,
          @ObjectModel.foreignKey.association: '_DistributionChannel'
          DistributionChannel,
          @ObjectModel.foreignKey.association: '_Division'
          Division,
          @ObjectModel.foreignKey.association: '_SalesOffice'
          SalesOffice,
          @ObjectModel.foreignKey.association: '_SalesGroup'
          SalesGroup,
          @ObjectModel.foreignKey.association: '_SoldToParty'
          SoldToParty,

          PostingDate,
          @Semantics.currencyCode:true
          CompanyCodeCurrency,
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          @DefaultAggregation: #SUM
          @EndUserText.label: 'Recognized Revenue'
          RevenueAmountInCompanyCodeCrcy,
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          @DefaultAggregation: #SUM
          @EndUserText.label: 'Recognized Cost'
          CostAmountInCompanyCodeCrcy,
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          @DefaultAggregation: #SUM
          @EndUserText.label: 'Recognized Margin'
          RecognizedMarginAmtInCCCrcy,

          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SlsItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SrvcContrItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          ExpnItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SbscrBilgItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SrvcPrtItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          SrvcItmRevenueAmount,
          
          @DefaultAggregation: #SUM
          @Semantics: { amount : {currencyCode: 'CompanyCodeCurrency'} }
          EntProjItmRevenueAmount,
          
          @Semantics.calendar.year
          _CalendarPeriod.CalendarYear    as CalendarYear,
          @Semantics.calendar.quarter
          _CalendarPeriod.CalendarQuarter as CalendarQuarter,
          @Semantics.calendar.month
          _CalendarPeriod.CalendarMonth   as CalendarMonth,

          @Semantics.fiscal.yearVariant: true
          @ObjectModel.foreignKey.association: '_FiscalYearVariant'
          FiscalYearVariant,
          FiscalPeriod,
          FiscalQuarter,
          Product,

          _ServiceObjType,
          _CompanyCode,
          _FiscalYear,
          _JournalEntry,
          _SemanticTag,
          _ServiceDocumentType,
          @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_SrvcDocItmLifecycleStatus'
          _ServiceDocItemStatus,
          _SrvcDocItmLifecycleStatus,
          @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_SrvcDocLifecycleStatus'
          _ServiceDocumentStatus,
          _SrvcDocLifecycleStatus,
          _TransactionCurrency,
          _SalesOrganization,
          _DistributionChannel,
          _Division,
          _SalesOffice,
          _SalesGroup,
          _SoldToParty,
          _CalendarPeriod._CalendarYear,
          _CalendarPeriod._CalendarQuarter,
          _CalendarPeriod._CalendarMonth,
          _FiscalYearVariant
          
}
```
