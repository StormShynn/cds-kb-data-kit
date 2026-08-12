---
name: I_CNCONSETLDETLDSTMNTMATLDOC
description: "This CDS view is used to see which goods receipt documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which goods receipt documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTMATLDOC')/$value
semantic_en: "This CDS view is used to see which goods receipt documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which goods receipt documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Detailed Statement for Goods Receipt — CDS view tổng hợp dựa trên R_CndnContrSettlmtDetldStmnt."
keywords:
  - "detailed"
  - "statement"
  - "for"
  - "goods"
  - "receipt"
  - "condition"
  - "contract"
  - "settlmt"
  - "item"
  - "setld"
  - "category"
  - "settled"
  - "material"
  - "document"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - document
  - goods-receipt
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNCONSETLDETLDSTMNTMATLDOC

**This CDS view is used to see which goods receipt documents are part of detailed statement information for a corresponding settlement document and/or condition contract. This CDS view provides the data to answer the following business question: Which goods receipt documents are part of detailed statement information for a corresponding settlement document and/or condition contract? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTMATLDOC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionContract` | ✓ | |  |  | `CHAR(10)` | Condition Contract |
| `SettlmtDoc` | ✓ | |  |  | `CHAR(10)` | Settlement Document Number |
| `SettlmtDocItem` | ✓ | |  |  | `NUMC(6)` | Document Item |
| `SetldBusVolDocCategory` | ✓ | |  |  | `CHAR(2)` | Settled Business Volume Document Type |
| `SettledMaterialDocument` | ✓ | |  | `cast ( SetldBusVolDocKey1 as wlf_setld_mat_doc )` | `CHAR(10)` | Material Document Settled as Business Volume Document |
| `SettledMaterialDocumentYear` | ✓ | |  | `cast ( SetldBusVolDocKey2 as wlf_setld_mat_doc_year )` | `NUMC(4)` | Year of a Settled Material Document |
| `SetldBusVolDocKey3` | ✓ | |  |  | `CHAR(10)` | Settled Business Volume Document Key 3 |
| `SettledMaterialDocumentItem` | ✓ | |  | `cast ( SetldBusVolDocItem as wlf_setld_mat_doc_item )` | `NUMC(4)` | Item of a Settled Material Document |
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
| `_MaterialDocumentHeader` | | ✓ | | | | |
| `_MaterialDocumentYear` | | ✓ | | | | |
| `_MaterialDocumentItem` | | ✓ | | | | |
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
| `_MaterialDocumentHeader` | `I_MaterialDocumentHeader_2` | [0..1] |
| `_MaterialDocumentYear` | `I_MaterialDocumentYear` | [0..1] |
| `_MaterialDocumentItem` | `I_MaterialDocumentItem_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTMATLDOC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNCONSETLDETLDSTMNTMATLDOC')/$value)*

```abap
@EndUserText.label: 'Detailed Statement for Goods Receipt'
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
define view entity I_CnConSetlDetldStmntMatlDoc
  as select from R_CndnContrSettlmtDetldStmnt
  association [0..1] to I_SettlmtDoc               as _SettlmtDoc             on  $projection.SettlmtDoc = _SettlmtDoc.SettlmtDoc
  association [0..1] to I_SettlmtDocItem           as _SettlmtDocItem         on  $projection.SettlmtDoc     = _SettlmtDocItem.SettlmtDoc
                                                                              and $projection.SettlmtDocItem = _SettlmtDocItem.SettlmtDocItem
  association [0..1] to I_ConditionContract        as _ConditionContract      on  $projection.ConditionContract = _ConditionContract.ConditionContract
  association [0..1] to I_MaterialDocumentHeader_2 as _MaterialDocumentHeader on  $projection.SettledMaterialDocument     = _MaterialDocumentHeader.MaterialDocument
                                                                              and $projection.SettledMaterialDocumentYear = _MaterialDocumentHeader.MaterialDocumentYear
  association [0..1] to I_MaterialDocumentYear     as _MaterialDocumentYear   on  $projection.SettledMaterialDocumentYear = _MaterialDocumentYear.MaterialDocumentYear
  association [0..1] to I_MaterialDocumentItem_2   as _MaterialDocumentItem   on  $projection.SettledMaterialDocument     = _MaterialDocumentItem.MaterialDocument
                                                                              and $projection.SettledMaterialDocumentYear = _MaterialDocumentItem.MaterialDocumentYear
                                                                              and $projection.SettledMaterialDocumentItem = _MaterialDocumentItem.MaterialDocumentItem
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
      @ObjectModel.foreignKey.association: '_MaterialDocumentHeader'
  key cast ( SetldBusVolDocKey1    as wlf_setld_mat_doc )       as SettledMaterialDocument,
      @ObjectModel.foreignKey.association: '_MaterialDocumentYear'
  key cast ( SetldBusVolDocKey2    as wlf_setld_mat_doc_year )  as SettledMaterialDocumentYear,
  key SetldBusVolDocKey3,
      @ObjectModel.foreignKey.association: '_MaterialDocumentItem'
  key cast ( SetldBusVolDocItem    as wlf_setld_mat_doc_item  ) as SettledMaterialDocumentItem,
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
      _ConditionContract,
      _SettlmtDoc,
      _SettlmtDocItem,
      _SetldBusVolDocCategory,
      _MaterialDocumentHeader,
      _MaterialDocumentYear,
      _MaterialDocumentItem,
      _SettledBusVolQtyUnit,
      _SettledBusVolWeightUnit,
      _SettledBusVolVolumeUnit,
      _SettledBusVolPointsQtyUnit,
      _BusVolDocCurrency
}
where
      SetldBusVolDocCategory = '03'
```
