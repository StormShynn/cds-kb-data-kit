---
name: I_PROJECTBILLINGELEMENTENTRFLW
description: Projectbillingelemententrflw
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
  - billing
  - project
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGELEMENTENTRFLW

**Projectbillingelemententrflw**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgElmntEntrItmFlowUUID` | ✓ | |  | `projbillgelmntentritmflowuuid` |  |  |
| `ProjBillgElmntEntrItmUUID` |  | |  | `projbillgelmntentritmuuid` |  |  |
| `BillingDocument` |  | |  | `billingdocument` |  |  |
| `BillingDocumentItem` |  | |  | `billingdocumentitem` |  |  |
| `BillingDocumentType` |  | |  | `billingdocumenttype` |  |  |
| `SDDocumentCategory` |  | |  | `sddocumentcategory` |  |  |
| `ProjectBillingRequest` |  | |  | `precedingdocument` |  |  |
| `BillingDocRequestItemReference` |  | |  | `precedingdocumentitem` |  |  |
| `BillingDate` |  | |  | `billingdate` |  |  |
| `DocumentBillingStatus` |  | |  | `documentbillingstatus` |  |  |
| `EnterpriseProjectServiceOrg` |  | |  | `enterpriseprojectserviceorg` |  |  |
| `ProjBillgElmntEntrSrvcExpnCode` |  | |  | `serviceexpensecode` |  |  |
| `TransactionCurrency` |  | |  | `transactioncurrency` |  |  |
| `ProjectCurrency` |  | |  | `projectcurrency` |  |  |
| `GlobalCurrency` |  | |  | `globalcurrency` |  |  |
| `DocumentCurrency` |  | |  | `documentcurrency` |  |  |
| `NetPriceAmountInDocCrcy` |  | |  | `netpriceamountindoccrcy` |  |  |
| `NetPriceQuantity` |  | |  | `netpricequantity` |  |  |
| `NetPriceQuantityUnit` |  | |  | `netpricequantityunit` |  |  |
| `QuantityUnit` |  | |  | `quantityunit` |  |  |
| `BillingRequestedQuantity` |  | |  | `billingrequestedquantity` |  |  |
| `BillgReqdAmtInTransacCrcy` |  | |  | `billgreqdamtintransaccrcy` |  |  |
| `BillgReqdAmtInProjectCrcy` |  | |  | `billgreqdamtinprojectcrcy` |  |  |
| `BillgReqdAmtInGlobalCrcy` |  | |  | `billgreqdamtinglobalcrcy` |  |  |
| `WrittenOffQuantity` |  | |  | `writtenoffquantity` |  |  |
| `WrittenOffAmtInTransacCrcy` |  | |  | `writtenoffamtintransaccrcy` |  |  |
| `WrittenOffAmtInProjectCrcy` |  | |  | `writtenoffamtinprojectcrcy` |  |  |
| `WrittenOffAmtInGlobalCrcy` |  | |  | `writtenoffamtinglobalcrcy` |  |  |
| `PostponedQuantity` |  | |  | `postponedquantity` |  |  |
| `PostponedAmountInTransacCrcy` |  | |  | `postponedamountintransaccrcy` |  |  |
| `PostponedAmountInProjectCrcy` |  | |  | `postponedamountinprojectcrcy` |  |  |
| `PostponedAmountInGlobalCrcy` |  | |  | `postponedamountinglobalcrcy` |  |  |
| `BillgReqdRevenueAmtInDocCrcy` |  | |  | `billgreqdrevenueamtindoccrcy` |  |  |
| `WrittenOffRevenueAmtInDocCrcy` |  | |  | `writtenoffrevenueamtindoccrcy` |  |  |
| `PrjBlgElmEntrFlwCreatedByUser` |  | |  | `prjblgelmentrflwcreatedbyuser` |  |  |
| `PrjBlgElmEntrFlwCrtedAtDteTme` |  | |  | `prjblgelmentrflwcrtedatdtetme` |  |  |
| `PrjBlgElmEntrFlwChangedByUser` |  | |  | `prjblgelmentrflwchangedbyuser` |  |  |
| `PrjBlgElmEntrFlwChgdAtDteTme` |  | |  | `prjblgelmentrflwchgdatdtetme` |  |  |
| `ProjBillingRequestItemLongText` |  | |  | `projbillingrequestitemlongtext` |  |  |
| `WrittenOffReversalDate` |  | |  | `writtenoffreversaldate` |  |  |
| `_ProjectBillingElementEntry` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_TransactionCurrencyText` | | ✓ | | | | |
| `_ProjectCurrency` | | ✓ | | | | |
| `_ProjectCurrencyText` | | ✓ | | | | |
| `_GlobalCurrency` | | ✓ | | | | |
| `_GlobalCurrencyText` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_DocumentCurrencyText` | | ✓ | | | | |
| `_QuantityUnit` | | ✓ | | | | |
| `_SDDocumentCategory` | | ✓ | | | | |
| `_SDDocumentCategoryText` | | ✓ | | | | |
| `_BillingDocumentType` | | ✓ | | | | |
| `_BillingDocumentTypeText` | | ✓ | | | | |
| `_PrjBlgElmEntrDocBillgStatus` | | ✓ | | | | |
| `_PrjBlgElmEntrDocBillgStsTxt` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingElementEntry` | `I_ProjectBillingElementEntry` | [1..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_TransactionCurrencyText` | `I_CurrencyText` | [1..*] |
| `_ProjectCurrency` | `I_Currency` | [1..1] |
| `_ProjectCurrencyText` | `I_CurrencyText` | [1..*] |
| `_GlobalCurrency` | `I_Currency` | [1..1] |
| `_GlobalCurrencyText` | `I_CurrencyText` | [1..*] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_DocumentCurrencyText` | `I_CurrencyText` | [1..*] |
| `_QuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_SDDocumentCategory` | `I_SDDocumentCategory` | [1..1] |
| `_SDDocumentCategoryText` | `I_SDDocumentCategoryText` | [1..*] |
| `_BillingDocumentType` | `I_BillingDocumentType` | [1..1] |
| `_BillingDocumentTypeText` | `I_BillingDocumentTypeText` | [1..*] |
| `_PrjBlgElmEntrDocBillgStatus` | `I_PrjBlgElmEntrDocBillgStatus` | [1..1] |
| `_PrjBlgElmEntrDocBillgStsTxt` | `I_PrjBlgElmEntrDocBillgStsTxt` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Entry Flow for Project Billing Element'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.mapping: [{
                                                        table: 'PRJBLGEMTENTRFLW',
                                                        role: #MAIN,
                                                        viewElement: ['ProjBillgElmntEntrItmFlowUUID'],
                                                        tableElement: ['projbillgelmntentritmflowuuid']
}]
@Analytics.technicalName: 'IPRJBLGELMETRFLW'
@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ],
    usageType:{
       sizeCategory: #L,
       dataClass:  #TRANSACTIONAL,
       serviceQuality: #B
    },
    representativeKey: 'ProjBillgElmntEntrItmFlowUUID'
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingElementEntryFlow'

