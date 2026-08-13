---
name: I_BUSINESSPARTNERROLESTDVH
description: "Business PartnerROLESTDVH"
semantic_vi: "View Business Partner ROLESTDVH cung cấp danh sách các vai trò và danh mục đối tác kinh doanh tiêu chuẩn, có thể được sử dụng để lọc hoặc chọn các vai trò cụ thể trong các giao dịch liên quan đến đối tác kinh doanh."
keywords:
  - "business partner"
  - "vai trò đối tác kinh doanh"
  - "danh mục đối tác kinh doanh"
  - "role"
  - "category"
  - "transaction"
  - "sap"
  - "ap-md-bp"
  - "ekko"
semantic_en: "The Business Partner ROLESTDVH view provides a list of standard business partner roles and categories, which can be used to filter or select specific roles in business partner-related transactions."
app_component: AP-MD-BP
software_component: SAP_BASIS
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - value-help
  - standard-value-help
  - business-partner
  - partner
  - component:AP-MD-BP
  - lob:Other
  - bo:BusinessPartner
---
# I_BUSINESSPARTNERROLESTDVH

**Business PartnerROLESTDVH**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRole` | ✓ | |  |  | `CHAR(6)` | BP Role |
| `RoleCategory` |  | |  |  | `CHAR(6)` | BP Role Category |
| `_BusinessPartnerRoleText` | | ✓ | | | | |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1cdxbOc1sYG
@AbapCatalog.sqlViewName: 'IBPR__VH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP

@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]
@ObjectModel.modelingPattern: #NONE                                     
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER

@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_BusinessPartnerRoleText']

@ClientHandling.algorithm: #SESSION_VARIABLE

@Search.searchable: true

@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Business Partner Role'
@Consumption.ranked: true
define view I_BusinessPartnerRoleStdVH as select from I_BusinessPartnerRole {
  @ObjectModel.text.association: '_BusinessPartnerRoleText'
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.8
  @Search.ranking: #HIGH
  key BusinessPartnerRole,
  @UI.hidden: true
  RoleCategory,
  _BusinessPartnerRoleText
}
//This view does not return the HCM roles excluded below. 
//It is meant for consumption in Fiori apps in the Master Data area which do not allow HCM role creation.
//If you want to use a Value Help for all BP roles, use I_BusinessPartnerRole.
where RoleCategory != 'BUP003'
  and RoleCategory != 'BUP010'
  and RoleCategory != 'BUP011'
  and RoleCategory != 'BBP005'
  and RoleCategory != 'BBP010'
```
