---
name: I_SALESANALYTICSCUBE_1
description: "Salesanalyticscube 1"
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
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SALESANALYTICSCUBE_1

**Salesanalyticscube 1**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  |  |  |
| `SalesDocumentItem` | ✓ | |  |  |  |  |
| `ScheduleLine` | ✓ | |  |  |  |  |
| `BillingPlan` | ✓ | |  |  |  |  |
| `BillingPlanItem` | ✓ | |  |  |  |  |
| `DeliveryDocument` | ✓ | |  |  |  |  |
| `DeliveryDocumentItem` | ✓ | |  |  |  |  |
| `BillingDocument` | ✓ | |  |  |  |  |
| `BillingDocumentItem` | ✓ | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyName` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `Customer` |  | |  | `cast (SoldToParty as kunnr)` |  |  |
| `SDDocumentCategory` |  | |  |  |  |  |
| `SDDocumentObject` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `PartnerCompany` |  | | `_SoldToParty` | `TradingPartner` |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `OriginallyRequestedMaterial` |  | |  |  |  |  |
| `InternationalArticleNumber` |  | |  |  |  |  |
| `ProductHierarchyNode` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  | `cast(PSA.CalendarDate as billing_document_date)` |  |  |
| `BillingDocumentDateYear` |  | |  | `cast(Period.CalendarYear as billing_document_date_year)` |  |  |
| `BillingDocDateCalendarQuarter` |  | |  | `cast(Period.CalendarQuarter as billing_doc_date_cal_quarter )` |  |  |
| `BillingDocDateCalendarMonth` |  | |  | `cast(Period.CalendarMonth as billing_doc_date_cal_month )` |  |  |
| `BillingDocDateYearQuarter` |  | |  | `cast(Period.YearQuarter as billing_doc_date_year_quarter)` |  |  |
| `BillingDocDateYearMonth` |  | |  | `cast(Period.YearMonth as billing_doc_date_year_month)` |  |  |
| `SalesDocumentType` |  | |  |  |  |  |
| `ShippingPoint` |  | |  |  |  |  |
| `BillingDocumentType` |  | |  |  |  |  |
| `CalendarDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `SalesOrder` |  | |  | `cast( case when SDDocumentCategory = 'C' then SalesDocument end as vdm_sales_order )` |  |  |
| `OpnSOForOrdReltdInvcsNetAmount` |  | |  |  |  |  |
| `OpnSOForOrdReltdInvcsNetAmtDC` |  | |  | `cast ( currency_conversion( amount => OpnSOForOrdReltdInvcsNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_ords_for_ordrelinv_amt_idc)` |  |  |
| `OpnSlsOrdsForOrdReltdInvcsQty` |  | |  |  |  |  |
| `OpnRetsForOrdReltdInvcsNetAmt` |  | |  |  |  |  |
| `OpnRetsOrdReltdInvcsNetAmtInDC` |  | |  | `cast ( currency_conversion( amount => OpnRetsForOrdReltdInvcsNetAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_rets_for_invc_net_amt_idc)` |  |  |
| `OpnRetsForOrdReltdInvcsQty` |  | |  |  |  |  |
| `OpenSlsOrdersForDelivNetAmount` |  | |  |  |  |  |
| `OpnSlsOrdsForDelivAmtInDspCrcy` |  | |  | `cast ( currency_conversion( amount => OpenSlsOrdersForDelivNetAmount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_ord_for_del_amt_idc)` |  |  |
| `OpnSlsOrdrsForDelivQuantity` |  | |  |  |  |  |
| `OpnSlsOrdsForInvcPlansNetAmt` |  | |  |  |  |  |
| `OpnSlsOrdsForInvcPlansNetAmtDC` |  | |  | `cast ( currency_conversion( amount => OpnSlsOrdsForInvcPlansNetAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_ord_for_iplan_amt_idc)` |  |  |
| `OpnOutbDelivsForInvcNetAmt` |  | |  |  |  |  |
| `OpnOutbDelivsForInvcNetAmtInDC` |  | |  | `cast ( currency_conversion( amount => OpnOutbDelivsForInvcNetAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_dlv_for_inv_amt_idc )` |  |  |
| `OpnOutbDelivsForInvcQty` |  | |  |  |  |  |
| `ShpdNotInvcdDelivsNetAmount` |  | |  |  |  |  |
| `ShpdNotInvcdDelivsNetAmount_2` |  | |  |  |  |  |
| `ShpdNotInvcdDelivsNetAmtInDC` |  | |  | `cast ( currency_conversion( amount => ShpdNotInvcdDelivsNetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as opn_shppd_dlv_for_inv_amt_idc)` |  |  |
| `ShpdNotInvcdDelivsQuantity` |  | |  |  |  |  |
| `SalesVolumeNetAmount` |  | |  |  |  |  |
| `SalesVolumeNetAmount_2` |  | |  |  |  |  |
| `SlsVolumeNetAmtInDspCrcy` |  | |  | `cast ( currency_conversion( amount => SalesVolumeNetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as mc_umnetwr)` |  |  |
| `SalesVolumeQuantity` |  | |  |  |  |  |
| `SalesProfitMarginNetAmount` |  | |  |  |  |  |
| `SalesProfitMarginNetAmount_2` |  | |  |  |  |  |
| `SlsProfitMargNetAmtInDspCrcy` |  | |  | `cast ( currency_conversion( amount => SalesProfitMarginNetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as prf_marg_net_amt_idc)` |  |  |
| `CustomerCreditMemoNetAmount` |  | |  |  |  |  |
| `CustomerCreditMemoNetAmount_2` |  | |  |  |  |  |
| `CustCrdtMemoNetAmtInDspCrcy` |  | |  | `cast ( currency_conversion( amount => CustomerCreditMemoNetAmount_2, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as mc_gunetwr)` |  |  |
| `CustCreditMemoQuantity` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal1AmountInDC` |  | |  | `cast ( currency_conversion( amount => Subtotal1Amount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as subtotalamount1_idc)` |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal2AmountInDC` |  | |  | `cast ( currency_conversion( amount => Subtotal2Amount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as subtotalamount2_idc)` |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal3AmountInDC` |  | |  | `cast ( currency_conversion( amount => Subtotal3Amount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as subtotalamount3_idc)` |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal4AmountInDC` |  | |  | `cast ( currency_conversion( amount => Subtotal4Amount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as subtotalamount4_idc)` |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal5AmountInDC` |  | |  | `cast ( currency_conversion( amount => Subtotal5Amount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as subtotalamount5_idc)` |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `Subtotal6AmountInDC` |  | |  | `cast ( currency_conversion( amount => Subtotal6Amount, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as subtotalamount6_idc)` |  |  |
| `CustCrdtMemoPrftMargNetAmt` |  | |  |  |  |  |
| `CustCrdtMemoPrftMargNetAmtInDC` |  | |  | `cast ( currency_conversion( amount => CustCrdtMemoPrftMargNetAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => PSA.CalendarDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as cm_prf_marg_net_amt_idc)` |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `_DisplayCurrency` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_ShippingPoint` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_SDDocumentObject` | | ✓ | | | | |
| `_BillingDocDateCalendarMonth` | | ✓ | | | | |
| `_BillingDocDateCalendarQuarter` | | ✓ | | | | |
| `_ProductHierarchyNode` | | ✓ | | | | |
| `_SalesDocumentType` | | ✓ | | | | |
| `_SalesDocument` | | ✓ | | | | |
| `_AdditionalCustomerGroup1` | | ✓ | | | | |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_AdditionalCustomerGroup4` | | ✓ | | | | |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_AdditionalMaterialGroup2` | | ✓ | | | | |
| `_AdditionalMaterialGroup3` | | ✓ | | | | |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_AdditionalMaterialGroup5` | | ✓ | | | | |
| `_StatisticsCurrency` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_OriginallyRequestedMaterial` | | ✓ | | | | |
| `_SalesDistrict` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_SoldToParty` | | ✓ | | | | |
| `_CustomerGroup` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DisplayCurrency` | `I_Currency` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_ShippingPoint` | `I_ShippingPoint` | [0..1] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [0..1] |
| `_SDDocumentObject` | `I_SDDocumentObject` | [0..1] |
| `_BillingDocDateCalendarMonth` | `I_CalendarMonth` | [0..1] |
| `_BillingDocDateCalendarQuarter` | `I_CalendarQuarter` | [0..1] |
| `_ProductHierarchyNode` | `I_ProductHierarchyNode` | [0..1] |
| `_SalesDocumentType` | `I_SalesDocumentType` | [0..1] |
| `_SalesDocument` | `I_SalesDocument` | [1..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |
| `_DelivDocItemExtension` | `E_DeliveryDocumentItem` | [0..1] |
| `_BillgDocItemExtension` | `E_BillingDocumentItem` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Sales Volume and Open Sales - Cube'
@Analytics.dataCategory: #CUBE
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck:#CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@AbapCatalog.sqlViewName: 'ISDSLSANACUBE1'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true --AT^2: 15.4.2019
@Metadata.allowExtensions: true
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_PROVIDER ,#CDS_MODELING_DATA_SOURCE]

@Aggregation.allowPrecisionLoss:true  --2AT2.2.22

///////////////////////////////////////////////////
// IMPORTANT NOTE  (16.3.2018)                   //
//                                               //
//This is the successor of I_SalesAnalyticsCube. //
//                                               //
//The extensibility of C_SalesAnalyticsQry_1/Cube//
//now allows to handle the three                 //
//SDDocuments: Orders, Deliveries and Invoices.  //
//                                               //
///////////////////////////////////////////////////

//AT11.2.2022: introduction of enlarged (Dec19,2) successors for SalesVolumeNetAmount, ProfitMarginNetAmount, CreditMemoNetAmount, ShpdNotINVCDDELIVSNetAmount
//             and their usage for currency conversion (Background: APL number overflow phenomenon)

define view I_SalesAnalyticsCube_1
with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  
as select from          P_SalesAnalytics(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)      as PSA
left outer to one join  I_CalendarDate        as Period                      on PSA.CalendarDate = Period.CalendarDate
association [0..1] to   I_Currency            as _DisplayCurrency            on  $projection.DisplayCurrency = _DisplayCurrency.Currency
association [0..1] to   I_Customer            as _Customer                   on  $projection.Customer = _Customer.Customer
association [0..1] to   I_ShippingPoint       as _ShippingPoint              on  $projection.ShippingPoint = _ShippingPoint.ShippingPoint
association [0..1] to   I_BillingDocumentType as _BillingDocumentType        on  $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType
association [0..1] to   I_SDDocumentObject    as _SDDocumentObject           on  $projection.SDDocumentObject   = _SDDocumentObject.SDDocumentObject
--AT*2 17.2.2020 tunnel product from view stack below
--association [0..1] to   I_Product             as _Product                    on  $projection.Product            = _Product.Product
--association [0..1] to   I_ProductGroup_2      as _ProductGroup               on  $projection.ProductGroup = _ProductGroup.ProductGroup    --AT25.10.2019 adding Product&ProductGroup
association [0..1] to   I_CalendarMonth       as _BillingDocDateCalendarMonth    on $projection.BillingDocDateCalendarMonth =   _BillingDocDateCalendarMonth.CalendarMonth
association [0..1] to   I_CalendarQuarter     as _BillingDocDateCalendarQuarter  on $projection.BillingDocDateCalendarQuarter =    _BillingDocDateCalendarQuarter.CalendarQuarter
--AT30.06.2020: missing fk for BillingDocDateYearMonth
//association [0..1] to   I_YearMonth           as _BillingDocDateYearMonth        on $projection.BillingDocDateYearMonth =    _BillingDocDateYearMonth.YearMonth
//

association [0..1] to   I_ProductHierarchyNode as _ProductHierarchyNode          on  $projection.ProductHierarchyNode = _ProductHierarchyNode.ProductHierarchyNode  --AT^2: 13.5.2019 explicitley added after ignorepropagation true
association [0..1] to   I_SalesDocumentType    as _SalesDocumentType             on  $projection.SalesDocumentType = _SalesDocumentType.SalesDocumentType           --AT^2: 13.5.2019 explicitley added after ignorepropagation true
association [1..1] to   I_SalesDocument        as _SalesDocument                 on  $projection.SalesDocument = _SalesDocument.SalesDocument                       --AT^2: 13.5.2019 explicitley added after ignorepropagation true

//Extensibility
association [0..1] to E_SalesDocumentItemBasic  as _Extension    
                   on  $projection.SalesDocument = _Extension.SalesDocument and $projection.SalesDocumentItem = _Extension.SalesDocumentItem
                   
association [0..1] to E_DeliveryDocumentItem    as _DelivDocItemExtension    
                   on  $projection.DeliveryDocument = _DelivDocItemExtension.DeliveryDocument and $projection.DeliveryDocumentItem = _DelivDocItemExtension.DeliveryDocumentItem
    
association [0..1] to E_BillingDocumentItem     as _BillgDocItemExtension    
                   on  $projection.BillingDocument = _BillgDocItemExtension.BillingDocument and $projection.BillingDocumentItem = _BillgDocItemExtension.BillingDocumentItem
                   
      
{
//key
  @Analytics.internalName: #LOCAL                        --AT:   29.5.2019 added (propagation before was inconsistent, so to be considered as new!)
  @ObjectModel.foreignKey.association: '_SalesDocument'  --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  key SalesDocument,                                     --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  _SalesDocument, 
//  @ObjectModel.text.element: 'SalesDocumentItemText'   --AT^2 13.5.2019 not used in cube
  key SalesDocumentItem,
  key ScheduleLine,
  key BillingPlan,
  key BillingPlanItem,
  key DeliveryDocument,
  key DeliveryDocumentItem,
//  key PrelimBillingDocument,      --AT 17.12.2018: new for CE1905
//  key PrelimBillingDocumentItem,  --AT 17.12.2018: new for CE1905
  key BillingDocument,
  key BillingDocumentItem,

//Dimensions

  //Customer
  @ObjectModel.foreignKey.association: '_SoldToParty'
//  @Consumption.valueHelpDefinition: [       --AT^2 13.5.2019 not used in cube   
//        { entity:  { name:    'I_Customer_VH',
//                     element: 'Customer' }
//        }]
  SoldToParty,
  SoldToPartyName,   
  @ObjectModel.foreignKey.association: '_CustomerGroup'
  CustomerGroup,
   --AT 29.04.2019: AdditionalCustomerGroup1..5 added
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'   
  AdditionalCustomerGroup1,
  _AdditionalCustomerGroup1,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
  AdditionalCustomerGroup2,
  _AdditionalCustomerGroup2,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
  AdditionalCustomerGroup3,
  _AdditionalCustomerGroup3,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
  AdditionalCustomerGroup4,
  _AdditionalCustomerGroup4,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
  AdditionalCustomerGroup5,
  _AdditionalCustomerGroup5,
  
  @ObjectModel.foreignKey.association: '_Customer'
  cast (SoldToParty as kunnr) as Customer,
  
  // ----- Category -----
  @ObjectModel.foreignKey.association: '_SDDocumentCategory'
  SDDocumentCategory,  
  @ObjectModel.foreignKey.association: '_SDDocumentObject'
  SDDocumentObject, 

  //Organization
  @ObjectModel.foreignKey.association: '_SalesOrganization'
  SalesOrganization,
  @ObjectModel.foreignKey.association: '_DistributionChannel'
  DistributionChannel,
  @ObjectModel.foreignKey.association: '_Division'
  Division,
  --CE2111 AT BK intro of dimension TradingPartner
  @Analytics.internalName: #LOCAL      
  @ObjectModel.foreignKey.association:'_GlobalCompany'
  _SoldToParty.TradingPartner as PartnerCompany,
  _SoldToParty._GlobalCompany,
  
  //Team View
  @ObjectModel.foreignKey.association: '_SalesOffice'
  SalesOffice,
  @ObjectModel.foreignKey.association: '_SalesGroup'
  SalesGroup,
  
  //Geographics
  @ObjectModel.foreignKey.association: '_SalesDistrict'
  SalesDistrict,
  
  //Product
  --CE1805: will probably deprecated, kept for existing apps (that can't be changed on short notice)
  @ObjectModel.foreignKey.association: '_Material'
  @API.element.releaseState: #DEPRECATED  --AT25.10.2019 add Product/deprecate Material
  @API.element.successor: 'Product'
//  @Consumption.valueHelpDefinition: [   --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_MaterialStdVH',
//                     element: 'Material' }
//        }]
//  @ObjectModel.text.association: '_MaterialText'   --AT^2 13.5.2019 not used in cube
  Material,
  --CE1805: released alternative to Material
  @ObjectModel.foreignKey.association: '_Product'     
  Product,
  @ObjectModel.foreignKey.association: '_OriginallyRequestedMaterial'
//  @ObjectModel.text.association: '_OrigMaterialText'  --AT^2 13.5.2019 not used in cube
//  @Consumption.valueHelpDefinition: [                 --AT^2 13.5.2019 not used in cube
//        { entity:  { name:    'I_MaterialStdVH',
//                     element: 'Material' }
//        }]
  OriginallyRequestedMaterial,
  InternationalArticleNumber,
  @Analytics.internalName: #LOCAL                               --AT:   29.5.2019 added (propagation before was inconsistent, so to be considered as new!)
  @ObjectModel.foreignKey.association: '_ProductHierarchyNode'  --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  ProductHierarchyNode,
  _ProductHierarchyNode,                                        --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  @ObjectModel.foreignKey.association: '_MaterialGroup'
  @API.element.releaseState: #DEPRECATED
  @API.element.successor: 'ProductGroup'
  MaterialGroup,
  @ObjectModel.foreignKey.association: '_ProductGroup'
  @Analytics.internalName: #LOCAL
  ProductGroup,   --AT25.10.2019 add ProductGroup/deprecate MaterialGroup
  --AT 29.04.2019: AdditionalMaterialGroup1..5 added
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
  AdditionalMaterialGroup1,
  _AdditionalMaterialGroup1,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
  AdditionalMaterialGroup2,
  _AdditionalMaterialGroup2,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
  AdditionalMaterialGroup3,
  _AdditionalMaterialGroup3,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
  AdditionalMaterialGroup4,
  _AdditionalMaterialGroup4,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
  AdditionalMaterialGroup5,
  _AdditionalMaterialGroup5,
  
  ProfitCenter, 
  
  //Time Period
  cast(PSA.CalendarDate as billing_document_date)               as         BillingDocumentDate,
  @Semantics.calendar.year
  cast(Period.CalendarYear as billing_document_date_year)       as         BillingDocumentDateYear,
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_BillingDocDateCalendarQuarter'
  cast(Period.CalendarQuarter as billing_doc_date_cal_quarter ) as         BillingDocDateCalendarQuarter,  --AT 31.1.2019 CE1905
  @Analytics.internalName: #LOCAL
  @ObjectModel.foreignKey.association: '_BillingDocDateCalendarMonth'
  cast(Period.CalendarMonth as billing_doc_date_cal_month  )    as         BillingDocDateCalendarMonth,    --AT 31.1.2019 CE1905
  @Semantics.calendar.yearQuarter
  cast(Period.YearQuarter as billing_doc_date_year_quarter)     as         BillingDocDateYearQuarter,
  @Semantics.calendar.yearMonth
  cast(Period.YearMonth as billing_doc_date_year_month)         as         BillingDocDateYearMonth, 

  // Misc (for DCL, I_CalenderDate-join)
  @Analytics.internalName: #LOCAL                               --AT:   29.5.2019 added (propagation before was inconsistent, so to be considered as new!)
  @ObjectModel.foreignKey.association: '_SalesDocumentType' --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  SalesDocumentType,    -- DCL Check for SalesDocument
  _SalesDocumentType,                                       --AT^2: 13.5.2019 explicitley added after ignorepropagation true
  @ObjectModel.foreignKey.association: '_ShippingPoint'
  ShippingPoint,        -- DCL Check for Delivery
  BillingDocumentType,  -- DCL Check for Billing
  PSA.CalendarDate,     -- for joining I_calendarDate & CurrencyConversion
  @Semantics.systemDate.createdAt: true
  CreationDate,     
  DeliveryDate,     --AT14.10.2021 CE2202 expose DeliveryDate from I_SLAnalytics (CFD Jira SDANALYTICS01-873)
  
  cast( case when SDDocumentCategory = 'C'
  then SalesDocument
  --else ''
  end as vdm_sales_order ) as SalesOrder,
      

//Measures
  //Measures Sales Document Item
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  OpnSOForOrdReltdInvcsNetAmount,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  OpnSOForOrdReltdInvcsNetAmtDC,   --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => OpnSOForOrdReltdInvcsNetAmount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as opn_ords_for_ordrelinv_amt_idc)                              as OpnSOForOrdReltdInvcsNetAmtDC,  
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnSlsOrdsForOrdReltdInvcsQty,

  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  OpnRetsForOrdReltdInvcsNetAmt ,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  OpnRetsOrdReltdInvcsNetAmtInDC ,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => OpnRetsForOrdReltdInvcsNetAmt, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as opn_rets_for_invc_net_amt_idc)       as OpnRetsOrdReltdInvcsNetAmtInDC,
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnRetsForOrdReltdInvcsQty ,


  //Measures Schedule Line
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  OpenSlsOrdersForDelivNetAmount,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  OpnSlsOrdsForDelivAmtInDspCrcy,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => OpenSlsOrdersForDelivNetAmount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as opn_ord_for_del_amt_idc)          
   as          OpnSlsOrdsForDelivAmtInDspCrcy,  
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnSlsOrdrsForDelivQuantity,
  
 //Measures for Billing Plan Due Date 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  OpnSlsOrdsForInvcPlansNetAmt,
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  OpnSlsOrdsForInvcPlansNetAmtDC,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => OpnSlsOrdsForInvcPlansNetAmt, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
       ) as opn_ord_for_iplan_amt_idc)          as          OpnSlsOrdsForInvcPlansNetAmtDC, 
 
  //Measures Delivery Document Item
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  OpnOutbDelivsForInvcNetAmt, 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  OpnOutbDelivsForInvcNetAmtInDC,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => OpnOutbDelivsForInvcNetAmt, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,      -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',  --'SET_TO_NULL',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as opn_dlv_for_inv_amt_idc ) --opn_ord_for_del_amt_idc)     
      as          OpnOutbDelivsForInvcNetAmtInDC,  
     
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  OpnOutbDelivsForInvcQty,
  
  --AT11.2.2022: introduction of enlarged (Dec19,2) successors
  @API.element: { releaseState: #DEPRECATED, successor: 'ShpdNotInvcdDelivsNetAmount_2' }
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  ShpdNotInvcdDelivsNetAmount,              --AT 25.4.2018: new for CE1808
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  ShpdNotInvcdDelivsNetAmount_2,
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  ShpdNotInvcdDelivsNetAmtInDC,         --2AT 24.1.2022: refactoring COS before APL Adoption     --AT 25.4.2018: new for CE1808
  cast ( currency_conversion(
            amount => ShpdNotInvcdDelivsNetAmount_2, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,      -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',  --'SET_TO_NULL',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as opn_shppd_dlv_for_inv_amt_idc)   
      as          ShpdNotInvcdDelivsNetAmtInDC,   
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  ShpdNotInvcdDelivsQuantity,               --AT 25.4.2018: new for CE1808
  
  //Measures Billing Document Item
  --AT11.2.2022: introduction of enlarged (Dec19,2) successors
  @API.element: { releaseState: #DEPRECATED, successor: 'SalesVolumeNetAmount_2' }
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SalesVolumeNetAmount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SalesVolumeNetAmount_2,
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  SlsVolumeNetAmtInDspCrcy,   --2AT 24.1.2022: refactoring COS before APL Adoption
   cast ( currency_conversion(
            amount => SalesVolumeNetAmount_2, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
       ) as mc_umnetwr)          as        SlsVolumeNetAmtInDspCrcy,  
  
//  @DefaultAggregation: #SUM
//  @Semantics.amount.currencyCode: 'TransactionCurrency'
//  PrelimBillgSlsVolNetAmt,                --AT 17.12.2018: new for CE1905
//
//  @DefaultAggregation: #SUM
//  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  PrelimBillgSlsVolNetAmtInDC,            --AT 17.12.2018: new for CE1905
    
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  SalesVolumeQuantity,
  
  --AT11.2.2022: introduction of enlarged (Dec19,2) successors
  @API.element: { releaseState: #DEPRECATED, successor: 'SalesProfitMarginNetAmount_2' }
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SalesProfitMarginNetAmount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  SalesProfitMarginNetAmount_2,
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  SlsProfitMargNetAmtInDspCrcy,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => SalesProfitMarginNetAmount_2, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
       ) as prf_marg_net_amt_idc)          as         SlsProfitMargNetAmtInDspCrcy, 
  
    
  --AT11.2.2022: introduction of enlarged (Dec19,2) successors
  @API.element: { releaseState: #DEPRECATED, successor: 'CustomerCreditMemoNetAmount_2' }
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  CustomerCreditMemoNetAmount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  CustomerCreditMemoNetAmount_2,
  
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  CustCrdtMemoNetAmtInDspCrcy,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => CustomerCreditMemoNetAmount_2, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
       ) as mc_gunetwr)          as         CustCrdtMemoNetAmtInDspCrcy, 
  
  @DefaultAggregation: #SUM
  @Semantics.quantity.unitOfMeasure: 'BaseUnit'
  CustCreditMemoQuantity,
    
--AT 29.04.2019: SubTotal1..6 & SubTotal1..6InDC added 
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  Subtotal1Amount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  Subtotal1AmountInDC,  --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => Subtotal1Amount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as subtotalamount1_idc)           as Subtotal1AmountInDC,  
  
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  Subtotal2Amount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  Subtotal2AmountInDC,   --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => Subtotal2Amount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as subtotalamount2_idc)           as Subtotal2AmountInDC,  
  
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  Subtotal3Amount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  Subtotal3AmountInDC,   --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => Subtotal3Amount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as subtotalamount3_idc)           as Subtotal3AmountInDC,  
  
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  Subtotal4Amount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  Subtotal4AmountInDC,   --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => Subtotal4Amount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as subtotalamount4_idc)           as Subtotal4AmountInDC,  
  
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  Subtotal5Amount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  Subtotal5AmountInDC,    --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => Subtotal5Amount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as subtotalamount5_idc)           as Subtotal5AmountInDC,  
  
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  Subtotal6Amount,
  @Analytics.internalName: #LOCAL
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  Subtotal6AmountInDC,    --2AT 24.1.2022: refactoring COS before APL Adoption
  cast ( currency_conversion(
            amount => Subtotal6Amount, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,       -- <---
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
        ) as subtotalamount6_idc)           as Subtotal6AmountInDC,      
    
 
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'TransactionCurrency'
  CustCrdtMemoPrftMargNetAmt,       -- AT 13.04.2018: added for CE1808
  @DefaultAggregation: #SUM
  @Semantics.amount.currencyCode: 'DisplayCurrency'
