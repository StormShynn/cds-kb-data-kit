---
name: I_PROJECTBILLINGREQITEMTP_2
description: "Projectbillingreqitemtp 2"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - transactional-processing
  - billing
  - project
  - item-level
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQITEMTP_2

**Projectbillingreqitemtp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingRequestItemUUID` | ✓ | |  |  |  |  |
| `ProjBillgElmntEntrItmUUID` |  | |  |  |  |  |
| `ProjectBillingRequestUUID` |  | |  |  |  |  |
| `ProjectBillingElementUUID` |  | |  |  |  |  |
| `SalesDocumentItem` |  | |  |  |  |  |
| `ProjBillingRequestItemLongText` |  | |  |  |  |  |
| `ToBePostponedQuantity` |  | |  |  |  |  |
| `ToBePostponedAmtInTransacCrcy` |  | |  |  |  |  |
| `ToBePostponedAmtInProjectCrcy` |  | |  |  |  |  |
| `ToBePostponedAmtInGlobalCrcy` |  | |  |  |  |  |
| `ToBeWrittenOffQuantity` |  | |  |  |  |  |
| `ToBeWrittenOffAmtInTransCrcy` |  | |  |  |  |  |
| `ToBeWrittenOffAmtInProjectCrcy` |  | |  |  |  |  |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  |  |  |  |
| `BillableRevenueAmtInDocCrcy` |  | |  |  |  |  |
| `ProjBillgReqItmCrtedByUser` |  | |  |  |  |  |
| `ProjBillgReqItmCrtedAtDteTme` |  | |  |  |  |  |
| `ProjBillgReqItmLastChgdBy` |  | |  |  |  |  |
| `ProjBillgReqItmLastChgdDteTme` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `ToBeBilledQuantity` |  | |  |  |  |  |
| `ToBeBilledAmtInTransCrcy` |  | |  |  |  |  |
| `ToBeBilledAmtInProjCurrency` |  | |  |  |  |  |
| `ToBeBilledAmtInGlobCurrency` |  | |  |  |  |  |
| `OpenQuantity` |  | |  |  |  |  |
| `OpenAmountInTransCrcy` |  | |  |  |  |  |
| `OpenAmountInProjectCurrency` |  | |  |  |  |  |
| `OpenAmountInGlobalCurrency` |  | |  |  |  |  |
| `OpenRevenueAmtInDocCrcy` |  | |  |  |  |  |
| `NetPriceAmountInDocCrcy` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `ProjectCurrency` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `QuantityUnit` |  | |  |  |  |  |
| `ProjBillgReqItmSourceType` |  | |  |  |  |  |
| `ProjectBillingRequestItemDesc` |  | |  |  |  |  |
| `ProjectBillingCategory` |  | |  |  |  |  |
| `ManualBillgSelForPrjBlgReqItem` |  | |  |  |  |  |
| `_PrjBlgElmEntrJrnlEntrLink` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_ProjectCurrency` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_ProjectBillingCategory` | | ✓ | | | | |
| `_ProjBillgReqItmSrceType` | | ✓ | | | | |
| `_TransactionCurrencyText` | | ✓ | | | | |
| `_ProjectCurrencyText` | | ✓ | | | | |
| `_GlobalCurrencyText` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_ProjectBillingCategoryText` | | ✓ | | | | |
| `_ProjBillgReqItmSrceTypeText` | | ✓ | | | | |
| `_ProjectBillingRequestTP` | | ✓ | | | | |

## Source Code

```abap
@VDM: { viewType: #TRANSACTIONAL,
        lifecycle.contract.type: #PUBLIC_LOCAL_API }

@AccessControl: { authorizationCheck:    #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                supportedCapabilities : [ #TRANSACTIONAL_PROVIDER ],
                usageType             : { serviceQuality : #C,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }

@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'PBR Items Projection'


define view entity I_ProjectBillingReqItemTP_2
  as projection on R_ProjectBillingRequestItemTP as ProjectBillingRequestItem
  
{
  key ProjectBillingRequestItemUUID,
      ProjBillgElmntEntrItmUUID,
      ProjectBillingRequestUUID,
      ProjectBillingElementUUID,
      SalesDocumentItem,
      ProjBillingRequestItemLongText,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ToBePostponedQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ToBePostponedAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ToBePostponedAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ToBePostponedAmtInGlobalCrcy,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ToBeWrittenOffQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ToBeWrittenOffAmtInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ToBeWrittenOffAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ToBeWrittenOffAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      BillableRevenueAmtInDocCrcy,
      ProjBillgReqItmCrtedByUser,
      ProjBillgReqItmCrtedAtDteTme,
      ProjBillgReqItmLastChgdBy,
      ProjBillgReqItmLastChgdDteTme,
      ServicesRenderedDate,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ToBeBilledQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ToBeBilledAmtInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ToBeBilledAmtInProjCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ToBeBilledAmtInGlobCurrency,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      OpenQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      OpenAmountInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      OpenAmountInProjectCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      OpenAmountInGlobalCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      OpenRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmountInDocCrcy,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      NetPriceQuantityUnit,
      Material,
      TransactionCurrency,
      GlobalCurrency,
      ProjectCurrency,
      DocumentCurrency,
      QuantityUnit,
      @ObjectModel.sapObjectNodeTypeReference: 'ProjBillgReqItmSourceType'
      ProjBillgReqItmSourceType,
      ProjectBillingRequestItemDesc,
      @ObjectModel.sapObjectNodeTypeReference: 'ProjectBillingCategory'
      ProjectBillingCategory,
      @ObjectModel.sapObjectNodeTypeReference: 'ManualBillgSelForPrjBlgReqItem'
      ManualBillgSelForPrjBlgReqItem,

      /*Associations */
      _PrjBlgElmEntrJrnlEntrLink,
      ProjectBillingRequestItem._ProjectBillingRequest,
      _TransactionCurrency,
      _ProjectCurrency,
      _GlobalCurrency,
      _DocumentCurrency,
      _ProjectBillingCategory,
      _ProjBillgReqItmSrceType,
      @Consumption.hidden: true
      _TransactionCurrencyText,
      @Consumption.hidden: true
      _ProjectCurrencyText,
      @Consumption.hidden: true
      _GlobalCurrencyText,
      @Consumption.hidden: true
      _DocumentCurrencyText,
      @Consumption.hidden: true
      _ProjectBillingCategoryText,
      @Consumption.hidden: true
      _ProjBillgReqItmSrceTypeText,

      _ProjectBillingRequestTP : redirected to parent I_ProjectBillingRequestTP_2

}
where
  ProjectBillingCategory <> 'ICBL'
```
