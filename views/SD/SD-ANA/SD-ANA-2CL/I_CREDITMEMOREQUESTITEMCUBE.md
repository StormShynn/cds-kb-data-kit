---
name: I_CREDITMEMOREQUESTITEMCUBE
description: Creditmemorequestitemcube
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - credit
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_CREDITMEMOREQUESTITEMCUBE

**Creditmemorequestitemcube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditMemoRequest` | `cast(SDIA.SalesDocument as credit_memo_request preserving type)` |
| key `CreditMemoRequestItem` | `cast(SDIA.SalesDocumentItem as credit_memo_request_item preserving type)` |
| `CreditMemoRequestType` | `SDIA.SalesDocumentType` |
| `CreditMemoRequestItemCategory` | `SDIA.SalesDocumentItemCategory` |
| `CreditMemoRequestItemType` | `SDIA.SalesDocumentItemType` |
| `CreatedByUser` | `SDIA.CreatedByUser` |
| `CreationDate` | `SDIA.CreationDate` |
| `CreationTime` | `SDIA.CreationTime` |
| `LastChangeDate` | `SDIA.LastChangeDate` |
| `CreationDateYear` | `cast(CalendarDate.CalendarYear as creation_date_year)` |
| `CreationDateYearQuarter` | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |
| `CreationDateYearMonth` | `cast(CalendarDate.YearMonth as creation_date_year_month)` |
| `SalesOrganization` | `SDIA.SalesOrganization` |
| `DistributionChannel` | `SDIA.DistributionChannel` |
| `OrganizationDivision` | `cast(SDIA.OrganizationDivision as organization_division preserving type)` |
| `Division` | `SDIA.Division` |
| `SalesOffice` | `SDIA.SalesOffice` |
| `SalesGroup` | `SDIA.SalesGroup` |
| `PartnerCompany` | `SDIA._SoldToParty.TradingPartner` |
| `SoldToParty` | `SDIA.SoldToParty` |
| `SDDocumentReason` | `SDIA.SDDocumentReason` |
| `CreditMemoRequestItemText` | `SDIA.SalesDocumentItemText` |
| `PurchaseOrderByCustomer` | `SDIA.PurchaseOrderByCustomer` |
| `CustomerPurchaseOrderDate` | `SDIA.CustomerPurchaseOrderDate` |
| `CustomerGroup` | `SDIA.CustomerGroup` |
| `SalesDocumentRjcnReason` | `SDIA.SalesDocumentRjcnReason` |
| `Material` | `SDIA.Material` |
| `Product` | `SDIA.Product` |
| `MaterialGroup` | `SDIA.MaterialGroup` |
| `ProductGroup` | `SDIA.ProductGroup` |
| `Plant` | `SDIA.Plant` |
| `ItemGrossWeight` | `SDIA.ItemGrossWeight` |
| `ItemNetWeight` | `SDIA.ItemNetWeight` |
| `ItemWeightUnit` | `SDIA.ItemWeightUnit` |
| `ItemVolume` | `SDIA.ItemVolume` |
| `ItemVolumeUnit` | `SDIA.ItemVolumeUnit` |
| `MainItemPricingRefProduct` | `SDIA.MainItemPricingRefProduct` |
| `HigherLevelItem` | `SDIA.HigherLevelItem` |
| `BillOfMaterial` | `SDIA.BillOfMaterial` |
| `PropagatePrftbltySgmt2BOM` | `SDIA.PropagatePrftbltySgmt2BOM` |
| `CostDeterminationIsRequired` | `SDIA.CostDeterminationIsRequired` |
| `TaxAmount` | `SDIA.TaxAmount` |
| `CostAmount` | `SDIA.CostAmount` |
| `Subtotal1Amount` | `SDIA.Subtotal1Amount` |
| `Subtotal2Amount` | `SDIA.Subtotal2Amount` |
| `Subtotal3Amount` | `SDIA.Subtotal3Amount` |
| `Subtotal4Amount` | `SDIA.Subtotal4Amount` |
| `Subtotal5Amount` | `SDIA.Subtotal5Amount` |
| `Subtotal6Amount` | `SDIA.Subtotal6Amount` |
| `BillingCompanyCode` | `SDIA.BillingCompanyCode` |
| `ItemIsBillingRelevant` | `SDIA.ItemIsBillingRelevant` |
| `ItemBillingBlockReason` | `cast(SDIA.ItemBillingBlockReason as billing_block_reason_item preserving type)` |
| `CustomerPaymentTerms` | `SDIA.CustomerPaymentTerms` |
| `PaymentMethod` | `SDIA.PaymentMethod` |
| `BusinessArea` | `} SDIA.BusinessArea` |
| `SDProcessStatus` | `cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)` |
| `OrderRelatedBillingStatus` | `SDIA.OrderRelatedBillingStatus` |
| `BillingBlockStatus` | `SDIA.BillingBlockStatus` |
| `BusinessSolutionOrder` | `SDIA.BusinessSolutionOrder` |
| `BaseUnit` | `SDIA.BaseUnit` |
| `TransactionCurrency` | `SDIA.TransactionCurrency` |
| `DisplayCurrency` | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |
| `NetAmount` | `SDIA.NetAmount` |
| `CreditMemoRequestNetAmount` | `cast( SDIA.NetAmount as credit_memo_request_net_amt preserving type )` |
| `NetAmountInDisplayCurrency` | `cast( currency_conversion( amount => SDIA.NetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as net_amount_in_dsp_crcy )` |
| `CreditMemoRequestNetAmtInDC` | `cast( currency_conversion( amount => SDIA.NetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as crdt_memo_req_net_amt_in_dc )` |
| `CreditMemoRequestQuantity` | `CreditMemoRequestQuantity` |
| `NumberOfCreditMemoRequestItems` | `NumberOfCreditMemoRequestItems` |
| `_CreditMemoRequest` | *Association* |
| `_CreditMemoRequestType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreditMemoRequest` | `I_CreditMemoRequest` | [1..1] |
| `_CreditMemoRequestType` | `I_CreditMemoRequestType` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Credit Memo Request Item - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: ['_CreatedByUser']
}
@AbapCatalog: {
  sqlViewName: 'ISDCRDMEMREQITMC',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #D,
    sizeCategory:   #L
   }
}
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}

define view I_CreditMemoRequestItemCube
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_SalesDocumentItemAnalytics as SDIA
    left outer to one join I_CalendarDate               as CalendarDate on SDIA.CreationDate = CalendarDate.CalendarDate

  //Association
  association [1..1] to I_CreditMemoRequest      as _CreditMemoRequest     on  $projection.CreditMemoRequest = _CreditMemoRequest.CreditMemoRequest
  association [0..1] to I_CreditMemoRequestType  as _CreditMemoRequestType on  $projection.CreditMemoRequestType = _CreditMemoRequestType.CreditMemoRequestType

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension             on  $projection.CreditMemoRequest     = _Extension.SalesDocument
                                                                           and $projection.CreditMemoRequestItem = _Extension.SalesDocumentItem

{
      //Keys
      @ObjectModel.foreignKey.association: '_CreditMemoRequest'
  key cast(SDIA.SalesDocument as credit_memo_request preserving type)                as CreditMemoRequest,
      _CreditMemoRequest,
  key cast(SDIA.SalesDocumentItem as credit_memo_request_item preserving type)       as CreditMemoRequestItem,

      //Category
      @ObjectModel.foreignKey.association: '_CreditMemoRequestType'
      SDIA.SalesDocumentType                                                         as CreditMemoRequestType,
      _CreditMemoRequestType,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SDIA.SalesDocumentItemCategory                                                 as CreditMemoRequestItemCategory,
      SDIA._ItemCategory,
      SDIA.SalesDocumentItemType                                                     as CreditMemoRequestItemType,

      //Admin
      SDIA.CreatedByUser,
      SDIA._CreatedByUser,
      @Semantics.systemDate.createdAt: true
      SDIA.CreationDate,
      SDIA.CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      SDIA.LastChangeDate,
      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year)                          as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter)                   as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)                       as CreationDateYearMonth,

      //Orgnization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SDIA.SalesOrganization,
      SDIA._SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SDIA.DistributionChannel,
      SDIA._DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast(SDIA.OrganizationDivision as organization_division preserving type)       as OrganizationDivision,
      SDIA._OrganizationDivision,
      @ObjectModel.foreignKey.association: '_Division'
      SDIA.Division,
      SDIA._Division,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SDIA.SalesOffice,
      SDIA._SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SDIA.SalesGroup,
      SDIA._SalesGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SDIA._SoldToParty.TradingPartner as PartnerCompany,
      SDIA._SoldToParty._GlobalCompany,

      //Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      @Consumption.valueHelpDefinition: [{
          entity: {
              name: 'I_Customer_VH',
              element: 'Customer'
          }
      }]
      SDIA.SoldToParty,
      SDIA._SoldToParty,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDIA.SDDocumentReason,
      SDIA._SDDocumentReason,
      @Semantics.text: true
      SDIA.SalesDocumentItemText                                                     as CreditMemoRequestItemText,
      SDIA.PurchaseOrderByCustomer,
      SDIA.CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SDIA.CustomerGroup,
      SDIA._CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SDIA.SalesDocumentRjcnReason,
      SDIA._SalesDocumentRjcnReason,

      //Product
      @ObjectModel.foreignKey.association: '_Material'
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_MaterialStdVH', element: 'Material' } } ]
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      SDIA.Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Product'
      SDIA._Material,
      @ObjectModel.foreignKey.association: '_Product'
      SDIA.Product,
      SDIA._Product,
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'ProductGroup'
      SDIA.MaterialGroup,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_ProductGroup'
      SDIA._MaterialGroup,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      SDIA.ProductGroup,
      SDIA._ProductGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      SDIA.Plant,
      SDIA._Plant,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SDIA.ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SDIA.ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      SDIA.ItemWeightUnit,
      SDIA._ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SDIA.ItemVolume,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      SDIA.ItemVolumeUnit,
      SDIA._ItemVolumeUnit,
      
      //BoM
      SDIA.MainItemPricingRefProduct,
      SDIA.HigherLevelItem,
      SDIA.BillOfMaterial,
      SDIA.PropagatePrftbltySgmt2BOM,
      SDIA.CostDeterminationIsRequired,

      //Pricing
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.TaxAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.CostAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.Subtotal6Amount,

      //Billing
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      @Consumption.valueHelpDefinition: [{
          entity: {
              name: 'I_CompanyCodeStdVH',
              element: 'CompanyCode'
          }
      }]
      SDIA.BillingCompanyCode,
      SDIA._BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      SDIA.ItemIsBillingRelevant,
      SDIA._ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      cast(SDIA.ItemBillingBlockReason as billing_block_reason_item preserving type) as ItemBillingBlockReason,
      SDIA._ItemBillingBlockReason,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SDIA.CustomerPaymentTerms,
      SDIA._CustomerPaymentTerms,
      SDIA.PaymentMethod,

      //Accounting
      @ObjectModel: {
          foreignKey: {
              association: '_BusinessArea'
          }
      }
      @Consumption.valueHelpDefinition: [{
          entity: {
              name: 'I_BusinessAreaStdVH',
              element: 'BusinessArea'
          }
      }]
      SDIA.BusinessArea,
      SDIA._BusinessArea,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)            as SDProcessStatus,
      SDIA._SDProcessStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      SDIA.OrderRelatedBillingStatus,
      SDIA._OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      SDIA.BillingBlockStatus,
      SDIA._BillingBlockStatus,

      //Reference
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      SDIA.BusinessSolutionOrder, --AT15.05.2020 Solution Order References Added#
      SDIA._SolutionOrder,
      //  @Analytics.internalName: #LOCAL
      //  @ObjectModel.foreignKey.association: '_SolutionOrderItem'
      //  SDIA.BusinessSolutionOrderItem,   --AT4.6.2020 ignore Item Reference due to framework problems
      //  SDIA._SolutionOrderItem,

      //Unit & Currency
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      SDIA.BaseUnit,
      SDIA._BaseUnit,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SDIA.TransactionCurrency,
      SDIA._TransactionCurrency,
      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)                             as DisplayCurrency,

      //KPIs
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.NetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( SDIA.NetAmount as credit_memo_request_net_amt preserving type )          as CreditMemoRequestNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.NetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as net_amount_in_dsp_crcy )                                                  as NetAmountInDisplayCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.NetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as crdt_memo_req_net_amt_in_dc )                                             as CreditMemoRequestNetAmtInDC,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CreditMemoRequestQuantity,
      @DefaultAggregation: #SUM
      NumberOfCreditMemoRequestItems
}
where
  SDIA.SDDocumentCategory = 'K'
```
