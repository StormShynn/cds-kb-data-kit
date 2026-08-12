---
name: C_BILLGDOCITMPRCGELMNTBSCDEX_1
description: "Billgdocitmprcgelmntbscdex 1"
app_component: SD-BIL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - consumption-view
  - data-extraction
  - component:SD-BIL-2CL
  - lob:Sales & Distribution
---
# C_BILLGDOCITMPRCGELMNTBSCDEX_1

**Billgdocitmprcgelmntbscdex 1**

| Property | Value |
|---|---|
| App Component | `SD-BIL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PricingDocument` | ✓ | |  |  |  |  |
| `PricingDocumentItem` | ✓ | |  |  |  |  |
| `PricingProcedureStep` | ✓ | |  |  |  |  |
| `PricingProcedureCounter` | ✓ | |  |  |  |  |
| `BillingDocument` |  | |  |  |  |  |
| `BillingDocumentItem` |  | |  |  |  |  |
| `ConditionApplication` |  | |  |  |  |  |
| `ConditionType` |  | |  |  |  |  |
| `ConditionCategory` |  | |  |  |  |  |
| `ConditionClass` |  | |  |  |  |  |
| `BillingDocumentCategory` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `SalesDocumentItemCategory` |  | |  |  |  |  |
| `SalesDocumentItemType` |  | |  |  |  |  |
| `ReturnItemProcessingType` |  | |  |  |  |  |
| `LastChangeDate` |  | | `_BDoc` | `LastChangeDate` |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `MaterialCommissionGroup` |  | |  |  |  |  |
| `ConditionIsForStatistics` |  | |  |  |  |  |
| `ConditionOrigin` |  | |  |  |  |  |
| `ConditionAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `ConditionInactiveReason` |  | |  |  |  |  |
| `ConditionIsForConfiguration` |  | |  |  |  |  |
| `VariantCondition` |  | |  |  |  |  |
| `ExchangeRateType` |  | | `_BDoc` | `ExchangeRateType` |  |  |
| `PricingDate` |  | |  |  |  |  |
| `PriceDetnExchangeRate` |  | |  |  |  |  |
| `PriceDetnExchangeRateDate` |  | |  |  |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `BillingDocumentIsCancelled` |  | | `_BDoc` | `BillingDocumentIsCancelled` |  |  |
| `BillingDocumentIsTemporary` |  | |  |  |  |  |
| `BillingQuantityUnit` |  | |  |  |  |  |
| `BillingQuantity` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `BillingPlanRule` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | | `_BDoc` | `AccountingExchangeRate` |  |  |
| `StatisticsCurrency` |  | | `_BDoc` | `StatisticsCurrency` |  |  |
| `FiscalYear` |  | | `_BDoc` | `FiscalYear` |  |  |
| `FiscalPeriod` |  | | `_BDoc` | `FiscalPeriod` |  |  |
| `Currency` |  | | `_BDoc._CompanyCode` | `Currency` |  |  |
| `FiscalYearVariant` |  | | `_BDoc._CompanyCode` | `FiscalYearVariant` |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `StatisticsExchangeRate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `OverallBillingStatus` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `SalesDocument` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BDoc` | `I_BillingDocumentBasic` | [0..1] |
| `_ExtensionItem` | `E_BillingDocumentItem` | [0..1] |
| `_ExtensionHeader` | `E_BillingDocument` | [0..1] |

## Source Code

```abap
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.sqlViewName: 'CSDBDOCITMPECDX1'

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Analytics.dataCategory: #FACT

@Analytics.dataExtraction: { enabled: true,
                             delta.changeDataCapture.mapping: [ { table: 'prcd_elements',
                                                                  role: #MAIN,
                                                                  viewElement: [ 'PricingDocument',
                                                                                 'PricingDocumentItem',
                                                                                 'PricingProcedureStep',
                                                                                 'PricingProcedureCounter' ],
                                                                  tableElement: [ 'knumv', 'kposn', 'stunr', 'zaehk' ] },
                                                                { table: 'vbrk',
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  viewElement: [ 'BillingDocument' ],
                                                                  tableElement: [ 'vbeln' ] },
                                                                { table: 'vbrp',
                                                                  role: #LEFT_OUTER_TO_ONE_JOIN,
                                                                  viewElement: [ 'BillingDocument',
                                                                                 'BillingDocumentItem' ],
                                                                  tableElement: [ 'vbeln', 'posnr' ] } ] }

@ClientHandling.algorithm: #SESSION_VARIABLE

