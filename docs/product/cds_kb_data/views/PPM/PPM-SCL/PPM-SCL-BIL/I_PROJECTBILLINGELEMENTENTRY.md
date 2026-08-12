---
name: I_PROJECTBILLINGELEMENTENTRY
description: "Projectbillingelemententry"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
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
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGELEMENTENTRY

**Projectbillingelemententry**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgElmntEntrItmUUID` | ✓ | |  | `projbillgelmntentritmuuid` |  |  |
| `ProjectBillingElementUUID` |  | |  | `projectbillingelementuuid` |  |  |
| `ProjBillgElmntEntrSourceType` |  | |  | `projbillgelmntentrsourcetype` |  |  |
| `WBSElementInternalID` |  | |  | `wbselementinternalid` |  |  |
| `Material` |  | |  | `material` |  |  |
| `QuantityUnit` |  | |  | `quantityunit` |  |  |
| `ProjBillgElmntEntrIsCancelled` |  | |  | `projbillgelmntentriscancelled` |  |  |
| `PricingDate` |  | |  | `pricingdate` |  |  |
| `NetPriceAmountIsManual` |  | |  | `netpriceamountismanual` |  |  |
| `TransactionCurrency` |  | |  | `transactioncurrency` |  |  |
| `ProjectCurrency` |  | |  | `projectcurrency` |  |  |
| `GlobalCurrency` |  | |  | `globalcurrency` |  |  |
| `DocumentCurrency` |  | |  | `documentcurrency` |  |  |
| `ServicesRenderedDate` |  | |  | `servicesrendereddate` |  |  |
| `OriginalTotalQuantity` |  | |  | `originaltotalquantity` |  |  |
| `OriginalAmountInTransacCrcy` |  | |  | `originalamountintransaccrcy` |  |  |
| `OriginalAmountInProjectCrcy` |  | |  | `originalamountinprojectcrcy` |  |  |
| `OriginalAmountInGlobalCurrency` |  | |  | `originalamountinglobalcurrency` |  |  |
| `OpenQuantity` |  | |  | `openquantity` |  |  |
| `OpenAmountInTransCrcy` |  | |  | `openamountintranscrcy` |  |  |
| `OpenAmountInProjectCurrency` |  | |  | `openamountinprojectcurrency` |  |  |
| `OpenAmountInGlobalCurrency` |  | |  | `openamountinglobalcurrency` |  |  |
| `ToBeBilledQuantity` |  | |  | `tobebilledquantity` |  |  |
| `ToBeBilledAmtInTransCrcy` |  | |  | `tobebilledamtintranscrcy` |  |  |
| `ToBeBilledAmtInProjCurrency` |  | |  | `tobebilledamtinprojcurrency` |  |  |
| `ToBeBilledAmtInGlobCurrency` |  | |  | `tobebilledamtinglobcurrency` |  |  |
| `ToBeWrittenOffQuantity` |  | |  | `tobewrittenoffquantity` |  |  |
| `ToBeWrittenOffAmtInTransCrcy` |  | |  | `tobewrittenoffamtintranscrcy` |  |  |
| `ToBeWrittenOffAmtInProjectCrcy` |  | |  | `tobewrittenoffamtinprojectcrcy` |  |  |
| `ToBeWrittenOffAmtInGlobalCrcy` |  | |  | `tobewrittenoffamtinglobalcrcy` |  |  |
| `ToBePostponedQuantity` |  | |  | `tobepostponedquantity` |  |  |
| `ToBePostponedAmtInTransacCrcy` |  | |  | `tobepostponedamtintransaccrcy` |  |  |
| `ToBePostponedAmtInProjectCrcy` |  | |  | `tobepostponedamtinprojectcrcy` |  |  |
| `ToBePostponedAmtInGlobalCrcy` |  | |  | `tobepostponedamtinglobalcrcy` |  |  |
| `BillableRevenueAmtInDocCrcy` |  | |  | `billablerevenueamtindoccrcy` |  |  |
| `ManualNetPriceAmtInDocCrcy` |  | |  | `manualnetpriceamtindoccrcy` |  |  |
| `NetPriceAmountInDocCrcy` |  | |  | `netpriceamountindoccrcy` |  |  |
| `NetPriceQuantity` |  | |  | `netpricequantity` |  |  |
| `NetPriceQuantityUnit` |  | |  | `netpricequantityunit` |  |  |
| `OriginalRevenueAmtInDocCrcy` |  | |  | `originalrevenueamtindoccrcy` |  |  |
| `OpenRevenueAmtInDocCrcy` |  | |  | `openrevenueamtindoccrcy` |  |  |
| `ProjBillgElmntEntrIsReversed` |  | |  | `projbillgelmntentrisreversed` |  |  |
| `ProjBillgElmntEntrIsReversal` |  | |  | `projbillgelmntentrisreversal` |  |  |
| `PrjBlgElmEntrCanclnSrceCode` |  | |  | `prjblgelmentrcanclnsrcecode` |  |  |
| `PrjBlgElmEntrCreatedByUser` |  | |  | `prjblgelmentrcreatedbyuser` |  |  |
| `PrjBlgElmEntrCreatedAtDteTme` |  | |  | `prjblgelmentrcreatedatdtetme` |  |  |
| `PrjBlgElmEntrLastChgdByUser` |  | |  | `prjblgelmentrlastchgdbyuser` |  |  |
| `PrjBlgElmEntrLastChgdAtDteTme` |  | |  | `prjblgelmentrlastchgdatdtetme` |  |  |
| `PrjBlgElmEntryLongText` |  | |  | `prjblgelmentrylongtext` |  |  |
| `ProjectBillingElementEntryDesc` |  | |  | `projectbillingelemententrydesc` |  |  |
| `ProjBillgTransfCostQtyCode` |  | |  | `projbillgtransfcostqtycode` |  |  |
| `ProjBillgItmValIsNotActualCost` |  | |  | `projbillgitmvalisnotactualcost` |  |  |
| `ProjBillgElementEntryObject` |  | |  | `projbillgelemententryobject` |  |  |
| `PostingDate` |  | |  | `postingdate` |  |  |
| `_Material` | | ✓ | | | | |
| `_ProjectBillingElement` | | ✓ | | | | |
| `_ProjectBillingElementEntrFlw` | | ✓ | | | | |
| `_PrjBlgElmEntrJrnlEntrLink` | | ✓ | | | | |
| `_PrjBlgElmEntrBillgPlnLink` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrencyText` | | ✓ | | | | |
| `_ProjectCurrency` | | ✓ | | | | |
| `_ProjectCurrencyText` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_GlobalCurrencyText` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |
| `_ProjBillgElmntEntrSourceType` | | ✓ | | | | |
| `_PrjBlgElmEntrSrceTypeText` | | ✓ | | | | |
| `_PrjBlgElmEntrCanclnSrceCode` | | ✓ | | | | |
| `_PrjBlgElmEntrCanclnSrcCdText` | | ✓ | | | | |
| `_ProjBillgTransfCostQtyCode` | | ✓ | | | | |
| `_PrjBillgTransfCostQtyCodeTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Material` | [0..1] |
| `_ProjectBillingElement` | `I_ProjectBillingElement` | [1..1] |
| `_ProjectBillingElementEntrFlw` | `I_ProjectBillingElementEntrFlw` | [0..*] |
| `_PrjBlgElmEntrJrnlEntrLink` | `I_PrjBlgElmEntrJrnlEntrLink` | [0..1] |
| `_PrjBlgElmEntrBillgPlnLink` | `I_PrjBlgElmEntrBillgPlnLink` | [0..1] |
| `_WBSElement` | `I_WBSElementBasicData` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrencyText` | `I_CurrencyText` | [1..*] |
| `_ProjectCurrency` | `I_Currency` | [1..1] |
| `_ProjectCurrencyText` | `I_CurrencyText` | [1..*] |
| `_GlobalCurrency` | `I_Currency` | [1..1] |
| `_GlobalCurrencyText` | `I_CurrencyText` | [1..*] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_DocumentCurrencyText` | `I_CurrencyText` | [1..*] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProjBillgElmntEntrSourceType` | `I_ProjBillgElmntEntrSourceType` | [0..1] |
| `_PrjBlgElmEntrSrceTypeText` | `I_PrjBlgElmEntrSrceTypeText` | [1..*] |
| `_PrjBlgElmEntrCanclnSrceCode` | `I_PrjBlgElmEntrCanclnSrceCode` | [0..1] |
| `_PrjBlgElmEntrCanclnSrcCdText` | `I_PrjBlgElmEntrCanclnSrcCdText` | [1..*] |
| `_ProjBillgTransfCostQtyCode` | `I_ProjBillgTransfCostQtyCode` | [0..1] |
| `_PrjBillgTransfCostQtyCodeTxt` | `I_PrjBillgTransfCostQtyCodeTxt` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Entries for Project Billing Element'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [{
                                                        table: 'PROJBLGELMNTENTR',
                                                        role: #MAIN,
                                                        viewElement: ['ProjBillgElmntEntrItmUUID'],
                                                        tableElement: ['projbillgelmntentritmuuid']
}]
@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ],
    usageType:{
       sizeCategory: #L,
       dataClass:  #TRANSACTIONAL,
       serviceQuality: #A
    },
    representativeKey: 'ProjBillgElmntEntrItmUUID'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingElementEntry'

