---
name: I_SEASONTEXT
description: "Season - Text"
app_component: LO-RFM-CA-SE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONTEXT')/$value
semantic_en: "Season - Text"
semantic_vi: "Season - Text — CDS view cơ bản dựa trên rfm_seasons_t."
keywords:
  - "season"
  - "text"
  - "internal"
  - "identifier"
  - "language"
  - "product"
  - "long"
  - "created"
  - "user"
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-CA-SE-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-CA
  - LO-RFM-CA-SE
  - LO-RFM-CA-SE-2CL
  - lob:cross_application components
  - lob:logistics general
---
# I_SEASONTEXT

**Season - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-CA-SE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SeasonInternalIdentifier` | ✓ | |  | `rfm_suid` | `RAW(16)` | Season Internal Unique Identifier |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ProductSeasonText` |  | |  | `text` | `CHAR(20)` | Name of Season, Collection, or Theme |
| `LongText` |  | |  | `long_text` | `CHAR(132)` | Text Line |
| `CreatedByUser` |  | |  | `fsh_createuser` | `CHAR(12)` | User Who Created the Object |
| `CreationDate` |  | |  | `fsh_createdate` | `DATS(8)` | Date on Which the Object Was Created |
| `CreationTime` |  | |  | `fsh_createtime` | `TIMS(6)` | Time at Which the Object Was Created |
| `LastChangedByUser` |  | |  | `fsh_changeuser` | `CHAR(12)` | Last User to Change the Object |
| `LastChangeDate` |  | |  | `fsh_changedate` | `DATS(8)` | Date on Which the Object Was Last Changed |
| `LastChangeTime` |  | |  | `fsh_changetime` | `TIMS(6)` | Time at Which the Object Was Last Changed |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Season` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Season` | `I_SeasonAssignment` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SEASONTEXT')/$value)*

```abap
@VDM: {
  viewType                          : #BASIC,
  lifecycle.contract.type           : #PUBLIC_LOCAL_API
}

@AccessControl.authorizationCheck   : #MANDATORY

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'SeasonInternalIdentifier' ,
  supportedCapabilities            : [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #EXTRACTION_DATA_SOURCE,
                                        #LANGUAGE_DEPENDENT_TEXT
                                       ],
   modelingPattern                  :  #LANGUAGE_DEPENDENT_TEXT,
   usageType: {
     dataClass:      #MASTER,
     serviceQuality: #C,
     sizeCategory:   #M
   }
}
@Analytics.dataExtraction.enabled:true
@Analytics.internalName:#LOCAL

@ObjectModel.sapObjectNodeType.name: 'SeasonText'
 
@Metadata :{
   ignorePropagatedAnnotations      : true,
   allowExtensions                  : true
}
@Search.searchable: true
@EndUserText.label: 'Season - Text'

define view entity I_SeasonText
  as select from rfm_seasons_t
  association [0..1] to I_User             as _CreatedByUser on $projection.CreatedByUser = _CreatedByUser.UserID
  association [0..1] to I_User             as _ChangedByUser on $projection.LastChangedByUser = _ChangedByUser.UserID
  association [0..1] to I_Language         as _Language      on $projection.Language = _Language.Language
  association [1..1] to I_SeasonAssignment as _Season        on $projection.SeasonInternalIdentifier = _Season.SeasonInternalIdentifier

{
  key rfm_suid       as SeasonInternalIdentifier,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras          as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      text           as ProductSeasonText,
      @Semantics.text: true
      long_text      as LongText,
      @Semantics.user.createdBy: true
      fsh_createuser as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      fsh_createdate as CreationDate,
      @Semantics.systemTime.createdAt: true
      fsh_createtime as CreationTime,
      @Semantics.user.lastChangedBy: true
      fsh_changeuser as LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      fsh_changedate as LastChangeDate,
      @Semantics.systemTime.lastChangedAt: true
      fsh_changetime as LastChangeTime,

      /*Associations */

      _CreatedByUser,
      _ChangedByUser,
      _Language,
      _Season
}
```
