---
name: I_PROJECTRESPONSIBLEPERSON
description: "Project Responsible Person"
app_component: PS
software_component: SAPSCORE
release_state: released
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
