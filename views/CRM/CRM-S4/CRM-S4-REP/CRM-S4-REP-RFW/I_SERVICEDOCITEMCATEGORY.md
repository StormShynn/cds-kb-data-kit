---
name: I_SERVICEDOCITEMCATEGORY
description: Service DocumentITEMCATEGORY
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - service
  - item-level
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SERVICEDOCITEMCATEGORY

**Service DocumentITEMCATEGORY**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceDocItemCategory` | ✓ | |  | `itm_type` |
| `ServiceObjectType` |  | |  | `object_type` |
| `ItemIsBillingRelevant` |  | | `_ServiceDocItemTypeSlsSttg` | `ItemIsBillingRelevant` |
| `StatusProfile` |  | |  | `user_stat_proc` |
| `SrvcMgmtPrtnDetnProcedure` |  | |  | `part_determ_proc` |
| `_ServiceDocItemCategoryText` | | ✓ | | |
| `_ServiceDocItemTypeSlsSttg` | | ✓ | | |
| `_SrvcMgmtPrtnDetnProcedure` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ServiceDocItemCategoryText` | `I_ServiceDocItemCategoryText` | [1..*] |
| `_ServiceDocItemTypeSlsSttg` | `I_ServiceDocItemTypeSlsSttg` | [0..1] |
| `_SrvcMgmtPrtnDetnProcedure` | `I_SrvcMgmtPrtnDetnProcedure` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Category of Service Transaction Item'
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog:{
  sqlViewName: 'ISERVDOCITMCAT',
  compiler.compareFilter: true ,
  preserveKey: true
 }

@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
      dataCategory: #DIMENSION,
      dataExtraction.enabled: true
}

@VDM.viewType: #BASIC


@ObjectModel:{
  usageType.dataClass: #CUSTOMIZING,
  usageType.serviceQuality: #A ,
  usageType.sizeCategory: #S ,
  representativeKey: 'ServiceDocItemCategory',
  dataCategory: #VALUE_HELP,
  supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET,
  #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY, #EXTRACTION_DATA_SOURCE]
}
@Search.searchable: true
@Consumption.ranked:true

@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
}

//! Code list for the Service Item Category
@ObjectModel.sapObjectNodeType.name: 'ServiceDocumentItemCategory'

define view I_ServiceDocItemCategory
  as select from crmc_item_type
  association [1..*] to I_ServiceDocItemCategoryText as _ServiceDocItemCategoryText on $projection.ServiceDocItemCategory = _ServiceDocItemCategoryText.ServiceDocItemCategory
  association [0..1] to I_ServiceDocItemTypeSlsSttg  as _ServiceDocItemTypeSlsSttg  on $projection.ServiceDocItemCategory = _ServiceDocItemTypeSlsSttg.ServiceDocItemCategory
  association [1..1] to I_SrvcMgmtPrtnDetnProcedure  as _SrvcMgmtPrtnDetnProcedure  on $projection.SrvcMgmtPrtnDetnProcedure = _SrvcMgmtPrtnDetnProcedure.SrvcMgmtPrtnDetnProcedure
  
{
      @ObjectModel.text.association: '_ServiceDocItemCategoryText'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key itm_type          as ServiceDocItemCategory,
      object_type       as ServiceObjectType,
      _ServiceDocItemTypeSlsSttg.ItemIsBillingRelevant,
      user_stat_proc    as StatusProfile,
      @ObjectModel.foreignKey.association: '_SrvcMgmtPrtnDetnProcedure'
      part_determ_proc  as SrvcMgmtPrtnDetnProcedure,

      _ServiceDocItemCategoryText,
      _ServiceDocItemTypeSlsSttg,
      _SrvcMgmtPrtnDetnProcedure
}
```
