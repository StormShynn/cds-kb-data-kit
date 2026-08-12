---
name: I_PROJECTBILLINGREQUESTITEM
description: "Projectbillingrequestitem"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - billing
  - project
  - item-level
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGREQUESTITEM

**Projectbillingrequestitem**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectBillingRequestItemUUID` | ✓ | |  | `projectbillingrequestitemuuid` |  |  |
| `ProjectBillingRequestUUID` |  | |  | `projectbillingrequestuuid` |  |  |
| `ProjBillgElmntEntrItmUUID` |  | |  | `projbillgelmntentritmuuid` |  |  |
| `ProjectBillingElementUUID` |  | |  | `projectbillingelementuuid` |  |  |
| `SalesDocumentItem` |  | |  | `salesdocumentitem` |  |  |
| `BillingPlan` |  | |  | `billingplan` |  |  |
| `BillingPlanItem` |  | |  | `billingplanitem` |  |  |
| `ToBePostponedQuantity` |  | |  | `tobepostponedquantity` |  |  |
| `ToBePostponedAmtInTransacCrcy` |  | |  | `tobepostponedamtintransaccrcy` |  |  |
| `ToBePostponedAmtInProjectCrcy` |  | |  | `tobepostponedamtinprojectcrcy` |  |  |
| `ToBePostponedAmtInGlobalCrcy` |  | |  | `tobepostponedamtinglobalcrcy` |  |  |
| `ToBeWrittenOffQuantity` |  | |  | `tobewrittenoffquantity` |  |  |
| `ToBeWrittenOffAmtInTransCrcy` |  | |  | `tobewrittenoffamtintranscrcy` |  |  |
| `ToBeWrittenOffAmtInProjectCrcy` |  | |  | `tobewrittenoffamtinprojectcrcy` |  |  |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  | `tobewrittenoffamtinglobalcrcy` |  |  |
| `BillableRevenueAmtInDocCrcy` |  | |  | `billablerevenueamtindoccrcy` |  |  |
| `ProjBillgReqItmCrtedByUser` |  | |  | `projbillgreqitmcrtedbyuser` |  |  |
| `ProjBillgReqItmCrtedAtDteTme` |  | |  | `projbillgreqitmcrtedatdtetme` |  |  |
| `ProjBillgReqItmLastChgdBy` |  | |  | `projbillgreqitmlastchgdby` |  |  |
| `ProjBillgReqItmLastChgdDteTme` |  | |  | `projbillgreqitmlastchgddtetme` |  |  |
| `ServicesRenderedDate` |  | |  | `servicesrendereddate` |  |  |
| `ToBeBilledQuantity` |  | |  | `tobebilledquantity` |  |  |
| `ToBeBilledAmtInTransCrcy` |  | |  | `tobebilledamtintranscrcy` |  |  |
| `ToBeBilledAmtInProjCurrency` |  | |  | `tobebilledamtinprojcurrency` |  |  |
| `ToBeBilledAmtInGlobCurrency` |  | |  | `tobebilledamtinglobcurrency` |  |  |
| `OpenQuantity` |  | |  | `openquantity` |  |  |
| `OpenAmountInTransCrcy` |  | |  | `openamountintranscrcy` |  |  |
| `OpenAmountInProjectCurrency` |  | |  | `openamountinprojectcurrency` |  |  |
| `OpenAmountInGlobalCurrency` |  | |  | `openamountinglobalcurrency` |  |  |
| `OpenRevenueAmtInDocCrcy` |  | |  | `openrevenueamtindoccrcy` |  |  |
| `NetPriceAmountInDocCrcy` |  | |  | `netpriceamountindoccrcy` |  |  |
| `NetPriceQuantity` |  | |  | `netpricequantity` |  |  |
| `NetPriceQuantityUnit` |  | |  | `netpricequantityunit` |  |  |
| `Material` |  | |  | `material` |  |  |
| `ManualBillgSelForPrjBlgReqItem` |  | |  | `manualbillgselforprjblgreqitem` |  |  |
| `ProjBillingRequestItemLongText` |  | |  | `projbillingrequestitemlongtext` |  |  |
| `ProjectBillingRequestItemDesc` |  | |  | `projectbillingrequestitemdesc` |  |  |
| `ProjBillgReqItmSourceType` |  | |  | `projbillgreqitmsourcetype` |  |  |
| `ProjBillgTransfCostQtyCode` |  | |  | `projbillgtransfcostqtycode` |  |  |
| `ProjBillgItmValIsNotActualCost` |  | |  | `projbillgitmvalisnotactualcost` |  |  |
| `TransactionCurrency` |  | |  | `transactioncurrency` |  |  |
| `GlobalCurrency` |  | |  | `globalcurrency` |  |  |
| `ProjectCurrency` |  | |  | `projectcurrency` |  |  |
| `DocumentCurrency` |  | |  | `documentcurrency` |  |  |
| `QuantityUnit` |  | |  | `quantityunit` |  |  |
| `_ProjectBillingRequest` | | ✓ | | | | |
| `_ProjBillingDueDate` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_ProjBillgReqItmMnlBillgSel` | | ✓ | | | | |
| `_ProjBillgTransfCostQtyCode` | | ✓ | | | | |
| `_PrjBillgTransfCostQtyCodeTxt` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrencyText` | | ✓ | | | | |
| `_ProjectCurrency` | | ✓ | | | | |
| `_ProjectCurrencyText` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_GlobalCurrencyText` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |
| `_ProjBillgReqItmSrceType` | | ✓ | | | | |
| `_ProjBillgReqItmSrceTypeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingRequest` | `I_ProjectBillingRequest` | [1..1] |
| `_ProjectBillingElementEntry` | `I_ProjectBillingElementEntry` | [0..1] |
| `_ProjBillingDueDate` | `I_ProjectBillingElmntDueDate` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_ProjBillgReqItmMnlBillgSel` | `I_ProjBillgReqItmMnlBillgSel` | [0..1] |
| `_ProjBillgTransfCostQtyCode` | `I_ProjBillgTransfCostQtyCode` | [0..1] |
| `_PrjBillgTransfCostQtyCodeTxt` | `I_PrjBillgTransfCostQtyCodeTxt` | [1..*] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrencyText` | `I_CurrencyText` | [1..*] |
| `_ProjectCurrency` | `I_Currency` | [1..1] |
| `_ProjectCurrencyText` | `I_CurrencyText` | [1..*] |
| `_GlobalCurrency` | `I_Currency` | [1..1] |
| `_GlobalCurrencyText` | `I_CurrencyText` | [1..*] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_DocumentCurrencyText` | `I_CurrencyText` | [1..*] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProjBillgReqItmSrceType` | `I_ProjBillgReqItmSrceType` | [0..1] |
| `_ProjBillgReqItmSrceTypeText` | `I_ProjBillgReqItmSrceTypeText` | [1..*] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Items for Project Billing Request'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [{
                                                        table: 'PROJBILLGREQITEM',
                                                        role: #MAIN,
                                                        viewElement: ['ProjectBillingRequestItemUUID'],
                                                        tableElement: ['projectbillingrequestitemuuid']
}]
@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE,#UI_PROVIDER_PROJECTION_SOURCE],
    usageType:{
       sizeCategory: #XL,
       dataClass:  #TRANSACTIONAL,
       serviceQuality: #B
    },
    representativeKey: 'ProjectBillingRequestItemUUID'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingRequestItem'

