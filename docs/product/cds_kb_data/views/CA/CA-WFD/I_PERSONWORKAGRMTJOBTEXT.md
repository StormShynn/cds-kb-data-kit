---
name: I_PERSONWORKAGRMTJOBTEXT
description: "This view provides the prerequisites for answering the following business questions: What is the short and long name of Job?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTJOBTEXT')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: What is the short and long name of Job?"
semantic_vi: "Person Work Agreement Jobs with Text — CDS view giao diện dựa trên P_PersonWorkAgrmtJobText."
keywords:
  - "person"
  - "work"
  - "agreement"
  - "jobs"
  - "with"
  - "text"
  - "language"
  - "start"
  - "date"
  - "short"
  - "name"
tags:
  - CA
  - bo:plant
  - CA-WFD
  - component:CA-WFD
  - interface-view
  - lob:cross_application components
  - bo:salesorder
---
# I_PERSONWORKAGRMTJOBTEXT

**This view provides the prerequisites for answering the following business questions: What is the short and long name of Job?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTJOBTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Job` | ✓ | |  |  | `CHAR(128)` | Job Code |
| `Language` | ✓ | |  | `cast( Language as langu preserving type )` | `LANG(1)` | Language Key |
| `StartDate` | ✓ | |  | `cast(StartDate as begdatum )` | `DATS(8)` | Start Date |
| `EndDate` | ✓ | |  | `cast(EndDate as enddatum )` | `DATS(8)` | End Date |
| `JobShortName` |  | |  |  | `CHAR(128)` | Job Code |
| `JobName` |  | |  |  | `CHAR(256)` | Job Title |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTJOBTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTJOBTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRJBTXT'
@VDM.viewType: #BASIC
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'Job'
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Person Work Agreement Jobs with Text'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE]

define view I_PersonWorkAgrmtJobText
///*  
as select from P_PersonWorkAgrmtJobText as jobcodet
  association [0..1] to I_Language as _Language on jobcodet.Language = _Language.Language
{
  key Job,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( Language as langu preserving type ) as Language,
      @Semantics.businessDate.from: true
  key cast(StartDate as begdatum ) as StartDate,
      @Semantics.businessDate.to: true
  key cast(EndDate as enddatum )   as EndDate,
      JobShortName,
      @Semantics.text: true
      JobName,
      _Language
}

//*/
/*//  as select from P_PersonWorkAgrmtJobText
  as select from WFD_TF_PersonWorkAgrmtJobText( p_client : $session.client )
  association [0..1] to I_Language as _Language on WFD_TF_PersonWorkAgrmtJobText.Language = _Language.Language
{
  key Job,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      @Semantics.businessDate.from: true
  key StartDate,
      @Semantics.businessDate.to: true
  key EndDate,
      JobShortName,
      @Semantics.text: true
      JobName,
      _Language
}

*/

//define view I_PersonWorkAgrmtJobText
//  as select from P_PersonWorkAgrmtJobText
//
//{
//  key Job,
//      @Semantics.language: true
//      @ObjectModel.foreignKey.association: '_Language'
//  key Language,
//      @Semantics.businessDate.from: true
//  key StartDate,
//      @Semantics.businessDate.to: true
//  key EndDate,
//      JobShortName,
//      @Semantics.text: true
//      JobName,
//      _Language
//}


//   as select distinct from hrp1000 as HRP1000
//    inner join            t77s0   as systemtable on  grpid = 'PLOGI'
//                                                 and semid = 'PLOGI'
//                                                 and gsval = hrp1000.plvar
//  association [0..1] to I_Language as _Language on hrp1000.langu = _Language.Language
//{
//  key hrp1000.objid as Job,
//      @Semantics.language: true
//      @ObjectModel.foreignKey.association: '_Language'
//  key hrp1000.langu as Language,
//      @Semantics.businessDate.from: true
//  key begda         as StartDate,
//      @Semantics.businessDate.to: true
//  key endda         as EndDate,
//      hrp1000.short as JobShortName,
//      @Semantics.text: true
//      hrp1000.stext as JobName,
//      _Language
//}
//where
//      hrp1000.otype = 'C'
//  and hrp1000.istat = '1'
//
```
