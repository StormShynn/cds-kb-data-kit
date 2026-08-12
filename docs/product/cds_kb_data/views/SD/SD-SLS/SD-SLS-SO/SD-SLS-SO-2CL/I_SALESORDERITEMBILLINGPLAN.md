---
name: I_SALESORDERITEMBILLINGPLAN
description: "Sales OrderITEMBILLINGPLAN"
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
# I_SALESORDERITEMBILLINGPLAN

**Sales OrderITEMBILLINGPLAN**

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
| `SalesOrderItem` | ✓ | |  | `cast(SalesDocumentItem as sales_order_item preserving type)` |  |  |
| `BillingPlan` | ✓ | |  |  |  |  |
| `BillingPlanCategory` |  | |  |  |  |  |
| `BillingPlanUsageCategory` |  | |  |  |  |  |
| `BillingPlanType` |  | |  |  |  |  |
| `BillingPlanStartDate` |  | |  |  |  |  |
| `BillingPlanStartDateRule` |  | |  |  |  |  |
| `BillingPlanEndDate` |  | |  |  |  |  |
| `BillingPlanEndDateRule` |  | |  |  |  |  |
| `ReferenceBillingPlan` |  | |  |  |  |  |
| `BillingPlanIsInHeader` |  | |  |  |  |  |
| `BillingPlanSearchTerm` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_SlsOrderItemBillingPlanItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [1..1] |
| `_SlsOrderItemBillingPlanItem` | `I_SlsOrderItemBillingPlanItem` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan of Sales Order Item'
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
     sizeCategory:   #L
   },
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_SalesOrderItemBillingPlan
  as select from I_SalesDocItemBillingPlan as SalesDocItemBillingPlan 

  association [1..1] to I_SalesOrder                  as _SalesOrder                  on  _SalesOrder.SalesOrder                      = $projection.SalesOrder 
  association [1..1] to I_SalesOrderItem              as _SalesOrderItem              on  _SalesOrderItem.SalesOrder                  = $projection.SalesOrder      
                                                                                      and _SalesOrderItem.SalesOrderItem              = $projection.SalesOrderItem    

  association [0..*] to I_SlsOrderItemBillingPlanItem as _SlsOrderItemBillingPlanItem on  _SlsOrderItemBillingPlanItem.SalesOrder     = $projection.SalesOrder     
                                                                                      and _SlsOrderItemBillingPlanItem.SalesOrderItem = $projection.SalesOrderItem 

{
        @ObjectModel.foreignKey.association: '_SalesOrder'
  key   cast(SalesDocument as vdm_sales_order preserving type)      as SalesOrder,
  
        @ObjectModel.foreignKey.association: '_SalesOrderItem'
  key   cast(SalesDocumentItem as sales_order_item preserving type) as SalesOrderItem,

  key   SalesDocItemBillingPlan.BillingPlan,
        
        @ObjectModel.foreignKey.association: '_BillingPlanCategory'
        SalesDocItemBillingPlan.BillingPlanCategory,
        
        @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
        SalesDocItemBillingPlan.BillingPlanUsageCategory,
        
        @ObjectModel.foreignKey.association: '_BillingPlanType'
        SalesDocItemBillingPlan.BillingPlanType,
        
        SalesDocItemBillingPlan.BillingPlanStartDate,
        
        @ObjectModel.foreignKey.association: '_StartDateRule'
        SalesDocItemBillingPlan.BillingPlanStartDateRule,
        
        SalesDocItemBillingPlan.BillingPlanEndDate,
        
        @ObjectModel.foreignKey.association: '_EndDateRule'
        SalesDocItemBillingPlan.BillingPlanEndDateRule,
        
        SalesDocItemBillingPlan.ReferenceBillingPlan,
        
        SalesDocItemBillingPlan.BillingPlanIsInHeader,
        
        SalesDocItemBillingPlan.BillingPlanSearchTerm,
        
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
        _SalesOrderItem,
        
        @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
        _SlsOrderItemBillingPlanItem,

        SalesDocItemBillingPlan._BillingPlanCategory,
        SalesDocItemBillingPlan._BillingPlanUsageCategory,
        SalesDocItemBillingPlan._BillingPlanType,
        SalesDocItemBillingPlan._StartDateRule,
        SalesDocItemBillingPlan._EndDateRule
}

where
  SalesDocItemBillingPlan._SalesDocument.SDDocumentCategory = 'C';
```
