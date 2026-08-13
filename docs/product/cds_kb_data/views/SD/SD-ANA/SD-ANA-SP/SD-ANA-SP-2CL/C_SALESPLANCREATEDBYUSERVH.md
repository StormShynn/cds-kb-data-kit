---
name: C_SALESPLANCREATEDBYUSERVH
description: "Salesplancreatedbyuservh"
semantic_vi: "View CDS Salesplancreatedbyuservh cung cấp thông tin về kế hoạch bán hàng được tạo bởi người dùng cụ thể, bao gồm UUID kế hoạch bán hàng, phiên bản và mô tả người dùng. Nó được sử dụng để xác định và phân tích kế hoạch bán hàng liên quan đến người dùng cụ thể."
keywords:
  - "sales plan"
  - "kế hoạch bán hàng"
  - "created by user"
  - "tạo bởi người dùng"
  - "sales plan uuid"
  - "uuid kế hoạch bán hàng"
  - "sap cds view"
  - "view cds salesplancreatedbyuservh"
  - "sd-ana-sp-2cl"
  - "sales & distribution"
  - "lob: sales & distribution"
  - "consumption-view"
semantic_en: "The Salesplancreatedbyuservh CDS view provides information about sales plans created by specific users, including the sales plan UUID, version, and user description. It is used to identify and analyze sales plans associated with particular users."
app_component: SD-ANA-SP-2CL
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
  - SD-ANA
  - SD-ANA-SP
  - consumption-view
  - value-help
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# C_SALESPLANCREATEDBYUSERVH

**Salesplancreatedbyuservh**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
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
| `SalesPlanUUID` | ✓ | |  |  |  |  |
| `SalesPlan` |  | |  |  |  |  |
| `SalesPlanVersion` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `UserDescription` |  | |  | `cast( _CreatedByUser.UserDescription as sp_username preserving type )` |  |  |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Sales Plan Created By'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'CSLSPLNUSERVH'
@AbapCatalog.dbHints: [{dbSystem: #HDB, hint: 'NO_SUBPLAN_SHARING'}]
@ObjectModel.dataCategory:#VALUE_HELP 
@Search.searchable: true
@Consumption.ranked: true 
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #VALUE_HELP_PROVIDER,
                                      #SEARCHABLE_ENTITY]
define view C_SalesPlanCreatedByUserVH 
  as select from I_SalesPlanTP as SP
{
      @UI.hidden: true
  key SalesPlanUUID,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW      
      SalesPlan,
           
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW      
      SalesPlanVersion,
  
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.text.element: ['UserDescription']
      @Search.ranking: #HIGH       
      CreatedByUser,
      
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Semantics.text:true
      @Search.ranking: #LOW      
      cast( _CreatedByUser.UserDescription as sp_username preserving type )             as UserDescription
}
```