//  CustCrdtMemoPrftMargNetAmtInDC,  --2AT 24.1.2022: refactoring COS before APL Adoption  -- AT 13.04.2018: added for CE1808
  cast ( currency_conversion(
            amount => CustCrdtMemoPrftMargNetAmt, 
            source_currency => TransactionCurrency,
            target_currency => :P_DisplayCurrency,
            exchange_rate_date => PSA.CalendarDate,
            exchange_rate_type => :P_ExchangeRateType,
            error_handling => 'FAIL_ON_ERROR',
            round => #CDSBoolean.true,
            decimal_shift => #CDSBoolean.true,
            decimal_shift_back => #CDSBoolean.true
       ) as cm_prf_marg_net_amt_idc) as         CustCrdtMemoPrftMargNetAmtInDC, 
  
  @Semantics.currencyCode: true
  @ObjectModel.foreignKey.association: '_DisplayCurrency'
  cast(:P_DisplayCurrency as vdm_v_display_currency)   as         DisplayCurrency,
  @Semantics.currencyCode: true
  @ObjectModel.foreignKey.association: '_TransactionCurrency'
  TransactionCurrency,
  @Semantics.currencyCode: true
  @ObjectModel.foreignKey.association: '_StatisticsCurrency'
  StatisticsCurrency,
  @Semantics.unitOfMeasure: true
  @ObjectModel.foreignKey.association: '_BaseUnit'
  BaseUnit,

//Associations
  _BillingDocumentType,
  _SDDocumentObject,
  _DisplayCurrency,
  _StatisticsCurrency,
  _TransactionCurrency,
  _BaseUnit,
  _DistributionChannel,
  _Division,
   @API.element.releaseState: #DEPRECATED  --AT25.10.2019 add Product/deprecate Material
   @API.element.successor: '_Product'
  _Material,
  _Product,
  @API.element.releaseState: #DEPRECATED  --AT25.10.2019 add ProductGroup/deprecate MaterialGroup
  @API.element.successor: '_ProductGroup'
  @Analytics.internalName: #LOCAL
  _MaterialGroup,
  _ProductGroup,
  _OriginallyRequestedMaterial,
  _SalesDistrict,
  _SalesOffice,
  _SalesGroup,
  _SalesOrganization,
  _SoldToParty,
  _ShippingPoint,
  _CustomerGroup,
  _Customer,
  _SDDocumentCategory,
  _BillingDocDateCalendarMonth,
  _BillingDocDateCalendarQuarter --,
 -- _BillingDocDateYearMonth        --AT30.6.2020 fk added


}
```