define view entity I_ProjectBillingElementEntrFlw
  as select from           prjblgemtentrflw as ProjectBillingElementEntryFlow
    left outer to one join projbillgreq     as _ProjectBillingRequest on  ProjectBillingElementEntryFlow.precedingdocument = _ProjectBillingRequest.projectbillingrequest
                                                                      and ProjectBillingElementEntryFlow.precedingdocument is not initial
  //left outer to one join projbillgreqitem as _ProjectBillingRequestItem on  _ProjectBillingRequest.projectbillingrequestuuid         = _ProjectBillingRequestItem.projectbillingrequestuuid
  //                                                                      and ProjectBillingElementEntryFlow.projbillgelmntentritmuuid = _ProjectBillingRequestItem.projbillgelmntentritmuuid

  association [1..1] to I_ProjectBillingElementEntry  as _ProjectBillingElementEntry  on $projection.ProjBillgElmntEntrItmUUID = _ProjectBillingElementEntry.ProjBillgElmntEntrItmUUID

  association [1..1] to I_Currency                    as _TransactionCurrency         on $projection.TransactionCurrency = _TransactionCurrency.Currency

  association [1..*] to I_CurrencyText                as _TransactionCurrencyText     on $projection.TransactionCurrency = _TransactionCurrencyText.Currency

  association [1..1] to I_Currency                    as _ProjectCurrency             on $projection.ProjectCurrency = _ProjectCurrency.Currency

  association [1..*] to I_CurrencyText                as _ProjectCurrencyText         on $projection.ProjectCurrency = _ProjectCurrencyText.Currency

  association [1..1] to I_Currency                    as _GlobalCurrency              on $projection.GlobalCurrency = _GlobalCurrency.Currency

  association [1..*] to I_CurrencyText                as _GlobalCurrencyText          on $projection.GlobalCurrency = _GlobalCurrencyText.Currency

  association [1..1] to I_Currency                    as _DocumentCurrency            on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..*] to I_CurrencyText                as _DocumentCurrencyText        on $projection.DocumentCurrency = _DocumentCurrencyText.Currency

  association [0..1] to I_UnitOfMeasure               as _QuantityUnit                on $projection.QuantityUnit = _QuantityUnit.UnitOfMeasure

  association [1..1] to I_SDDocumentCategory          as _SDDocumentCategory          on $projection.SDDocumentCategory = _SDDocumentCategory.SDDocumentCategory

  association [1..*] to I_SDDocumentCategoryText      as _SDDocumentCategoryText      on $projection.SDDocumentCategory = _SDDocumentCategoryText.SDDocumentCategory

  association [1..1] to I_BillingDocumentType         as _BillingDocumentType         on $projection.BillingDocumentType = _BillingDocumentType.BillingDocumentType

  association [1..*] to I_BillingDocumentTypeText     as _BillingDocumentTypeText     on $projection.BillingDocumentType = _BillingDocumentTypeText.BillingDocumentType

  association [1..1] to I_PrjBlgElmEntrDocBillgStatus as _PrjBlgElmEntrDocBillgStatus on $projection.DocumentBillingStatus = _PrjBlgElmEntrDocBillgStatus.DocumentBillingStatus

  association [1..*] to I_PrjBlgElmEntrDocBillgStsTxt as _PrjBlgElmEntrDocBillgStsTxt on $projection.DocumentBillingStatus = _PrjBlgElmEntrDocBillgStsTxt.DocumentBillingStatus