define view entity I_ProjectBillingElementEntry
  as select from projblgelmntentr as ProjectBillingElementEntry
  association [0..1] to I_Material                     as _Material                     on $projection.Material = _Material.Material

  association [1..1] to I_ProjectBillingElement        as _ProjectBillingElement        on $projection.ProjectBillingElementUUID = _ProjectBillingElement.ProjectBillingElementUUID

  association [0..*] to I_ProjectBillingElementEntrFlw as _ProjectBillingElementEntrFlw on $projection.ProjBillgElmntEntrItmUUID = _ProjectBillingElementEntrFlw.ProjBillgElmntEntrItmUUID

  association [0..1] to I_PrjBlgElmEntrJrnlEntrLink    as _PrjBlgElmEntrJrnlEntrLink    on $projection.ProjBillgElmntEntrItmUUID = _PrjBlgElmEntrJrnlEntrLink.ProjBillgElmntEntrItmUUID

  association [0..1] to I_PrjBlgElmEntrBillgPlnLink    as _PrjBlgElmEntrBillgPlnLink    on $projection.ProjBillgElmntEntrItmUUID = _PrjBlgElmEntrBillgPlnLink.ProjBillgElmntEntrItmUUID

  association [0..1] to I_WBSElementBasicData          as _WBSElement                   on $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID

  association [1..1] to I_Currency                     as _TransactionCurrency          on $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [1..*] to I_CurrencyText                 as _TransactionCurrencyText      on $projection.TransactionCurrency = _TransactionCurrencyText.Currency

  association [1..1] to I_Currency                     as _ProjectCurrency              on $projection.ProjectCurrency = _ProjectCurrency.Currency

  association [1..*] to I_CurrencyText                 as _ProjectCurrencyText          on $projection.ProjectCurrency = _ProjectCurrencyText.Currency

  association [1..1] to I_Currency                     as _GlobalCurrency               on $projection.GlobalCurrency = _GlobalCurrency.Currency

  association [1..*] to I_CurrencyText                 as _GlobalCurrencyText           on $projection.GlobalCurrency = _GlobalCurrencyText.Currency

  association [1..1] to I_Currency                     as _DocumentCurrency             on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..*] to I_CurrencyText                 as _DocumentCurrencyText         on $projection.DocumentCurrency = _DocumentCurrencyText.Currency

  association [0..1] to I_UnitOfMeasure                as _QuantityUnit                 on $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure

  association [0..1] to I_ProjBillgElmntEntrSourceType as _ProjBillgElmntEntrSourceType on $projection.ProjBillgElmntEntrSourceType = _ProjBillgElmntEntrSourceType.ProjBillgElmntEntrSourceType

  association [1..*] to I_PrjBlgElmEntrSrceTypeText    as _PrjBlgElmEntrSrceTypeText    on $projection.ProjBillgElmntEntrSourceType = _PrjBlgElmEntrSrceTypeText.ProjBillgElmntEntrSourceType

  association [0..1] to I_PrjBlgElmEntrCanclnSrceCode  as _PrjBlgElmEntrCanclnSrceCode  on $projection.PrjBlgElmEntrCanclnSrceCode = _PrjBlgElmEntrCanclnSrceCode.PrjBlgElmEntrCanclnSrceCode

  association [1..*] to I_PrjBlgElmEntrCanclnSrcCdText as _PrjBlgElmEntrCanclnSrcCdText on $projection.PrjBlgElmEntrCanclnSrceCode = _PrjBlgElmEntrCanclnSrcCdText.PrjBlgElmEntrCanclnSrceCode

  association [0..1] to I_ProjBillgTransfCostQtyCode   as _ProjBillgTransfCostQtyCode   on $projection.ProjBillgTransfCostQtyCode = _ProjBillgTransfCostQtyCode.ProjBillgTransfCostQtyCode

  association [1..*] to I_PrjBillgTransfCostQtyCodeTxt as _PrjBillgTransfCostQtyCodeTxt on $projection.ProjBillgTransfCostQtyCode = _PrjBillgTransfCostQtyCodeTxt.ProjBillgTransfCostQtyCode

  //  association [0..1] to I_ProjectBillingCategory       as _projectbillingcategory       on $projection.ProjectBillingCategory       = _projectbillingcategory.ProjectBillingCategory
  //
  //  association [1..*] to I_ProjectBillingCategoryText   as _ProjectBillingCategoryText   on $projection.ProjectBillingCategory       = _ProjectBillingCategoryText.ProjectBillingCategory

