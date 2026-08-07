---
name: I_SDBILLINGPLANITEM
description: Sdbillingplanitem
app_component: SD-BIL-IV-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - billing
  - item-level
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_SDBILLINGPLANITEM

**Sdbillingplanitem**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillingPlan` | ✓ | |  |  |
| `BillingPlanItem` | ✓ | |  |  |
| `BillingPlanBillingDate` |  | |  |  |
| `BillingPlanServiceStartDate` |  | |  |  |
| `BillingPlanServiceEndDate` |  | |  |  |
| `BillingPlanAmount` |  | |  |  |
| `TransactionCurrency` |  | |  |  |
| `BillingBlockReason` |  | |  |  |
| `BillingPlanRelatedBillgStatus` |  | |  |  |
| `BillingPlanType` |  | |  |  |
| `BillingPlanDateCategory` |  | |  |  |
| `CustomerPaymentTerms` |  | |  |  |
| `ProposedBillingDocumentType` |  | |  |  |
| `AdoptingBillingDateID` |  | |  |  |
| `BillingPlanBillingRule` |  | |  |  |
| `BillingPlanDateDescriptionCode` |  | |  |  |
| `BillingPlanMilestoneUsage` |  | |  |  |
| `BillingPlanAmountPercent` |  | |  |  |
| `BillgPlnDteCorrectionRfndType` |  | |  |  |
| `AccountingExchangeRate` |  | |  |  |
| `PostponementReason` |  | |  |  |
| `BillingPlanItemUsage` |  | |  |  |
| `BillingPlanItemUsage_2` |  | |  |  |
| `BillingPlanUsageCategory` |  | |  |  |
| `BillingPlanItemDescription` |  | |  |  |
| `EnterpriseProjectMilestoneUUID` |  | |  |  |
| `EnterpriseProjectMilestone` |  | |  |  |
| `_SDBillingPlan` | | ✓ | | |
| `_BillingPlanDateCategory` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDBillingPlan` | `I_SDBillingPlan` | [1..1] |
| `_BillingPlanDateCategory` | `I_BillingPlanDateCategory` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan Item for SD Documents'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #NOT_REQUIRED,
  privilegedAssociations: ['_SDBILLINGPLAN']
}
@ObjectModel: {
   representativeKey: 'BillingPlanItem',
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #B,
     sizeCategory:   #L
   },
  modelingPattern: #ANALYTICAL_DIMENSION
}
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@Analytics: {
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                    table: 'fplt', role: #MAIN,
                    viewElement: ['BillingPlan', 'BillingPlanItem'],
                    tableElement: ['fplnr', 'fpltr']
                }
            ]
        }
    }
 } 
                                               
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'SDBillingPlanItem'

define view entity I_SDBillingPlanItem

  as select from P_BillingPlanItem as Item

  association [1..1] to I_SDBillingPlan           as _SDBillingPlan           on  _SDBillingPlan.BillingPlan = $projection.BillingPlan
  association [0..1] to I_BillingPlanDateCategory as _BillingPlanDateCategory on  _BillingPlanDateCategory.BillingPlanType         = $projection.billingplantype
                                                                              and _BillingPlanDateCategory.BillingPlanDateCategory = $projection.BillingPlanDateCategory
{
      @ObjectModel.foreignKey.association: '_SDBillingPlan'
  key Item.BillingPlan,
  key Item.BillingPlanItem,
      Item.BillingPlanBillingDate,
      Item.BillingPlanServiceStartDate,
      Item.BillingPlanServiceEndDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      Item.BillingPlanAmount,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      Item.TransactionCurrency,
      @ObjectModel.foreignKey.association: '_BillingBlockReason'
      Item.BillingBlockReason,
      @ObjectModel.foreignKey.association: '_BillingPlanRelatedBillgSts'
      Item.BillingPlanRelatedBillgStatus,
      @ObjectModel.foreignKey.association: '_BillingPlanType'
      Item._BillingPlan.BillingPlanType,
      @ObjectModel.foreignKey.association: '_BillingPlanDateCategory'
      Item.BillingPlanDateCategory,
      //      @ObjectModel.foreignKey.association: '_BillingPlanManualDateCode'
      // BillingPlanManualDateCode,
      @ObjectModel.foreignKey.association: '_CustomerPaymentTerms'
      Item.CustomerPaymentTerms,
      @ObjectModel.foreignKey.association: '_BillingDocumentType'
      Item.ProposedBillingDocumentType,
      @ObjectModel.foreignKey.association: '_AdoptingBillingDateID'
      Item.AdoptingBillingDateID,
      @ObjectModel.foreignKey.association: '_BillingPlanBillingRule'
      Item.BillingPlanBillingRule,
      @ObjectModel.foreignKey.association: '_BillgPlnDteDescCode'
      Item.BillingPlanDateDescriptionCode,
      @ObjectModel.foreignKey.association: '_BillingPlanMilestoneUsage'
      Item.BillingPlanMilestoneUsage,
      Item.BillingPlanAmountPercent,
      @ObjectModel.foreignKey.association: '_BillgPlnDteCrrtnRfndType'
      Item.BillgPlnDteCorrectionRfndType,
      Item.AccountingExchangeRate,
      //      fplt.mlstn                                               as ProjectMilestone,
      Item.PostponementReason,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor: 'BillingPlanItemUsage_2'
      @ObjectModel.foreignKey.association: '_BillgPlanItemUsage'
      Item.BillingPlanItemUsage,
      @ObjectModel.foreignKey.association: '_BillgPlanItemUsage_2'
      Item.BillingPlanItemUsage_2,
      @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
      Item.BillingPlanUsageCategory,
      Item.BillingPlanItemDescription,
      //      fplt.fakca                                               as BillgDocDateFactoryCalendar,
      
      //Milestone
      Item.EnterpriseProjectMilestoneUUID,
      Item.EnterpriseProjectMilestone,

      //Associations
      _SDBillingPlan,
      Item._TransactionCurrency,
      Item._BillingBlockReason,
      Item._BillingPlanRelatedBillgSts,
      Item._BillgPlnDteCrrtnRfndType,
      Item._BillingPlan._BillingPlanType,
      _BillingPlanDateCategory,
      Item._CustomerPaymentTerms,
      Item._BillingDocumentType,
      Item._BillgPlnDteDescCode,
      //      _BillingPlanManualDateCode,
      Item._AdoptingBillingDateID,
      Item._BillingPlanBillingRule,
      Item._BillingPlanMilestoneUsage,
      @API.element.releaseState:#DEPRECATED
      @API.element.successor: '_BillgPlanItemUsage_2'
      Item._BillgPlanItemUsage,
      Item._BillgPlanItemUsage_2,
      Item._BillingPlanUsageCategory
}
where
  Item._BillingPlan.BillingPlanCategory = '0'
```
