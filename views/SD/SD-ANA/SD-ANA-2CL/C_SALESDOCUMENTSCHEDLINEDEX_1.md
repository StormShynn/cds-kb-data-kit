---
name: C_SALESDOCUMENTSCHEDLINEDEX_1
description: Salesdocumentschedlinedex 1
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - consumption-view
  - data-extraction
  - sales-document
  - document
  - component:SD-ANA-2CL
  - lob:Sales & Distribution
---
# C_SALESDOCUMENTSCHEDLINEDEX_1

**Salesdocumentschedlinedex 1**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SalesDocument` | `ScheduleLine.SalesDocument` |
| key `SalesDocumentItem` | `ScheduleLine.SalesDocumentItem` |
| key `ScheduleLine` | `ScheduleLine.ScheduleLine` |
| `CreationDate` | `SalesDocumentItem.CreationDate` |
| `CreationTime` | `SalesDocumentItem.CreationTime` |
| `LastChangeDate` | `SalesDocumentItem.LastChangeDate` |
| `SDDocumentCategory` | `SalesDocument.SDDocumentCategory` |
| `SalesDocumentType` | `SalesDocument.SalesDocumentType` |
| `SalesDocumentItemCategory` | `SalesDocumentItem.SalesDocumentItemCategory` |
| `ScheduleLineCategory` | `ScheduleLine.ScheduleLineCategory` |
| `SalesOrganization` | `SalesDocument.SalesOrganization` |
| `DistributionChannel` | `SalesDocument.DistributionChannel` |
| `Division` | `SalesDocumentItem.Division` |
| `SalesGroup` | `SalesDocument.SalesGroup` |
| `SalesOffice` | `SalesDocument.SalesOffice` |
| `PricingDate` | `SalesDocument.PricingDate` |
| `NetPriceQuantityUnit` | `SalesDocumentItem.NetPriceQuantityUnit` |
| `NetPriceQuantity` | `SalesDocumentItem.NetPriceQuantity` |
| `NetPriceAmount` | `SalesDocumentItem.NetPriceAmount` |
| `PriceDetnExchangeRate` | `SalesDocument.PriceDetnExchangeRate` |
| `Material` | `SalesDocumentItem.Material` |
| `MaterialGroup` | `SalesDocumentItem.MaterialGroup` |
| `ProductGroup` | `SalesDocumentItem.ProductGroup` |
| `Product` | `SalesDocumentItem.Product` |
| `ProductHierarchyNode` | `SalesDocumentItem.ProductHierarchyNode` |
| `ProductAvailabilityDate` | `ScheduleLine.ProductAvailabilityDate` |
| `InternationalArticleNumber` | `SalesDocumentItem.InternationalArticleNumber` |
| `OriginallyRequestedMaterial` | `SalesDocumentItem.OriginallyRequestedMaterial` |
| `MaterialSubstitutionReason` | `SalesDocumentItem.MaterialSubstitutionReason` |
| `Batch` | `SalesDocumentItem.Batch` |
| `AdditionalMaterialGroup1` | `SalesDocumentItem.AdditionalMaterialGroup1` |
| `AdditionalMaterialGroup2` | `SalesDocumentItem.AdditionalMaterialGroup2` |
| `AdditionalMaterialGroup3` | `SalesDocumentItem.AdditionalMaterialGroup3` |
| `AdditionalMaterialGroup4` | `SalesDocumentItem.AdditionalMaterialGroup4` |
| `AdditionalMaterialGroup5` | `SalesDocumentItem.AdditionalMaterialGroup5` |
| `SoldToParty` | `SalesDocument.SoldToParty` |
| `AdditionalCustomerGroup1` | `SalesDocument.AdditionalCustomerGroup1` |
| `AdditionalCustomerGroup2` | `SalesDocument.AdditionalCustomerGroup2` |
| `AdditionalCustomerGroup3` | `SalesDocument.AdditionalCustomerGroup3` |
| `AdditionalCustomerGroup4` | `SalesDocument.AdditionalCustomerGroup4` |
| `AdditionalCustomerGroup5` | `SalesDocument.AdditionalCustomerGroup5` |
| `CustomerGroup` | `SalesDocument.CustomerGroup` |
| `SDDocumentReason` | `SalesDocument.SDDocumentReason` |
| `IsConfirmedDelivSchedLine` | `ScheduleLine.IsConfirmedDelivSchedLine` |
| `IsRequestedDelivSchedLine` | `ScheduleLine.IsRequestedDelivSchedLine` |
| `TargetQuantityUnit` | `SalesDocumentItem.TargetQuantityUnit` |
| `CorrectedQtyInOrderQtyUnit` | `ScheduleLine.CorrectedQtyInOrderQtyUnit` |
| `OrderQuantityUnit` | `ScheduleLine.OrderQuantityUnit` |
| `ConfdOrderQtyByMatlAvailCheck` | `ScheduleLine.ConfdOrderQtyByMatlAvailCheck` |
| `ScheduleLineOrderQuantity` | `ScheduleLine.ScheduleLineOrderQuantity` |
| `OpenConfdDelivQtyInBaseUnit` | `ScheduleLine.OpenConfdDelivQtyInBaseUnit` |
| `OpenDeliveryNetAmount` | `ScheduleLine.OpenDeliveryNetAmount` |
| `OpenReqdDelivQtyInOrdQtyUnit` | `ScheduleLine.OpenReqdDelivQtyInOrdQtyUnit` |
| `OpenReqdDelivQtyInBaseUnit` | `ScheduleLine.OpenReqdDelivQtyInBaseUnit` |
| `OpenConfdDelivQtyInOrdQtyUnit` | `ScheduleLine.OpenConfdDelivQtyInOrdQtyUnit` |
| `TargetToBaseQuantityDnmntr` | `SalesDocumentItem.TargetToBaseQuantityDnmntr` |
| `TargetToBaseQuantityNmrtr` | `SalesDocumentItem.TargetToBaseQuantityNmrtr` |
| `OrderToBaseQuantityDnmntr` | `SalesDocumentItem.OrderToBaseQuantityDnmntr` |
| `OrderToBaseQuantityNmrtr` | `SalesDocumentItem.OrderToBaseQuantityNmrtr` |
| `BaseUnit` | `SalesDocumentItem.BaseUnit` |
| `ItemVolumeUnit` | `SalesDocumentItem.ItemVolumeUnit` |
| `SalesDocumentRjcnReason` | `SalesDocumentItem.SalesDocumentRjcnReason` |
| `ItemWeightUnit` | `SalesDocumentItem.ItemWeightUnit` |
| `SalesDistrict` | `SalesDocument.SalesDistrict` |
| `DeliveryDate` | `ScheduleLine.DeliveryDate` |
| `RequestedDeliveryDate` | `SalesDocument.RequestedDeliveryDate` |
| `ServicesRenderedDate` | `SalesDocument.ServicesRenderedDate` |
| `StatisticsCurrency` | `SalesDocument.StatisticsCurrency` |
| `ShipToParty` | `SalesDocumentItem.ShipToParty` |
| `PayerParty` | `SalesDocumentItem.PayerParty` |
| `BillToParty` | `SalesDocumentItem.BillToParty` |
| `Route` | `SalesDocumentItem.Route` |
| `Plant` | `SalesDocumentItem.Plant` |
| `StorageLocation` | `SalesDocumentItem.StorageLocation` |
| `ShippingPoint` | `SalesDocumentItem.ShippingPoint` |
| `IncotermsClassification` | `SalesDocument.IncotermsClassification` |
| `IncotermsTransferLocation` | `SalesDocument.IncotermsTransferLocation` |
| `IncotermsVersion` | `SalesDocument.IncotermsVersion` |
| `DeliveryBlockReason` | `SalesDocument.DeliveryBlockReason` |
| `ConfdSchedLineReqdDelivDate` | `ScheduleLine.ConfdSchedLineReqdDelivDate` |
| `ConfirmedDeliveryDate` | `ScheduleLine.ConfirmedDeliveryDate` |
| `MRPRequiredQuantityInBaseUnit` | `ScheduleLine.MRPRequiredQuantityInBaseUnit` |
| `DelivBlockReasonForSchedLine` | `ScheduleLine.DelivBlockReasonForSchedLine` |
| `LoadingDate` | `ScheduleLine.LoadingDate` |
| `TransportationPlanningDate` | `ScheduleLine.TransportationPlanningDate` |
| `GoodsIssueDate` | `ScheduleLine.GoodsIssueDate` |
| `ItemOrderProbabilityInPercent` | `SalesDocumentItem.ItemOrderProbabilityInPercent` |
| `BindingPeriodValidityStartDate` | `SalesDocument.BindingPeriodValidityStartDate` |
| `BindingPeriodValidityEndDate` | `SalesDocument.BindingPeriodValidityEndDate` |
| `BillingCompanyCode` | `SalesDocument.BillingCompanyCode` |
| `BillingDocumentDate` | `SalesDocument.BillingDocumentDate` |
| `ItemBillingBlockReason` | `SalesDocumentItem.ItemBillingBlockReason` |
| `ExchangeRateType` | `SalesDocument.ExchangeRateType` |
| `ExchangeRateDate` | `SalesDocument.ExchangeRateDate` |
| `FiscalYearVariant` | `CompanyCode.FiscalYearVariant` |
| `TransactionCurrency` | `SalesDocumentItem.TransactionCurrency` |
| `CustomerAccountAssignmentGroup` | `SalesDocument.CustomerAccountAssignmentGroup` |
| `ReferenceSDDocumentCategory` | `SalesDocumentItem.ReferenceSDDocumentCategory` |
| `SDDocumentRejectionStatus` | `SalesDocumentItem.SDDocumentRejectionStatus` |
| `ItemDeliveryIncompletionStatus` | `SalesDocumentItem.ItemDeliveryIncompletionStatus` |
| `ItemGeneralIncompletionStatus` | `SalesDocumentItem.ItemGeneralIncompletionStatus` |
| `ItemBillingIncompletionStatus` | `SalesDocumentItem.ItemBillingIncompletionStatus` |
| `PricingIncompletionStatus` | `SalesDocumentItem.PricingIncompletionStatus` |
| `_SalesDocument` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExtensionItem` | `E_SalesDocumentItemBasic` | [0..1] |
| `_ExtensionHeader` | `E_SalesDocumentBasic` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSDSDOCSCHDLNDX1'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Data Extraction for Sales Document Schedule Lines'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'SalesDocumentScheduleLine'
@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #NONE
@ObjectModel.supportedCapabilities:  [ #EXTRACTION_DATA_SOURCE ]


@Analytics: {
     internalName: #LOCAL,
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'vbep', role: #MAIN,
                    viewElement: ['SalesDocument', 'SalesDocumentItem','ScheduleLine'],
                    tableElement: ['vbeln', 'posnr','etenr']
                },
                {
                    table: 'vbap', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesDocument', 'SalesDocumentItem'],
                    tableElement: ['vbeln', 'posnr']
                },
                {
                    table: 'vbak', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['SalesDocument'],
                    tableElement: ['vbeln']}
            ]
        }
    }
 }


