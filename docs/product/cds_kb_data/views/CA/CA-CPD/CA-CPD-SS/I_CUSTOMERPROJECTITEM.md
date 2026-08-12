---
name: I_CUSTOMERPROJECTITEM
description: "This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERPROJECTITEM')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?"
semantic_vi: "Item of Customer Project — CDS view giao diện dựa trên I_EngagementProjectItem."
keywords:
  - "item"
  - "customer"
  - "project"
  - "type"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - interface-view
  - lob:cross_application components
  - order
  - project
  - sales-order
  - customer
---
# I_CUSTOMERPROJECTITEM

**This CDS view provides the prerequisites for answering the following business questions: What is the sales order for a project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERPROJECTITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerProject` | ✓ | |  | `EngagementProject` | `CHAR(40)` | Commercial Project ID |
| `CustomerProjectItemType` | ✓ | |  | `cast(CustomerProjectItem.EngagementProjectItemType as /cpd/ss_cp_itm_type )` | `CHAR(5)` | Customer Project Item Type |
| `CustomerProjectItem` | ✓ | |  | `cast(CustomerProjectItem.EngagementProjectItem as /cpd/ss_cp_item )` | `CHAR(40)` | Customer Project Item |
| `CustomerProjectUUID` |  | |  | `cast(CustomerProjectItem.EngagementProjectUUID as /cpd/cust_db_key preserving type )` | `RAW(16)` | Customer Project UUID |
| `_CustomerProject` | | ✓ | | | | |
| `_EngagementProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustomerProject` | `I_CustomerProject` | [1..1] |
| `_EngagementProject` | `I_EngagementProject` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERPROJECTITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CUSTOMERPROJECTITEM')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICUSTPROJITEM'
@EndUserText.label: 'Item of Customer Project'
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #MIXED
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #SQL_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
define view I_CustomerProjectItem
  as select from I_EngagementProjectItem as CustomerProjectItem

  association [1..1] to I_CustomerProject as _CustomerProject         on $projection.CustomerProject = _CustomerProject.CustomerProject
  association [1..1] to I_EngagementProject as _EngagementProject     on $projection.CustomerProject = _EngagementProject.EngagementProject
{
  key CustomerProjectItem.EngagementProject                                                       as  CustomerProject,
  key cast(CustomerProjectItem.EngagementProjectItemType    as /cpd/ss_cp_itm_type )              as  CustomerProjectItemType,
  key cast(CustomerProjectItem.EngagementProjectItem   as /cpd/ss_cp_item )                       as  CustomerProjectItem,
      cast(CustomerProjectItem.EngagementProjectUUID   as  /cpd/cust_db_key preserving type )     as  CustomerProjectUUID,
      _CustomerProject,
      _EngagementProject

}
```
