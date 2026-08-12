---
name: I_ENGAGEMENTPROJECTRESOURCE
description: "This CDS view provides a list of resources (such as roles, additional resources, services, or expenses) that can be planned in a customer or internal project."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTRESOURCE')/$value
semantic_en: "This CDS view provides a list of resources (such as roles, additional resources, services, or expenses) that can be planned in a customer or internal project."
semantic_vi: "Resource in Engagement Project — CDS view giao diện dựa trên P_EngagementProjectResource."
keywords:
  - "resource"
  - "engagement"
  - "project"
  - "type"
  - "controlling"
  - "area"
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
# I_ENGAGEMENTPROJECTRESOURCE

**This CDS view provides a list of resources (such as roles, additional resources, services, or expenses) that can be planned in a customer or internal project.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTRESOURCE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectResourceType` | ✓ | |  |  | `CHAR(4)` |  |
| `EngagementProjectResource` | ✓ | |  |  | `CHAR(40)` | Resource ID |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `_EngagementProjectResourceType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjectResourceType` | `I_EngmntProjResourceType` | [0..1] |
| `_Text` | `I_EngmntProjResourceText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTRESOURCE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTRESOURCE')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPRESOURCE'
@EndUserText.label: 'Resource in Engagement Project'
@VDM.viewType:#BASIC
@Analytics:{ dataCategory:#DIMENSION , dataExtraction.enabled:true }
@ObjectModel.representativeKey: 'EngagementProjectResource'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.sapObjectNodeType.name:'EngagementProjectResource'
@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #ANALYTICAL_DIMENSION, 
               supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE]
}
define view I_EngagementProjectResource
  as select from P_EngagementProjectResource
  association [0..1] to I_EngmntProjResourceType as _EngagementProjectResourceType on  $projection.EngagementProjectResourceType = _EngagementProjectResourceType.EngagementProjectResourceType
  association [0..*] to I_EngmntProjResourceText as _Text                          on  $projection.EngagementProjectResourceType = _Text.EngagementProjectResourceType
                                                                                   and $projection.EngagementProjectResource     = _Text.EngagementProjectResource
{
       @ObjectModel.foreignKey.association: '_EngagementProjectResourceType'
  key  P_EngagementProjectResource.EngagementProjectResourceType as EngagementProjectResourceType,
       @ObjectModel.text.association: '_Text'
  key  P_EngagementProjectResource.EngagementProjectResource     as EngagementProjectResource,

       // As CSLA table we ae selecting from is a DPP relevant table, all the CDS views on top this table must have DCL
       // this field has been added to create DCL for A_EngmntProjResource view which is used in external API
       @Consumption.hidden: true
       ControllingArea, 
       _EngagementProjectResourceType,
       _Text

}
```
