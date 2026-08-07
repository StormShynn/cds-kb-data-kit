---
name: C_SERVICECONTRACTITEMDEX
description: Servicecontractitemdex
app_component: CRM-S4-ANA-BI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - data-extraction
  - service
  - contract
  - item-level
  - component:CRM-S4-ANA-BI-2CL
  - lob:Other
---
# C_SERVICECONTRACTITEMDEX

**Servicecontractitemdex**

| Property | Value |
|---|---|
| App Component | `CRM-S4-ANA-BI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceObjectType` | ✓ | |  |  |  |  |
| `ServiceDocument` | ✓ | |  |  |  |  |
| `ServiceDocumentItem` | ✓ | |  |  |  |  |
| `ServiceDocumentUUID` |  | |  |  |  |  |
| `ServiceDocumentCharUUID` |  | |  |  |  |  |
| `ServiceDocumentDescription` |  | |  |  |  |  |
| `ServiceDocNetAmount` |  | |  |  |  |  |
| `PurchaseOrderByCustomer` |  | |  |  |  |  |
| `ServiceDocumentStatus` |  | |  |  |  |  |
| `ServiceDocumentIsReleased` |  | |  |  |  |  |
| `ServiceDocumentIsQuotation` |  | |  |  |  |  |
| `ServiceDocumentHasError` |  | |  |  |  |  |
| `ServiceDocIsReleasedForBilling` |  | |  |  |  |  |
| `ServiceDocumentIsRejected` |  | |  |  |  |  |
| `ServiceDocBillingStatus` |  | |  |  |  |  |
| `ServiceDocumentIsOpen` |  | |  |  |  |  |
| `BusinessActivityCategory` |  | |  |  |  |  |
| `ServiceDocChangedDateTime` |  | |  |  |  |  |
| `ServiceDocCreationDateTime` |  | |  |  |  |  |
| `RecommendedServicePriority` |  | |  |  |  |  |
| `ServiceDocumentItemPriority` |  | |  |  |  |  |
| `ServiceDocumentType` |  | |  |  |  |  |
| `ServiceDocumentItemUUID` |  | |  |  |  |  |
| `ServiceDocumentItemCharUUID` |  | |  |  |  |  |
| `ServiceDocumentItemObjectType` |  | |  |  |  |  |
| `ParentServiceDocumentItemUUID` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `SrvcDocItmPostingDateTime` |  | |  | `cast(ServiceContractItem.SrvcDocItmPostingDateTime as crms4_order_date_time preserving type )` |  |  |
| `SrvcDocItmValdtyStartDateTime` |  | |  |  |  |  |
| `SrvcDocItmValdtyEndDateTime` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `ProfitCenterDeterminationDate` |  | |  |  |  |  |
| `ServiceDocItemCategory` |  | |  |  |  |  |
| `OriginallyRequestedProduct` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `InvoiceAmountInInvoiceDocCrcy` |  | |  |  |  |  |
| `SrvcDocItmRequestedQuantity` |  | |  |  |  |  |
| `InvoiceQuantity` |  | |  |  |  |  |
| `SrvcDocItmDeliveredQuantity` |  | |  |  |  |  |
| `SrvcDocItmReleasedQuantity` |  | |  |  |  |  |
| `SrvcDocItmReldAmtInTransCrcy` |  | |  |  |  |  |
| `ServiceDocumentItemQuantity` |  | |  |  |  |  |
| `SrvcDocItmOrdToBaseQtyNmrtr` |  | |  |  |  |  |
| `SrvcDocItmOrdToBaseQtyDnmntr` |  | |  |  |  |  |
| `OrderToBaseQuantityExponent` |  | |  |  |  |  |
| `ServiceDocItemQuantityUnit` |  | |  |  |  |  |
| `SrvcDocItemBaseQuantityUnit` |  | |  |  |  |  |
| `ServiceTeam` |  | |  |  |  |  |
| `SoldToParty` |  | |  |  |  |  |
| `SoldToPartyCountry` |  | |  |  |  |  |
| `SoldToPartyRegion` |  | |  |  |  |  |
| `ResponsibleEmployee` |  | |  |  |  |  |
| `ContactPerson` |  | |  |  |  |  |
| `ServiceEmployee` |  | |  |  |  |  |
| `ShipToParty` |  | |  |  |  |  |
| `BillToParty` |  | |  |  |  |  |
| `PayerParty` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `StatisticsCurrency` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  |  |  |  |
| `CustomerGroup` |  | |  |  |  |  |
| `BillableControl` |  | |  |  |  |  |
| `PaymentTerms` |  | |  |  |  |  |
| `PaymentMethod` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `SEPAMandate` |  | |  |  |  |  |
| `SrvcSEPAMandateRelevance` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `AdditionalCustomerGroup1` |  | |  |  |  |  |
| `AdditionalCustomerGroup2` |  | |  |  |  |  |
| `AdditionalCustomerGroup3` |  | |  |  |  |  |
| `AdditionalCustomerGroup4` |  | |  |  |  |  |
| `AdditionalCustomerGroup5` |  | |  |  |  |  |
| `ServiceDocItemRejectionReason` |  | |  |  |  |  |
| `SalesOrganizationOrgUnitID` |  | |  |  |  |  |
| `SalesOfficeOrgUnitID` |  | |  |  |  |  |
| `SalesGroupOrgUnitID` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `ServiceOrganization` |  | |  |  |  |  |
| `ResponsibleSalesOrganization` |  | |  |  |  |  |
| `ResponsibleServiceOrganization` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `ServiceContrItemStartDateTime` |  | |  |  |  |  |
| `ServiceContrItemEndDateTime` |  | |  |  |  |  |
| `SrvcContrItemRnwlDuration` |  | |  |  |  |  |
| `SrvcContrItemRnwlDurationUnit` |  | |  |  |  |  |
| `SrvcContrItemExtensionDuration` |  | |  |  |  |  |
| `SrvcContrItemExtnDurationUnit` |  | |  |  |  |  |
| `ServiceDurationUnit` |  | |  |  |  |  |
| `ServiceDuration` |  | |  |  |  |  |
| `ResponseProfile` |  | |  |  |  |  |
| `ServiceProfile` |  | |  |  |  |  |
| `ServiceDocumentItemStatus` |  | |  |  |  |  |
| `ServiceDocumentItemIsReleased` |  | |  |  |  |  |
| `ServiceDocumentItemHasError` |  | |  |  |  |  |
| `SrvcDocItmDeliveryStatus` |  | |  |  |  |  |
| `SrvcDocItmGoodsIssueStatus` |  | |  |  |  |  |
| `ServiceDocItemBillingStatus` |  | |  |  |  |  |
| `SrvcDocItmIsReleasedForBilling` |  | |  |  |  |  |
| `ServiceDocumentItemIsRejected` |  | |  |  |  |  |
| `ServiceDocumentItemIsOpen` |  | |  |  |  |  |
| `ServiceDocumentItemNetAmount` |  | |  |  |  |  |
| `ServiceDocItemGrossAmount` |  | |  |  |  |  |
| `SrvcMaterialPricingGroup` |  | |  |  |  |  |
| `ProductGroup1` |  | |  |  |  |  |
| `ProductGroup2` |  | |  |  |  |  |
| `ProductGroup3` |  | |  |  |  |  |
| `ProductGroup4` |  | |  |  |  |  |
| `ProductGroup5` |  | |  |  |  |  |
| `ProductHierarchy` |  | |  |  |  |  |
| `BillingPlanIsFinalized` |  | |  |  |  |  |
| `ServiceRefObjectSequenceNumber` |  | |  |  |  |  |
| `ServiceReferenceObjectType` |  | |  |  |  |  |
| `ServiceReferenceObjectUUID` |  | |  |  |  |  |
| `ProductID` |  | |  |  |  |  |
| `SrvcRefObjIsMainObject` |  | |  |  |  |  |
| `ProductUUID` |  | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `FunctionalLocation` |  | |  |  |  |  |
| `SrvcQtanPredecessorUUID` |  | |  | `ServiceDocumentUUID` |  |  |
| `SrvcQtanPrdcssrBusObjType` |  | |  | `ServiceObjectType` |  |  |
| `ServiceDocumentItmRelationUUID` |  | |  |  |  |  |
| `ServiceDocItmRltnSqncNumber` |  | |  |  |  |  |
| `SrvcQtanItmPrdcssrCharUUID` |  | |  | `ServiceDocItmPrdcssrCharUUID` |  |  |
| `SrvcQtanItmPrdcssrBusObjType` |  | |  | `ServiceDocItmPrdcssrBusObjType` |  |  |
| `ServiceDocumentItemCanclnParty` |  | |  |  |  |  |
| `ServiceDocumentItmCanclnReason` |  | |  |  |  |  |
| `SrvcDocItmCanclnProcedure` |  | |  |  |  |  |
| `RefBusinessSolutionOrder` |  | |  |  |  |  |
| `RefBusinessSolutionOrderItem` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemExt` | `E_ServiceDocumentItem` | [0..1] |
| `_ServiceDocumentExt` | `E_ServiceDocument` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Data Extraction for Service Contract'
@VDM: {
  viewType: #CONSUMPTION,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                   filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000112'}],
                    table: 'crms4d_serv_i', role: #MAIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument', 'ServiceDocumentItem'],
                    tableElement: ['objtype_h', 'object_id', 'number_int']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000112'}],
                    table: 'crms4d_serv_h', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument'],
                    tableElement: ['objtype_h', 'object_id']
                },
                {
                    filter: [{operator: #EQ, tableElement: 'objtype_h', value: 'BUS2000112'}],
                    table: 'crms4d_refobj', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceObjectType', 'ServiceDocument','ServiceDocumentItem','ServiceRefObjectSequenceNumber'],
                    tableElement: ['objtype_h', 'object_id','number_int','counter']
                },
                {
//                   filter: [{operator: #EQ, tableElement: 'objtype_b', value: 'BUS2000112'}],
                    table: 'crmd_brelvonai', role: #LEFT_OUTER_TO_ONE_JOIN,
                    viewElement: ['ServiceDocumentItmRelationUUID', 'ServiceDocItmRltnSqncNumber'],
                   tableElement: ['relationid', 'posno']
                }
            ]
        }
    }
 }
@Analytics.technicalName: 'CSRVCCONTRITMDEX'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
  representativeKey: 'ServiceDocumentItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #D,
     sizeCategory:   #XL
   },
   supportedCapabilities: [#EXTRACTION_DATA_SOURCE]
}
@ObjectModel.sapObjectNodeType.name: 'ServiceContractItem'
@Metadata.ignorePropagatedAnnotations: true

/*

  Service Contract Extractor
  Note:
    1. Service Contract Items along with some Header fields are projected
    2. BW extracts all projected fields and performance is not relevant
    3. Out of box predecessor UUID fields are projected which indicates Service Quotation only.
        For any other predecessor types you may have to join explicitly!

*/

define view entity C_ServiceContractItemDEX
  as select from           I_ServiceDocumentItemEnhcd   as ServiceContractItem
    left outer to one join I_ServiceDocumentEnhcd       as ServiceContract            on  ServiceContract.ServiceObjectType     = 'BUS2000112'
                                                                                      and ServiceContractItem.ServiceObjectType = 'BUS2000112'
                                                                                      and ServiceContractItem.ServiceDocument   = ServiceContract.ServiceDocument

    left outer to one join I_ServiceDocumentRefObject   as ServiceContractItemRefObj  on  ServiceContractItemRefObj.ServiceObjectType      = 'BUS2000112'
                                                                                      and ServiceContractItemRefObj.ServiceDocument        = ServiceContractItem.ServiceDocument
                                                                                      and ServiceContractItemRefObj.ServiceDocumentItem    = ServiceContractItem.ServiceDocumentItem
                                                                                      and ServiceContractItemRefObj.SrvcRefObjIsMainObject = 'X'

    left outer to one join P_SrvcQtanItmFUPSrvcContrItm as ServiceDocumentItemPrdcssr on  ServiceContractItem.ServiceDocumentItemCharUUID   = ServiceDocumentItemPrdcssr.ServiceDocumentItemCharUUID
                                                                                      and ServiceContractItem.ServiceDocumentItemObjectType = ServiceDocumentItemPrdcssr.ServiceDocumentItemObjectType


  association [0..1] to E_ServiceDocumentItem as _ServiceDocItemExt  on  $projection.ServiceObjectType   = _ServiceDocItemExt.ServiceCategory
                                                                     and $projection.ServiceDocument     = _ServiceDocItemExt.ServiceOrderItem
                                                                     and $projection.ServiceDocumentItem = _ServiceDocItemExt.ServiceLineExternalID

  association [0..1] to E_ServiceDocument     as _ServiceDocumentExt on  $projection.ServiceObjectType = _ServiceDocumentExt.ServiceCategory
                                                                     and $projection.ServiceDocument   = _ServiceDocumentExt.ServiceOrder


{
      /* Service Order Item Keys  */
      @ObjectModel.foreignKey.association: '_ServiceObjType'
  key ServiceContractItem.ServiceObjectType,
      @ObjectModel.foreignKey.association: '_ServiceDocument'
  key ServiceContractItem.ServiceDocument,
  key ServiceContractItem.ServiceDocumentItem,

      /* Header Details */
      ServiceContract.ServiceDocumentUUID,
      @Semantics.uuid
      ServiceContract.ServiceDocumentCharUUID,
      ServiceContract.ServiceDocumentDescription,
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContract.ServiceDocNetAmount,
      ServiceContract.PurchaseOrderByCustomer,
      ServiceContract.ServiceDocumentStatus,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsReleased,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsQuotation,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentHasError,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocIsReleasedForBilling,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsRejected,
      ServiceContract.ServiceDocBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContract.ServiceDocumentIsOpen,
      ServiceContract.BusinessActivityCategory,
      ServiceContract.ServiceDocChangedDateTime,
      ServiceContract.ServiceDocCreationDateTime,
      ServiceContract.RecommendedServicePriority,

      /* Item Details */
      ServiceContractItem.ServiceDocumentItemPriority,
      ServiceContractItem.ServiceDocumentType,
      ServiceContractItem.ServiceDocumentItemUUID,
      @Semantics.uuid
      ServiceContractItem.ServiceDocumentItemCharUUID,
      ServiceContractItem.ServiceDocumentItemObjectType,
      ServiceContractItem.ParentServiceDocumentItemUUID,
      ServiceContractItem.PostingDate,
      @Semantics.dateTime:true
      cast(ServiceContractItem.SrvcDocItmPostingDateTime as crms4_order_date_time preserving type ) as SrvcDocItmPostingDateTime,
      ServiceContractItem.SrvcDocItmValdtyStartDateTime,
      ServiceContractItem.SrvcDocItmValdtyEndDateTime,
      ServiceContractItem.ProfitCenter,
      ServiceContractItem.ControllingArea,
      ServiceContractItem.ProfitCenterDeterminationDate,
      ServiceContractItem.ServiceDocItemCategory,
      ServiceContractItem.OriginallyRequestedProduct,
      ServiceContractItem.Product,

      /* Item - Cumulated Value */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.InvoiceAmountInInvoiceDocCrcy,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.SrvcDocItmRequestedQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.InvoiceQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.SrvcDocItmDeliveredQuantity,
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.SrvcDocItmReleasedQuantity,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.SrvcDocItmReldAmtInTransCrcy,

      /* Item - Schedule Line */
      @DefaultAggregation: #SUM
      @Semantics: { quantity : {unitOfMeasure: 'ServiceDocItemQuantityUnit'} }
      ServiceContractItem.ServiceDocumentItemQuantity,

      /* Item - Product */
      ServiceContractItem.SrvcDocItmOrdToBaseQtyNmrtr,
      ServiceContractItem.SrvcDocItmOrdToBaseQtyDnmntr,
      ServiceContractItem.OrderToBaseQuantityExponent,
      @ObjectModel.foreignKey.association: '_SalesUnit'
      ServiceContractItem.ServiceDocItemQuantityUnit,
      @ObjectModel.foreignKey.association: '_BaseUnit_2'
      ServiceContractItem.SrvcDocItemBaseQuantityUnit,

      /* Partner  */
      ServiceContractItem.ServiceTeam,
      ServiceContractItem.SoldToParty,
      ServiceContractItem.SoldToPartyCountry,
      ServiceContractItem.SoldToPartyRegion,
      ServiceContractItem.ResponsibleEmployee,
      ServiceContractItem.ContactPerson,
      ServiceContractItem.ServiceEmployee,
      ServiceContractItem.ShipToParty,
      ServiceContractItem.BillToParty,
      ServiceContractItem.PayerParty,

      /* Pricing Parameter Set */
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ServiceContractItem.TransactionCurrency,
      ServiceContractItem.StatisticsCurrency,
      ServiceContractItem.ExchangeRateType,
      ServiceContractItem.ExchangeRateDate,
      ServiceContractItem.AccountingExchangeRate,
      ServiceContractItem.CustomerGroup,
      ServiceContractItem.BillableControl,
      ServiceContractItem.PaymentTerms,
      ServiceContractItem.PaymentMethod,
      ServiceContractItem.WBSElementInternalID,
      ServiceContractItem.SEPAMandate,
      ServiceContractItem.SrvcSEPAMandateRelevance,
      
      /* Billing Set */
      ServiceContractItem.BillingBlockReason,

      /* Item - Sales Set */
      ServiceContractItem.AdditionalCustomerGroup1,
      ServiceContractItem.AdditionalCustomerGroup2,
      ServiceContractItem.AdditionalCustomerGroup3,
      ServiceContractItem.AdditionalCustomerGroup4,
      ServiceContractItem.AdditionalCustomerGroup5,
      ServiceContractItem.ServiceDocItemRejectionReason,

      /* Organization Unit Set */
      ServiceContractItem.SalesOrganizationOrgUnitID,
      ServiceContractItem.SalesOfficeOrgUnitID,
      ServiceContractItem.SalesGroupOrgUnitID,
      ServiceContractItem.DistributionChannel,
      ServiceContractItem.Division,
      ServiceContractItem.ServiceOrganization,
      ServiceContractItem.ResponsibleSalesOrganization,
      ServiceContractItem.ResponsibleServiceOrganization,

      /* Organizational units with the S/4 SD codes */
      ServiceContractItem.SalesOrganization,
      ServiceContractItem.SalesOffice,
      ServiceContractItem.SalesGroup,

      /* Date */
      @Semantics.dateTime:true
      ServiceContractItem.ServiceContrItemStartDateTime,
      @Semantics.dateTime:true
      ServiceContractItem.ServiceContrItemEndDateTime,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemRnwlDurationUnit'} }
      ServiceContractItem.SrvcContrItemRnwlDuration,
      ServiceContractItem.SrvcContrItemRnwlDurationUnit,
      @Semantics: { quantity : {unitOfMeasure: 'SrvcContrItemExtnDurationUnit'} }
      ServiceContractItem.SrvcContrItemExtensionDuration,
      ServiceContractItem.SrvcContrItemExtnDurationUnit,

      /* Item - Service */
      ServiceContractItem.ServiceDurationUnit,
      @Semantics.quantity.unitOfMeasure: 'SrvcDocItemBaseQuantityUnit' 
      ServiceContractItem.ServiceDuration,
      ServiceContractItem.ResponseProfile,
      ServiceContractItem.ServiceProfile,

      /* Status */
      ServiceContractItem.ServiceDocumentItemStatus,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemIsReleased,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemHasError,
      ServiceContractItem.SrvcDocItmDeliveryStatus,
      ServiceContractItem.SrvcDocItmGoodsIssueStatus,
      ServiceContractItem.ServiceDocItemBillingStatus,
      @Semantics.booleanIndicator: true
      ServiceContractItem.SrvcDocItmIsReleasedForBilling,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemIsRejected,
      @Semantics.booleanIndicator: true
      ServiceContractItem.ServiceDocumentItemIsOpen,
      // ServiceContractItem.QuotationIsAccepted, ...Not in Excel

      /* Item - Pricing */
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.ServiceDocumentItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics: { amount : {currencyCode: 'TransactionCurrency'} }
      ServiceContractItem.ServiceDocItemGrossAmount,

      /* Item Product */
      ServiceContractItem.SrvcMaterialPricingGroup,
      ServiceContractItem.ProductGroup1,
      ServiceContractItem.ProductGroup2,
      ServiceContractItem.ProductGroup3,
      ServiceContractItem.ProductGroup4,
      ServiceContractItem.ProductGroup5,
      ServiceContractItem.ProductHierarchy,
      
      /* Item Billing Plan */
      ServiceContractItem.BillingPlanIsFinalized,

      /* Reference Object Details */
      ServiceContractItemRefObj.ServiceRefObjectSequenceNumber,
      ServiceContractItemRefObj.ServiceReferenceObjectType,
      ServiceContractItemRefObj.ServiceReferenceObjectUUID,
      ServiceContractItemRefObj.ProductID,
      ServiceContractItemRefObj.SrvcRefObjIsMainObject,
      ServiceContractItemRefObj.ProductUUID,
      ServiceContractItemRefObj.SerialNumber,
      ServiceContractItemRefObj.Equipment,
      ServiceContractItemRefObj.FunctionalLocation,

      ServiceDocumentItemPrdcssr._ServiceDocItm.ServiceDocumentUUID as SrvcQtanPredecessorUUID,
      ServiceDocumentItemPrdcssr._ServiceDocItm.ServiceObjectType   as SrvcQtanPrdcssrBusObjType,

      ServiceDocumentItemPrdcssr.ServiceDocumentItmRelationUUID,
      ServiceDocumentItemPrdcssr.ServiceDocItmRltnSqncNumber,
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrCharUUID       as SrvcQtanItmPrdcssrCharUUID,
      ServiceDocumentItemPrdcssr.ServiceDocItmPrdcssrBusObjType     as SrvcQtanItmPrdcssrBusObjType,

      /* Cancellation */
      ServiceContractItem.ServiceDocumentItemCanclnParty,
      ServiceContractItem.ServiceDocumentItmCanclnReason,
      ServiceContractItem.SrvcDocItmCanclnProcedure,

      /* Solution Order */
      ServiceContractItem.RefBusinessSolutionOrder,
      ServiceContractItem.RefBusinessSolutionOrderItem,

      /*  Associations  */
      /* Keys */
      ServiceContractItem._ServiceObjType,
      ServiceContractItem._ServiceDocument,

      /* Item - Product */
      ServiceContractItem._BaseUnit_2,
      ServiceContractItem._SalesUnit,

      /* Pricing Parameter Set */
      ServiceContractItem._TransactionCurrency
      
}
where
      ServiceContractItem.ServiceObjectType           = 'BUS2000112'
  and ServiceContractItem.ServiceDocumentTemplateType is initial
```
