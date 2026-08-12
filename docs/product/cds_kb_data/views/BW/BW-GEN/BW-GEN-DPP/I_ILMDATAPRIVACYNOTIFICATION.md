---
name: I_ILMDATAPRIVACYNOTIFICATION
description: "This CDS view provides the prerequisites for answering the following business questions: Do you want to extract the notifications of the personal or application data being archived or deleted or destroyed from the application system?"
app_component: BW-GEN-DPP
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ILMDATAPRIVACYNOTIFICATION')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Do you want to extract the notifications of the personal or application data being archived or deleted or destroyed from the application system?"
semantic_vi: "ILM DPP Notifications: Extraction to BW — CDS view giao diện dựa trên ilm_notif_cont."
keywords:
  - "ilm"
  - "dpp"
  - "notifications:"
  - "extraction"
  - "notification"
  - "notif"
  - "data"
  - "object"
  - "recd"
  - "table"
  - "field"
tags:
  - BW
  - bo:companycode
  - BW-GEN
  - BW-GEN-DPP
  - component:BW-GEN-DPP
  - interface-view
  - notification
---
# I_ILMDATAPRIVACYNOTIFICATION

**This CDS view provides the prerequisites for answering the following business questions: Do you want to extract the notifications of the personal or application data being archived or deleted or destroyed from the application system?**

| Property | Value |
|---|---|
| App Component | `BW-GEN-DPP` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ILMDATAPRIVACYNOTIFICATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ILMNotificationUUID` | ✓ | |  | `guid` | `CHAR(32)` | UUID in Character Format |
| `ILMNotifDataObjectID` | ✓ | |  | `obj_number` | `INT4(10)` | Object Number |
| `ILMNotifDataObjectRecdID` | ✓ | |  | `rec_number` | `INT4(10)` | Record Number |
| `ILMNotificationTable` | ✓ | |  | `tabname` | `CHAR(30)` | Table Name |
| `ILMNotificationField` | ✓ | |  | `fieldname` | `CHAR(30)` | Field Name |
| `ILMObject` | ✓ | |  | `ilm_object` | `CHAR(30)` | ILM Object Name |
| `CDSView` | ✓ | |  | `cdsextractor` | `CHAR(30)` | DD: Name of Structured Object (e.g. Entity, Context) |
| `CDSViewField` | ✓ | |  | `cdsextractor_fld` | `CHAR(30)` | Field Name |
| `ILMNotifCreationDateTime` |  | |  | `notif_tmstmp` | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `ILMNotificationMode` |  | |  | `notif_mode` | `CHAR(2)` | ILM Notification Mode |
| `ILMToSAPBWNotificationMode` |  | |  | `bw_notif_mode` | `CHAR(1)` | Notification Mode |
| `DataBlockingDateTime` |  | |  | `blocking_date` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `DataExpirationDateTime` |  | |  | `expiration_date` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `ILMNotificationFieldValue` |  | |  | `value` |  |  |
| `CDSViewExtractionIsActive` |  | |  | `is_active` | `CHAR(1)` | Generic Extractor Checkbox |
| `SAPBWOperationalDataProvider` |  | |  | `odpname` | `CHAR(30)` | ODP Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ILMDATAPRIVACYNOTIFICATION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ILMDATAPRIVACYNOTIFICATION')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IILMDPNOTIF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'ILM DPP Notifications: Extraction to BW'

@AccessControl.authorizationCheck: #CHECK  //S_ILM_NOTI with ACTVT = 03 
@VDM.viewType: #COMPOSITE  //Basic Views would be created later 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass:#MIXED

@AbapCatalog.buffering.status: #NOT_ALLOWED

@Analytics:{ dataExtraction: { enabled : true  }}
@Analytics.dataExtraction.delta.byElement.name : 'ILMNotifCreationDateTime'

define view I_ILMDataPrivacyNotification
  as select from           ilm_notif_cont
    inner join             ilm_notif_data            on ilm_notif_data.guid = ilm_notif_cont.guid

    inner join             ilmob_ce_c                on ilm_notif_data.ilm_object = ilmob_ce_c.ilm_object
    inner join             ilmob_cefldmap_c          on  ilmob_ce_c.ilm_object    = ilmob_cefldmap_c.ilm_object
                                                     and ilmob_ce_c.cdsextractor  = ilmob_cefldmap_c.cdsextractor
                                                     and ilmob_ce_c.is_active     = 'X'
                                                     and ilm_notif_cont.tabname   = ilmob_cefldmap_c.table_name
                                                     and ilm_notif_cont.fieldname = ilmob_cefldmap_c.field_name
    inner join             ilm_bw_modes              on ilm_notif_data.notif_mode = ilm_bw_modes.ilm_notif_mode
    left outer to one join RSODP_ABAP_CDS_Extraction on ilmob_ce_c.cdsextractor = RSODP_ABAP_CDS_Extraction.strucobjn

{
  key ilm_notif_cont.guid               as ILMNotificationUUID,
  key ilm_notif_cont.obj_number         as ILMNotifDataObjectID,
  key ilm_notif_cont.rec_number         as ILMNotifDataObjectRecdID,
  key ilm_notif_cont.tabname            as ILMNotificationTable,
  key ilm_notif_cont.fieldname          as ILMNotificationField,
  key ilm_notif_data.ilm_object         as ILMObject,
  key ilmob_cefldmap_c.cdsextractor     as CDSView,
  key ilmob_cefldmap_c.cdsextractor_fld as CDSViewField,
      @Semantics.systemDateTime.lastChangedAt:true
      ilm_notif_data.notif_tmstmp       as ILMNotifCreationDateTime,
      ilm_notif_data.notif_mode         as ILMNotificationMode,
      ilm_bw_modes.bw_notif_mode        as ILMToSAPBWNotificationMode,
      ilm_notif_data.blocking_date      as DataBlockingDateTime,
      ilm_notif_data.expiration_date    as DataExpirationDateTime,
      ilm_notif_cont.value              as ILMNotificationFieldValue,
      ilmob_ce_c.is_active              as CDSViewExtractionIsActive,
      RSODP_ABAP_CDS_Extraction.odpname as SAPBWOperationalDataProvider
}
```
