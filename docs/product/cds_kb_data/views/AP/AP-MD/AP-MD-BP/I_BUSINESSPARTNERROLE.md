---
name: I_BUSINESSPARTNERROLE
description: "This CDS view retrieves the list of a business partner roles and role categories."
app_component: AP-MD-BP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLE')/$value
semantic_en: "This CDS view retrieves the list of a business partner roles and role categories."
semantic_vi: "Business Partner Role — CDS view giao diện dựa trên tb003."
keywords:
  - "business"
  - "partner"
  - "role"
  - "category"
tags:
  - AP
  - AP-MD
  - AP-MD-BP
  - component:AP-MD-BP
  - interface-view
---
# I_BUSINESSPARTNERROLE

**This CDS view retrieves the list of a business partner roles and role categories.**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartnerRole` | ✓ | |  | `role` | `CHAR(6)` | BP Role |
| `RoleCategory` |  | |  | `rolecategory` | `CHAR(6)` | BP Role Category |
| `_BusinessPartnerRoleText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerRoleText` | `I_BusinessPartnerRoleText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BUSINESSPARTNERROLE')/$value)*

```abap
@EndUserText.label: 'Business Partner Role'
//@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@Analytics: {
 dataCategory: #DIMENSION,
 dataExtraction: {
    enabled: true
        }
  }
@AccessControl.authorizationCheck:  #CHECK 
@AbapCatalog.sqlViewName: 'IBPROLE'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name: 'BusinessPartnerRole'
@ObjectModel.representativeKey: 'BusinessPartnerRole'
@ClientHandling.algorithm : #SESSION_VARIABLE
@Search.searchable: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ,
                           #EXTRACTION_DATA_SOURCE , #ANALYTICAL_DIMENSION ]
@ObjectModel.dataCategory: #VALUE_HELP
define view I_BusinessPartnerRole
  as select from tb003
  association [0..*] to I_BusinessPartnerRoleText as _BusinessPartnerRoleText on $projection.BusinessPartnerRole = _BusinessPartnerRoleText.BusinessPartnerRole
{
      @ObjectModel.text.association: '_BusinessPartnerRoleText'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key tb003.role as BusinessPartnerRole,
      @UI.hidden: true
      tb003.rolecategory as RoleCategory,

      _BusinessPartnerRoleText
} where tb003.xsuppress <> 'X' and tb003.rolecategory <> ''
```