{
  key ProjectBillingElementEntry.projbillgelmntentritmuuid      as ProjBillgElmntEntrItmUUID,
      ProjectBillingElementEntry.projectbillingelementuuid      as ProjectBillingElementUUID,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ProjBillgElmntEntrSourceType',
                      element: 'ProjBillgElmntEntrSourceType' }
         }]
      @ObjectModel.foreignKey.association: '_ProjBillgElmntEntrSourceType'
      ProjectBillingElementEntry.projbillgelmntentrsourcetype   as ProjBillgElmntEntrSourceType,
      ProjectBillingElementEntry.wbselementinternalid           as WBSElementInternalID,
      ProjectBillingElementEntry.material                       as Material,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_UnitOfMeasureStdVH',
                      element: 'UnitOfMeasure' }
         }]
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      ProjectBillingElementEntry.quantityunit                   as QuantityUnit,
      ProjectBillingElementEntry.projbillgelmntentriscancelled  as ProjBillgElmntEntrIsCancelled,
      ProjectBillingElementEntry.pricingdate                    as PricingDate,
      ProjectBillingElementEntry.netpriceamountismanual         as NetPriceAmountIsManual,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      ProjectBillingElementEntry.transactioncurrency            as TransactionCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_ProjectCurrency'
      ProjectBillingElementEntry.projectcurrency                as ProjectCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      ProjectBillingElementEntry.globalcurrency                 as GlobalCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      ProjectBillingElementEntry.documentcurrency               as DocumentCurrency,
      //_ProjectBillingElement.DocumentCurrency                   as DocumentCurrency,

      ProjectBillingElementEntry.servicesrendereddate           as ServicesRenderedDate,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntry.originaltotalquantity          as OriginalTotalQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntry.originalamountintransaccrcy    as OriginalAmountInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntry.originalamountinprojectcrcy    as OriginalAmountInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntry.originalamountinglobalcurrency as OriginalAmountInGlobalCurrency,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntry.openquantity                   as OpenQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntry.openamountintranscrcy          as OpenAmountInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntry.openamountinprojectcurrency    as OpenAmountInProjectCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntry.openamountinglobalcurrency     as OpenAmountInGlobalCurrency,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntry.tobebilledquantity             as ToBeBilledQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntry.tobebilledamtintranscrcy       as ToBeBilledAmtInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntry.tobebilledamtinprojcurrency    as ToBeBilledAmtInProjCurrency,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntry.tobebilledamtinglobcurrency    as ToBeBilledAmtInGlobCurrency,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntry.tobewrittenoffquantity         as ToBeWrittenOffQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntry.tobewrittenoffamtintranscrcy   as ToBeWrittenOffAmtInTransCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntry.tobewrittenoffamtinprojectcrcy as ToBeWrittenOffAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntry.tobewrittenoffamtinglobalcrcy  as ToBeWrittenOffAmtInGlobalCrcy,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntry.tobepostponedquantity          as ToBePostponedQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntry.tobepostponedamtintransaccrcy  as ToBePostponedAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntry.tobepostponedamtinprojectcrcy  as ToBePostponedAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntry.tobepostponedamtinglobalcrcy   as ToBePostponedAmtInGlobalCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntry.billablerevenueamtindoccrcy    as BillableRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntry.manualnetpriceamtindoccrcy     as ManualNetPriceAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntry.netpriceamountindoccrcy        as NetPriceAmountInDocCrcy,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      ProjectBillingElementEntry.netpricequantity               as NetPriceQuantity,
      //      @Consumption.valueHelpDefinition: [
      //         { entity:  { name:    '',
      //                      element: '' }
      //         }]
      //      @ObjectModel.foreignKey.association: ''
      ProjectBillingElementEntry.netpricequantityunit           as NetPriceQuantityUnit,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntry.originalrevenueamtindoccrcy    as OriginalRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntry.openrevenueamtindoccrcy        as OpenRevenueAmtInDocCrcy,

      ProjectBillingElementEntry.projbillgelmntentrisreversed   as ProjBillgElmntEntrIsReversed,
      ProjectBillingElementEntry.projbillgelmntentrisreversal   as ProjBillgElmntEntrIsReversal,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_PrjBlgElmEntrCanclnSrceCode',
                      element: 'PrjBlgElmEntrCanclnSrceCode' }
         }]
      @ObjectModel.foreignKey.association: '_PrjBlgElmEntrCanclnSrceCode'
      ProjectBillingElementEntry.prjblgelmentrcanclnsrcecode    as PrjBlgElmEntrCanclnSrceCode,

      @Semantics.user.createdBy: true
      ProjectBillingElementEntry.prjblgelmentrcreatedbyuser     as PrjBlgElmEntrCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      ProjectBillingElementEntry.prjblgelmentrcreatedatdtetme   as PrjBlgElmEntrCreatedAtDteTme,
      @Semantics.user.lastChangedBy: true
      ProjectBillingElementEntry.prjblgelmentrlastchgdbyuser    as PrjBlgElmEntrLastChgdByUser,
      //@Semantics.systemDateTime.lastChangedAt: true
      ProjectBillingElementEntry.prjblgelmentrlastchgdatdtetme  as PrjBlgElmEntrLastChgdAtDteTme,
      ProjectBillingElementEntry.prjblgelmentrylongtext         as PrjBlgElmEntryLongText,
      ProjectBillingElementEntry.projectbillingelemententrydesc as ProjectBillingElementEntryDesc,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_ProjBillgTransfCostQtyCode',
                      element: 'ProjBillgTransfCostQtyCode' }
         }]
      @ObjectModel.foreignKey.association: '_ProjBillgTransfCostQtyCode'
      ProjectBillingElementEntry.projbillgtransfcostqtycode     as ProjBillgTransfCostQtyCode,
      ProjectBillingElementEntry.projbillgitmvalisnotactualcost as ProjBillgItmValIsNotActualCost,
      ProjectBillingElementEntry.projbillgelemententryobject    as ProjBillgElementEntryObject,
      ProjectBillingElementEntry.postingdate                    as PostingDate,
      //      @Consumption.valueHelpDefinition: [
      //        { entity:  { name:    'I_ProjectBillingCategory',
      //                     element: 'ProjectBillingCategory' }
      //        }]
      //      @ObjectModel.foreignKey.association: '_projectbillingcategory'
      //      _ProjectBillingElement.ProjectBillingCategory             as ProjectBillingCategory,
      //      _ProjectBillingElement.SalesDocument,
      //      _ProjectBillingElement._SalesDocument,

      _ProjectBillingElement,
      _ProjectBillingElementEntrFlw,
      _PrjBlgElmEntrJrnlEntrLink,
      _PrjBlgElmEntrBillgPlnLink,
      _Material,
      _WBSElement,
      _TransactionCurrency,
      _ProjectCurrency,
      _GlobalCurrency,
      _DocumentCurrency,
      _QuantityUnit,
      _ProjBillgElmntEntrSourceType,
      _PrjBlgElmEntrCanclnSrceCode,
      _ProjBillgTransfCostQtyCode,
      //      _projectbillingcategory,
      //      @Consumption.hidden: true
      //      _ProjectBillingCategoryText,
      @Consumption.hidden: true
      _TransactionCurrencyText,
      @Consumption.hidden: true
      _ProjectCurrencyText,
      @Consumption.hidden: true
      _GlobalCurrencyText,
      @Consumption.hidden: true
      _DocumentCurrencyText,
      @Consumption.hidden: true
      _PrjBlgElmEntrSrceTypeText,
      @Consumption.hidden: true
      _PrjBlgElmEntrCanclnSrcCdText,
      @Consumption.hidden: true
      _PrjBillgTransfCostQtyCodeTxt
}
```
