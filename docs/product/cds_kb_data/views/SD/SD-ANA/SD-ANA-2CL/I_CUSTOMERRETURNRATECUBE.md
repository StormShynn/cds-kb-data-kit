---
name: I_CUSTOMERRETURNRATECUBE
description: "Customerreturnratecube"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - customer
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_CUSTOMERRETURNRATECUBE

**Customerreturnratecube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `'I_Currency'` |  | |  | `name: 'I_Currency'` |  |  |
| `:'Currency'` |  | |  | `element :'Currency'` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISDCUSTRETRATEC',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Customer Return Rate - Cube'
@ObjectModel.usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
}
@VDM.viewType: #COMPOSITE
@Analytics.dataCategory: #CUBE
@ObjectModel.supportedCapabilities:
   [ #ANALYTICAL_PROVIDER, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.internalName: #LOCAL
@Aggregation.allowPrecisionLoss:true

define view I_CustomerReturnRateCube
  with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst,
    @Consumption.valueHelpDefinition: [{
       entity:{name: 'I_Currency', element :'Currency'}
    }]
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_CustomerReturnRateAnalytics as CRRA
    left outer to one join I_CalendarDate                as CalendarDate on CRRA.CreationDate = CalendarDate.CalendarDate

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension on  CRRA.SalesDocument     = _Extension.SalesDocument
                                                               and CRRA.SalesDocumentItem = _Extension.SalesDocumentItem
{
      // Key
      @ObjectModel.foreignKey.association: '_SalesDocument'
  key CRRA.SalesDocument,
  key CRRA.SalesDocumentItem,
      CRRA._SalesDocument,

      CRRA.CustomerReturn,
      CRRA.CustomerReturnItem,

      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      CRRA.SDDocumentCategory,
      CRRA._SDDocumentCategory,
      @ObjectModel.foreignKey.association: '_SalesDocumentType'
      CRRA.SalesDocumentType,
      CRRA._SalesDocumentType,

      // Date
      @Semantics.systemDate.createdAt: true
      CRRA.CreationDate,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)     as CreationDateYearMonth,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter) as CreationDateYearQuarter,
      @Semantics.calendar.year
      cast(CalendarDate.CalendarYear as creation_date_year)        as CreationDateYear,

      // Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      CRRA.ReferenceSDDocument,
      CRRA._ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      CRRA.ReferenceSDDocumentItem,
      CRRA._ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      CRRA.ReferenceSDDocumentCategory,
      CRRA._ReferenceSDDocumentCategory,

      // Sales Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      CRRA.SalesOrganization,
      CRRA._SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      CRRA.DistributionChannel,
      CRRA._DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      CRRA.OrganizationDivision,
      CRRA._OrganizationDivision,
      @ObjectModel.foreignKey.association: '_SalesOffice'
      CRRA.SalesOffice,
      CRRA._SalesOffice,
      @ObjectModel.foreignKey.association: '_SalesGroup'
      CRRA.SalesGroup,
      CRRA._SalesGroup,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association:'_GlobalCompany'
      CRRA._SoldToParty.TradingPartner as PartnerCompany,
      CRRA._SoldToParty._GlobalCompany,
      
      // Partner
      @ObjectModel.foreignKey.association: '_SoldToParty'
      CRRA.SoldToParty,
      CRRA._SoldToParty,
      @ObjectModel.foreignKey.association: '_CustomerGroup'
      CRRA.CustomerGroup,
      CRRA._CustomerGroup,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      CRRA.ShipToParty,
      CRRA._ShipToParty,
      @ObjectModel.foreignKey.association: '_BillToParty'
      CRRA.BillToParty,
      CRRA._BillToParty,
      @ObjectModel.foreignKey.association: '_PayerParty'
      CRRA.PayerParty,
      CRRA._PayerParty,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      CRRA.AdditionalCustomerGroup1,
      CRRA._AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      CRRA.AdditionalCustomerGroup2,
      CRRA._AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      CRRA.AdditionalCustomerGroup3,
      CRRA._AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      CRRA.AdditionalCustomerGroup4,
      CRRA._AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      CRRA.AdditionalCustomerGroup5,
      CRRA._AdditionalCustomerGroup5,

      // Product
      @ObjectModel.foreignKey.association: '_Product'
      CRRA.Product,
      CRRA._Product,
      @ObjectModel.foreignKey.association: '_ProductGroup'
      CRRA.ProductGroup,
      CRRA._ProductGroup,
      MaterialByCustomer,
      @ObjectModel.foreignKey.association: '_Division'
      CRRA.Division,
      CRRA._Division,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      CRRA.AdditionalMaterialGroup1,
      CRRA._AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      CRRA.AdditionalMaterialGroup2,
      CRRA._AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      CRRA.AdditionalMaterialGroup3,
      CRRA._AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      CRRA.AdditionalMaterialGroup4,
      CRRA._AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      CRRA.AdditionalMaterialGroup5,
      CRRA._AdditionalMaterialGroup5,
      CRRA.ProductHierarchyNode,
      @ObjectModel.foreignKey.association: '_Plant'
      CRRA.Plant,
      CRRA._Plant,

      // Others
      @ObjectModel.foreignKey.association: '_ReturnReason'
      CRRA.ReturnReason,
      CRRA._ReturnReason,
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      CRRA.BillingCompanyCode,
      CRRA._BillingCompanyCode,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      CRRA.SalesDistrict,
      CRRA._SalesDistrict,
      
      //Note:Incompatible change when adding foreign key association with combined key, be carefaul when adding this on OP system
      //  Since I_ProfitCenter has a combined key(ControllingArea and ProfitCenter), the profit center value will be different before and after adding foreign key association(ProfitCenter vs ControllingArea/ProfitCenter)
      //  Which will leads to bookmark with ProfitCenter invalid
      @Analytics.internalName: #LOCAL 
      @ObjectModel.foreignKey.association: '_ProfitCenter' 
      CRRA.ProfitCenter,
      CRRA._ProfitCenter,
      CRRA.CostCenter,
      @ObjectModel.foreignKey.association: '_ControllingArea'
      CRRA.ControllingArea,
      CRRA._ControllingArea,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      CRRA.BusinessArea,
      CRRA._BusinessArea,

      // Currency & Unit
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      CRRA.TransactionCurrency,
      CRRA._TransactionCurrency,
      @Semantics.currencyCode: true
      CRRA.ReferenceSlsDocItmTransCrcy,
      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)           as DisplayCurrency,

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      CRRA.BaseUnit,
      CRRA._BaseUnit,
      @Semantics.unitOfMeasure: true
      CRRA.ReferenceSlsDocItmBaseUnit,

      // KPI: Reference Amount & Quantity
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'ReferenceSlsDocItmTransCrcy'
      CRRA.ReferenceSlsDocItmNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => CRRA.ReferenceSlsDocItmNetAmount,
        source_currency => CRRA.ReferenceSlsDocItmTransCrcy,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CRRA.ReferenceSDDocumentDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as ref_sls_doc_itm_net_amt_in_dc )                         as ReferenceSlsDocItmNetAmtInDC,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ReferenceSlsDocItmBaseUnit'
      CRRA.ReferenceSlsDocItmQuantity,

      // KPI: Incoming Orders
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CRRA.IncomingSalesOrdersNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => CRRA.IncomingSalesOrdersNetAmount,
        source_currency => CRRA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CRRA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as incg_sls_ords_net_amt_in_dc)                            as IncomingSalesOrdersNetAmtInDC,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CRRA.IncomingSalesOrdersQuantity,

      // KPI: Incoming Returns
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      CRRA.IncomingCustReturnsNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast ( currency_conversion(
        amount => CRRA.IncomingCustReturnsNetAmount,
        source_currency => CRRA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => CRRA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as incg_cust_rets_net_amt_in_dc)                           as IncomingCustReturnsNetAmtInDC,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CRRA.IncomingCustReturnsQuantity,

      @DefaultAggregation: #SUM
      NumberOfIncomingCustRetItems
}
```
