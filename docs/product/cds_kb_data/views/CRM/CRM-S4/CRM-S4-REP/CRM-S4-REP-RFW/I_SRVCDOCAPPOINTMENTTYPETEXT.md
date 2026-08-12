---
name: I_SRVCDOCAPPOINTMENTTYPETEXT
description: "Date Type of Service Transaction - Text"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPETEXT')/$value
semantic_en: "Date Type of Service Transaction - Text"
semantic_vi: "Date Type of Service Transaction - Text — CDS view cơ bản dựa trên scapttxt."
keywords:
  - "date"
  - "type"
  - "service"
  - "transaction"
  - "text"
  - "srvc"
  - "appointment"
  - "language"
  - "code"
tags:
  - CRM
  - bo:purchaseorder
  - component:CRM-S4-REP-RFW
  - CRM-S4
  - CRM-S4-REP
  - CRM-S4-REP-RFW
  - interface-view
  - transaction
---
# I_SRVCDOCAPPOINTMENTTYPETEXT

**Date Type of Service Transaction - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcDocAppointmentType` | ✓ | |  | `appt_type` | `CHAR(12)` | Date Type |
| `LanguageCode` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `SrvcDocAppointmentTypeText` |  | |  | `txt_long` | `CHAR(40)` | Description |
| `_SrvcDocAppointmentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcDocAppointmentType` | `I_SrvcDocAppointmentType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SRVCDOCAPPOINTMENTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Date Type of Service Transaction - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
 @VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog: {
  sqlViewName: 'ISRVDOCDDATXT',
  compiler.compareFilter: true,
  preserveKey: true
}
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
//                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel: {
  usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING },
  dataCategory: #TEXT
}
@ObjectModel.representativeKey: 'SrvcDocAppointmentType'
@Metadata.ignorePropagatedAnnotations: true

define view I_SrvcDocAppointmentTypeText as select from scapttxt
association [1..1] to I_SrvcDocAppointmentType as _SrvcDocAppointmentType on $projection.SrvcDocAppointmentType = _SrvcDocAppointmentType.SrvcDocAppointmentType
association [0..1] to I_Language as _Language on $projection.LanguageCode = _Language.Language
 {
    @ObjectModel.foreignKey.association: '_SrvcDocAppointmentType'
    key appt_type as SrvcDocAppointmentType,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
    key langu as LanguageCode,
        @Semantics.text:true
        txt_long as SrvcDocAppointmentTypeText,
        
        //Associations
      _Language,
      _SrvcDocAppointmentType
}
```
