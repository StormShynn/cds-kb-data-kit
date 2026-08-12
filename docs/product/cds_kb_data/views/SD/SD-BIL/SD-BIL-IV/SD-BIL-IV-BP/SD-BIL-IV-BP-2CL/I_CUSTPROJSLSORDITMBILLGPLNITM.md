---
name: I_CUSTPROJSLSORDITMBILLGPLNITM
description: "Custprojslsorditmbillgplnitm"
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORDITMBILLGPLNITM

**Custprojslsorditmbillgplnitm**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `BillingPlan` | ✓ | |  | `cast( CustProjSlsOrdItmBillgPln.BillingPlan as fplnr preserving type )` |  |  |
| `BillingPlanItem` | ✓ | |  |  |  |  |
| `BillingPlanUsageCategory` |  | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `BillingPlanBillingDate` |  | |  |  |  |  |
| `BillingPlanRelatedBillgStatus` |  | |  |  |  |  |
| `BillgPlnDteCorrectionRfndType` |  | |  |  |  |  |
| `BillingPlanAmount` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `BillingPlanRule` |  | |  | `BillingPlanBillingRule` |  |  |
| `PostponementReason` |  | |  |  |  |  |
| `BillingPlanItemUsage` |  | |  |  |  |  |
| `BillingPlanItemUsage_2` |  | |  |  |  |  |
| `BillingPlanItemDescription` |  | |  |  |  |  |
| `BillingPlanServiceStartDate` |  | |  |  |  |  |
| `BillingPlanServiceEndDate` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_BillingPlanRelatedBillgStatus` | | ✓ | | | | |
| `_BillgPlnDteCorrectionRfndType` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_BillingPlanRule` | | ✓ | | | | |
| `_BillingPlanItemUsage` | | ✓ | | | | |
| `_BillgPlanItemUsage_2` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_BillingPlanRelatedBillgStatus` | `I_BillingPlanRelatedBillgSts` | [0..1] |
| `_BillgPlnDteCorrectionRfndType` | `I_BillgPlnDteCrrtnRfndType` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_BillingPlanRule` | `I_BillingPlanRule` | [0..1] |
| `_BillingPlanItemUsage` | `I_BillgPlanItemUsage` | [0..1] |
| `_BillgPlanItemUsage_2` | `I_BillingPlanItemUsage` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan Item of Sales Order Item for Customer Project'
@VDM: {
  viewType:#COMPOSITE,
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
     sizeCategory:   #L
   }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CustProjSlsOrdItmBillgPlnItm
  as select from I_CustProjSlsOrdItmBillgPln   as CustProjSlsOrdItmBillgPln
    inner join   I_SalesDocItemBillingPlanItem as BillingPlanDueDate on CustProjSlsOrdItmBillgPln.BillingPlan = BillingPlanDueDate.BillingPlan 
                                                                    and CustProjSlsOrdItmBillgPln.SalesOrder  = BillingPlanDueDate.SalesDocument
                                                                    and CustProjSlsOrdItmBillgPln.SalesOrderItem   = BillingPlanDueDate.SalesDocumentItem
  //Association
  association [1..1] to I_SalesOrder                 as _SalesOrder                    on $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_BillingPlanRelatedBillgSts as _BillingPlanRelatedBillgStatus on $projection.BillingPlanRelatedBillgStatus = _BillingPlanRelatedBillgStatus.BillingPlanRelatedBillgStatus
  association [0..1] to I_BillgPlnDteCrrtnRfndType   as _BillgPlnDteCorrectionRfndType on $projection.BillgPlnDteCorrectionRfndType = _BillgPlnDteCorrectionRfndType.BillgPlnDteCorrectionRfndType
  association [0..1] to I_Currency                   as _TransactionCurrency           on $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_BillingPlanRule            as _BillingPlanRule               on $projection.BillingPlanRule = _BillingPlanRule.BillingPlanRule
  association [0..1] to I_BillgPlanItemUsage         as _BillingPlanItemUsage          on $projection.BillingPlanItemUsage = _BillingPlanItemUsage.BillingPlanItemUsage
  association [0..1] to I_BillingPlanItemUsage       as _BillgPlanItemUsage_2          on $projection.BillingPlanItemUsage_2 = _BillgPlanItemUsage_2.BillingPlanItemUsage
                                                                                      and $projection.BillingPlanUsageCategory = _BillgPlanItemUsage_2.BillingPlanUsageCategory
{
      @ObjectModel.foreignKey.association:'_CustomerProject'
  key CustProjSlsOrdItmBillgPln.CustomerProject,
  key CustProjSlsOrdItmBillgPln.SalesOrderItem,
  key cast( CustProjSlsOrdItmBillgPln.BillingPlan as fplnr preserving type ) as BillingPlan,
  key BillingPlanDueDate.BillingPlanItem,
      @Analytics.internalName: #LOCAL
      @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
      CustProjSlsOrdItmBillgPln.BillingPlanUsageCategory,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      CustProjSlsOrdItmBillgPln.SalesOrder,
      BillingPlanDueDate.BillingPlanBillingDate,
      @ObjectModel.foreignKey.association: '_BillingPlanRelatedBillgStatus'
      BillingPlanDueDate.BillingPlanRelatedBillgStatus,
      @ObjectModel.foreignKey.association: '_BillgPlnDteCorrectionRfndType'
      BillingPlanDueDate.BillgPlnDteCorrectionRfndType,
      //Pricing
      @DefaultAggregation: #NONE
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      BillingPlanDueDate.BillingPlanAmount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      BillingPlanDueDate.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_BillingPlanRule'
      BillingPlanDueDate.BillingPlanBillingRule                              as BillingPlanRule,
      BillingPlanDueDate.PostponementReason,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor: 'BillingPlanItemUsage_2'
      @ObjectModel.foreignKey.association: '_BillingPlanItemUsage'
      BillingPlanDueDate.BillingPlanItemUsage,
      @ObjectModel.foreignKey.association: '_BillgPlanItemUsage_2'
      BillingPlanDueDate.BillingPlanItemUsage_2,
      BillingPlanDueDate.BillingPlanItemDescription,
      BillingPlanDueDate.BillingPlanServiceStartDate,
      BillingPlanDueDate.BillingPlanServiceEndDate,

      // For Access control
      @Consumption.hidden: true
      _SalesOrder.SalesOrderType,
      //_SalesOrder.SalesOrderType,
      @Consumption.hidden: true
      _SalesOrder.OrganizationDivision,
      @Consumption.hidden: true
      _SalesOrder.SalesOrganization,
      @Consumption.hidden: true
      _SalesOrder.DistributionChannel,

      //Association
      CustProjSlsOrdItmBillgPln._CustomerProject,
      _SalesOrder,
      _BillingPlanRelatedBillgStatus,
      _BillgPlnDteCorrectionRfndType,
      _TransactionCurrency,
      _BillingPlanRule,
      BillingPlanDueDate._BillingPlanBillingRule,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor: '_BillgPlanItemUsage_2'
      _BillingPlanItemUsage,
      _BillgPlanItemUsage_2,
      CustProjSlsOrdItmBillgPln._BillingPlanUsageCategory
}
```
