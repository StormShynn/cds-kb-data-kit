---
name: I_SALESORDERBILLINGPLANITEM
description: "Sales OrderBILLINGPLANITEM"
app_component: SD-SLS-SO-2CL
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
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - sales-order
  - billing
  - item-level
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERBILLINGPLANITEM

**Sales OrderBILLINGPLANITEM**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
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
| `SalesOrder` | ✓ | |  | `cast(SalesDocument as vdm_sales_order preserving type)` |  |  |
| `BillingPlan` | ✓ | |  |  |  |  |
| `BillingPlanItem` | ✓ | |  |  |  |  |
| `BillingPlanBillingDate` |  | |  |  |  |  |
| `BillingPlanServiceStartDate` |  | |  |  |  |  |
| `BillingPlanServiceEndDate` |  | |  |  |  |  |
| `BillingPlanAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `BillingBlockReason` |  | |  |  |  |  |
| `BillingPlanRelatedBillgStatus` |  | |  |  |  |  |
| `BillingPlanType` |  | |  |  |  |  |
| `BillingPlanDateCategory` |  | |  |  |  |  |
| `CustomerPaymentTerms` |  | |  |  |  |  |
| `ProposedBillingDocumentType` |  | |  |  |  |  |
| `AdoptingBillingDateID` |  | |  |  |  |  |
| `BillingPlanBillingRule` |  | |  |  |  |  |
| `BillingPlanDateDescriptionCode` |  | |  |  |  |  |
| `BillingPlanMilestoneUsage` |  | |  |  |  |  |
| `BillingPlanAmountPercent` |  | |  |  |  |  |
| `BillgPlnDteCorrectionRfndType` |  | |  |  |  |  |
| `AccountingExchangeRate` |  | |  |  |  |  |
| `PostponementReason` |  | |  |  |  |  |
| `BillingPlanItemUsage` |  | |  |  |  |  |
| `BillingPlanItemDescription` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderBillingPlan` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderBillingPlan` | `I_SalesOrderBillingPlan` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan Item of Sales Order'
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #XL
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_SalesOrderBillingPlanItem
  as select from I_SalesDocumentBillingPlanItem as SalesDocumentBillingPlanItem

  association [1..1] to I_SalesOrder            as _SalesOrder                       on  _SalesOrder.SalesOrder             = $projection.SalesOrder  

  association [1..1] to I_SalesOrderBillingPlan as _SalesOrderBillingPlan            on  _SalesOrderBillingPlan.SalesOrder  = $projection.SalesOrder      
                                                                                     and _SalesOrderBillingPlan.BillingPlan = $projection.BillingPlan     

{
         @ObjectModel.foreignKey.association: '_SalesOrder'
  key    cast(SalesDocument as vdm_sales_order preserving type)      as SalesOrder,

  key    SalesDocumentBillingPlanItem.BillingPlan,
  
  key    SalesDocumentBillingPlanItem.BillingPlanItem,
         
         SalesDocumentBillingPlanItem.BillingPlanBillingDate,
         
         SalesDocumentBillingPlanItem.BillingPlanServiceStartDate,
         
         SalesDocumentBillingPlanItem.BillingPlanServiceEndDate,
         
         @Semantics.amount.currencyCode: 'TransactionCurrency'
         SalesDocumentBillingPlanItem.BillingPlanAmount,
         
         @ObjectModel.foreignKey.association: '_TransactionCurrency'
         SalesDocumentBillingPlanItem.TransactionCurrency,
         
         @ObjectModel.foreignKey.association: '_BillingBlockReason'
         SalesDocumentBillingPlanItem.BillingBlockReason,
         
         @ObjectModel.foreignKey.association: '_BillingPlanRelatedBillgSts'
         SalesDocumentBillingPlanItem.BillingPlanRelatedBillgStatus,
         
         @ObjectModel.foreignKey.association: '_BillingPlanType'
         SalesDocumentBillingPlanItem.BillingPlanType,
         
         @ObjectModel.foreignKey.association: '_BillingPlanDateCategory' 
         SalesDocumentBillingPlanItem.BillingPlanDateCategory,
         
         @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
         SalesDocumentBillingPlanItem.CustomerPaymentTerms,
         
         @ObjectModel.foreignKey.association: '_BillingDocumentType'
         SalesDocumentBillingPlanItem.ProposedBillingDocumentType,
         
         @ObjectModel.foreignKey.association: '_AdoptingBillingDateID'
         SalesDocumentBillingPlanItem.AdoptingBillingDateID,
         
         @ObjectModel.foreignKey.association: '_BillingPlanBillingRule'
         SalesDocumentBillingPlanItem.BillingPlanBillingRule,
         
         @ObjectModel.foreignKey.association: '_BillgPlnDteDescCode'
         SalesDocumentBillingPlanItem.BillingPlanDateDescriptionCode,
         
         @ObjectModel.foreignKey.association: '_BillingPlanMilestoneUsage'
         SalesDocumentBillingPlanItem.BillingPlanMilestoneUsage,
         
         SalesDocumentBillingPlanItem.BillingPlanAmountPercent,
         
         @ObjectModel.foreignKey.association: '_BillgPlnDteCrrtnRfndType'
         SalesDocumentBillingPlanItem.BillgPlnDteCorrectionRfndType,
         
         SalesDocumentBillingPlanItem.AccountingExchangeRate,
         
         SalesDocumentBillingPlanItem.PostponementReason,
         
         @API.element.releaseState:#DEPRECATED
         @ObjectModel.foreignKey.association: '_BillgPlanItemUsage'
         SalesDocumentBillingPlanItem.BillingPlanItemUsage,
         
         SalesDocumentBillingPlanItem.BillingPlanItemDescription,
         
         // For Access control
         @Consumption.hidden: true
         _SalesOrder.SalesOrderType,
         @Consumption.hidden: true
         _SalesOrder.SalesOrganization,
         @Consumption.hidden: true
         _SalesOrder.DistributionChannel,
         @Consumption.hidden: true
         _SalesOrder.OrganizationDivision,

         //Association
         @ObjectModel.association.type: [#TO_COMPOSITION_ROOT]
         _SalesOrder,
         @ObjectModel.association.type: [#TO_COMPOSITION_PARENT]
         _SalesOrderBillingPlan,
         
         SalesDocumentBillingPlanItem._TransactionCurrency,
         SalesDocumentBillingPlanItem._BillingBlockReason,
         SalesDocumentBillingPlanItem._BillingPlanRelatedBillgSts,
         SalesDocumentBillingPlanItem._BillingPlanType,
         SalesDocumentBillingPlanItem._BillingPlanDateCategory,
         SalesDocumentBillingPlanItem._CustomerPaymentTerms,
         SalesDocumentBillingPlanItem._BillingDocumentType,
         SalesDocumentBillingPlanItem._AdoptingBillingDateID,
         SalesDocumentBillingPlanItem._BillingPlanBillingRule,
         SalesDocumentBillingPlanItem._BillgPlnDteDescCode,
         SalesDocumentBillingPlanItem._BillingPlanMilestoneUsage,
         @API.element.releaseState:#DEPRECATED
         SalesDocumentBillingPlanItem._BillgPlanItemUsage,
         SalesDocumentBillingPlanItem._BillgPlnDteCrrtnRfndType
}
where
  SalesDocumentBillingPlanItem._SalesDocument.SDDocumentCategory = 'C';
```
