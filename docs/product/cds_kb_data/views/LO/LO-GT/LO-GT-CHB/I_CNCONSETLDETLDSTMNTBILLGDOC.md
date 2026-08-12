---
name: I_CNCONSETLDETLDSTMNTBILLGDOC
description: "This CDS view is used to see which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTBILLGDOC')/$value
semantic_en: "This CDS view is used to see which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Detailed Statement for Billing Documents — CDS view tổng hợp dựa trên R_CndnContrSettlmtDetldStmnt."
keywords:
  - "detailed"
  - "statement"
  - "for"
  - "billing"
  - "documents"
  - "condition"
  - "contract"
  - "settlmt"
  - "item"
  - "setld"
  - "category"
  - "settled"
  - "billg"
tags:
  - LO
  - billing
  - bo:billingdocument
  - component:LO-GT-CHB
  - contract
  - document
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNCONSETLDETLDSTMNTBILLGDOC

**This CDS view is used to see which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which billing documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTBILLGDOC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `SettlmtDoc` | ✓ | |  |  | `CHAR(10)` | Settlement Document Number |
| `SettlmtDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SetldBusVolDocCategory` | ✓ | |  |  | `CHAR(2)` | Settled Business Volume Document Type |
| `SettledBillgDoc` | ✓ | |  | `cast ( SetldBusVolDocKey1 as wlf_setld_billg_doc )` | `CHAR(10)` | Billing Document Settled as Business Volume Document |
| `SettledBillgDocItem` | ✓ | |  | `cast ( SetldBusVolDocItem as wlf_setld_billg_doc_itm )` | `NUMC(6)` | Item of a Settled Billing Document |
| `BusVolSelDteForSettlmt` |  | |  |  | `DATS(8)` | Date for Settlement |
| `SettledBusVolQty` |  | |  |  | `QUAN(13)` | Quantity |
| `SettledBusVolQtyUnit` |  | |  |  | `UNIT(3)` | Unit of measure |
| `SettledBusVolAmount1` |  | |  |  | `CURR(13)` | Business Volume 1 |
| `SettledBusVolAmount2` |  | |  |  | `CURR(13)` | Business Volume 2 |
| `SettledBusVolAmount3` |  | |  |  | `CURR(13)` | Business Volume 3 |
| `SettledBusVolAmount4` |  | |  |  | `CURR(13)` | Business Volume 4 |
| `SettledBusVolNetWeight` |  | |  |  | `QUAN(13)` | Net Weight |
| `SettledBusVolGrossWeight` |  | |  |  | `QUAN(13)` | Gross Weight |
| `SettledBusVolWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `SettledBusVolVolume` |  | |  |  | `QUAN(13)` | Volume |
| `SettledBusVolVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `SettledBusVolPointsQty` |  | |  |  | `QUAN(13)` | Number of Points |
| `SettledBusVolPointsQtyUnit` |  | |  |  | `UNIT(3)` | Points Unit |
| `SettlmtDocType` |  | |  |  | `CHAR(4)` | Settlement Document Type |
| `BusVolDocCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `_SettlmtDoc` | | ✓ | | | | |
| `_SettlmtDocItem` | | ✓ | | | | |
| `_ConditionContract` | | ✓ | | | | |
| `_BillingDocument` | | ✓ | | | | |
| `_BillingDocumentItem` | | ✓ | | | | |
| `_SetldBusVolDocCategory` | | ✓ | | | | |
| `_SettledBusVolQtyUnit` | | ✓ | | | | |
| `_SettledBusVolWeightUnit` | | ✓ | | | | |
| `_SettledBusVolVolumeUnit` | | ✓ | | | | |
| `_SettledBusVolPointsQtyUnit` | | ✓ | | | | |
| `_BusVolDocCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SettlmtDoc` | `I_SettlmtDoc` | [0..1] |
| `_SettlmtDocItem` | `I_SettlmtDocItem` | [0..1] |
| `_ConditionContract` | `I_ConditionContract` | [0..1] |
| `_BillingDocument` | `I_BillingDocument` | [0..1] |
| `_BillingDocumentItem` | `I_BillingDocumentItem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTBILLGDOC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTBILLGDOC')/$value)*