define view entity I_ProjectBillingRequestItem
  as select from projbillgreqitem
  association [1..1] to I_ProjectBillingRequest        as _ProjectBillingRequest        on $projection.ProjectBillingRequestUUID = _ProjectBillingRequest.ProjectBillingRequestUUID
  association [0..1] to I_ProjectBillingElementEntry   as _ProjectBillingElementEntry   on $projection.ProjBillgElmntEntrItmUUID = _ProjectBillingElementEntry.ProjBillgElmntEntrItmUUID
  association [0..1] to I_ProjectBillingElmntDueDate   as _ProjBillingDueDate           on $projection.ProjectBillingElementUUID = _ProjBillingDueDate.ProjectBillingElementUUID
  association [0..1] to I_Material                     as _Material                     on $projection.Material = _Material.Material
  association [0..1] to I_ProjBillgReqItmMnlBillgSel   as _ProjBillgReqItmMnlBillgSel   on $projection.ManualBillgSelForPrjBlgReqItem = _ProjBillgReqItmMnlBillgSel.ManualBillgSelForPrjBlgReqItem

  association [0..1] to I_ProjBillgTransfCostQtyCode   as _ProjBillgTransfCostQtyCode   on $projection.ProjBillgTransfCostQtyCode = _ProjBillgTransfCostQtyCode.ProjBillgTransfCostQtyCode

  association [1..*] to I_PrjBillgTransfCostQtyCodeTxt as _PrjBillgTransfCostQtyCodeTxt on $projection.ProjBillgTransfCostQtyCode = _PrjBillgTransfCostQtyCodeTxt.ProjBillgTransfCostQtyCode

  association [1..1] to I_Currency                     as _TransactionCurrency          on $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [1..*] to I_CurrencyText                 as _TransactionCurrencyText      on $projection.TransactionCurrency = _TransactionCurrencyText.Currency

  association [1..1] to I_Currency                     as _ProjectCurrency              on $projection.ProjectCurrency = _ProjectCurrency.Currency

  association [1..*] to I_CurrencyText                 as _ProjectCurrencyText          on $projection.ProjectCurrency = _ProjectCurrencyText.Currency

  association [1..1] to I_Currency                     as _GlobalCurrency               on $projection.GlobalCurrency = _GlobalCurrency.Currency

  association [1..*] to I_CurrencyText                 as _GlobalCurrencyText           on $projection.GlobalCurrency = _GlobalCurrencyText.Currency

  association [1..1] to I_Currency                     as _DocumentCurrency             on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..*] to I_CurrencyText                 as _DocumentCurrencyText         on $projection.DocumentCurrency = _DocumentCurrencyText.Currency

  association [0..1] to I_UnitOfMeasure                as _QuantityUnit                 on $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure

  association [0..1] to I_ProjBillgReqItmSrceType      as _ProjBillgReqItmSrceType      on $projection.ProjBillgReqItmSourceType = _ProjBillgReqItmSrceType.ProjBillgReqItmSourceType

  association [1..*] to I_ProjBillgReqItmSrceTypeText  as _ProjBillgReqItmSrceTypeText  on $projection.ProjBillgReqItmSourceType = _ProjBillgReqItmSrceTypeText.ProjBillgReqItmSourceType

  //  association [0..1] to I_SDBillingPlan               as _SDBillingPlan               on  $projection.BillingPlan = _SDBillingPlan.BillingPlan
  //  association [0..1] to I_SDBillingPlanItem           as _SDBillingPlanItem           on  $projection.BillingPlan     = _SDBillingPlanItem.BillingPlan
  //                                                                                      and $projection.BillingPlanItem = _SDBillingPlanItem.BillingPlanItem