@EndUserText.label: 'Data Extraction for Billing Doc Item Pricing Element Basic'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@ObjectModel.usageType: { dataClass: #TRANSACTIONAL, serviceQuality: #C, sizeCategory: #XL }

@VDM.viewType: #CONSUMPTION

define view C_BillgDocItmPrcgElmntBscDEX_1
  as select from I_PricingElement           as PrcgElmnt

//    inner join I_BillingDocumentBasic    as BDoc     on PrcgElmnt.PricingDocument      =  BDoc.PricingDocument
//                                                    and PrcgElmnt.PricingDocumentItem != '000000'
//
//    inner join I_BillingDocExtdItemBasic as BItm     on      BDoc.BillingDocument      =  BItm.BillingDocument
//                                                    and PrcgElmnt.PricingDocumentItem  =  BItm.BillingDocumentItem

    inner join   I_BillingDocumentItemBasic as BItm
      on  PrcgElmnt.PricingDocument     = BItm.PricingDocument
      and PrcgElmnt.PricingDocumentItem = BItm.BillingDocumentItem

  association [0..1] to I_BillingDocumentBasic as _BDoc
    on PrcgElmnt.PricingDocument = _BDoc.PricingDocument

  // Extensibility
  association [0..1] to E_BillingDocumentItem  as  _ExtensionItem
    on  $projection.BillingDocument     = _ExtensionItem.BillingDocument
    and $projection.BillingDocumentItem = _ExtensionItem.BillingDocumentItem

  association [0..1] to E_BillingDocument      as  _ExtensionHeader
    on $projection.BillingDocument = _ExtensionHeader.BillingDocument

{
      // Key
  key PrcgElmnt.PricingDocument,
  key PrcgElmnt.PricingDocumentItem,
  key PricingProcedureStep,
  key PricingProcedureCounter,

      // Billing Document/Item
      BItm.BillingDocument,
      BItm.BillingDocumentItem,

      // Category
      ConditionApplication,
      ConditionType,
      ConditionCategory,
      ConditionClass,
      BItm.BillingDocumentCategory,
      BItm.BillingDocumentType,
      BItm.SDDocumentCategory,
      BItm.SalesDocumentItemCategory,
      BItm.SalesDocumentItemType,
      BItm.ReturnItemProcessingType,

      // Administration
      _BDoc.LastChangeDate,
      BItm.CreationDate,
      BItm.CreationTime,

      // Organization
      BItm.SalesOrganization,
      BItm.DistributionChannel,
      BItm.OrganizationDivision,
      BItm.SalesOffice,
      BItm.SalesGroup,

      // Partner
      BItm.SoldToParty,
      BItm.PayerParty,
      BItm.BillToParty,
      BItm.ShipToParty,
      BItm.SalesEmployee,
      BItm.ResponsibleEmployee,

      // Product
      BItm.Material,

      @Analytics.internalName: #LOCAL
      BItm.Product,

      BItm.Division,
      BItm.InternationalArticleNumber,
      BItm.OriginallyRequestedMaterial,
      BItm.MaterialGroup,

      @Analytics.internalName: #LOCAL
      BItm.ProductGroup,

      BItm.AdditionalMaterialGroup1,
      BItm.AdditionalMaterialGroup2,
      BItm.AdditionalMaterialGroup3,
      BItm.AdditionalMaterialGroup4,
      BItm.AdditionalMaterialGroup5,
      BItm.MaterialCommissionGroup,

      // Pricing
      ConditionIsForStatistics,
      ConditionOrigin,

//      @DefaultAggregation:#NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ConditionAmount,

      @Semantics.currencyCode: true
      PrcgElmnt.TransactionCurrency,

      ConditionInactiveReason,
      ConditionIsForConfiguration,
      VariantCondition,
      _BDoc.ExchangeRateType,
      BItm.PricingDate,
      BItm.PriceDetnExchangeRate,
      BItm.PriceDetnExchangeRateDate,
      BItm.StatisticalValueControl,

      // Billing
      BItm.BillingDocumentDate,
      _BDoc.BillingDocumentIsCancelled,
      BItm.BillingDocumentIsTemporary,
      BItm.BillingQuantityUnit,

//      @DefaultAggregation: #NONE
      @Semantics.quantity.unitOfMeasure: 'BillingQuantityUnit'
      BItm.BillingQuantity,

      BItm.ServicesRenderedDate,
      BItm.BillingPlanRule,

      // Accounting
      BItm.CompanyCode,
      _BDoc.AccountingExchangeRate,
      _BDoc.StatisticsCurrency,
      _BDoc.FiscalYear,
      _BDoc.FiscalPeriod,
      _BDoc._CompanyCode.Currency,
      _BDoc._CompanyCode.FiscalYearVariant,
      BItm.ControllingArea,
      BItm.CostCenter,
      BItm.StatisticsExchangeRate,

      // Sales
      BItm.CustomerGroup,
      BItm.SalesDistrict,
      BItm.AdditionalCustomerGroup1,
      BItm.AdditionalCustomerGroup2,
      BItm.AdditionalCustomerGroup3,
      BItm.AdditionalCustomerGroup4,
      BItm.AdditionalCustomerGroup5,

      // Status
      BItm.OverallBillingStatus,

      // Reference
      BItm.ReferenceSDDocument,
      BItm.ReferenceSDDocumentItem,
      BItm.ReferenceSDDocumentCategory,
      BItm.SalesDocument,
      BItm.SalesDocumentItem
}

where BItm.BillingDocumentIsTemporary = ' '   -- excluding data from Temporary Billing Documents
  and (   BItm.SDDocumentCategory = 'M'    // Invoice
       or BItm.SDDocumentCategory = 'N'    // Invoice Canceled
       or BItm.SDDocumentCategory = 'O'    // Credit Memo
       or BItm.SDDocumentCategory = 'P'    // Debit Memo
       or BItm.SDDocumentCategory = 'S'    // Credit Memo Canceled
       or BItm.SDDocumentCategory = 'U'    // Pro Forma Invoice
       or BItm.SDDocumentCategory = '5'    // Intercompany Invoice
       or BItm.SDDocumentCategory = '6'    // Intercompany Credit Memo
       or BItm.SDDocumentCategory = 'DPRQ' // Down Payment Request
       or BItm.SDDocumentCategory = 'DPCC' // Down Payment Cancellation  
       or BItm.SDDocumentCategory = 'PBD') // Preliminary Billing Document
```
