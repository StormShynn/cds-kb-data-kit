---
name: I_ENGAGEMENTPROJECTSTAGETEXT
description: "This CDS view provides information to answer the following business question: What is the current stage text of an internal or customer project?"
app_component: CA-CPD-SS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGETEXT')/$value
semantic_en: "This CDS view provides information to answer the following business question: What is the current stage text of an internal or customer project?"
semantic_vi: "Stage of Engagement Project – Text — CDS view giao diện dựa trên Stage of Engagement Project – Text."
keywords:
  - "stage"
  - "engagement"
  - "project"
  - "text"
  - "language"
tags:
  - CA
  - bo:businesspartner
  - CA-CPD
  - CA-CPD-SS
  - component:CA-CPD-SS
  - customer
  - interface-view
  - lob:cross_application components
  - project
  - bo:project
---
# I_ENGAGEMENTPROJECTSTAGETEXT

**This CDS view provides information to answer the following business question: What is the current stage text of an internal or customer project?**

| Property | Value |
|---|---|
| App Component | `CA-CPD-SS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EngagementProjectStage` | ✓ | |  | `mp_stg` | `CHAR(4)` | Commercial Project: Stage |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `EngagementProjectStageText` |  | |  | `mp_stg_desc` | `CHAR(40)` | Master Project: Stage Description |
| `_EngagementProjectStage` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EngagementProjectStage` | `I_EngagementProjectStage` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENGAGEMENTPROJECTSTAGETEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'IEPSTAGETEXT'
@EndUserText.label: 'Stage of Engagement Project – Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'EngagementProjectStage'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.buffering.numberOfKeyFields: 000
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {modelingPattern: #LANGUAGE_DEPENDENT_TEXT, 
               supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                       #CDS_MODELING_ASSOCIATION_TARGET,
                                       #CDS_MODELING_DATA_SOURCE,
                                       #SQL_DATA_SOURCE]
}
define view I_EngagementProjectStageText
  as select from /cpd/pwsc_mpstgt
  association [1..1] to I_EngagementProjectStage as _EngagementProjectStage on $projection.EngagementProjectStage = _EngagementProjectStage.EngagementProjectStage
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_EngagementProjectStage'
  key mp_stg      as EngagementProjectStage,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras       as Language,
      @Semantics.text: true
      mp_stg_desc as EngagementProjectStageText,
      _Language,
      _EngagementProjectStage

}
```
