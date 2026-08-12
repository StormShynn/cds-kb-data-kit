---
name: I_SLSORDERITEMBILLINGPLANITEM
description: "Slsorderitembillingplanitem"
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - billing
  - item-level
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
---
# I_SLSORDERITEMBILLINGPLANITEM

**Slsorderitembillingplanitem**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  | `cast(SalesDocument as vdm_sales_order preserving type)` |  |  |
| `SalesOrderItem` | ✓ | |  | `cast(SalesDocumentItem as sales_order_item preserving type)` |  |  |
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
| `BillingPlanItemUsage_2` |  | |  |  |  |  |
| `BillingPlanUsageCategory` |  | |  |  |  |  |
| `BillingPlanItemDescription` |  | |  |  |  |  |
| `EnterpriseProjectMilestoneUUID` |  | |  |  |  |  |
| `EnterpriseProjectMilestone` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SalesOrderItemBillingPlan` | | ✓ | | | | |
| `_EntProjMlstnForSOItmBlgPln` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |
| `_SalesOrderItemBillingPlan` | `I_SalesOrderItemBillingPlan` | [1..1] |
| `_EntProjMlstnForSOItmBlgPln` | `I_EntProjMlstnForSOItmBlgPln` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan Item of Sales Order Item'
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

define view entity I_SlsOrderItemBillingPlanItem
  as select from I_SalesDocItemBillingPlanItem as SalesDocItemBillingPlanItem

  association [1..1] to I_SalesOrder                 as _SalesOrder                 on  _SalesOrder.SalesOrder = $projection.SalesOrder
  association [1..1] to I_SalesOrderItem             as _SalesOrderItem             on  _SalesOrderItem.SalesOrder     = $projection.SalesOrder
                                                                                    and _SalesOrderItem.SalesOrderItem = $projection.SalesOrderItem
  association [1..1] to I_SalesOrderItemBillingPlan  as _SalesOrderItemBillingPlan  on  _SalesOrderItemBillingPlan.SalesOrder     = $projection.SalesOrder
                                                                                    and _SalesOrderItemBillingPlan.SalesOrderItem = $projection.SalesOrderItem
                                                                                    and _SalesOrderItemBillingPlan.BillingPlan    = $projection.BillingPlan
  association [0..1] to I_EntProjMlstnForSOItmBlgPln as _EntProjMlstnForSOItmBlgPln on  $projection.EnterpriseProjectMilestoneUUID = _EntProjMlstnForSOItmBlgPln.EnterpriseProjectMilestoneUUID
                                                                                    and $projection.EnterpriseProjectMilestone     = _EntProjMlstnForSOItmBlgPln.EnterpriseProjectMilestone




{
         @ObjectModel.foreignKey.association: '_SalesOrder'
  key    cast(SalesDocument as vdm_sales_order preserving type)      as SalesOrder,

         @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key    cast(SalesDocumentItem as sales_order_item preserving type) as SalesOrderItem,

  key    SalesDocItemBillingPlanItem.BillingPlan,

  key    SalesDocItemBillingPlanItem.BillingPlanItem,

         SalesDocItemBillingPlanItem.BillingPlanBillingDate,

         SalesDocItemBillingPlanItem.BillingPlanServiceStartDate,

         SalesDocItemBillingPlanItem.BillingPlanServiceEndDate,

         @Semantics.amount.currencyCode: 'TransactionCurrency'
         SalesDocItemBillingPlanItem.BillingPlanAmount,

         @ObjectModel.foreignKey.association: '_TransactionCurrency'
         SalesDocItemBillingPlanItem.TransactionCurrency,

         @ObjectModel.foreignKey.association: '_BillingBlockReason'
         SalesDocItemBillingPlanItem.BillingBlockReason,

         @ObjectModel.foreignKey.association: '_BillingPlanRelatedBillgSts'
         SalesDocItemBillingPlanItem.BillingPlanRelatedBillgStatus,

         @ObjectModel.foreignKey.association: '_BillingPlanType'
         SalesDocItemBillingPlanItem.BillingPlanType,

         @ObjectModel.foreignKey.association: '_BillingPlanDateCategory'
         SalesDocItemBillingPlanItem.BillingPlanDateCategory,

         @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
         SalesDocItemBillingPlanItem.CustomerPaymentTerms,

         @ObjectModel.foreignKey.association: '_BillingDocumentType'
         SalesDocItemBillingPlanItem.ProposedBillingDocumentType,

         @ObjectModel.foreignKey.association: '_AdoptingBillingDateID'
         SalesDocItemBillingPlanItem.AdoptingBillingDateID,

         @ObjectModel.foreignKey.association: '_BillingPlanBillingRule'
         SalesDocItemBillingPlanItem.BillingPlanBillingRule,

         @ObjectModel.foreignKey.association: '_BillgPlnDteDescCode'
         SalesDocItemBillingPlanItem.BillingPlanDateDescriptionCode,

         @ObjectModel.foreignKey.association: '_BillingPlanMilestoneUsage'
         SalesDocItemBillingPlanItem.BillingPlanMilestoneUsage,

         SalesDocItemBillingPlanItem.BillingPlanAmountPercent,

         @ObjectModel.foreignKey.association: '_BillgPlnDteCrrtnRfndType'
         SalesDocItemBillingPlanItem.BillgPlnDteCorrectionRfndType,

         SalesDocItemBillingPlanItem.AccountingExchangeRate,

         SalesDocItemBillingPlanItem.PostponementReason,

         @API.element.releaseState:#DEPRECATED
         @API.element.successor: 'BillingPlanItemUsage_2'
         @ObjectModel.foreignKey.association: '_BillgPlanItemUsage'
         SalesDocItemBillingPlanItem.BillingPlanItemUsage,

         @ObjectModel.foreignKey.association: '_BillgPlanItemUsage_2'
         SalesDocItemBillingPlanItem.BillingPlanItemUsage_2,

         @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
         SalesDocItemBillingPlanItem.BillingPlanUsageCategory,

         SalesDocItemBillingPlanItem.BillingPlanItemDescription,

         //Milestone
         SalesDocItemBillingPlanItem.EnterpriseProjectMilestoneUUID,
         SalesDocItemBillingPlanItem.EnterpriseProjectMilestone,

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
         _SalesOrder,
         _SalesOrderItem,
         _SalesOrderItemBillingPlan,
         _EntProjMlstnForSOItmBlgPln,

         SalesDocItemBillingPlanItem._TransactionCurrency,
         SalesDocItemBillingPlanItem._BillingBlockReason,
         SalesDocItemBillingPlanItem._BillingPlanRelatedBillgSts,
         SalesDocItemBillingPlanItem._BillingPlanType,
         SalesDocItemBillingPlanItem._BillingPlanDateCategory,
         SalesDocItemBillingPlanItem._CustomerPaymentTerms,
         SalesDocItemBillingPlanItem._BillingDocumentType,
         SalesDocItemBillingPlanItem._AdoptingBillingDateID,
         SalesDocItemBillingPlanItem._BillingPlanBillingRule,
         SalesDocItemBillingPlanItem._BillgPlnDteDescCode,
         SalesDocItemBillingPlanItem._BillingPlanMilestoneUsage,
         @API.element.releaseState:#DEPRECATED
         @API.element.successor: '_BillgPlanItemUsage_2'
         SalesDocItemBillingPlanItem._BillgPlanItemUsage,
         SalesDocItemBillingPlanItem._BillgPlanItemUsage_2,
         SalesDocItemBillingPlanItem._BillingPlanUsageCategory,
         SalesDocItemBillingPlanItem._BillgPlnDteCrrtnRfndType

}
where
  SalesDocItemBillingPlanItem._SalesDocument.SDDocumentCategory = 'C';
```
