---
name: I_CUSTOMERRETURNITEMCUBE_2
description: "Customerreturnitemcube 2"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - customer
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNITEMCUBE_2

**Customerreturnitemcube 2**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` | ✓ | |  | `cast(SDIA.SalesDocument as vdm_customer_return preserving type)` |  |  |
| `CustomerReturnItem` | ✓ | |  | `cast(SDIA.SalesDocumentItem as vdm_customer_return_item preserving type)` |  |  |
| `CustomerReturnType` |  | |  | `cast(SDIA.SalesDocumentType as vdm_customer_return_type preserving type)` |  |  |
| `CustomerReturnItemType` |  | |  | `SalesDocumentItemType` |  |  |
| `CustomerReturnItemCategory` |  | |  | `SalesDocumentItemCategory` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreationDateYear` |  | |  | `cast(CalendarDate.CalendarYear as creation_date_year)` |  |  |
| `CreationDateYearQuarter` |  | |  | `cast(CalendarDate.YearQuarter as creation_date_year_quarter)` |  |  |
| `CreationDateYearMonth` |  | |  | `cast(CalendarDate.YearMonth as creation_date_year_month)` |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  | `cast(SDIA.OrganizationDivision as organization_division preserving type)` |  |  |
| `Division` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `CustomerReturnItemText` |  | |  | `SalesDocumentItemText` |  |  |
| `CustomerPurchaseOrderType` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `ReturnReason` |  | |  |  |  |  |
| `RetsMgmtProcessingBlock` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `MainItemPricingRefProduct` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `PropagatePrftbltySgmt2BOM` |  | |  |  |  |  |
| `CostDeterminationIsRequired` |  | |  |  |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `ItemIsBillingRelevant` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  | `cast(SDIA.ItemBillingBlockReason as billing_block_reason_item preserving type)` |  |  |
| `StatisticalValueControl` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `BusinessSolutionOrder` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `NumberOfIncomingCustRetItems` |  | |  |  |  |  |
| `IncomingCustReturnsNetAmount` |  | |  |  |  |  |
| `IncomingCustReturnsNetAmtInDC` |  | |  | `cast( currency_conversion( amount => SDIA.IncomingCustReturnsNetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as incg_cust_rets_net_amt_in_dc )` |  |  |
| `IncomingCustReturnsQuantity` |  | |  |  |  |  |
| `SDProcessStatus` |  | |  | `cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)` |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `_CustomerReturn` | | ✓ | | | | |
| `_CustomerReturnType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerReturn` | `I_CustomerReturn` | [1..1] |
| `_CustomerReturnType` | `I_CustomerReturnType` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Customer Return Item - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDCUSTRETITMC2',
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
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true

define view I_CustomerReturnItemCube_2
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_SalesDocumentItemAnalytics as SDIA
    left outer to one join I_CalendarDate               as CalendarDate on SDIA.CreationDate = CalendarDate.CalendarDate

  //Association
  association [1..1] to I_CustomerReturn         as _CustomerReturn     on  $projection.CustomerReturn = _CustomerReturn.CustomerReturn
  association [0..1] to I_CustomerReturnType     as _CustomerReturnType on  $projection.CustomerReturnType = _CustomerReturnType.CustomerReturnType
  association [0..1] to I_Product                as _Product            on  $projection.Product = _Product.Product

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension          on  SDIA.SalesDocument     = _Extension.SalesDocument
                                                                        and SDIA.SalesDocumentItem = _Extension.SalesDocumentItem