```abap
@EndUserText.label: 'Detailed Statement for Billing Documents'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@ObjectModel: {
   modelingPattern: #NONE,
   supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #XXL
   }
}
@VDM: {
    viewType: #COMPOSITE,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CnConSetlDetldStmntBillgDoc
  as select from R_CndnContrSettlmtDetldStmnt
  association [0..1] to I_SettlmtDoc          as _SettlmtDoc          on  $projection.SettlmtDoc = _SettlmtDoc.SettlmtDoc
  association [0..1] to I_SettlmtDocItem      as _SettlmtDocItem      on  $projection.SettlmtDoc     = _SettlmtDocItem.SettlmtDoc
                                                                      and $projection.SettlmtDocItem = _SettlmtDocItem.SettlmtDocItem
  association [0..1] to I_ConditionContract   as _ConditionContract   on  $projection.ConditionContract = _ConditionContract.ConditionContract
  association [0..1] to I_BillingDocument     as _BillingDocument     on  $projection.SettledBillgDoc = _BillingDocument.BillingDocument
  association [0..1] to I_BillingDocumentItem as _BillingDocumentItem on  $projection.SettledBillgDoc     = _BillingDocumentItem.BillingDocument
                                                                      and $projection.SettledBillgDocItem = _BillingDocumentItem.BillingDocumentItem
{
      @ObjectModel.foreignKey.association: '_ConditionContract'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
  key ConditionContract,
      @ObjectModel.foreignKey.association: '_SettlmtDoc'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocStdVH', element: 'SettlmtDoc' } }]
      }
  key SettlmtDoc,
      @ObjectModel.foreignKey.association: '_SettlmtDocItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocItemStdVH', element: 'SettlmtDocItem' } }]
      }
  key SettlmtDocItem,
      @ObjectModel.foreignKey.association: '_SetldBusVolDocCategory'
  key SetldBusVolDocCategory,
      @ObjectModel.foreignKey.association: '_BillingDocument'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } }]
      }
  key cast ( SetldBusVolDocKey1 as wlf_setld_billg_doc  )    as SettledBillgDoc,
      @ObjectModel.foreignKey.association: '_BillingDocumentItem'
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BillingDocumentItemStdVH', element: 'BillingDocumentItem' } }]
      }
  key cast ( SetldBusVolDocItem as wlf_setld_billg_doc_itm ) as SettledBillgDocItem,
      BusVolSelDteForSettlmt,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolQtyUnit'
      SettledBusVolQty,
      @ObjectModel.foreignKey.association: '_SettledBusVolQtyUnit'
      SettledBusVolQtyUnit,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount1,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount2,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount3,
      @Semantics.amount.currencyCode: 'BusVolDocCurrency'
      SettledBusVolAmount4,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolWeightUnit'
      SettledBusVolNetWeight,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolWeightUnit'
      SettledBusVolGrossWeight,
      @ObjectModel.foreignKey.association: '_SettledBusVolWeightUnit'
      SettledBusVolWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolVolumeUnit'
      SettledBusVolVolume,
      @ObjectModel.foreignKey.association: '_SettledBusVolVolumeUnit'
      SettledBusVolVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'SettledBusVolPointsQtyUnit'
      SettledBusVolPointsQty,
      @ObjectModel.foreignKey.association: '_SettledBusVolPointsQtyUnit'
      SettledBusVolPointsQtyUnit,
      SettlmtDocType,
      @ObjectModel.foreignKey.association: '_BusVolDocCurrency'
      BusVolDocCurrency,

      /* Associations */
      _SettlmtDoc,
      _SettlmtDocItem,
      _ConditionContract,
      _SetldBusVolDocCategory,
      _BillingDocument,
      _BillingDocumentItem,
      _SettledBusVolQtyUnit,
      _SettledBusVolWeightUnit,
      _SettledBusVolVolumeUnit,
      _SettledBusVolPointsQtyUnit,
      _BusVolDocCurrency

}
where
      SetldBusVolDocCategory = '02'
```
