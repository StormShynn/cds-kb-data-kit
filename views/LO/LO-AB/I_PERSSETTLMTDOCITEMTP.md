---
name: I_PERSSETTLMTDOCITEMTP
description: Perssettlmtdocitemtp
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
  - transactional-processing
  - item-level
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTDOCITEMTP

**Perssettlmtdocitemtp**

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
| `PersSettlmtDocItem` | `, useAsTemplate: true }] } key PersSettlmtDocItem` |
| `PersSettlmtDocCurrency` | `, useAsTemplate: true }] } PersSettlmtDocCurrency` |
| `PricingDocument` | `PricingDocument` |
| `Product` | `Product` |
| `ProductGroup` | `ProductGroup` |
| `Plant` | `Plant` |
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
| `ItemNetAmount` | `ItemNetAmount` |
| `Subtotal1Amount` | `Subtotal1Amount` |
| `Subtotal2Amount` | `Subtotal2Amount` |
| `Subtotal3Amount` | `Subtotal3Amount` |
| `Subtotal4Amount` | `Subtotal4Amount` |
| `Subtotal5Amount` | `Subtotal5Amount` |
| `Subtotal6Amount` | `Subtotal6Amount` |
| `RebateBasisAmount` | `RebateBasisAmount` |
| `PersSettlmtDocItmStstclPrpty` | `PersSettlmtDocItmStstclPrpty` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `PersSettlmtDocItmActyReason` | `PersSettlmtDocItmActyReason` |
| `PersSettlmtDocItemText` | `PersSettlmtDocItemText` |
| `BusinessArea` | `, useAsTemplate: true }] } BusinessArea` |
| `ControllingArea` | `, useAsTemplate: true }] } ControllingArea` |
| `CostCenter` | `CostCenter` |
| `ProfitCenter` | `ProfitCenter` |
| `WBSElementInternalID` | `WBSElementInternalID` |
| `PersSettlmtDocOrder` | `PersSettlmtDocOrder` |
| `PrcDetnIsIncmplt` | `PrcDetnIsIncmplt` |
| `PersSettlmtDocItemCat` | `PersSettlmtDocItemCat` |
| `PersSettlmtDocItemStatus` | `PersSettlmtDocItemStatus` |
| `PersSettlmtDocItemRvsd` | `PersSettlmtDocItemRvsd` |
| `ServicesRenderedDate` | `ServicesRenderedDate` |
| `SettlementFiscalYear` | `SettlementFiscalYear` |
| `CompanyCode` | `, useAsTemplate: true }] } CompanyCode` |
| `GLAccount` | `GLAccount` |
| `SalesSpcfcProductGroup1` | `, useAsTemplate: true }] } SalesSpcfcProductGroup1` |
| `SalesSpcfcProductGroup2` | `, useAsTemplate: true }] } SalesSpcfcProductGroup2` |
| `SalesSpcfcProductGroup3` | `, useAsTemplate: true }] } SalesSpcfcProductGroup3` |
| `SalesSpcfcProductGroup4` | `, useAsTemplate: true }] } SalesSpcfcProductGroup4` |
| `SalesSpcfcProductGroup5` | `, useAsTemplate: true }] } SalesSpcfcProductGroup5` |
| `BusTransDocReferenceID` | `BusTransDocReferenceID` |
| `BusTransDocReferenceItemID` | `BusTransDocReferenceItemID` |
| `_PersSettlmtDoc` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document Item - TP'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #BLOCKED_DATA_EXCLUDED
    }
@ObjectModel: {
    sapObjectNodeType.name: 'PersSettlementDocumentItem',
    semanticKey: [ 'PersonnelSettlementDocument', 'PersSettlmtDocItem' ],
    usageType: { 
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #B,
      sizeCategory:   #XXL
      },
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [ #TRANSACTIONAL_PROVIDER ]
    }
@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'PersSettlementDocumentItem' ],
  elementSuffix: 'SMI',
  quota: {
    maximumFields: 170, //This is calculated with report CFD_CALCULATE_DEV_EXT_QUOTA
    maximumBytes: 3400 //This is calculated with report CFD_CALCULATE_DEV_EXT_QUOTA
  }
}
define view entity I_PersSettlmtDocItemTP
  as projection on R_PersSettlmtDocItemTP as PersSettlementDocumentItem
{
  key PersonnelSettlementDocument,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PersSettlmtDocItemStdVH', element: 'PersSettlmtDocItem' }, useAsTemplate: true }]
      }
  key PersSettlmtDocItem,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]
      }
      PersSettlmtDocCurrency,
      PricingDocument,
      Product,
      ProductGroup,

      Plant,
      PricingDate,

      /* Units and Amounts */
      @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
      SettlmtQuantity,
      SettlmtQuantityUnit,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      NetPriceAmount,
      @Semantics.quantity.unitOfMeasure: 'NetPriceQuantityUnit'
      NetPriceQuantity,
      NetPriceQuantityUnit,
      SettlmtToBaseQuantityNmrtr,
      SettlmtToBaseQuantityDnmntr,
      SettlmtToNetPriceQtyNmrtr,
      SettlmtToNetPriceQtyDnmntr,
      BaseUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemNetWeight,
      @Semantics.quantity.unitOfMeasure: 'ItemWeightUnit'
      ItemGrossWeight,
      ItemWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'ItemVolumeUnit'
      ItemVolume,
      ItemVolumeUnit,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      ItemNetAmount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      Subtotal1Amount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      Subtotal2Amount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      Subtotal3Amount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      Subtotal4Amount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      Subtotal5Amount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      Subtotal6Amount,
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      RebateBasisAmount,
      PersSettlmtDocItmStstclPrpty,

      /* Administrative Data */
      CreatedByUser,
      CreationDate,
      CreationTime,

      PersSettlmtDocItmActyReason,
      PersSettlmtDocItemText,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_BusinessAreaStdVH', element: 'BusinessArea' }, useAsTemplate: true }]
      }
      BusinessArea,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ControllingAreaStdVH', element: 'ControllingArea' }, useAsTemplate: true }]
      }
      ControllingArea,
      CostCenter,
      ProfitCenter,
      WBSElementInternalID,
      PersSettlmtDocOrder,

      PrcDetnIsIncmplt,

      PersSettlmtDocItemCat,

      PersSettlmtDocItemStatus,
      PersSettlmtDocItemRvsd,
      ServicesRenderedDate,

      SettlementFiscalYear,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }]
      }
      CompanyCode,
      GLAccount,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SalesSpcfcProductGroup1', element: 'SalesSpcfcProductGroup1' }, useAsTemplate: true }]
      }
      SalesSpcfcProductGroup1,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SalesSpcfcProductGroup2', element: 'SalesSpcfcProductGroup2' }, useAsTemplate: true }]
      }
      SalesSpcfcProductGroup2,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SalesSpcfcProductGroup3', element: 'SalesSpcfcProductGroup3' }, useAsTemplate: true }]
      }
      SalesSpcfcProductGroup3,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SalesSpcfcProductGroup4', element: 'SalesSpcfcProductGroup4' }, useAsTemplate: true }]
      }
      SalesSpcfcProductGroup4,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SalesSpcfcProductGroup5', element: 'SalesSpcfcProductGroup5' }, useAsTemplate: true }]
      }
      SalesSpcfcProductGroup5,

      BusTransDocReferenceID,
      BusTransDocReferenceItemID,

      /* Compositions */
      _PersSettlmtDoc : redirected to parent I_PersSettlmtDocTP

}
```
