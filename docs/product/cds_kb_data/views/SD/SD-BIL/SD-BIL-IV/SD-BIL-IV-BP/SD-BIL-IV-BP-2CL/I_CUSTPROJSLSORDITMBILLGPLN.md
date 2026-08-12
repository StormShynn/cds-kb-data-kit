---
name: I_CUSTPROJSLSORDITMBILLGPLN
description: "Custprojslsorditmbillgpln"
app_component: SD-BIL-IV-BP-2CL
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
  - SD-BIL
  - SD-BIL-IV
  - interface-view
  - component:SD-BIL-IV-BP-2CL
  - lob:Sales & Distribution
---
# I_CUSTPROJSLSORDITMBILLGPLN

**Custprojslsorditmbillgpln**

| Property | Value |
|---|---|
| App Component | `SD-BIL-IV-BP-2CL` |
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
| `CustomerProject` | ✓ | |  |  |  |  |
| `SalesOrderItem` | ✓ | |  |  |  |  |
| `SalesOrder` |  | |  |  |  |  |
| `BillingPlan` |  | |  | `cast( CustProjSlsOrdItem.BillingPlan as fplnr preserving type )` |  |  |
| `BillingPlanCategory` |  | |  |  |  |  |
| `BillingPlanUsageCategory` |  | |  |  |  |  |
| `SalesOrderType` |  | | `_SalesOrder` | `SalesOrderType` |  |  |
| `OrganizationDivision` |  | | `_SalesOrder` | `OrganizationDivision` |  |  |
| `SalesOrganization` |  | | `_SalesOrder` | `SalesOrganization` |  |  |
| `DistributionChannel` |  | | `_SalesOrder` | `DistributionChannel` |  |  |
| `_CustomerProject` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_BillingPlanCategory` | | ✓ | | | | |
| `_BillingPlanUsageCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerProject` | `I_CustProjSlsOrd` | [1..1] |
| `_SalesOrder` | `I_SalesOrder` | [1..1] |
| `_BillingPlanCategory` | `I_BillingPlanCategory` | [0..1] |
| `_BillingPlanUsageCategory` | `I_BillingPlanUsageCategory` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan of Sales Order Item for Customer Project'
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
define view entity I_CustProjSlsOrdItmBillgPln
  as select from I_CustProjSlsOrdItem    as CustProjSlsOrdItem
      inner join   I_SalesDocItemBillingPlan as BillingPlan on CustProjSlsOrdItem.BillingPlan = BillingPlan.BillingPlan
                                                           and CustProjSlsOrdItem.SalesOrder  = BillingPlan.SalesDocument
                                                           and CustProjSlsOrdItem.SalesOrderItem   = BillingPlan.SalesDocumentItem
  //Association
  association [1..1] to I_CustProjSlsOrd           as _CustomerProject          on $projection.CustomerProject = _CustomerProject.CustomerProject
  association [1..1] to I_SalesOrder               as _SalesOrder               on $projection.SalesOrder = _SalesOrder.SalesOrder
  association [0..1] to I_BillingPlanCategory      as _BillingPlanCategory      on $projection.BillingPlanCategory = _BillingPlanCategory.BillingPlanCategory
  association [0..1] to I_BillingPlanUsageCategory as _BillingPlanUsageCategory on $projection.BillingPlanUsageCategory = _BillingPlanUsageCategory.BillingPlanUsageCategory
{
      @ObjectModel.foreignKey.association: '_CustomerProject'
  key CustProjSlsOrdItem.CustomerProject,
  key CustProjSlsOrdItem.SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesOrder'
      CustProjSlsOrdItem.SalesOrder,
      cast( CustProjSlsOrdItem.BillingPlan as fplnr preserving type ) as BillingPlan,
      @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanCategory'
      @ObjectModel.foreignKey.association: '_BillingPlanCategory'
      BillingPlan.BillingPlanCategory,
      @ObjectModel.sapObjectNodeTypeReference: 'BillingPlanUsageCategory'
      @ObjectModel.foreignKey.association: '_BillingPlanUsageCategory'
      BillingPlan.BillingPlanUsageCategory,

      // For Access control
      @ObjectModel.sapObjectNodeTypeReference: 'SalesOrderType'
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
      _CustomerProject,
      _SalesOrder,
      _BillingPlanCategory,
      _BillingPlanUsageCategory
}
```
