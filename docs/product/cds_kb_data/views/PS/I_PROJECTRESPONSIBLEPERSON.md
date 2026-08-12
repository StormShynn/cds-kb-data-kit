---
name: I_PROJECTRESPONSIBLEPERSON
description: "Project Responsible Person"
app_component: PS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTRESPONSIBLEPERSON')/$value
semantic_en: "Project Responsible Person"
semantic_vi: "Project Responsible Person — CDS view giao diện dựa trên tcj04."
keywords:
  - "project"
  - "responsible"
  - "person"
  - "name"
  - "blocked"
tags:
  - PS
  - bo:project
  - component:PS
  - interface-view
  - project
---
# I_PROJECTRESPONSIBLEPERSON

**Project Responsible Person**

| Property | Value |
|---|---|
| App Component | `PS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTRESPONSIBLEPERSON')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ResponsiblePerson` | ✓ | |  | `vernr` | `NUMC(8)` | Number of the Responsible Person (Project Manager) |
| `ResponsiblePersonName` |  | |  | `verna` | `CHAR(25)` | Name of responsible person (Project manager) |
| `ResponsiblePersonIsBlocked` |  | |  | `blocked` | `CHAR(1)` | Blocked |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTRESPONSIBLEPERSON')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PROJECTRESPONSIBLEPERSON')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPROJRESPPERSON'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@EndUserText.label: 'Project Responsible Person'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]

define view I_ProjectResponsiblePerson
  as select from tcj04
{
      @ObjectModel.text.element: 'ResponsiblePersonName'
  key vernr       as ResponsiblePerson,
      @Semantics.text: true
      verna       as ResponsiblePersonName,
      blocked     as ResponsiblePersonIsBlocked
}
```
