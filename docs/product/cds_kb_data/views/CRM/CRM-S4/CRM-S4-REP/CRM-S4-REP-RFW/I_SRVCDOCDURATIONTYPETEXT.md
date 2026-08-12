---
name: I_SRVCDOCDURATIONTYPETEXT
description: "Service Transaction Duration Type - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPETEXT')/$value
semantic_en: "Service Transaction Duration Type - Text"
semantic_vi: "Service Transaction Duration Type - Text — CDS view cơ bản (transactional data) dựa trên timecudut."
keywords:
  - "service"
  - "transaction"
  - "duration"
  - "type"
  - "text"
  - "srvc"
  - "language"
tags:
  - CRM
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
  - transaction
---
# I_SRVCDOCDURATIONTYPETEXT

**Service Transaction Duration Type - Text**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocDurationType` | ✓ | |  | `name_dura` | `CHAR(12)` | Duration Name |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language Key |
| `SrvcDocDurationTypeText` |  | |  | `text` | `CHAR(40)` | Descriptive Text |
| `_Language` | | ✓ | | | | |
| `_SrvcDocDurationType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SrvcDocDurationType` | `I_SrvcDocDurationType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCDURATIONTYPETEXT')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Service Transaction Duration Type - Text'
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISERVDOCDURATXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel: {
  usageType: {serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL},
  dataCategory: #TEXT,
  representativeKey: 'SrvcDocDurationType'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_SrvcDocDurationTypeText
  as select from timecudut
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  //association [1..*] to I_ServiceDocumentDuration as _SrvcDocDurationType on $projection.SrvcDocDurationType = _SrvcDocDurationType.SrvcDocDurationType  
  association [1..1] to I_SrvcDocDurationType as _SrvcDocDurationType on $projection.SrvcDocDurationType  = _SrvcDocDurationType.SrvcDocDurationType                                                                    
{
  @ObjectModel.foreignKey.association: '_SrvcDocDurationType'
  key name_dura as SrvcDocDurationType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language  as Language,
      @Semantics.text:true
      text      as SrvcDocDurationTypeText,

      //Associations
      _Language,
      _SrvcDocDurationType

}
```
