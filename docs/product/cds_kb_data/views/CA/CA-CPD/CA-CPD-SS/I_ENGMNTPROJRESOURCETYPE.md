---
name: I_ENGMNTPROJRESOURCETYPE
description: "This CDS view provides the prerequisites for answering the following business questions: What are the resource types that I can use to plan customer or internal projects?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPE')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: What are the resource types that I can use to plan customer or internal projects?"
semantic_vi: "Resource Type in Engagement Project — CDS view giao diện dựa trên Resource Type in Engagement Project."
keywords:
  - "resource"
  - "type"
  - "engagement"
  - "project"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - plan
  - project
  - bo:project
---
# I_ENGMNTPROJRESOURCETYPE

**This CDS view provides the prerequisites for answering the following business questions: What are the resource types that I can use to plan customer or internal projects?**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectResourceType` | ✓ | |  | `/cpd/fc_rty.res_type_id` | `CHAR(4)` | Resource Type ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EngmntProjResourceTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETYPE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPRESTYPE'
@EndUserText.label: 'Resource Type in Engagement Project'
@Analytics:{ dataCategory:#DIMENSION , dataExtraction.enabled:true }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'EngagementProjectResourceType'
@VDM.viewType:#BASIC
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name:'EngagementProjectResourceType' 
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #ANALYTICAL_DIMENSION, 
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE]
}
define view I_EngmntProjResourceType
  as select from /cpd/fc_rty
  association [0..*] to I_EngmntProjResourceTypeText as _Text on $projection.EngagementProjectResourceType = _Text.EngagementProjectResourceType
{
      @ObjectModel.text.association: '_Text'
  key /cpd/fc_rty.res_type_id as EngagementProjectResourceType,

      _Text
}
```
