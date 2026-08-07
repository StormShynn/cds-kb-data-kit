---
name: I_SALESORDERBILLINGPLAN
description: Sales OrderBILLINGPLAN
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
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
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERBILLINGPLAN

**Sales OrderBILLINGPLAN**

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
| `BillingPlan` | ✓ | |  |  |  |  |
| `BillingPlanCategory` |  | |  |  |  |  |
| `BillingPlanUsageCategory` |  | |  |  |  |  |
| `BillingPlanType` |  | |  |  |  |  |
| `BillingPlanStartDate` |  | |  |  |  |  |
| `BillingPlanStartDateRule` |  | |  |  |  |  |
| `BillingPlanEndDate` |  | |  |  |  |  |
| `BillingPlanEndDateRule` |  | |  |  |  |  |
| `BillingPlanSearchTerm` |  | |  |  |  |  |
| `ReferenceBillingPlan` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderBillingPlanItem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_SalesOrderBillingPlanItem` | `I_SalesOrderBillingPlanItem` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan of Sales Order'
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

define view entity I_SalesOrderBillingPlan
  as select from I_SalesDocumentBillingPlan as SalesDocumentBillingPlan

  association [1..1] to I_SalesOrder                  as _SalesOrder                  on  _SalesOrder.SalesOrder                      = $projection.SalesOrder   

  association [0..*] to I_SalesOrderBillingPlanItem   as _SalesOrderBillingPlanItem   on  _SalesOrderBillingPlanItem.SalesOrder     = $projection.SalesOrder    

{
        @ObjectModel.foreignKey.association: '_SalesOrder'
  key   cast(SalesDocument as vdm_sales_order preserving type)      as SalesOrder,

  key   SalesDocumentBillingPlan.BillingPlan,
        
        @ObjectModel.foreignKey.association: '_BillingPlanCategory'
        SalesDocumentBillingPlan.BillingPlanCategory,
        
        @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
        SalesDocumentBillingPlan.BillingPlanUsageCategory,
        
        @ObjectModel.foreignKey.association: '_BillingPlanType'
        SalesDocumentBillingPlan.BillingPlanType,
        
        SalesDocumentBillingPlan.BillingPlanStartDate,
        
        @ObjectModel.foreignKey.association: '_StartDateRule'
        SalesDocumentBillingPlan.BillingPlanStartDateRule,
        
        SalesDocumentBillingPlan.BillingPlanEndDate,
        
        @ObjectModel.foreignKey.association: '_EndDateRule'
        SalesDocumentBillingPlan.BillingPlanEndDateRule,
        
        SalesDocumentBillingPlan.BillingPlanSearchTerm,
        
        SalesDocumentBillingPlan.ReferenceBillingPlan,
        
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
        @ObjectModel.association.type: [#TO_COMPOSITION_ROOT,#TO_COMPOSITION_PARENT]
        _SalesOrder,
        
        @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
        _SalesOrderBillingPlanItem,

        SalesDocumentBillingPlan._BillingPlanCategory,
        SalesDocumentBillingPlan._BillingPlanUsageCategory,
        SalesDocumentBillingPlan._BillingPlanType,
        SalesDocumentBillingPlan._StartDateRule,
        SalesDocumentBillingPlan._EndDateRule
}

where
  SalesDocumentBillingPlan._SalesDocument.SDDocumentCategory = 'C';
```
