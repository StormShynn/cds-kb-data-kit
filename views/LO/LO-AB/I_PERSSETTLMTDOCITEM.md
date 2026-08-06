---
name: I_PERSSETTLMTDOCITEM
description: Perssettlmtdocitem
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - item-level
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTDOCITEM

**Perssettlmtdocitem**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PersonnelSettlementDocument` | `PersonnelSettlementDocument` |
| key `PersSettlmtDocItem` | `PersSettlmtDocItem` |
| `PersSettlmtDocCurrency` | `PersSettlmtDocCurrency` |
| `PricingDocument` | `PricingDocument` |
| `Product` | `}] } Product` |
| `ProductGroup` | `}] } ProductGroup` |
| `Plant` | `}] } Plant` |
| `PricingDate` | `PricingDate` |
| `SettlmtQuantity` | `SettlmtQuantity` |
| `SettlmtQuantityUnit` | `SettlmtQuantityUnit` |
| `NetPriceAmount` | `NetPriceAmount` |
| `NetPriceQuantity` | `NetPriceQuantity` |
| `NetPriceQuantityUnit` | `NetPriceQuantityUnit` |
| `SettlmtToBaseQuantityNmrtr` | `SettlmtToBaseQuantityNmrtr` |
| `SettlmtToBaseQuantityDnmntr` | `SettlmtToBaseQuantityDnmntr` |
| `SettlmtToNetPriceQtyNmrtr` | `SettlmtToNetPriceQtyNmrtr` |
| `SettlmtToNetPriceQtyDnmntr` | `SettlmtToNetPriceQtyDnmntr` |
| `BaseUnit` | `BaseUnit` |
| `ItemNetWeight` | `ItemNetWeight` |
| `ItemGrossWeight` | `ItemGrossWeight` |
| `ItemWeightUnit` | `ItemWeightUnit` |
| `ItemVolume` | `ItemVolume` |
| `ItemVolumeUnit` | `ItemVolumeUnit` |
| `ItemNetAmount` | `PersSettlmtDocItemNetAmount` |
| `Subtotal1Amount` | `PersSettlmtDocSubtotal1Amount` |
| `Subtotal2Amount` | `PersSettlmtDocSubtotal2Amount` |
| `Subtotal3Amount` | `PersSettlmtDocSubtotal3Amount` |
| `Subtotal4Amount` | `PersSettlmtDocSubtotal4Amount` |
| `Subtotal5Amount` | `PersSettlmtDocSubtotal5Amount` |
| `Subtotal6Amount` | `PersSettlmtDocSubtotal6Amount` |
| `RebateBasisAmount` | `PersSettlmtDocRbteBasisAmount` |
| `SettlmtItmStatisticalPrpty` | `PersSettlmtDocItmStstclPrpty` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `SettlmtItemActivityReason` | `PersSettlmtDocItmActyReason` |
| `PersSettlmtDocItemText` | `PersSettlmtDocItemText` |
| `BusinessArea` | `}] } BusinessArea` |
| `ControllingArea` | `ControllingArea` |
| `CostCenter` | `CostCenter` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `}] } WBSElementInternalID` |
| `SettlementOrder` | `PersSettlmtDocOrder` |
| `PrcDetnIsIncmplt` | `PrcDetnIsIncmplt` |
| `PersSettlmtDocItemCat` | `PersSettlmtDocItemCat` |
| `SettlmtItemReltdCndnContr` | `}] } SettlmtItemReltdCndnContr` |
| `PersSettlmtDocItemStatus` | `PersSettlmtDocItemStatus` |
| `PersSettlmtDocItemRvsd` | `PersSettlmtDocItemRvsd` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `SettlementFiscalYear` | `SettlementFiscalYear` |
| `CompanyCode` | `}] } CompanyCode` |
| `GLAccount` | `}] } GLAccount` |
| `ProductHierarchy` | `ProductHierarchy` |
| `SalesSpcfcProductGroup1` | `SalesSpcfcProductGroup1` |
| `SalesSpcfcProductGroup2` | `SalesSpcfcProductGroup2` |
| `SalesSpcfcProductGroup3` | `SalesSpcfcProductGroup3` |
| `SalesSpcfcProductGroup4` | `SalesSpcfcProductGroup4` |
| `SalesSpcfcProductGroup5` | `SalesSpcfcProductGroup5` |
| `BusTransDocReferenceID` | `BusTransDocReferenceID` |
| `BusTransDocReferenceItemID` | `BusTransDocReferenceItemID` |
| `PersSettlmtDocItemChangeState` | `cast( ' ' as wlf_change_state_item preserving type )` |
| `_PersSettlmtDoc` | *Association* |
| `_PersSettlmtDocItmPrcgElmnt` | *Association* |
| `_ProductText` | *Association* |
| `_SettlmtItmStatisticalPrpty` | *Association* |
| `_SettlmtItemActivityReason` | *Association* |
| `_BusinessAreaText` | *Association* |
| `_SettlmtItemReltdCndnContr` | *Association* |
| `_PersSettlmtDocCurrency` | *Association* |
| `_Product` | *Association* |
| `_Plant` | *Association* |
| `_SettlmtQuantityUnit` | *Association* |
| `_NetPriceQuantityUnit` | *Association* |
| `_BaseUnit` | *Association* |
| `_ItemWeightUnit` | *Association* |
| `_ItemVolumeUnit` | *Association* |
| `_BusinessArea` | *Association* |
| `_ControllingArea` | *Association* |
| `_WBSElementBasicData` | *Association* |
| `_PersSettlmtDocItemCat` | *Association* |
| `_PersSettlmtDocItemStatus` | *Association* |
| `_PersSettlmtDocItemRvsd` | *Association* |
| `_CompanyCode` | *Association* |
| `_GLAccountInCompanyCode` | *Association* |
| `_SalesSpcfcProductGroup1` | *Association* |
| `_SalesSpcfcProductGroup2` | *Association* |
| `_SalesSpcfcProductGroup3` | *Association* |
| `_SalesSpcfcProductGroup4` | *Association* |
| `_SalesSpcfcProductGroup5` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PersSettlmtDoc` | `I_PersSettlmtDoc` | [1..1] |
| `_PersSettlmtDocItmPrcgElmnt` | `I_PersSettlmtDocItmPrcgElmnt` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_SettlmtItmStatisticalPrpty` | `I_SettlmtItmStatisticalPrpty` | [0..1] |
| `_SettlmtItemActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_BusinessAreaText` | `I_BusinessAreaText` | [0..*] |
| `_SettlmtItemReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDocItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document Item'
@AccessControl: { 
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations: [ '_ProductText', '_BusinessAreaText' ]
    }
