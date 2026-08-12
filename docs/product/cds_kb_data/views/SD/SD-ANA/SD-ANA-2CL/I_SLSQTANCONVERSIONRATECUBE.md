---
name: I_SLSQTANCONVERSIONRATECUBE
description: "Slsqtanconversionratecube"
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
  - analytical
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SLSQTANCONVERSIONRATECUBE

**Slsqtanconversionratecube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  |  |  |
| `SalesQuotationItem` | ✓ | |  |  |  |  |
| `SalesQuotationType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `PartnerCompany` |  | | `_SoldToParty` | `TradingPartner` |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `BindingPeriodValidityStartDate` |  | |  |  |  |  |
| `BindingPeriodValidityEndDate` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast( :P_DisplayCurrency as vdm_v_display_currency )` |  |  |
| `SalesQuotationNetAmount` |  | |  |  |  |  |
| `CnvrtdSalesQuotationNetAmount` |  | |  |  |  |  |
| `SalesQuotationNetAmtInDspCrcy` |  | |  | `cast (currency_conversion( amount => SalesQuotationNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as sls_qtan_net_amt_in_dc)` |  |  |
| `CnvrtdSalesQtanNetAmtInDspCrcy` |  | |  | `cast (currency_conversion( amount => CnvrtdSalesQuotationNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cnvrtd_sls_qtan_net_amt_in_dc )` |  |  |
| `SlsQtanPeriodElapsedPercent` |  | |  |  |  |  |
| `SlsQtanPeriodDueDays` |  | |  | `cast( case when SlsQtanPeriodDueDays > 999 then 999 else SlsQtanPeriodDueDays end as due_days)` |  |  |
| `PrdtvSlsQtanCnvrsnRate` |  | |  |  |  |  |
| `PrdtvSlsQtanCnvrsnAmount` |  | |  |  |  |  |
| `PrdtvSlsQtanCnvrsnAmtInDspCrcy` |  | |  | `cast( currency_conversion ( amount => PrdtvSlsQtanCnvrsnAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cnvrtd_sls_qt_pr_net_amt_in_dc )` |  |  |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_OrganizationDivision` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_ResponsibleEmployee` | | ✓ | | | | |
| `_SalesEmployee` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Quotation Conversion Rate - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSQTANCRC',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel: {
  usageType: {
    dataClass:      #MIXED,
    serviceQuality: #X,
    sizeCategory:   #L
  }
}
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

define view I_SlsQtanConversionRateCube
  with parameters
    P_Date             : sydate,
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_SlsQtanCnvrsnRateAnalytics (P_Date:$parameters.P_Date)

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension on  $projection.SalesQuotation     = _Extension.SalesDocument
                                                               and $projection.SalesQuotationItem = _Extension.SalesDocumentItem
{
      //Key
  key SalesQuotation,
  key SalesQuotationItem,

      SalesQuotationType,

      //Sales Area
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SalesOrganization,
      _SalesOrganization,

      @ObjectModel.foreignKey.association: '_DistributionChannel'
      DistributionChannel,
      _DistributionChannel,

      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      OrganizationDivision,
      _OrganizationDivision,

      @ObjectModel.foreignKey.association: '_SalesOffice'
      SalesOffice,
      _SalesOffice,

      @ObjectModel.foreignKey.association: '_SalesGroup'
      SalesGroup,
      _SalesGroup,
      
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      _SoldToParty.TradingPartner as PartnerCompany,
      _SoldToParty._GlobalCompany,

      //Partner
      @ObjectModel.foreignKey.association: '_SoldToParty'
      // @Consumption.valueHelpDefinition: [ { entity: { name: 'I_Customer_VH', element: 'Customer' } } ]
      SoldToParty,
      _SoldToParty,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      //@Consumption.valueHelpDefinition: [ { entity: { name: 'I_WorkforcePersonSrchHelp', element: 'ResponsibleEmployee' } } ]
      ResponsibleEmployee,
      _ResponsibleEmployee,

      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SalesEmployee,
      _SalesEmployee,

      @Semantics.systemDate.createdAt: true
      CreationDate,
      BindingPeriodValidityStartDate,
      BindingPeriodValidityEndDate,

      //    @ObjectModel.foreignKey.association: '_Material'
      @API.element.releaseState:    #DEPRECATED
      @API.element.successor: 'Product'
      Material,
      //    @API.element.releaseState:    #DEPRECATED
      //    @API.element.successor: '_Product'
      //    _Material,

      @ObjectModel.foreignKey.association: '_Product'
      Product,
      _Product,

      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      TransactionCurrency,
      _TransactionCurrency,

      @Semantics.currencyCode: true
      cast( :P_DisplayCurrency as vdm_v_display_currency ) as DisplayCurrency,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SalesQuotationNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CnvrtdSalesQuotationNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount => SalesQuotationNetAmount,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as sls_qtan_net_amt_in_dc)                         as SalesQuotationNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast (currency_conversion(
        amount =>  CnvrtdSalesQuotationNetAmount,
        source_currency => TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as cnvrtd_sls_qtan_net_amt_in_dc )                 as CnvrtdSalesQtanNetAmtInDspCrcy,

      @DefaultAggregation: #MAX
      SlsQtanPeriodElapsedPercent,

      @DefaultAggregation: #MAX
      cast(
        case when
            SlsQtanPeriodDueDays > 999
        then
            999
        else
            SlsQtanPeriodDueDays
        end
      as due_days)                                         as SlsQtanPeriodDueDays,

      PrdtvSlsQtanCnvrsnRate,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      PrdtvSlsQtanCnvrsnAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion (
          amount =>  PrdtvSlsQtanCnvrsnAmount,
          source_currency => TransactionCurrency,
          target_currency => :P_DisplayCurrency,
          exchange_rate_date => CreationDate,
          exchange_rate_type => :P_ExchangeRateType,
          error_handling => 'FAIL_ON_ERROR',
          round => #CDSBoolean.true,
          decimal_shift => #CDSBoolean.true,
          decimal_shift_back => #CDSBoolean.true
      ) as cnvrtd_sls_qt_pr_net_amt_in_dc )                as PrdtvSlsQtanCnvrsnAmtInDspCrcy


      //    @DefaultAggregation: #SUM
      //    @Semantics.amount.currencyCode: 'DisplayCurrency'
      //    case when
      //        PrdtvSlsQtanCnvrsnDeltaAmount < 0
      //    then
      //        0
      //    else
      //        cast(
      //        currency_conversion(
      //          amount => PrdtvSlsQtanCnvrsnDeltaAmount,
      //          source_currency => TransactionCurrency,
      //          target_currency => :P_DisplayCurrency,
      //          exchange_rate_date => CreationDate,
      //          exchange_rate_type => :P_ExchangeRateType,
      //          error_handling => 'FAIL_ON_ERROR',
      //          round => #CDSBoolean.true,
      //          decimal_shift => #CDSBoolean.true,
      //          decimal_shift_back => #CDSBoolean.true
      //      ) as prd_sls_qt_delta_net_amt_in_dc )
      //    end as PrdtvSlsQtanCnvrsnDeltaAmtInDC

}
```