{
  key ProjectBillingElementEntryFlow.projbillgelmntentritmflowuuid  as ProjBillgElmntEntrItmFlowUUID,
      ProjectBillingElementEntryFlow.projbillgelmntentritmuuid      as ProjBillgElmntEntrItmUUID,
      ProjectBillingElementEntryFlow.billingdocument                as BillingDocument,
      ProjectBillingElementEntryFlow.billingdocumentitem            as BillingDocumentItem,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_BillingDocumentTypeStdVH',
                     element: 'BillingDocumentType' }
        }]
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      ProjectBillingElementEntryFlow.billingdocumenttype            as BillingDocumentType,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_SDDocumentCategory',
                     element: 'SDDocumentCategory' }
        }]
      @ObjectModel.foreignKey.association: '_SDDocumentCategory'
      ProjectBillingElementEntryFlow.sddocumentcategory             as SDDocumentCategory,
      ProjectBillingElementEntryFlow.precedingdocument              as ProjectBillingRequest,
      ProjectBillingElementEntryFlow.precedingdocumentitem          as BillingDocRequestItemReference,
      ProjectBillingElementEntryFlow.billingdate                    as BillingDate,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_PrjBlgElmEntrDocBillgStatus',
                     element: 'DocumentBillingStatus' }
        }]
      @ObjectModel.foreignKey.association: '_PrjBlgElmEntrDocBillgStatus'
      ProjectBillingElementEntryFlow.documentbillingstatus          as DocumentBillingStatus,
      ProjectBillingElementEntryFlow.enterpriseprojectserviceorg    as EnterpriseProjectServiceOrg,
      ProjectBillingElementEntryFlow.serviceexpensecode             as ProjBillgElmntEntrSrvcExpnCode,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      //_ProjectBillingElementEntry.TransactionCurrency              as TransactionCurrency,
      ProjectBillingElementEntryFlow.transactioncurrency            as TransactionCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_ProjectCurrency'
      //_ProjectBillingElementEntry.ProjectCurrency                  as ProjectCurrency,
      ProjectBillingElementEntryFlow.projectcurrency                as ProjectCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_GlobalCurrency'
      //_ProjectBillingElementEntry.GlobalCurrency                   as GlobalCurrency,
      ProjectBillingElementEntryFlow.globalcurrency                 as GlobalCurrency,
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_CurrencyStdVH',
                     element: 'Currency' }
        }]
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      //_ProjectBillingElementEntry.DocumentCurrency                 as DocumentCurrency,
      ProjectBillingElementEntryFlow.documentcurrency               as DocumentCurrency,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntryFlow.netpriceamountindoccrcy        as NetPriceAmountInDocCrcy,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      ProjectBillingElementEntryFlow.netpricequantity               as NetPriceQuantity,
      ProjectBillingElementEntryFlow.netpricequantityunit           as NetPriceQuantityUnit,
      @Consumption.valueHelpDefinition: [
         { entity:  { name:    'I_UnitOfMeasureStdVH',
                      element: 'UnitOfMeasure' }
         }]
      @ObjectModel.foreignKey.association: '_QuantityUnit'
      //_ProjectBillingElementEntry.QuantityUnit                     as QuantityUnit,
      ProjectBillingElementEntryFlow.quantityunit                   as QuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntryFlow.billingrequestedquantity       as BillingRequestedQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntryFlow.billgreqdamtintransaccrcy      as BillgReqdAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntryFlow.billgreqdamtinprojectcrcy      as BillgReqdAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntryFlow.billgreqdamtinglobalcrcy       as BillgReqdAmtInGlobalCrcy,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntryFlow.writtenoffquantity             as WrittenOffQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntryFlow.writtenoffamtintransaccrcy     as WrittenOffAmtInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntryFlow.writtenoffamtinprojectcrcy     as WrittenOffAmtInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntryFlow.writtenoffamtinglobalcrcy      as WrittenOffAmtInGlobalCrcy,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      ProjectBillingElementEntryFlow.postponedquantity              as PostponedQuantity,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      ProjectBillingElementEntryFlow.postponedamountintransaccrcy   as PostponedAmountInTransacCrcy,
      @Semantics.amount.currencyCode: 'ProjectCurrency'
      ProjectBillingElementEntryFlow.postponedamountinprojectcrcy   as PostponedAmountInProjectCrcy,
      @Semantics.amount.currencyCode: 'GlobalCurrency'
      ProjectBillingElementEntryFlow.postponedamountinglobalcrcy    as PostponedAmountInGlobalCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntryFlow.billgreqdrevenueamtindoccrcy   as BillgReqdRevenueAmtInDocCrcy,
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      ProjectBillingElementEntryFlow.writtenoffrevenueamtindoccrcy  as WrittenOffRevenueAmtInDocCrcy,

      @Semantics.user.createdBy: true
      ProjectBillingElementEntryFlow.prjblgelmentrflwcreatedbyuser  as PrjBlgElmEntrFlwCreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      ProjectBillingElementEntryFlow.prjblgelmentrflwcrtedatdtetme  as PrjBlgElmEntrFlwCrtedAtDteTme,
      @Semantics.user.lastChangedBy: true
      ProjectBillingElementEntryFlow.prjblgelmentrflwchangedbyuser  as PrjBlgElmEntrFlwChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      ProjectBillingElementEntryFlow.prjblgelmentrflwchgdatdtetme   as PrjBlgElmEntrFlwChgdAtDteTme,
      //_ProjectBillingRequestItem.projbillingrequestitemlongtext    as ProjBillingRequestItemLongText,
      ProjectBillingElementEntryFlow.projbillingrequestitemlongtext as ProjBillingRequestItemLongText,
      ProjectBillingElementEntryFlow.writtenoffreversaldate         as WrittenOffReversalDate,

      //Associations
      _ProjectBillingElementEntry,
      _TransactionCurrency,
      _ProjectCurrency,
      _GlobalCurrency,
      _DocumentCurrency,
      _QuantityUnit,
      _SDDocumentCategory,
      _PrjBlgElmEntrDocBillgStatus,
      _BillingDocumentType,
      @Consumption.hidden: true
      _TransactionCurrencyText,
      @Consumption.hidden: true
      _ProjectCurrencyText,
      @Consumption.hidden: true
      _GlobalCurrencyText,
      @Consumption.hidden: true
      _DocumentCurrencyText,
      @Consumption.hidden: true
      _SDDocumentCategoryText,
      @Consumption.hidden: true
      _BillingDocumentTypeText,
      @Consumption.hidden: true
      _PrjBlgElmEntrDocBillgStsTxt

}
```