@ObjectModel: {
    representativeKey: 'PersSettlmtDocItem',
    modelingPattern: #NONE,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #A,
      sizeCategory:   #XXL
      }
    }
@Analytics.technicalName: 'IWLFPERSMTDOCITM'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    allowExtensions: false,
    ignorePropagatedAnnotations: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PersSettlmtDocItem
  as select from R_PersSettlmtDocItem

  association [1..1] to I_PersSettlmtDoc             as _PersSettlmtDoc             on  $projection.PersonnelSettlementDocument = _PersSettlmtDoc.PersonnelSettlementDocument
  association [0..*] to I_PersSettlmtDocItmPrcgElmnt as _PersSettlmtDocItmPrcgElmnt on  $projection.PersonnelSettlementDocument = _PersSettlmtDocItmPrcgElmnt.PersonnelSettlementDocument
                                                                                    and $projection.PersSettlmtDocItem          = _PersSettlmtDocItmPrcgElmnt.PersSettlmtDocItem

  association [0..*] to I_ProductText                as _ProductText                on  $projection.Product = _ProductText.Product

  association [0..1] to I_SettlmtItmStatisticalPrpty as _SettlmtItmStatisticalPrpty on  $projection.SettlmtItmStatisticalPrpty = _SettlmtItmStatisticalPrpty.SettlmtItmStatisticalPrpty
  association [0..1] to I_SettlmtActivityReasonCode  as _SettlmtItemActivityReason  on  $projection.SettlmtItemActivityReason = _SettlmtItemActivityReason.SettlmtActivityReason

  association [0..*] to I_BusinessAreaText           as _BusinessAreaText           on  $projection.BusinessArea = _BusinessAreaText.BusinessArea

  association [0..1] to I_ConditionContract          as _SettlmtItemReltdCndnContr  on  $projection.SettlmtItemReltdCndnContr = _SettlmtItemReltdCndnContr.ConditionContract

  //Extension Association
  association [1..1] to E_SettlmtMgmtDocItem         as _Extension                  on  $projection.PersonnelSettlementDocument = _Extension.SettlmtMgmtDoc
                                                                                    and $projection.PersSettlmtDocItem          = _Extension.SettlmtMgmtDocItem
{
      @ObjectModel.foreignKey.association: '_PersSettlmtDoc'
  key PersonnelSettlementDocument,
  key PersSettlmtDocItem,
      @ObjectModel.foreignKey.association: '_PersSettlmtDocCurrency'
      PersSettlmtDocCurrency,
      PricingDocument,

      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' } }]
      }
      Product,
      @Consumption: {
       valueHelpDefinition: [{ entity: { name: 'I_ProductGroup_2', element: 'ProductGroup' } }]
      }
      ProductGroup,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' } }]
      }
      Plant,
      PricingDate,

      /* Units and Amounts */
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SettlmtQuantity,
      @ObjectModel.foreignKey.association: '_SettlmtQuantityUnit'
      SettlmtQuantityUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      NetPriceAmount,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      @ObjectModel.foreignKey.association: '_NetPriceQuantityUnit'
      NetPriceQuantityUnit,
      SettlmtToBaseQuantityNmrtr,
      SettlmtToBaseQuantityDnmntr,
      SettlmtToNetPriceQtyNmrtr,
      SettlmtToNetPriceQtyDnmntr,
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      @ObjectModel.foreignKey.association: '_ItemWeightUnit'
      ItemWeightUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      @ObjectModel.foreignKey.association: '_ItemVolumeUnit'
      ItemVolumeUnit,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocItemNetAmount                             as ItemNetAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocSubtotal1Amount                           as Subtotal1Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocSubtotal2Amount                           as Subtotal2Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocSubtotal3Amount                           as Subtotal3Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocSubtotal4Amount                           as Subtotal4Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocSubtotal5Amount                           as Subtotal5Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocSubtotal6Amount                           as Subtotal6Amount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocRbteBasisAmount                           as RebateBasisAmount,
      PersSettlmtDocItmStstclPrpty                            as SettlmtItmStatisticalPrpty,

      /* Administrative Data */
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,

      PersSettlmtDocItmActyReason                             as SettlmtItemActivityReason,
      PersSettlmtDocItemText,

      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' } }]
      }
      BusinessArea,
      ControllingArea,
      CostCenter,
      ProfitCenter,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_WBSElementBasicDataStdVH', element: 'WBSElementInternalID' } }]
      }
      WBSElementInternalID,
      PersSettlmtDocOrder                                     as SettlementOrder,

      PrcDetnIsIncmplt,

      PersSettlmtDocItemCat,

      /* Settlement Item Related Condition Contract */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      SettlmtItemReltdCndnContr,

      PersSettlmtDocItemStatus,
      PersSettlmtDocItemRvsd,
      ServicesRenderedDate,

      SettlementFiscalYear,

      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_GLAccountInCompanyCodeStdVH', element: 'GLAccount' } }]
      }
      GLAccount,

      ProductHierarchy,
      SalesSpcfcProductGroup1,
      SalesSpcfcProductGroup2,
      SalesSpcfcProductGroup3,
      SalesSpcfcProductGroup4,
      SalesSpcfcProductGroup5,
      BusTransDocReferenceID,
      BusTransDocReferenceItemID,

      /* Entity Tag */
      @API.element.releaseState: #DEPRECATED
      cast( '    ' as wlf_change_state_item preserving type ) as PersSettlmtDocItemChangeState,

      /* Associations */
      _PersSettlmtDoc,
      _PersSettlmtDocItmPrcgElmnt,
      _PersSettlmtDocCurrency,
      _Product,
      @Consumption.hidden: true
      _ProductText,
      _Plant,
      _SettlmtQuantityUnit,
      _NetPriceQuantityUnit,
      _BaseUnit,
      _ItemWeightUnit,
      _ItemVolumeUnit,
      _SettlmtItmStatisticalPrpty,
      _SettlmtItemActivityReason,
      _BusinessArea,
      @Consumption.hidden: true
      _BusinessAreaText,
      _ControllingArea,
      _WBSElementBasicData,
      _PersSettlmtDocItemCat,
      _SettlmtItemReltdCndnContr,
      _PersSettlmtDocItemStatus,
      _PersSettlmtDocItemRvsd,
      _CompanyCode,
      _GLAccountInCompanyCode,
      _SalesSpcfcProductGroup1,
      _SalesSpcfcProductGroup2,
      _SalesSpcfcProductGroup3,
      _SalesSpcfcProductGroup4,
      _SalesSpcfcProductGroup5

}
```