{
  key projectbillingrequestitemuuid  as ProjectBillingRequestItemUUID,
      projectbillingrequestuuid      as ProjectBillingRequestUUID,
      projbillgelmntentritmuuid      as ProjBillgElmntEntrItmUUID,
      projectbillingelementuuid      as ProjectBillingElementUUID,
      salesdocumentitem              as SalesDocumentItem,
      //      @ObjectModel.foreignKey.association: '_SDBillingPlan'
      billingplan                    as BillingPlan,
      //      @ObjectModel.foreignKey.association: '_SDBillingPlanItem'
      billingplanitem                as BillingPlanItem,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      tobepostponedquantity          as ToBePostponedQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      tobepostponedamtintransaccrcy  as ToBePostponedAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      tobepostponedamtinprojectcrcy  as ToBePostponedAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      tobepostponedamtinglobalcrcy   as ToBePostponedAmtInGlobalCrcy,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      tobewrittenoffquantity         as ToBeWrittenOffQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      tobewrittenoffamtintranscrcy   as ToBeWrittenOffAmtInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      tobewrittenoffamtinprojectcrcy as ToBeWrittenOffAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      tobewrittenoffamtinglobalcrcy  as ToBeWrittenOffAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      billablerevenueamtindoccrcy    as BillableRevenueAmtInDocCrcy,
      @Semantics.user.createdBy: true
      projbillgreqitmcrtedbyuser     as ProjBillgReqItmCrtedByUser,
      @Semantics.systemDateTime.createdAt: true
      projbillgreqitmcrtedatdtetme   as ProjBillgReqItmCrtedAtDteTme,
      @Semantics.user.lastChangedBy: true
      projbillgreqitmlastchgdby      as ProjBillgReqItmLastChgdBy,
      @Semantics.systemDateTime.lastChangedAt: true
      projbillgreqitmlastchgddtetme  as ProjBillgReqItmLastChgdDteTme,
      servicesrendereddate           as ServicesRenderedDate,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      tobebilledquantity             as ToBeBilledQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      tobebilledamtintranscrcy       as ToBeBilledAmtInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      tobebilledamtinprojcurrency    as ToBeBilledAmtInProjCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      tobebilledamtinglobcurrency    as ToBeBilledAmtInGlobCurrency,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      openquantity                   as OpenQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      openamountintranscrcy          as OpenAmountInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      openamountinprojectcurrency    as OpenAmountInProjectCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      openamountinglobalcurrency     as OpenAmountInGlobalCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      openrevenueamtindoccrcy        as OpenRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      netpriceamountindoccrcy        as NetPriceAmountInDocCrcy,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      netpricequantity               as NetPriceQuantity,
      netpricequantityunit           as NetPriceQuantityUnit,
      @ObjectModel.foreignKey.association: '_Material'
      material                       as Material,
      @ObjectModel.foreignKey.association: '_ProjBillgReqItmMnlBillgSel'
      manualbillgselforprjblgreqitem as ManualBillgSelForPrjBlgReqItem,
      @Semantics.text: true
      projbillingrequestitemlongtext as ProjBillingRequestItemLongText,
      @Semantics.text: true
      projectbillingrequestitemdesc  as ProjectBillingRequestItemDesc,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ProjBillgReqItmSrceType',
                     element: 'ProjBillgReqItmSourceType' }
        }]
      @ObjectModel.foreignKey.association: '_ProjBillgReqItmSrceType'
      projbillgreqitmsourcetype      as ProjBillgReqItmSourceType,
      @Consumption.valueHelpDefinition: [
       { entity:  { name:    'I_ProjBillgTransfCostQtyCode',
                    element: 'ProjBillgTransfCostQtyCode' }
       }]
      @ObjectModel.foreignKey.association: '_ProjBillgTransfCostQtyCode'
      projbillgtransfcostqtycode     as ProjBillgTransfCostQtyCode,
      @Semantics.booleanIndicator: true
      projbillgitmvalisnotactualcost as ProjBillgItmValIsNotActualCost,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      //_ProjectBillingElementEntry.TransactionCurrency as TransactionCurrency,
      transactioncurrency            as TransactionCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      //_ProjectBillingElementEntry.GlobalCurrency   as GlobalCurrency,
      globalcurrency                 as GlobalCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_ProjectCurrency'
      //_ProjectBillingElementEntry.ProjectCurrency  as ProjectCurrency,
      projectcurrency                as ProjectCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      //_ProjectBillingElementEntry.DocumentCurrency as DocumentCurrency,
      documentcurrency               as DocumentCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_UnitOfMeasureStdVH',
                     element: 'UnitOfMeasure' }
        }]
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      //_ProjectBillingElementEntry.QuantityUnit     as QuantityUnit,
      quantityunit                   as QuantityUnit,


      _ProjectBillingRequest,
      _ProjBillingDueDate,
      _Material,
      _ProjBillgReqItmMnlBillgSel,
      _ProjBillgReqItmSrceType,
      _QuantityUnit,
      _TransactionCurrency,
      _DocumentCurrency,
      _GlobalCurrency,
      _ProjectCurrency,
      _ProjBillgTransfCostQtyCode,
      @Consumption.hidden: true
      _TransactionCurrencyText,
      @Consumption.hidden: true
      _ProjectCurrencyText,
      @Consumption.hidden: true
      _GlobalCurrencyText,
      @Consumption.hidden: true
      _DocumentCurrencyText,
      @Consumption.hidden: true
      _ProjBillgReqItmSrceTypeText,
      @Consumption.hidden: true
      _PrjBillgTransfCostQtyCodeTxt

      //      _SDBillingPlanItem,
      //      _SDBillingPlan
}
```
