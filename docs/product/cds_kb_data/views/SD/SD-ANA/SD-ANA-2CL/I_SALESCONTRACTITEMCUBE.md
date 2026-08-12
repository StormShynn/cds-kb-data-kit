---
name: I_SALESCONTRACTITEMCUBE
description: "Salescontractitemcube"
app_component: SD-ANA-2CL
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
  - SD
  - SD-ANA
  - interface-view
  - analytical
  - sales-contract
  - contract
  - item-level
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# I_SALESCONTRACTITEMCUBE

**Salescontractitemcube**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
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
| `SalesContract` | ✓ | |  | `cast(SDIA.SalesDocument as sales_contract preserving type)` |  |  |
| `SalesContractItem` | ✓ | |  | `cast(SDIA.SalesDocumentItem as sales_contract_item preserving type)` |  |  |
| `SalesContractType` |  | |  | `SalesDocumentType` |  |  |
| `SalesContractItemType` |  | |  | `SalesDocumentItemType` |  |  |
| `SalesContractItemCategory` |  | |  | `SalesDocumentItemCategory` |  |  |
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
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `PartnerCompany` |  | |  | `TradingPartner` |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `SalesEmployee` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `SalesContractDate` |  | |  | `SalesDocumentDate` |  |  |
| `SDDocumentReason` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `CustomerPurchaseOrderDate` |  | |  |  |  |  |
| `SalesContractItemText` |  | |  | `SalesDocumentItemText` |  |  |
| `SalesDocumentRjcnReason` |  | |  |  |  |  |
| `OutlineAgreementTargetAmount` |  | |  |  |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `TargetQuantityUnit` |  | |  |  |  |  |
| `SalesContractValidityStartDate` |  | |  | `AgrmtValdtyStartDate` |  |  |
| `SalesContractValidityEndDate` |  | |  | `AgrmtValdtyEndDate` |  |  |
| `SalesContractCanclnParty` |  | |  |  |  |  |
| `SalesContractCanclnReason` |  | |  |  |  |  |
| `SalesContractFollowUpAction` |  | |  |  |  |  |
| `ContractPartnerCanclnDocDate` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `Product` |  | |  | `cast(SDIA.Material as productnumber preserving type)` |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `AdditionalMaterialGroup1` |  | |  |  |  |  |
| `AdditionalMaterialGroup2` |  | |  |  |  |  |
| `AdditionalMaterialGroup3` |  | |  |  |  |  |
| `AdditionalMaterialGroup4` |  | |  |  |  |  |
| `AdditionalMaterialGroup5` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `MainItemPricingRefProduct` |  | |  |  |  |  |
| `HigherLevelItem` |  | |  |  |  |  |
| `BillOfMaterial` |  | |  |  |  |  |
| `PropagatePrftbltySgmt2BOM` |  | |  |  |  |  |
| `CostDeterminationIsRequired` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `SalesDistrict` |  | |  |  |  |  |
| `TaxAmount` |  | |  |  |  |  |
| `CostAmount` |  | |  |  |  |  |
| `Subtotal1Amount` |  | |  |  |  |  |
| `Subtotal2Amount` |  | |  |  |  |  |
| `Subtotal3Amount` |  | |  |  |  |  |
| `Subtotal4Amount` |  | |  |  |  |  |
| `Subtotal5Amount` |  | |  |  |  |  |
| `Subtotal6Amount` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  | `cast(:P_DisplayCurrency as vdm_v_display_currency)` |  |  |
| `BillingCompanyCode` |  | |  |  |  |  |
| `BillingDocumentDate` |  | |  |  |  |  |
| `ItemBillingBlockReason` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `FixedValueDate` |  | |  |  |  |  |
| `AdditionalValueDays` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `CustomerAccountAssignmentGroup` |  | |  |  |  |  |
| `SalesContractTargetValue` |  | |  |  |  |  |
| `SalesContractTargetAmount` |  | |  |  |  |  |
| `IncomingSlsContractNetAmount` |  | |  | `cast( SDIA.SalesContractTargetAmount as incg_sls_contr_net_amt )` |  |  |
| `SalesContractReleasedAmount` |  | |  | `cast( ReleasedSalesContract.SalesContractReleasedAmount as reld_sls_contr_tgt_val )` |  |  |
| `SalesContractTargetQuantity` |  | |  |  |  |  |
| `IncomingSlsContractQuantity` |  | |  | `cast( SDIA.SalesContractTargetQuantity as incg_sls_contr_qty )` |  |  |
| `SalesContractTargetValueInDC` |  | |  | `cast( currency_conversion( amount => SDIA.SalesContractTargetValue, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as sls_contr_tgt_val_in_dc )` |  |  |
| `SalesContractTargetAmountInDC` |  | |  | `cast( currency_conversion( amount => SDIA.SalesContractTargetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as sls_contr_tgt_val_in_dc )` |  |  |
| `IncomingSlsContractNetAmtInDC` |  | |  | `cast( currency_conversion( amount => SDIA.SalesContractTargetAmount, source_currency => SDIA.TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SDIA.CreationDate, exchange_rate_type => :P_ExchangeRateType, error_handling => 'FAIL_ON_ERROR', round => #CDSBoolean.true, decimal_shift => #CDSBoolean.true, decimal_shift_back => #CDSBoolean.true ) as incg_sls_contr_net_amt_in_dc )` |  |  |
| `SalesContractReleasedAmtInDC` |  | |  | `cast( ReleasedSalesContract.SalesContractReleasedAmtInDC as reld_sls_contr_tgt_val_in_dc )` |  |  |
| `ReferenceSDDocument` |  | |  |  |  |  |
| `ReferenceSDDocumentItem` |  | |  |  |  |  |
| `ReferenceSDDocumentCategory` |  | |  |  |  |  |
| `OverallSDProcessStatus` |  | |  | `cast(SDIA.OverallSDProcessStatus as overall_sd_process_status preserving type)` |  |  |
| `OverallSDDocumentRejectionSts` |  | |  | `cast(SDIA.OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)` |  |  |
| `TotalBlockStatus` |  | |  |  |  |  |
| `OverallDelivConfStatus` |  | |  | `cast(SDIA.OverallDelivConfStatus as overall_delivery_conf_status preserving type)` |  |  |
| `OverallTotalDeliveryStatus` |  | |  | `cast(SDIA.OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)` |  |  |
| `OverallDeliveryStatus` |  | |  | `cast(SDIA.OverallDeliveryStatus as overall_delivery_status preserving type)` |  |  |
| `OverallDeliveryBlockStatus` |  | |  | `cast(SDIA.OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)` |  |  |
| `OverallOrdReltdBillgStatus` |  | |  | `cast(SDIA.OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type)` |  |  |
| `OverallBillingBlockStatus` |  | |  | `cast(SDIA.OverallBillingBlockStatus as overall_billing_block_status preserving type)` |  |  |
| `OverallTotalSDDocRefStatus` |  | |  | `cast(SDIA.OverallTotalSDDocRefStatus as ovrl_reference_status preserving type)` |  |  |
| `OverallSDDocReferenceStatus` |  | |  | `cast(SDIA.OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)` |  |  |
| `HdrGeneralIncompletionStatus` |  | |  | `cast(SDIA.HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)` |  |  |
| `HeaderDelivIncompletionStatus` |  | |  | `cast(SDIA.HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type)` |  |  |
| `HeaderBillgIncompletionStatus` |  | |  | `cast(SDIA.HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type)` |  |  |
| `OvrlItmGeneralIncompletionSts` |  | |  | `cast(SDIA.OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)` |  |  |
| `OvrlItmBillingIncompletionSts` |  | |  | `cast(SDIA.OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)` |  |  |
| `OvrlItmDelivIncompletionSts` |  | |  | `cast(SDIA.OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)` |  |  |
| `SDProcessStatus` |  | |  | `cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)` |  |  |
| `DeliveryConfirmationStatus` |  | |  | `cast(SDIA.DeliveryConfirmationStatus as delivery_confirmation_status preserving type)` |  |  |
| `TotalDeliveryStatus` |  | |  |  |  |  |
| `DeliveryStatus` |  | |  |  |  |  |
| `DeliveryBlockStatus` |  | |  |  |  |  |
| `OrderRelatedBillingStatus` |  | |  |  |  |  |
| `BillingBlockStatus` |  | |  |  |  |  |
| `ItemGeneralIncompletionStatus` |  | |  | `cast(SDIA.ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type)` |  |  |
| `ItemBillingIncompletionStatus` |  | |  | `cast(SDIA.ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type)` |  |  |
| `ItemDeliveryIncompletionStatus` |  | |  | `cast(SDIA.ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type)` |  |  |
| `SDDocumentRejectionStatus` |  | |  | `cast(SDIA.SDDocumentRejectionStatus as sd_doc_rejection_status preserving type)` |  |  |
| `TotalSDDocReferenceStatus` |  | |  |  |  |  |
| `_SalesContract` | | ✓ | | | | |
| `_SalesContractType` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesContract` | `I_SalesContract` | [1..1] |
| `_SalesContractType` | `I_SalesContractType` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_Extension` | `E_SalesDocumentItemBasic` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Contract Item - Cube'
@VDM.viewType: #COMPOSITE
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations: [ '_CreatedByUser' ]
}
@AbapCatalog: {
  sqlViewName: 'ISDSLSCONTRITMC',
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

define view I_SalesContractItemCube
  with parameters
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from           I_SalesContractItemAnalytics as SDIA
    left outer to one join P_ReleasedSalesContractItem( P_ExchangeRateType : $parameters.P_ExchangeRateType,
                                                      P_DisplayCurrency  : $parameters.P_DisplayCurrency) 
                                                    as ReleasedSalesContract on SDIA.SalesDocument     = ReleasedSalesContract.SalesContract
                                                                            and SDIA.SalesDocumentItem = ReleasedSalesContract.SalesContractItem  
                                                                            and SDIA.SalesOrganization = ReleasedSalesContract.SalesOrganization  
                                                                            and SDIA.DistributionChannel = ReleasedSalesContract.DistributionChannel  
                                                                            and SDIA.OrganizationDivision = ReleasedSalesContract.OrganizationDivision  
                                                
    left outer to one join I_CalendarDate               as CalendarDate on SDIA.CreationDate = CalendarDate.CalendarDate

  //Association
  association [1..1] to I_SalesContract          as _SalesContract     on  $projection.SalesContract = _SalesContract.SalesContract
  association [0..1] to I_SalesContractType      as _SalesContractType on  $projection.SalesContractType = _SalesContractType.SalesContractType
  association [0..1] to I_Product                as _Product           on  $projection.Product = _Product.Product

  //Extensibility
  association [0..1] to E_SalesDocumentItemBasic as _Extension         on  SDIA.SalesDocument     = _Extension.SalesDocument
                                                                       and SDIA.SalesDocumentItem = _Extension.SalesDocumentItem
{
      //Key
      @ObjectModel.foreignKey.association: '_SalesContract'
  key cast(SDIA.SalesDocument as sales_contract preserving type)                                 as SalesContract,
      _SalesContract,
  key cast(SDIA.SalesDocumentItem as sales_contract_item preserving type)                        as SalesContractItem,

      //Category
      @ObjectModel.foreignKey.association: '_SalesContractType'
      SDIA.SalesDocumentType                                                                     as SalesContractType,
      _SalesContractType,
      SDIA.SalesDocumentItemType                                                                 as SalesContractItemType,
      @ObjectModel.foreignKey.association: '_ItemCategory'
      SDIA.SalesDocumentItemCategory                                                             as SalesContractItemCategory,
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
      cast(CalendarDate.CalendarYear as creation_date_year)                                      as CreationDateYear,
      @Semantics.calendar.yearQuarter
      cast(CalendarDate.YearQuarter as creation_date_year_quarter)                               as CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      cast(CalendarDate.YearMonth as creation_date_year_month)                                   as CreationDateYearMonth,

      //Organization
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      SDIA.SalesOrganization,
      SDIA._SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      SDIA.DistributionChannel,
      SDIA._DistributionChannel,
      @ObjectModel.foreignKey.association: '_OrganizationDivision'
      cast(SDIA.OrganizationDivision as organization_division preserving type)                   as OrganizationDivision,
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
      SDIA.SoldToParty,
      SDIA._SoldToParty,
      @ObjectModel.foreignKey.association: '_ShipToParty'
      SDIA.ShipToParty,
      SDIA._ShipToParty,

      // Sales Employee & Responsible Employee
      @ObjectModel.foreignKey.association: '_SalesEmployee'
      SDIA.SalesEmployee,
      SDIA._SalesEmployee,

      @ObjectModel.foreignKey.association: '_ResponsibleEmployee'
      SDIA.ResponsibleEmployee,
      SDIA._ResponsibleEmployee,

      @ObjectModel.foreignKey.association: '_CustomerGroup'
      SDIA.CustomerGroup,
      SDIA._CustomerGroup,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup1'
      SDIA.AdditionalCustomerGroup1,
      SDIA._AdditionalCustomerGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
      SDIA.AdditionalCustomerGroup2,
      SDIA._AdditionalCustomerGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
      SDIA.AdditionalCustomerGroup3,
      SDIA._AdditionalCustomerGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup4'
      SDIA.AdditionalCustomerGroup4,
      SDIA._AdditionalCustomerGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
      SDIA.AdditionalCustomerGroup5,
      SDIA._AdditionalCustomerGroup5,
      SDIA.SalesDocumentDate                                                                     as SalesContractDate,
      @ObjectModel.foreignKey.association: '_SDDocumentReason'
      SDIA.SDDocumentReason,
      SDIA._SDDocumentReason,
      SDIA.PurchaseOrderByCustomer,
      SDIA.CustomerPurchaseOrderDate,
      SDIA.SalesDocumentItemText                                                                 as SalesContractItemText,
      @ObjectModel.foreignKey.association: '_SalesDocumentRjcnReason'
      SDIA.SalesDocumentRjcnReason,
      SDIA._SalesDocumentRjcnReason,

      //Contract
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.OutlineAgreementTargetAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'TargetQuantityUnit'
      SDIA.TargetQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_TargetQuantityUnit'
      SDIA.TargetQuantityUnit,
      SDIA._TargetQuantityUnit,
      SDIA.AgrmtValdtyStartDate                                                                  as SalesContractValidityStartDate,
      SDIA.AgrmtValdtyEndDate                                                                    as SalesContractValidityEndDate,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnParty'
      SDIA.SalesContractCanclnParty,
      SDIA._SalesContractCanclnParty,
      @ObjectModel.foreignKey.association: '_SalesContractCanclnReason'
      SDIA.SalesContractCanclnReason,
      SDIA._SalesContractCanclnReason,
      @ObjectModel.foreignKey.association: '_SalesContractFollowUpAction'
      SDIA.SalesContractFollowUpAction,
      SDIA._SalesContractFollowUpAction,
      SDIA.ContractPartnerCanclnDocDate,

      //Product
      @ObjectModel.foreignKey.association: '_Material'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'Product'
      SDIA.Material,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_Product'
      SDIA._Material,
      @ObjectModel.foreignKey.association: '_Product'
      cast(SDIA.Material as productnumber preserving type)                                       as Product,
      _Product,
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
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
      SDIA.AdditionalMaterialGroup1,
      SDIA._AdditionalMaterialGroup1,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup2'
      SDIA.AdditionalMaterialGroup2,
      SDIA._AdditionalMaterialGroup2,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup3'
      SDIA.AdditionalMaterialGroup3,
      SDIA._AdditionalMaterialGroup3,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
      SDIA.AdditionalMaterialGroup4,
      SDIA._AdditionalMaterialGroup4,
      @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup5'
      SDIA.AdditionalMaterialGroup5,
      SDIA._AdditionalMaterialGroup5,
      @ObjectModel.foreignKey.association: '_Plant'
      SDIA.Plant,
      SDIA._Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      SDIA.StorageLocation,
      SDIA._StorageLocation,
      
      //BoM
      MainItemPricingRefProduct,
      HigherLevelItem,
      BillOfMaterial,
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,      

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

      //Pricing
      SDIA.PricingDate,
      @ObjectModel.foreignKey.association: '_SalesDistrict'
      SDIA.SalesDistrict,
      SDIA._SalesDistrict,

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

      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnit'
      SDIA.BaseUnit,
      SDIA._BaseUnit,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      SDIA.TransactionCurrency,
      SDIA._TransactionCurrency,
      @Semantics.currencyCode: true
      cast(:P_DisplayCurrency as vdm_v_display_currency)                                         as DisplayCurrency,

      //Billing
      @ObjectModel.foreignKey.association: '_BillingCompanyCode'
      SDIA.BillingCompanyCode,
      SDIA._BillingCompanyCode,
      SDIA.BillingDocumentDate,
      @ObjectModel.foreignKey.association: '_ItemBillingBlockReason'
      SDIA.ItemBillingBlockReason,
      SDIA._ItemBillingBlockReason,

      //Payment
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      SDIA.CustomerPaymentTerms,
      SDIA._CustomerPaymentTerms,
      SDIA.PaymentMethod,
      SDIA.FixedValueDate,
      SDIA.AdditionalValueDays,

      //Accounting
      SDIA.FiscalYear,
      SDIA.FiscalPeriod,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      SDIA.BusinessArea,
      SDIA._BusinessArea,
      SDIA.ProfitCenter,
      //SDIA.WBSElement Global Field Name has been deprecated
      SDIA.CustomerAccountAssignmentGroup,

      //KPI of Contract
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SalesContractTargetAmount'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.SalesContractTargetValue,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      SDIA.SalesContractTargetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( SDIA.SalesContractTargetAmount as incg_sls_contr_net_amt )                           as IncomingSlsContractNetAmount,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      cast( ReleasedSalesContract.SalesContractReleasedAmount as reld_sls_contr_tgt_val ) as SalesContractReleasedAmount,  

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SDIA.SalesContractTargetQuantity,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      cast( SDIA.SalesContractTargetQuantity as incg_sls_contr_qty )                             as IncomingSlsContractQuantity,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'SalesContractTargetAmountInDC'
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.SalesContractTargetValue,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as sls_contr_tgt_val_in_dc )                                                             as SalesContractTargetValueInDC,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.SalesContractTargetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as sls_contr_tgt_val_in_dc )                                                             as SalesContractTargetAmountInDC,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( currency_conversion(
        amount => SDIA.SalesContractTargetAmount,
        source_currency => SDIA.TransactionCurrency,
        target_currency => :P_DisplayCurrency,
        exchange_rate_date => SDIA.CreationDate,
        exchange_rate_type => :P_ExchangeRateType,
        error_handling => 'FAIL_ON_ERROR',
        round => #CDSBoolean.true,
        decimal_shift => #CDSBoolean.true,
        decimal_shift_back => #CDSBoolean.true
      ) as incg_sls_contr_net_amt_in_dc )                                                        as IncomingSlsContractNetAmtInDC,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      cast( ReleasedSalesContract.SalesContractReleasedAmtInDC as reld_sls_contr_tgt_val_in_dc ) as SalesContractReleasedAmtInDC,  

      //Reference
      @ObjectModel.foreignKey.association: '_ReferenceSDDocument'
      SDIA.ReferenceSDDocument,
      SDIA._ReferenceSDDocument,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentItem'
      SDIA.ReferenceSDDocumentItem,
      SDIA._ReferenceSDDocumentItem,
      @ObjectModel.foreignKey.association: '_ReferenceSDDocumentCategory'
      SDIA.ReferenceSDDocumentCategory,
      SDIA._ReferenceSDDocumentCategory,

      //Status
      @ObjectModel.foreignKey.association: '_OverallSDProcessStatus'
      cast(SDIA.OverallSDProcessStatus as overall_sd_process_status preserving type)             as OverallSDProcessStatus,
      SDIA._OverallSDProcessStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocumentRejectionSts'
      cast(SDIA.OverallSDDocumentRejectionSts as ovrl_sd_doc_rejection_status preserving type)   as OverallSDDocumentRejectionSts,
      SDIA._OverallSDDocumentRejectionSts,
      @ObjectModel.foreignKey.association: '_TotalBlockStatus'
      SDIA.TotalBlockStatus,
      SDIA._TotalBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallDelivConfStatus'
      cast(SDIA.OverallDelivConfStatus as overall_delivery_conf_status preserving type)          as OverallDelivConfStatus,
      SDIA._OverallDelivConfStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalDeliveryStatus'
      cast(SDIA.OverallTotalDeliveryStatus as itms_ovrl_delivery_status preserving type)         as OverallTotalDeliveryStatus,
      SDIA._OverallTotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryStatus'
      cast(SDIA.OverallDeliveryStatus as overall_delivery_status preserving type)                as OverallDeliveryStatus,
      SDIA._OverallDeliveryStatus,
      @ObjectModel.foreignKey.association: '_OverallDeliveryBlockStatus'
      cast(SDIA.OverallDeliveryBlockStatus as overall_delivery_block_status preserving type)     as OverallDeliveryBlockStatus,
      SDIA._OverallDeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallOrdReltdBillgStatus'
      cast(SDIA.OverallOrdReltdBillgStatus as ovrl_ord_rel_billg_status preserving type)         as OverallOrdReltdBillgStatus,
      SDIA._OverallOrdReltdBillgStatus,
      @ObjectModel.foreignKey.association: '_OverallBillingBlockStatus'
      cast(SDIA.OverallBillingBlockStatus as overall_billing_block_status preserving type)       as OverallBillingBlockStatus,
      SDIA._OverallBillingBlockStatus,
      @ObjectModel.foreignKey.association: '_OverallTotalSDDocRefStatus'
      cast(SDIA.OverallTotalSDDocRefStatus as ovrl_reference_status preserving type)             as OverallTotalSDDocRefStatus,
      SDIA._OverallTotalSDDocRefStatus,
      @ObjectModel.foreignKey.association: '_OverallSDDocReferenceStatus'
      cast(SDIA.OverallSDDocReferenceStatus as ovrl_sd_doc_reference_status preserving type)     as OverallSDDocReferenceStatus,
      SDIA._OverallSDDocReferenceStatus,
      @ObjectModel.foreignKey.association: '_HdrGeneralIncompletionStatus'
      cast(SDIA.HdrGeneralIncompletionStatus as hdr_general_incompltn_status preserving type)    as HdrGeneralIncompletionStatus,
      SDIA._HdrGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderDelivIncompletionStatus'
      cast(SDIA.HeaderDelivIncompletionStatus as hdrdelivincompletionstatus preserving type)     as HeaderDelivIncompletionStatus,
      SDIA._HeaderDelivIncompletionStatus,
      @ObjectModel.foreignKey.association: '_HeaderBillgIncompletionStatus'
      cast(SDIA.HeaderBillgIncompletionStatus as hdrbillgincompletionstatus preserving type)     as HeaderBillgIncompletionStatus,
      SDIA._HeaderBillgIncompletionStatus,
      @ObjectModel.foreignKey.association: '_OvrlItmGeneralIncompletionSts'
      cast(SDIA.OvrlItmGeneralIncompletionSts as itms_ovrl_incompletion_status preserving type)  as OvrlItmGeneralIncompletionSts,
      SDIA._OvrlItmGeneralIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmBillingIncompletionSts'
      cast(SDIA.OvrlItmBillingIncompletionSts as ovrl_itms_incompltn_sts_billg preserving type)  as OvrlItmBillingIncompletionSts,
      SDIA._OvrlItmBillingIncompletionSts,
      @ObjectModel.foreignKey.association: '_OvrlItmDelivIncompletionSts'
      cast(SDIA.OvrlItmDelivIncompletionSts as ovrl_items_dlv_incompltn_sts preserving type)     as OvrlItmDelivIncompletionSts,
      SDIA._OvrlItmDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_SDProcessStatus'
      cast(SDIA.SDProcessStatus as sd_doc_process_status preserving type)                        as SDProcessStatus,
      SDIA._SDProcessStatus,
      @ObjectModel.foreignKey.association: '_DeliveryConfirmationStatus'
      cast(SDIA.DeliveryConfirmationStatus as delivery_confirmation_status preserving type)      as DeliveryConfirmationStatus,
      SDIA._DeliveryConfirmationStatus,
      @ObjectModel.foreignKey.association: '_TotalDeliveryStatus'
      SDIA.TotalDeliveryStatus,
      SDIA._TotalDeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryStatus'
      SDIA.DeliveryStatus,
      SDIA._DeliveryStatus,
      @ObjectModel.foreignKey.association: '_DeliveryBlockStatus'
      SDIA.DeliveryBlockStatus,
      SDIA._DeliveryBlockStatus,
      @ObjectModel.foreignKey.association: '_OrderRelatedBillingStatus'
      SDIA.OrderRelatedBillingStatus,
      SDIA._OrderRelatedBillingStatus,
      @ObjectModel.foreignKey.association: '_BillingBlockStatus'
      SDIA.BillingBlockStatus,
      SDIA._BillingBlockStatus,
      @ObjectModel.foreignKey.association: '_ItemGeneralIncompletionStatus'
      cast(SDIA.ItemGeneralIncompletionStatus as item_general_incompletion_sts preserving type)  as ItemGeneralIncompletionStatus,
      SDIA._ItemGeneralIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemBillingIncompletionStatus'
      cast(SDIA.ItemBillingIncompletionStatus as itms_incompltn_sts_billg preserving type)       as ItemBillingIncompletionStatus,
      SDIA._ItemBillingIncompletionStatus,
      @ObjectModel.foreignKey.association: '_ItemDelivIncompletionSts'
      cast(SDIA.ItemDeliveryIncompletionStatus as itm_deliv_incompletion_status preserving type) as ItemDeliveryIncompletionStatus,
      SDIA._ItemDelivIncompletionSts,
      @ObjectModel.foreignKey.association: '_SDDocumentRejectionStatus'
      cast(SDIA.SDDocumentRejectionStatus as sd_doc_rejection_status preserving type)            as SDDocumentRejectionStatus,
      SDIA._SDDocumentRejectionStatus,
      @ObjectModel.foreignKey.association: '_TotalSDDocReferenceStatus'
      SDIA.TotalSDDocReferenceStatus,
      SDIA._TotalSDDocReferenceStatus
}
where
  SDIA.SDDocumentCategory = 'G'
```