define view C_SalesDocumentSchedLineDEX_1


as select from I_SalesDocumentScheduleLine          as ScheduleLine

       inner join I_SalesDocumentItem               as SalesDocumentItem       on ScheduleLine.SalesDocument = SalesDocumentItem.SalesDocument
                                                                               and ScheduleLine.SalesDocumentItem = SalesDocumentItem.SalesDocumentItem

       inner join I_SalesDocument                   as SalesDocument           on ScheduleLine.SalesDocument = SalesDocument.SalesDocument


left outer to one join I_CompanyCode                as CompanyCode             on  SalesDocument.BillingCompanyCode = CompanyCode.CompanyCode

//Extensibility
association [0..1] to E_SalesDocumentItemBasic      as  _ExtensionItem         on  $projection.SalesDocument     = _ExtensionItem.SalesDocument
                                                                               and $projection.SalesDocumentItem = _ExtensionItem.SalesDocumentItem

association [0..1] to E_SalesDocumentBasic          as  _ExtensionHeader       on  $projection.SalesDocument     = _ExtensionHeader.SalesDocument

{
    // Key
    @ObjectModel.foreignKey.association: '_SalesDocument'
    key ScheduleLine.SalesDocument,
    key ScheduleLine.SalesDocumentItem,
    key ScheduleLine.ScheduleLine,


    //Admin
    SalesDocumentItem.CreationDate,
    SalesDocumentItem.CreationTime,
    SalesDocumentItem.LastChangeDate,



    //Category
    SalesDocument.SDDocumentCategory,
    SalesDocument.SalesDocumentType,
    SalesDocumentItem.SalesDocumentItemCategory,
    ScheduleLine.ScheduleLineCategory,



    //Organization
    SalesDocument.SalesOrganization,
    SalesDocument.DistributionChannel,
    SalesDocumentItem.Division,
    SalesDocument.SalesGroup,
    SalesDocument.SalesOffice,


    //Pricing
    SalesDocument.PricingDate,
    @Semantics.unitOfMeasure: true
    SalesDocumentItem.NetPriceQuantityUnit,
    @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
    SalesDocumentItem.NetPriceQuantity,
    @Semantics.amount.currencyCode: 'TransactionCurrency'
    SalesDocumentItem.NetPriceAmount,
    SalesDocument.PriceDetnExchangeRate,


   //Product
    SalesDocumentItem.Material,
    SalesDocumentItem.MaterialGroup,
    SalesDocumentItem.ProductGroup,
    SalesDocumentItem.Product,
    SalesDocumentItem.ProductHierarchyNode,
    ScheduleLine.ProductAvailabilityDate,
    SalesDocumentItem.InternationalArticleNumber,
    SalesDocumentItem.OriginallyRequestedMaterial,
    SalesDocumentItem.MaterialSubstitutionReason,
    SalesDocumentItem.Batch,
    SalesDocumentItem.AdditionalMaterialGroup1,
    SalesDocumentItem.AdditionalMaterialGroup2,
    SalesDocumentItem.AdditionalMaterialGroup3,
    SalesDocumentItem.AdditionalMaterialGroup4,
    SalesDocumentItem.AdditionalMaterialGroup5,


    //Sales
    SalesDocument.SoldToParty,
    SalesDocument.AdditionalCustomerGroup1,
    SalesDocument.AdditionalCustomerGroup2,
    SalesDocument.AdditionalCustomerGroup3,
    SalesDocument.AdditionalCustomerGroup4,
    SalesDocument.AdditionalCustomerGroup5,
    SalesDocument.CustomerGroup,
    SalesDocument.SDDocumentReason,
    @Semantics.booleanIndicator:true
    ScheduleLine.IsConfirmedDelivSchedLine,
    @Semantics.booleanIndicator:true
    ScheduleLine.IsRequestedDelivSchedLine,
    @Semantics.unitOfMeasure: true
    SalesDocumentItem.TargetQuantityUnit,
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    ScheduleLine.CorrectedQtyInOrderQtyUnit,
    @Semantics.unitOfMeasure: true
    ScheduleLine.OrderQuantityUnit,
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    ScheduleLine.ConfdOrderQtyByMatlAvailCheck,
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    ScheduleLine.ScheduleLineOrderQuantity,
    @Semantics.quantity.unitOfMeasure: 'BaseUnit'
    ScheduleLine.OpenConfdDelivQtyInBaseUnit,
    @Semantics.amount.currencyCode: 'TransactionCurrency'
    ScheduleLine.OpenDeliveryNetAmount,
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    ScheduleLine.OpenReqdDelivQtyInOrdQtyUnit,
    @Semantics.quantity.unitOfMeasure: 'BaseUnit'
    ScheduleLine.OpenReqdDelivQtyInBaseUnit,
    @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
    ScheduleLine.OpenConfdDelivQtyInOrdQtyUnit,
    SalesDocumentItem.TargetToBaseQuantityDnmntr,
    SalesDocumentItem.TargetToBaseQuantityNmrtr,
    SalesDocumentItem.OrderToBaseQuantityDnmntr,
    SalesDocumentItem.OrderToBaseQuantityNmrtr,
    @Semantics.unitOfMeasure: true
    SalesDocumentItem.BaseUnit,
    @Semantics.unitOfMeasure: true
    SalesDocumentItem.ItemVolumeUnit,
    SalesDocumentItem.SalesDocumentRjcnReason,
    @Semantics.unitOfMeasure: true
    SalesDocumentItem.ItemWeightUnit,
    SalesDocument.SalesDistrict,
    ScheduleLine.DeliveryDate,
    SalesDocument.RequestedDeliveryDate,
    SalesDocument.ServicesRenderedDate,
    @Semantics.currencyCode: true
    SalesDocument.StatisticsCurrency,


    SalesDocumentItem.ShipToParty           as  ShipToParty,
    SalesDocumentItem.PayerParty            as  PayerParty,
    SalesDocumentItem.BillToParty           as  BillToParty,


    //Shipping
    SalesDocumentItem.Route,
    SalesDocumentItem.Plant,
    SalesDocumentItem.StorageLocation,
    SalesDocumentItem.ShippingPoint,
    SalesDocument.IncotermsClassification,
    SalesDocument.IncotermsTransferLocation,
    SalesDocument.IncotermsVersion,
    SalesDocument.DeliveryBlockReason,
    ScheduleLine.ConfdSchedLineReqdDelivDate,
    ScheduleLine.ConfirmedDeliveryDate,
    @Semantics.quantity.unitOfMeasure: 'BaseUnit'
    ScheduleLine.MRPRequiredQuantityInBaseUnit,
    ScheduleLine.DelivBlockReasonForSchedLine,
    ScheduleLine.LoadingDate,
    ScheduleLine.TransportationPlanningDate,
    ScheduleLine.GoodsIssueDate,


    //Quotation
    SalesDocumentItem.ItemOrderProbabilityInPercent,
    SalesDocument.BindingPeriodValidityStartDate,
    SalesDocument.BindingPeriodValidityEndDate,



    //Billing
    SalesDocument.BillingCompanyCode,
    SalesDocument.BillingDocumentDate,
    SalesDocumentItem.ItemBillingBlockReason,


    //Accounting
    SalesDocument.ExchangeRateType,
    SalesDocument.ExchangeRateDate,
    CompanyCode.FiscalYearVariant,
    @Semantics.currencyCode: true
    SalesDocumentItem.TransactionCurrency,
    SalesDocument.CustomerAccountAssignmentGroup,


    //Reference
    SalesDocumentItem.ReferenceSDDocumentCategory,



    //Status
    SalesDocumentItem.SDDocumentRejectionStatus,
    SalesDocumentItem.ItemDeliveryIncompletionStatus,
    SalesDocumentItem.ItemGeneralIncompletionStatus,
    SalesDocumentItem.ItemBillingIncompletionStatus,
    SalesDocumentItem.PricingIncompletionStatus,




    //Association
    _SalesDocument


}
where
        SalesDocument.SDDocumentCategory = 'A' // Inquiry 
    or  SalesDocument.SDDocumentCategory = 'B' // Quotation
    or  SalesDocument.SDDocumentCategory = 'C' // Order
    or  SalesDocument.SDDocumentCategory = 'G' // Contract
    or  SalesDocument.SDDocumentCategory = 'H' // Returns
    or  SalesDocument.SDDocumentCategory = 'I' // Order w/o charge
    or  SalesDocument.SDDocumentCategory = 'K' // Credit Memo Request
    or  SalesDocument.SDDocumentCategory = 'L' // Debit Memo Request
```
