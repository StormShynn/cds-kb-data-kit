---
name: I_ENGMNTPROJRESOURCETEXT
description: "This CDS view provides descriptions of the resources (roles, additional resources, services, or expenses) that can be planned in a customer or internal project."
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETEXT')/$value
semantic_en: "This CDS view provides descriptions of the resources (roles, additional resources, services, or expenses) that can be planned in a customer or internal project."
semantic_vi: "Resource in Engagement Project - Text — CDS view giao diện dựa trên P_Engagementprojresourcetext."
keywords:
  - "resource"
  - "engagement"
  - "project"
  - "text"
  - "type"
  - "language"
  - "proj"
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
# I_ENGMNTPROJRESOURCETEXT

**This CDS view provides descriptions of the resources (roles, additional resources, services, or expenses) that can be planned in a customer or internal project.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectResourceType` | ✓ | |  |  | `CHAR(4)` |  |
| `EngagementProjectResource` | ✓ | |  |  | `CHAR(40)` | Resource ID |
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `EngagementProjResourceText` |  | |  |  | `CHAR(40)` | Resource Description |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `_EngagementProjectResourceType` | | ✓ | | | | |
| `_EngagementProjectResource` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjectResourceType` | `I_EngmntProjResourceType` | [0..1] |
| `_EngagementProjectResource` | `I_EngagementProjectResource` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGMNTPROJRESOURCETEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPRESCTEXT'
@EndUserText.label: 'Resource in Engagement Project - Text'
@VDM.viewType:#BASIC
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'EngagementProjectResource'
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel: {modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE,
                                       #EXTRACTION_DATA_SOURCE]
}
define view I_EngmntProjResourceText
  as select from P_Engagementprojresourcetext
  association [0..1] to I_EngmntProjResourceType    as _EngagementProjectResourceType on  $projection.EngagementProjectResourceType = _EngagementProjectResourceType.EngagementProjectResourceType
  association [0..1] to I_EngagementProjectResource as _EngagementProjectResource     on  $projection.EngagementProjectResourceType = _EngagementProjectResource.EngagementProjectResourceType
                                                                                      and $projection.EngagementProjectResource     = _EngagementProjectResource.EngagementProjectResource
  association [0..1] to I_Language                  as _Language                      on  $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_EngagementProjectResourceType'
  key P_Engagementprojresourcetext.EngagementProjectResourceType as EngagementProjectResourceType,

      @ObjectModel.foreignKey.association: '_EngagementProjectResource'
  key P_Engagementprojresourcetext.EngagementProjectResource     as EngagementProjectResource,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language : true
  key P_Engagementprojresourcetext.Language                      as Language,
     
      @Semantics.text: true
      P_Engagementprojresourcetext.EngagementProjResourceText    as EngagementProjResourceText,
      
      // As CSLA table we ae selecting from is a DPP relevant table, all the CDS views on top this table must have DCL
      // this field has been added to create DCL for A_EngmntProjResource view which is used in external API
      @Consumption.hidden: true
      ControllingArea,
            
      _EngagementProjectResourceType,
      _EngagementProjectResource,
      _Language
}
```
