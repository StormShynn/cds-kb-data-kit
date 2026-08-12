---
name: I_FRTCOSTALLOCITM
description: "Frtcostallocitm"
app_component: LO-AB
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_FRTCOSTALLOCITM

**Frtcostallocitm**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FreightCostAllocationDocument` | ✓ | |  |  |  |  |
| `FrtCostAllocDocumentItem` | ✓ | |  |  |  |  |
| `FrtCostAllocDocCurrency` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PricingDate` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `InventoryValuationType` |  | |  |  |  |  |
| `SettlmtQuantity` |  | |  |  |  |  |
| `SettlmtQuantityUnit` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `NetPriceQuantityUnit` |  | |  |  |  |  |
| `SettlmtToBaseQuantityNmrtr` |  | |  |  |  |  |
| `SettlmtToBaseQuantityDnmntr` |  | |  |  |  |  |
| `SettlmtToNetPriceQtyNmrtr` |  | |  |  |  |  |
| `SettlmtToNetPriceQtyDnmntr` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `ItemNetWeight` |  | |  |  |  |  |
| `ItemGrossWeight` |  | |  |  |  |  |
| `ItemWeightUnit` |  | |  |  |  |  |
| `ItemVolume` |  | |  |  |  |  |
| `ItemVolumeUnit` |  | |  |  |  |  |
| `FrtCostAllocItemGrossAmount` |  | |  |  |  |  |
| `FrtCostAllocItemNetAmount` |  | |  |  |  |  |
| `FrtCostAllocSubtotal1Amount` |  | |  |  |  |  |
| `FrtCostAllocSubtotal2Amount` |  | |  |  |  |  |
| `FrtCostAllocSubtotal3Amount` |  | |  |  |  |  |
| `FrtCostAllocSubtotal4Amount` |  | |  |  |  |  |
| `FrtCostAllocSubtotal5Amount` |  | |  |  |  |  |
| `FrtCostAllocSubtotal6Amount` |  | |  |  |  |  |
| `FrtCostAllocEffctvItemAmount` |  | |  |  |  |  |
| `FrtCostAllocItmStstclPrpty` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `SettlmtSourceDoc` |  | |  |  |  |  |
| `SettlmtSourceDocItem` |  | |  |  |  |  |
| `SettlmtSourceDocCat` |  | |  |  |  |  |
| `SettlmtSourceDocFiscalYear` |  | |  |  |  |  |
| `FrtCostAllocItmActivityReason` |  | |  |  |  |  |
| `BusinessArea` |  | |  |  |  |  |
| `ControllingArea` |  | |  |  |  |  |
| `CostCenter` |  | |  |  |  |  |
| `ProfitCenter` |  | |  |  |  |  |
| `WBSElementInternalID` |  | |  |  |  |  |
| `FreightCostAllocationOrder` |  | |  |  |  |  |
| `PrcDetnIsIncmplt` |  | |  |  |  |  |
| `SettlmtPrecdgDoc` |  | |  |  |  |  |
| `SettlmtPrecdgDocItem` |  | |  |  |  |  |
| `SettlmtPrecdgDocCat` |  | |  |  |  |  |
| `SettlmtPrecdgDocFiscalYear` |  | |  |  |  |  |
| `FrtCostAllocDocItmCat` |  | |  |  |  |  |
| `SettlmtItemReltdPurgDoc` |  | |  |  |  |  |
| `SettlmtItemReltdPurgDocItem` |  | |  |  |  |  |
| `SettlmtItemReltdBillgDoc` |  | |  |  |  |  |
| `SettlmtItemReltdBillgDocItem` |  | |  |  |  |  |
| `ServicesRenderedDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `GLAccount` |  | |  |  |  |  |
| `FiscalYear` |  | |  |  |  |  |
| `FrtCostAllocRefDocType` |  | |  |  |  |  |
| `FrtCostAllocRefDoc` |  | |  |  |  |  |
| `FrtCostAllocRefDocFsclYr` |  | |  |  |  |  |
| `FrtCostAllocRefDocLgclSyst` |  | |  |  |  |  |
| `FrtCostAllocRefDocCompanyCode` |  | |  |  |  |  |
| `FrtCostAllocRefDocItem` |  | |  |  |  |  |
| `FrtCostAllocRefDocCat` |  | |  |  |  |  |
| `FrtCostAllocAddlRefDocType` |  | |  |  |  |  |
| `FrtCostAllocAddlRefDoc` |  | |  |  |  |  |
| `FrtCostAllocAddlRefDocFsclYr` |  | |  |  |  |  |
| `FrtCostAllocAddlRefLgclSyst` |  | |  |  |  |  |
| `FrtCostAllocAddlRefDocItem` |  | |  |  |  |  |
| `FrtCostAllocAddlRefDocCat` |  | |  |  |  |  |
| `ProductHierarchy` |  | |  |  |  |  |
| `SalesSpcfcProductGroup1` |  | |  |  |  |  |
| `SalesSpcfcProductGroup2` |  | |  |  |  |  |
| `SalesSpcfcProductGroup3` |  | |  |  |  |  |
| `SalesSpcfcProductGroup4` |  | |  |  |  |  |
| `SalesSpcfcProductGroup5` |  | |  |  |  |  |
| `FreightOrder` |  | | `_FrtCostAllocRefFreightOrder` | `FreightOrder` |  |  |
| `_FrtCostAllocDoc` | | ✓ | | | | |
| `_FrtCostAllocItmPrcgElmnt` | | ✓ | | | | |
| `_FrtCostAllocDocCurrency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_FrtCostAllocItmActivityReason` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_GLAccountInCompanyCode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_InventoryValuationType` | | ✓ | | | | |
| `_SettlmtQuantityUnit` | | ✓ | | | | |
| `_NetPriceQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_ItemWeightUnit` | | ✓ | | | | |
| `_ItemVolumeUnit` | | ✓ | | | | |
| `_FrtCostAllocItmStstclPrpty` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_FrtCostAllocDocItmCat` | | ✓ | | | | |
| `_SettlmtSourceDocCat` | | ✓ | | | | |
| `_SettlmtPrecdgDocCat` | | ✓ | | | | |
| `_SettlmtItemReltdPurgDoc` | | ✓ | | | | |
| `_SettlmtItemReltdBillgDoc` | | ✓ | | | | |
| `_FreightCostAllocationOrder` | | ✓ | | | | |
| `_FrtCostAllocRefDocCompanyCode` | | ✓ | | | | |
| `_FrtCostAllocRefDocCat` | | ✓ | | | | |
| `_FrtCostAllocAddlRefDocCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FrtCostAllocDoc` | `I_FrtCostAllocDoc` | [1..1] |
| `_FrtCostAllocItmPrcgElmnt` | `I_FrtCostAllocItmPrcgElmnt` | [0..*] |
| `_Extension` | `E_SettlmtMgmtDocItem` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Freight Cost Allocation Document Item' 
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations:  [ '_CreatedByUser' ]
}
@ObjectModel: { 
  representativeKey: 'FrtCostAllocDocumentItem',
  modelingPattern: #NONE,
  supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  compositionRoot: true,
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
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

define view entity I_FrtCostAllocItm
  as select from R_FrtCostAllocItm

  association [1..1] to I_FrtCostAllocDoc          as _FrtCostAllocDoc          on  $projection.FreightCostAllocationDocument = _FrtCostAllocDoc.FreightCostAllocationDocument

  /* Pricing Elements */
  association [0..*] to I_FrtCostAllocItmPrcgElmnt as _FrtCostAllocItmPrcgElmnt on  $projection.FreightCostAllocationDocument = _FrtCostAllocItmPrcgElmnt.FreightCostAllocationDocument
                                                                                and $projection.FrtCostAllocDocumentItem      = _FrtCostAllocItmPrcgElmnt.FrtCostAllocDocumentItem
  /* Extension Association */
  association [1..1] to E_SettlmtMgmtDocItem       as _Extension                on  $projection.FreightCostAllocationDocument = _Extension.SettlmtMgmtDoc
                                                                                and $projection.FrtCostAllocDocumentItem      = _Extension.SettlmtMgmtDocItem
{
       @ObjectModel.foreignKey.association: '_FrtCostAllocDoc'
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocStdVH', element: 'FreightCostAllocationDocument' } }]
       }
  key  FreightCostAllocationDocument,
       @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocItmStdVH', element: 'FrtCostAllocDocumentItem' } }]
       }
  key  FrtCostAllocDocumentItem,
       @ObjectModel.foreignKey.association: '_FrtCostAllocDocCurrency'
       FrtCostAllocDocCurrency,
       PricingDocument,
       PricingDate,
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_ProductStdVH', element: 'Product' } }]
       }
       Product,
       ProductGroup,
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_PlantStdVH', element: 'Plant' } }]
       }
       Plant,
       InventoryValuationType,

       /* Units and Amounts */
       @DefaultAggregation: #SUM
       @Semantics.quantity.unitOfMeasure: 'SettlmtQuantityUnit'
       SettlmtQuantity,
       @ObjectModel.foreignKey.association: '_SettlmtQuantityUnit'
       SettlmtQuantityUnit,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
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
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocItemGrossAmount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocItemNetAmount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocSubtotal1Amount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocSubtotal2Amount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocSubtotal3Amount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocSubtotal4Amount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocSubtotal5Amount,
       @DefaultAggregation: #SUM
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocSubtotal6Amount,
       @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
       FrtCostAllocEffctvItemAmount,
       FrtCostAllocItmStstclPrpty,

       /* Administrative Data */
       @Semantics.user.createdBy: true
       CreatedByUser,
       @Semantics.systemDate.createdAt: true
       CreationDate,
       CreationTime,

       /* Source Document */
       SettlmtSourceDoc,
       SettlmtSourceDocItem,
       SettlmtSourceDocCat,
       SettlmtSourceDocFiscalYear,
       FrtCostAllocItmActivityReason,
       BusinessArea,
       ControllingArea,
       CostCenter,
       ProfitCenter,
       WBSElementInternalID,
       FreightCostAllocationOrder,
       PrcDetnIsIncmplt,

       /* Preceding Document */
       SettlmtPrecdgDoc,
       SettlmtPrecdgDocItem,
       SettlmtPrecdgDocCat,
       SettlmtPrecdgDocFiscalYear,
       FrtCostAllocDocItmCat,

       /* Related Purchasing Document and Item*/
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_PurchasingDocumentStdVH', element: 'PurchasingDocument' } }]
       }
       SettlmtItemReltdPurgDoc,
       SettlmtItemReltdPurgDocItem,
       /* Related Billing Document and Item*/
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_BillingDocumentStdVH', element: 'BillingDocument' } }]
       }
       SettlmtItemReltdBillgDoc,
       SettlmtItemReltdBillgDocItem,
       ServicesRenderedDate,
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
       }
       CompanyCode,
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_GLAccountInCompanyCodeStdVH', element: 'GLAccount' } }]
       }
       GLAccount,
       FiscalYear,

       /* Reference Document*/
       FrtCostAllocRefDocType,
       FrtCostAllocRefDoc,
       FrtCostAllocRefDocFsclYr,
       FrtCostAllocRefDocLgclSyst,
       @Consumption: {
         valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
       }
       FrtCostAllocRefDocCompanyCode,
       FrtCostAllocRefDocItem,
       FrtCostAllocRefDocCat,

       /* Additional Reference Document */
       FrtCostAllocAddlRefDocType,
       FrtCostAllocAddlRefDoc,
       FrtCostAllocAddlRefDocFsclYr,
       FrtCostAllocAddlRefLgclSyst,
       FrtCostAllocAddlRefDocItem,
       FrtCostAllocAddlRefDocCat,
       ProductHierarchy,
       SalesSpcfcProductGroup1,
       SalesSpcfcProductGroup2,
       SalesSpcfcProductGroup3,
       SalesSpcfcProductGroup4,
       SalesSpcfcProductGroup5,

       /* Freight Order */
       _FrtCostAllocRefFreightOrder.FreightOrder as FreightOrder,


       /* Associations */
       _FrtCostAllocDoc,
       _FrtCostAllocItmPrcgElmnt,
       _FrtCostAllocDocCurrency,
       _CreatedByUser,
       _FrtCostAllocItmActivityReason,
       _CompanyCode,
       _GLAccountInCompanyCode,
       _Product,
       _ProductGroup,
       _Plant,
       _InventoryValuationType,
       _SettlmtQuantityUnit,
       _NetPriceQuantityUnit,
       _BaseUnit,
       _ItemWeightUnit,
       _ItemVolumeUnit,
       _FrtCostAllocItmStstclPrpty,
       _BusinessArea,
       _ControllingArea,
       _CostCenter,
       _ProfitCenter,
       _WBSElementBasicData,
       _FrtCostAllocDocItmCat,
       _SettlmtSourceDocCat,
       _SettlmtPrecdgDocCat,
       _SettlmtItemReltdPurgDoc,
       _SettlmtItemReltdBillgDoc,
       _FreightCostAllocationOrder,
       _FrtCostAllocRefDocCompanyCode,
       _FrtCostAllocRefDocCat,
       _FrtCostAllocAddlRefDocCat

}
```
