---
name: I_PERSONWORKAGRMTSTATUSTEXT
description: "This view provides the prerequisites for answering the following business questions: What is text for the work agreement status code 0 and 1?"
app_component: CA-WFD
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUSTEXT')/$value
semantic_en: "This view provides the prerequisites for answering the following business questions: What is text for the work agreement status code 0 and 1?"
semantic_vi: "Person Work Agreement Status with Text — CDS view giao diện dựa trên P_PersonWorkAgrmtStatusText."
keywords:
  - "person"
  - "work"
  - "agreement"
  - "status"
  - "with"
  - "text"
  - "language"
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
# I_PERSONWORKAGRMTSTATUSTEXT

**This view provides the prerequisites for answering the following business questions: What is text for the work agreement status code 0 and 1?**

| Property | Value |
|---|---|
| App Component | `CA-WFD` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUSTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `WorkAgreementStatus` | ✓ | |  |  | `CHAR(1)` | Model S: Employment Status |
| `WorkAgreementStatusName` |  | |  | `cast( WorkAgreementStatusName as val_text preserving type )` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUSTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERSONWORKAGRMTSTATUSTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPERWKAGRSTTXT'
@EndUserText.label: 'Person Work Agreement Status with Text'
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.representativeKey: 'WorkAgreementStatus'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_PersonWorkAgrmtStatusText
  as select from P_PersonWorkAgrmtStatusText as dd07t
  association [0..1] to I_Language as _Language on dd07t.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language as Language,
  key WorkAgreementStatus,
      @Semantics.text
      cast( WorkAgreementStatusName as val_text preserving type ) as WorkAgreementStatusName,
      _Language
}


/*
//    as select from P_PersonWorkAgrmtStatusText
  as select from WFD_TF_PersonWorkStatusText( p_client:$session.client ) as dd07t
  association [0..1] to I_Language as _Language on dd07t.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
  key WorkAgreementStatus,
      @Semantics.text
      WorkAgreementStatusName,
      _Language
}
*/


////define view I_PersonWorkAgrmtStatusText
//  as select from P_PersonWorkAgrmtStatusText
//  association [0..1] to I_Language as _Language on P_PersonWorkAgrmtStatusText.Language = _Language.Language
//{
//      @Semantics.language: true
//      @ObjectModel.foreignKey.association: '_Language'
//  key Language,
//  key WorkAgreementStatus,
//      @Semantics.text
//    WorkAgreementStatusName,
//      _Language
//}

// as select from dd07t
//  association [0..1] to I_Language as _Language on dd07t.ddlanguage = _Language.Language
//{
//      @Semantics.language: true
//      @ObjectModel.foreignKey.association: '_Language'
//  key ddlanguage                                     as Language,
//  key cast (domvalue_l as /shcm/employment_status )  as WorkAgreementStatus,
//      @Semantics.text
//      ddtext                                         as WorkAgreementStatusName,
//      _Language
//}
//where
//      domname  = '/SHCM/EMPLOYMENT_STATUS'
//  and as4local = 'A'
```