{
      //Key
      @ObjectModel.foreignKey.association: '_CustomerReturn'
  key cast(SDIA.SalesDocument as vdm_customer_return preserving type)                as CustomerReturn,
      _CustomerReturn,
  key cast(SDIA.SalesDocumentItem as vdm_customer_return_item preserving type)       as CustomerReturnItem,

      //Category
      @ObjectModel.foreignKey.association: '_CustomerReturnType'
      cast(SDIA.SalesDocumentType as vdm_customer_return_type preserving type)       as CustomerReturnType,
      _CustomerReturnType,
      SDIA.SalesDocumentItemType                                                     as CustomerReturnItemType,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SDIA.SalesDocumentItemCategory                                                 as CustomerReturnItemCategory,
      SDIA._ItemCategory,

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
      @ObjectModel.foreignKey.association: '_SalesGroup'
      SDIA.SalesGroup,
      SDIA._SalesGroup,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      SDIA.SalesOffice,
      SDIA._SalesOffice,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      SDIA._SoldToParty.TradingPartner as PartnerCompany,
      SDIA._SoldToParty._GlobalCompany,
      
      //Sales
      @ObjectModel.foreignKey.association: '_SoldToParty'
      SDIA.SoldToParty,
      SDIA._SoldToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      SDIA.ShipToParty,
      SDIA._ShipToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      SDIA.PayerParty,
      SDIA._PayerParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      SDIA.BillToParty,
      SDIA._BillToParty,

      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDIA.SDDocumentReason,
      SDIA._SDDocumentReason,
      SDIA.SalesDocumentItemText                                                     as CustomerReturnItemText,
      SDIA.CustomerPurchaseOrderType,
      SDIA.PurchaseOrderByCustomer,
      SDIA.CustomerPurchaseOrderDate,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SDIA.CustomerGroup,
      SDIA._CustomerGroup,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SDIA.SalesDocumentRjcnReason,
      SDIA._SalesDocumentRjcnReason,

      @ObjectModel.foreignKey.association: '_ReturnReason'
      SDIA.ReturnReason,
      SDIA._ReturnReason,
      //  This field value will not be updated after the initial time so analyze base on it is incorrect
      //  @ObjectModel.foreignKey.association: '_ReturnsRefundExtent'
      //  SDIA.ReturnsRefundExtent,
      //  SDIA._ReturnsRefundExtent,
      SDIA.RetsMgmtProcessingBlock,

      //Product
      @ObjectModel.foreignKey.association: '_Product'
      SDIA.Product,
      _Product,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ProductGroup'
      SDIA.ProductGroup,
      SDIA._ProductGroup,
      @ObjectModel.foreignKey.association: '_Plant'
      SDIA.Plant,
      SDIA._Plant,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      SDIA.ItemWeightUnit,
      SDIA._ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SDIA.ItemGrossWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      SDIA.ItemNetWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      SDIA.ItemVolumeUnit,
      SDIA._ItemVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      SDIA.ItemVolume,
      
      //BoM
      SDIA.MainItemPricingRefProduct,
      SDIA.HigherLevelItem,
      SDIA.BillOfMaterial,
      SDIA.PropagatePrftbltySgmt2BOM,
      SDIA.CostDeterminationIsRequired,

      //Billing
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      SDIA.BillingCompanyCode,
      SDIA._BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_ItemIsBillingRelevant'
      SDIA.ItemIsBillingRelevant,
      SDIA._ItemIsBillingRelevant,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      cast(SDIA.ItemBillingBlockReason as billing_block_reason_item preserving type) as ItemBillingBlockReason,
      SDIA._ItemBillingBlockReason,

      //Pricing
      @ObjectModel.foreignKey.association: '_StatisticalValueControl'
      SDIA.StatisticalValueControl,
      SDIA._StatisticalValueControl,

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

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SDIA.CustomerPaymentTerms,
      SDIA._CustomerPaymentTerms,
      SDIA.PaymentMethod,

      //Accounting
      @ObjectModel.foreignKey.association: '_BusinessArea'
      SDIA.BusinessArea,
      SDIA._BusinessArea,

      //Shipping
      @ObjectModel.foreignKey.association: '_ShippingPoint'
      SDIA.ShippingPoint,
      SDIA._ShippingPoint,

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      SDIA.ReferenceSDDocumentCategory,
      SDIA._ReferenceSDDocumentCategory,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      SDIA.ReferenceSDDocument,
      SDIA._ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      SDIA.ReferenceSDDocumentItem,
      SDIA._ReferenceSDDocumentItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SolutionOrder'
      SDIA.BusinessSolutionOrder, --AT15.05.2020 Solution Order References Added#
      SDIA._SolutionOrder,
      //  @Analytics.internalName: #LOCAL
      //  @ObjectModel.foreignKey.association: '_SolutionOrderItem'
      //  SDIA.BusinessSolutionOrderItem, --AT4.6.2020 ignore Item Reference due to framework problems
      //  SDIA._SolutionOrderItem,

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

      //KPI: Incoming Returns
      @DefaultAggregation: #SUM
      SDIA.NumberOfIncomingCustRetItems,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.IncomingCustReturnsNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.IncomingCustReturnsNetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as incg_cust_rets_net_amt_in_dc )                                            as IncomingCustReturnsNetAmtInDC,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SDIA.IncomingCustReturnsQuantity,

      //Status
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)            as SDProcessStatus,
      SDIA._SDProcessStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      SDIA.OrderRelatedBillingStatus,
      SDIA._OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      SDIA.BillingBlockStatus,
      SDIA._BillingBlockStatus

}
where
  SDIA.SDDocumentCategory = 'H'
```
